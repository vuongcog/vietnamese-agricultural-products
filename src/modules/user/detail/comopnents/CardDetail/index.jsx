import React from "react";
import styles from "./styles.module.scss";
const CardDetail = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles[`wrapper-img`]}>
        <img src={item.linkImage} alt="" />
      </div>
      <div className={styles[`wrapper-message`]}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles[`wrapper-statistics`]}>
          <div>{item.rating}</div>
          <div className="text-[rgba(128, 120, 120, 0.7)]">
            <span className="text-black underline font-semibold">
              {item.numberOfReviews}
            </span>{" "}
            Đánh giá
          </div>
          <div className="text-[rgba(128, 120, 120, 0.7)]">
            <span className="text-black font-semibold">
              {item.quantitySold}
            </span>{" "}
            Đã bán
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
