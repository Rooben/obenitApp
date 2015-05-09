'use strict';

/**
 * @ngdoc function
 * @name rolandApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rolandApp
 */
angular.module('rolandApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
