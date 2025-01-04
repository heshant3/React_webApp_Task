import React from "react";
import styles from "../styles/HeaderTop.module.css";
import { FaRegHeart } from "react-icons/fa";

export default function HeaderTop() {
  return (
    <div>
      <div className={styles.Wrapper}>
        <div className={styles.BackButton}></div>
        <div className={styles.Text}>Dessert</div>
        <div className={styles.FavoriteButton}>
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
}
