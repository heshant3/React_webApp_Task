import React from "react";
import Header from "../components/Home/Header";
import styles from "../styles/Home/Home.module.css";
import StoryView from "../components/Home/StoryView";
import Offer from "../components/Home/Offer";
import SpecialOfferCard from "../components/Home/SpecialOfferCard";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Text1}>Discover you city!</div>
        <div className={styles.Button}>View All</div>
      </div>
      <StoryView />
      <div className={styles.Container}>
        <div className={styles.Text1}>Trending Offer</div>
      </div>
      <Offer />
      <div className={styles.Container}>
        <div className={styles.Text1}>Add card for special offers</div>
      </div>
      <SpecialOfferCard />
    </div>
  );
}
