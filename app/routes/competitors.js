'use strict';

// Competitors routes use competitors controller
var competitors = require('../controllers/competitors');
var authorization = require('./middlewares/authorization');

// Competitor authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.competitor.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/competitors', competitors.all);
    app.post('/competitors', authorization.requiresLogin, competitors.create);
    app.get('/competitors/:competitorId', competitors.show);
    app.put('/competitors/:competitorId', authorization.requiresLogin, hasAuthorization, competitors.update);
    app.del('/competitors/:competitorId', authorization.requiresLogin, hasAuthorization, competitors.destroy);

    // Finish with setting up the competitorId param
    app.param('competitorId', competitors.competitor);

};