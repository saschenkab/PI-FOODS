import styled from "styled-components";
import { primaryColor, secondaryColor, white } from "../utils/colors";

export const Button = styled.div`
  background-color: ${primaryColor};
  color: ${white};
  border-radius: 40px;
  font-weight: 600;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  height: 19px;
  cursor: pointer;
`;

export const Link = styled.link`
  text-decoration: none;
`;

export const CreateButton = styled.button`
  background-color: ${secondaryColor};
  color: ${white};
  border-radius: 40px;
  font-weight: 600;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  height: 19px;
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
`;
