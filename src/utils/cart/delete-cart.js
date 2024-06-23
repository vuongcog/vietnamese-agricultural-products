import Cookies from "js-cookie";
import { getCart } from "./get-cart";
import { parseStringJson } from "../pareJson";

export const deleteCart = (index) => {
  const listCart = getCart();
  if (index !== -1) {
    listCart.splice(index, 1);
    Cookies.set("cart", parseStringJson(listCart), { path: "/", expires: 365 });
    return listCart;
  }
};
