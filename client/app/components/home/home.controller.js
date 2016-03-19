angular.module('philstagram')

.controller('HomeCtrl',function($scope, $rootScope, $http){
    
    $scope.increment = function() {
        $scope.example++;
    }
    $scope.example=0;
    
    $rootScope.otherexample="Hey";
    
    $scope.checkPostcode = function () {
        
        console.log("Postcode Input: ", $scope.postcode);
        $http({
            method: 'GET',
            url: 'http://api.postcodes.io/postcodes/'+$scope.postcode
        }).then(function success(response){
            console.log(response.data);
            $scope.parliamentary_constituency = response.data.result.parliamentary_constituency;
        },
                function error(response){
        console.log(response);
        });
    }
    //Functio checkPostcode checks postcode and assigns the correct value to variable scope.parliamentary_consituency. The value of this variable is then shown by writing {{parliamentery_consiuency}} in postcode.view.html
    
    
})