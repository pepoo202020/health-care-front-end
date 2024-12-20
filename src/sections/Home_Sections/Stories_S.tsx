"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/styles/stories.css";
import { STORIES, StoryIF } from "@/constants/stories";
import Image from "next/image";

//--------STORIES ACTIONS --------//
//--------STORIES COMPONENTS --------//
// 1- circle contian image
// 2- border contain image
// 3- fill with color with opacity 50%
// 4- while hover the border will move
// 5- video modal when clicked
// 6- video modal will be closed when clicked outside
// 7- video modal will be closed when clicked on close button
// 8- when hover show the name of the person in padge bottom of the story container

//--------STORIES functionalities --------//
// 1- when clicked on the story the video will be played
// 2- display number of stories with respect to screen size
// 3- in the desktop show 8 stories and then will slide automatically

export default function Stories_S() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [storiesPerView, setStoriesPerView] = useState<number>(10);
  const intervalRef = useRef<NodeJS.Timeout>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    startInterval();
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setStoriesPerView(10); //Desktop
      } else if (window.innerWidth >= 768) {
        setStoriesPerView(8); //Tablet
      } else if (window.innerWidth >= 480) {
        setStoriesPerView(4); //Large Mobile
      } else {
        setStoriesPerView(3); //Small Mobile
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      stopInterval();
    };
  }, []);
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % STORIES.length);
    }, 3000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const getVisibleStories = () => {
    const visibleStories = [];
    for (let i = 0; i < storiesPerView; i++) {
      const index = (startIndex + i) % STORIES.length;
      visibleStories.push(STORIES[index]);
    }
    return visibleStories;
  };

  const handleVideoOpen = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    stopInterval();
  };

  const handleVideoClose = () => {
    setSelectedVideo(null);
    startInterval();
  };

  return (
    <div className="stories_main_container">
      <Stories_Container
        stories={getVisibleStories()}
        onMouseEnter={stopInterval}
        onMouseLeave={startInterval}
        onVideoClick={handleVideoOpen}
      />
      {selectedVideo && (
        <Story_Video_Modal
          handleVideoClose={handleVideoClose}
          handleVideoOpen={handleVideoOpen}
          selectedVideo={selectedVideo}
        />
      )}
    </div>
  );
}

interface StoriesContainerProps {
  stories: StoryIF[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onVideoClick: (videoUrl: string) => void;
}

const Stories_Container: React.FC<StoriesContainerProps> = ({
  stories,
  onMouseEnter,
  onMouseLeave,
  onVideoClick,
}) => {
  return (
    <div
      className="stories_container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {stories.map((story, index) => (
        <Story_Container
          key={index}
          story={story}
          onVideoClick={onVideoClick}
        />
      ))}
    </div>
  );
};

interface StoryContainerProps {
  story: StoryIF;
  onVideoClick: (videoUrl: string) => void;
}

const Story_Container: React.FC<StoryContainerProps> = ({
  story,
  onVideoClick,
}) => {
  return (
    <div
      className="story_container"
      onClick={() => onVideoClick(story.video_url)}
    >
      <div className="opacity_contianer"></div>
      <Image
        src={story.image}
        alt="story"
        className="story_image"
        width={120}
        height={120}
      />
    </div>
  );
};

interface StoryVideoModalProps {
  selectedVideo: string;
  handleVideoOpen: (video_url: string) => void;
  handleVideoClose: () => void;
}

const Story_Video_Modal: React.FC<StoryVideoModalProps> = ({
  selectedVideo,
  handleVideoClose,
}) => {
  return (
    <div className="story_video_modal" onClick={handleVideoClose}>
      <div className="modal_content">
        <button className="close_btn" onClick={handleVideoClose}>
          x
        </button>
        <video
          src={selectedVideo}
          autoPlay
          loop
          playsInline
          className="modal_video"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};
