import React, { useState } from "react";
import styles from "./Products.module.css";
import { product1, product2, product3 } from "../../images/image";
import SingleProduct from "./SingleProduct/SingleProduct";

const Products = () => {
  const allTab = ["All", "Couches", "Plants", "Office"];
  const [category, setCategory] = useState("All");
  const [activeCategory, setActiveCategory] = useState(0);
  const allProduct = [
    {
      img: product1,
      name: "Home Grey Fabric Sofa",
      price: 240,
      category: "plants",
      type: "New",
      rating: 1000,
    },
    {
      img: product2,
      name: "Article Emil Sofa Grey",
      price: 240,
      category: "couches",
      type: "sold",
      rating: 1000,
    },
    {
      img: product3,
      name: "Round Dining Table",
      price: 240,
      category: "Office",
      type: "sold",
      rating: 1000,
    },
    {
      img: product1,
      name: "Home Grey Fabric Sofa",
      price: 240,
      category: "plants",
      rating: 1000,
    },
    {
      img: product2,
      name: "Article Emil Sofa Grey",
      price: 240,
      category: "couches",
      type: "sold",
      rating: 1000,
    },
    {
      img: product3,
      name: "Round Dining Table",
      price: 240,
      category: "Office",
      type: "New",
      rating: 1000,
    },
    {
      img: product1,
      name: "Home Grey Fabric Sofa",
      price: 240,
      category: "plants",
      rating: 1000,
    },
    {
      img: product2,
      name: "Article Emil Sofa Grey",
      price: 240,
      category: "couches",
      type: "New",
      rating: 1000,
    },
    {
      img: product3,
      name: "Round Dining Table",
      price: 240,
      category: "Office",
      type: "sold",
      rating: 1000,
    },
    {
      img: product1,
      name: "Home Grey Fabric Sofa",
      price: 240,
      category: "plants",
      rating: 1000,
    },
    {
      img: product2,
      name: "Article Emil Sofa Grey",
      price: 240,
      category: "couches",
      rating: 1000,
    },
    {
      img: product3,
      name: "Round Dining Table",
      price: 240,
      category: "Office",
      rating: 1000,
    },
  ];
  const filteredProducts = allProduct.filter((product, i) => {
    if (category.toLocaleLowerCase() === "all") {
      return allProduct;
    } else {
      return (
        product.category.toLocaleLowerCase() === category.toLocaleLowerCase()
      );
    }
  });
  return (
    <div className={styles.wrapper}>
      {" "}
      <h2 className={styles.title}>Products</h2>
      <div className={styles.allTabs}>
        {allTab.map((el, i) => (
          <div
            key={i}
            className={[
              styles.tabContainer,
              activeCategory === i && styles.activeTabContainer,
            ].join(" ")}
            onClick={() => {
              setActiveCategory(i);
              setCategory(el);
            }}
          >
            <span className={styles.tab}>{el}</span>
          </div>
        ))}
      </div>
      <div className={styles.products}>
        {filteredProducts.map((product, id) => (
          <SingleProduct {...product} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
