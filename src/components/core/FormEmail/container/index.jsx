// FormEmailContainer.jsx
import React, { useState } from 'react';
import FormEmail from '../presentational/index';
import { data } from '../constants';

const initializeFormState = schemaForm =>
  schemaForm.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

const templateProps = {
  type: 'edit',
  schemaForm: data,
  onClose: () => {},
  defaultValues: {},
  action: '',
};

const FormEmailContainer = props => {
  // const dispatch = useDispatch();
  // * Merge default props with props passed to the component
  const { type, schemaForm, defaultValues, handlerSubmit } = {
    ...templateProps,
    ...props,
  };
  console.log(schemaForm);

  // * Define state cho container FormEmail
  const [formState, setFormState] = useState(() =>
    initializeFormState(schemaForm.items, defaultValues, type)
  );

  // * Function to handle onchange input
  const handleChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };

  // * Function to handle submit for Form
  const handleSubmit = event => {
    event.preventDefault();

    handlerSubmit(formState);
  };
  // * Thực hiện side effect khi nhận thông báo submit

  return (
    <FormEmail
      doneText={schemaForm.doneText}
      schemaForm={schemaForm.items}
      formState={formState}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormEmailContainer;
