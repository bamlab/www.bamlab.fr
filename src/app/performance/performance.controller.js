'use strict';

angular.module('homepage')
  .controller('PerformanceCtrl', function($scope) {
    $scope.features = [
      {
        name: 'Tinder like card swipes', 
        ios: 'Not yet',
        android: 'Not yet'
      }
    ];
  });
