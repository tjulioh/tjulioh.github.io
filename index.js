var tjulioh = angular.module('tjulioh', ['ngRoute']);

tjulioh.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '././educacao/inicio.html',
        controller: 'inicio'
    })
    .when('/educacao', {
        templateUrl: '././educacao/educacao.html',
        controller: 'educacao'
    })

});

tjulioh.controller('inicio', ['$scope', function($scope){
    $scope.mensagem = 'Seja Bem Vindo!';
}]);

tjulioh.controller('educacao', ['$scope', function($scope){
    $scope.mensagem = 'Projeto Educação!';
}]);