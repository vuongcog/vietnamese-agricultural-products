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
const FormLogin = () => {
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
          sameSite: 'Lax',
          expires: 7,
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
      <img
        src={LOGO.login}
        onClick={() => {
          navigate('/');
        }}
      ></img>
      <h1>LOG IN</h1>
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
          <Checkbox
            className={styles.remember}
            isChecked={remember}
            onChange={e => setRemember(e.target.checked)}
          >
            Remember me
          </Checkbox>
          <Link className="font-bold text-blue-600" to={'/authen/signup'}>
            Signup
          </Link>
        </div>
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Login
      </Button>
    </form>
  );
};
FormLogin.propTypes = {
  type: PropTypes.string,
};

export default FormLogin;
