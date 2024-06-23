import { Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { PICTURE } from "../../../../../constants/picture";
import styles from "./styles.module.scss";
import UserHomeSearch from "../UserHomeSearch";
const images = [PICTURE.vegetable, PICTURE.vegetable]; // Danh sách các hình ảnh trong carousel

function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.wrapperTitle}>
          <h1 className={styles.title}>Welcome To Shree</h1>
          <h2 className={styles.subtitle}>Vegetables Shop</h2>
          <div className={styles.description}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </div>
          <UserHomeSearch />
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Contact Us</button>
            <button className={styles.button}>Vegetable</button>
          </div>
        </div>
        {images.map((image, index) => (
          <Image
            className={styles.picture}
            key={index}
            src={image}
            alt={`Slide ${index}`}
            display={index === currentIndex ? "block" : "none"}
            transition="opacity 0.5s ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

export default BannerCarousel;
