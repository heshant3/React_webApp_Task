import React from "react";
import styles from "../styles/CityOfferDetail.module.css";
import HeaderTop from "../components/HeaderTop";
import StoryImageSlide from "../components/StoryImageSlide";

export default function CityOfferDetail() {
  return (
    <div className={styles.Container}>
      <StoryImageSlide />
      <HeaderTop />
    </div>
  );
}
