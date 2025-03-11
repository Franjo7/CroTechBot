import { Link } from 'react-router-dom';
import './HomePage.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe } from 'react-icons/fa';

const HomePage = () => {

    const [ typingStatus, setTypingStatus ] = useState("human1");

    return (
        <div className="HomePage">
            <img src="/orbital.png" alt="Orbital" className="orbital" />
            <div className="left">
                <h1>CROTECHBOT</h1>
                <h2>Supercharge your creativity and productivity</h2>
                <h3>Automate your workflow and focus on what you do best with the help of AI.</h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot.png" alt="Bot" className="bot" />
                    <div className="chat">
                        <img src= {typingStatus === "human1" ? "/human1.jpeg" : typingStatus === "human2" ? "/human2.jpeg" : "/bot.png"} />
                        <TypeAnimation sequence={[
                            'Can you help me write better emails?', 1500, () => setTypingStatus("bot"),
                            'Absolutely! I can refine your tone, fix grammar, and make them more professional.', 2000, () => setTypingStatus("human2"),
                            'What if I need help with coding?', 1500, () => setTypingStatus("bot"),
                            'No problem! I can debug, suggest improvements, and generate entire functions.', 2000, () => setTypingStatus("human1"),
                            'Do I need to have previous experience with AI?', 1500, () => setTypingStatus("bot"),
                            "Not at all! Just ask a question, and I'll guide you step by step.", 2000, () => setTypingStatus("human2"),
                        ]}
                        wrapper="span"
                        repeat={Infinity}
                        omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="copyright">
                    <Link>© Copyright {new Date().getFullYear()}</Link>
                    <span> | </span>
                    <Link>All Rights Reserved by Franjo Lovrić</Link>
                </div>
                <div className="social-media">
                    <Link to="https://github.com/Franjo7" target="_blank"><FaGithub size={25} /></Link>
                    <Link to="https://www.linkedin.com/in/franjo-lovric" target="_blank"><FaLinkedin size={25} /></Link>
                    <Link to="https://www.instagram.com/franjolovric23" target="_blank"><FaInstagram size={25} /></Link>
                    <Link to="https://franjo-lovric.netlify.app" target="_blank"><FaGlobe size={25} /></Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;