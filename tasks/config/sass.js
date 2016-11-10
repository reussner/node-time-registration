module.exports = function(grunt) {

    grunt.config.set('sass', {
        dev: {
          options: {
            loadPath: [
              'node_modules/foundation-sites/scss',
              'node_modules/motion-ui'
          ],
            style: 'nested'
          },
            files: [{
                expand: true,
                cwd: 'assets/styles/',
                src: ['importer.scss'],
                dest: '.tmp/public/styles/',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};
