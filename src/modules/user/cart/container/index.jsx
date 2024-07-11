import React from 'react';
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
export const CartContext = createContext({});

const CartContainer = () => {
  const dispatch = useDispatch();
  const { refesh } = useProducerCart();
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
    <CartContext.Provider value={{ handlerDeleteCart, handlerUpdateCart }}>
      <CartModule></CartModule>
    </CartContext.Provider>
  );
};
export default CartContainer;
