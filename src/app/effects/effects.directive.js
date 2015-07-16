'use strict';

angular.module('oob-effects')
  .directive('oobFullHeight', ['$window', function($window) {
    return function ($scope, $element) {
      var w = angular.element($window);
      
      var getWindowDimensions = function() {
        return {
          h: w.height(),
          w: w.width()
        };
      };

      var dimensions = getWindowDimensions();
      $element.css({
        width: dimensions.w,
        height: dimensions.h
      });

      w.bind('resize', function () {
        var dimensions = getWindowDimensions();
        $element.css({
          width: dimensions.w,
          height: dimensions.h
        });
      });
    };
  }]);
