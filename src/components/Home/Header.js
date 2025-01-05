import React from "react";
import styles from "../../styles/Home/Header.module.css";
import logo from "../../assets/image.png";
import ProfileImage from "../../assets/ProfileImage.png";

export default function Header() {
  return (
    <>
      <div className={styles.Navbar}>
        <img src={logo} alt="Logo" className={styles.Logo} />
        <div className={styles.Nav}>
          <div className={styles.ProfileData}>
            <div className={styles.ProfileName}>Hi, John Doe</div>
            <div className={styles.ProfileGreeting}>Welcome</div>
          </div>
          <div className={styles.ProfileImage}>
            <img src={ProfileImage} alt="ProfileImage" className={styles.img} />
          </div>
        </div>
      </div>
    </>
  );
}
