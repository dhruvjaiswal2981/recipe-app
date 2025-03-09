import React, { useState } from "react";
import { addRecipe } from "../api/api";

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        title: "",
        ingredients: "",
        instructions: "",
        category: ""
    });

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe(recipe).then(() => alert("Recipe added!"));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange} />
            <input name="ingredients" placeholder="Ingredients" onChange={handleChange} />
            <textarea name="instructions" placeholder="Instructions" onChange={handleChange} />
            <input name="category" placeholder="Category" onChange={handleChange} />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;
