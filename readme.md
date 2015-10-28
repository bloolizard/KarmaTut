## Karma Tutorial for Go Live Labs

This is a tutorial for setting up Karma environment that 
makes running unit tests simple as possible.

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
#### Add Your Source JavaScript Files

#### Add Your Test Cases

#### Run Your Tests with Karma-Cli or Use the WebStorm Plugin
