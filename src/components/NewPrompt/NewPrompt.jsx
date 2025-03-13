import './NewPrompt.css';
import { useRef, useEffect } from 'react';

const NewPrompt = () => {

    const endRef = useRef(null);
    
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);
    
    return (
        <>
            <div className="endChat" ref={endRef}></div>
                <form className="newForm">
                    <label htmlFor="file">
                        <img src='/attachment.png' alt="attachment" />
                    </label>
                    <input id='file' type="file" multiple={false} hidden accept='image/*' />
                    <input type="text" placeholder="Ask me anything..." />
                    <button>
                        <img src='/arrow.png' alt="arrow" />
                    </button>
                </form>
        </>
    );
}

export default NewPrompt;