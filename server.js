var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');

var swig = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/domains', function(req, res, next) {
    fs.readFile(path.join(__dirname, './mocks/domains.json'), function(err, data) {
        if (err) {
            res.status(404).end();
        } else {
            res.send(JSON.parse(data));
        }
    });
});

app.get('/api/domains/:id', function(req, res, next) {
    var id = req.params.id;
    console.log(id);
    fs.readFile(path.join(__dirname, './mocks/' + id + '.json'), function(err, data) {
        if (err) {
            res.status(404).end();
        } else {
            res.send(JSON.parse(data));
        }
    });
});

app.use(function(req, res) {
    // what are the param definitions
    // server-side rendering
    Router.run(routes, req.path, function(Handler) {
        var html = React.renderToString(React.createElement(Handler));
        var page = swig.renderFile('views/index.html', {html: html});
        res.send(page);
    });
});

app.listen(app.get('port'), function() {
    console.log('Listening to port ' + app.get('port'));
});
