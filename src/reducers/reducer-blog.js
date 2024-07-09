import {
  FETCH_BLOG_FAILED,
  FETCH_BLOG_SUCCESS,
  FETCHED_BLOG,
  FETCHING_BLOG,
  RESET_STATUS_FETCH_BLOG,
  SET_BLOG,
} from '../actions/action-blog';
import {
  FETCH_BLOG_CATEGORIES_FAILED,
  FETCH_BLOG_CATEGORIES_SUCCESS,
  FETCHED_BLOG_CATEGORIES,
  FETCHING_BLOG_CATEGORIES,
  RESET_STATUS_FETCH_BLOG_CATEGORIES,
  SET_BLOG_CATEGORIES,
} from '../actions/action-blog-categories';

export const initialState = {
  // 111 state blog categories
  blogCategories: [],
  isFetchingBlogCategories: false,
  isFetchBlogCategoriesSuccsess: false,
  isFetchBlogCategoriesFailed: false,
  // 222 state blog categories
  blog: {},
  isFetchingBlog: false,
  isFetchBlogSuccsess: false,
  isFetchBlogFailed: false,
};

// 222 handler get blog categories
const handlerFetchingBlogCategories = state => ({
  ...state,
  isFetchingBlogCategories: true,
});
const handlerFetchedBlogCategories = state => ({
  ...state,
  isFetchingBlogCategories: false,
});
const handlerSetBlogCategories = (state, action) => ({
  ...state,
  blogCategories: action.payload,
});
const handlerFetchBlogCategoriesCuccess = state => ({
  ...state,
  isFetchBlogCategoriesSuccsess: true,
});
const handlerFetchBlogCategoriesFailed = state => ({
  ...state,
  isFetchBlogCategoriesFailed: true,
});
const handlerResetStatusFetchBlogCategories = state => ({
  ...state,
  isFetchBlogCategoriesSuccsess: false,
  isFetchBlogCategoriesFailed: false,
});
// 333 handler get blog
const handlerFetchingBlog = state => ({
  ...state,
  isFetchingBlog: true,
});
const handlerFetchedBlog = state => ({
  ...state,
  isFetchingBlog: false,
});
const handlerSetBlog = (state, action) => ({
  ...state,
  blog: action.payload,
});
const handlerFetchBlogCuccess = state => ({
  ...state,
  isFetchBlogSuccsess: true,
});
const handlerFetchBlogFailed = state => ({
  ...state,
  isFetchBlogsFailed: true,
});
const handlerResetStatusFetchBlog = state => ({
  ...state,
  isFetchBlogSuccsess: false,
  isFetchBlogFailed: false,
});
const mapperHandle = {
  /// 222 action blog categories
  [FETCHING_BLOG_CATEGORIES]: handlerFetchingBlogCategories,
  [SET_BLOG_CATEGORIES]: handlerSetBlogCategories,
  [FETCHED_BLOG_CATEGORIES]: handlerFetchedBlogCategories,
  [FETCH_BLOG_CATEGORIES_SUCCESS]: handlerFetchBlogCategoriesCuccess,
  [FETCH_BLOG_CATEGORIES_FAILED]: handlerFetchBlogCategoriesFailed,
  [RESET_STATUS_FETCH_BLOG_CATEGORIES]: handlerResetStatusFetchBlogCategories,

  // 333 action blog
  [FETCHING_BLOG]: handlerFetchingBlog,
  [SET_BLOG]: handlerSetBlog,
  [FETCHED_BLOG]: handlerFetchedBlog,
  [FETCH_BLOG_SUCCESS]: handlerFetchBlogCuccess,
  [FETCH_BLOG_FAILED]: handlerFetchBlogFailed,
  [RESET_STATUS_FETCH_BLOG]: handlerResetStatusFetchBlog,
};
export const reducerBlogsUser = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
