var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('lodash'),
    app = express(),
    employees = [{
        firstname: 'Employee',
        lastname: '1',
        id: '100001',
        email: 'employee1@test.com',
        address: 'address',
        gender: 'male',
        username: 'employee1',
        password: 'password'
    }, {
        firstname: 'Employee',
        lastname: '2',
        id: '100002',
        email: 'employee2@test.com',
        address: 'address',
        gender: 'female',
        username: 'employee2',
        password: 'password'
    }, {
        firstname: 'Employee',
        lastname: '3',
        id: '100003',
        email: 'employee3@test.com',
        address: 'address',
        gender: 'male',
        username: 'employee3',
        password: 'password'
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
app.post('/employee', function (req, res) {
    req.body.id = +(_.maxBy(employees, 'id').id) + 1 + '';
    employees.unshift(req.body);

    res.json(employees);
});

/**
 * @param  {} req
 * @param  {} res
 */
app.post('/employee/:id', function (req, res) {
    employees.splice(_.indexOf(employees, _.find(employees, { id: req.params.id })), 1);
    employees.unshift(req.body);

    res.json(employees);
});

/**
 * @param  {} req
 * @param  {} res
 */
app.delete('/employee/:id', function (req, res) {
    _.remove(employees, { id: req.params.id });

    res.json(employees);
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});