import React, { useState } from "react";
import { fetchRandomRecipe } from "../api/api";
import styles from "../styles/SurpriseRecipe.module.css";

const SurpriseRecipe = () => {
    const [recipe, setRecipe] = useState(null);

    const handleClick = () => {
        fetchRandomRecipe()
            .then(response => {
                if (response?.data) {
                    setRecipe(response.data);
                } else {
                    alert("No random recipe found!");
                }
            })
            .catch(() => alert("Error fetching random recipe"));
    };

    return (
        <div className={styles.surpriseContainer}>
            <button className={styles.button} onClick={handleClick}>Surprise Me!</button>
            {recipe && (
                <div className={styles.recipeDetails}>
                    <h3>{recipe.title}</h3>
                    <p><strong>Category:</strong> {recipe.category}</p>
                    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> {recipe.instructions}</p>
                </div>
            )}
        </div>
    );
};

export default SurpriseRecipe;
