import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const addCart = (product, quantity) => {
  console.log(product);
  try {
    if (quantity <= 0) {
      toast.error('Số lượng sản phẩm phải lớn hơn 0');
      return;
    }

    const listCart = Cookies.get('cart');
    if (listCart) {
      const parseCartObject = JSON.parse(listCart);
      console.log(parseCartObject);
      const existingProductIndex = parseCartObject.findIndex(
        item => item.id_product === product.id
      );
      if (existingProductIndex > -1) {
        const newQuantity =
          parseCartObject[existingProductIndex].quantity + quantity;
        if (newQuantity > product.quantity) {
          toast.error(
            'Số lượng sản phẩm trong giỏ hàng vượt quá số lượng hiện có'
          );
          return;
        }
        parseCartObject[existingProductIndex].quantity = newQuantity;
        parseCartObject[existingProductIndex].updated_at =
          new Date().toISOString();
        toast.success('Sản phẩm đã được cập nhật số lượng trong giỏ hàng');
      } else {
        if (quantity > product.quantity) {
          toast.error(
            'Số lượng sản phẩm trong giỏ hàng vượt quá số lượng hiện có'
          );
          return;
        }
        setCookieCart(product, parseCartObject, quantity);
        toast.success('Thêm thành công', {
          autoClose: 1000,
        });
      }
      Cookies.set('cart', JSON.stringify(parseCartObject));
    } else {
      if (quantity > product.quantity) {
        toast.error(
          'Số lượng sản phẩm trong giỏ hàng vượt quá số lượng hiện có'
        );
        return;
      }
      const listCart = [];
      setCookieCart(product, listCart, quantity);
      toast.success('Thêm thành công');
    }
  } catch (error) {
    console.log(error);
    toast.error('Mặt hàng này đã hết hoặc không tồn tại');
  }
};

const setCookieCart = (product, listCart, quantity) => {
  const cartItem = {
    id: new Date().getTime(), // ID của item trong giỏ hàng (có thể được tạo động nếu cần)
    id_cart: 1, // ID của giỏ hàng
    id_product: product.id,
    unit_prices: product.unit_prices,
    quantity: quantity,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    product: {
      id: product.id,
      id_category: product.id_category,
      product_name: product.product_name,
      product_slug: product.product_slug,
      product_image: product.product_image,
      quantity: product.quantity,
      unit_prices: product.unit_prices,
      status: product.status,
      created_at: product.created_at,
      updated_at: product.updated_at,
    },
  };

  listCart.push(cartItem);
  Cookies.set('cart', JSON.stringify(listCart));
};
