var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        // template: '<h1>Page Home<h1>'
        templateUrl: '/page/home.html'
    }).when('/about',{
        // template: '<h1>Page About</h1>'
        templateUrl: '/page/about.html'
    })
})

app.controller('myCtrl',function(){

})