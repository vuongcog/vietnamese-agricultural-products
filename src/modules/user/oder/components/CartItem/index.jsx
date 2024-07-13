import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import QuantitySelector from '../../../../../components/core/NumberInput';
import { formattedNumber } from '../../../../../utils/format-number';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Product = ({
  handlerDeleteProduct,
  handlerSetQuantity,
  quantity,
  unit_prices,
  voucher,
  product,
  ...props
}) => {
  const totalPrice = useMemo(
    () => quantity * unit_prices,
    [quantity, unit_prices]
  );
  const handlerChangeNumber = number => {
    handlerSetQuantity(number, product.id);
  };
  return (
    <div {...props} className={styles.container}>
      <div className={styles.contentWrapper}>
        <img
          src={product.product_image}
          alt={product.product_name}
          className={styles.image}
        />
        <div className={styles.messageWrapper}>
          <div className={styles.title}>{product.product_name}</div>
          <div className={styles.voucher}>{voucher}</div>
        </div>
      </div>
      <span className={styles.unit_prices}>{formattedNumber(unit_prices)}</span>
      <QuantitySelector
        max={product.quantity}
        onSetNumber={handlerChangeNumber}
        value={quantity}
        className={styles.numberSelector}
      />
      <span className={classNames(styles.totalPrice)}>
        {formattedNumber(totalPrice)}
      </span>
      <i
        onClick={() => {
          handlerDeleteProduct(product.id);
        }}
        className={classNames('fa-solid fa-trash', styles.deleteIcon)}
      ></i>
    </div>
  );
};

Product.propTypes = {
  handlerSetQuantity: PropTypes.func,
  id_product: PropTypes.string,
  product: PropTypes.object,
  quantity: PropTypes.number,
  product_image: PropTypes.string,
  unit_prices: PropTypes.number.isRequired,
  linkImage: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  voucher: PropTypes.string,
  inventory: PropTypes.number.isRequired,
  total: PropTypes.number,
  oldPrice: PropTypes.number,
  handleDelete: PropTypes.func.isRequired,
};

export default Product;
