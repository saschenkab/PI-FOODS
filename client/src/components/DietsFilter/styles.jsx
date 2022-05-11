import styled from "styled-components";
import { primaryColor, secondaryColor, white } from "../../utils/colors";

export const Container = styled.div`
  width: 20%;
  background-color: ${primaryColor};
  height: 400px;
  border-radius: 40px;
  padding: 20px;
`;

export const DietItem = styled.div`
  margin: 15px 0;
  text-transform: capitalize;
  position: relative;
  color: ${white};
  font-weight: ${(props) => (props.active ? 700 : 500)};
  cursor: pointer;

  &::before {
    content: "";
    width: 5px;
    height: 100%;
    background-color: ${(props) =>
      props.active ? secondaryColor : "transparent"};
    position: absolute;
    left: -20px;
    border-radius: 15px;
  }
`;
