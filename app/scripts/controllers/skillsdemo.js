'use strict';

/**
 * @ngdoc function
 * @name rolandApp.controller:skillsdemoCtrl
 * @description
 * # skillsdemoCtrl
 * Controller of the rolandApp
 */
angular.module('rolandApp')
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
  })

  .directive('linegraph', function(){
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        //item: '='
      },
      template: '<div id="lineGraphContainer" style="margin: 0 auto">not working</div>',
      link: function (scope) {
        var Polio = [1, 2, 3, 2, 3, 4];
        var Diabetes = [3, 4, 5, 6, 5, 7];
        var Measles = [5, 6, 8, 9, 7, 9];
        var Cholera = [7, 8, 9, 11, 10, 11];

        var chart = new Highcharts.Chart({
          chart: {
            renderTo: 'lineGraphContainer',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'line'
          },
          title: {
            text: 'Graph of Diseases Handled'
          },
          subtitle: {
            text: 'By Obenit App Inc.'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            percentageDecimals: 1
          },

          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
              enabled: true,
              text: '<i>Diseases out break</i>',
              style: {
                fontWeight: 'bold'
              }
            }
          },
          series: [{
              name: 'Polio',
              data: Polio
            },{
              name: 'Diabetes',
              data: Diabetes
            },{
              name: 'Measles',
              data: Measles
            },{
              name: 'Cholera',
              data: Cholera
            }
          ],
          credits: {
            enabled: false
          }

        });

        //scope.$watch("items", function (newValue) {
        //  chart.series[0].setData(newValue, true);
        //}, true);
      }
    }
  })

  .directive('pieChart', function(){
    return {
      restrict: 'EA',
      replace: true,
      scope: {},
      template: '<div id="pieChartContainer" style="margin: 0 auto">not working</div>',
      link: function () {
        var data2 = [['Shiraz', 5], ['Sauvignon', 10], ['Pinot', 20],
          ['Malbec', 5], ['Chardonnay', 28], ['Cabernet', 23], ['Merlot', 9]];

        var chart = new Highcharts.Chart({
          chart: {
            renderTo: 'pieChartContainer',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
          },
          colors: ['#65Af43', '#FFE76D', '#BB43F2','#A50f33', '#15CACA', '#612BF3', '#FF8E04'],

          title: {
            text: 'Store Wine Sales Quota (Year 2013)'
          },
          subtitle: {
            text: 'By Obenit App Inc.'
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Calories'
            }
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              size: '80%',
              cursor: 'pointer',
              showInLegend: true,
              slicedOffset: 20
            }
          },
          series: [{
            type: 'pie',
            name: 'Sales',
            data: data2,
            borderColor: '#888888',
            borderWidth: 1,
            dataLabels: {
              enabled: true,
              color: '#bbbbbb',
              connectorColor: '#bbbbbb',
              format: '{point.name}: <b>{point.y}%</div></b>'
            }
          }],
          credits: {
            enabled: false
          }

        });
      }
    }
  })

  .directive('histogram', function(){
    return {
      restrict: 'EA',
      replace: true,
      scope: {},
      template: '<div id="histogramContainer" style="margin: 0 auto">not working</div>',
      link: function () {
        var computers = [46.6, 14.8, 10, 61.6];
        var cell_phones = [26.6, 35.8, 62.6, 9.1];
        var tablets = [26.8, 49.4, 27.4, 29.3];

        var chart = new Highcharts.Chart({
          chart: {
            renderTo: 'histogramContainer',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'column'
          },
          title: {
            text: 'Product Profit Margins in our branches in Canadian Cities'
          },
          xAxis: {
            categories: ['Ottawa', 'Toronto', 'Edmonton', 'Montreal']
          },
          yAxis: {
            min: 0,
            max: 100,
            title: {
              text: 'Percentage of Profits'
            }
          },
          tooltip: {
            shared: false,
            valueSuffix: '%'
          },
          plotOptions: {
            column: {
              grouping: true,
              shadow: true
            }
          },
          series: [{
            name: 'Computers',
            data: computers,
            pointPadding: 0
          },{
            name: 'Cell phones',
            data: cell_phones,
            pointPadding: 0.1
          },{
            name: 'Tablets',
            data: tablets,
            pointPadding: 0.2
          }],
          credits: {
            enabled: false
          }

        });
      }
    }
  })

.directive('barChart', function(){
  return {
    restrict: 'EA',
    replace: true,
    scope: {},
    template: '<div id="barChartContainer" style="margin: 0 auto">not working</div>',
    link: function () {
      var computers = [46.6, 14.8, 10, 61.6];
      var cell_phones = [26.6, 35.8, 62.6, 9.1];
      var tablets = [26.8, 49.4, 27.4, 29.3];

      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'barChartContainer',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'column'
        },
        title: {
          text: 'Product Profit Margins in our branches in Canadian Cities'
        },
        xAxis: {
          categories: ['Ottawa', 'Toronto', 'Edmonton', 'Montreal']
        },
        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: 'Percentage of Profits'
          }
        },
        legend: {
          reversed: true
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [{
          name: 'Computers',
          data: computers
        },{
          name: 'Cell phones',
          data: cell_phones
        },{
          name: 'Tablets',
          data: tablets
        }],
        credits: {
          enabled: false
        }

      });
    }
  }
});


