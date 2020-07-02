/*---
title: BLOCK
section: settings
---
Stacked content object with or without header and footer.
*/

$o-block--enabled: map(feature-switches, objects, block) !default

$o-block__alignment: center !default

$o-block__mod-alignments--enabled: true !default
$o-block__mod-alignments: (left, center, right) !default

$o-block__mod-stretch--enabled: true !default

/*---
section: mixins
*/

=o-block($_alignment-direction: $o-block__alignment)
  display: block
  text-align: $_alignment-direction

=o-block__header
  display: block

=o-block__body
  display: block

=o-block__footer
  display: block

// Alignment modifiers
// --------------------------------------------------

=o-block__mod-alignment($_alignment-direction: left)
  .o-block--#{$_alignment-direction}
    text-align: $_alignment-direction

@if $o-block--enabled and $o-block__mod-alignments--enabled
  @each $_alignment-direction in $o-block__mod-alignments
    +o-block__mod-alignment($_alignment-direction)

// Stretch modifier output
// --------------------------------------------------

=o-block--stretch
  width: 100%
  display: flex
  flex-direction: column

=o-block__body--stretch
  flex-grow: 1
  flex-shrink: 0
  flex-basis: auto

=o-block__mod-stretch
  .o-block--stretch
    +o-block--stretch

    > .o-block__body
      +o-block__body--stretch

// Unset as mixin
// --------------------------------------------------

=o-block--unset
  display: inherit
  text-align: inherit

=o-block__header--unset
  display: inherit

=o-block__body--unset
  display: inherit

=o-block__footer--unset
  display: inherit

/*---
section: general
*/

@if $o-block--enabled
  .o-block
    +o-block

  .o-block__header
    +o-block__header

  .o-block__body
    +o-block__body

  .o-block__footer
    +o-block__footer

@if $o-block--enabled and $o-block__mod-stretch--enabled
  +o-block__mod-stretch

