import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const SearchInput = ({ searchText, placeHolder, onChangeSearchText }) => {
  return (
    <div>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <i className="fa-solid fa-magnifying-glass text-[black]"></i>
        </InputLeftElement>
        <Input
          value={searchText}
          onChange={onChangeSearchText}
          width="300px"
          variant="filled"
          type="tel"
          placeholder={placeHolder}
          size="100px"
        />
      </InputGroup>
    </div>
  );
};
SearchInput.propTypes = {
  placeHolder: PropTypes.string,
  onChangeSearchText: PropTypes.string,
};

SearchInput.defaultProps = {
  placeHolder: "Nhập dữ liệu ...",
};

export default SearchInput;
