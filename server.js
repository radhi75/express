const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();

const workingdays = ["Monday", "Tuesday", "Wednesday", "thursday", "friday"];
const date = new Date();
const day = workingdays[date.getDay() - 1];

const hour = date.getHours();
// const hour = 18;
const x = (req, res, next) => {
  if (workingdays.includes(day) && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.render("closed");
  }
};
app.use(x);

app.listen(5000);
console.log(day);

app.use("/", router);
console.log("hello world");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

router.get("/", (req, res) => res.render("home"));
router.get("/services", (req, res) => res.render("services"));
router.get("/contact", (req, res) => res.render("contact"));
