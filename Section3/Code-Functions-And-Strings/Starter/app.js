var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope, $log, $filter) {
    
    $scope.name = "Scott";
    $scope.formattedName = $filter('uppercase')($scope.name);
    $log.info($scope.name);
    $log.info($scope.formattedName);
    
});



