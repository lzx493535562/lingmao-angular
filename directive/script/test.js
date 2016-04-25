define(['app','testService'],function(app){
	app.directive('test',['testService',function(testService){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/test.html',
			link:function(scope,elements,attrs){
				scope.name = 'dino';
				scope.serviceInfo = testService.get();
			}
		};
	}]);
});