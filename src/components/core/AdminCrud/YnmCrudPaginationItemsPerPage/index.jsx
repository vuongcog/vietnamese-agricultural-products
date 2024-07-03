import React, { useEffect, useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import _ from "lodash";
import styles from "./styles.module.scss";

const YnmCrudPaginationItemsPerPage = ({ value, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "5", label: "5 per page" },
    { value: "10", label: "10 per page" },
    { value: "20", label: "20 per page" },
    { value: "50", label: "50 per page" },
    { value: "100", label: "100 per page" },
  ];

  const generateSelectedOption = (value) => {
    const checked = _.find(
      options,
      (o) => parseInt(o.value, 10) === parseInt(value, 10)
    );
    if (checked) {
      setSelectedOption(checked);
      return;
    }
    setSelectedOption({ value: "10", label: "10 per page" });
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onChange(selectedOption.value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#ffffff" : "#52575C",
      backgroundColor: state.isSelected ? "#2996E5" : "#ffffff",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#8ca1a9",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "16px",
      fontFamily: "var(--font-family)",
    }),
  };

  useEffect(() => {
    generateSelectedOption(value);
  }, [value]);

  return (
    <div className={styles.paginationContainer}>
      <Select
        menuPlacement="top"
        value={selectedOption}
        onChange={handleChange}
        styles={customStyles}
        options={options}
        isClearable={false}
      />
    </div>
  );
};

YnmCrudPaginationItemsPerPage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default YnmCrudPaginationItemsPerPage;
