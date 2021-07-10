app.controller('InicioController', function($scope, $document) {
    $scope.mensagem = 'Seja bem vindo, pegue um café e leia com calma alguns projetos legais!';
    if ($document[0].getElementById('dica')) {
        if(!bootstrap.Tooltip.getInstance($document[0].getElementById('dica'))){
            new bootstrap.Tooltip($document[0].getElementById('dica'))
        }else{
            bootstrap.Tooltip.getInstance($document[0].getElementById('dica')).update()
        }
    }
});