'use strict';

/**
 * @ngdoc function
 * @name rolandApp.controller:skillsdemoCtrl
 * @description
 * # skillsdemoCtrl
 * Controller of the rolandApp
 */
angular.module('skills.demos', [])
  .controller('SkillsdemoCtrl', function ($scope, $stateParams, limitToFilter){
    $scope.id = $stateParams.id;
    $scope.issue = {
      status: $stateParams.id
    };

    $scope.ideas = [
      ['ideas1', 1],
      ['ideas2', 8],
      ['ideas3', 5]
    ];
    $scope.limitedIdeas = limitToFilter($scope.ideas, 2);
  });










