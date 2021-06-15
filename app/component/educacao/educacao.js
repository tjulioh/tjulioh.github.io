app.controller('educacao', function($scope, $http) {

    $scope.items = []
  
    $http({
       method: 'GET',
       url: 'http://127.0.0.1:8080/api/pais/',
       headers: {'authorization':'Basic YWRtaW46YWRtaW4'}
    })
      .then(function successCallback(response) {
          alert("Succesfully connected to the API");
          $scope.items = data;
      }, function errorCallback(response) {
          alert("Error connecting to API");
      }); 
  
  });