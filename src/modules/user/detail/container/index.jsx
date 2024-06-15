import React, { useContext } from "react";
import DetailProvider, { ContextDetailProduct } from "../context";
import itemDetail from "../../../../constants/item-detail";
import CardDetail from "../comopnents/CardDetail";
import styles from "./styles.module.scss";
const DetailProduct = (props) => {
  return (
    <DetailProvider>
      <div className={styles.layout}>
        <CardDetail item={itemDetail}></CardDetail>
      </div>
    </DetailProvider>
  );
};
DetailProduct.defaultProps = {};

export default DetailProduct;
