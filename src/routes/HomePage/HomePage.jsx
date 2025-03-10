import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="HomePage">
            <img src="/orbital.png" alt="Orbital" className="orbital" />
            <div className="left">
                <h1>CROTECHBOT</h1>
                <h2>Supercharge your creativity and productivity</h2>
                <h3>Automate your workflow and focus on what you do best by using our AI-powered tool.</h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot.png" alt="Bot" className="bot" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;