import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState();
  const navItems = [
    {
      navItem: "Home",
      to: "/",
    },
    {
      navItem: "Products",
      to: "/products",
    },
    {
      navItem: "Contact",
      to: "/contact",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <p className={styles.logo}>Furni</p>
        <div className={[styles.navItems, sidebar && styles.sidebar].join(" ")}>
          {navItems.map((el, i) => (
            <NavLink
              to={el.to}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? [styles.navItem, styles.activeNav].join(" ")
                  : styles.navItem
              }
              onClick={() => setSidebar(false)}
            >
              {el.navItem}
            </NavLink>
          ))}
          <div
            className={[styles.iconContainer, styles.close].join(" ")}
            onClick={() => setSidebar(false)}
          >
            {" "}
            <IoMdClose className={styles.icon} />
          </div>
        </div>
        <div className={styles.iconWrapper}>
          <div className={styles.iconContainer}>
            <AiOutlineShoppingCart className={styles.icon} />
          </div>
          <div
            className={[styles.iconContainer, styles.hamburger].join(" ")}
            onClick={() => setSidebar(true)}
          >
            <RxHamburgerMenu className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
