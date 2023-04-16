var express = require("express");
var app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

var HTTP_PORT = process.env.PORT || 8080;


const uri = "mongodb+srv://nishambohora12:NishambohoraDatabase@studentdata.nsnacqt.mongodb.net/Student";

mongoose.connect("mongodb+srv://nishambohora12:NishambohoraDatabase@studentdata.nsnacqt.mongodb.net/Student");

app.use(cors());
app.use(bodyParser.json());



// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

const studentData = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  bloodGroup: String,
  email: String,
  streetAddress: String,
  city: String,
  region: String,
  postalCode: String
});

const Student = mongoose.model("Student", studentData);




// setup a 'route' to listen on the default url path (http://localhost)



app.post("/", async  function (req, res) {
  let student = new Student;
  student.firstName = req.body.firstName;
  student.lastName = req.body.lastName;
  student.dateOfBirth = req.body.dateOfBirth;
  student.bloodGroup = req.body.bloodGroup;
  student.email = req.body.email;
  student.streetAddress = req.body.streetAddress;
  student.city = req.body.city;
  student.region = req.body.region;
  student.postalCode = req.body.postalCode;

 const doc = await student.save();
});

app.get("/",async ( req, res)=>
{
   const docs =    await Student.find({});
   console.log(docs);
   res.json(docs);
})

// setup another route to listen on /about
app.get("/about", function (req, res) {
  res.send("<h3>About</h3>");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);