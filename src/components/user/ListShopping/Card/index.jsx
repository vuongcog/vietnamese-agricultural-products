import React, { useContext, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../../../modules/user/shoping/context";
import { addCart } from "../../../../utils/cart/addCart";
import { ShoppingCartCheckout } from "@mui/icons-material";
import AlertMessage from "../../../core/AlertMessage";
import _ from "lodash";

const Card = ({ item, ...props }) => {
  const navigate = useNavigate();
  const cloneItem = _.cloneDeep(item);
  const [element, setElement] = useState(null);
  const { elementRef } = useContext(ShoppingContext);

  useEffect(() => {
    if (element) {
      const timer = setTimeout(() => {
        setElement(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [element]);

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
          <img src={cloneItem.linkImage} alt={cloneItem.title} />
        </div>
        <p className={styles.title}>{cloneItem.title}</p>
        <span className={styles.price}>
          {cloneItem.price.toLocaleString()} đ
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
