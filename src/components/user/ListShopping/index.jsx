import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styles from "./styles.module.scss";
import { ShoppingContext } from "../../../modules/user/shoping/context";
const ListShoping = ({ items }) => {
  const { loading, items: list } = useContext(ShoppingContext);

  const __renderCard = (item) => {
    return <Card key={item.title} item={item}></Card>;
  };

  const __renderListProduct = (items) => {
    return (
      <div className={styles[`list-product-container`]}>
        {items.map((item) => {
          return __renderCard(item);
        })}
        {/* {list.map((item, index) => {
          return (
            <div key={index} className="w-10 bg-red-400 h-[384px]">
              {item.title}
            </div>
          );
        })} */}
      </div>
    );
  };
  return <div className={styles.content}>{__renderListProduct(items)}</div>;
};
ListShoping.propTypes = {
  items: PropTypes.array,
};

export default ListShoping;
