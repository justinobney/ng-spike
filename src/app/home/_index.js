'use strict';

var angular = require('angular');
var homeModule = angular.module('app.home', []);

homeModule
  .controller('HomeCtrl', ['$q', require('./homeCtrl')]);

module.exports = homeModule;
