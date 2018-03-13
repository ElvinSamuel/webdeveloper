var phone = require('./isMomHappy.js');
var showFriend = require('./showFriend.js')
// Chaining promises -- also chaining exports.

var askMom = function() {
    phone.willIGetNewPhone
        .then(showFriend.showOff)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        });
};

askMom();