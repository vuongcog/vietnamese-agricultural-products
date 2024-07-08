import { CART_REDUCER } from '../../constants/name-store/user/name-space-reducer';

export const getCarts = state => state[CART_REDUCER].carts;
export const getIsFetchingCart = state => state[CART_REDUCER].isFetchingCart;
