angular.module('selfish')
.controller('MainController', function($scope){
    $scope.test = "PROBANDO, PROBANDO";
    $scope.pageClass = "page-home";
})
.controller('whoController', function($scope){
    $scope.pageClass = "page-who";
})
.controller('things', function($scope){
    $scope.pageClass = "page-things";
})
.controller('ideas', function($scope){
    $scope.pageClass = "page-ideas";
})