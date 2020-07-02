/*---
title: RATIO
section: settings
---
Ratio-bound content block
*/

$o-ratio--enabled: map(feature-switches, objects, ratio) !default

$o-ratio__mod-ratios--enabled: true !default
$o-ratio__mod-ratios: ("1/1", "4/3", "3/2", "16/9", "2/1") !default

$o-ratio__mod-bp--enabled: true !default
$o-ratio__mod-bp: ("mobile", "tablet", "desktop", "widescreen", "fullhd") !default

/*---
section: mixin
*/

=o-ratio($_ratio: 1)
  position: relative

  &::before
    display: block
    width: 100%
    padding-top: $_ratio * 100%
    content: ""

=o-ratio__content
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  height: 100%
  width: 100%

=o-ratio--unset
  position: inherit

  &::before
    display: inherit
    width: auto
    padding-top: inherit
    content: inherit

=o-ratio__content--unset
  position: inherit
  top: auto
  right: auto
  bottom: auto
  left: auto
  height: auto
  width: auto

=o-ratio--override($ratio)
  &::before
    padding-top: calc(#{$ratio} * 100%)

/*---
section: general
*/

@if $o-ratio--enabled
  .o-ratio
    +o-ratio

  .o-ratio__content
    +o-ratio__content

/*---
section: ratios
*/

@if $o-ratio--enabled and $o-ratio__mod-ratios--enabled
  @each $_name  in $o-ratio__mod-ratios
    .o-ratio--#{$_name}
      +o-ratio--override(map(aspect-ratios, #{$_name}))

/*---
section: ratios by breakpoints
*/

@if $o-ratio--enabled and $o-ratio__mod-ratios--enabled and $o-ratio__mod-bp--enabled
  @each $_bp-name in $o-ratio__mod-bp
    @each $_name in $o-ratio__mod-ratios
      +t-mq($from: $_bp-name)
        .o-ratio--#{$_name}#{stringBreakpoint($_bp-name)}
          +o-ratio--override(map(aspect-ratios, #{$_name}))

