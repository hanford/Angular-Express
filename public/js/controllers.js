'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {
    console.log('loaded')

  }).
  controller('MyCtrl1', function ($scope, $http) {
    // write Ctrl here
    $http({
      method: 'GET',
      url: '/api/tweets'
    }).
    success(function (data, status, headers, config) {
      $scope.tweets = data.tweets;
    }).
    error(function (data, status, headers, config) {
      $scope.tweets = [];
    });
  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
