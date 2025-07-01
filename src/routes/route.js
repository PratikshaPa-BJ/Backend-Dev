const express = require("express");
const router = express.Router();

router.get("/test-me", function (req, res) {
  res.send("My First Node JS Application");
});

router.get("/students", function (req, res) {
  let students = ["Pratiksha", "Priyanka", "Bipasha", "Atrika"];
  console.log(req.params);

  res.send(students);
});

// Path Parameter
router.get("/student/:name", function (req, res) {
  console.log("The Path Parameter in the req are: ");
  let myParams = req.params;
  console.log(JSON.stringify(myParams));
  let myName = myParams.name;
  console.log(myName);

  res.send("Full name is: " + myName);
});

router.get("/students/:name/:title", function (req, res) {
  let fullName = JSON.stringify(req.params);
  console.log("The Path Parameter in the req are: ", fullName);
  let x = JSON.parse(fullName);
  console.log(x);

  res.send("Full name is: " + x.name + " " + x.title);
});

// Query Params

router.get("/employee", function (req, res) {
  console.log("Demo of Query params: ");
  console.log(JSON.stringify(req.query));
  let customerName = req.query.name;
  let profile = req.query.profile;

  res.send(customerName + " " + profile);
});

router.get("/fruits", function (req, res) {
  console.log("Query params in this request are: ", JSON.stringify(req.query));
  let arr = ["Mango", "Melon", "Apple"];
  let i = req.query.index;
  console.log("The element of specific index is: ", arr[i]);

  res.send(arr[i]);
});

router.get("/candidates", function (req, res) {
  console.log(JSON.stringify(req.query));
  let gender = req.query.gender;
  let state = req.query.state;
  let district = req.query.district;
  console.log("State: ", state, ", District: ", district, ", Gender: ", gender);

  res.send(
    "State: " + state + " , district: " + district + "  , Gender: " + gender
  );
});

router.get("/bags", function (req, res) {
  let queryParams = req.query;
  let category = queryParams.category;
  let brand = queryParams.brand;
  let colour = queryParams.colour;
  console.log("The Brand selected is: " + brand);
  console.log("The colour selected is: " + colour);
  console.log("The Category selected is: " + category);

  res.send("Done");
});
// take marks in a request as a query and send pass if marks> 40 otherwise send fail
router.get("/test-me1", function (req, res) {
  let marks = req.query.marks;
  let result = marks > 40 ? "Pass" : "Fail";
  let status = result == "Pass" ? true : false;

  res.send({ data: result, status: status });
});

// Filter out all the elements in an array that are greater than a specific input
let arr = [ 150, 40, 33, 432, 99, 675, 34, 456 ];
router.get('/test-me2', function(req, res){
  let input = req.query.input;
  let finalArr= []
  for( let i=0; i<arr.length; i++){
    if(arr[i] > input){
      finalArr.push(arr[i])
    }
  }
  res.send({data:finalArr})
})
router.get('/test-me3', function(req, res){
  let input = req.query.input;
  let finalArr = arr.filter((elem)=> elem > input );
  
  res.send({data:finalArr})
})

module.exports = router;
