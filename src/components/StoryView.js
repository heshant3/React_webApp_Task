import React, { useState, useRef } from "react";
import styles from "../styles/Story.module.css";

const stories = [
  {
    image: "https://via.placeholder.com/150",
    title: "Title 1",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Title 2",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Title 3",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Title 4",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Title 5",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Title 3",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Title 4",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Title 5",
  },
];

export default function StoryView() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  // Handle mouse down event (start drag)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  // Handle mouse move event (while dragging)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up event (end drag)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle mouse leave event (when mouse leaves the container)
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={styles.StoryContainer}
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {stories.map((story, index) => (
        <div key={index} className={styles.Story}>
          <div className={styles.StoryImageContainer}>
            <img
              className={styles.Image}
              src={story.image}
              alt={`StoryImage ${index + 1}`}
            />
          </div>
          <div className={styles.StoryData}>
            <div className={styles.Title}>{story.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
