import React from "react";
import "./VideoGrid.css";

function VideoGrid(video) {
  video = video.video;
  return (
    <div className="video-display">
      <img src={video.thumbnail} />
      <a href="#">{video.title}</a>
      <p className="views">{video.views} views</p>
      <p className="likes">{video.likes} likes</p>
    </div>
  );
}

export default VideoGrid;
