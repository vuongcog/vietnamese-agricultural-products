import React from "react";
import DetailProvider from "../context";
import itemDetail from "../../../../constants/item-detail";
import styles from "./styles.module.scss";
import DetailInformation from "../comopnents/DetailInformation";
const DetailProduct = () => {
  return (
    <DetailProvider>
      <div className={styles.layout}>
        <DetailInformation item={itemDetail}></DetailInformation>
      </div>
    </DetailProvider>
  );
};
DetailProduct.defaultProps = {};

export default DetailProduct;
