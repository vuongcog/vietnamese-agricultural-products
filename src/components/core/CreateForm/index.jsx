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
  effect,
} from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { ContextDialogCreateForm } from "../DialogCreateForm/context/ProviderDialogCreateForm";
import { ADD_DATA, UPDATE_DATA } from "../AdminCrud/Store/constants";
import {
  getAddingData,
  getErrorCrudList,
  getErrorTimeStampCrudList,
  getRefreshCrudList,
} from "../AdminCrud/Store/selector";
import AlertMessage from "../AlertMessage";
import { useMemo } from "react";
import ProgressFullScreen from "../ProgressFullScreen";

const CreateForm = ({ endpoint, type, schemaForm, onClose, defaultValues }) => {
  const { setValueForm } = useContext(ContextDialogCreateForm);
  const errorMessage = useSelector(getErrorCrudList);
  const errorTimestamp = useSelector(getErrorTimeStampCrudList);
  const refresh = useSelector(getRefreshCrudList);
  const isFirstMount = useRef(true);
  const isFirstMountSuccess = useRef(true);
  const [element, setElement] = useState(null);
  const isAddingData = useSelector(getAddingData);
  const [formState, setFormState] = useState(
    schemaForm.reduce((acc, field) => {
      acc[field.name] = type === UPDATE_DATA ? defaultValues[field.name] : "";
      if (field.items) {
        acc[field.name] = field.items[0].value;
      }
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
    if (type === ADD_DATA) {
      data["endpoint"] = `${endpoint}`;
    }

    setValueForm(data);
  };

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
    } else {
      setElement(<AlertMessage status="error" message="Thất bại" />);
      var timer = setTimeout(() => {
        setElement(null);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage, errorTimestamp]);
  useEffect(() => {
    if (isFirstMountSuccess.current) {
      isFirstMountSuccess.current = false;
    } else {
      setElement(<AlertMessage status="success" message="Tạo thành công" />);
      var timer = setTimeout(() => {
        setElement(null);
        onClose();
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
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
      const defaultValue = _.get(defaultValues, "name");
      return renderField(item, defaultValue);
    });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {element}
      {isAddingData && <ProgressFullScreen></ProgressFullScreen>}

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
