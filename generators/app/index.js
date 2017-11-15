const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');
const glob = require('glob');

module.exports = class extends Generator{
  prompting() {
    const greetingMessage = `Welcome to ${chalk.black.bold.bgWhite('generator-react-component-dev')} generator!`;

    this.log(yosay(greetingMessage));

    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: 'new-react-component'
      }
    ]).then(function(props) {
      this.props = props;
    }.bind(this));
  }

  writing() {
    const exportName = changeCase.pascalCase(this.props.name);
    const packageName = changeCase.paramCase(this.props.name);

    this.fs.copyTpl(
      glob.sync(this.templatePath('**')),
      this.destinationPath(packageName),
      {
        packageName,
        exportName,
      });
  }
};