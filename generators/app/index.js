const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator{
  prompting() {
    const greetingMessage = `Welcome to ${chalk.black.bold.bgWhite('generator-react-component-dev')} generator!`;

    this.log(yosay(greetingMessage));
  }
};