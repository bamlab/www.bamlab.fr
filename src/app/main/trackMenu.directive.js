"use strict";

angular.module('homepage')
  .directive('trackMenu', ['$parse', function($parse) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var options = $parse(attrs.gaTrackEvent);
        element.bind('click', function () {
          ga && ga('send', 'event', 'menu-item', attrs.href);
        });
      }
    };
  });
