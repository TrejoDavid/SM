'use strict';

/**
 * @ngdoc overview
 * @name sanMiguelApp
 * @description
 * # sanMiguelApp
 *
 * Main module of the application.
 */
angular
  .module('sanMiguelApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })      
      .when('/board-of-directors', {
        templateUrl: 'views/board-of-directors.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/family-support', {
        templateUrl: 'views/family-support.html'
      })      
      .when('/gradsupport', {
        templateUrl: 'views/gradsupport.html'
      })      
      .when('/guiding-donor', {
        templateUrl: 'views/guiding-donor.html'
      })      
      .when('/history', {
        templateUrl: 'views/history.html'
      })      
      .when('/middle-school', {
        templateUrl: 'views/middle-school.html'
      })      
      .when('/mission-vision-philosophy', {
        templateUrl: 'views/mission-vision-philosophy.html'
      })      
      .when('/volunteer', {
        templateUrl: 'views/volunteer.html'
      })
      .otherwise({
        redirectTo: '#/'
      });
  });
