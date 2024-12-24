angular.module('selfish', ['ngRoute', 'ngAnimate'])
.config(function($locationProvider, $routeProvider){

    $locationProvider.html5Mode(true); // pretty old stuff

    $routeProvider
        .when('/', {
            controller: "MainController",
            templateUrl: "templates/home.html"
        })
        .when('/who', {
            controller: "whoController",
            templateUrl: "templates/who.html"
        })
        .when('/things-done', {
            controller: "things",
            templateUrl: "templates/things.html"
        })
        .when('/ideas', {
            controller: "ideas",
            templateUrl: "templates/ideas.html"
        })

})