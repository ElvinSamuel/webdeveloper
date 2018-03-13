exports.showOff = function(phone) {

            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone!';
                
            return Promise.resolve(message);
            
    // Can also type that the long way...
    /* ///////////////////////////
        return new Promise(
            function(resolve, reject){
                var message = 'Hey friend, I have a new' ...
                
                resolve(message);
            }
        );
        ///////////////////////////
    */
};