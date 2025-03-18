import { IKImage } from 'imagekitio-react';
import Upload from '../Upload/Upload';
import './NewPrompt.css';
import { useRef, useEffect, useState } from 'react';
import model from '../../lib/gemini';
import Markdown from 'react-markdown';

const NewPrompt = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [ image, setImage] = useState({
        isLoading: false,
        error: "",
        databaseData: {}
    });

    const endRef = useRef(null);
    
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, [question, answer, image.databaseData]);

    const add = async (text) => {
        setQuestion(text);
        const result = await model.generateContent(text);
        const response = await result.response;
        setAnswer(response.text());
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
                    <input id='file' type="file" multiple={false} hidden accept='.jpg, .jpeg, .png' />
                    <input type="text" name='text' placeholder="Ask me anything..." />
                    <button>
                        <img src='/arrow.png' alt="arrow" />
                    </button>
                </form>
        </>
    );
}

export default NewPrompt;