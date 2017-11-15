# generator-react-component-dev-kit
A scaffolding tool allowing developers create react component with demo page, dev page with hot reloading, testing with coverage check.

## features

- build: powered by webpack. Bundle your source code into umd library.
- testing: set up the jest testing suites with coverage check.
- demo: set up a simulator site to load your component as a child in the mini application.
- dev page: hot reloading dev page with source mapping. Enjoy the debugging process.
- eslint: linting the code while webpack processes.
- jsdoc: generate jsdoc files from your jsdoc comments.

## Usage

- Make sure "yo" is available on your machine: http://yeoman.io/learning/

- install the generator:

```bash
npm install -g generator-react-component-dev-kit
```

- Change working directory to your project code base. And run ```yarn``` to install the dependencies. You may want to mannually modify the dependencies/devDependencies in package.json if you wish.

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
  library: 'YourComponentName',
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

### prepublish

By default it puts "webpack" and "jsdoc" as the prepublishOnly script.
