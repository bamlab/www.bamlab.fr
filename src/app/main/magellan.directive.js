angular.module('homepage')
  .directive('magellan', ['$window', function($window) {
    "use strict";

    return function ($scope, $element) {
        jQuery(document).foundation();
    };
  }]);
