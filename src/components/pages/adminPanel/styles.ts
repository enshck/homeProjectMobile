import styled from "styled-components";

import { View, Text, Animated } from "react-native";

export const MainContainer = styled(View)`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const List = styled(View)`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin-top: 10px;
  padding-bottom: 5px;
`;

export const MenuElement = styled(Text)`
  font-size: 15px;
`;

export const MenuSlider = styled(Animated.View)`
  border: 1px solid blue;
  position: absolute;
  bottom: 0;
  left: ${props => props.left};
  width: ${props => props.width};
`;
