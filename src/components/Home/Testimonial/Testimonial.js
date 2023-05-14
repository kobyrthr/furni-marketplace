import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import MySlider from "./Slider/Slider";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>
        What the People Think <span className={styles.aboutUs}>About Us</span>
        <FaQuoteLeft className={styles.quote} />
      </h3>
      <MySlider />
    </section>
  );
};

export default Testimonial;
