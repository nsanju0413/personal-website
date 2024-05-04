import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import './DevProfile.css';
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS directly



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
            <h1>Page is Under Construction</h1>
            <h4>Connect</h4>
            <div className="social-links">

              <a href="https://github.com/nsanju0413/" target="_blank" rel="noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/nsanju0413" target="_blank" rel="noreferrer">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://dev.to/nsanju0413" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-dev-to"></i>
              </a>
              <a href="https://www.snapchat.com/add/nsanju0413" target="_blank" rel="noreferrer">
                <i className="bx bxl-snapchat"></i>
              </a>
              <a href="https://instagram.com/bsanju2024" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://medium.com/@nsanju0413" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-medium"></i>
              </a>
              <a href="https://www.hackerrank.com/profile/nsanju0413" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-hackerrank"></i>
              </a>
              <a href="https://www.hackerearth.com/@nsanju0131" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-hackerearth"></i>
              </a>
            </div>

          </div>
          <div className="git-profile-container">
            <h5>GitHub Stats</h5>
              <a href="https://github.com/nsanju0413"><img alt="Buggargani's Github Stats"
                                                           src="https://denvercoder1-github-readme-stats.vercel.app/api?username=nsanju0413&show_icons=true&count_private=true&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866"
                                                           height="192px" width="49.5%"/></a>
            <br/>
              <a href="https://github.com/nsanju0413"><img alt="Buggarganis Top Languages"
                                                           src="https://denvercoder1-github-readme-stats.vercel.app/api/top-langs/?username=nsanju0413&langs_count=8&layout=compact&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866"
                                                           height="192px" width="49.5%"/></a>
              <br/>

            <img alt="Buggarganis Top Languages" src="https://github-readme-activity-graph.vercel.app/graph?username=nsanju0413&custom_title=Sanjeevlu%20Buggargani's%20GitHub%20Activity%20Graph&bg_color=0D1117&color=7F3FBF&line=7F3FBF&point=7F3FBF&area_color=FFFFFF&title_color=FFFFFF&area=true"
                 />

          </div>

          <div className="latest-videos">
            <h2>Latest Youtube Videos</h2>
            {renderVideos()}
          </div>
        </div>
      </div>
  );
};

export default DevProfile;
