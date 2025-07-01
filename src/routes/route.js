const express = require("express");
const router = express.Router();


router.get("/test-me2", function (req, res) {
  res.send({ a: 15, b: 56 });
});

router.post("/create-movies", function (req, res) {
  const body = req.body;
  let id = req.body.id;
  let movie = req.body.name;
  console.log(body);
  console.log("id: " + id);
  console.log("movie: ", movie);
  res.send(body);
});

router.post("/test-me3", function (req, res) {
  let arr = ["Pratiksha", 10];
  let input = req.body.element;
  let newArr = arr.push(input);
  console.log(newArr);
  console.log(arr);

  res.send({ msg: arr, status: true });
});

let players = [
  {
    name: "Sajan Prakash",
    dob: "14/9/1993",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "Sania Mirza",
    dob: "15/11/1986",
    gender: "Female",
    city: "Mumbai",
    sports: ["Tennis"],
  },
  {
    name: "Saina Nehwal",
    dob: "17/3/1990",
    gender: "Female",
    city: "Hisar",
    sports: ["Badminton"],
  },
];
router.post("/players", function (req, res) {
  
  let dataFromReq = req.body;
  let nameFromReq = dataFromReq.name;
  let isDuplicate = false;
  for ( obj of players){
    if(obj.name === nameFromReq){
      isDuplicate= true;
      break;
    }else{
       isDuplicate = false;

    }
  }
  if(isDuplicate){
    res.send({ msg:"player already exist!", status:false })
  }else{
    players.push(dataFromReq)
    res.send( {data:players, status: true})
  }
});

router.post('/players1', function(req,res){
  let body = req.body;
  let nameFromReq = body.name;
  let player = players.find((elem) => elem.name === nameFromReq);
  if(player){
    res.send({msg: "Player Already Exist!"})
  }else{
    players.push(body);
    res.send({data:players, status:true})
  }
})
module.exports = router;
