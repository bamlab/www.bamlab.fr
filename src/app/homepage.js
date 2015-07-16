'use strict';
angular.module('homepage', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'oob-effects'])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
    });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
})

.run(function($window) {
    // add easter eggs
    var launched = false;
    $window.addEventListener('devtoolschange', function (e) {
        if (e.detail.open && !launched) {
            console.log('%c' + '      Et BAM ! Tu as trouvé !', 'background-image: url(\'http://bamlab.fr/images/logo.png\'); background-repeat: no-repeat; background-size: 80px 33px; font-size: 30px; font-weight: bold;');
            console.log('%c' + 'On recrute. Pour postuler - envoie nous un mail à joinus@bamlab.fr.', 'font-size: 20px');

            launched = true;
        }
    });

    new Konami('/images/konami.png');
})
;
