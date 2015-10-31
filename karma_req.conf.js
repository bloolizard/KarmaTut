// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'requirejs'],
        files: [

            //'src/*.js',
            //'test/*.js',
            //'test/test-sample.js'

            {pattern: 'src/*.js', included: false},
            {pattern: 'test_require/*.js', included: false},

            'test-main.js'
        ],
        port: 9876,
        exclude: [],
        browsers: ['Chrome']
    });
};