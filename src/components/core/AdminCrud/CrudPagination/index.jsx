import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
const CrudPagination = (props) => {
  const totalPage =
    parseInt(props.totalItems, 10) / parseInt(props.itemsPerPage, 10);
  const items = [];
  for (let i = 0; i < totalPage; i++) {
    items.push(
      <li>
        <button className={styles.button}>{i + 1}</button>
      </li>
    );
  }
  if (!items.length) {
    return ``;
  }
  return (
    <div className={styles[`pagination-container`]}>
      <ReactPaginate
        forcePage={props.page - 1}
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={totalPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={(data) => {
          if (props.isTop) {
            $("html, body").animate({ scrollTop: 0 }, 800);
          }
          props.onChange(data.selected + 1);
        }}
        containerClassName={styles.pagination}
        subContainerClassName="pages pagination"
        activeClassName={styles["active-page"]} // Sử dụng lớp CSS từ styles.module.scss
        pageClassName={styles["page-item"]} // Sử dụng lớp CSS từ styles.module.scss
      ></ReactPaginate>
    </div>
  );
};
CrudPagination.propTypes = {
  onChange: PropTypes.func,
  isTop: PropTypes.string,
  page: PropTypes.string,
  totalItems: PropTypes.string,
  itemsPerPage: PropTypes.string,
};
export default CrudPagination;
