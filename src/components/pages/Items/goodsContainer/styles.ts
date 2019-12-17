import styled from "styled-components";
import { View, Text, Image, ScrollView } from "react-native";

export const MainContainer = styled(ScrollView)`
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const GoodElement = styled(View)`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export const ItemName = styled(Text)``;

export const ItemId = styled(Text)``;
