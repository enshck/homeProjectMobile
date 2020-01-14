import styled from "styled-components";
import {
  ScrollView,
  View,
  Dimensions,
  Image,
  Text,
  TextInput
} from "react-native";

export const MainContainer = styled(ScrollView)`
  position: relative;
  display: flex;
`;

export const OrderElement = styled(View)`
  width: 90%;
  padding: 10px;
  display: flex;
  align-items: center;
  background: #fff;
  margin-top: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  overflow: hidden;
`;

export const ItemPicture = styled(Image)`
  width: ${Dimensions.get("window").width};
  height: 230;
  margin: 10px 0;
`;

export const Name = styled(Text)`
  color: rgb(62, 119, 170);
  font-size: 14px;
  line-height: 19px;
`;

export const Price = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  margin-top: 15px;
  background: rgb(254, 242, 184);
  border-radius: 5px;
  padding: 6px;
`;

export const CountControlContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const ControlButtons = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const ControlInput = styled(TextInput)`
  /* text-align: center;
  background-color: #fff;
  width: 68px;
  height: 28px;
  line-height: 28px;
  margin: 0 9px;
  padding: 5px;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  font-size: 15px;
  resize: none;
  color: #4d4b4b;
  outline: none; */
`;
