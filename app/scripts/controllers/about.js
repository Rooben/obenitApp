'use strict';

/**
 * @ngdoc function
 * @name rolandApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rolandApp
 */
angular.module('rolandApp')
  .controller('AboutCtrl', function ($scope, carouselData) {
      for(var i=0; i<carouselData.details.length; i++){ //carouselData is a factory service. See below
        $scope.qualities = carouselData.details[0];
      }
  })

  .factory('carouselData', function(){
    return{
      titles: ['Professional', 'Work Related', 'Managerial',  'Extracurricular', 'Team Spirit', 'Composure'],
      baseImages: ['images/prof.png', 'images/customers.png', 'images/management.jpg', 'images/extracuricular.jpg', 'images/team.jpg', 'images/pressure.jpg'],
      details: [
         [
          'I am a Web Developer by profession.',
          'I have General computer programming skills.',
          'Designer Skills (Adobe CS5 Master Suit).',
          'I have \'Think-out-of-the-box\' (Creative) skills.'
        ],
        [
          'A Stake holder\'s success is my success as well.',
          'Customer satisfaction = business success.',
          ' I don\'t only respect date lines, I also develop assuring strategies towards that.'
        ],
        [
          'I can be a good manager, because I know what can be a limiting factor to corporate success.',
          'I do my work according to specific priorities.',
          'I have a Masters Degree in Management.',
          'I have a registered Corporation.'
        ],
        [
          'I have fun repairing household things.',
          'I like involvement in community development.',
          'I like to watch and play Soccer.',
          'I like Music, movies and traveling.',
          'I love and admire Nature.'
        ],
        [
          'I have an excellent team spirit.',
          'I listen to other colleagues\' opinions.',
          'What works well for a team, works well for the Company.',
          'I help bring my colleagues up to standard.'
        ],
        [
          'I stay on track in stressful times.',
          'I Respect Company objectives at all times.',
          'I Put on a smile even under pressure.',
          'I strive to be at work in time and not just on time.'
        ]
      ]
    };
  })



  .directive('carouselAbout', function(carouselData, myGsapFromTo){
    return{
      restrict: 'EA',
      scope:{
        qualities: '=carouselAbout'
      },
      replace: true,
      templateUrl: 'views/aboutCarousel.html',
      link: function(scope, elm){
        var count = 0;
        scope.count = 0;
        scope.persImagesSource = carouselData.baseImages[0];
        scope.titleNumber = 0;
        //scope.persImagesSource = carouselData.baseImages[count];
        scope.showQualities = function(num){
          //Since the above function is called from the view, we pass in a positive num to increment counter by 1, or negative number to decrement by 1
          if(num > 0){
            count++;
          }else{
            count--;
          }
          //make carousel to re-cycle when index number ends
          if(count > carouselData.details.length-1){
            count=0;
          }
          else if(count < 0){
            count = carouselData.details.length-1;
          }

          //loop through the factory service data and make them available to the view through the scope.
          for(var i= 0, len=carouselData.details.length; i<len; i+=1){
            scope.qualities = carouselData.details[count];
            scope.count = count;
            slideTextBoxIn(num);
            scope.titleNumber = count;
            animatePersonalityImages(count);
          }
        };

        scope.qualityCategories = carouselData.titles; //provides the titles

        // The following function is required by direct click on the carousel disks in order to navigate the slides.
         scope.loadText = function(val){  //val is the index number passed from the directive scope, and plays same role as count.
           count = val;
           scope.qualities = carouselData.details[val];
           scope.count = val;
           scope.titleNumber = val;
           slideTextBoxIn();
           animatePersonalityImages(val);
         };

        //This function doesn't only change the images(src), but also animates the opacity of the image element
        function animatePersonalityImages(index){
          myGsapFromTo.runAnimation('#persImages', 1, {opacity: 0}, {opacity: 1});
          scope.persImagesSource = carouselData.baseImages[index];
        }

        //package together the series of animations to be run in one function
        function slideTextBoxIn(direction){
          direction = direction || null;
          if(direction === 1){
            myGsapFromTo.runAnimation('.aboutMeText',0.5, {left: '-500px'}, {left: '10%', ease:Sine.easeOut});
          }
          else{
            myGsapFromTo.runAnimation('.aboutMeText', 0.5, {left: '100%'}, {left: '10%', ease:Sine.easeOut});
          }
          myGsapFromTo.runAnimation('.aboutMeText', 0.5, {color: '#a5a5a5'}, {delay:0.3, color: '#ffffff'});
        }
      }
    };
  })
  .factory('myGsapFromTo', function(){
    return{
      runAnimation: function(animationTarget, duration, properties_from, properties_to){
        TweenLite.fromTo(animationTarget, duration, properties_from, properties_to);
      }
    };
  });
