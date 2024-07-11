import React, { useState } from 'react';
import {
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import styles from './styles.module.scss';
import LOGO from '../../../../../constants/logo';
import { toast, ToastContainer } from 'react-toastify';
import { parseObjectJson } from '../../../../../utils/parse-json';
import PropTypes from '../../../../../utils/prop-types';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
const FormRegister = ({ handlerSubmitForm, setIsRegisting }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    if (!name || !email || !password || !password_confirmation) {
      toast.warning('Yêu cầu điền đầy đủ thông tin');
      return;
    }
    handlerSubmitForm({ name, email, password, password_confirmation })
      .then(res => {
        toast.success(res.message);
      })
      .catch(err => {
        const parseData = parseObjectJson(err.response.data);
        for (let key in parseData) {
          if (parseData[key].length > 0) {
            parseData[key].forEach(errMsg => toast.error(errMsg));
          }
        }
      })
      .finally(() => {
        setIsRegisting(false);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <img
        src={LOGO.login}
        onClick={() => {
          navigate('/');
        }}
      ></img>
      <h1>SIGNUP</h1>
      <FormControl className={styles.field} isInvalid={!!nameError}>
        <Input
          id="name"
          type="text"
          value={name}
          placeholder="Họ và tên"
          onChange={e => {
            setName(e.target.value);
            setNameError('');
          }}
        />
        <FormErrorMessage>{nameError}</FormErrorMessage>
      </FormControl>

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

      <FormControl className={styles.field} isInvalid={!!passwordError}>
        <Input
          id="password_confirmation"
          type="password"
          value={password_confirmation}
          placeholder="Password Comfirm"
          onChange={e => {
            setPassword_confirmation(e.target.value);
            setPasswordError('');
          }}
        />
        <FormErrorMessage>{passwordError}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <div className="flex justify-evenly">
          <Checkbox
            className={classNames(styles.remember)}
            isChecked={remember}
            onChange={e => setRemember(e.target.checked)}
          >
            Remember me
          </Checkbox>
          <Link className="font-bold text-blue-600" to={'/authen/signin'}>
            Signin
          </Link>
        </div>
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Signup
      </Button>
    </form>
  );
};
FormRegister.propTypes = {
  handlerSubmitForm: PropTypes.func,
  setIsRegisting: PropTypes.func,
};

export default FormRegister;
