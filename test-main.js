//var TEST_REGEXP = /(spec|test)\.js$/i;
var TEST_REGEXP = /test\.js$/;
var allTestFiles = [];

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
    console.log(file);
    if (TEST_REGEXP.test(file)) {
        allTestFiles.push(file);
    }
});

console.log(allTestFiles);

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/src',

    // example of using a couple path translations (paths), to allow us to refer to different library dependencies, without using relative paths
    paths: {

    },

    // example of using a shim, to load non AMD libraries (such as underscore)
    shim: {

    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});