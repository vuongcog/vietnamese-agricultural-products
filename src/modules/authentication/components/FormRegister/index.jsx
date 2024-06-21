import React, { useState } from "react";
import {
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import styles from "./styles.module.scss";
import LOGO from "../../../../constants/logo";
const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [remember, setRemember] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setNameError("Email is required");
      return;
    }

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    console.log("Form submitted");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <img src={LOGO.login}></img>
      <h1>SIGNUP</h1>
      <FormControl className={styles.field} isInvalid={!!nameError}>
        <Input
          id="name"
          type="text"
          value={name}
          placeholder="Họ và tên"
          onChange={(e) => {
            setName(e.target.value);
            setNameError("");
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

export default FormRegister;
