import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getRecipesAction,}
from '../redux/actions/actions';
import './Home.css'


const Home = () => {

  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(getRecipesAction());
  }, [dispatch]);

  console.log(recipes);


  return (
    <div>
      <h1>Home</h1>
      <div className="recipes">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe">
            <h2>{recipe.name}</h2>
            <p>{recipe.summary}</p>
            </div>
            ))}
            </div>
    </div>
  )
}

export default Home;