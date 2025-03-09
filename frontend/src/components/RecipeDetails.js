import React, { useEffect, useState } from "react";
import { fetchRecipeById, updateRecipe } from "../api/api";
import { useParams } from "react-router-dom"; // Removed `useNavigate`
import styles from "../styles/RecipeDetails.module.css";

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchRecipeById(id)
            .then(response => {
                if (response?.data) {
                    setRecipe(response.data);
                } else {
                    setError("Recipe not found");
                }
            })
            .catch(() => setError("Recipe not found"));
    }, [id]);

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        if (!recipe.title || !recipe.ingredients || !recipe.instructions || !recipe.category) {
            setError("All fields are required!");
            return;
        }
        updateRecipe(id, recipe)
            .then(() => {
                alert("Recipe updated successfully!");
                setIsEditing(false);
            })
            .catch(() => alert("Failed to update recipe"));
    };

    if (error) return <p className={styles.error}>{error}</p>;
    if (!recipe) return <p>Loading...</p>;

    return (
        <div className={styles.details}>
            {isEditing ? (
                <>
                    <input name="title" value={recipe.title} onChange={handleChange} />
                    <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} />
                    <textarea name="instructions" value={recipe.instructions} onChange={handleChange} />
                    <input name="category" value={recipe.category} onChange={handleChange}/>
                    <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                    <h2>{recipe.title}</h2>
                    <p><strong>Category:</strong> {recipe.category}</p>
                    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> {recipe.instructions}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
                </>
            )}
        </div>
    );
};

export default RecipeDetails;
