import { Text, View } from "react-native";
import styled, { css } from "styled-components";

export const ButtonBuy = styled(Text)`
  font-size: 24px;
  margin-top: 5px;
  color: rgb(255, 255, 255);
  background: rgb(0, 160, 70);
  padding: 8px 20px;
  border-radius: 5px;
`;

export const StatusContainer = styled(View)`
  color: #fff;
  padding: 10px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 5px;
  ${({ typeContainer }: { typeContainer: String }) =>
    typeContainer === "ordered" &&
    css`
      background: #3d9ec8;
    `};
  ${({ typeContainer }: { typeContainer: String }) =>
    typeContainer === "cancelled" &&
    css`
      background: #da5f57;
    `};
  ${({ typeContainer }: { typeContainer: String }) =>
    typeContainer === "delivered" &&
    css`
      background: #279240;
    `};
  ${({ typeContainer }: { typeContainer: String }) =>
    typeContainer === "paidFor" &&
    css`
      background: #86a760;
    `};
`;
