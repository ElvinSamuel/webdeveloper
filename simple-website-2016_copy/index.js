var express    = require('express'),
    logger     = require('morgan'),
    app        = express(),
    template   = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
    
    app.use(logger('dev'));
    app.use(express.static(__dirname + '/static'));
    app.get('/', function(req, res, next){
        
        try {
            var html = template({ title: 'Home' });
            res.send(html);
        } catch (e) {
            next(e);
        }
    });
    
    app.listen(process.env.PORT, function(){
        console.log('Listening on C9 port: ' + process.env.PORT)
    });