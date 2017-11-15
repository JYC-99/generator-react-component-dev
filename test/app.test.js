const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

describe('generator-react-component-dev-kit', () => {
  it('should create expected files', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ name: 'test-component' })
      .then((dir) => {
        assert.file([
          'test-component/webpack.config.js',
          'test-component/jsdoc.config.json',
          'test-component/src/index.js',
          'test-component/demo/default/index.js',
          'test-component/demo/default/index.html',
          'test-component/package.json',
        ]);
      });
  });
});