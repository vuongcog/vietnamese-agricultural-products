import React, { useRef, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { ContextDialogCreateForm } from "../DialogCreateForm/context/ProviderDialogCreateForm";
import { UPDATE_DATA } from "../AdminCrud/Store/constants";
import {
  getErrorCrudList,
  getErrorTimeStampCrudList,
  getRefreshCrudList,
} from "../AdminCrud/Store/selector";

const CreateForm = ({ endpoint, type, schemaForm, onClose, defaultValues }) => {
  const { setValueForm } = useContext(ContextDialogCreateForm);
  const errorMessage = useSelector(getErrorCrudList);
  const errorTimestamp = useSelector(getErrorTimeStampCrudList);
  const refresh = useSelector(getRefreshCrudList);
  const isFirstMount = useRef(true);
  const isFirstMountSuccess = useRef(true);

  const [formState, setFormState] = useState(
    schemaForm.reduce((acc, field) => {
      acc[field.name] = type === UPDATE_DATA ? defaultValues[field.name] : "";
      return acc;
    }, {})
  );

  const handleChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { ...formState };

    if (type === UPDATE_DATA) {
      data["endpoint"] = `${endpoint}/${defaultValues.id}?_method=PUT`;
    }

    setValueForm(data);
  };

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    alert(errorMessage);
  }, [errorMessage, errorTimestamp]);

  useEffect(() => {
    if (isFirstMountSuccess.current) {
      isFirstMountSuccess.current = false;
      return;
    }
    alert("Thành công");
    onClose();
  }, [refresh]);

  const renderField = (item, defaultValue) => {
    const renderInput = () => {
      switch (item.type) {
        case "select":
          return (
            <Select
              defaultValue={defaultValue || item.items[0].value}
              onChange={(e) => handleChange(item.name, e.target.value)}
            >
              {item.items.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </Select>
          );
        case "file":
          return <input type="file" />;
        default:
          return (
            <Input
              defaultValue={defaultValue}
              {...item}
              value={formState[item.name]}
              onChange={(e) => handleChange(item.name, e.target.value)}
            />
          );
      }
    };

    return (
      <FormControl className={styles.field} key={item.name} isRequired>
        {item.label && <FormLabel htmlFor={item.name}>{item.label}</FormLabel>}
        {renderInput()}
        <FormErrorMessage>Name is required.</FormErrorMessage>
      </FormControl>
    );
  };

  const renderListFields = () => {
    return schemaForm.map((item) => {
      const defaultValue = defaultValues[item.name];
      return renderField(item, defaultValue);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {renderListFields()}
      <Button type="submit" leftIcon={<AddIcon />}>
        Create
      </Button>
    </form>
  );
};

CreateForm.propTypes = {
  endpoint: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
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
  onClose: PropTypes.func,
  defaultValues: PropTypes.object,
};

export default CreateForm;
