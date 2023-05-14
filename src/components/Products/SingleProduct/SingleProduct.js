import React, { useState } from "react";
import styles from "./SingleProduct.module.css";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";

const SingleProduct = ({ img, name, price, type, rating }) => {
  const [like, setLike] = useState(false);
  const transformNumber = (num) => {
    if (num >= 1000 && num < 1000000) {
      const convertedNum = (num / 1000).toFixed(2);
      return parseFloat(convertedNum).toString().replace(/\.0+$/, "") + "k";
    } else if (num >= 1000000 && num < 1000000000) {
      const convertedNum = (num / 1000000).toFixed(2);
      return parseFloat(convertedNum).toString().replace(/\.0+$/, "") + "m";
    } else if (num >= 1000000000) {
      const convertedNum = (num / 1000000000).toFixed(2);
      return parseFloat(convertedNum).toString().replace(/\.0+$/, "") + "b";
    } else {
      return num.toString();
    }
  };
  return (
    <div className={styles.product}>
      <img src={img} alt="#" className={styles.image} />
      <p className={styles.name}>{name}</p>
      <div className={styles.review}>
        <div className={styles.starContainer}>
          <AiFillStar className={styles.star} />{" "}
          <AiFillStar className={styles.star} />{" "}
          <AiFillStar className={styles.star} />{" "}
          <AiFillStar className={styles.star} />{" "}
          <AiFillStar className={styles.star} />{" "}
          <AiFillStar className={styles.star} />
        </div>
        {rating && (
          <p className={styles.reviewText}>
            ( {transformNumber(rating)} Review )
          </p>
        )}
      </div>
      <p className={styles.price}>${price.toFixed(2)}</p>
      <p className={styles.type}>{type}</p>
      <div
        className={styles.likeContainer}
        onClick={() => setLike((prev) => !prev)}
      >
        {like ? (
          <AiFillHeart className={styles.like} />
        ) : (
          <AiOutlineHeart className={styles.like} />
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
