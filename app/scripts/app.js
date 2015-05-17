'use strict';

/**
 * @ngdoc overview
 * @name rolandApp
 * @description
 * # rolandApp
 *
 * Main module of the application.
 */
angular
  .module('rolandApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      // HOME STATES  ===============================
      .state('home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
          },
          'siteRoot@': { //This means, display these in the ui-view in index.html(no name after the @), called siteRoot
            templateUrl: '../views/sideNav.html'
          }
        }
      })

      // ABOUT PAGE  =================================
      .state('about', {
        url: '/about',
        views: {
          '@': {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          },
          'siteRoot@': {
            templateUrl: '../views/sideNav.html'
          }
        }
      })

      .state('skills', {
        url: '/skills',
        views: {
          '@': {//This means, display these in the ui-view without a name (no name before the @), in index.html(no name after the @).
            templateUrl: 'views/skills.html',
            controller: 'SkillsCtrl'
          },
          'siteRoot@': {
            templateUrl: '../views/columnNav.html'
          }
        }
      })

      .state('skills.list', {
        url: '/list',
        templateUrl: '../views/columnNav.html',
        controller: 'SkillsdemoCtrl'
      })

      .state('skills.demos', {
        url: '/:id',
        views: {
          '@': {
            templateUrl: 'views/skillsDemos.html',
            controller: 'SkillsdemoCtrl'
          }
        }
      });
  })

  //This controller enables the active nav button to be toggled based on the route. Needs a root controller since the navs are at the root level.
  .controller('RootCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.inActive = function(route) {
      return route !== $location.path();
    }
  }]);
