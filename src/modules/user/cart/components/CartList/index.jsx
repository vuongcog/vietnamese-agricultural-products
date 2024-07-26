import React from 'react';
import CartItem from '../CartItem';
import styles from './styles.module.scss';
import useProducerCart from '../../../../../useCustom/user/useProducerCart';
import { CheckboxGroup, Checkbox, Button } from '@chakra-ui/react';
import _ from 'lodash';
import { useContext } from 'react';
import { CartContext } from '../../container';

const CartList = () => {
  const { carts } = useProducerCart();
  const {
    handleChange,
    handleDeselect,
    handleSelect,
    handleSelectAll,
    selectedItems,
    findCommonItems,
  } = useContext(CartContext);

  if (_.isEmpty(carts)) return null;
  return (
    <div className={styles.container}>
      <div className="flex items-center gap-3">
        <Checkbox
          onChange={handleSelectAll}
          isChecked={selectedItems.length === carts.items.length}
        >
          Chọn tất cả
        </Checkbox>
        <Button onClick={findCommonItems} width={'100px'} color="blue">
          Mua ngay
        </Button>
      </div>
      <CheckboxGroup value={selectedItems} onChange={handleChange}>
        <div className={styles[`container-cart-list`]}>
          {carts.items.map((item, index) => (
            <CartItem
              {...item}
              key={index}
              onSelect={handleSelect}
              onDeselect={handleDeselect}
            />
          ))}
        </div>
      </CheckboxGroup>
    </div>
  );
};

export default CartList;
