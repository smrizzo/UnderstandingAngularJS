var myApp = angular.module('myApp', ['ngRoute']);

//inject routeProvider because included ngRoute
//routeProvider helps us specify routes
myApp.config(function($routeProvider){
    
    $routeProvider
       .when('/',{
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
       .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
       });
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Cal Poly';
    $log.main = 'propery from main';
    $log.log($log);
}]);


myApp.controller('secondController', ['$scope', '$routeParams', '$log', function($scope, $routeParams, $log) {
    
    $scope.num = $routeParams.num;
    $log.log($log);

}]);