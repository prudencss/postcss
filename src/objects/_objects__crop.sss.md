/*---
title: CROP
section: settings
---
A cropping wrapper with preserved ratio
*/

$o-crop--enabled: map(feature-switches, objects, crop) !default

$o-crop__ratios: ('1/1', '4/3', '3/2', '16/9', '2/1') !default
$o-crop__ratios--enabled: true !default

$o-crop__mod-alignments--enabled: true !default

/*---
section: mixins
*/

=o-crop
  position: relative
  display: block
  overflow: hidden

=o-crop__content
  position: absolute
  top: 0
  left: 0
  max-width: none

=o-crop--unset
  position: inherit
  display: inherit
  overflow: inherit

=o-crop__content--unset
  position: inherit
  top: auto
  left: auto
  right: auto
  max-width: inherit
  transform: none

/*---
section: general
*/

@if $o-crop--enabled
  .o-crop
    +o-crop

  .o-crop__content
    +o-crop__content

/*---
section: alignment modifiers
*/

@if $o-crop--enabled and $o-crop__mod-alignments--enabled
  .o-crop__content--left
    top: 0
    left: 0

  .o-crop__content--right
    right: 0
    left: auto

  .o-crop__content--bottom
    top: auto
    bottom: 0

  .o-crop__content--center
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

/*---
section: crop ratios
*/

@if $o-crop--enabled and $o-crop__ratios--enabled
  @each $_name in $o-crop__ratios
    .o-crop--#{$_name}
      padding-bottom: calc(map(aspect-ratios, #{$_name}) * 100%)

