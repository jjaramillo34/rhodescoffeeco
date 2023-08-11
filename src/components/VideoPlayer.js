import { useState } from "react";
// autoPlay: true,
const VideoPlayer = ({ videoBg, extraClass, dataAnimation }) => {
  const [video, setVideo] = useState(false);
  return (
    <div
      className={`kf-video-item ${extraClass} ${video ? "active" : ""}`}
      data-animate={dataAnimation ? "active" : ""}
      style={{
        backgroundImage: `url(${videoBg})`,
        visibility: "visible",
      }}
    >
      {video && (
        <iframe
          className="js-video-iframe"
          data-src="https://youtube.com/shorts/uRTU4-rfyXo"
          src="images/main_video.mp4"
          allowFullScreen
        />
      )}
      <div
        className="play"
        onClick={() => setVideo(true)}
        style={{ cursor: "pointer" }}
      >
        <i className="fas fa-play" />
      </div>
    </div>
  );
};
export default VideoPlayer;
