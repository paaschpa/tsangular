var bikes;
(function (bikes) {
    var BikeType;
    (function (BikeType) {
        BikeType[BikeType["RoadBike"] = 0] = "RoadBike";
        BikeType[BikeType["MountainBike"] = 1] = "MountainBike";
        BikeType[BikeType["DirtBike"] = 2] = "DirtBike";
    })(BikeType || (BikeType = {}));
    var BikesService = (function () {
        function BikesService() {
        }
        BikesService.prototype.getBikes = function () {
            return [{ id: 1, name: 'Test', typeName: BikeType.DirtBike, quantity: 1, rentPrice: 10 }];
        };
        return BikesService;
    })();
    bikes.BikesService = BikesService;
    var bikeapp = angular.module('bikeapp', ['ngRoute']);
    bikeapp.service('bikesService', BikesService);
    bikeapp.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                templateUrl: 'views/default.html',
                controller: 'BikesController'
            })
                .when('/bikes', {
                templateUrl: 'views/bikes.html'
            });
        }
    ]);
    bikeapp.controller('BikesController', ['$scope', 'bikesService', function ($scope, bikesService) {
            $scope.bikes = bikesService.getBikes();
        }]);
})(bikes || (bikes = {}));
//# sourceMappingURL=bikeapp.js.map