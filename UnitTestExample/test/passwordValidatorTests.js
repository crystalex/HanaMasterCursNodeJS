var chai = require("chai");
var passwordValidator = require("../modules/passwordValidator");

// module level
describe("passwordValidator", function () {

    // function level
    describe(".validPassword(password)", function () {

        //function test 1
        it("should have minimum 8 chars length", function () {
            
            //implementation test with known wrong value
            var wrongPass = "1234567";
            var valid = passwordValidator.validPassword(wrongPass);
            
            //chai check wrong
            chai.expect(valid).to.be.equal(false);

            //test with good value
            var goodPassword = "12345678";
            var valid2 = passwordValidator.validPassword(goodPassword);

            // chai check good
            chai.expect(valid).to.be.equal(true);
        });
        
        //function test 2
        it("it should not contain 'password' inside", function () {
            
            //implementation test with known wrong value
            var wrongPass = "password1";
            var valid2 = passwordValidator.validPassword(wrongPass);
            
            //chai check wrong
            chai.expect(valid2).to.be.equal(false);

            //test with good value
            var goodPassword = "blabla";
            var valid2 = passwordValidator.validPassword(goodPassword);

            // chai check good
            chai.expect(valid2).to.be.equal(true);
        });
    });

});