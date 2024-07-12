import { BLOG_REDUCER } from '../../constants/name-store/user/name-space-reducer';

export const getBlogCategories = state => state[BLOG_REDUCER].blogCategories;
export const getBlogsWithCategory = state => state[BLOG_REDUCER].blogs;
export const getBlog = state => state[BLOG_REDUCER].blog;
export const getAllBlog = state => state[BLOG_REDUCER].allBlogs;
