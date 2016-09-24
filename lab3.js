/**
 * Created by Daniel Williams on 2016-09-23.
 */
// link to connect package
var connect = require('connect');

// link to the url module to parse url parameters
var url = require('url');
var app = connect();


var lab3 = function(req, res, next) {
// variables for the query strings, one = method, two = x , three = y
    var qs = url.parse(req.url, true).query;
    var one = qs.method;
    var two = qs.x;
    var three = qs.y;

// if statements that either add, subtract, multiply or divide the x and y numeric values
    if(one == 'add'){
        var addTotal = parseFloat(two)+parseFloat(three);
        res.end(two+' + '+three+ ' = ' +(addTotal));
    }

    if(one == 'subtract'){
        var subtractTotal = parseFloat(two)-parseFloat(three);
        res.end(two+' - '+three+ ' = ' +(subtractTotal))
}

    if(one == 'multiply'){
        var multiplyTotal = parseFloat(two)*parseFloat(three);
        red.end(two+ ' * '+three+ ' = ' +(multiplyTotal));
    }

    if(one == 'divide'){
        var divideTotal = parseFloat(two)/parseFloat(three);
        res.end(two+ ' / '+three+ ' = ' +(divideTotal));
    }

};

// executes the lab3.js
app.use('/lab3', lab3);

// port 3000
app.listen(3000);
