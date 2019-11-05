import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";
import firebase from "../../utils/firebase";

import AuthForm from "../forms/authForm";

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

  const authHandler = () => {
    const { email, password } = formData;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
        // const error = errors[err.code];

        // if (error) {
        //   setFormData({
        //     ...formData,
        //     error
        //   });
        // }
      });
  };

  const signUpHandler = () => {
    const { email, password } = formData;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(formData, "dt");
        // user && history.push("/items");
      })
      .catch(err => {
        console.log(err, "err");
        // const error = errors[err.code];
        // if (error) {
        //   setFormData({
        //     ...formData,
        //     error
        //   });
        // }
      });
  };

  return (
    <MainContainer>
      <AuthForm
        routeName={routeName}
        setRouteName={setRouteName}
        formData={formData}
        setFormData={setFormData}
        signUpHandler={signUpHandler}
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
