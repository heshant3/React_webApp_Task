import React from "react";
import styles from "../../styles/Home/SpecialOfferCard.module.css";
import SpecialOfferImage from "../../assets/SpecialOfferCard.png";

export default function SpecialOfferCard() {
  return (
    <div className={styles.Container}>
      <div className={styles.Card}>
        <div className={styles.TextContainer}>
          <div className={styles.Text1}>Get Special Offers</div>
          <div className={styles.Text2}>
            Many offers waiting for you, get it now
          </div>
          <button className={styles.Button}>Add Card</button>
        </div>
        <div className={styles.ImageContainer}>
          <img src={SpecialOfferImage} alt="Special Offer" />
        </div>
      </div>
    </div>
  );
}
