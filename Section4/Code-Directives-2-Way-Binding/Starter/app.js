var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    $scope.lowercaseHandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    //When this handle value changes it will execute this function
    $scope.$watch('handle', function(newValue, oldValue) {
        console.info("changed!");
        console.log("Old:" + oldValue);
        console.log("New:" + newValue);
    });
    
    
    setTimeout(function() {
        //This code says apply whatever is in the body of the function to the AngularJS Context
        $scope.$apply(function(){
            $scope.handle = "newtwitterhandle";
            console.log("Scope changed!"); 
        })
    }, 3000);
        
}]);
