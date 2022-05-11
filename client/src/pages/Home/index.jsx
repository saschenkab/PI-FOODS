import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards";
import HeaderBar from "../../components/HeaderBar";
import { getRecipesAction } from "../../redux/actions/actions";
import styled from "styled-components";
import DietsFilter from "../../components/DietsFilter";
import Pagination from "../../components/Pagination";

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
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const recipesPaginated = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return recipesFiltered.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, recipesFiltered]);

  useEffect(() => {
    setCurrentPage(1);
  }, [recipesFiltered]);

  useEffect(() => {
    dispatch(getRecipesAction());
  }, [dispatch]);

  return (
    <>
      <HeaderBar />
      <Container>
        <DietsFilter />
        <Recipes>
          <Cards recipes={recipesPaginated} />
          <Pagination
            currentPage={currentPage}
            totalCount={recipesFiltered.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Recipes>
      </Container>
    </>
  );
};

export default Home;
