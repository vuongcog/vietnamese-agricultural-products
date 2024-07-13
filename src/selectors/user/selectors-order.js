import { ORDER_REDUCER } from '../../constants/name-store/user/name-space-reducer';

export const getIsOrdering = state => state[ORDER_REDUCER].isOrdering;
