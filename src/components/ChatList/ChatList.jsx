import './ChatList.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';

const ChatList = () => {
    return (
        <div className="ChatList">
            <span className='title'>DASHBOARD</span>
            <Link to='/dashboard'>Create a new Chat</Link>
            <Link to='/'>Explore CroTechBot</Link>
            <Link to='/'>Contact</Link>
            <hr />
            <span className='title'>RECENT CHATS</span>
            <div className="list">
                <Link to='/'>My chat title</Link>
            </div>
            <hr />
            <div className="social-media">
                <Link to="https://github.com/Franjo7" target="_blank"><FaGithub size={25} /></Link>
                <Link to="https://www.linkedin.com/in/franjo-lovric" target="_blank"><FaLinkedin size={25} /></Link>
                <Link to="https://www.instagram.com/franjolovric23" target="_blank"><FaInstagram size={25} /></Link>
                <Link to="https://franjo-lovric.netlify.app" target="_blank"><FaGlobe size={25} /></Link>
            </div>
        </div>
    );
}

export default ChatList;