import React, { useState, useMemo } from "react";
import styles from "./styles.module.scss";
import QuantitySelector from "../../../../../components/core/NumberInput";
import { formattedNumber } from "../../../../../utils/format-number";
import { Checkbox } from "@chakra-ui/react";
import classNames from "classnames";
import PropTypes from "prop-types";

const CartItem = ({
  price,
  linkImage,
  title,
  voucher,
  inventory,
  oldPrice,
  handleDelete,
  ...props
}) => {
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);
  const totalPrice = useMemo(() => {
    return quantity * price;
  }, [quantity, price]);

  return (
    <div {...props} className={styles.container}>
      <Checkbox
        size={"lg"}
        isChecked={checked}
        onChange={() => setChecked(!checked)}
        className={styles.checkbox}
      />
      <div className={styles.contentWrapper}>
        <img src={linkImage} alt={title} className={styles.image} />
        <div className={styles.messageWrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.voucher}>{voucher}</div>
        </div>
      </div>
      <div className={styles.classify}></div>
      <span className={styles.oldPrice}>{formattedNumber(oldPrice)}</span>
      <span className={styles.price}>{formattedNumber(price)}</span>
      <QuantitySelector
        max={inventory}
        setValue={setQuantity}
        value={quantity}
        className={styles.quantitySelector}
      />
      <span className={classNames(styles.totalPrice, "w-[10%]")}>
        {formattedNumber(totalPrice)}
      </span>
      <i
        onClick={handleDelete}
        className={classNames("fa-solid fa-trash", styles.deleteIcon)}
      ></i>
    </div>
  );
};

CartItem.defaultProps = {
  oldPrice: 89000,
  price: 139000,
  inventory: 20,
  voucher: "Giảm giá 50%",
  title: "Gối cao su non ZARA HOME cao cấp chống ngáy ngủ, đau vai gáy",
  linkImage:
    "https://down-vn.img.susercontent.com/file/5585030ea3c9904e46281ad031c8ad54",
};

CartItem.propTypes = {
  price: PropTypes.number.isRequired,
  linkImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voucher: PropTypes.string,
  inventory: PropTypes.number.isRequired,
  total: PropTypes.number,
  oldPrice: PropTypes.number,
  handleDelete: PropTypes.func.isRequired,
};

export default CartItem;
