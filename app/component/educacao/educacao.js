app.controller('educacao', function($scope, $http) {                        
    $scope.api = 'pais'
    $scope.items = []
    $scope.getItem = () => {                
        if($scope.api){            
            $http({
                method: 'GET',
                url: 'http://ec2-54-233-198-13.sa-east-1.compute.amazonaws.com:8080/api/'+$scope.api+'/',
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
