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
                //  '**' 表示包含所有的子目录
                // '*' 表示包含所有的文件
                    'main.html',
                    'seaconfig.js',
                    'view/**/*.{html,htm}', 
                    'directive/**/*.{html,htm}', 
                    'script/**/*.js', 
                    'css/bundle.css',
                    //'bower_components/font-awesome/less/font-awesome.less',
                    'service/dist/*.js',
                    'controller/dist/*.js'
                ]  
            },
            less:{
                files:[
                    'less/**/*.less',
                    'directive/less/**/*.less'
                ],
                tasks:["less"]
            },
            directive:{
                files:['directive/script/**/*.js'],
                tasks:["concat"]
            },
            service:{
                files:['service/script/**/*.js'],
                tasks:["concat"]
            },
            controller:{
                files:['controller/script/**/*.js'],
                tasks:["concat"]
            }  
        },
        less:{
            dev:{
                files:{
                    // "css/bundle.css":["less/**/*.less","directive/less/**/*.less"]
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
                    open: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/main.html',  
                }  
            }  
        },
        //合并但未压缩
        concat:{
            options: {
              separator: ';',  // 定义一个用于插入合并输出文件之间的字符
            },
            directive: {
              // src: ['directive/script/**/*.js'],
              src: '<%= watch.directive.files %>',           // 将要被合并的文件
              dest: 'directive/dist/directive-bundle.js',   // 合并后的JS文件的存放位置
            },
            service:{
              // src: ['service/script/**/*.js'],
              src: '<%= watch.service.files %>',
              dest: 'service/dist/service-bundle.js',
            },
            controller:{
              src: '<%= watch.controller.files %>',
              dest: 'controller/dist/controller-bundle.js',
            }
        }
       
    });  


    grunt.registerTask("lessChangedAlert",function(){
        console.log("compile less file ... ".green);
    });

    grunt.registerTask('compile',function(){
        grunt.task.run([
            'lessChangedAlert',
            'less',
            'concat'
        ]);
    });
  

  //加载任务并嵌套任务
    grunt.registerTask('serve', function () {  
        grunt.task.run([  
            'compile',  
            'connect:livereload',  
            'watch'
        ]);  
    });  
  

  // 默认任务
    grunt.registerTask('default', ['serve']);  
};  

