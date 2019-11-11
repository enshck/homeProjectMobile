import React, { useState } from "react";
import { Text } from "react-native";
import { withNavigation } from "react-navigation";

import { IAuthForm } from "../../pages/Auth";
import {
  ConfirmButton,
  FormContainer,
  Input,
  InputContainer,
  MainContainer,
  NavButton,
  NavigationContainer,
  Title,
  Warning,
  NavButtonContainer
} from "./components";

const AuthForm = ({
  routeName,
  setRouteName,
  formData,
  setFormData,
  authHandler
}: {
  routeName: string;
  setRouteName: (routeName: string) => void;
  formData: IAuthForm;
  setFormData: (data: IAuthForm) => void;
  authHandler: (type: string) => void;
}) => {
  const [changedInput, changeInput] = useState<string | null>(null);

  return (
    <MainContainer>
      <NavigationContainer>
        <NavButtonContainer isActive={routeName === "Auth"}>
          <NavButton onPress={() => setRouteName("Auth")}>Войти</NavButton>
        </NavButtonContainer>
        <NavButtonContainer isActive={routeName === "SignUp"}>
          <NavButton onPress={() => setRouteName("SignUp")}>
            Создать аккаунт
          </NavButton>
        </NavButtonContainer>
      </NavigationContainer>
      <FormContainer>
        <InputContainer>
          <Title>Email:</Title>
          <Input
            changed={changedInput === "auth"}
            autoCompleteType={"email"}
            placeholder={"example@example.com"}
            keyboardType={"email-address"}
            onChangeText={value => {
              setFormData({
                ...formData,
                email: value
              });
            }}
            onFocus={e => changeInput("auth")}
            onBlur={() => changeInput(null)}
          />
        </InputContainer>
        <InputContainer>
          <Title>Пароль:</Title>
          <Input
            changed={changedInput === "pass"}
            autoCompleteType={"password"}
            placeholder={"********"}
            onChangeText={value => {
              setFormData({
                ...formData,
                password: value
              });
            }}
            onFocus={() => changeInput("pass")}
            onBlur={e => changeInput(null)}
          />
        </InputContainer>
        <ConfirmButton onPress={() => authHandler(routeName)}>
          <Text style={{ color: "#fff" }}>
            {routeName === "Auth" ? "Войти" : "Зарегистрироватся"}
          </Text>
        </ConfirmButton>
        {formData.error.length > 0 && <Warning>{formData.error}</Warning>}
      </FormContainer>
    </MainContainer>
  );
};

export default withNavigation(AuthForm);
