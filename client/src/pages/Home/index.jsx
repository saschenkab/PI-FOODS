import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../components/Cards';
import HeaderBar from '../../components/HeaderBar';
import {
  getRecipesAction, getDietsAction}
from '../../redux/actions/actions';
import './styles.css'


const Home = () => {

  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);
  const diets = useSelector(state => state.diets);

  useEffect(() => {
    dispatch(getRecipesAction());
    dispatch(getDietsAction());
  }, [dispatch]);

  console.log(recipes);


  return (
    <>
      <HeaderBar/>
      {/* <div className="recipes">
        <Cards recipes={recipes} />
      </div> */}
    </>
  )
}

export default Home;