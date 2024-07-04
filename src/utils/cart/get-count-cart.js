import Cookies from "js-cookie";
import { parseObjectJson } from "../parse-json";
export const getCountCart = () => {
  const countCart = Cookies.get("cart");
  if (countCart) {
    return parseObjectJson(countCart).length;
  }
  return 0;
};
