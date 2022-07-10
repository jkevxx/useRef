import React, { useRef, useState } from "react";

const MediaPlayerApp = () => {
  const videoRef = useRef();
  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = () => {
    // console.log(videoRef.current);
    const video = videoRef.current;

    isPlay ? video.pause() : video.play();
    setIsPlay(!isPlay);
    // video.play();
  };

  return (
    <div>
      <video width="400" ref={videoRef} onClick={handlePlay}>
        <source src="video/planet.mp4" type="video/mp4" />
      </video>
      <button onClick={handlePlay}>{isPlay ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MediaPlayerApp;
