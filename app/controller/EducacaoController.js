app.controller('EducacaoController', function($scope, $http, $document) {
    $scope.autorizacao = ""
    $scope.endereco = 'pais'
    $scope.resultado = []
    $scope.autorizar = function(){
        $http({
            method: 'GET',
            url: 'https://api.tjulioh.dev/oauth/token?grant_type=password&username=' + $document[0].getElementById('usuario').placeholder + '&password=' + $document[0].getElementById('senha').placeholder,
            headers: {'Authorization':'Basic ' + btoa('client-id:secret-id')}
        })
            .then(
                function successCallback(resultado) {
                    console.log(resultado.data)
                    $scope.autorizacao = resultado.data['access_token'];
                },
                function errorCallback(resultado) {
                    $scope.resultado = []
                    console.log(resultado)
                }
            );
    }
    $scope.consultar = function() {
        $scope.autorizar();
        if ($scope.endereco) {
            if ($scope.autorizacao) {
                $http({
                    method: 'GET',
                    url: 'https://api.tjulioh.dev/' + $scope.endereco + '/',
                    headers: {'Authorization': 'Basic ' + $scope.autorizacao}
                })
                    .then(
                        function successCallback(resultado) {
                            console.log(resultado.data)
                            $scope.resultado = resultado.data;
                        },
                        function errorCallback(resultado) {
                            $scope.resultado = []
                            console.log(resultado)
                        }
                    );
            } else {
                console.log("Sem Autorização")
            }
        } else {
            console.log("Sem Endereço")
        }
    }
    $scope.consultar();
});
