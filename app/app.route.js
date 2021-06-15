var app = angular.module('tjulioh', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '././app/component/inicio/inicio.html',
        controller: 'inicio'
    })
    .when('/educacao', {
        templateUrl: '././app/component/educacao/educacao.html'
    })
});   