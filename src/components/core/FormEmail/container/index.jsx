// FormEmailContainer.jsx
import React, { useState } from "react";
import FormEmail from "../presentational/index";
import { data } from "../constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const initializeFormState = (schemaForm) => {
  return schemaForm.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});
};

const templateProps = {
  endpoint: "/test",
  type: "edit",
  schemaForm: data.items,
  onClose: () => {},
  defaultValues: {},
  action: "",
};

const FormEmailContainer = (props) => {
  // const dispatch = useDispatch();
  // * Merge default props with props passed to the component
  const { type, schemaForm, defaultValues, handlerSubmit } = {
    ...templateProps,
    ...props,
  };

  // * Define state cho container FormEmail
  const [formState, setFormState] = useState(() =>
    initializeFormState(schemaForm, defaultValues, type)
  );

  // * Function to handle onchange input
  const handleChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };

  // * Function to handle submit for Form
  const handleSubmit = (event) => {
    event.preventDefault();

    handlerSubmit(formState);
  };
  // * Thực hiện side effect khi nhận thông báo submit

  return (
    <FormEmail
      schemaForm={schemaForm}
      formState={formState}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormEmailContainer;
