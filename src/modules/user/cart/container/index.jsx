import React from 'react';
import { createContext } from 'react';
import CartModule from '../presentational';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_CART, FETCH_CART } from '../../../../actions/action-cart';
export const CartContext = createContext({});

const CartContainer = () => {
  const dispatch = useDispatch();
  const handlerDeleteCart = idCart => {
    dispatch({ type: DELETE_CART, payload: `/giohang/xoagiohang/${idCart}` });
  };
  useEffect(() => {
    dispatch({
      type: FETCH_CART,
      payload: { endpoint: '/giohang' },
    });
  }, []);
  return (
    <CartContext.Provider value={{ handlerDeleteCart }}>
      <CartModule></CartModule>
    </CartContext.Provider>
  );
};
export default CartContainer;
