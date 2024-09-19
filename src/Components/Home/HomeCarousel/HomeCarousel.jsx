import React, { useEffect, useState, useRef } from 'react';
import './HomeCarousel.css'

const HomeCarousel = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      setTimeout(() => {
        videoElement.play();
      }, 100);  // Small delay to ensure resources are loaded
    }
  }, []);

  return (

    <div className="homvideo-container">
      <video
        ref={videoRef}
        className="homvideo"
        muted
        loop
        playsInline
        preload="metadata"
        src="/Carvideo1.webm"
      ></video>

    </div>

  )
}

export default HomeCarousel
