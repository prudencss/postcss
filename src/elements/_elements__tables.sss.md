/*---
title: TABLES
section: settings
---
Ensure tables fill up as much space as possible.
*/

$e-tables__feature: map(feature-switches, elements, tables)

$e-tables__full-width: true !default

/*---
section: general
*/


@if $e-tables__feature and $e-tables__full-width
  table
    width: 100%

