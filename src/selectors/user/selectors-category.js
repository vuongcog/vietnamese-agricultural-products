import { CATEGORY_REDUCER } from "../../constants/name-store/user/name-space-reducer";

export const getCategories = (state) => state[CATEGORY_REDUCER].categories;
