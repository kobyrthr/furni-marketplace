import React from "react";
import styles from "./SellWithFurni.module.css";
import { furni } from "../../../images/image";
const SellWithFurni = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sellWithFurni}>
        <img src={furni} alt="#" className={styles.image} />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Sell with Furni</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
          </p>
          <button className={styles.button}>Start Selling</button>
        </div>
      </div>
    </section>
  );
};

export default SellWithFurni;
