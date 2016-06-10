module bikes {
    enum BikeType {
        RoadBike,
        MountainBike,
        DirtBike
    }
    interface IBike {
        id: number,
        name: string,
        typeName: BikeType,
        quantity: number,
        rentPrice: number
    }

    export interface IBikesService {
        getBikes(): Array<IBike>;
    }

    export class BikesService implements IBikesService
    {
        getBikes(): Array<IBike> {
            return [<IBike>{ id: 1, name: 'Test', typeName: BikeType.DirtBike, quantity: 1, rentPrice: 10 }];
        }
    }

    var bikeapp = angular.module('bikeapp', ['ngRoute']);
    bikeapp.service('bikesService', BikesService);

    bikeapp.config([
        '$routeProvider', function ($routeProvider: ng.route.IRouteProvider): void {
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

}