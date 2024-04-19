import React from 'react';
import YouTubeVideos from './YouTubeVideos';
import LinkedInPosts from './LinkedInPosts';
import InstagramPosts from './InstagramPosts';
import GithubProfile from './GithubProfile';
import DevProfile from './DevProfile';
import MediumProfile from './MediumProfile';

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
            <section className="App-section">
                <h2>LinkedIn Posts</h2>
                <LinkedInPosts />
            </section>
            <section className="App-section">
                <h2>Instagram Posts</h2>
                <InstagramPosts />
            </section>
            <section className="App-section">
                <h2>Github Profile</h2>
                <GithubProfile />
            </section>
            <section className="App-section">
                <h2>Dev Profile</h2>
                <DevProfile />
            </section>
            <section className="App-section">
                <h2>Medium Profile</h2>
                <MediumProfile />
            </section>
        </main>
    );
};

export default Main;
