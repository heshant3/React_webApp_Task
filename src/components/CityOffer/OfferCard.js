import React, { useState, useRef } from "react";
import styles from "../../styles/CityOffer/OfferCard.module.css";
import OfferCardImage1 from "../../assets/OfferCard.png";
import OfferCardImage2 from "../../assets/OfferCard.png";
import OfferCardImage3 from "../../assets/OfferCard.png";

export default function OfferCard() {
  const images = [OfferCardImage1, OfferCardImage2, OfferCardImage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);

  const sliderRef = useRef(null);

  const handleDragStart = (e) => {
    const startX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    setDragStart(startX);
  };

  const handleDragMove = (e) => {
    if (dragStart !== null) {
      const currentX =
        e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
      const distance = currentX - dragStart;
      setDragDistance(distance);
    }
  };

  const handleDragEnd = () => {
    if (dragDistance > 50 && currentIndex > 0) {
      // Swipe right
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (dragDistance < -50 && currentIndex < images.length - 1) {
      // Swipe left
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    setDragStart(null);
    setDragDistance(0);
  };

  return (
    <div
      className={styles.Container}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div className={styles.Slider} ref={sliderRef}>
        <div
          className={styles.Slide}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${
              dragDistance / 10
            }px))`,
            transition:
              dragStart === null ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Special Offer ${index + 1}`}
              className={styles.Image}
            />
          ))}
        </div>
        <div className={styles.Indicators}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.Indicator} ${
                index === currentIndex ? styles.ActiveIndicator : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
