var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();

module.exports = function (app) {

    app.get('/person/:id', function (req, res) {
        res.render('person', {
            ID: req.params.id,
            Qstr: req.query.Qstr,
        });
    });

    app.post('/person', urlencodedParser, jsonParser, function (req, res) {
        res.send(req.body.firstname + ' ' + req.body.lastname);
        // console.log(req.body.firstname);
        console.log(req.body);
    });

    app.get('/', function (req, res) {
        res.render('index');
    });
}