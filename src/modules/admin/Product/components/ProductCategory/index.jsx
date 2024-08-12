import React, { useState } from 'react';
import styles from './ProductCategory.module.scss';
import ProductDes from '../ProductDes';
import ProductInfo from '../ProductInfo';
import { useEffect } from 'react';
import axios from 'axios';
import Http from '../../../../../utils/http/http';
import { parseObjectJson } from '../../../../../utils/parse-json';
import { Tooltip } from '@chakra-ui/react';

const ProductCategory = ({ id }) => {
  const [category, setCategory] = useState({});
  useEffect(() => {
    const http = new Http(`/category/${id}`);
    http.withId(id).then(res => {
      setCategory(parseObjectJson(res.data).data);
    });
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles[`background-detail`]}></div>
      <div className={styles.profileContainer}>
        <div className={styles.avatarWrapper}>
          <div className="text-[24px] font-bold">Danh mục sản phẩm</div>
        </div>
        <h2 className={styles.name}>{category.category_name}</h2>
        {/* <p className={styles.email}>{user.email}</p> */}
        <span
          className={`${styles.badge} ${
            category.status === 'active' ? styles.active : styles.inactive
          }`}
        >
          {category.status}
        </span>
        <div className={styles.info}>
          <div className="flex gap-1 items-center">
            <strong>Description:</strong>
            <Tooltip
              placement="top"
              label={category.category_des}
              aria-label="Full text"
            >
              <div name={'des'}>{category.category_des}</div>
            </Tooltip>
          </div>

          <p>
            <strong>Created at:</strong>{' '}
            {new Date(category.created_at).toLocaleString()}
          </p>
          <p>
            <strong>Updated at:</strong>{' '}
            {new Date(category.updated_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
