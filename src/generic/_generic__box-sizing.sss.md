/*---
title: box-sizing
section: settings
---
More sensible default box-sizing:
css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice
*/

$g-box-sizing: border-box !default

/*---
section: application
*/

html
  box-sizing: $g-box-sizing

*
  &,
  &::before,
  &::after
    box-sizing: inherit
