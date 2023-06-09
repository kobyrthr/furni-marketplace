import React from "react";
import styles from "./WeeklyItems.module.css";
import {
  category1,
  category2,
  category3,
  category4,
} from "../../../images/image";

const WeeklyItems = () => {
  const categories = [
    {
      image: category1,
      name: "Couches",
    },
    {
      image: category2,
      name: "Plants",
    },
    {
      image: category3,
      name: "Artwork",
    },
    {
      image: category4,
      name: "Rugs",
    },
  ];
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>100s of New Items Weekly</h3>
      <p className={styles.tagline}>
        Your source for quality Decor below retail
      </p>
      <div className={styles.categoryContainer}>
        {categories.map((el, i) => (
          <div className={styles.category} key={i}>
            <img src={el.image} alt="#" className={styles.image} />
            <p className={styles.name}>{el.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyItems;
