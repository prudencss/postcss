/*---
title: PARAGRAPHS
section: settings
---
Appearance & behaviour for paragraphs
*/

$e-paragraphs__feature: map(feature-switches, elements, paragraphs)

$e-paragraphs__spacing-vertical: $g-reset__spacing--vertical !default
$e-paragraphs__space-within: map(spaces, s) !default

/*---
section: general
*/

@if $e-paragraphs__feature
  p + p
    margin-top: calc(($e-paragraphs__spacing-vertical - $e-paragraphs__space-within) * -1)
