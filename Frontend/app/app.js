(function(){

    'use strict';

// Declare app level module which depends on views, and components
    var app = angular.module('myApp', [
        'ngRoute',
        'myApp.dictee',
        'myApp.home',
        'myApp.view1',
        'myApp.view2',
        'myApp.version'
    ]);


    app.controller('activeMenuController', function($scope) {
        $scope.getClass = function (path) {
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
        };
    });

    app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/home'});
    }]);

})();