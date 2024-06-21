import React, { createContext, useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD_DATA, UPDATE_DATA } from "../../AdminCrud/Store/constants";
import { update } from "lodash";

export const ContextDialogCreateForm = createContext({});

const ProviderDialogCreateForm = ({ children, type, endpoint }) => {
  const dispatch = useDispatch();
  const [valueForm, setValueForm] = useState({});
  const firstRender = useRef(true);
  const value = { valueForm, setValueForm };
  const mapperHandle = {
    [ADD_DATA]: () => {
      dispatch({ type: ADD_DATA, payload: valueForm });
    },
    [UPDATE_DATA]: () => {
      dispatch({
        type: UPDATE_DATA,
        payload: valueForm,
      });
    },
  };
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    mapperHandle[type]();

    return () => {};
  }, [valueForm, firstRender, dispatch]);

  return (
    <ContextDialogCreateForm.Provider value={value}>
      {children}
    </ContextDialogCreateForm.Provider>
  );
};

export default ProviderDialogCreateForm;
