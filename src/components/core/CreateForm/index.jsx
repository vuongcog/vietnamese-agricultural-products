import React, { useState, useEffect, useContext } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { ContextDialogCreateForm } from "../DialogCreateForm/context/ProviderDialogCreateForm";
import { ADD_DATA, UPDATE_DATA } from "../AdminCrud/Store/constants";
import { getAddingData, getUpdatingData } from "../AdminCrud/Store/selector";
import ProgressFullScreen from "../ProgressFullScreen";
import axios from "axios";
import { toast } from "react-toastify";
import { MAPPER_NAME } from "../../../utils/mapping-name";
import {
  formatDate,
  formatDefaultDate,
  formatInputDate,
} from "../../../utils/format-input-date";
import { useTranslation } from "react-i18next";

const CreateForm = ({
  doneText = ["Cancel", "Create"],
  endpoint,
  type,
  schemaForm,
  onClose,
  defaultValues,
  callbackCancel,
}) => {
  const { setValueForm } = useContext(ContextDialogCreateForm);
  const isAddingData = useSelector(getAddingData);
  const isUpdatingData = useSelector(getUpdatingData);
  const { t } = useTranslation();
  const [formState, setFormState] = useState(
    schemaForm.reduce((acc, field) => {
      acc[field.name] = type === UPDATE_DATA ? defaultValues[field.name] : "";
      if (field.items) {
        acc[field.name] = field.items[0].value;
      }
      if (field.type === "file") {
        acc[field.name] = null;
      }
      return acc;
    }, {})
  );
  const handleChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    schemaForm.map((field) => {
      if (field.type === "file" && formState[field.name]) {
        const file = formState[field.name];
        const validImageTypes = [
          "image/gif",
          "image/jpeg",
          "image/png",
          "image/webp",
        ];
        if (!validImageTypes.includes(file.type)) {
          toast.error(`${MAPPER_NAME[field.name]} phải là một hình ảnh`);
        }
      }
    });

    let data = { ...formState };
    // 111 hàm này dùng để xóa các filed không có dữ liệu hoặc ""
    data = Object.fromEntries(
      Object.entries(data).filter(
        ([, value]) => value !== null && value !== undefined && value !== ""
      )
    );
    if (type === UPDATE_DATA) {
      data["endpoint"] = `${endpoint}/${defaultValues.id}?_method=PUT`;
    }
    if (type === ADD_DATA) {
      data["endpoint"] = `${endpoint}`;
    }
    setValueForm(data);
  };

  const RenderField = (item, defaultValue) => {
    const [options, setOptions] = useState(item.items || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
      if (item.endpoint) {
        setLoading(true);
        axios
          .get(item.endpoint, {
            headers: {
              Authorization: `Bearer ${Cookies.get("accsessToken")}`,
            },
          })
          .then((res) => {
            setOptions(
              res.data.data.map((option) => ({
                value: option[item.valueField],
                name: option[item.labelField],
              }))
            );
          })
          .catch((err) => {
            console.error(
              "There has been a problem with your fetch operation:",
              err
            );
            setError(err.message);
          })
          .finally(() => {
            setLoading(false);
          });
      }
      return () => {
        setError(null);
      };
    }, [item.endpoint]);

    if (error) toast.error(error);

    const renderInput = () => {
      switch (item.type) {
        case "select":
          return (
            <>
              {loading ? (
                <Spinner size="sm" />
              ) : (
                <Select
                  defaultValue={defaultValue || options[0]?.value}
                  onChange={(e) => handleChange(item.name, e.target.value)}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </Select>
              )}
            </>
          );

        case "date":
          return (
            <Input
              {...item}
              type="date"
              defaultValue={formatDefaultDate(formState[item.name])}
              value={formatDate(formState[item.name])}
              onChange={(e) =>
                handleChange(item.name, formatInputDate(e.target.value))
              }
              pattern="\d{4}-\d{2}-\d{2}"
            />
          );
        case "file":
          return (
            <Input
              {...item}
              onChange={(e) => {
                handleChange(item.name, e.target.files[0]);
              }}
              type="file"
            />
          );
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
      <FormControl
        className={styles.field}
        key={item.name}
        isRequired={item.isRequire}
      >
        {item.label && (
          <FormLabel htmlFor={item.name}>{t(item.label)}</FormLabel>
        )}
        {renderInput()}
        <FormErrorMessage>Name is required.</FormErrorMessage>
      </FormControl>
    );
  };

  const renderListFields = () => {
    return schemaForm.map((item) => {
      const defaultValue = _.get(defaultValues, "name");
      return RenderField(item, defaultValue);
    });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {isAddingData && <ProgressFullScreen></ProgressFullScreen>}
      {isUpdatingData && <ProgressFullScreen></ProgressFullScreen>}

      {renderListFields()}
      <div className="mt-6 flex items-center gap-6">
        <Button
          colorScheme="red"
          onClick={() => {
            callbackCancel?.(null);
            onClose();
          }}
          ml={3}
        >
          {doneText[0]}
        </Button>
        <Button
          color={"white"}
          fontWeight={"500"}
          backgroundColor={"#3b82f6"}
          type="submit"
          leftIcon={<AddIcon />}
        >
          {doneText[1]}
        </Button>
      </div>
    </form>
  );
};

CreateForm.propTypes = {
  callbackCancel: PropTypes.func,
  doneText: [],
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
