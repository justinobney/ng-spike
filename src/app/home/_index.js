'use strict';

var angular = require('angular');
var homeModule = angular.module('app.home', []);

homeModule
  .controller('HomeCtrl', require('./homeCtrl'));

module.exports = homeModule;
