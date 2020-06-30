/*---
title: TABLES
section: settings
---
Ensure tables fill up as much space as possible.
*/

$e-tables--enabled: map(feature-switches, elements, tables)

$e-tables__full-width: true !default

/*---
section: general
*/


@if $e-tables__enabled and $e-tables__full-width
  table
    width: 100%

