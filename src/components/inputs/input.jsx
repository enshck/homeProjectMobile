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

const Input = ({
  beforeIcon,
  errors,
  placeholder,
  StyledComponent,
  onBlur,
  name,
  defaultValue,
  value,
  type,
  onClick,
  checked,
  changed,
  onChange,
  autoComplete,
  onInput,
  maxLength,
  multiple,
  autoFocus,
  isBlocked
}) => {
  return (
    <MainContainer>
      <InputContainer>
        {beforeIcon && <BeforeIcon source={beforeIcon} />}
        <StyledComponent
          placeholder={placeholder}
          onBlur={e => onBlur && onBlur(e, name)}
          onClick={e => onClick && onClick(e, name)}
          checked={checked}
          id={name}
          value={value && value}
          name={name}
          onChange={onChange && onChange}
          onInput={e => onInput && onInput(e, name)}
          defaultValue={defaultValue}
          type={type}
          changed={changed === name}
          autoComplete={autoComplete}
          maxLength={maxLength && maxLength}
          multiple={multiple}
          autoFocus={autoFocus}
          disabled={isBlocked}
          error={errors && errors[name]}
        />
      </InputContainer>
      {errors && errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
    </MainContainer>
  );
};
export default Input;
