import React from 'react';
import CartItem from '../CartItem';
import styles from './styles.module.scss';
import useProducerCart from '../../../../../useCustom/user/useProducerCart';
import { CheckboxGroup, Checkbox, Button } from '@chakra-ui/react';
import _ from 'lodash';
import { useContext } from 'react';
import { CartContext } from '../../container';
import { ACTIVE, INACTIVE } from '../../../../../constants/mapper-status';
import classNames from 'classnames';

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
  const filterCarts = carts.items.filter(
    item => item.product.quantity > 0 && item.product.status === ACTIVE
  );
  const checkedGroup = selectedItems.length === filterCarts.length;

  return (
    <div className={styles.container}>
      <div
        className={classNames(
          `flex items-center gap-3`,
          styles[`container-button`]
        )}
      >
        <Checkbox
          onChange={handleSelectAll}
          isChecked={selectedItems.length === filterCarts.length}
          fontWeight={'bold'}
        >
          Chọn tất cả
        </Checkbox>
        <Button onClick={findCommonItems} width={'100px'}>
          Mua ngay
        </Button>
      </div>
      <CheckboxGroup value={selectedItems} onChange={handleChange}>
        <div className={styles[`container-cart-list`]}>
          {filterCarts?.map((item, index) => {
            if (item.product.status === INACTIVE || item.product.quantity <= 0)
              return null;
            console.log(item.quantity);
            return (
              <CartItem
                checkedGroup={checkedGroup}
                {...item}
                item={item}
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
