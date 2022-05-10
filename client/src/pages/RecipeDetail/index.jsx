import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getRecipeInfoAction } from '../../redux/actions/actions';

const RecipeDetail = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const {id} = useParams();

    const recipeInfo = useSelector(state => state.recipe);

    useEffect(() => {
        dispatch(getRecipeInfoAction(id))
    }, [dispatch, id]);

    console.log(recipeInfo);

  return (
    <div>
        <button onClick={() => navigate('/home')}>Back</button>
        {recipeInfo? (
            <div className="recipeInfo-container">
                <div className="img-container">
                    <img className='recipeInfo-img' src={recipeInfo?.image} alt={recipeInfo?.title} />
                </div>
                <div className="recipeInfo-body">
                    <h2 className="recipeInfo-title">{recipeInfo?.title}</h2>
                    <div className="recipeInfo-diet">
                        {recipeInfo.diet?.map(diets => (
                            <span className="diets" key={diets}>{diets}</span>
                        ))}
                        </div>
                        <div className="recipeInfo-score">{recipeInfo?.score}</div>
                        <div className="recipeInfo-health">{recipeInfo?.healthScore}</div>
                        <div className="recipeInfo-summary">
                            <p className='summary' dangerouslySetInnerHTML={{__html: recipeInfo?.summary }} />
                        </div>
                    {/* <div className="recipeInfo-instructions">
                        <div className="recipeInfo-instructions-title">
                            {recipeInfo.instructions?.map(instruction => (
                                <span key={instruction}>{instruction.steps.step}</span>
                            ))} */}
                            {/* </div> */}
                            </div>
                            </div>

        ) : (
            <div className="no-recipes">
                <h1>No recipes found</h1>
                </div>
        )}
    </div>
  )
}

export default RecipeDetail