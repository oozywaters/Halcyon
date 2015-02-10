module.exports = function(grunt) {
  'use strict';

  // Enb targets
  var fs = require('fs');
  var targetsList = [],
    htmlList = [],
    cssList = ['desktop.bundles/merged/_merged.css', 'desktop.bundles/merged/_merged.ie.css', 'desktop.bundles/merged/_merged.ie8.css', 'desktop.bundles/merged/_merged.ie9.css'],
    jsList = ['desktop.bundles/merged/_merged.js'];

  var createSymLinks = [];
  var isSym;
 
  fs.readdirSync('desktop.bundles').filter(function(child) {
    return (child.indexOf('.') !== 0);
  }).map(function (page) {
      targetsList.push('desktop.bundles/' + page + '/');
      if(page !== 'merged')
      {
        // createSymLinks.push('ln -s $(pwd)/desktop.bundles/merged/img $(pwd)/desktop.bundles/' + page + '/img');
        // htmlList.push('desktop.bundles/' + page + '/'/*+page+'.html'*/);
        htmlList.push('desktop.bundles/' + page + '/'+page+'.html');
      }
  });

  grunt.initConfig({
    enb: {
        production: {
            // функция, которая будет вызвана до enb
            beforeBuild: function () {
                console.log('beforeBuild');
            },
            // функция, которая будет вызвана после enb
            afterBuild: function () {
                console.log('afterBuild');
            },
            // переменные окружения, с которыми нужно запустить enb
            env: {
                XJST_ASYNCIFY: 1,
                YENV: 'production'
                // BROWSER: 'firefox'
            },
            // цель. Передавать обязательно
            targets: targetsList
        },
        // аргументы, которые поддерживает enb (кроме projectPath)
        options: {
            // не выводить лог enb
            noLog: false
        }
    },
    prettify: {
      options: {
        'indent': 2,
        'indent_char': ' '
      },
      html: {
        expand: true,
        cwd: 'build/',
        ext: '.html',
        src: ['*.html'],
        dest: 'build/'
      }
    },
    clean: {
      // options: {
      //   'no-write': true
      // },
      build: 
      {
        src: ["build"]
      }
    },
    shell: {
      options: {
        failOnError: false
      },
      build: {
        command: [
        'rm -rf build/',
        'mkdir -p build/css/ build/js/',
        'cp favicon.ico build/',
        'cp desktop.bundles/merged/_merged.js build/js/main.js',
        'cp -R img/ build/img/',
        // createSymLinks.join('&&'),
        ].join('&&')
      }
    },
    // csso: {
    //   compress: {
    //     options: {
    //       restructure: true,
    //       report: 'gzip'
    //       // report: 'min'
    //     },
    //     files: {
    //       'build/css/min.css': ['build/css/main.css']
    //     }
    //   },
    // },
    imagemin: {
      option: {
        optimizationLevel: 5
      },
      build: {
        files: [{
            expand: true,
            cwd: 'build/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/img/'
        }]
      }
    },
    cssrb: {
      main: {
        src: 'desktop.bundles/merged/_merged.css',
        dest: 'build/css/main.css',
        options: {
          old_base: './desktop.bundles/merged',
          new_base: './build/css/',
          patterns: {
            'fonts': '../fonts/',
            'blocks': '../img/'
          },
          copy: true
        },
      }
    },
    replace: {
      html: {
        options: {
          patterns: [
            {
              match: '/favicon.ico',
              replacement: 'favicon.ico'
            },
            {
              match: /"([\w\._-]+).css"/,
              replacement: '"css/main.css"'
            },
            {
              match: /"([\w\._-]+).js"/,
              replacement: '"js/main.js"'
            },
            {
              match: '../../img',
              replacement: 'img'
            }
          ],
          usePrefix: false
        },
        files: [{
              expand: true,
              flatten: true,
              cwd: './',
              src: htmlList,
              dest: 'build/',
              ext: '.html'
            }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-enb');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-cssrb');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('default', ['enb', 'shell', 'replace:html', 'cssrb', 'imagemin', 'prettify:html']);
};