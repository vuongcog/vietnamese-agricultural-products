import React, { useState, useMemo, useRef, useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import QuantitySelector from '../../../../../components/core/NumberInput';
import { formattedNumber } from '../../../../../utils/format-number';
import { Checkbox } from '@chakra-ui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CartContext } from '../../container';

const CartItem = ({
  quantity,
  product: { unit_prices },
  voucher,
  oldPrice,
  id_product,
  product,
  onSelect,
  onDeselect,
  ...props
}) => {
  const [number, setNumber] = useState(quantity);
  const [checked, setChecked] = useState(false);
  const totalPrice = useMemo(() => number * unit_prices, [number, unit_prices]);
  const { handlerDeleteCart, handlerUpdateCart } = useContext(CartContext);
  const firstEffect = useRef(false);
  useEffect(() => {
    if (firstEffect.current) {
      handlerUpdateCart(id_product, number);
    }
    firstEffect.current = true;
  }, [number]);
  const handlerSetNumber = number => {
    setNumber(number);
  };
  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (newChecked) {
      onSelect(id_product);
    } else {
      onDeselect(id_product);
    }
  };

  return (
    <div {...props} className={styles.container}>
      <Checkbox
        value={id_product}
        size={'lg'}
        isChecked={checked}
        onChange={handleCheckboxChange}
        className={styles.checkbox}
      />
      <div className={styles.contentWrapper}>
        <img
          src={product.product_image}
          alt={product.product_name}
          className={styles.image}
        />
        <div className={styles.messageWrapper}>
          <div className={styles.product_name}>{product.product_name}</div>
          <div className={styles.voucher}>{voucher}</div>
        </div>
      </div>
      <div className={styles.classify}></div>
      <span className={styles.oldPrice}>{formattedNumber(oldPrice)}</span>
      <span className={styles.unit_prices}>{formattedNumber(unit_prices)}</span>
      <QuantitySelector
        max={product.quantity}
        onSetNumber={handlerSetNumber}
        value={number}
        className={styles.numberSelector}
      />
      <span className={classNames(styles.totalPrice, 'w-[10%]')}>
        {formattedNumber(totalPrice)}
      </span>
      <i
        onClick={() => {
          handlerDeleteCart(id_product);
        }}
        className={classNames('fa-solid fa-trash', styles.deleteIcon)}
      ></i>
    </div>
  );
};

CartItem.defaultProps = {
  oldPrice: 89000,
  unit_prices: 50000,
  inventory: 20,
  voucher: 'Giảm giá 50%',
  product_name: 'Gối cao su non ZARA HOME cao cấp chống ngáy ngủ, đau vai gáy',
  linkImage:
    'https://down-vn.img.susercontent.com/file/5585030ea3c9904e46281ad031c8ad54',
};

CartItem.propTypes = {
  id_product: PropTypes.string,
  product: PropTypes.object,
  quantity: PropTypes.number,
  product_image: PropTypes.string,
  unit_prices: PropTypes.number.isRequired,
  linkImage: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  voucher: PropTypes.string,
  total: PropTypes.number,
  oldPrice: PropTypes.number,
  handleDelete: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDeselect: PropTypes.func.isRequired,
};

export default CartItem;
