var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('lodash'),
    app = express(),
    employees = [{
        name: 'Employee 1',
        id: '100001',
        email: 'employee1@test.com'
    }, {
        name: 'Employee 2',
        id: '100002',
        email: 'employee2@test.com'
    }, {
        name: 'Employee 3',
        id: '100003',
        email: 'employee3@test.com'
    }];

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

/**
 * @param  {} req
 * @param  {} res
 */
app.get('/', function (req, res) {
    res.sendFile('index.html');
});

/**
 * @param  {} req
 * @param  {} res
 */
app.get('/employees', function (req, res) {
    res.json(employees);
});

/**
 * @param  {} req
 * @param  {} res
 */
app.get('/employee/:id', function (req, res) {
    res.json(_.find(employees, { id: req.params.id }));
});

/**
 * @param  {} req
 * @param  {} res
 */
app.delete('/employee/:id', function (req, res) {
    _.remove(employees, {
        id: req.params.id
    });

    res.json(employees);
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});