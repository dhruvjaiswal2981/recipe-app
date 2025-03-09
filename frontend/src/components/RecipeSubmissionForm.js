import React, { useState } from "react";
import { addRecipe } from "../api/api";
import styles from "../styles/RecipeForm.module.css";

const RecipeSubmissionForm = () => {
    const [recipe, setRecipe] = useState({ title: "", ingredients: "", instructions: "", category: "",});
    const [error, setError] = useState("");

    const handleChange = (e) => setRecipe({ ...recipe, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recipe.title || !recipe.ingredients || !recipe.instructions || !recipe.category) {
            setError("All fields are required!");
            return;
        }
        addRecipe(recipe).then(() => alert("Recipe added successfully!"));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input name="title" placeholder="Title" onChange={handleChange} />
            <input name="ingredients" placeholder="Ingredients" onChange={handleChange} />
            <textarea name="instructions" placeholder="Instructions" onChange={handleChange} />
            <input name="category" placeholder="Category" onChange={handleChange} />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeSubmissionForm;
