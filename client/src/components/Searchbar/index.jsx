import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getRecipeByNameAction } from "../../redux/actions/actions";
import styled from "styled-components";
import { Button } from "../../common";



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




export const SearchBar = () => {
    const dispatch = useDispatch()
    // const recipesFiltered = useSelector((state) => state.recipesFiltered)
    const [name, setName] = useState('')

    function handleSubmit(e) {
      e.preventDefault()
      if(!name.length) {
        alert ('Please enter a name')
      }
      dispatch(getRecipeByNameAction(name, dispatch)) // dispatch the action to the reducer and the saga will handle the rest of the logic and fetch the data from the API and update the state in the reducer with the new data and the component will re-render with the new data in the state and the search bar will be empty again 
      setName('')
    }
    


    function handleKeyChange(e) {
      if (e.key === 'Enter') {
        e.preventDefault()
        dispatch(getRecipeByNameAction(name, dispatch)) // dispatch the action to the reducer and the saga will handle the rest of the logic and fetch the data from the API and update the state in the reducer with the new data and the component will re-render with the new data in the state and the search bar will be empty again
        setName('')
        
      }
    }

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)  // set the value of the search bar to the value of the input field and the component will re-render with the new value in the state and the search bar will be empty again 
    }

    const handleReset = () => {
      dispatch(getRecipeByNameAction("", dispatch))
      setName('')
    }

    

    return (
        <>
            <SearchInput
                value={name}
                type='text'
                placeholder="Recipe..."
                onKeyDown={handleKeyChange}
                onChange={handleInputChange} // when the user types in the search bar the value of the input field will be set to the value of the search bar and the component will re-render with the new value in the state and the search bar will be empty again
            />
            <Button
                onClick={handleSubmit} >Search</Button> 

            <Button onClick={handleReset}>Reset</Button>

        </>
    )
}