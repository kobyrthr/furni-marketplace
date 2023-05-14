import React from "react";

import styles from "./SingleSlider.module.css";

const SingleSlider = ({ review, profileImge, name }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{review}</p>
      <div className={styles.userInfo}>
        <img src={profileImge} alt="#" className={styles.user} />
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default SingleSlider;
