import React from "react";
import styles from "../styles/CityOffer/CityOffer.module.css";
import Header from "../components/CityOffer/Header";
import Image from "../assets/Tokyo.png";
import OfferCard from "../components/CityOffer/OfferCard";
import Category from "../components/CityOffer/Category";
import Item from "../components/CityOffer/Item";

export default function CityOffer() {
  return (
    <div className={styles.Content}>
      <div className={styles.ImageContainer}>
        <img src={Image} alt="City" className={styles.CityImage} />
      </div>
      <Header />
      <div className={styles.BodyContainer}>
        <div className={styles.Text1}>Special Offers!</div>
        <OfferCard />
        <div className={styles.Text1} style={{ paddingTop: "3em" }}>
          Explore Tokyo’s best category
        </div>
        <Category />
        <Item />
      </div>
    </div>
  );
}
