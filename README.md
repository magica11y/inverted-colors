`invertedColors()`
========================
> Detects the user’s preferences for inverted colors using the `inverted-colors` CSS3 level 5 media query.

[![Travis](https://img.shields.io/travis/com/magica11y/inverted-colors.svg?style=for-the-badge)](https://app.travis-ci.com/github/magica11y/inverted-colors)
[![NPM](https://img.shields.io/npm/v/@magica11y/inverted-colors.svg?style=for-the-badge "NPM")](https://www.npmjs.com/package/@magica11y/inverted-colors)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/inverted-colors.svg?style=for-the-badge "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/inverted-colors)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/inverted-colors.svg?style=for-the-badge "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/inverted-colors)
[![Coveralls](https://img.shields.io/coveralls/github/magica11y/inverted-colors.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/github/magica11y/inverted-colors)
[![David DM](https://img.shields.io/david/magica11y/inverted-colors.svg?style=for-the-badge "Dependencies")](https://david-dm.org/magica11y/inverted-colors)
[![David DM](https://img.shields.io/david/dev/magica11y/inverted-colors.svg?style=for-the-badge "Dev Dependencies")](https://david-dm.org/magica11y/inverted-colors?type=dev)
[![NodeJS](https://img.shields.io/node/v/@magica11y/inverted-colors.svg?style=for-the-badge "Node engine")](https://www.npmjs.com/package/@magica11y/inverted-colors)
[![License](https://img.shields.io/github/license/magica11y/inverted-colors.svg?style=for-the-badge "MIT license")](LICENSE.md)
[![Snyk](https://img.shields.io/snyk/vulnerabilities/github/magica11y/inverted-colors?style=for-the-badge "Snyk vulnerabilities status")](https://snyk.io/test/github/magica11y/inverted-colors?targetFile=package.json)

[![Magica11y cover](https://cdn.jsdelivr.net/gh/magica11y/cauldron@1.0.7/assets/Magica11y-cover.jpg "Magica11y cover")](https://magica11y.github.io)


# :sparkles: Introduction

Quoting from the [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://www.w3.org/TR/mediaqueries-5/)
[media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) specfication…

> The [`'inverted-colors'`](https://www.w3.org/TR/mediaqueries-5/#inverted) media feature indicates whether the content is displayed normally, or whether colors have been inverted.

:new_moon: **`invertedColors()`** is part of :crystal_ball: [**Magica11y**](https://magica11y.github.io),
which provides a suite of functions to detect “user-preference” and “environment” media features.

[Magica11y](https://magica11y.github.io) functions are awesome because…
  * They have **zero** dependencies
  * They’re **lightweight**; e.g. `invertedColors()` is just [![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/inverted-colors.svg?style=flat-square&label "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/inverted-colors) minified, or [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/inverted-colors.svg?style=flat-square&label "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/inverted-colors) minified & gzipp’d
  * They use the **[`window.matchMedia`](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)** API underneath
  * They’re optimized for **performance**; all the module functions are designed in such a way that they exit early
  * They provide a **clean**, **well-documented** and **semantic** API to work with

In addition to `invertedColors()`, [Magica11y](https://magica11y.github.io) also provides…

  * :tv: [`environmentBlending()`](https://app.travis-ci.com/github/magica11y/prefers-contrast)
  * :art: [`forcedColors()`](https://github.com/magica11y/forced-colors)
  * ~:candle: [`lightLevel()`](https://github.com/magica11y/light-level)~
  * :last_quarter_moon: [`prefersColorScheme()`](https://github.com/magica11y/prefers-color-scheme)
  * :high_brightness: [`prefersContrast()`](https://github.com/magica11y/prefers-contrast)
  * :roller_coaster: [`prefersReducedMotion()`](https://github.com/magica11y/prefers-reduced-motion)
  * :gem: [`prefersReducedTransparency()`](https://github.com/magica11y/prefers-reduced-transparency)

# :rocket: Getting started

## :building_construction: Installation

You can install `invertedColors()` using a package manager such as [`yarn`](https://yarnpkg.com/en/package/@magica11y/inverted-colors) or [`npm`](https://www.npmjs.com/package/@magica11y/inverted-colors)…

```sh
$ yarn add "@magica11y/inverted-colors"
# OR
$ npm install --save "@magica11y/inverted-colors"
```

You can also include `invertedColors()` from a CDN on your page, such as [jsDelivr](https://www.jsdelivr.com/package/npm/@magica11y/inverted-colors) or [unpkg](https://unpkg.com/@magica11y/inverted-colors)…

```html
<script src="https://cdn.jsdelivr.net/npm/@magica11y/inverted-colors@latest/dist/magica11y.invertedColors.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/@magica11y/inverted-colors@latest/dist/magica11y.invertedColors.js"></script>
```

## :game_die: Usage

`invertedColors()` is distributed as a [UMD](https://github.com/umdjs/umd) module, so you can use it as a browser global…

```js
var invertedColorsPreference = window.magica11y.invertedColors.default();
var areColorsInverted = (invertedColorsPreference === window.magica11y.invertedColors.colorPreferences.INVERTED);
```

… or as a CommonJS module…

```js
const invertedColors = require('@magica11y/inverted-colors');
const invertedColorsPreference = invertedColors.default();
const areColorsInverted = (invertedColorsPreference === invertedColors.colorPreferences.INVERTED);
```

… or as an ES module…

```js
import invertedColors, { colorPreferences } from '@magica11y/invertedColors';

const invertedColorsPreference = invertedColors();
const areColorsInverted = (invertedColorsPreference === colorPreferences.INVERTED);
```

The `colorPreferences` object contains all the possible values supported by the `'inverted-colors'` media query…

* `colorPreferences.NONE` (spec: [`'none'`](https://www.w3.org/TR/mediaqueries-5/#valdef-media-inverted-colors-none))
  > Colors are displayed normally.
* `colorPreferences.INVERTED` (spec: [`'inverted'`](https://www.w3.org/TR/mediaqueries-5/#valdef-media-inverted-colors-inverted))
  > All pixels within the displayed area have been inverted.
* `null`
  > The user’s preference could not be determined.


# :checkered_flag: Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs)
in `node_modules/@magica11y/inverted-colors/lib` by configuring them in your `.flowconfig`…

```
[libs]
node_modules/@magica11y/inverted-colors/lib
```

Now, you can use the Flow types as follows…

```js
// @flow
import invertedColors, { type ColorPreference } from '@magica11y/inverted-colors';

const invertedColorsPreference: ?ColorPreference = invertedColors();
```

:tophat: **Note**: `invertedColors()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void)
type (i.e. `ColorPreference`). So using the `?` prefix to indicate nullable types is recommended (i.e. `?ColorPreference`).


# :scroll: License

[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)

See [LICENSE.md](LICENSE.md) for more details.

Handcrafted with :heart: by [Rishabh](https://rishabh.ink).

[![Twitter](https://img.shields.io/twitter/follow/rishabh_ink.svg?style=social)](https://twitter.com/rishabh_ink)
