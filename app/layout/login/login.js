'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'layout/login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($scope, $location) {
  $scope.submit = function () {
    if ($scope.password === '123') {
      $location.path('main')
    } else {
      $scope.message = 'Wrong password'
    }
  };
});