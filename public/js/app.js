'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.route',
    'mean.system', 'mean.competitors','mean.tournaments']);

angular.module('mean.system', []);
angular.module('mean.competitors', []);
angular.module('mean.tournaments', []);
