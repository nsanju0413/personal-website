// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import DevProfile from './components/DevProfile';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen'; // Import SplashScreen component

function App() {
    // Replace 'YOUR_API_KEY' and 'YOUR_CHANNEL_ID' with your actual API key and channel ID
    const apiKey = 'AIzaSyBUCP8bKn2aigAGHdahtLT89gecIPgzCcc';
    const channelId = 'UCscSdWvWU0SeKvLRHZRY1hQ';
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state

    useEffect(() => {
        // Simulate loading delay (replace with actual loading logic)
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 5000); // Simulate 2 seconds loading time

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {/* Conditionally render SplashScreen while isLoading is true */}
                {isLoading ? <SplashScreen /> : (
                    <>
                        {/* Render DevProfile component when isLoading is false */}
                        <DevProfile apiKey={apiKey} channelId={channelId} />
                        <Footer />
                    </>
                )}
            </header>
        </div>
    );
}


export default App;
