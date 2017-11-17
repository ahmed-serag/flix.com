// BASE SETUP
// =============================================================================

// call the packages
var express   = require('express');        
var app       = express();                 

//var mongoose   = require('mongoose');
//mongoose.connect('mongodb://****:****@127.0.0.1:27017');

//var Movie = require('./models/movie');
var Movies = [{
    name:"Justice League",
    release: "Nov 17, 2017",
    runtime: "2hr 1m"

},{
    name:"Thor: Ragnarok",
    release: "Nov 3, 2017",
    runtime: "2hr 10m"
}];

var port = process.env.PORT || 8080;        

// get an instance of the express Router
var router = express.Router();   

// middleware to use for all requests can be used for checking IP for Example and getting country
router.use(function(req, res, next) {

    console.log('before request');
    next(); // make sure we go to the next routes and don't stop here
});


router.route('/movies')

    .get(function(req, res) {
        res.json(Movies);
    });


// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
