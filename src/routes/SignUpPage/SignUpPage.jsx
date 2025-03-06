import { SignUp } from '@clerk/clerk-react';
import './SignUpPage.css';

const SignUpPage = () => {
    return (
        <div className="SignUpPage"><SignUp path='/sign-up' /></div>
    );
}

export default SignUpPage;