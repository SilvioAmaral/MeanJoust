'use strict';

//Competitors service used for competitors REST endpoint
angular.module('mean.competitors').factory('Competitors', ['$resource', function($resource) {
    return $resource('competitors/:competitorId', {
        competitorId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);