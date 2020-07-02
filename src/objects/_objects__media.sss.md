/*---
title: MEDIA
section: settings
---
Place any image-like and text-like content side-by-side, as per:
http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code
*/

$o-media--enabled: map(feature-switches, objects, media) !default

$o-media__mod-reverse--enabled: true !default

/*---
section: mixin
*/

=o-media
  display: block

  +t-clearfix

=o-media__img
  float: left

  > img
    display: block

=o-media__body
  overflow: hidden
  display: block

  &,
  > :last-child
    margin-bottom: 0

=o-media__img--reverse
  float: right

=o-media__mod-reverse
  .o-media--reverse
    > .o-media__img
      +o-media__img--reverse

=o-media--unset
  display: inherit

  +t-clearfix--unset

=o-media__img--unset
  float: inherit

  > img
    display: inherit

=o-media__body--unset
  overflow: inherit
  display: inherit

/*---
section: general
*/

@if $o-media--enabled
  .o-media
    +o-media

  .o-media__img
    +o-media__img

  .o-media__body
    +o-media__body

/*---
section: reverse
*/

@if $o-media--enabled and $o-media__mod-reverse--enabled
  +o-media__mod-reverse

