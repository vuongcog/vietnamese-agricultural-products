import React from 'react';
import CartItem from '../CartItem';
import styles from './styles.module.scss';
import useProducerCart from '../../../../../useCustom/user/useProducerCart';
import { CheckboxGroup, Checkbox, Button } from '@chakra-ui/react';
import _ from 'lodash';
import { useContext } from 'react';
import { CartContext } from '../../container';
import { ACTIVE, INACTIVE } from '../../../../../constants/mapper-status';

const CartList = () => {
  const { carts } = useContext(CartContext);
  const {
    handleChange,
    handleDeselect,
    handleSelect,
    handleSelectAll,
    selectedItems,
    findCommonItems,
  } = useContext(CartContext);

  if (_.isEmpty(carts)) return null;
  const filterCarts = carts.filter(
    item => item.product.quantity > 0 && item.product.status === ACTIVE
  );
  const checkedGroup = selectedItems.length === filterCarts.length;
  return (
    <div className={styles.container}>
      <div className="flex items-center gap-3">
        <Checkbox
          onChange={handleSelectAll}
          isChecked={selectedItems.length === filterCarts.length}
        >
          Chọn tất cả
        </Checkbox>
        <Button onClick={findCommonItems} width={'100px'} color="blue">
          Mua ngay
        </Button>
      </div>
      <CheckboxGroup value={selectedItems} onChange={handleChange}>
        <div className={styles[`container-cart-list`]}>
          {filterCarts.map(item => {
            if (item.product.status === INACTIVE || item.product.quantity <= 0)
              return null;
            return (
              <CartItem
                checkedGroup={checkedGroup}
                {...item}
                key={item.id_product}
                onSelect={handleSelect}
                onDeselect={handleDeselect}
              />
            );
          })}
        </div>
      </CheckboxGroup>
    </div>
  );
};

export default CartList;
