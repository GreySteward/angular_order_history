myApp.directive('customerTable',
    function(){
        return {
            restrict: 'E',
            scope:{
                info: '='
            },
            templateURL: 'views/customerTable.html',
            controller: 'customerController'
        }
    }
);