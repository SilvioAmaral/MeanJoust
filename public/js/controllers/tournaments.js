'use strict';

angular.module('mean.tournaments').controller('TournamentsController',
    ['$scope', '$routeParams', '$location', 'Global', 'Tournaments',
        function ($scope, $routeParams, $location, Global, Tournaments) {
    $scope.global = Global;

    $scope.create = function() {
        var tournament = new Tournaments({
            title: this.title,
            content: this.content
        });
        tournament.$save(function(response) {
            $location.path('tournaments/' + response._id);
        });

        this.title = '';
        this.content = '';
    };

    $scope.remove = function(tournament) {
        if (tournament) {
            tournament.$remove();

            for (var i in $scope.tournaments) {
                if ($scope.tournaments[i] === tournament) {
                    $scope.tournaments.splice(i, 1);
                }
            }
        }
        else {
            $scope.tournament.$remove();
            $location.path('tournaments');
        }
    };

    $scope.update = function() {
        var tournament = $scope.tournament;
        if (!tournament.updated) {
            tournament.updated = [];
        }
        tournament.updated.push(new Date().getTime());

        tournament.$update(function() {
            $location.path('tournaments/' + tournament._id);
        });
    };

    $scope.find = function() {
        Tournaments.query(function(tournaments) {
            $scope.tournaments = tournaments;
        });
    };

    $scope.findOne = function() {
        Tournaments.get({
            tournamentId: $routeParams.tournamentId
        }, function(tournament) {
            $scope.tournament = tournament;
        });
    };
}]);