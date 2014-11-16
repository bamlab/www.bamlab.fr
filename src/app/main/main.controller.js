'use strict';

angular.module('homepage')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.formData = {};
    $scope.sendContactForm = function() {
      $http.post('http://bamlab.fr/contact', $scope.formData);
    };
  });
