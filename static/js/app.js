'use strict';

var litApp = angular.module('litApp', [
 'ngRoute',
]);

litApp.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
             when('/', {
                 templateUrl: '/static/partials/dashboard.html',
            })
    }]);
