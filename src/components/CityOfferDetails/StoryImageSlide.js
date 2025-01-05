import React from "react";
import styles from "../../styles/CityOfferDetails/StoryImageSlide.module.css";
import StoryImage from "../../assets/Story.png";
import StoryImage1 from "../../assets/OfferImage1.png";
import StoryImage2 from "../../assets/OfferImage2.png";

export default function StoryImageSlide() {
  const imageList = [
    StoryImage,
    StoryImage1,
    StoryImage2,
    StoryImage1,
    StoryImage1,
    StoryImage1,
    StoryImage1,
  ]; // Example with more images
  const displayedImages = imageList.slice(0, 4); // Display only the first 4 images

  return (
    <>
      <div className={styles.Wrapper}>
        <img src={StoryImage} alt="Story" className={styles.StoryImage} />
        <div className={styles.BottomContainer}>
          <div className={styles.Profile}>
            <div className={styles.ProfileImage}></div>
            <div className={styles.Text}>Parfaiteria Bel</div>
          </div>
          <div className={styles.Text2}>
            Enjoy an instant 10% discount on purchases of ¥8,000 with your card.
          </div>
          <div className={styles.ImageContainerBox}>
            {displayedImages.map((image, index) => (
              <div className={styles.ImageBox} key={index}>
                <img
                  src={image}
                  alt={`Story ${index}`}
                  className={styles.ShortImage}
                />
              </div>
            ))}
            <div
              className={styles.ImageBox}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.33)" }}
            >
              {imageList.length > 5 && (
                <div className={styles.TextOverlay}>
                  +{imageList.length - 5}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
