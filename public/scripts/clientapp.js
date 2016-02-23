var myApp = angular.module("myApp", []);

//injecting dependencies into our controller
myApp.controller('customerController'), ['#scope', '$http', function($scope, $http) {

}];

$scope.customers = function(num) {
    $http({
        method: 'GET',
        url: '/getCustomers',
    }).then(function(response){
        var data = response.data;
        console.log(data);
    });
}