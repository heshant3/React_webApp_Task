import React from "react";
import styles from "../../styles/CityOffer/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.BackButton}></div>
        <div className={styles.Text}>Tokyo</div>
        <div className={styles.Empty}></div>
        <div></div>
      </div>
    </>
  );
}
