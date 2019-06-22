## Webpack Assets Configuration

#### Packages:

##### Babel:

- `@babel/core` :  Parses and outputs parts but does not do any transformation.
- `@babel/preset-env`: Enables transforms for ES2015+, use  `.babelrc` file for configuration.
  - Use `.browserslistrc` file to specify targets.
- `@babel/preset-react`  If you are using react JSX.
  - `core-js`: With `useBuiltIns` set to `usage`, will add polyfills for the target browser for the code we write.
- `babel-loader`: Since we are using webpack, we need a loader for babel.

##### SASS

- `node-sass`: Required for compiling SCSS to CSS.
- `css-loader`: For CSS files.
- `sass-loader`: For SASS files.
- `postcss-loader`: Process CSS with PostCSS for webpack, requires `postcss.config.js` configuration and needs plugins.
  - `autoprefixer`: Parse CSS and add vendor prefixes, does not add pollyfills and uses `.browserslistrc` file to specify targets.
  - `postcss-pxtorem`: Convert pixel units to rem.
  - `cssnano`: compress css output, Webpack does not do it by default.

##### Plugins

- `clean-webpack-plugin`: Empty build directory before building, Webpack does not do it by default.

##### Others:

- `file-loader`: File loaders for files like png|jpg|svg|jpeg|gif|ico
- `image-webpack-loader`: Optimize images.



---

- Transpiling vs polyfilling
  - A **transpiler** takes the syntax that older browsers won’t understand (e.g. classes, ‘const’, arrow functions), and turns them into syntax they will understand (functions, ‘var’, functions). `@babel/preset-env` is a transplier.
  - A **polyfill** is code that defines a new object or method in browsers that don’t support that object or method. You can have polyfills for many different features. Maybe one for Array.prototype.includes, and two more for Map and Promise. We used `@babel/pollyfill` which is deperated in favour of directly including `core-js` .  We can use `"useBuiltIns": "usage"` in as `@babel/preset-env` configuration to add polyfills from core-js based on what we use in our code.

