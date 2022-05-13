import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import "./form.css";
import axios from "axios";
import { createRecipe, getDiets } from "../../redux/utils/urls";
import { getDietsAction, postRecipeAction } from "../../redux/actions/actions";
import { Button } from "../../common";
import styled from "styled-components";

const FormBackground = styled.div`
background-color: #e5e5e5;
padding: 40px;
display: flex;
`;

const FormCard = styled.div`
  background-color: #fff;
  padding: 40px;
  margin: 10px;
  border-radius: 20px
  `;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  align-self: center;
  margin-bottom: 20px;
  `;

  const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-size: 15px;
  padding: 15px;
  // margin-left: 20px;
  `;

const Label = styled.label` 
  font-size: 15px;
  font-weight: bold;
  margin: 15px;
  text-align: center;


  `;

const Input = styled.input`
  width: 70%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 20px;
  `;

  const TextArea = styled.textarea`
  width: 70%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 20px;
  `;



const Form =  () => {
    const dispatch = useDispatch();
    const initialValues = {
      name: "",
      summary: "",
      instructions: "",
      image: "",
      diet: [],
      score: 0,
      healthScore: 0,
    };
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const diets = useSelector((state) => state.diets);

    useEffect(() => {
      dispatch(getDietsAction());
    }, [dispatch]);

    const handleChangeDiets = (event) => {
      const { checked, name } = event.target;

      let checkedDiets = [];
      if(checked) { 
        checkedDiets = [...values.diet, name];
      } else {
        checkedDiets = [...values.diet].filter((diet) => diet !== name);
      }
      setValues({
        ...values,
        diet: checkedDiets,
      });
    }
     


    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues({ ...values, [name]: value });

      console.log(values);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(validateForm(values))
      dispatch(postRecipeAction(values));
      alert("Recipe created successfully");
      setValues(initialValues);
      console.log(values);
    }

    const validateForm = (values) => {
      const errors = {};

      
    }

  return (
    <FormBackground>
      <Button>
        <Link to="/home" className="link">
          Back
        </Link>
      </Button>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <FormCard>
        <h1>Create your Recipe</h1>
        <form onSubmit={handleSubmit}>
          <FormRow>
            <Label>Recipe Name</Label>
            <Input
              name="name"
              onChange={handleChange}
              value={values.name}
              type="text"
              placeholder="Name..."
            />
          </FormRow>
          <FormRow>
            <Label>Recipe Description: </Label>
            <TextArea
              name="summary"
              onChange={handleChange}
              value={values.summary}
              placeholder="Description..."
            />
          </FormRow>
          <FormRow>
            <Label>Instructions: </Label>
            <TextArea
              name="instructions"
              onChange={handleChange}
              value={values.instructions}
              type="text"
              placeholder="instructions"
            />
          </FormRow>
          <FormRow>
            <Label>Score</Label>
            <Input
              name="score"
              onChange={handleChange}
              value={values.score}
              type="number"
              min={0}
              max={100}
              placeholder="Score..."
            />
          </FormRow>
          <FormRow>
            <Label>Heatlh Score</Label>
            <Input
              name="healthScore"
              onChange={handleChange}
              value={values.healthScore}
              type="number"
              min={0}
              max={100}
              placeholder="Health Score..."
            />
          </FormRow>
          <FormRow>
            <Label>Diets</Label>
            <CheckboxContainer>
            {diets.map((diet) => {
              return (
                <div key={diet.id}>
                  <Label>
                  <Input
                    type="checkbox"
                    name={diet.name}
                    value={diet.name}
                    onChange={handleChangeDiets}
                  />
                  {diet.name}
                  </Label>
                  </div>
              )
            })}
            </CheckboxContainer>
          </FormRow>
                   {/* disabled={disableSubmitButton()} */}
          <button type="submit">
            Create
          </button>
        </form>
      </FormCard>
    </FormBackground>
  );
};



export default Form;
