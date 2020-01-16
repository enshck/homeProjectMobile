import styled from "styled-components";
import {
  ScrollView,
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";

export const MainContainer = styled(ScrollView)`
  position: relative;
  display: flex;
  width: ${Dimensions.get("window").width};
`;

export const OrderElement = styled(View)`
  width: 90%;
  padding: 10px;
  display: flex;
  align-items: center;
  background: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  overflow: hidden;
  margin: 0 0 10px 0;
  position: relative;
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
  align-items: center;
`;

export const ControlButtons = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const ControlInput = styled(TextInput)`
  text-align: center;
  background-color: #fff;
  width: 68px;
  height: 28px;
  margin: 0 9px;
  padding: 5px;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  font-size: 15px;
  color: #4d4b4b;
`;

export const DeleteOrderButtom = styled(TouchableHighlight)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
`;

export const DeletePicture = styled(Image)`
  transform: rotate(45deg);
`;
