app.controller('educacao', function($scope, $http) {                        
    $scope.api = 'pais'
    $scope.items = []
    $scope.getItem = () => {                
        if($scope.api){            
            $http({
                method: 'GET',
                url: 'http://127.0.0.1:8080/api/'+$scope.api+'/',
                headers: {'authorization':'Basic YWRtaW46YWRtaW4'}
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
