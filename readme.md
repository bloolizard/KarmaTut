## Karma Tutorial for Go Live Labs

This is a tutorial for setting up Karma environment that 
makes running unit tests simple as possible.  This setup uses the RequireJS library together with [Jasmine Tests](http://jasmine.github.io/2.3/introduction.html).

[Installation Instructions](http://karma-runner.github.io/0.13/intro/installation.html)

#### Installing Karma and plugins

```sh
# Install Karma:
$ npm install karma --save-dev

# Install plugins that your project needs:
$ npm install karma-jasmine karma-chrome-launcher --save-dev

```
#### Install Karma-Cli
```sh
$ npm install -g karma-cli
```
#### Set Up Your Karma Configuration File
```
// karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    //...
  });
};
```
#### [Using Karma with RequireJS](http://karma-runner.github.io/0.13/plus/requirejs.html) 
````
var TEST_REGEXP = /(spec|test)\.js$/i;
var allTestFiles = [];

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/src',

  // example of using a couple path translations (paths), to allow us to refer to different library dependencies, without using relative paths
  paths: {
    'jquery': '../lib/jquery',
    'underscore': '../lib/underscore',
  },

  // example of using a shim, to load non AMD libraries (such as underscore)
  shim: {
    'underscore': {
      exports: '_'
    }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
````

#### Add Your source files, test cases, and test-main (RequireJS)
````
//karma.conf.js
files: [

    {pattern: 'src/*.js', included: false},
    {pattern: 'test_require/*.js', included: false},

    'test-main.js'
],
````

#### Run Your Tests with Karma-Cli or Use the WebStorm Plugin
````
# Start Karma Server:
$ karma start

# Run Karma Test
$ karma run
````

To run in Webstorm, Right Click karma.conf.js file and click Run.
