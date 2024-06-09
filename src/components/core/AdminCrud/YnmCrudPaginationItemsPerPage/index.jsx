import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import styles from "./styles.module.scss";
const YnmCrudPaginationItemsPerPage = ({ value, onChange }) => {
  const [selectdOption, setSelectedOption] = useState(null);
  const options = [
    {
      value: "5",
      label: `5 per page`,
    },
    {
      value: "10",
      label: `10 per page`,
    },
    {
      value: "20",
      label: `20 per page`,
    },
    {
      value: "50",
      label: `50 per page`,
    },
    {
      value: "100",
      label: `100 per page`,
    },
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
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#ffffff" : "#52575C",
      backgroundColor: state.isSelected ? "#2996E5" : "#ffffff",
    }),
  };
  useEffect(() => {
    generateSelectedOption(value);
  }, [value]);
  return (
    <div className={styles["pagination-container"]}>
      <div className={styles["pagination-container-dropdown"]}></div>
      <Select
        menuPlacement="top"
        className="select"
        value={selectdOption}
        onChange={(value) => {
          setSelectedOption(value);
        }}
        styles={customStyles}
        options={options}
        isClearable={false}
      ></Select>
    </div>
  );
};

export default YnmCrudPaginationItemsPerPage;
