var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: '/page/home.html'
    }).when('/about',{
        templateUrl: '/page/about.html'
    }).when('/shop',{
        templateUrl: '/page/shop.html'
    }).when('/contact',{
        templateUrl: '/page/contact.html'
    }).when('/help',{
        templateUrl: '/page/help.html'
    })
})