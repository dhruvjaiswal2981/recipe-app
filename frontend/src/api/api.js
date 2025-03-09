import axios from "axios";

const API_URL = "http://localhost:5000"; // Ensure your backend is running on this port

export const fetchRecipes = async () => {
    try {
        return await axios.get(`${API_URL}/recipes`);
    } catch (error) {
        console.error("Error fetching recipes", error);
    }
};

export const fetchRecipeById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/recipes/${id}`);
        return response;
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        return { data: null }; // Return null if recipe not found
    }
};


export const addRecipe = async (recipe) => {
    try {
        return await axios.post(`${API_URL}/recipes`, recipe);
    } catch (error) {
        console.error("Error adding recipe", error);
    }
};

export const updateRecipe = async (id, recipe) => {
    try {
        return await axios.put(`${API_URL}/recipes/${id}`, recipe);
    } catch (error) {
        console.error("Error updating recipe", error);
    }
};

export const fetchRandomRecipe = async () => {
    try {
        return await axios.get(`${API_URL}/recipes/random`);
    } catch (error) {
        console.error("Error fetching random recipe", error);
        return { data: null };
    }
};

