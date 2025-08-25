const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
const path = require("path");
const Student = require("./models/Stumodel.js");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);

main().then((res) => {
    console.log("Connection Successfully");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/StudentData");
};

// Show Registration Form
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/register", async(req, res, next) => {
    const { stuName, rollno, fathername, mobileno, emial, password, gender, department, coure, stuPhoto, city, address } = req.body;
    const newStudent = new Student({ stuName, rollno, fathername, mobileno, emial, password, gender, department, coure, stuPhoto, city, address });
    await newStudent.save();
    res.redirect("/students");
});

app.get("/students",(async(req, res,) => {
    res.render("student.ejs");
}));


app.use((err, req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Wrong !" } = err;
    res.status(statusCode).render("error.ejs", { statusCode, message });
});
app.listen(port, () => {
    console.log(`App is listen on Port ${port}`);
});