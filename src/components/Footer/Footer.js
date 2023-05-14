import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const socials = [
    { icon: <FaTwitter className={styles.icon} />, to: "#" },
    { icon: <FaFacebookF className={styles.icon} />, to: "#" },
    { icon: <FaInstagram className={styles.icon} />, to: "#" },
    { icon: <FaGithub className={styles.icon} />, to: "#" },
  ];
  return (
    <section className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.formContainer}>
          <h3 className={styles.title}>Sign up for exclusive offers</h3>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={[styles.input, styles.text].join(" ")}
            />
            <button className={[styles.button, styles.text].join(" ")}>
              Get started
            </button>
          </form>
        </div>{" "}
        <div className={styles.footerBottom}>
          <p className={styles.copyRight}>
            © Copyright 2021, All Rights Reserved
          </p>

          <div className={styles.socialContainer}>
            {socials.map((el, i) => (
              <a
                href={el.to}
                target="_blank"
                rel="noreferrer"
                className={styles.iconContainer}
                key={i}
              >
                {el.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
