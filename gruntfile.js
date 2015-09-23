module.exports = function(grunt) {
	// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      build: {
        cwd: 'src',
        src: [ '**' ],
        dest: 'build',
        expand: true
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
	      files: [{
	          expand: true,
	          cwd: 'src/js',
	          src: '**/*.js',
	          dest: 'build/js'
	      }]
	    }
    },
    less: {
	  development: {
	    options: {
	      paths: ["src/css"]
	    },
	    files: {
	      "build/css/result.css": "src/css/main.less"
	    }
	  }
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  

  // Default task(s).
  grunt.registerTask('default', ['copy']);
  grunt.registerTask('default', ['less']);
  grunt.registerTask('default', ['uglify']);
  
}