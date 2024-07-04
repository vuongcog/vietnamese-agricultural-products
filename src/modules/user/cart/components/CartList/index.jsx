import React, { useEffect } from "react";
import { getCart } from "../../../../../utils/cart/get-cart";
import CartItem from "../CartItem";
import styles from "./styles.module.scss";
import { useState } from "react";
import { deleteCart } from "../../../../../utils/cart/delete-cart";
import ProgressFullScreen from "../../../../../components/core/ProgressFullScreen";
const CartList = () => {
  const [listCart, setListCart] = useState(getCart());
  const [element, setElement] = useState(null);
  const handleDelete = (index) => {
    setListCart(deleteCart(index));
    setElement(<ProgressFullScreen></ProgressFullScreen>);
  };

  useEffect(() => {
    setTimeout(() => {
      setElement(null);
    }, 300);
  }, [element]);
  return (
    <div className={styles.container}>
      {element}
      {listCart.map((item, index) => {
        return (
          <CartItem
            handleDelete={() => {
              handleDelete(index);
            }}
            key={index}
          ></CartItem>
        );
      })}
    </div>
  );
};

export default CartList;
