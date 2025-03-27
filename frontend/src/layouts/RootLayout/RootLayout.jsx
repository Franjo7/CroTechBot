import { Link, Outlet } from 'react-router-dom';
import './RootLayout.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const queryClient = new QueryClient();

const RootLayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <QueryClientProvider client={queryClient}>
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
            </QueryClientProvider>
        </ClerkProvider>
    );
};

export default RootLayout;