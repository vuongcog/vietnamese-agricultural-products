import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import styles from './styles.module.scss';
import classNames from 'classnames';
const { Option } = Select;

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Tiếng Việt' },
];
const SelectLanguage = ({
  classNameProps,
  width = 150,
  fontWeight,
  ...props
}) => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = value => {
    i18n.changeLanguage(value);
  };
  return (
    <div className={classNames(styles.customOption, classNameProps)}>
      <Select
        defaultValue={i18n.language}
        style={{
          width: width,
        }}
        onChange={handleChangeLanguage}
        bordered={false}
        {...props}
      >
        {languageOptions.map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectLanguage;
