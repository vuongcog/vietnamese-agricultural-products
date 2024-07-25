import { DATA_USER_REDUCER } from '../../constants/name-store/user/name-space-reducer';

export const getDataUser = state => state[DATA_USER_REDUCER].dataUser;
