/*---
title: HEADINGS
section: settings
---
Define some minimal heading styles
*/

$e-headings__feature: map(feature-switches, elements, headings)

$e-headings__font-weight: 400 !default

$e-headings__font-size--h1: map(font-sizes, xxxl)!default
$e-headings__font-size--h2: map(font-sizes, xxl) !default
$e-headings__font-size--h3: map(font-sizes, xl) !default
$e-headings__font-size--h4: map(font-sizes, l) !default
$e-headings__font-size--h5: map(font-sizes, m) !default
$e-headings__font-size--h6: map(font-sizes, s) !default

$e-headings__line-height: map(line-heights, xs) !default

$e-headings__margin-bottom: $g-reset__spacing--vertical !default

/*---
section: general
*/

@if $e-headings__feature
  h1,
  h2,
  h3,
  h4,
  h5,
  h6
    line-height: $e-headings__line-height
    margin-bottom: $e-headings__margin-bottom
    font-weight: $e-headings__font-weight

/*---
section: font-size
*/

@if $e-headings__feature
  h1
    font-size: $e-headings__font-size--h1

  h2
    font-size: $e-headings__font-size--h2

  h3
    font-size: $e-headings__font-size--h3

  h4
    font-size: $e-headings__font-size--h4

  h5
    font-size: $e-headings__font-size--h5

  h6
    font-size: $e-headings__font-size--h6
