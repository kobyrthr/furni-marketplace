import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={styles.wrapper}
      onClick={scrollToTop}
      style={{ opacity: !showButton && 0 }}
    >
      <RiArrowUpSLine className={styles.arrow} />
    </div>
  );
};

export default ScrollToTop;
