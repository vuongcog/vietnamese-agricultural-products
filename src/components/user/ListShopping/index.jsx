import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styles from "./styles.module.scss";
import { ShoppingContext } from "../../../modules/user/shoping/context";
import useCustomSelector from "../../../modules/user/shoping/utils/useCustomSelector";

const ListShoping = () => {
  const { loading } = useContext(ShoppingContext);
  const { items } = useCustomSelector();

  const __renderCard = (item) => {
    return <Card item={item} />;
  };

  const __renderListProduct = (items) => {
    return (
      <div className={styles.listProductContainer}>
        {items.map((item) => {
          return __renderCard(item);
        })}
      </div>
    );
  };

  return (
    <div className={styles.content}>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        __renderListProduct(items)
      )}
    </div>
  );
};

ListShoping.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListShoping;
