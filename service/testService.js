define(['app'],function(app){
	app.service('testService',[function(){
		this.get = function(){
			return 'lingmall scaffolding version 0.1.0';
		};
	}]);
});