"use strict";

angular.module('homepage')
  .directive('trackEvent', [function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function () {
          var eventName = attrs.eventName;
          var eventValue = attrs.eventValue;

          ga && ga('send', 'event', eventName, eventValue);
        });
      }
    };
  }]);
