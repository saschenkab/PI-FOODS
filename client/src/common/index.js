import styled from "styled-components";
import { primaryColor, white } from "../utils/colors";

export const Button = styled.div`
  background-color: ${primaryColor};
  color: ${white};
  border-radius: 40px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  height: 30px;
  cursor: pointer;
`;
