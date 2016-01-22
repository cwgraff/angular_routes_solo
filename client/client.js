/**
 * Created by cwgraff on 1/21/16.
 */

var app = angular.module('candidateApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/sanders', {
            templateUrl:'views/sanders.html',
            controller: 'RedController'
        })
        .when('/trump', {
            templateUrl:'views/trump.html',
            controller: 'GreenController'
        })
        .when('/camacho', {
            templateUrl:'views/camacho.html',
            controller: 'BlueController'
        });

    $locationProvider.html5Mode(true);



}]);

app.controller('SandersController', ['$scope', function($scope){

}]);

app.controller('TrumpController', ['$scope', function($scope){

}]);

app.controller('CamachoController', ['$scope', function($scope){

}]);