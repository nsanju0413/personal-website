import React, { useState, useEffect } from 'react';
import './YouTubeVideos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import YouTube from 'react-youtube';

const YouTubeVideos = () => {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCscSdWvWU0SeKvLRHZRY1hQ&key=AIzaSyBUCP8bKn2aigAGHdahtLT89gecIPgzCcc&type=video&order=date&maxResults=50`);
            const data = await response.json();
            setVideos(data.items);
        };

        fetchVideos();
    }, []);

    const opts = {
        height: '1080',
        width: '100%', // Adjusted width for responsiveness
        playerVars: {
            autoplay: 0,
        },
    };

    const handleVideoEnd = () => {
        setCurrentVideo(null);
    };

    return (
        <div className="video-grid">
            {videos.map((video, index) => (
                <div key={index} className="video-item">
                    <YouTube
                        videoId={video.id.videoId}
                        opts={opts}
                        onEnd={handleVideoEnd}
                        playing={currentVideo === video.id.videoId}
                        onPlay={() => setCurrentVideo(video.id.videoId)}
                    />
                </div>
            ))}
        </div>
    );
};

export default YouTubeVideos;