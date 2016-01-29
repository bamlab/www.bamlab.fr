"use strict";

angular.module('homepage')
  .directive('trackMenu', [function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function () {
          ga && ga('send', 'event', 'menu-item', attrs.href);
        });
      }
    };
  }]);
