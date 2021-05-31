import React from "react"

const Video = ({ videoSrcUrl, videoTitle, classes, ...props }) => {
  return (
    <div
      className={`video-responsive ${classes} transform transition-main border border-gray-900`}
    >
      <iframe
        className="video-responsive-item"
        title={videoTitle}
        src={`${videoSrcUrl}?background=1`}
        frameBorder="0"
        allow="autoplay"
      />
    </div>
  )
}

export default Video
