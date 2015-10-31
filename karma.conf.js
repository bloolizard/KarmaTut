// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/*.js',
            'test/test-sample.js'
        ],
        exclude: [],
        browsers: ['Chrome']
    });
};