import React, {useState} from "react";
import {useDispatch } from "react-redux";
import logo from "../../images/logohenryfood.png";
import styled from "styled-components";
import { getRecipeByNameAction } from "../../redux/actions/actions";
import { Button } from "../../common";
import { Link } from "react-router-dom";
import { SearchBar } from "../Searchbar";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;



const HeaderBar = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  
  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(search);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getRecipeByNameAction(search));
    setSearch("")
  }
  const handleKeyChange = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(getRecipeByNameAction(search));; 
      setSearch("")
    }
  };

  const resetValue = () => {
    dispatch(getRecipeByNameAction("", dispatch));
    setSearch("");
    // recipes;
  }

  return (
    <Container>
      <Link to="/home">
        <img src={logo} alt="" />
      </Link>
      <SearchBar />
      <Link to='/createRecipe'>
      <Button>+ Add new recipe</Button>
      </Link>
    </Container>
  );
};

export default HeaderBar;
