module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            development: {
                options: {
                    preserveComments: false,
                    mangle: false,
                    compress: {
                        drop_console: false
                    }
                },
                files: {
                    './js/main.all.min.js': [
                        "js/jquery.js",
                        "js/bootstrap.js",
						"lib/slick/slick.js",
                        "js/frontend.js"
                    ]
                }
            }
        },
        // running `grunt less` will compile once
        less: {
            development: {
                options: {
                    paths: ["./css"],
                    compress: true
                },
                files: {
                    "./css/main.all.min.css": [
                        "./css/bootstrap.css",
						"./lib/slick/slick.css",
                        "./css/less/frontend.less"
                    ],
                    "./css/ie.min.css": [
                        "./css/less/ie.less"
                    ]
                }
            }
        },
        // running `grunt watch` will watch for changes
        watch: {
            scripts: {
                files: [
                    './js/*.js'
                ],
                tasks: ['uglify']
            },
            css: {
                files: [
                    './css/less/*.less'
                ],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'uglify',
        'less'
    ]);
};
