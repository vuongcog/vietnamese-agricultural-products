import React from 'react';
import Confirm from '../Confirm';
import CreateForm from '../CreateForm';
import ProviderDialogCreateForm from './context/ProviderDialogCreateForm';
import PropTypes from 'prop-types';
const DialogCreateForm = ({ schemaForm, callbackCancel, endpoint, item }) => (
  <ProviderDialogCreateForm endpoint={endpoint} type={schemaForm.type}>
    <Confirm
      callbackCancel={callbackCancel}
      title={schemaForm.title}
      button={schemaForm.button}
    >
      <CreateForm
        doneText={schemaForm.doneText}
        endpoint={endpoint}
        type={schemaForm.type}
        defaultValues={item}
        schemaForm={schemaForm.schemaForm}
        callbackCancel={callbackCancel}
      ></CreateForm>
    </Confirm>
  </ProviderDialogCreateForm>
);
DialogCreateForm.propTypes = {
  item: PropTypes.object,
  itemDetail: PropTypes.object,
  endpoint: PropTypes.string,
  callbackCancel: PropTypes.func,
  schemaForm: PropTypes.object,
};
export default DialogCreateForm;
