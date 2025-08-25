const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    stuName: {
        type: String,
        required: true,
    },
    rollno: {
        type: Number,
        required: true,
    },
    fathername: {
        type: String,
        require: true,
    },
    mobileno: {
        type: Number,
        required: true,
    },
    emial: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    coure: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;