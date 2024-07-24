// FormEmail.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import styles from './styles.module.scss';

const FormEmail = ({
  schemaForm,
  formState,
  doneText,
  handleChange,
  handleSubmit,
}) => {
  const renderInput = (item, defaultValue) => {
    switch (item.type) {
      case 'select':
        return (
          <Select
            defaultValue={defaultValue || item.items[0].value}
            onChange={e => handleChange(item.name, e.target.value)}
          >
            {item.items.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </Select>
        );
      case 'file':
        return <input type="file" />;
      default:
        return (
          <Input
            defaultValue={defaultValue}
            {...item}
            value={formState[item.name]}
            onChange={e => handleChange(item.name, e.target.value)}
          />
        );
    }
  };

  const renderField = (item, defaultValue) => (
    <FormControl className={styles.field} key={item.name} isRequired>
      {item.label && <FormLabel htmlFor={item.name}>{item.label}</FormLabel>}
      {renderInput(item, defaultValue)}
      <FormErrorMessage>Name is required.</FormErrorMessage>
    </FormControl>
  );

  const renderListFields = () =>
    schemaForm.map(item => {
      const defaultValue = formState[item.name] || '';
      return renderField(item, defaultValue);
    });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {renderListFields()}
      <Button
        backgroundColor={'blue'}
        type="submit"
        leftIcon={<AddIcon fontWeight={'700'} color={'white'} />}
        color={'white'}
      >
        {doneText[0].label || 'Save'}
      </Button>

      {doneText[1] && (
        <Button
          backgroundColor={'blue'}
          type="submit"
          leftIcon={<AddIcon fontWeight={'700'} color={'white'} />}
          color={'white'}
        >
          {doneText[1].label}
        </Button>
      )}
    </form>
  );
};

FormEmail.propTypes = {
  schemaForm: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  formState: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormEmail;
