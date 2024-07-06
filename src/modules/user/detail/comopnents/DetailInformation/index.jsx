import React, { useContext } from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { ContextDetailProduct } from "../../context";
import DetailOrder from "../DetailOrder";
import useProducerDetail from "../../../../../useCustom/user/useProducerDetail";
const DetailInformation = ({ item }) => {
  const { item: itemTemp } = useContext(ContextDetailProduct);
  const { product } = useProducerDetail();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles[`wrapper-img`]}>
          <img src={product[`product_image`]} alt="" />
        </div>
        <div className={styles[`wrapper-message`]}>
          <div className={styles.title}>{product[`product_name`]}</div>
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
      <span>Thông tin : </span>
      <div className={styles.info}>{product[`product_info`]}</div>
      <span>Mô tả : </span>
      <div className={styles.info}>{product[`product_des`]}</div>
    </div>
  );
};
DetailInformation.propTypes = {
  item: PropTypes.object,
};
export default DetailInformation;
