module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'public/javascripts/my.js',
                dest: 'public/javascripts/my.min.js'
            }
        },
        jslint: { // configure the task
            // lint your project's server code
            server: {
                src: [ // some example files
                    'shopping-list/*.js'
                ],
                exclude: [
                    ''
                ],
                directives: { // example directives
                    node: true,
                    todo: true
                },
                options: {
                    edition: 'latest', // specify an edition of jslint or use 'dir/mycustom-jslint.js' for own path
                    errorsOnly: true, // only display errors
                    failOnError: false // defaults to true
                }
            },
            // lint your project's client code
            client: {
                src: [
                    'public/javascripts/*.js'
                ],
                directives: {
                    browser: true,
                    predef: [
                        'jQuery'
                    ]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jslint');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'jslint']);

};