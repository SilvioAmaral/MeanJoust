'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/competitors', {
            templateUrl: 'views/competitors/list.html'
        }).
        when('/competitors/create', {
            templateUrl: 'views/competitors/create.html'
        }).
        when('/competitors/:competitorId/edit', {
            templateUrl: 'views/competitors/edit.html'
        }).
        when('/competitors/:competitorId', {
            templateUrl: 'views/competitors/view.html'
        }).
        when('/tournaments', {
            templateUrl: 'views/tournaments/list.html'
        }).
        when('/tournaments/create', {
            templateUrl: 'views/tournaments/create.html'
        }).
        when('/tournaments/:tournamentId/edit', {
            templateUrl: 'views/tournaments/edit.html'
        }).
        when('/tournaments/:tournamentId', {
            templateUrl: 'views/tournaments/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);