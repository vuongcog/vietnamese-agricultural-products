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
    <div className="about w-screen h-screen px-10 py-10">
      <div className={styles.container}>
        <div className={styles[`wrapper-title`]}>
          <h1 className="text-[48px]">Welcom To Shree</h1>
          <h2 className="text-[62px]">Vegetables Shop</h2>
          <div className="text-[24px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </div>
          <UserHomeSearch></UserHomeSearch>
          <div className="flex gap-10">
            <button className={styles[`button-contact`]}>Contact Us</button>
            <button className={styles[`button-contact`]}>Vegetable</button>
          </div>
        </div>
        {images.map((image, index) => (
          <Image
            className={styles.picture}
            key={index}
            src={image}
            alt={`Slide ${index}`}
            display={index === currentIndex ? "block" : "none"}
            transition="opacity 0.5s"
          />
        ))}
      </div>
    </div>
  );
}

export default BannerCarousel;
