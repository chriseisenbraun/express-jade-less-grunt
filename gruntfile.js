module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      dist: {
        files: {
          'public/stylesheets/application.css': 'less/application.less'
        },
      }
    },
    watch: {
      source: {
        files: ['less/**/*.less', 'views/**/*.jade'],
        tasks: ['less'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', 'watch');
  grunt.loadNpmTasks('grunt-dss');
};
