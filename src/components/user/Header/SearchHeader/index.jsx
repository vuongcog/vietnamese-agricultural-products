import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchFilter } from '../../../../modules/user/shoping/store/selector/selector';
import { FILTER_SEARCH } from '../../../../modules/user/shoping/store/reducer/filterConstants';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import {} from '@ant-design/icons';
import styles from './styles.module.scss';
import { FETCH_CATEGORY } from '../../../../actions/action-category';
import { useDebounce } from '../../../../utils/use-debounce';

const SearchHeader = () => {
  const search = useSelector(getSearchFilter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(search);
  const debouncedSearch = useDebounce(searchValue, 300);
  const firstMount = useRef(true);
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
    } else {
      dispatch({ type: FILTER_SEARCH, payload: debouncedSearch });
      navigate(`/shopping?keyword=${encodeURIComponent(debouncedSearch)}`);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    dispatch({ type: FETCH_CATEGORY });
  }, []);

  const handleSearchChange = value => {
    setSearchValue(value);
  };

  return (
    <div className={styles.searchContainer}>
      <Input
        value={searchValue}
        onChange={e => handleSearchChange(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchHeader;
