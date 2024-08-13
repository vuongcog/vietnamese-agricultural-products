import React, { useContext, useState } from 'react';
import {
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import styles from './styles.module.scss';
import LOGO from '../../../../constants/logo';
import { FormContext } from './FormContext';
import { useAuth } from '../../../../contexts/AuthContext';
import { parseObjectJson } from '../../../../utils/parse-json';
import ProgressFullScreen from '../../../../components/core/ProgressFullScreen';
import PropTypes from '../../../../utils/prop-types';
import { Link, useNavigate } from 'react-router-dom';
const FormLoginManagement = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [remember, setRemember] = useState(false);
  const { login } = useContext(FormContext);
  const { setCheckauth } = useAuth();
  const { isLoading } = useContext(FormContext);
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    const loginParams = {
      email: email,
      password: password,
    };

    login(loginParams)
      .then(res => {
        const responseData = parseObjectJson(res);
        Cookies.set('accsessToken', responseData.access_token, {
          path: '/',
          expires: 0.0416667,
        });
        setCheckauth(pre => !pre);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isLoading && <ProgressFullScreen></ProgressFullScreen>}
      <Link to={import.meta.env.VITE_HOST_CUSTOMER}>
        <img src={LOGO.login}></img>
      </Link>
      <h1>LOGIN MANAGER</h1>
      <FormControl className={styles.field} isInvalid={!!emailError}>
        <Input
          id="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={e => {
            setEmail(e.target.value);
            setEmailError('');
          }}
        />
        <FormErrorMessage>{emailError}</FormErrorMessage>
      </FormControl>

      <FormControl className={styles.field} isInvalid={!!passwordError}>
        <Input
          id="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={e => {
            setPassword(e.target.value);
            setPasswordError('');
          }}
        />
        <FormErrorMessage>{passwordError}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <div className="flex justify-evenly">
          {/* <Checkbox
            className={styles.remember}
            isChecked={remember}
            onChange={e => setRemember(e.target.checked)}
          >
            Remember me
          </Checkbox> */}
          <Link
            className="text-[13px] font-bold text-blue-500 underline"
            to={`${import.meta.env.VITE_HOST_CUSTOMER}/authen/signup`}
          >
            Signup for customer
          </Link>
        </div>
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Login
      </Button>
    </form>
  );
};
FormLoginManagement.propTypes = {
  type: PropTypes.string,
};

export default FormLoginManagement;
