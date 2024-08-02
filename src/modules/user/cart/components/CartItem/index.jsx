import React, { useState, useMemo, useRef, useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import QuantitySelector from '../../../../../components/core/NumberInput';
import { Checkbox, Divider } from '@chakra-ui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CartContext } from '../../container';
import { useDebounce } from '../../../../../utils/use-debounce';
import { useNavigate } from 'react-router-dom';
import { INACTIVE } from '../../../../../constants/mapper-status';

const CartItem = ({
  // product: { item.product.unit_prices },
  onSelect,
  onDeselect,
  item,
  ...props
}) => {
  const [number, setNumber] = useState(item.quantity);
  const [checked, setChecked] = useState(false);
  const totalPrice = useMemo(
    () => number * item.product.unit_prices,
    [number, item.product.unit_prices]
  );

  const { handlerDeleteCart, handlerUpdateCart } = useContext(CartContext);
  const firstEffect = useRef(false);

  const debounceNumber = useDebounce(number, 300);
  const navigate = useNavigate();

  useEffect(() => {
    if (firstEffect.current) {
      handlerUpdateCart(item.id_product, debounceNumber);
      console.log(debounceNumber);
      setNumber(debounceNumber);
    }
    firstEffect.current = true;
  }, [debounceNumber]);

  const handlerSetNumber = number => {
    setNumber(number);
  };

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (newChecked) {
      onSelect(item.id_product);
    } else {
      onDeselect(item.id_product);
    }
  };

  if (item.product.quantity <= 0 || item.product.status === INACTIVE)
    return null;

  return (
    <div {...props} className={styles.container}>
      <Checkbox
        value={item.id_product}
        size={'lg'}
        isChecked={checked}
        onChange={handleCheckboxChange}
        className={styles.checkbox}
      />
      <div className={styles.contentWrapper}>
        <div className={styles.wrapper__image}>
          <img
            src={item.product.product_image}
            alt={item.product.product_name}
            className={styles.image}
          />
        </div>
        <div className={styles.messageWrapper}>
          <div
            className={styles.title}
            onClick={() => {
              navigate(
                `/detail?slug=${item.product.product_slug}&id=${item.product.id}`
              );
            }}
          >
            {item.product.product_name}
          </div>
        </div>
      </div>
      <Divider orientation="vertical" borderWidth={1}></Divider>
      <span className={styles.price}>
        {parseFloat(item.product.unit_prices).toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND',
        })}
      </span>
      <QuantitySelector
        max={item.product.quantity}
        onSetNumber={handlerSetNumber}
        value={number}
        className={styles.numberSelector}
      />
      <span className={classNames(styles.totalPrice, 'w-[10%]')}>
        {parseFloat(totalPrice).toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND',
        })}
      </span>
      <i
        onClick={() => {
          handlerDeleteCart(item.id_product);
        }}
        className={classNames('fa-solid fa-trash', styles.deleteIcon)}
      ></i>
    </div>
  );
};

CartItem.defaultProps = {
  oldPrice: 89000,
  // item.product.unit_prices: 50000,
  inventory: 20,
  product_name: 'Gối cao su non ZARA HOME cao cấp chống ngáy ngủ, đau vai gáy',
  linkImage:
    'https://down-vn.img.susercontent.com/file/5585030ea3c9904e46281ad031c8ad54',
};

CartItem.propTypes = {
  id_product: PropTypes.string,
  product: PropTypes.object,
  quantity: PropTypes.number,
  product_image: PropTypes.string,
  // item.product.unit_prices: PropTypes.number.isRequired,
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
