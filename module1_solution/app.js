(function() {
    'use strict';

    angular.module('DietTracker', [])
        .controller('DietTrackerController', DietTrackerController);

    DietTrackerController.$inject = ['$scope'];

    function DietTrackerController($scope) {
        $scope.items = '';
        $scope.display = '';
        $scope.track = 0;

        $scope.DietTracker = function() {
            if ($scope.items.trim().length === 0) {
                $scope.void = 1;
            } else {
                $scope.track = 1;
                $scope.void = 0;
                var arrayItems = $scope.items.split(',');
                var arrayItemsfulfilled = arrayItems.filter(function(arg) {
                    return arg.trim() !== '';
                });

                if (arrayItemsfulfilled.length <= 3) {
                    $scope.display = 'Enjoy!';
                } else {
                    $scope.display = 'Too much!';
                }
            }
        };
    }
})();
