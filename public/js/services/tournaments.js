'use strict';

//Tournaments service used for tournaments REST endpoint
angular.module('mean.tournaments').factory('Tournaments', ['$resource', function($resource) {
    return $resource('tournaments/:tournamentId', {
        tournamentId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);