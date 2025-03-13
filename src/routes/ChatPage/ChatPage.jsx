import './ChatPage.css';
import NewPrompt from '../../components/NewPrompt/NewPrompt';

const ChatPage = () => {
    return (
        <div className="ChatPage">
            <div className="wrapper">
                <div className="chat">
                    <div className="message">Hello! I am a chatbot called CroTechBot. How can I help you today?</div> 
                    <div className="message user">Can you help me with my coding assignment? I am stuck on a problem.</div>
                    <NewPrompt />
                </div>
            </div>
        </div>
    );
}

export default ChatPage;