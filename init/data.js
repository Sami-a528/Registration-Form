const mongoose = require("mongoose");
const Studentmodel = require("../models/Stumodel.js");

main().then((res) => {
    console.log("Connection Successfully");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/StudentData");
};

let Alldata = [
    {
        stuName: "Samiullah Alam",
        rollno: 2201326151,
        fathername: "Tarif Miya",
        mobileno: 7654457989,
        emial: "abc@gmail.com",
        password: "1234",
        gender: "Male",
        department: "CSE",
        coure: "B.Tech",
        city: "Narkatiyaganj",
        address: "Mujauna",
    },
];

let AddData = async () => {
    await Studentmodel.deleteMany({});
    await Studentmodel.insertMany(Alldata);
};
AddData();