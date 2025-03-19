import { IKImage } from 'imagekitio-react';
import Upload from '../Upload/Upload';
import './NewPrompt.css';
import { useRef, useEffect, useState } from 'react';
import model from '../../lib/gemini';
import Markdown from 'react-markdown';

const NewPrompt = () => {
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
    
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, [question, answer, image.databaseData]);

    const add = async (text) => {
        setQuestion(text);
        const result = await chat.sendMessageStream(Object.entries(image.aiData).length ? [image.aiData, text] : text);
        let accumulatedText = "";
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            accumulatedText += chunkText;
            setAnswer(accumulatedText);
        }
        setImage({ isLoading: false, error: "", databaseData: {}, aiData: {} });
    }  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        if (!text) return;
        add(text);
    }
    
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
                <form className="newForm" onSubmit={handleSubmit}>
                    <Upload setImage={setImage} />
                    <input id='file' type="file" multiple={false} hidden accept='image/*' />
                    <input type="text" name='text' placeholder="Ask me anything..." />
                    <button>
                        <img src='/arrow.png' alt="arrow" />
                    </button>
                </form>
        </>
    );
}

export default NewPrompt;