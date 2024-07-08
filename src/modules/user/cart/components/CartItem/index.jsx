import React, { useState, useMemo } from 'react';
import styles from './styles.module.scss';
import QuantitySelector from '../../../../../components/core/NumberInput';
import { formattedNumber } from '../../../../../utils/format-number';
import { Checkbox } from '@chakra-ui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CartItem = ({
  quantity,
  product_image,
  unit_prices,
  product_name,
  voucher,
  inventory,
  oldPrice,
  handleDelete,
  ...props
}) => {
  const [number, setNumber] = useState(quantity);
  const [checked, setChecked] = useState(false);
  const totalPrice = useMemo(() => number * unit_prices, [number, unit_prices]);

  return (
    <div {...props} className={styles.container}>
      <Checkbox
        size={'lg'}
        isChecked={checked}
        onChange={() => setChecked(!checked)}
        className={styles.checkbox}
      />
      <div className={styles.contentWrapper}>
        <img src={product_image} alt={product_name} className={styles.image} />
        <div className={styles.messageWrapper}>
          <div className={styles.product_name}>{product_name}</div>
          <div className={styles.voucher}>{voucher}</div>
        </div>
      </div>
      <div className={styles.classify}></div>
      <span className={styles.oldPrice}>{formattedNumber(oldPrice)}</span>
      <span className={styles.unit_prices}>{formattedNumber(unit_prices)}</span>
      <QuantitySelector
        max={inventory}
        setValue={setNumber}
        value={number}
        className={styles.numberSelector}
      />
      <span className={classNames(styles.totalPrice, 'w-[10%]')}>
        {formattedNumber(totalPrice)}
      </span>
      <i
        onClick={handleDelete}
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

export default CartItem;
