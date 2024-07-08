import React from "react";
import { createContext } from "react";
import CartModule from "../presentational";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FETCH_CART } from "../../shoping/store/constants/actionCart";
const CartContext = createContext({});

const CartContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: FETCH_CART,
      payload: { endpoint: "http://localhost:8081/cart" },
    });
  }, []);
  return (
    <CartContext.Provider value={{}}>
      <CartModule></CartModule>
    </CartContext.Provider>
  );
};
export default CartContainer;
