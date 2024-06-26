import React from "react";
import { createContext } from "react";
import CartModule from "../presentational";
const CartContext = createContext({});

const CartContainer = () => {
  return (
    <CartContext.Provider value={{}}>
      <CartModule></CartModule>
    </CartContext.Provider>
  );
};
export default CartContainer;
