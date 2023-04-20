const express = require("express");
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
app.use(bodyParser.urlencoded({extended:true}));



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



app.post("/", async function (req, res) {
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

app.get("/", async (req, res) => {
  
  const docs = await Student.find({});
  console.log(docs);
  res.json(docs);
})




app.get('/student/:id', async (req, res) => {

  const id =req.params.id;

 
    try{


        const data = await Student.findOne({_id:id});
        
        res.json(data);
       
      
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    
})

// app.post("/student/:id", async function(res, req)
//  {
  


//     const student = await Student.findOne({_id:req.params});


//     student.firstName= req.body.firstName;
//     student.firstName = req.body.firstName;
//     student.lastName = req.body.lastName;
//     student.dateOfBirth = req.body.dateOfBirth;
//     student.bloodGroup = req.body.bloodGroup;
//     student.email = req.body.email;
//     student.streetAddress = req.body.streetAddress;
//     student.city = req.body.city;
//     student.region = req.body.region;
//     student.postalCode = req.body.postalCode;

//      const newdata = await student.save();
        
//    console.log(newdata);
   

    
    
// })



  app.patch("/update/:id", async(req,res)=>
  {

    try{
      const {id} = req.params;
      const updateStudent = await Student.findByIdAndUpdate(id,req.body,{
        new: true
      });
      console.log(updateStudent);
      res.status(201).json(updateStudent)

    }
    catch(error)
    {
      res.status(422).json(error);
    }
  })

   
  



   



app.delete("/:id", async (res, req) => {

})

// setup another route to listen on /about


// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);