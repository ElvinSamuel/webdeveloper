var isMomHappy = true;

// For My Own Testing Purposes
exports.isThisExported = function(){
    console.log('I got exported too!');
};

exports.willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Huawei',
                color: 'rose gold'
            };
            resolve (phone);
        } else {
            var reason = new Error('Mom is NOT happy');
            reject (reason);
        }
        
    }
);