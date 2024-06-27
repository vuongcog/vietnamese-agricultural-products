import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styles from "./styles.module.scss";
import { ShoppingContext } from "../../../modules/user/shoping/context";
import useCustomSelector from "../../../modules/user/shoping/utils/useCustomSelector";
import SkeletonCart from "./SkeletonCart";

const ListShoping = ({ items }) => {
  const { loading, items: list } = useContext(ShoppingContext);
  const { isFetching } = useCustomSelector();
  const __renderCard = (item) => {
    return <Card item={item} />;
  };

  const __renderListProduct = (items) => {
    return (
      <div className={styles.listProductContainer}>
        {items.map((item) => {
          return __renderCard(item);
        })}
        {list.map((item, index) => {
          if (isFetching) {
            return <SkeletonCart key={index}></SkeletonCart>;
          }
          return (
            <div key={index} className={styles.placeholder}>
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
