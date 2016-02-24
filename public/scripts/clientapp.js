var myApp = angular.module("myApp", []);
console.log('angular working');



//injecting dependencies into our controller
myApp.controller('customerController', ['$scope', '$http', function($scope, $http) {

    //$scope.$on('$viewContentLoaded', function() {
    //    customers();
    //});

    console.log('controller firing');

    //$scope.customers = function () {
        console.log('inside function');
        $http({
            method: 'GET',
            url: '/getCustomers'
        }).then(function (response) {
            $scope.data = response.data;
            console.log(data);
        });
    //}
    }
]);