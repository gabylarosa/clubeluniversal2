//Controller para traer todas las ofertas
angularRoutingApp.controller('allOffersController', ['$scope','testRequest',allOffersController]);
function allOffersController($scope, testRequest, $routeParams) {    
    //inicializando variables
	$scope.items2 = [];//array para guardar moreData
    longitud = 0;//longitud del json
    j = 14;
    $scope.limit=0;
    $scope.migaja = "Home";
    $scope.index = 0;
    

    //lee el json y muestra la data por partes
    testRequest.posts().success(function (data){
		//$scope.posts=data; // Asignaremos los datos de todos los posts
		longitud=data.length;
        $scope.moreData = function() 
        {  
        /*if (longitud){
            if (j<longitud){
                //for (var i = 0; i < 16; i++) 
                //{
                    if (j<longitud){*/
                        //$scope.items2.push(data[j]);
                        $scope.items2=data;
                        //j++;
                    //}
                //}
            //}
          //}  
        }
        
        $scope.moreData();
	})
    $scope.increaseLimit = function () {
      if ($scope.limit < $scope.items2.length) {
        $scope.limit += 16;
        j+=$scope.limit;
      }
    };

}

//Controller para filtrar por categoria
angularRoutingApp.controller('categoryOffersController', ['$scope','testRequest', '$routeParams',categoryOffersController]);

function categoryOffersController($scope, testRequest, $routeParams) {    
    //inicializando variables
    $scope.items = [];//array para guardar moreDataCategory
    longitud = 0;//longitud del json
    j = 0;
    $scope.migaja = "Home";
    $scope.index = 0;$scope.limit=0;
    
    $scope.isActive1 = true;
    $scope.isActive2 = false;$scope.isActive3 = false;$scope.isActive4 = false;$scope.isActive5 = false;
    $scope.isActive6 = false;$scope.isActive7 = false;$scope.isActive8 = false;
    
    //Funcion para saber que item del menu se le hizo click
    $scope.select= function(item) {
            
            $scope.isActive1 = false;$scope.isActive2 = false;$scope.isActive3 = false;$scope.isActive4 = false;
            $scope.isActive5 = false;$scope.isActive6 = false;$scope.isActive7 = false;$scope.isActive8 = false;
            
            if ( item == "1"){$scope.isActive1 = true;$scope.migaja = "Home";}
            else  if ( item == "2"){$scope.isActive2 = true;$scope.migaja = "Gastronomía";}
            else  if (item == "3"){$scope.isActive3 = true;$scope.migaja = "Turismo";}
            else  if (item == "4"){$scope.isActive4 = true;$scope.migaja = "Moda";}
            else  if (item == "5"){$scope.isActive5 = true;$scope.migaja = "Bienestar";}
            else  if (item == "6"){$scope.isActive6 = true;$scope.migaja = "Entretenimiento";}
            else  if (item == "7"){$scope.isActive7 = true;$scope.migaja = "Hogar";}
            else  if (item == "8"){$scope.isActive8 = true;$scope.migaja = "Otros";}
    }



    //lee el json y muestra la data por partes
    testRequest.posts().success(function (data){
        //$scope.posts=data; // Asignaremos los datos de todos los posts
        longitud=data.length;
        $scope.moreDataCategory = function() 
        {  
            $scope.nombreCat = $routeParams.nomCat;
            
        /*if (longitud){
            if (j<longitud){
                for (var i = 0; i < 16; i++) 
                {   
                    if (j<longitud){
                        */
                        //alert(i+"-"+longitud);
                        for (var i = 0; (i<longitud); i++) 
                        { 
                            if (data[i].nomcategoria == $routeParams.nomCat){
                                $scope.items.push(data[i]);
                            }
                            i++;
                        }
                   /* }
                }
               // if(j<16 && j<longitud){$scope.moreDataCategory();}
            }
          }  */
        }
        
        $scope.moreDataCategory();
        //console.log("j: "+j+"-"+$scope.items.length);
    })

     
}

//scroll infinito
    angular.module('angularRoutingApp').directive("onScroll", function ($window) {
        return function(scope, element, attrs) {
            var $this = angular.element($window);
            angular.element($window).bind("scroll", function() {
                var scrollTop = $this.scrollTop();
                scope.iniScroll = ((scope.limit/4).toFixed())*330;
                if ($(document).scrollTop() >= scope.iniScroll) {
                    //console.log("-"+$(document).scrollTop()+"-"+scope.iniScroll);
                    scope.$apply(attrs.onScroll);
                    
                    
                }
            })
        }
 });

//filtro para controlar la cantidad de caracteres y poner puntos suspensivos

/*angular.module('myApp').filter("maxLength", function(){
    var max=;
    return function(text,max){
        if(text != null){
            if(text.length > max){
                return text.substring(0,max) + "...";
            }
        }
    }
})*/
//LLAMADO EN HTML <p>Nombre: {{ user.nombre | maxLength }}</p>



/*
//filtro en un controller (para cambiar el valor de las categorias con el nombre de las imagenes circulos en blanco que es fijo)
function myCtrl($scope, $filter)
{
    $filter('filtername')(arg1,arg2);
}
*/


 
/*function testController($scope, testRequest) {
	$scope.posts={};
	$scope.getAllPosts = function(){
		testRequest.posts().success(function (data){
			$scope.posts=data; // Asignaremos los datos de todos los posts
			$scope.posts.exist=1;
		});
	}
	$scope.getPost = function(){
		$scope.unPost={};
		testRequest.post($scope.post_id).success(function (data){
			$scope.unPost=data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}
}*/