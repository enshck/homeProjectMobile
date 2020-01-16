import React from "react";
import { View, Image, Text } from "react-native";
import styled from "styled-components";

const MainContainer = styled(View)`
  position: relative;
`;

const InputContainer = styled(View)`
  display: flex;
  align-items: center;
  position: relative;
`;

const BeforeIcon = styled(Image)`
  position: absolute;
  left: 20px;
`;

const ErrorMessage = styled(Text)`
  color: red !important;
  opacity: 1;
  margin: 10px 0 0 30px;
  max-width: 450px;
`;

interface IProps {
  beforeIcon?: string;
  errors?: {
    [key: string]: string;
  };
  placeholder?: string;
  StyledComponent: any;
  onBlur?: (e: any, name: string) => void;
  name: string;
  defaultValue?: string | number;
  value?: string | number;
  keyboardType: string;
  onPress?: (e: any, name: string) => void;
  onKeyPress?: (e: any, name: string) => void;
  checked?: boolean;
  changed?: string;
  autoComplete?: boolean;
  onInput?: (e: any, name: string) => void;
  maxLength?: number;
  multiple?: boolean;
  autoFocus?: boolean;
  isBlocked?: boolean;
  onChangeText?: (text: string | number, name: string) => void;
}

const Input = ({
  beforeIcon,
  errors,
  placeholder,
  StyledComponent,
  onBlur,
  name,
  defaultValue,
  value,
  keyboardType,
  onPress,
  checked,
  changed,
  autoComplete,
  onInput,
  maxLength,
  multiple,
  autoFocus,
  isBlocked,
  onKeyPress,
  onChangeText
}: IProps) => {
  return (
    <MainContainer>
      <InputContainer>
        {beforeIcon && (
          <BeforeIcon
            source={{
              uri: beforeIcon
            }}
          />
        )}
        <StyledComponent
          placeholder={placeholder}
          onBlur={(e: any) => onBlur && onBlur(e, name)}
          onPress={(e: any) => onPress && onPress(e, name)}
          checked={checked}
          id={name}
          value={value && value}
          name={name}
          onInput={(e: any) => onInput && onInput(e, name)}
          onKeyPress={(e: any) => onKeyPress && onKeyPress(e, name)}
          onChangeText={(text: string | number) =>
            onChangeText && onChangeText(text, name)
          }
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          changed={changed === name}
          autoComplete={autoComplete}
          maxLength={maxLength && maxLength}
          multiple={multiple}
          autoFocus={autoFocus}
          disabled={isBlocked}
          error={errors && errors[name]}
          // onChangedText={(text: string) => console.log(text, "<<<<")}
        />
      </InputContainer>
      {errors && errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
    </MainContainer>
  );
};
export default Input;
