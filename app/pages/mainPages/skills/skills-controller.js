'use strict';

/**
 * @ngdoc function
 * @name rolandApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the rolandApp
 */
angular.module('mainPages.skills', ['skills.demos'])
  .config(function($stateProvider) {
    $stateProvider
      // SKILLS PAGE =================================
      .state('skills', {
        url: '/skills',
        views: {
          '@': {//This means, display these in the ui-view without a name (no name before the @), in index.html(no name after the @).
            templateUrl: 'mainPages/skills/skills.html',
            controller: 'SkillsCtrl'
          },
          'siteRoot@': {
            templateUrl: 'mainPages/verticalNav.html',
            controller: 'RootCtrl'
          }
        }
      })

      .state('skills.list', {
        url: '/list',
        templateUrl: 'mainPages/verticalNav.html',
        controller: 'RootCtrl'
      })

      .state('skills.demos', {
        url: '/:id',
        views: {
          '@': {
            templateUrl: 'mainPages/skills/demos/skillsDemos.html',
            controller: 'SkillsdemoCtrl'
          }
        }
      });
  })

  .controller('SkillsCtrl', function ($scope) {
    $(function(){
      $scope.demoMessage = $('.mobileMainMenu').css('display') === 'block' ? 'Click on the "Demos" button'  : 'Use the left pane';
    });
  });




