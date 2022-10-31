import React from "react";
import styles from "./index.module.css";

const HomePage = () => {
  return (
    <div className={styles.HomePageContainer}>
      <div className={styles.HomePage}>
        <div className={styles.texts}>
          <div className={styles.whiteText}>Hello.</div>
          <div className={styles.redText}>I am</div>
          <div className={styles.redText}>Veeresh</div>
        </div>
        <div className={styles.porfilepic}>
          <img className={styles.profilePic} src="" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
