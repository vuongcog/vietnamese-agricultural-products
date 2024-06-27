import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import useProducerStateCrudFilter from "../utils/useProducerStateFilter";

const CrudPagination = (props) => {
  const { totalPage } = useProducerStateCrudFilter();

  if (totalPage <= 1) {
    return null;
  }

  return (
    <div className={styles.paginationContainer}>
      <ReactPaginate
        forcePage={props.page - 1}
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        breakClassName={styles.breakMe}
        pageCount={totalPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={(data) => {
          if (props.isTop) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          props.onChange(data.selected + 1);
        }}
        containerClassName={styles.pagination}
        activeClassName={styles.activePage}
        pageClassName={styles.pageItem}
        previousClassName={styles.navButton}
        nextClassName={styles.navButton}
        disabledClassName={styles.disabled}
      />
    </div>
  );
};

CrudPagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  isTop: PropTypes.bool,
  page: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default CrudPagination;
