import React from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import styles from "./Slider.module.css";
import { firstProduct } from "../../../../images/image";
import SingleSlider from "./SingleSlider/SingleSlider";

const MySlider = () => {
  const testimoinals = [
    {
      review:
        "I'm a fan of sustainable shopping and love finding unique pieces with a history. Furni offers an amazing selection of beautifully curated furniture. I found a stunning armchair that perfectly complemented my home decor.",
      profileImge: firstProduct,
      name: "David Nyoman",
    },

    {
      review:
        "Furni is a sustainable shopper's dream! Their curated furniture is exquisite. I found a charming desk that adds character to my workspace. Ordering was easy, and their customer service was exceptional.",
      profileImge: firstProduct,
      name: "Ethan Thompson",
    },
    {
      review:
      "I'm a fan of sustainable shopping and love finding unique pieces with a history. Furni offers an amazing selection of beautifully curated furniture. I found a stunning armchair that perfectly complemented my home decor.",
      profileImge: firstProduct,
      name: "Olivia Parker",
    },
    {
      review:
        "Love Furni's sustainable ethos! The curated furniture selection is amazing. Scored a stunning mid-century dresser that completes my bedroom. Ordering was a breeze, and their customer service was top-notch.",
      profileImge: firstProduct,
      name: "Liam Mitchell",
    },
    {
      review:
      "Furni is a sustainable shopper's dream! Their curated furniture is exquisite. I found a charming desk that adds character to my workspace. Ordering was easy, and their customer service was exceptional.",
      profileImge: firstProduct,
      name: "Ava Reynolds",
    },
    {
      review:
      "Furni is a sustainable shopper's dream! Their curated furniture is exquisite. I found a charming desk that adds character to my workspace. Ordering was easy, and their customer service was exceptional.",
      profileImge: firstProduct,
      name: "Noah Ramirez",
    },
  ];
  const settings = {
    dots: true,

    infinite: false,
    speed: 500,
    slidesToShow: 2.3,

    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={`${styles.mySlide} `}>
      {" "}
      <Slider {...settings}>
        {testimoinals.map((el, i) => (
          <div className={styles.slider} key={i}>
            <SingleSlider {...el} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`${styles.button} ${styles.swiperButtonPrev}  `}
      onClick={onClick}
    >
      <BsChevronLeft />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`${styles.button} ${styles.swiperButtonNext} `}
      onClick={onClick}
    >
      <BsChevronRight />
    </button>
  );
};
