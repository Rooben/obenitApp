'use strict';

/**
 * @ngdoc function
 * @name rolandApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the rolandApp
 */
angular.module('mainPages.projects', [])
  .config(function($stateProvider) {
    $stateProvider
      // Projects PAGE =================================
      .state('projects', {
        url: '/projects',
        views: {
          '@': {
            templateUrl: 'mainPages/projects/projects.html',
            controller: 'ProjectsCtrl'
          },
          'siteRoot@': {
            templateUrl: 'mainPages/sideNav.html'
          }
        }
      });
  })
  .controller('ProjectsCtrl', function ($scope) {

  });
