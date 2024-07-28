import React, { useState } from 'react';
import { createContext } from 'react';
import CartModule from '../presentational';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  DELETE_CART,
  FETCH_CART,
  UPDATE_CART,
} from '../../../../actions/action-cart';
import useProducerCart from '../../../../useCustom/user/useProducerCart';
import { SECRET_KEY } from '../../../../constants/secret-key';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { encrypData } from '../../../../utils/parse-data-key';
import { ACTIVE } from '../../../../constants/mapper-status';
export const CartContext = createContext({});

const CartContainer = () => {
  const dispatch = useDispatch();
  const { refesh } = useProducerCart();
  const [selectedItems, setSelectedItems] = useState([]);
  const { carts } = useProducerCart();

  let filterCarts = [];

  if (!_.isEmpty(carts)) {
    filterCarts = carts.items.filter(
      item => item.product.quantity > 0 && item.product.status === ACTIVE
    );
  }
  const navigate = useNavigate();

  // 111 handler giành cho list cart
  const handleChange = selectedValues => {
    setSelectedItems(selectedValues);
  };
  const handleSelect = id => {
    if (!selectedItems.includes(id)) {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDeselect = id => {
    setSelectedItems(selectedItems.filter(item => item !== id));
  };

  const handleSelectAll = e => {
    if (e.target.checked) {
      const allItemIds = filterCarts.map(item => item.id_product);
      setSelectedItems(allItemIds);
    } else {
      setSelectedItems([]);
    }
  };
  const findCommonItems = () => {
    const data = filterCarts.filter(item =>
      selectedItems.includes(item.id_product)
    );
    if (!_.isEmpty(data)) {
      const encodedData = encrypData(data, SECRET_KEY);

      navigate(`/checkout?state=${encodedData}`);
      return;
    }
    toast.warning('Bạn chư chọn sản phẩm nào');
  };

  // 222 handler giành cho https cart

  const handlerDeleteCart = idCart => {
    dispatch({ type: DELETE_CART, payload: `/giohang/xoagiohang/${idCart}` });
  };
  const handlerUpdateCart = (id_product, quantity) => {
    dispatch({ type: UPDATE_CART, payload: { id_prd: id_product, quantity } });
  };
  useEffect(() => {
    dispatch({
      type: FETCH_CART,
      payload: { endpoint: '/giohang' },
    });
  }, [refesh]);

  return (
    <CartContext.Provider
      value={{
        handlerDeleteCart,
        handlerUpdateCart,
        handleChange,
        handleDeselect,
        handleSelect,
        handleSelectAll,
        selectedItems,
        setSelectedItems,
        findCommonItems,
      }}
    >
      <CartModule></CartModule>
    </CartContext.Provider>
  );
};
export default CartContainer;
