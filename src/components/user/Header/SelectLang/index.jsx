import React from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";

const { Option } = Select;

const languageOptions = [
  { value: "en", label: "English" },
  { value: "vi", label: "Tiếng Việt" },
];
const SelectLanguage = (props) => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <Select
      defaultValue={i18n.language}
      style={{ width: 120 }}
      onChange={handleChangeLanguage}
      bordered={false}
      {...props}
    >
      {languageOptions.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectLanguage;
