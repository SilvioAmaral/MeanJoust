'use strict';

// Articles routes use tournaments controller
var tournaments = require('../controllers/tournaments');
var authorization = require('./middlewares/authorization');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.tournament.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/tournaments', tournaments.all);
    app.post('/tournaments', authorization.requiresLogin, tournaments.create);
    app.get('/tournaments/:tournamentId', tournaments.show);
    app.put('/tournaments/:tournamentId', authorization.requiresLogin, hasAuthorization, tournaments.update);
    app.del('/tournaments/:tournamentId', authorization.requiresLogin, hasAuthorization, tournaments.destroy);

    // Finish with setting up the tournamentId param
    app.param('tournamentId', tournaments.tournament);

};