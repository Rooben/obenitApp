'use strict';

/**
 * @ngdoc function
 * @name rolandApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rolandApp
 */
angular.module('rolandApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  })

  .directive('activeTog', function(){
    return{
      restrict: 'A',
      link: function(scope, elm){
        elm.children('li').on('click', function(){
          elm.children('li').removeClass('active');
          $(this).addClass('active');
        });
      }
    };
  });
