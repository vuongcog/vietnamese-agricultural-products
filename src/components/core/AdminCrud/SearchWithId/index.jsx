import React from 'react';
import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa'; // Sử dụng biểu tượng tìm kiếm từ react-icons

const SearchWithId = ({ searchText, placeHolder, onChangeSearchText }) => (
  <Box className="search-container">
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <FaSearch className="search-icon" />
      </InputLeftElement>
      <Input
        color={'black'}
        value={searchText}
        onChange={onChangeSearchText}
        width="150px"
        variant="filled"
        type="text"
        placeholder={placeHolder}
        size="md"
        className="search-input"
      />
    </InputGroup>
  </Box>
);

SearchWithId.propTypes = {
  searchText: PropTypes.string,
  placeHolder: PropTypes.string,
  onChangeSearchText: PropTypes.func.isRequired,
};

SearchWithId.defaultProps = {
  placeHolder: 'Tìm ID...',
};

export default SearchWithId;
