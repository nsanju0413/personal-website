import React from 'react';
import YouTubeVideos from './YouTubeVideos';
const Main = () => {
    return (
        <main className="App-main">
            <section className="App-section">
                <h2>About Me</h2>
                <p>
                    Sanjeevlu Buggargani
                </p>
            </section>
            <section className="App-section">
                <h2>YouTube Videos</h2>
                <YouTubeVideos />
            </section>

        </main>
    );
};

export default Main;
