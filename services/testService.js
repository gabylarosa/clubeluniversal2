angular.module('testService', [])//Declaramos el modulo
	.factory('testRequest', function($http) { //declaramos la factory
		var path = "services/dataclub.json";
		//var path = "http://jsonplaceholder.typicode.com/";//API path
		return {
			//Login
			posts : function(){ //Retornara la lista de posts
				global = $http.get(path);
				//global = $http.get(path+'posts');
				return global;
			},
			post : function(id){ //retornara el post por el id
				global = $http.get(path+id);
				//global = $http.get(path+'posts/'+id);
				return global;	
			}	
		}
	});