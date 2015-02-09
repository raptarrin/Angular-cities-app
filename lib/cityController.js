/**
 * Created by TcsWebIntern on 2/4/2015.
 */
'use strict';

cityApp.controller('cityController',
    function cityController($scope) {
        $scope.list = cityData;
    }
).controller('cityItemController',
    function cityItemController($scope, $log,$routeParams) {
        //$scope.cities = {label:"testcity", rank: "rank"}
        //$scope.cities = cityData.cities[9];
        //console.log('cityitemcontroller loaded')
        var cityNumber  = $routeParams.rank;
        var city = {};
        for (var i=0;i<cityData.cities.length;i++) {
            if (cityData.cities[i].rank == cityNumber) {
                //$scope.cities = cityData.cities[i];
                city = cityData.cities[i];
                break;
            }
        }


        var latlng = city.latlng.split(",");
        //var mapImageUrl = "http://dev1.tomnod.com/chip_api/chip/lat/" + latlng[0] + "/lng/" + latlng[1];
        var mapImageUrl = "http://maps.googleapis.com/maps/api/streetview?size=500x500&location=" + latlng[0] + "%20" + latlng[1] + "&fov=90&heading=235&pitch=10&sensor=false&key=AIzaSyAVchIIFUOJG7kOrIdAURKeulb6zJtChm8";
        city.mapImageUrl = mapImageUrl;
        $scope.cities = city;


    }
);