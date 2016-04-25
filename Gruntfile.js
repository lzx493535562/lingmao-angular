module.exports = function (grunt) {  
	require("colors");
	// show elapsed time at the end  
	require('time-grunt')(grunt);  
	// load all grunt tasks  
	require('load-grunt-tasks')(grunt);  
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({ 
		watch: {  
			livereload: {  
				options: {  
					livereload: '<%= connect.options.livereload %>'    
				},  
				files: [
					'main.html',
					'view/**/*.{html,htm}', 
					'directive/**/*.{html,htm}', 
					'css/bundle.css',
					'directive/**/*.js',
					'script/**/*.js', 
					'service/**/*.js',
					'controller/**/*.js'
				]  
			},
			less:{
				files:[
					'less/**/*.less',
					'directive/less/**/*.less'
				],
				tasks:["less"]
			}
		},
		less:{
			dev:{
				files:{
					"css/bundle.css":'<%= watch.less.files %>'
				}
			}
		} ,

		connect: {  
			options: {  
				port: 9001,  
				livereload: 35731,  
				// change this to '0.0.0.0' to access the server from outside  
				hostname: 'localhost'  
			},  
			livereload: {  
				options: {  
					open: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/main-dev.html',  
				}  
			},
			genDoc:{
				options:{
					open:'http://<%= connect.options.hostname %>:<%= connect.options.port %>/<%= jsdoc.dist.options.destination%>/index.html'
				}
			},
			produce:{
				options:{
					open:'http://<%= connect.options.hostname %>:<%= connect.options.port %>/main.html'
				}
			}
		},
		requirejs: {
			compile: {
				options: {
				baseUrl: "./",
				mainConfigFile: "script/main.js",
				// name: "path/to/almond",
				/* 
				assumes a production build using almond, if you don't use almond, you
				need to set the "includes" or "modules" option instead of name 
				*/
				// optimize: "none",
				include: [ "script/main.js" ],
				out: "minSrc/min.js"
				}
			}
		},
		jsdoc: {
			dist: {
				src: ['service/script/*.js','script/*.js'],
				options: {
					destination: 'doc',
					   template : "node_modules/ink-docstrap/template",
					  configure : "node_modules/ink-docstrap/template/jsdoc.conf.json"
				}
			}
		},
		
	   
	});  

	grunt.registerTask('serve', function () {  
		grunt.task.run([  
			'less',  
			'connect:livereload',  
			'watch'
		]);  
	});

	grunt.registerTask('genDoc',function(){
		grunt.task.run([
			'jsdoc',
			'connect:genDoc',
			'watch'
		]);
	});

	grunt.registerTask('produce',function(){
		grunt.task.run([
			'compile',
			'requirejs',
			'connect:produce'
		]);
	});

	grunt.registerTask('viewProduce',function(){
		grunt.task.run([
			'connect:produce',
			'watch'
		]);
	})
  

	grunt.registerTask('default', ['serve']);  
};  

