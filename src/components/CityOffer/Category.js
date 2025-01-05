import React, { useRef } from "react";
import styles from "../../styles/CityOffer/Category.module.css";
import { LuDessert } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { TbPerfume } from "react-icons/tb";

export default function Category() {
  const categories = [
    { icon: <CgMenuGridO />, text: "All" },
    { icon: <LuDessert />, text: "Desserts" },
    { icon: <TbPerfume />, text: "Beauty" },
    { icon: <LuDessert />, text: "Retail" },
    { icon: <LuDessert />, text: "Snacks" },
  ];

  const scrollRef = useRef(null);

  // Drag functionality
  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 2; // Adjust scroll sensitivity
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    const slider = scrollRef.current;
    slider.isDown = false;
  };

  return (
    <div className={styles.Container}>
      <div
        className={styles.CategoryContainer}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {categories.map((category, index) => (
          <div key={index} className={styles.CategoryBox}>
            <div className={styles.CategoryIcon}>{category.icon}</div>
            <div className={styles.CategoryText}>{category.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
