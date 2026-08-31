console.log("web Serverni boshlash");
const express = require("express");
const app = express();




// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// MongoDB choqirish
const db = require("./server").db();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.post("/create-item", (req, res) => {
  console.log(req);
  res.json({ test: "success" });
});

// app.get("/author", (req, res) => {
//   res.render("author", { user: user });
// });

app.get("/", function (req, res) {
  res.render("reja");
});

// app.get("/", function (req, res) {
//   res.end(`<h1>HELLO WORLD</h1>`);
// });
// app.get("/gift", function (req, res) {
//   res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
// });

module.exports = app;
