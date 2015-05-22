'use strict';

/**
 * @ngdoc function
 * @name rolandApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the rolandApp
 */
angular.module('rolandApp')
  .controller('SkillsCtrl', function ($scope) {
    $(function(){
      $scope.demoMessage = $('.mobileMainMenu').css('display') === 'block' ? 'Click on the "Demos" button'  : 'Use the left pane';
    });
  });


