import styled, { css } from "styled-components";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export const MainContainer = styled(View)`
  max-width: 400px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  background: rgb(255, 255, 255);
  border-radius: 2px;
  elevation: 2;
`;

export const NavButtonContainer = styled(View)`
  color: black;
  background-color: transparent;
  position: relative;
  font-weight: 500;
  font-size: 14px;
  color: grey;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 0px;
  margin-top: 2px;
  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    css`
      border-bottom-color: rgb(70, 128, 254);
      border-bottom-width: 2;
    `};
`;

export const NavButton = styled(Text)`
  color: gray;
`;

export const FormContainer = styled(View)`
  position: relative;
  padding: 0 30px 50px;
  width: 100%;
`;

export const NavigationContainer = styled(View)`
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: space-between;
  width: 100%;
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-width: 1;
`;

export const Input = styled(TextInput)`
  width: 100%;
  font-size: 14px;
  color: rgb(68, 68, 68);
  margin-top: 5px;
  background: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(112, 112, 112);
  padding: 2px 12px 2px;
  border-radius: 3px;

  ${({ changed }: { changed: boolean }) =>
    changed &&
    css`
      border-color: rgb(70, 128, 254);
    `};
`;

export const Title = styled(Text)`
  font-weight: 600;
  font-size: 14px;
  color: grey;
`;

export const InputContainer = styled(View)`
  width: 100%;
  margin-top: 30px;
`;

export const ConfirmButton = styled(TouchableOpacity)`
  width: 100%;
  font-weight: 700;
  text-transform: uppercase;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin-top: 30px;
  overflow: hidden;
  border-radius: 3px;
  margin-top: 30px;
  background: rgb(70, 128, 254);
`;

export const Warning = styled(Text)`
  color: red;
  text-align: center;
  margin-top: 5px;
`;
