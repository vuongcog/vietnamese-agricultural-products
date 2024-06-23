import Cookies from "js-cookie";
import { parseObjectJson } from "../pareJson";
export const setCookieCart = (idProduct, parseCartObject) => {
  parseCartObject.push(idProduct);
  Cookies.set("cart", JSON.stringify(parseCartObject), {
    path: "/",
    expires: 365,
  });
};
export const addCart = (idProduct) => {
  try {
    const listCart = Cookies.get("cart");
    if (listCart) {
      const parseCartObject = parseObjectJson(listCart);

      if (parseCartObject.includes(idProduct)) {
        return {
          status: "warning",
          message: "Bạn đã có mặt hàn này trong giỏ hàng",
        };
      }
      setCookieCart(idProduct, parseCartObject);
    } else {
      const listCart = [];
      setCookieCart(idProduct, listCart);
    }
    return {
      status: "success",
      message: "Thêm thành công",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Mặt hàng nãy đã hết hoặc không tồn tại",
    };
  }
};
