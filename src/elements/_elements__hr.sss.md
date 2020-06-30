/*---
title: HORIZONTAL RULES
section: settings
---
Ensure to use border bottom as width source
*/

$e-hr--enabled: map(feature-switches, elements, hr)

$e-hr__width: 1px !default
$e-hr__color: $e-document__body--color !default

/*---
section: general
*/

@if $e-hr__enabled
  hr
    border-top-width: 0
    border-bottom-width: $e-hr__width
    border-color: $e-hr__color
