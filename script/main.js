requirejs.config({
	//默认情况下模块所在目录为js/lib
	baseUrl: '/',
	//当模块id前缀为app时，他便由js/app加载模块文件
	//这里设置的路径是相对与baseUrl的，不要包含.js
	paths: {
		angular:'bower_components/angular/angular',
		angularRoute:"bower_components/angular-route/angular-route.min",

		// base
		app:'./script/app',
		route:'./script/route',

		// controller
		testCtrl:'./controller/testCtrl',

		// directive
		test:'./directive/script/test',

		// service
		testService:'./service/testService',

		// end tail
		"jquery":"bower_components/jquery/dist/jquery.min"
	},
  　　	//加载顺序规则
	shim:{
		angularRoute:["angular"]
	}
});
// 开始逻辑. 加载依赖模块
requirejs(['app','route','jquery'],function(app,route,$){
	route.init();
	window.onload = function(){
	};
	$(function(){
		angular.bootstrap(document.body,[app.name]);
		console.log(123);
	})
});
