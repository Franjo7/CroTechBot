import { IKImage } from 'imagekitio-react';
import Upload from '../Upload/Upload';
import './NewPrompt.css';
import { useRef, useEffect, useState } from 'react';
import model from '../../lib/gemini';
import Markdown from 'react-markdown';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const NewPrompt = ({data}) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [image, setImage] = useState({
        isLoading: false,
        error: "",
        databaseData: {},
        aiData: {},
    });

    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "Hello, I need help with my order." }],
            },
            {
                role: "model",
                parts: [{ text: "Sure, I can help you with that." }],
            },
        ],
        generationConfig: {
            // maxOutputTokens: 100
        },
    });

    const endRef = useRef(null);
    const formRef = useRef(null);
    
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, [data, question, answer, image.databaseData]);

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: () => {
            return fetch(`${import.meta.env.VITE_API_URL}/api/chats/${data._id}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    question: question.length ? question : undefined,
                    answer,
                    image: image.databaseData?.filePath || undefined 
                }) 
            }).then(res => res.json());
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["chat", data._id] }).then(() => {
                formRef.current.reset();
                setQuestion("");
                setAnswer("");
                setImage({ isLoading: false, error: "", databaseData: {}, aiData: {} });
            });
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const add = async (text, isInitial) => {
        if(!isInitial) setQuestion(text);

        try {
            const result = await chat.sendMessageStream(Object.entries(image.aiData).length ? [image.aiData, text] : text);
            let accumulatedText = "";
            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                accumulatedText += chunkText;
                setAnswer(accumulatedText);
            }
            mutation.mutate(text);
        } 
        catch (error) {
            console.error(error);
        }
    }  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        if (!text) return;
        add(text, false);
    }

    const hasRun = useRef(false);
    useEffect(() => {
        if(!hasRun.current) {
            if(data?.history?.length === 1) {
                add(data.history[0].parts[0].text, true);
            }
        }
        hasRun.current = true;
    }, []);
    
    return (
        <>
            { image.isLoading && <div className="">Loading...</div> }
            { image.databaseData?.filePath && (
                <IKImage 
                    urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
                    path= {image.databaseData?.filePath}
                    width={300}
                    height={300}
                />
            )}
            {question && <div className="message user">{question}</div>}
            {answer && <div className="message"><Markdown>{answer}</Markdown></div>}
            <div className="endChat" ref={endRef}></div>
                <form className="newForm" onSubmit={handleSubmit} ref={formRef}>
                    <Upload setImage={setImage} />
                    <input id='file' type="file" multiple={false} hidden accept='image/*' />
                    <input type="text" name='text' placeholder="Ask me anything..." autoComplete='off' />
                    <button>
                        <img src='/arrow.png' alt="arrow" />
                    </button>
                </form>
        </>
    );
}

export default NewPrompt;