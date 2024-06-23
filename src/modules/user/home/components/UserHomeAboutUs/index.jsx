import React from "react";
import styles from "./styles.module.scss";
import { PICTURE } from "../../../../../constants/picture";

const UserHomeAboutUs = () => {
  return (
    <div className="px-10 py-10">
      <div className={styles.container}>
        <div className={styles.wrapperTitle}>
          <h1 className={`${styles.about} text-center`}>ABOUT US</h1>
          <p id="about" className={styles.paragraph}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using "Content here, content
            here", making it look like readable English. Many desktop publishing
            packages andIt is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using "Content here,
            content here", making it look like readable English. Many
          </p>
          <button className={styles.buttonReadMore} type="button">
            Read More
          </button>
        </div>
        <img src={PICTURE.about} alt="About Us" className={styles.image} />
      </div>
    </div>
  );
};

export default UserHomeAboutUs;
