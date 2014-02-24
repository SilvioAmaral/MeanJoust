'use strict';

angular.module('mean.competitors')
.controller('CompetitorsController', ['$scope', '$routeParams', '$location', 'Global', 'Competitors', function ($scope, $routeParams, $location, Global, Competitors) {
    $scope.global = Global;

    $scope.create = function() {
        var competitor = new Competitors({
            email: this.email,
            name: this.name,
            description: this.description,
            type: this.type
        });
        competitor.$save(function(response) {
            $location.path('competitors/' + response._id);
        });

        this.email = '';
        this.name = '';
        this.description = '';
        this.type = '';
    };

    $scope.remove = function(competitor) {
        if (competitor) {
            competitor.$remove();

            for (var i in $scope.competitors) {
                if ($scope.competitors[i] === competitor) {
                    $scope.competitors.splice(i, 1);
                }
            }
        }
        else {
            $scope.competitor.$remove();
            $location.path('competitors');
        }
    };

    $scope.update = function() {
        var competitor = $scope.competitor;
        if (!competitor.updated) {
            competitor.updated = [];
        }
        competitor.updated.push(new Date().getTime());

        competitor.$update(function() {
            $location.path('competitors/' + competitor._id);
        });
    };

    $scope.find = function() {
        Competitors.query(function(competitors) {
            $scope.competitors = competitors;
        });
    };

    $scope.findOne = function() {
        Competitors.get({
            competitorId: $routeParams.competitorId
        }, function(competitor) {
            $scope.competitor = competitor;
        });
    };
}]);