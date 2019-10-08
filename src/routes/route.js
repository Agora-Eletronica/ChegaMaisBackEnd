const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.json({message: "Ok"});
});

module.exports = routes;