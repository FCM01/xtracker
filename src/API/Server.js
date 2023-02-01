const express = require("express");
const request = require("request");
const cors = require("cors");
const { response } = require("express");

const app = express();
app.use(cors());
app.use(express.json());

const For_Launches = (data) => {};
//routes for frontend
//routes on all crew on spaceX database
app.get("/get/all/crew",(req,res)=>{
  request("https://api.spacexdata.com/v4/crew",function(error,reponse,body){
    if (!error &&reponse.statusCode==200){
      let new_data  = JSON.parse(body)
      let data  = {
        "number":new_data.length,
        "data":new_data
      }
      res.json(data)
    }else{
      console.log("ERROR onn GET[latest] request :", error);
    }
  })
})

//routes on laatest lauch crew and mission 
app.get("/getcrew", (req, res) => {
  //data colection
  let crew;
  request(
    "https://api.spacexdata.com/v5/launches/latest",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let new_data = JSON.parse(body);
        crew = new_data.crew;
        res.json({ data: crew });
      } else {
        console.log("ERROR onn GET[latest] request :", error);
      }
    }
  );
});

app.get("/get/latest",(req,res)=>{

  request("https://api.spacexdata.com/v5/launches/latest",function(error,reponse,body){
    if(!error&& response.statusCode ==200){
      let new_data  = JSON.parse(body)
      res.json(new_data)
    }
  } )

})

//route on all lauches 
app.get("/getlaunches", (req, res) => {
  request(
    "https://api.spacexdata.com/v5/launches",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let new_data = JSON.parse(body);
        let launchNames = []
        for(let i=0 ;i<new_data.length;i++){
          launchNames.push(new_data[i].name)
        }
        console.log(launchNames)
        let data  = {
          "number":new_data.length ,
          "lauches":new_data,
          "lauchNames":launchNames

        }
        res.json(data)
      } else {
        console.log("ERROR onn GET[launches] request :", error);
      }
    }
  );
});



app.listen(process.eventNames.PORT || 8000, () => {
  console.log("Running on port 8000");
});
