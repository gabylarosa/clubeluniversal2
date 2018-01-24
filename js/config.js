// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
       $routeProvider
    	when("/", {
	        controller: "testController",
	        templateUrl: "views/home.html"
	    })
	    .otherwise({
			redirectTo: '/'
		});
});console.log("paso1");
/*
angularRoutingApp.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});

angularRoutingApp.controller('aboutController', function($scope) {
    $scope.message = 'Esta es la página "Acerca de"';
});

angularRoutingApp.controller('contactController', function($scope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});
*/




/*angular.module('myApp').config(function($routeProvider) {

    $routeProvider
    	when("/", {
	        controller: "testController",
	        templateUrl: "views/home.html"
	    })
	    .otherwise({
			redirectTo: '/'
		});
       
});
*/

/*

var configAgenda = function($routeProvider){
 
    $routeProvider
	    .when("/home", {
	        controller: "testController",
	        templateUrl: "views/home.html"
	    })
	    .otherwise({
			redirectTo: '/home'
		});
 
}


//creamos el modulo y le aplicamos la configuración
angular.module("myApp", ["ngRoute"]).config(configAgenda);*/
