import { IKImage } from 'imagekitio-react';
import Upload from '../Upload/Upload';
import './NewPrompt.css';
import { useRef, useEffect, useState } from 'react';

const NewPrompt = () => {

    const [ image, setImage] = useState({
        isLoading: false,
        error: "",
        databaseData: {}
    });

    const endRef = useRef(null);
    
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
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
            <div className="endChat" ref={endRef}></div>
                <form className="newForm">
                    <Upload setImage={setImage} />
                    <input id='file' type="file" multiple={false} hidden accept='.jpg, .jpeg, .png' />
                    <input type="text" placeholder="Ask me anything..." />
                    <button>
                        <img src='/arrow.png' alt="arrow" />
                    </button>
                </form>
        </>
    );
}

export default NewPrompt;