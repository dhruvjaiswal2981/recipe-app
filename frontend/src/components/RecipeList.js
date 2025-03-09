import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from "../styles/RecipeList.module.css";

const RecipeList = () => {
    const { recipes, setRecipes } = useContext(RecipeContext);

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const reorderedRecipes = [...recipes];
        const [movedRecipe] = reorderedRecipes.splice(result.source.index, 1);
        reorderedRecipes.splice(result.destination.index, 0, movedRecipe);
        setRecipes(reorderedRecipes);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="recipes">
                {(provided) => (
                    <ul ref={provided.innerRef} {...provided.droppableProps} className={styles.list}>
                        {recipes.map((recipe, index) => (
                            <Draggable key={recipe.id.toString()} draggableId={recipe.id.toString()} index={index}>
                                {(provided) => (
                                    <li 
                                        ref={provided.innerRef} 
                                        {...provided.draggableProps} 
                                        {...provided.dragHandleProps} 
                                        className={styles.item}
                                    >
                                        {/* Clicking the title will open the Recipe Details page */}
                                        <Link to={`/recipe/${recipe.id}`} className={styles.recipeLink}>
                                            <strong>{recipe.title}</strong>
                                        </Link>
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default RecipeList;
