var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


//CONFIG
weatherApp.config(function($routeProvider){
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});


weatherApp.service('cityService', function(){
    this.city = 'Santa Maria';

});


//CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$resource', 'cityService', function($scope, $resouce,  cityService){
    //We will need a function or event for when button is pressed it navigates to the forecast page with the information on that place
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
       cityService.city = $scope.city; 
    });
    
    //JSONP just says we will allow to make this call behind the scenes so that the browser is happy
    $scope.weatherAPI = 
    $resource("http://api.openweatherapp.org/data/2.5/forecast/daily/", {callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }});
    
    $scope.weatherAPI.get({ q: $scope.city, cnt: 2 });
    console.log($scope.weatheResult)
}]);