import React from "react";
import styles from "../styles/RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients.map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <div className={styles.card}>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className={styles.image}
      />
      <h2 className={styles.title}>{recipe.strMeal}</h2>
      <h3 className={styles.subheading}>Ingredients:</h3>
      <ul className={styles.ingredients}>{renderIngredients()}</ul>
      <h3 className={styles.subheading}>Instructions:</h3>
      <p className={styles.instructions}>{recipe.strInstructions}</p>
      {recipe.strSource && (
        <a
          href={recipe.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View Full Recipe
        </a>
      )}
    </div>
  );
};

export default React.memo(RecipeCard);
