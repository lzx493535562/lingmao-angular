'use strict';

define(["angularRoute",
	"app",
	'testCtrl'
	],
	function(__angularRoute,app){
		var initRoute = function(){		
			app.config(["$routeProvider",function($routeProvider){
				console.log("init route...");
				$routeProvider
					.when("/",{
						templateUrl:"view/test.html",
						controller:"testCtrl"
					})
					.otherwise('/'); 
				console.log("init route complete");
			}]);
		};
		return {init:initRoute};
	}
);
