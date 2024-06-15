import React, { useContext } from "react";
import CrudList from "./CrudList";
import PropTypes from "prop-types";
import BreadCrumb from "./BreadCrumb";
import styles from "./styles.module.scss";
import CrudPagination from "./CrudPagination";
import YnmCrudPaginationItemsPerPage from "./YnmCrudPaginationItemsPerPage";
import { useState } from "react";
import { useEffect } from "react";
import ContextCrudProvider, { CrudContext } from "./CrudContext/CrudContext";
import { Skeleton } from "@chakra-ui/react";
import SekeletonCrudList from "./SekeletonCrudList";
import ProgressFeching from "./Progress";
const AdminCrud = () => {
  const {
    searchText,
    oldData,
    setOldData,
    loaded,
    setLoaded,
    isFetching,
    setFetching,
    items,
    setItems,
    defaultApiParams,
    setDefaultParams,
    crudOptions,
    setCrudOptions,
    errors,
    setErrors,
    classNameProps,
    mode,
    perpage,
    setPerpage,
    handleChangeSearchtext,
    selectPerpage,
    selectPagination,
  } = useContext(CrudContext);
  return (
    <div className="relative">
      {isFetching && <ProgressFeching></ProgressFeching>}
      <div className={`${isFetching && "opacity-30"} ${styles[`main-crud`]}`}>
        <BreadCrumb
          searchText={searchText}
          onChangeSearchText={handleChangeSearchtext}
          isSearchInput
        ></BreadCrumb>
        {isFetching ? (
          <SekeletonCrudList></SekeletonCrudList>
        ) : (
          <CrudList
            items={items}
            classNameProps={classNameProps}
            schema={crudOptions.schema}
          ></CrudList>
        )}
        {crudOptions.mode.paging && (
          <div className="flex justify-around mt-3">
            <CrudPagination
              isTop
              itemsPerPage={2}
              totalItems={100}
              page={crudOptions.page || 1}
              onChange={selectPagination}
            ></CrudPagination>
            <YnmCrudPaginationItemsPerPage
              value={perpage}
              onChange={selectPerpage}
            ></YnmCrudPaginationItemsPerPage>
          </div>
        )}
      </div>
    </div>
  );
};

AdminCrud.propTypes = {
  mode: PropTypes.object,
  schema: PropTypes.object,
  crudOptions: PropTypes.object,
  classNameProps: PropTypes.shape({
    tableBodyRow: PropTypes.string,
  }),
};
export default AdminCrud;
