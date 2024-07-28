import React, { useContext } from 'react';
import CrudList from './CrudList';
import PropTypes from 'prop-types';
import BreadCrumb from './BreadCrumb';
import styles from './styles.module.scss';
import CrudPagination from './CrudPagination';
import YnmCrudPaginationItemsPerPage from './YnmCrudPaginationItemsPerPage';
import { CrudContext } from './CrudContext/CrudContext';
import SekeletonCrudList from './SekeletonCrudList';
import ProgressFeching from './Progress';
const AdminCrud = () => {
  const {
    searchText,
    isFetching,
    items,
    crudOptions,
    classNameProps,
    perpage,
    sendEmail,
    handleChangeSearchtext,
    selectPerpage,
    selectPagination,
    schemaForm,
    handleChangeSearchId,
  } = useContext(CrudContext);
  const actionSendMail = {};

  const { mode, onClickRow } = crudOptions;
  return (
    <div className="relative">
      {isFetching && <ProgressFeching></ProgressFeching>}
      <div className={`${isFetching && 'opacity-30'} ${styles[`main-crud`]}`}>
        <BreadCrumb
          mode={mode}
          sendEmail={sendEmail}
          actionSendMail={actionSendMail}
          endpoint={crudOptions.endpoint}
          schemaForm={schemaForm}
          searchText={searchText}
          onChangeSearchText={handleChangeSearchtext}
          isSearchInput
          handleChangeSearchId={handleChangeSearchId}
        ></BreadCrumb>
        {isFetching ? (
          <SekeletonCrudList></SekeletonCrudList>
        ) : (
          <CrudList
            onClickRow={onClickRow}
            items={items}
            classNameProps={classNameProps}
            schema={crudOptions.schema}
          ></CrudList>
        )}
        {crudOptions.mode.paging && (
          <div className="flex mt-3 gap-2 items-center">
            <CrudPagination
              isTop
              itemsPerPage={2}
              totalItems={100}
              page={crudOptions.page || 1}
              onChange={selectPagination}
            ></CrudPagination>
            {!_.isEmpty(items) && (
              <YnmCrudPaginationItemsPerPage
                value={perpage}
                onChange={selectPerpage}
              ></YnmCrudPaginationItemsPerPage>
            )}
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
