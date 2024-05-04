// SplashScreen.jsx
import React from 'react';
import './SplashScreen.css'; // Import CSS file for splash screen styles

const SplashScreen = () => {
    return (
        <div className="splash-screen">
            {/* Loading animation with S and B letters */}
            <div className="loading-animation">
                <div className="letter">S</div>
                <div className="letter">B</div>
            </div>
            {/* Progress bar for loading indicator */}
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
        </div>
    );
};

export default SplashScreen;
