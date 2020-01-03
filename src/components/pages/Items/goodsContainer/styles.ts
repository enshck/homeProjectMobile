import styled from "styled-components";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";

export const MainContainer = styled(ScrollView)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const GoodElement = styled(View)`
  width: 90%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin-top: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  overflow: hidden;
`;

export const ItemImage = styled(Image)`
  width: ${Dimensions.get("window").width - 23};
  height: 211;
`;

export const ItemName = styled(Text)`
  font-size: 24px;
  font-weight: 800;
  margin: 14px;
`;

export const ItemId = styled(Text)`
  text-align: center;
  width: 80%;
  font-size: 16px;
`;

export const Details = styled(Text)`
  text-decoration: underline;
  font-size: 16px;
  margin-top: 20px;
`;

export const ButtonBuyContainer = styled(View)`
  margin-top: 5px;
`;

export const Price = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  margin-top: 15px;
`;
