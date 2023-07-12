const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');

app.get("/", function(req, res){
   
    var today = new Date();
    var currentDay = today.getDay();
var day="";

switch (currentDay) {
    case 0:
    day = "Sunday";
    break;
    case 1:
        day = "Sunday";
        break;

        case 2:
            day = "Monday";
            break;
            case 3:
                day = "Tuesday";
                break;

                case 4:
                    day = "Wednesday";
                    break;
                    case 5:
                        day = "Thursday";
                        break;
                        case 6:
                            day = "Friday";
                            break;
                            default:
                 console.log("Error: current day is equal to:" + currentDay);


}
  res.render("list", {
    kindOfDay:  day
  });
    
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});
