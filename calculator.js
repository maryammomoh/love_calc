
const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/" , function(req, res){

    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var name1 = req.body.name1;
    var name2 = req.body.name2;
    


   var loveScore = Math.floor(Math.random() * 100) + 1;
     res.send("Your Love Score is " + loveScore);
});




app.listen(3000, function(){
console.log("server is running on port 3000");
});