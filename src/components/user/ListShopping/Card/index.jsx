import React, { useContext, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../../../modules/user/shoping/context";
import { addCart } from "../../../../utils/cart/add-cart";
import { ShoppingCartCheckout } from "@mui/icons-material";
import AlertMessage from "../../../core/AlertMessage";
import _ from "lodash";
import useCustomSelector from "../../../../modules/user/shoping/utils/useCustomSelector";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCart from "../SkeletonCart";

const Card = ({ item, ...props }) => {
  const navigate = useNavigate();
  const cloneItem = _.cloneDeep(item);
  const [element, setElement] = useState(null);
  const { elementRef } = useContext(ShoppingContext);
  const { isFetching } = useCustomSelector();

  useEffect(() => {
    if (element) {
      const timer = setTimeout(() => {
        setElement(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [element]);

  if (isFetching) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <SkeletonCart></SkeletonCart>
        </div>
      </div>
    );
  }
  if (isFetching) {
    return <SkeletonCart></SkeletonCart>;
  }

  return (
    <div className={styles.wrapper}>
      <div
        ref={elementRef ? elementRef : null}
        {...props}
        onClick={() => {
          navigate(`/detail/${item.id}`);
        }}
        className={styles.container}
      >
        <div className={styles.wrapperImg}>
          <img src={cloneItem.product_image} alt={cloneItem.product_name} />
        </div>
        <p className={styles.title}>{cloneItem.product_name}</p>
        <span className={styles.price}>
          {cloneItem?.unit_price?.toLocaleString()} đ
        </span>
        <div className={styles.sold}>{cloneItem.sold} sold</div>
      </div>
      {element}
      <button
        onClick={() => {
          const response = addCart(item.id);
          setElement(<AlertMessage {...response} />);
        }}
        className={styles.cart}
      >
        Thêm giỏ hàng
        <ShoppingCartCheckout className={styles.cartIcon} />
      </button>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
