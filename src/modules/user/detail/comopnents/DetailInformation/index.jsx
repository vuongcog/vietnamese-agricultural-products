import React, { useContext } from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { ContextDetailProduct } from "../../context";
import DetailOrder from "../DetailOrder";
const DetailInformation = ({ item }) => {
  const { item: itemTemp } = useContext(ContextDetailProduct);
  return (
    <div className={styles.container}>
      <div className={styles[`wrapper-img`]}>
        <img src={item.linkImage} alt="" />
      </div>
      <div className={styles[`wrapper-message`]}>
        <div className={styles.title}>
          {itemTemp && itemTemp[`post code`]} - {item.title}
        </div>
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
        <DetailOrder></DetailOrder>
      </div>
    </div>
  );
};
DetailInformation.propTypes = {
  item: PropTypes.object,
};
export default DetailInformation;
