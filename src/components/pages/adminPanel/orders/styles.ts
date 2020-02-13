import styled from "styled-components";
import { View, Text, ScrollView } from "react-native";

export const MainContainer = styled(ScrollView)`
  width: 100%;
  margin-top: 20px;
  display: flex;
`;

export const Row = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  background: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  overflow: hidden;
  margin: 0 0 10px 0;
  position: relative;
`;

export const Column = styled(View)`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const TableBody = styled(View)`
  width: 100%;
  margin-bottom: 40px;
  ${Column} {
    padding: 20px 0px;
    text-align: center;
  }
  ${Row} {
    background: #f2f2f2;
  }
`;

export const TitleText = styled(Text)`
  opacity: 0.5;
  font-size: 18px;
  margin-top: 5px;
`;
