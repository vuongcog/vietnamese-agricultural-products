import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styles from "./styles.module.scss";
import { ShoppingContext } from "../../../modules/user/shoping/context";
import { nanoid } from "@reduxjs/toolkit";

const ListShoping = ({ items }) => {
  const { loading, items: list } = useContext(ShoppingContext);

  const __renderCard = (item) => {
    return <Card key={nanoid()} item={item} />;
  };

  const __renderListProduct = (items) => {
    return (
      <div className={styles.listProductContainer}>
        {items.map((item) => {
          return __renderCard(item);
        })}
        {list.map((item) => {
          return (
            <div key={nanoid()} className={styles.placeholder}>
              {item.title}
            </div>
          );
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
