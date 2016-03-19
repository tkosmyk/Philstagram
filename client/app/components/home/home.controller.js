angular.module('philstagram')

.controller('HomeCtrl',function($scope, $rootScope, $http){
    
    $scope.increment = function() {
        $scope.example++;
    }
    $scope.example=0;
    
    $rootScope.otherexample="Hey";
    
    $scope.checkPostcode = function () {
        
        console.log("Postcode Input: ", $scope.postcode)
        $http({
        method: 'GET',
        url: 'http://api.postcodes.io/postcodes/'+$scope.postcode
    }).then(function success(response){
        console.log(response.data);
        
        

    }, function error(response){
        console.log(response);
    });
    }
    
    
})