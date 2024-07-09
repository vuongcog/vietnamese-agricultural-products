import { BLOG_REDUCER } from '../../constants/name-store/user/name-space-reducer';

export const getBlogCategories = state => state[BLOG_REDUCER].blogCategories;
