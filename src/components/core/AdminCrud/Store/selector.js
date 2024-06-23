export const getItemsCrudList = (state) => state.crudList.items;
export const getFetchingCrudList = (state) => state.crudList.isFetching;
export const getRefreshCrudList = (state) => state.crudList.refresh;
export const getErrorCrudList = (state) => state.crudList.error;
export const getAddingData = (state) => state.crudList.isAddingData;
export const getErrorTimeStampCrudList = (state) =>
  state.crudList.errorTimestamp;
