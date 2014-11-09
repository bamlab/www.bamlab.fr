'use strict';

angular.module('homepage')
  .controller('PerformanceCtrl', function($scope) {
    $scope.features = [
      {
        name: 'Instant tap',
        description: 'By default mobile browsers have ~300 ms delay with tap events handling. This has been resolved ',
        hint: 'Use a mobile JS framework like fastclick or Ionic to make sure the events are handled correctly',
        ios: 'OK',
        android: 'OK'
      }, {
        name: 'Infinite scroll',
        description: 'Infinite scroll (loading new articles while scrolling) is one of the most important features in any wall-centered application. It may use a lot of memory if not handled correctly, so it should be handled correctly.',
        hint: 'Ionic has a nice infinite scroll implementation, so does KendoUI.',
        ios: 'OK',
        android: 'OK'
      }, {
        name: 'Tinder like card swipes', 
        description: 'Tinder like cards use a lot of animations. These can be hard to handle in a mobile navigator.',
        hint: 'Ionic Tinder for X looks promising, but is an early POC at the moment.',
        ios: 'Not yet',
        android: 'Not yet'
      }
    ];
  });
