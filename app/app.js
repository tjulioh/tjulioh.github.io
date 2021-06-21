var app = angular.module('tjulioh', ['ngRoute']);

app.config(function($routeProvider){    
    $routeProvider
    .when('/', {
        templateUrl: 'app/view/inicio.html',
        controller: 'InicioController'
    })
    .when('/educacao', {
        templateUrl: 'app/view/educacao.html',
        controller: 'EducacaoController'
    })
    .otherwise({redirectTo: '/'});
});   