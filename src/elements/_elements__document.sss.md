/*---
title: DOCUMENT
section: settings
---
Based on inuitcss reference

Page-level setup
*/

$e-document--enabled: map(feature-switches, elements, document)

$e-document__body--font-family: map(font-families, sans-serif) !default
$e-document__body--font-size: pxToEm(map(font-sizes, base)) !default
$e-document__body--line-height: map(line-heights, m) !default
$e-document__body--color: map(colors, neutral, foreground)!default
$e-document__body--bgcolor: map(colors, neutral, background) !default

/*---
section: font
---
Set the default `font-size` and `line-height` for the entire project, sourced from our default variables. The `font-size` is calculated to exist in ems, the `line-height` is calculated to exist unitlessly.
*/

@if $e-document__enabled
  html
    font-family: $e-document__body--font-family
    color: $e-document__body--color
    background-color: $e-document__body--bgcolor
    font-size: $e-document__body--font-size

/*---
section: scrollbar
---
Force scrollbars to always be visible to prevent awkward `jumps` when navigating between pages that do/do not have enough content to produce scrollbars naturally.
*/

@if $e-document__enabled
  html
    line-height: $e-document__body--line-height
    overflow-y: scroll

/*---
section: height
---
Ensure the page always fills at least the entire height of the viewport.
*/

@if $e-document__enabled
  html
    min-height: 100vh

