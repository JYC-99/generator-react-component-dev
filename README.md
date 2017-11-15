# generator-react-component-dev-kit
A scaffolding tool allowing developers create react component with demo page, dev page with hot reloading, testing with coverage check.

## Usage

- Make sure "yo" is available on your machine: http://yeoman.io/learning/

- install the generator:

```bash
npm install -g generator-react-component-dev-kitnpm
```

- Change working directory to your project code base.

- `yo react-component-dev-kit`
  - You need to type in your component name in the prompting dialog.
  - The generator will transform it to PascalCase as component export name, and param-case as package name.

## Work on your new component:

### component entry point:

src/index.js

### build

```bash
npm run build
```

 By default, your new component will produce an UMD library with react as external library. The bundled file will be put into dist/index.js.
 If that is not your case, you can manually update the package.json.

 ```javascript
output: {
  path: __dirname + '/dist',
  filename: 'index.js',
  publicPath: '/',
  libraryTarget: 'umd',
  library: 'ReactProjectionGrid',
},
 ```

 ### linting

 Linting will happen before every build execution as well as demo/dev.

 You can also run ```bash npm run eslint ``` in your command line to execute linting.

 Customize your linting rule in .eslintrc.yaml. I believe I have set up very restrict rules.

 ### demo page

 ```bash
 npm run demo
 ```

 Then open "/demo/default/index.html" to inspect the demo. The demo code is index.js under the same directory.
 It simulates how consumers use your component. It points to the dist/index.js.

 ### dev page

 ```bash
 npm run dev
 ```

 You can visit your dev page at localhost:9001. It is hot-reloading powered by webpack-dev-server.

 ### Testing

 ```bash
 npm test
 ```

 The test is based on [Jest](https://facebook.github.io/jest/)

 customize your jest configuration under package.json "jest" field.

 #### Converage check

 Coverage report will be placed in /coverage-report.
 You can modify coverage threashold in your package.json:

 ```json
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    }
 ```

 ### jsdoc

If you have jsdoc comments. Run ```bash npm run jsdoc ``` will generate the docs under 'jsdoc'.

Custom your jsdoc config at "jsdoc.config.json"
