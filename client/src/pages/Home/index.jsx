import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards";
import HeaderBar from "../../components/HeaderBar";
import { getRecipesAction } from "../../redux/actions/actions";
import styled from "styled-components";
import DietsFilter from "../../components/DietsFilter";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
`;
const Recipes = styled.div`
  width: 80%;
`;

const Home = () => {
  const dispatch = useDispatch();
  const recipesFiltered = useSelector((state) => state.recipesFiltered);

  useEffect(() => {
    dispatch(getRecipesAction());
  }, [dispatch]);

  return (
    <>
      <HeaderBar />
      <Container>
        <DietsFilter />
        <Recipes>
          <Cards recipes={recipesFiltered} />
        </Recipes>
      </Container>
    </>
  );
};

export default Home;
