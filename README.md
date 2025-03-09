# Recipe Management App

## 📌 Project Overview
This is a **Recipe Management Application** built using **React (frontend), Node.js (backend), and SQLite (database)**. Users can **add, edit, delete, and browse recipes**, and even use a **'Surprise Me'** button to fetch a random recipe.

---

## 📂 Project Structure
```
/root
│── /frontend
│   ├── /src
│   │   ├── /components
│   │   │   ├── RecipeList.js
│   │   │   ├── RecipeDetails.js
│   │   │   ├── RecipeSubmissionForm.js
│   │   │   ├── SurpriseRecipe.js
│   │   ├── /context
│   │   │   ├── RecipeContext.js
│   │   ├── /api
│   │   │   ├── api.js
│   │   ├── /styles
│   │   │   ├── RecipeList.module.css
│   │   │   ├── RecipeDetails.module.css
│   │   │   ├── RecipeForm.module.css
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│
│── /backend
│   ├── server.js
│
│── README.md
```
---

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/dhruvjaiswal2981/recipe-app.git
cd recipe-app
```

### 2️⃣ Setup Backend (Node.js + SQLite)
```bash
cd backend
npm install
node server.js
```
✅ This will start the backend server on **http://localhost:5000**.

### 3️⃣ Setup Frontend (React)
```bash
cd ../frontend
npm install
npm start
```
✅ This will start the React app on **http://localhost:3000**.

---

## 🚀 Features
✅ **Add Recipes** – Users can create new recipes with title, ingredients, instructions, and category.
✅ **View Recipes** – Displays a list of recipes with a **clickable title** that opens detailed information.
✅ **Edit Recipes** – Update recipe details directly from the **Recipe Details page**.
✅ **Delete Recipes** – Allows users to remove recipes from the database.
✅ **Drag-and-Drop Sorting** – Reorder recipes in the list using drag-and-drop.
✅ **Surprise Me** – Fetches a **random recipe** from the database.

---

## 🌍 API Endpoints (Backend)
### 1️⃣ Get All Recipes
```http
GET /recipes
```
Response:
```json
[
  {
    "id": 1,
    "title": "Spaghetti Carbonara",
    "ingredients": "Spaghetti, Eggs, Cheese, Pancetta",
    "instructions": "Cook pasta, mix with ingredients",
    "category": "Pasta"
  }
]
```

### 2️⃣ Get Recipe by ID
```http
GET /recipes/:id
```

### 3️⃣ Add a Recipe
```http
POST /recipes
```
Payload:
```json
{
  "title": "New Recipe",
  "ingredients": "List of ingredients",
  "instructions": "Step-by-step guide",
  "category": "Category Name"
}
```

### 4️⃣ Update a Recipe
```http
PUT /recipes/:id
```

### 5️⃣ Get a Random Recipe
```http
GET /recipes/random
```

---

## 🛠 Technologies Used
### **Frontend:**
- React.js
- React Router
- Axios (for API requests)
- CSS Modules
- @hello-pangea/dnd (Drag & Drop)

### **Backend:**
- Node.js
- Express.js
- SQLite (Database)

---

## 🎯 Future Improvements
- ✅ User Authentication (Login/Signup)
- ✅ Image Upload for Recipes
- ✅ Dark Mode Theme
- ✅ Unit Testing

---

## Deployment

- Backend Deployment
    - Live Demo: The application is hosted on Render
    - Access it here: https://recipe-app-waou.onrender.com


- Frontend Deployment

    - Live Demo: The application is hosted on Netlify.
    - Access it here: https://app-recipe-management.netlify.app/

---

🚀 **Enjoy your Recipe Management App!** 🍔🍕🎉

