import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const updateCartItemQuantity = (idProduct, newQuantity) => {
  try {
    const listCart = Cookies.get('cart');
    if (!listCart) {
      toast.error('Giỏ hàng trống');
      return;
    }

    const parseCartObject = JSON.parse(listCart);
    const productIndex = parseCartObject.findIndex(
      item => item.id_product === idProduct
    );

    if (productIndex === -1) {
      toast.error('Sản phẩm không có trong giỏ hàng');
      return;
    }

    if (newQuantity > parseCartObject[productIndex].product.quantity) {
      toast.error('Số lượng sản phẩm trong giỏ hàng vượt quá số lượng hiện có');
      return;
    }

    parseCartObject[productIndex].quantity = newQuantity;
    parseCartObject[productIndex].updated_at = new Date().toISOString();

    Cookies.set('cart', JSON.stringify(parseCartObject));
    toast.success('Cập nhật số lượng sản phẩm thành công');
  } catch (error) {
    toast.error('Có lỗi xảy ra khi cập nhật số lượng sản phẩm');
  }
};
