import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchFilter } from '../../../../modules/user/shoping/store/selector/selector';
import { FILTER_SEARCH } from '../../../../modules/user/shoping/store/reducer/filterConstants';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import { FETCH_CATEGORY } from '../../../../actions/action-category';
import useProducerCategory from '../../../../useCustom/user/useProducerCategory';

const SearchHeader = () => {
  const search = useSelector(getSearchFilter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(search);
  const [options, setOptions] = useState([]);
  const { categories } = useProducerCategory();
  const suggestions = categories?.map(item => item.category_name);

  useEffect(() => {
    dispatch({ type: FETCH_CATEGORY });
  }, []);

  const debouncedSearch = debounce(value => {
    dispatch({ type: FILTER_SEARCH, payload: value });
    navigate(`/shopping?keyword=${encodeURIComponent(value)}`);
  }, 1);

  const handleSearchChange = value => {
    setSearchValue(value);
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setOptions(
      filteredSuggestions.map(suggestion => ({
        value: suggestion,
        label: suggestion,
      }))
    );
  };

  const handleSelect = value => {
    setSearchValue(value);
    debouncedSearch(value);
  };

  const handleSearchClick = () => {
    debouncedSearch(searchValue);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      debouncedSearch(searchValue);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <AutoComplete
        value={searchValue}
        onSearch={handleSearchChange}
        onSelect={handleSelect}
        style={{ width: '50%' }}
        options={options}
      >
        <Input
          value={searchValue}
          onChange={e => handleSearchChange(e.target.value)}
          onKeyPress={handleKeyPress}
          suffix={
            <SearchOutlined
              onClick={handleSearchClick}
              style={{ cursor: 'pointer' }}
            />
          }
          placeholder="Search..."
        />
      </AutoComplete>
    </div>
  );
};

export default SearchHeader;
