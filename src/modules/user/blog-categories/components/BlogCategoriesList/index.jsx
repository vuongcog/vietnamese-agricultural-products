import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import useProducerBlog from '../../../../../useCustom/user/useProducerBlog';
import { useNavigate, useLocation } from 'react-router-dom';
import langsGlobal from '../../../../../langs';
import { useTranslation } from 'react-i18next';
import { Select } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

const BlogCategoriesList = () => {
  const { blogCategories } = useProducerBlog();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get('category');

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCategories = blogCategories?.slice(startIndex, endIndex);
  const totalPages = Math.ceil((blogCategories?.length || 0) / itemsPerPage);

  const handlePageClick = data => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    if (currentCategory) {
      const categoryIndex = blogCategories?.findIndex(item => {
        console.log(item.id);
        return item.id == currentCategory;
      });
      if (categoryIndex != -1) {
        console.log(categoryIndex);
        const page = Math.floor(categoryIndex / itemsPerPage);
        setCurrentPage(page);
      }
    }
  }, [currentCategory, blogCategories]);

  useEffect(() => {
    if (!_.isEmpty(paginatedCategories)) {
      const item = paginatedCategories[0];
      navigate(`/blog-categories?category=${item.id}&name=${item.name}`);
    }
  }, [currentPage]);
  return (
    <div className={styles.layout}>
      <h1>{t(langsGlobal.blogCategories)}</h1>
      <div className={styles.container}>
        {/* <label htmlFor="itemsPerPage">Số lượng:</label> */}
        <Select
          className={styles.perpage}
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={e => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(0);
          }}
        >
          {/* <option value={1}>1</option> */}
          {/* <option value={2}>2</option> */}
          {/* <option value={3}>3</option> */}
          {/* <option value={4}>4</option> */}
          <option value={5}>5</option>

          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </Select>

        <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          previousClassName={styles.pageItem}
          previousLinkClassName={styles.pageLink}
          nextClassName={styles.pageItem}
          nextLinkClassName={styles.pageLink}
          breakClassName={styles.pageItem}
          breakLinkClassName={styles.pageLink}
          activeClassName={styles.active}
          forcePage={currentPage}
        />
      </div>

      <ol className={styles['gradient-list']}>
        {paginatedCategories?.map(item => {
          if (item.status === 'inactive') return null;
          const isActive = item.id == currentCategory;
          return (
            <li
              className={`${
                isActive ? styles.active : ''
              } hover:cursor-pointer hover:underline`}
              onClick={() => {
                navigate(
                  `/blog-categories?category=${item.id}&name=${item.name}`
                );
              }}
              key={item.name}
            >
              {item.name}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default BlogCategoriesList;
