import React from 'react';
import './ChatPage.css';
import NewPrompt from '../../components/NewPrompt/NewPrompt';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import Markdown from 'react-markdown';
import { IKImage } from 'imagekitio-react';

const ChatPage = () => {

    const path = useLocation().pathname;
    const chatId = path.split("/").pop();

    const { isPending, error, data } = useQuery({
        queryKey: ["chat", chatId],
        queryFn: () => 
            fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
                credentials: 'include'
            }).then(res => res.json())
    });

    return (
        <div className="ChatPage">
            <div className="wrapper">
                <div className="chat">
                    {isPending ? <div>Loading...</div> : error ? <div>Something went wrong...</div> : data?.history?.map((message, index) => (
                        <React.Fragment key={index}>
                            {message.image && (
                                <IKImage 
                                    urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
                                    path={message.image}
                                    height={300}
                                    width={400}
                                    transformation={[{ height: 300, width: 400 }]}
                                    loading='lazy'
                                    lqip={{ active: true, quality: 20 }}
                                />
                            )}
                            <div className={message.role === "user" ? "message user" : "message"}>
                                <Markdown>{message.parts[0].text}</Markdown>
                            </div>
                        </React.Fragment>
                    ))}
                    {data && <NewPrompt data = {data} />}
                </div>
            </div>
        </div>
    );
}

export default ChatPage;