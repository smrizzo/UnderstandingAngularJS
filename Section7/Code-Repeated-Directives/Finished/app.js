var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.people = [
        {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
        },
        {
        name: 'Jane Doe',
        address: '333 Second St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '22222'
        },
        {
        name: 'George Doe',
        address: '111 Third St.',
        city: 'Miami',
        state: 'FL',
        zip: '33333'
        }
    ]
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       },
       link: function(scope, element, attrs) {
                   console.log("Post-linking with shorthand since almost never use compile and shouldn't use pre-link..");
                   console.log(scope);
                   if (scope.personObject.name == 'Jane Doe') {
                       element.removeAttr('class');
                   }
//                   elements.removeAttr('class');
                   console.log(element);
               }
//       compile: function(elem, attr) {
//           console.log("compiling..");
////           elem.removeAttr('class');//Vanilla javascript manipulating the html
//           console.log(elem);
//           
//           return {
////               pre: function(scope, element, attrs) {
////                 console.log("Pre-Linking..")  
////                 console.log(element);
////               },
//               post: function(scope, element, attrs) {
//                   console.log("Post-linking..");
//                   console.log(scope);
//                   if (scope.personObject.name == 'Jane Doe') {
//                       element.removeAttr('class');
//                   }
////                   elements.removeAttr('class');
//                   console.log(element);
//               }
//           }
//       }
   }
});
