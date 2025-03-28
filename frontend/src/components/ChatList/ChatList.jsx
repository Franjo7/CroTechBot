import './ChatList.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';

const ChatList = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ["userChats"],
        queryFn: () => 
            fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
                credentials: 'include'
            }).then(res => res.json())
    });

    return (
        <div className="ChatList">
            <span className='title'>DASHBOARD</span>
            <Link to='/dashboard'>Create a new Chat</Link>
            <Link to='/'>Explore CroTechBot</Link>
            <Link to='/'>Contact</Link>
            <hr />
            <span className='title'>RECENT CHATS</span>
            <div className="list">
                {isPending ? <div>Loading...</div> : error ? <div>Something went wrong</div> : data?.map(chat => (
                    <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>{chat.title}</Link>
                ))}
            </div>
            <hr />
            <div className="social-media">
                <Link to="https://github.com/Franjo7" target="_blank"><FaGithub size={20} /></Link>
                <Link to="https://www.linkedin.com/in/franjo-lovric" target="_blank"><FaLinkedin size={20} /></Link>
                <Link to="https://www.instagram.com/franjolovric23" target="_blank"><FaInstagram size={20} /></Link>
                <Link to="https://franjo-lovric.netlify.app" target="_blank"><FaGlobe size={20} /></Link>
            </div>
        </div>
    );
}

export default ChatList;