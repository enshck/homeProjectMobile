import React, { Fragment } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

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

const SignUp = () => {
  return (
    <MainContainer>
      <AuthForm />
    </MainContainer>
  );
};

SignUp.navigationOptions = () => ({
  headerStyle: {
    display: "none"
  }
});

export default SignUp;
