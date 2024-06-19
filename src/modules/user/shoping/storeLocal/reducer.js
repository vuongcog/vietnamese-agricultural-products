import {
  SET_ITEMS,
  SET_LOADING,
  SET_PAGE,
  SET_REFRESH,
} from "../constants/constants";

export const initialState = {
  refresh: false,
  loading: false,
  limit: 10,
  page: 1,
  items: [],
};
const handleSetLoading = (state, action) => {
  return { ...state, loading: action.payload };
};

const handleSetItems = (state, action) => {
  return { ...state, items: [...state.items, ...action.payload] };
};
const handeSetPage = (state) => {
  return { ...state, page: state.page + 1 };
};
const handleRefesh = (state) => {
  return { ...state, refresh: !state.refresh };
};
const mapperHandle = {
  [SET_LOADING]: handleSetLoading,
  [SET_ITEMS]: handleSetItems,
  [SET_PAGE]: handeSetPage,
  [SET_REFRESH]: handleRefesh,
};
export const reducer = (state, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
