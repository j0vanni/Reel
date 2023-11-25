import React from "react";
import Navbar from "./Navbar";
import VideoGrid from "./VideoGrid";
import "./Home.css";

const videos = [
  {
    thumbnail: "https://via.placeholder.com/1920x1080",
    title: "Video Title 1",
    views: 1000,
    likes: 500,
  },
  {
    thumbnail: "https://via.placeholder.com/1920x1080",
    title: "Video Title 2",
    views: 2000,
    likes: 1000,
  },
  {
    thumbnail: "https://via.placeholder.com/1920x1080",
    title: "Video Title 1",
    views: 1000,
    likes: 500,
  },
  {
    thumbnail: "https://via.placeholder.com/1920x1080",
    title: "Video Title 2",
    views: 2000,
    likes: 1000,
  },
  {
    thumbnail: "https://via.placeholder.com/1920x1080",
    title: "Video Title 1",
    views: 1000,
    likes: 500,
  },
  {
    thumbnail: "https://via.placeholder.com/1920x1080",
    title: "Video Title 2",
    views: 2000,
    likes: 1000,
  },
  {
    thumbnail: "https://via.placeholder.com/1920x1080",
    title: "Video Title 1",
    views: 1000,
    likes: 500,
  },
  {
    thumbnail: "https://via.placeholder.com/1920x1080",
    title: "Video Title 2",
    views: 2000,
    likes: 1000,
  },
  {
    thumbnail: "https://via.placeholder.com/1920x1080",
    title: "Video Title 1",
    views: 1000,
    likes: 500,
  },
  {
    thumbnail: "https://via.placeholder.com/1920x1080",
    title: "Video Title 2",
    views: 2000,
    likes: 1000,
  },
];

function Home() {
  const screenWidth = window.innerWidth;

  return (
    <div>
      <Navbar />
      <p>Screen Width: {screenWidth}px</p>
      <div className="thumbnail-display">
        {videos.map((video) => (
          <VideoGrid video={video} />
        ))}
      </div>
    </div>
  );
}

export default Home;
