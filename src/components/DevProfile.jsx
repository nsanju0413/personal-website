import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import './DevProfile.css';

const DevProfile = ({ apiKey, channelId, videoWidth, videoHeight }) => {
  const [videos, setVideos] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=30`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [apiKey, channelId]);

  const renderVideos = () => {
    return (
        <div className={isMobileView ? "video-grid-mobile" : "video-grid"}>
          {videos.map(video => (
              <div key={video.id.videoId} className="video-grid-item">
                <YouTube
                    videoId={video.id.videoId}
                    opts={{
                      height: videoHeight,
                      width: videoWidth,
                      playerVars: {
                        autoplay: 0,
                      },
                    }}
                />
              </div>
          ))}
        </div>
    );
  };

  return (
      <div className="developer-profile">
        <div className="container">
          <div className="developer-info">
            <h2>Sanjeevlu Buggargani</h2>
            <p>Email: buggargs@gmail.com</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/nsanju0413" target="_blank" rel="noreferrer">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/nsanju0413/" target="_blank" rel="noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.snapchat.com/add/nsanju0413" target="_blank" rel="noreferrer">
                <i className="bx bxl-snapchat"></i>
              </a>
            </div>
          </div>

          <div className="latest-videos">
            <h2>Latest Videos</h2>
            {renderVideos()}
          </div>
        </div>
      </div>
  );
};

export default DevProfile;
