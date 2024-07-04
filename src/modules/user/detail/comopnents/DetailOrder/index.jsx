import React, { useState } from "react";
import QuantitySelector from "../../../../../components/core/NumberInput";
import PropTypes from "../../../../../utils/prop-types";
import { addCart } from "../../../../../utils/cart/add-cart";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styles from "./styles.module.scss";
const DetailOrder = ({ quantity = 20 }) => {
  const [numbers, setNumbers] = useState(1);
  const params = useParams();
  return (
    <div className={styles.container}>
      <ToastContainer></ToastContainer>
      <div className={styles.quantity}>
        <span>Số lượng</span>
        <QuantitySelector
          max={quantity}
          value={numbers}
          setValue={setNumbers}
        ></QuantitySelector>
      </div>
      <div className={styles.order}>
        <button>Mua ngay</button>
        <button
          onClick={() => {
            const reponse = addCart(params.id);
            toast[reponse.status](reponse.message);
          }}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
DetailOrder.propTypes = {
  quantity: PropTypes.number,
};
export default DetailOrder;
