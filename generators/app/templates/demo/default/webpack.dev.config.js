var config = require('./webpack.config.js');

config.resolve.alias.<%= exportName %> = '../../src/index';

module.exports = config;
