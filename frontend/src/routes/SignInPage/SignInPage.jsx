import { SignIn } from '@clerk/clerk-react';
import './SignInPage.css';

const SignInPage = () => {
    return (
        <div className="SignInPage">
            <SignIn path='/sign-in' signUpUrl='/sign-up' forceRedirectUrl='/dashboard' />
        </div>
    );
}

export default SignInPage;