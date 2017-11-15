var config = require('./webpack.config.js');

config.resolve.alias['<%= packageName %>'] = '../../src/index';

module.exports = config;
