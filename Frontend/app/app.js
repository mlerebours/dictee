(function(){

    'use strict';

// Declare app level module which depends on views, and components
    var app = angular.module('myApp', [
        'ngRoute',
        'myApp.dictee',
        'myApp.dictee2',
        'myApp.view1',
        'myApp.view2',
        'myApp.version'
    ]);

    app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/dictee'});
    }]);

})();