import React, { useContext, useState } from "react";
import {
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import styles from "./styles.module.scss";
import LOGO from "../../../../constants/logo";
import { FormContext } from "./FormContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { parseObjectJson } from "../../../../utils/pareJson";
import ProgressFullScreen from "../../../../components/core/Progress";
const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(FormContext);
  const { setIsAuthenticated } = useAuth();
  const { isLoading } = useContext(FormContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    const loginParams = {
      email: email,
      password: password,
    };

    login(loginParams)
      .then((res) => {
        const responseData = parseObjectJson(res);
        document.cookie = `accsessToken=${responseData.access_token} ; path = "/" ;  max-age=${responseData.expires_in};`;
        setIsAuthenticated(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isLoading && <ProgressFullScreen></ProgressFullScreen>}
      <img src={LOGO.login}></img>
      <h1>LOG IN</h1>
      <FormControl className={styles.field} isInvalid={!!emailError}>
        <Input
          id="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
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
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
        />
        <FormErrorMessage>{passwordError}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <Checkbox
          className={styles.remember}
          isChecked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        >
          Remember me
        </Checkbox>
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
