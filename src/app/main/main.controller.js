'use strict';

angular.module('homepage')
  .controller('MainCtrl', function ($scope, $http, $window) {
    $scope.formData = {};
    $scope.sendContactForm = function() {
      $http.post('http://bamlab.fr/contact', $scope.formData);

      $window.alert('Votre message a été bien envoyé, merci!');
      $scope.formData = {};
    };
  })
;
