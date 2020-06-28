/*---
title: IMAGES
section: settings
*/

$e-images__fluid: true !default

/*
section: font-style
---
Fluid images for responsive purposes.
*/

img
  font-style: italic

/*
section: alt-text
---
Offset `alt` text from surrounding copy.
*/

img
  vertical-align: middle

/*
section: spacing
---
Setting `vertical-align` removes the whitespace that appears under `img` elements when they are dropped into a page as-is. Safer alternative to using `display: block;`.
*/

img
  @if $e-images__fluid
    width: 100%
