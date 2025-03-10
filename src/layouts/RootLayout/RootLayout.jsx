import { Link, Outlet } from 'react-router-dom';
import './RootLayout.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { SignedIn, UserButton } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <div className="RootLayout">
                <header>
                    <Link to="/" className="Logo">
                        <img src="/bot.png" alt="logo" />
                        <span>CROTECHBOT</span>
                    </Link>
                    <div className="User">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </ClerkProvider>
    );
};

export default RootLayout;