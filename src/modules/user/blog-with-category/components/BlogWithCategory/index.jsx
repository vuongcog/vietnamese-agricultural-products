import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import useProducerBlog from '../../../../../useCustom/user/useProducerBlog';
import { useTranslation } from 'react-i18next';
import langsGlobal from '../../../../../langs';
import { INACTIVE } from '../../../../../constants/mapper-status';
import { Box, Select, Tooltip } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
const BlogWithCategory = ({ name }) => {
  const { blogs } = useProducerBlog();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(1);
  const startIndex = currentPage * limit;
  const endIndex = startIndex + limit;
  const paginatedBlogs = blogs?.slice(startIndex, endIndex);
  const totalPages = Math.ceil((blogs?.length || 0) / limit);

  const handlePageClick = data => {
    setCurrentPage(data.selected);
  };

  if (_.isEmpty(blogs)) return null;

  return (
    <div className={styles.layout}>
      <Tooltip
        placement="top"
        label={`${t(langsGlobal.blogsWithCategory)} ${name}`}
        aria-label="Full text"
      >
        <h1 className={styles.header_title}>{`${name}`}</h1>
      </Tooltip>

      <div className={styles.container}>
        {/* <label htmlFor="limit">Số lượng:</label> */}
        <div className={styles.perpage_container}>
          <Select
            className={styles.perpage}
            id="limit"
            value={limit}
            onChange={e => {
              setLimit(Number(e.target.value));
              setCurrentPage(0);
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </Select>
        </div>
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

      <ol className={styles[`gradient-list`]}>
        {paginatedBlogs?.map(item => {
          if (item.status === INACTIVE) return null;
          return (
            <li
              onClick={() => {
                navigate(`/blogs/blog/${item.blog_slug}`);
              }}
              key={item.blog_title}
            >
              <div className="flex gap-3 items-center">
                <img
                  className={`w-[60px] h-[60px] object-cover`}
                  src={item.blog_image}
                  alt=""
                />
                <div>
                  <div className={styles.title}>{item.blog_title}</div>
                  <p
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default BlogWithCategory;
