'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    uglify: {
      options: {
        mangle: true,
        compress: true,
        report: "min",
        sourceMap: false,
        preserveComments: false,
        banner: "/*! <%= pkg.name %>.js - v<%= pkg.version %>" + "\n<%= pkg.description %> */\n",
        footer: "",
      },
      minify: {
        files: {
          "datetimef-min.js": "datetimef.js"
        }
      }
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-uglify");
  
  grunt.registerTask("default", ["uglify"]);
}