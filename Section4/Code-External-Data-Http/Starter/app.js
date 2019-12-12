var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http.get('/api')
        .success(function(result){
        $scope.rules = result;
    })
    .error(function(data, status){
        console.log(status);
    })
    
    $scope.newRule = '';
    
    $scope.createRule = function() {
        
        $http.post('/api', {newRule: $scope.newRule})
        .success(function(result){
            console.log("Successfully added rule");
            $scope.rules = result;
            $scope.newRule = '';
        })
        .error(function(data, status) {
            console.error(status);
            console.log(data);
        })
    }

}]);