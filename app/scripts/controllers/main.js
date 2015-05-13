'use strict';

/**
 * @ngdoc function
 * @name rolandApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rolandApp
 */
angular.module('rolandApp')
  .controller('MainCtrl', function ($scope, $interval) {
    var count = 0;
    var webTextArray = ['sites', 'applications', 'browsers', 'development', 'designs', 'servers', 'solutions', 'technologies', 'clients', 'DEVELOPER' ];



    function runAnimation(animationTarget, duration, properties){
      TweenLite.to(animationTarget, duration, properties);
    }

    function slideWebTextDown(){
      resetAnimationPos();
      $scope.animationText = webTextArray[count];
      count++;
      runAnimation('.webtext', 0.5, {top: '197px'});
      runAnimation('.webtext li', 0.5, {fontSize: '2.8em'});
      if(count === webTextArray.length){
        $scope.introText = 'I am a :';
      }else{
        $scope.introText = 'I work on :';
      }
    }

    function runTask(){
      $interval(slideWebTextDown, 3000, webTextArray.length);
    }

    function resetAnimationPos(){
      $('.webtext').css('top', '110px');
      $('.webtext').children('li').css('fontSize', '0.2em');
    }
    runTask();
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
