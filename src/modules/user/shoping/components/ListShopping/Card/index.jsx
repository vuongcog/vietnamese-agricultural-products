import React, { useContext, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ShoppingCartCheckout } from "@mui/icons-material";
import AlertMessage from "../../../../../../components/core/AlertMessage";
import _ from "lodash";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCart from "../SkeletonCart";
import { ShoppingContext } from "../../../context";
import useCustomSelector from "../../../utils/useCustomSelector";
import { addCart } from "../../../../../../utils/cart/add-cart";
import { useTranslation } from "react-i18next";
import langsGlobal from "../../../../../../langs";

const Card = ({ item, ...props }) => {
  const navigate = useNavigate();
  const cloneItem = _.cloneDeep(item);
  const [element, setElement] = useState(null);
  const { elementRef } = useContext(ShoppingContext);
  const { isFetching } = useCustomSelector();
  const { t } = useTranslation();
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
          {cloneItem?.unit_prices?.toLocaleString()}
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
        {t(langsGlobal.addCart)}
        <ShoppingCartCheckout className={styles.cartIcon} />
      </button>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
