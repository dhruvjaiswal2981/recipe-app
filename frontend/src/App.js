import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeSubmissionForm from "./components/RecipeSubmissionForm";
import SurpriseRecipe from "./components/SurpriseRecipe";
import { RecipeProvider } from "./context/RecipeContext";
import styles from "./styles/App.module.css";

const App = () => (
    <RecipeProvider>
        <Router>
            <Navbar />
            <div className={styles.container}>
                <Routes>
                    <Route path="/" element={<RecipeList />} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                    <Route path="/add" element={<RecipeSubmissionForm />} />
                </Routes>
                <SurpriseRecipe />
            </div>
        </Router>
    </RecipeProvider>
);

export default App;
