app.controller('educacao', function($scope, $http) {
    $scope.getItems = () => {
        $scope.items = []
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/api/pais/',
            headers: {'authorization':'Basic YWRtaW46YWRtaW4'}
        })
        .then(
            function successCallback(resultado) {
                $scope.items = resultado.data;
            },
            function errorCallback(resultado) {
                console.log(resultado)
                alert("Houve um problema de conexão!");
            }
        );
    }
    console.log('CHAMA');
    $scope.getItems();
});
