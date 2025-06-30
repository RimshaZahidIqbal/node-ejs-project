const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index", { table: null });
});

app.post("/generate", (req, res) => {
    const num = parseInt(req.body.number);
    const table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${num} x ${i} = ${num * i}`);
    }
    res.render("index", { table, number: num });
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
