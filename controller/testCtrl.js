define(['app','test'],function(app,test){
	app.controller('testCtrl',['$scope',function(scope){
		scope.timeStamp = +new Date;
	}]);
});