'use strict';

/**
 * @ngdoc function
 * @name sanMiguelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sanMiguelApp
 */
angular.module('sanMiguelApp')
.controller('Events',['$scope',function($scope){
	$scope.eventname = [
		{name:'Cinco De Mayo',date:'September',image: '../../images/cinco-de-mayo.jpg',number: 'first'},
		{name:'River Fest',date:'September',image: '../../images/river-fest.jpg',number: 'second'},
		{name:'School of Rock',date:'September',image: '../../images/school-of-rock.jpg',number: 'third'},
		{name:'Golf Tournament',date:'September',image: '../../images/golf-tournament.jpg',number: 'fourth'},
		{name:'20th Anniversary',date:'September',image: '../../images/anniversary.jpg',number: 'fifth'}
	];
}])
.controller('TabController', ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);





