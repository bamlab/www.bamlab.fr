'use strict';

angular.module('homepage')
  .controller('MainCtrl', function ($scope, $http, $window, $location) {
    $scope.formData = {};
    $scope.sendContactForm = function() {
      $http.post('http://bamlab.fr/contact', $scope.formData)
        .success(function(data, status, headers, config) {
            $location.search({form: 'sent'});
            $window.alert('Votre message a été bien envoyé, merci!');
            $scope.formData = {};
        });
    };
  })
;
