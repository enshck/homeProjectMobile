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

  const authHandler = async () => {
    const { email, password } = formData;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    // try {
    //   await firebase.auth().signInWithEmailAndPassword(email, password);
    // } catch (err) {
    //   console.log(err, ".>>>");
    //   // setFormData({
    //   //   ...formData,
    //   //   error: errors[err]
    //   // });
    // }
  };

  const signUpHandler = async () => {
    const { email, password } = formData;

    // try {
    //   await firebase.auth().createUserWithEmailAndPassword(email, password);
    // } catch (err) {
    //   // setFormData({
    //   //   ...formData,
    //   //   error: errors[err]
    //   // });
    // }
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
