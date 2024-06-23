import Cookies from "js-cookie";
import { parseObjectJson } from "../pareJson";
export const getCart = () => {
  const listCart = Cookies.get("cart");
  if (listCart) {
    return parseObjectJson(listCart);
  }
  return [];
};
