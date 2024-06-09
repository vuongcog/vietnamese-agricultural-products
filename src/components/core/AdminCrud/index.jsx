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
import { Progress } from "@chakra-ui/react";
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
    handleChangeSearchtext,
  } = useContext(CrudContext);

  return (
    <div className={styles[`main-crud`]}>
      <BreadCrumb
        searchText={searchText}
        onChangeSearchText={handleChangeSearchtext}
        isSearchInput
      ></BreadCrumb>
      <CrudList
        items={items}
        classNameProps={classNameProps}
        schema={crudOptions.schema}
      ></CrudList>
      {crudOptions.mode.paging && (
        <div>
          <div>
            <div>
              <YnmCrudPaginationItemsPerPage value="10"></YnmCrudPaginationItemsPerPage>
              <CrudPagination
                isTop
                itemsPerPage={2}
                totalItems={100}
                page={crudOptions.page || 1}
                onChange={() => {
                  console.log("hello");
                }}
              ></CrudPagination>
            </div>
          </div>
        </div>
      )}
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
