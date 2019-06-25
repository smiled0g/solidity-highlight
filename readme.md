<div align="center">
  <h1>
    Solidity Highlight
  </h1>

  <p>
    <strong>A Web Component offering syntax highlighter for Solidity</strong>

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)wallet-browser-extension#info=devDependencies)
[![Code Style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Dependency Status](https://david-dm.org/bandprotocol/wallet-browser-extension.svg)](https://david-dm.org/bandprotocol/wallet-browser-extension)
[![devDependency Status](https://david-dm.org/bandprotocol/wallet-browser-extension/dev-status.svg)](https://david-dm.org/bandprotocol/

  </p>
</div>

The component is built using [Stencil](https://stenciljs.com). It works with Vanilla JS, React, Vue, Angular and Ember.

## Installation

```bash
yarn add solidity-highlight
```

## Start using <solidity-highlight />

### Vanilla JS (via CDN)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/smiled0g/solidity-highlight/dist/solidity-highlight.js"></script>
  </head>
  <body>
    <solidity-highlight
      code="pragma solidity ^0.5.0;

contract HelloWorld {
  bool public hacked;
  function hack() public {
    hacked = true;
  }
  /// ~
  function isHacked() public view returns (bool) {
    return hacked;
  }
}
"
    ></solidity-highlight>
  </body>
</html>
```

You can programmatically change the code by modifying `code` attribute.

```html
<script>
  const solidityHighlight = document.querySelect('solidity-highlight')
  solidityHighlight.code = `<YOUR_NEW_CODE_HERE>`
</script>
```

## Theming

Under the hood, we use [highlight.js](https://highlightjs.org). To change the syntax highlighter's color scheme, [pick the theme](https://highlightjs.org/static/demo/) you like, [grab the css file name](https://github.com/highlightjs/highlight.js/tree/master/src/styles), and add the following tag to your html:

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/highlight.js/styles/<FILE_NAME>.css"
/>
```

## Development

To start a development server, run the following:

```bash
yarn
yarn start
```

To build `<solidity-highlight />` component for production, run:

```bash
yarn build
```

For more fancy stuff, check out Stencil's docs [here](https://stenciljs.com/docs/my-first-component).

## Contributions

Please feel free to submit a PR for features you want.

## LICENSE

[MIT](LICENSE)
