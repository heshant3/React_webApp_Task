import React, { useState } from "react";
import styles from "../../styles/CityOffer/Item.module.css";
import TokyoImage from "../../assets/Tokyo.png";
import KyotoImage from "../../assets/Tokyo.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const items = [
  { image: TokyoImage, text: "Parfaiteria Bel", tags: ["Desserts", "Snacks"] },
  { image: KyotoImage, text: "Kyoto Delight", tags: ["Desserts", "Snacks"] },
  { image: TokyoImage, text: "Parfaiteria", tags: ["Desserts", "Snacks"] },
  { image: KyotoImage, text: "Kyoto Delight", tags: ["Desserts", "Snacks"] },
  { image: KyotoImage, text: "Kyoto Delight", tags: ["Desserts", "Snacks"] },
  { image: KyotoImage, text: "Kyoto Delight", tags: ["Desserts", "Snacks"] },
];

export default function Item() {
  const [favorites, setFavorites] = useState(Array(items.length).fill(false));

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  return (
    <>
      <div className={styles.Container}>
        {items.map((item, index) => (
          <div key={index} className={styles.ItemContainer}>
            <div className={styles.Box}>
              <div className={styles.ImageContainer}>
                <img
                  src={item.image}
                  alt={item.text}
                  className={styles.Image}
                />
              </div>
              <div
                className={styles.FavoriteIcon}
                onClick={() => toggleFavorite(index)}
              >
                {favorites[index] ? (
                  <FaHeart size={20} color="#ff5454" />
                ) : (
                  <FaRegHeart size={20} color="white" />
                )}
              </div>
              <div className={styles.ProfileContainer}>
                <div className={styles.ProfileImage}>
                  <img
                    src={item.image}
                    alt={item.text}
                    className={styles.Image2}
                  />
                </div>
                <div className={styles.Text}>{item.text}</div>
              </div>
            </div>
            <div className={styles.BottomText}>
              Get Instant discounts with card
            </div>
            <div className={styles.TagsContainer}>
              <div className={styles.Tag}>{item.tags[0]}</div>
              <div className={styles.Tag}>{item.tags[1]}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
