import React from "react";
import styles from "./HeroSection.module.css";
import { firstProduct, priceTag, secondProduct } from "../../../images/image";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>Your Dream Decor at Your Dream Prices</h1>
      <div className={styles.productContainer}>
        <div className={styles.info}>
          <h4 className={styles.text}>
            Find Daily Deals on well-kept Preowned Furniture
          </h4>
          <span className={styles.text}>+</span>
          <h4 className={styles.text}>
            Professional Delivery and Assembly Available
          </h4>
        </div>
        <div className={styles.imageContainer}>
          <img src={firstProduct} alt="#" className={styles.image} />{" "}
          <img src={priceTag} alt="#" className={styles.priceTag} />
        </div>
        <div className={styles.imageContainer}>
          {" "}
          <img src={secondProduct} alt="#" className={styles.image} />{" "}
          <img src={priceTag} alt="#" className={styles.priceTag} />
        </div>
      </div>
      <button className={styles.button}>Browse Full Collection</button>
    </section>
  );
};

export default HeroSection;
