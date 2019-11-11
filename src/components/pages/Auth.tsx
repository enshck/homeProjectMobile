import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";
import firebase from "react-native-firebase";

import AuthForm from "../forms/authForm";
import { errors } from "../../utils/errors";

const MainContainer = styled(View)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(246, 248, 251);
`;

export interface IAuthForm {
  email: string;
  password: string;
  phone: string;
  error: string;
}

const Auth = () => {
  const [routeName, setRouteName] = useState<string>("Auth");
  const [formData, setFormData] = useState<IAuthForm>({
    email: "",
    password: "",
    phone: "",
    error: ""
  });

  const authHandler = async (type: string) => {
    const { email, password } = formData;

    if (email.length < 1) {
      setFormData({
        ...formData,
        error: "Вы не ввели почту"
      });
      return;
    }
    if (password.length < 1) {
      setFormData({
        ...formData,
        error: "Вы не ввели пароль"
      });
      return;
    }
    if (type === "Auth") {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (err) {
        setFormData({
          ...formData,
          error: errors[err.code]
        });
      }
    } else {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (err) {
        setFormData({
          ...formData,
          error: errors[err.code]
        });
      }
    }
  };

  return (
    <MainContainer>
      <AuthForm
        routeName={routeName}
        setRouteName={setRouteName}
        formData={formData}
        setFormData={setFormData}
        authHandler={authHandler}
      />
    </MainContainer>
  );
};

Auth.navigationOptions = () => ({
  title: "auth",
  headerStyle: {
    display: "none"
  }
});

export default Auth;
