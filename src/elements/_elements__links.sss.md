/*---
title: LINKS
section: settings
---
Define some minimal links styles
*/

$e-links--enabled: map(feature-switches, elements, links)

$e-links__color: map(colors,digital-blue) !default
$e-links__hover-color: map(colors, digital-blue) !default

$e-links__decoration: none !default
$e-links__hover-decoration: underline !default

/*---
section: general
*/

@if $e-links__enabled
  a
    color: $e-links__color
    text-decoration: $e-links__decoration

    @if $e-links__hover-color != $e-links__color or $e-links__decoration != $e-links__hover-decoration
      &:hover
        @if $e-links__hover-color != $e-links__color
          color: $e-links__hover-color

        @if $e-links__decoration != $e-links__hover-decoration
          text-decoration: $e-links__hover-decoration
