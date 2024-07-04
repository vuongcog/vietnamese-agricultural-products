import Cookies from "js-cookie";
import { parseObjectJson } from "../parse-json";
export const getCart = () => {
  const listCart = Cookies.get("cart");
  if (listCart) {
    return parseObjectJson(listCart);
  }
  return [];
};
