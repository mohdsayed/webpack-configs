## Webpack Assets Configuration

#### Packages:

##### Babel:

- `@babel/core` :  Required for babel
- `@babel/preset-env`: Enables transforms for ES2015+
- `@babel/preset-react`  If you are using react JSX.
- `babel-loader`: Since we are using webpack, we need a loader for babel.

##### SASS

- `node-sass`: Required for compiling SCSS to CSS.
- `css-loader`: For CSS files.
- `sass-loader`: For SASS files.
- `postcss-loader`: Process CSS with PostCSS for webpack, requires `postcss.config.js` configuration and needs plugins.
  - `autoprefixer`: Parse CSS and add vendor prefixes, does not add pollyfills and requires `.browserslistrc` or `browserslist` in `package.json` to target browsers.
  - `postcss-pxtorem`: Convert pixel units to rem.

##### Plugins

- `clean-webpack-plugin`: Empty build directory before building, Webpack does not do it by default.

##### Others:

- `file-loader`: File loaders for files like png|jpg|svg|jpeg|gif|ico

