const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("./recipes.db", (err) => {
    if (err) console.error("Error opening database:", err.message);
    else {
        db.run(`CREATE TABLE IF NOT EXISTS recipes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            ingredients TEXT,
            instructions TEXT,
            category TEXT
        )`);
    }
});

app.get("/recipes", (req, res) => {
    db.all("SELECT * FROM recipes", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post("/recipes", (req, res) => {
    const { title, ingredients, instructions, category } = req.body;
    db.run(`INSERT INTO recipes (title, ingredients, instructions, category) VALUES (?, ?, ?, ?)`,
        [title, ingredients, instructions, category],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID });
        }
    );
});

app.put("/recipes/:id", (req, res) => {
    const { title, ingredients, instructions, category } = req.body;
    db.run(`UPDATE recipes SET title=?, ingredients=?, instructions=?, category=? WHERE id=?`,
        [title, ingredients, instructions, category, req.params.id],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ updated: this.changes });
        }
    );
});

app.get("/recipes/random", (req, res) => {
    db.get("SELECT * FROM recipes ORDER BY RANDOM() LIMIT 1", [], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "No recipes found" });
        res.json(row);
    });
});

app.get("/recipes/:id", (req, res) => {
    db.get("SELECT * FROM recipes WHERE id = ?", [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Recipe not found" });
        res.json(row);
    });
});



app.listen(5000, () => console.log("Server running on port 5000"));
