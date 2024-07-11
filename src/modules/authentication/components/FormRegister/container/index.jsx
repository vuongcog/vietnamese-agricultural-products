import React, { useState } from 'react';
import FormRegister from '../presentational';
import axios from 'axios';

const FormRegisterContainer = () => {
  const [isRegisting, setIsRegisting] = useState(false);

  const registerUser = async params => {
    setIsRegisting(true);
    const res = await axios.post(
      import.meta.env.VITE_API_URL_SERVER + '/register',
      {
        ...params,
      }
    );
    return res.data;
  };
  return (
    <FormRegister
      setIsRegisting={setIsRegisting}
      handlerSubmitForm={registerUser}
    ></FormRegister>
  );
};

export default FormRegisterContainer;
