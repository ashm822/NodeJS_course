const express = require('express');
const bodyParser = require('body-parser');
const promotionsRouter = express.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promo campsites to you ');
})
.post((req, res) => {
    res.end(`Will add the promo campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting allpromo  campsites');
});


promotionsRouter.route('/:promotionsId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send this Promotion ID to you ${req.params.promotionsId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotions/${req.params.promotionsId}`);
})
.put((req, res) => {
    res.end(`Updated the campsite Promotion ${req.params.promotionsId}`);
})
.delete((req, res) => {
    res.end(`Deleting the campsite promotion with following ID ${req.params.promotionsId}`);
});




module.exports = promotionsRouter;