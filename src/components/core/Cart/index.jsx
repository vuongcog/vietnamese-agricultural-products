import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { getCountCart } from "../../../utils/cart/get-count-cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartCount, setCartCount] = useState(getCountCart());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCount = getCountCart();
      setCartCount(newCount);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Link to={"/cart"} className={classNames(styles.container)}>
      <i className={classNames("fa-solid fa-cart-shopping", styles.cart)}></i>
      <span className={styles.cartCount}>{cartCount}</span>
    </Link>
  );
};

export default Cart;
