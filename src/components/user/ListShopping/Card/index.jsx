import React, { useContext, useRef } from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../../../modules/user/shoping/context";
const Card = ({ item, ...props }) => {
  const navigate = useNavigate();
  const cloneItem = _.cloneDeep(item);
  const { elementRef } = useContext(ShoppingContext);
  return (
    <div
      ref={elementRef ? elementRef : null}
      {...props}
      onClick={() => {
        navigate(`/detail/${item.id}`);
      }}
      className={styles.container}
    >
      <div className={styles[`wrapper-img`]}>
        <img src={cloneItem.linkImage}></img>
      </div>
      <p>{cloneItem.title}</p>
      <span className={styles.price}>
        <span className="underline">đ</span>
        {cloneItem.price}
      </span>
      <div>{cloneItem.sold} sold</div>
    </div>
  );
};
Card.propTypes = {
  item: PropTypes.object,
};
export default Card;
