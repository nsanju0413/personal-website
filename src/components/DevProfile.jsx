// src/DevProfile.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube'; // Import YouTube component
import './DevProfile.css'; // Import CSS for styling

const DevProfile = ({ apiKey, channelId }) => {
  const [videos, setVideos] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();

    // Check if the screen width is less than 768px (example threshold for mobile devices)
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, [apiKey, channelId]);

  const renderVideos = () => {
    if (isMobileView) {
      return videos.map(video => (
        <div key={video.id.videoId} className="video-grid-item">
          <YouTube
            videoId={video.id.videoId}
            opts={{
              height: '169',
              width: '300',
              playerVars: {
                autoplay: 0, // Change to 1 if you want autoplay
              },
            }}
          />
        </div>
      ));
    } else {
      return (
        <div className="video-grid">
          {videos.map(video => (
            <div key={video.id.videoId} className="video-grid-item">
              <YouTube
                videoId={video.id.videoId}
                opts={{
                  height: '169',
                  width: '300',
                  playerVars: {
                    autoplay: 0, // Change to 1 if you want autoplay
                  },
                }}
              />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      {renderVideos()}
    </div>
  );
};

export default DevProfile;
