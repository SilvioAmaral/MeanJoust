'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Competitors',
        'link': 'competitors'
    }, {
        'title': 'Create New Competitor',
        'link': 'competitors/create'
    }, {
        'title': 'Tournaments',
        'link': 'tournaments'
    }, {
        'title': 'Create New Tournament',
        'link': 'tournaments/create'
    }];
    
    $scope.isCollapsed = false;
}]);