import React from "react";
import Confirm from "../Confirm";
import CreateForm from "../CreateForm";
import ProviderDialogCreateForm from "./context/ProviderDialogCreateForm";
import PropTypes from "prop-types";
const DialogCreateForm = ({ schemaForm, callbackCancel, endpoint, item }) => {
  return (
    <ProviderDialogCreateForm endpoint={endpoint} type={schemaForm.type}>
      <Confirm
        callbackCancel={callbackCancel}
        title={schemaForm.title}
        button={schemaForm.button}
        doneText={schemaForm.doneText}
      >
        <CreateForm
          endpoint={endpoint}
          type={schemaForm.type}
          defaultValues={item}
          schemaForm={schemaForm.schemaForm}
        ></CreateForm>
      </Confirm>
    </ProviderDialogCreateForm>
  );
};
DialogCreateForm.propTypes = {
  itemDetail: PropTypes.object,
  endpoint: PropTypes.string,
  callbackCancel: PropTypes.func,
  schemaForm: PropTypes.object,
};
export default DialogCreateForm;
