app.controller('educacao', function($scope, $http) {                        
    $scope.api = 'pais'
    $scope.items = []
    $scope.getItem = () => {                
        if($scope.api){            
            $http({
                method: 'GET',
                url: 'https://api.tjulioh.dev/'+$scope.api+'/',
                headers: {'authorization':'Basic YWRtaW46ZEdwMWJHbHZhQzFoWkcxcGJn'}
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
