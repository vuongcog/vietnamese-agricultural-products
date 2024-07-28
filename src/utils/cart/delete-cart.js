import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const deleteCartItem = idProduct => {
  try {
    const listCart = Cookies.get('cart');
    if (!listCart) {
      toast.error('Giỏ hàng trống');
      return;
    }

    const parseCartObject = JSON.parse(listCart);
    const updatedCart = parseCartObject.filter(
      item => item.id_product !== idProduct
    );

    if (updatedCart.length === parseCartObject.length) {
      toast.error('Sản phẩm không có trong giỏ hàng');
      return;
    }

    Cookies.set('cart', JSON.stringify(updatedCart));
    toast.success('Xóa sản phẩm khỏi giỏ hàng thành công');
  } catch (error) {
    toast.error('Có lỗi xảy ra khi xóa sản phẩm khỏi giỏ hàng');
  }
};
