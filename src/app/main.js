'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');
require('./home/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    'app.home'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app')
    .constant('AppSettings', require('./constants'))
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', require('./routes')])
    .run(['$rootScope', 'AppSettings', require('./on_run')]);

  angular.bootstrap(document, ['app']);

});
