angular.module('homepage')
  .directive('magellan', ['$window', function($window) {
    "use strict";

    return function ($scope, $element) {
        jQuery(document).foundation({
            offcanvas: {
                close_on_click: true,
                open_method: 'overlap_single'
            },
            topbar: {
                sticky_class: 'sticky'
            }
        });
    };
  }])
;

