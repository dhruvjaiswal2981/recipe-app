import React, { createContext, useState, useEffect } from "react";
import { fetchRecipes } from "../api/api";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes().then(response => setRecipes(response.data));
    }, []);

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipeContext.Provider>
    );
};
