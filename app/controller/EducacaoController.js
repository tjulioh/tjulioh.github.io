app.controller('EducacaoController', function($scope, $http, $document) {
    $scope.autorizacao = null
    $scope.endereco = 'pais'
    $scope.resultado = []
    $scope.acesso = {usuario:$document[0].getElementById('usuario').placeholder,senha:$document[0].getElementById('senha').placeholder}

    $scope.autenticar = function () {
        return $http({
            method: 'GET',
            url: 'https://api.tjulioh.dev/oauth/token?grant_type=password&username=' + $scope.acesso.usuario + '&password=' + $scope.acesso.senha,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('educacao:' + btoa('tjulioh-educacao'))
            }
        }).then(
            function successCallback(resultado) {
                console.log(resultado)
                $scope.autorizacao = resultado.data.access_token;
                return resultado.data.access_token;
            },
            function errorCallback(resultado) {
                $scope.resultado = []
                console.log(resultado)
                return null
            }
        )
    }

    $scope.consultar = function () {
        $scope.autorizacao = $scope.autenticar()
        $scope.autorizacao.then(function(resultado) {
            console.log("resultado:" + resultado)
        });
        console.log("autorizacao:" + $scope.autorizacao)
        if ($scope.endereco) {
            if ($scope.autorizacao) {
                $http({
                    method: 'GET',
                    url: 'https://api.tjulioh.dev/' + $scope.endereco + '/',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $scope.autorizacao
                    }
                }).then(
                    function successCallback(resultado) {
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

    $scope.consultar()
});
