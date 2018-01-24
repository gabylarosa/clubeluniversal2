var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute','testService']);

// Configuración de las rutas
angularRoutingApp.config(['$routeProvider', function($routeProvider) {

//angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when("/", {
            controller: "allOffersController",
            templateUrl: "views/home.html"
        })
        .when("/promotions/:nomCat", {
            controller: "categoryOffersController",
            templateUrl: "views/promotions.html"
        })
        .otherwise({
            redirectTo: '/'
        });
//});
}]);