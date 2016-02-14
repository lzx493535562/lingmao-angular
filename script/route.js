'use strict';

define(["angularRoute",
	"app"
	],
	function(__angularRoute,app){
		var initRoute = function(){		
			app.config(["$routeProvider",function($routeProvider){
				console.log("init route...");
				$routeProvider
					.when("/",{
						templateUrl:"view/index.html",
						controller:"lmIndexCtrl"
					})
					.when("/jobpost",{
						templateUrl:"view/jobpost.html",
						controller:"lmJobpostCtrl"
					})
					.when("/historypost",{
						templateUrl:"view/historypost.html",
						controller:"lmhistorypostCtrl"
					})
					.when("/waitmanager",{
						templateUrl:"view/waitmanager.html",
						controller:"lmWaitmanagerCtrl"
					})
					.when("/interviewmanager",{
						templateUrl:"view/interviewmanager.html",
						controller:"lmInterviewmanagerCtrl"
					})
					.when("/myku",{
						templateUrl:"view/myku.html",
						controller:"lmMykuCtrl"
					})
					.when("/shareku",{
						templateUrl:"view/shareku.html",
						controller:"lmSharekuCtrl"
					})
					.when("/trash",{
						templateUrl:"view/trash.html",
						controller:"lmTrashCtrl"
					})
					.when("/bind",{
						templateUrl:"view/bind.html",
						controller:"lmBindCtrl"
					})

					.when("/firstpage",{
						templateUrl:"view/firstpage.html",
						controller:"lmFirstpageCtrl"
					})
					.when("/secondpage",{
						templateUrl:"view/secondpage.html",
						controller:"lmSecondpageCtrl"
					})
					.when("/thirdpage",{
						templateUrl:"view/thirdpage.html",
						controller:"lmThirdpageCtrl"
					})
					.when("/registerpage",{
						templateUrl:"view/registerpage.html",
						controller:"lmRegisterpageCtrl"
					})
					.when("/loginpage",{
						templateUrl:"view/loginpage.html",
						controller:"lmLoginpageCtrl"
					})
					.otherwise({
						redirectTo:"/"
					})
					;
				console.log("init route complete");
			}]);
		};
		return {init:initRoute};
	}
);
