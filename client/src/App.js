import "./App.css";
import LandingPage from "./pages/Landing";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
