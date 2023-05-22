import React from "react";
import styles from "./TrendingBrands.module.css";
import { brand, Crate_Barrel,IKEA,Pottery_Barn } from "../../../images/image";

const TrendingBrands = () => {
  const brands = [
    { img: Crate_Barrel, name: "Crate & Barrel" },
    { img: Pottery_Barn, name: "Pottery Barn" },
    { img: IKEA, name: "IKEA" },
  ];
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Trending Brands</h3>
      <div className={styles.brandsContainer}>
        {brands.map((brand, i) => (
          <div className={styles.brands} key={i}>
            <img src={brand.img} alt="" className={styles.image} />
            <p className={styles.name}>{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingBrands;
