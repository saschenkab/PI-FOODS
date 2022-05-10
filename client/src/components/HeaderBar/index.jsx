import React from "react";
import logo from "../../images/logohenryfood.png";
import styled from "styled-components";
import { Button } from "../../common";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const SearchInput = styled.input`
  background: #ffffff;
  box-shadow: 0px 0px 5px 3px #e3faf7;
  border-radius: 40px;
  border: none;
  padding: 10px 20px;
  width: 35%;
  font-family: "Quicksand", sans-serif;

  &::placeholder {
    font-family: "Quicksand", sans-serif;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

const HeaderBar = () => {
  return (
    <Container>
      <Link to="/home">
        <img src={logo} alt="" />
      </Link>
      <SearchInput type="text" placeholder="Search a recipe" />
      <Button>+ Add new recipe</Button>
    </Container>
  );
};

export default HeaderBar;
