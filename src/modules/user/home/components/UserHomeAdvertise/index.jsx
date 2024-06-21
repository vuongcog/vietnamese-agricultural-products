import React from "react";
import styles from "./styles.module.scss";
import { PICTURE } from "../../../../../constants/picture";
const UserHomeAdvertise = () => {
  return (
    <div className={styles.container}>
      <div className="text-[64px] font-bold">
        FRESH <span className="text-green-700">VEGETABLE</span>
      </div>
      <div className={styles[`container-content`]}>
        <div className={styles.messages}>
          <div className="text-[40px] font-semibold ">Best Vegetables Shop</div>
          <div className="text-[20px]">
            Best Vegetables Shop It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            Content here, content here, making it look like readable English.
            Many desktop publishing packages andIt is a long established fact
            that a reader will be distracted
          </div>
        </div>
        <img className={styles.picture1} src={PICTURE.picture1}></img>
        <img className={styles.picture2} src={PICTURE.picture2}></img>
      </div>
    </div>
  );
};

export default UserHomeAdvertise;
