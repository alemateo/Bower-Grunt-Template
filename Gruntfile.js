module.exports = function(grunt) {

  grunt.initConfig({

      //minificas y concatena los .js especificados en (src) y los ubica en la ruta asignada (dest)
      uglify: {
          options: {
            mangle: true
          },
          build: {
            src: "assets/js/*.js",
            dest: "assets/js/min/script.min.js"
          }
      },

      //minifica y concatena los .css especificados en (cwd)(src) y los ubica en la ruta asignada (dest)
      cssmin: {
        target: {
          files: {
            'assets/css/min/style.min.css': ['assets/css/*.css']
          }
        }
      },

      //genera tags <script> y <link> en el HTML para incluir las dependencias con archivos .js y .css minificados
      tags: {
          buildScripts: {
              options: {
                  scriptTemplate: '<script type="text/javascript" src="./{{ path }}"></script>',
                  openTag: '<!-- start script template tags -->',
                  closeTag: '<!-- end script template tags -->'
              },
              src: [
                'bower_components/*/dist/*.min.js', 'bower_components/*/dist/js/*.min.js', 'assets/js/min/*.min.js'
              ],
              dest: 'views/guide.html'
          },
          buildLinks: {
              options: {
                  linkTemplate: '<link rel="stylesheet" type="text/css" href="./{{ path }}" media="screen"/>',
                  openTag: '<!-- start css template tags -->',
                  closeTag: '<!-- end css template tags -->'
              },
              src: [
                  'bower_components/*/dist/*.min.css', 'bower_components/*/dist/css/*.min.css', 'assets/css/min/*.min.css'
              ],
              dest: 'views/guide.html'
          }
      },

      //minifica las imagenes sin afectar la calidad
      imagemin: {
          options: {
            cache: false
          },

          dist: {
            files: [{
              expand: true,
              cwd: 'assets/img', //cwd: current working directory
              src: ['**/*.{png,jpg,gif}'],
              dest: 'assets/img'
            }]
          }
      },

      //observa cambios en los archivos especificados (files) y cada vez que se son modificados se ejecutan las tareas asignadas (tasks)
      watch: {
          scripts: {
              files: ['assets/js/*.js'],
              tasks: ['uglify'],
              options: {
                livereload: true
              }
          },
          css: {
            files: ['assets/css/*.css'],
            tasks: ['cssmin'],
            options: {
              livereload: true
            }
          },
          img: {
            files: ['assets/img/*.{png,jpg,gif}'],
            tasks: ['imagemin'],
            options: {
              livereload: true
            }
          },
          html: {
            files: ['views/*.html'],
            options: {
              livereload: true
            }
          }
      }

  });

  grunt.loadNpmTasks('grunt-script-link-tags');
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //registra las tareas por defecto que se van a correr cada vez que ejecutemos el comando grunt
  grunt.registerTask('default', ['uglify', 'cssmin', 'tags', 'imagemin', 'watch']);


};
