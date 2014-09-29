'use strict';

function HomeCtrl($q) {

  // ViewModel
  var vm = this;

  vm.title = 'Test Title';
  vm.number = 123;

  console.log($q);
}

module.exports = HomeCtrl;
