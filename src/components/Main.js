import React, { useEffect, useState } from "react";
import "../css/components/Main.css";
import video1 from "../assets/videos/v1.mp4"; // Import the video files
import video2 from "../assets/videos/v2.mp4";
import video3 from "../assets/videos/v3.mp4";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Import navigate for routing

const Main = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const videoSources = [video1, video2, video3];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const currentVideo = document.getElementById("video-player");

    if (!currentVideo) return;

    // Play the current video
    currentVideo.play()
      .then(() => {
        // Add an event listener to detect when the video ends
        currentVideo.onended = () => {
          const nextIndex = (currentVideoIndex + 1) % videoSources.length; // Loop to the next video
          setCurrentVideoIndex(nextIndex);
        };
      })
      .catch((err) => {
        console.error("Error playing video: ", err);
      });

    return () => {
      // Cleanup the event listener when the component unmounts
      currentVideo.onended = null;
    };
  }, [currentVideoIndex, videoSources.length]);

  const handleButtonClick = () => {
    navigate("/contact"); // Navigate to the contact page
  };

  return (
    <div className="video-container">
      {/* Render the current video */}
      <video
        id="video-player"
        className="video"
        src={videoSources[currentVideoIndex]}
        type={
          videoSources[currentVideoIndex].endsWith(".mp4")
            ? "video/mp4"
            : "video/quicktime"
        }
        muted
        autoPlay
        playsInline
        loop={false}
        preload="auto"
      />
      {/* Text Overlay */}
      <div className="video-text-container">
        <div className="video-text">{t("home.header")}</div>
        <div className="video-text-mini">{t("home.services")}</div>
        <button className="video-button" onClick={handleButtonClick}>
          {t("home.book")}
        </button>
      </div>
    </div>
  );
};

export default Main;
