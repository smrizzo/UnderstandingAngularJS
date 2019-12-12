var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    
    console.log($resource);
    
});

var things = [1, '2', 3, {firstname: "hello"}, function() { alert("Hello")}];
console.log(things[4]());