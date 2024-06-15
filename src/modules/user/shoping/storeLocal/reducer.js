import { SET_ITEMS, SET_LOADING, SET_PAGE } from "../constants/constants";

export const initialState = {
  loading: false,
  limit: 10,
  page: 1,
  items: [],
};
const handleSetLoading = (state, action) => {
  return { ...state, loading: action.payload };
};

const handleSetItems = (state, action) => {
  console.log("set item");
  return { ...state, items: [...state.items, ...action.payload] };
};
const handeSetPage = (state, action) => {
  return { ...state, page: state.page + 1 };
};
const mapperHandle = {
  [SET_LOADING]: handleSetLoading,
  [SET_ITEMS]: handleSetItems,
  [SET_PAGE]: handeSetPage,
};
export const reducer = (state, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
