/*---
title: BULLET
section:settings
---
The bullet pattern is used to align an icon with some text,
similar to how a bullet point has the icon and the text

$o-bullet--enabled: map(feature-switches, objects, bullet) !default

$o-bullet__icon-size: 1em !default
$o-bullet__icon--padding-left: 0.3em !default

$o-bullet__text--line-height: map(line-heights, s) !default

$o-bullet__mod-block--enabled: true !default

$o-bullet__mod-middle--enabled: true !default

$o-bullet__mod-reverse--enabled: true !default

$o-bullet__mod-iconsize--enabled: true !default
$o-bullet__mod-iconsizes: (s, m, l, xl, xxl, xxxl) !default

/*---
section: mixin
*/

=o-bullet
  display: inline-block

=o-bullet__icon($_icon-size: $o-bullet__icon-size)
  width: $_icon-size
  height: $_icon-size
  line-height: $_icon-size
  display: inline-block
  vertical-align: middle

=o-bullet__text
  display: inline-block
  vertical-align: middle
  line-height: $o-bullet__text--line-height
  padding-left: $o-bullet__icon--padding-left

// Block modifier
// --------------------------------------------------

=o-bullet--block
  display: table
  width: 100%

=o-bullet__icon--block($_icon-size: $o-bullet__icon-size)
  display: table-cell
  vertical-align: top
  width: $o-bullet__icon-size
  max-width: $o-bullet__icon-size


=o-bullet__text--block
  display: table-cell
  vertical-align: top
  width: auto
  padding-left: calc(#{$o-bullet__icon--padding-left} * 2)

=o-bullet__mod-block
  .o-bullet--block
    position: relative

    +o-bullet--block

    > .o-bullet__icon
      +o-bullet__icon--block

    > .o-bullet__text
      +o-bullet__text--block

// Middle modifier
// --------------------------------------------------

=o-bullet--middle
  +o-bullet--block

=o-bullet__icon--middle($_icon-size: $o-bullet__icon-size)
  +o-bullet__icon--block($_icon-size)

  vertical-align: middle

=o-bullet__text--middle
  +o-bullet__text--block

  vertical-align: middle

=o-bullet__mod-middle
  .o-bullet--middle
    +o-bullet--middle

    > .o-bullet__icon
      +o-bullet__icon--middle

    > .o-bullet__text
      +o-bullet__text--middle

// Reverse modifiers
// --------------------------------------------------

=o-bullet__mod-reverse
  .o-bullet--reverse
    direction: rtl

// Icon Size modifiers
// --------------------------------------------------

=o-bullet--iconsize($_iconsize-name: "m", $_iconsize-value: 1em)
  .o-bullet--iconsize-#{$_iconsize-name}
    > .o-bullet__icon
      width: $_iconsize-value
      height: $_iconsize-value
      max-width: $_iconsize-value

// Unset as mixin
// --------------------------------------------------

=o-bullet--unset
  display: inherit

=o-bullet__icon--unset
  display: inherit

/*---
section: general
*/

@if $o-bullet--enabled
  .o-bullet
    +o-bullet

  .o-bullet__icon
    +o-bullet__icon

  .o-bullet__text
    +o-bullet__text

@if $o-bullet--enabled and $o-bullet__mod-block--enabled
  +o-bullet__mod-block

@if $o-bullet--enabled and $o-bullet__mod-middle--enabled
  +o-bullet__mod-middle


@if $o-bullet--enabled and $o-bullet__mod-reverse--enabled
  +o-bullet__mod-reverse

@if $o-bullet--enabled and $o-bullet__mod-iconsize--enabled
  @each $_iconsize-name in $o-bullet__mod-iconsizes
    +o-bullet--iconsize($_iconsize-name, map(bullets, icon-sizes, #{$_iconsize-name})

