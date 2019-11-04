import React, { Fragment } from "react";
import { View } from "react-native";
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

const Auth = ({ navigation }: { navigation: any }) => {
  return (
    <MainContainer>
      <AuthForm />
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
