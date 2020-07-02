/*---
section: FLAG
title: settings
---
A media object based on tables
The flag object is a design pattern similar to the media object, however it
utilises `display: table[-cell];` to give us control over the vertical
alignments of the text and image.
*/

$o-flag--enabled: map(feature-switches, objects, flag) !default

$o-flag__alignment: middle !default

$o-flag__mod-alignments--enabled: true !default
$o-flag__mod-alignments: (top, middle, bottom) !default

$o-flag__mod-reverse--enabled: true !default

/*---
section: mixins
*/

=o-flag
  display: table
  width: 100%

=o-flag__img($_vertical-alignment: $o-flag__alignment)
  display: table-cell
  vertical-align: $_vertical-alignment
  width: 1px

  > img
    width: auto

=o-flag__body($_vertical-alignment: $o-flag__alignment)
  display: table-cell
  vertical-align: $_vertical-alignment
  width: auto

=o-flag__mod-alignment($_vertical-alignment: middle)
  .o-flag--#{$_vertical-alignment}
    > .o-flag__img,
    > .o-flag__body
      vertical-align: $_vertical-alignment

=o-flag--reverse
  direction: rtl

=o-flag__body--reverse
  direction: ltr

=o-flag__img--reverse
  direction: ltr

=o-flag__mod-reverse
  .o-flag--reverse
    +o-flag--reverse

    > .o-flag__body
      +o-flag__body--reverse

    > .o-flag__img
      +o-flag__img--reverse

=o-flag--unset
  display: inherit
  width: inherit

=o-flag__img--unset
  display: inherit
  vertical-align: inherit
  width: auto

  > img
    max-width: inherit

=o-flag__body--unset
  display: inherit
  vertical-align: inherit
  width: inherit

/*---
section: general
*/

@if $o-flag--enabled
  .o-flag
    +o-flag

  .o-flag__img
    +o-flag__img

  .o-flag__body
    +o-flag__body

/*---
section: alignment
*/

@if $o-flag--enabled and $o-flag__mod-alignments--enabled
  @each $_vertical-alignment in $o-flag__mod-alignments
    +o-flag__mod-alignment($_vertical-alignment)

/*---
section: reverse
*/

@if $o-flag--enabled and $o-flag__mod-reverse--enabled
  +o-flag__mod-reverse
