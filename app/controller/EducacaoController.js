app.controller('EducacaoController', function($scope, $http) {                        
    $scope.api = 'pais'
    $scope.items = []
    $scope.getItem = () => {                
        if($scope.api){            
            $http({
                method: 'GET',
                url: 'https://api.tjulioh.dev:8080/'+$scope.api+'/',
                headers: {'Authorization':'Basic YWRtaW46ZEdwMWJHbHZhQzFoWkcxcGJn'}
            })
            .then(
                function successCallback(resultado) {
                    console.log(resultado.data)
                    $scope.items = resultado.data;
                },
                function errorCallback(resultado) {
                    $scope.items = []
                    console.log(resultado)
                }
            );
        }
    }
    $scope.getItem();
});