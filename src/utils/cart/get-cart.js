import Cookies from 'js-cookie';

export const getCart = () => {
  const listCart = Cookies.get('cart');
  if (listCart) {
    return JSON.parse(listCart);
  }
  return [];
};
