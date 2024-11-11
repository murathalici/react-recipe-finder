import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import RecipeCard from "./components/RecipeCard";
import useFetch from "./hooks/useFetch";
import "./styles/GlobalStyles.css";
import { BiLoaderAlt } from "react-icons/bi";
import styles from "./App.module.css";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [url, setUrl] = useState(`${API_BASE_URL}/search.php?s=`);

  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data && data.meals) {
      setRecipes(data.meals);
    } else {
      setRecipes([]);
    }
  }, [data]);

  const handleSearch = (searchQuery) => {
    setUrl(`${API_BASE_URL}/search.php?s=${searchQuery}`);
  };

  const handleRandom = () => {
    setUrl(`${API_BASE_URL}/random.php`);
  };

  return (
    <div className={styles.app}>
      <Header />
      <SearchForm onSearch={handleSearch} onRandom={handleRandom} />
      {loading && <BiLoaderAlt size={40} className={styles.loader} />}
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.recipeContainer}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
