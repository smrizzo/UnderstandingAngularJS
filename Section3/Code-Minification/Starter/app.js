var myApp = angular.module('myApp', []);


myApp.controller('mainController', ['$scope', '$log', '$timeout', function($scope, $log, $timeout) {
    $scope.name = "Jasper James Rizzo"
    $log.info($scope);
    $timeout(function() {
        $scope.name = "I am your father Jasper!";
    }, 3000);
}]);


myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
        
    $log.info($scope)
    $scope.name = "Amber Rizzo";
    
}]);