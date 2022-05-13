import "./App.css";
import LandingPage from "./pages/Landing";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";
import Form from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/createRecipe" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
