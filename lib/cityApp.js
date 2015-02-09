/**
 * Created by TcsWebIntern on 2/4/2015.
 */
'use strict';

var cityApp = angular.module('cityApp', ['ngRoute']);
    cityApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'lib/templates/cityList.html',
                controller: 'cityController'
            }).when('/cityList/:rank', {
                templateUrl:'lib/templates/cityItem.html',
                controller: 'cityItemController'
            })
            .otherwise({redirectTo: '/'});
    });