import {
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_SUCCESS,
  FETCHED_CATEGORY,
  FETCHING_CATEGORY,
  RESET_STATUS_FETCH_CATEGORY,
  SET_CATEGORIES,
} from '../actions/action-category';

export const initialState = {
  categories: [],
  isFetchingCategory: false,
  isFetchCategorySuccsess: false,
  isFetcheCategoryFailed: false,
};
const handlerFetchingCategory = state => ({ ...state });
const handlerSetCategory = (state, action) => ({
  ...state,
  categories: action.payload,
});
const handlerFetchedCategory = state => ({ ...state });
const handlerFetchCategorySuccess = state => ({
  ...state,
  isFetchCategorySuccsess: true,
});
const handlerFetchCategoryFailed = state => ({
  ...state,
  isFetcheCategoryFailed: true,
});
const handlerResetStatusCategory = state => ({
  ...state,
  isFetcheCategoryFailed: false,
  isFetchCategorySuccsess: false,
});

const mapperHandle = {
  // 333 action categories
  [FETCHING_CATEGORY]: handlerFetchingCategory,
  [SET_CATEGORIES]: handlerSetCategory,
  [FETCHED_CATEGORY]: handlerFetchedCategory,
  [FETCH_CATEGORY_SUCCESS]: handlerFetchCategorySuccess,
  [FETCH_CATEGORY_FAILED]: handlerFetchCategoryFailed,
  [RESET_STATUS_FETCH_CATEGORY]: handlerResetStatusCategory,
};

export const reducerCategoryUser = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
