const express = require('express');
const bodyParser = require('body-parser');
const partnersRouter = express.Router();

partnersRouter.use(bodyParser.json());

partnersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you ');
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});


partnersRouter.route('/:partnersId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send this partners ID to you ${req.params.partnersId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.partnersId}`);
})
.put((req, res) => {
    res.end(`Updated the partners ID ${req.params.partnersId}`);
})
.delete((req, res) => {
    res.end(`Deleting the partners with following ID ${req.params.partnersId}`);
});


module.exports = partnersRouter;