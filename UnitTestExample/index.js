console.log("Unit test example start");

var myValidator = require("./modules/passwordValidator");

var password = "test2017";
var valid = myValidator.validPassword(password);

console.log("Your password " + password + " is :" + valid);