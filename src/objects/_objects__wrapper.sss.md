/*---
title: WRAPPER
section: settings
---
Page-level constraining and wrapping elements.
*/

$o-wrapper--enabled: map(feature-switches, objects, wrapper) !default

$o-wrapper__mod-bp-from--enabled: true !default
$o-wrapper__mod-bp-to--enabled: true !default
$o-wrapper__mod-bp: (mobile, tablet, desktop, widescreen, fullhd) @default

/*
section: mixin
*/

// Size modifiers (from)
// --------------------------------------------------

=o-wrapper--from($_bp-name: mobile)
  .o-wrapper--from#{stringBreakpoint($_bp-name)}
    @each $_s-bp-name in $o-wrapper__mod-bp
      @if stripUnit(map(breakpoints, $_s-bp-name)) >= stripUnit(map(breakpoints, #{$_bp-name}))
        +t-mq($from: $_s-bp-name)
          max-width: pxToRem(map(breakpoints, $_s-bp-name))

// Size modifiers (to)
// --------------------------------------------------

=o-wrapper--to($_bp-name: fullhd)
  .o-wrapper--to#{stringBreakpoint($_bp-name)}
    @each $_s-bp-name in $o-wrapper__mod-bp
      @if stripUnit(map(breakpoints, $_s-bp-size)) >= stripUnit(map(breakpoints, $_bp-name))
        +t-mq($from: $_s-bp-name)
          max-width: pxToRem(map(breakpoints, $_bp-name))

/*
section: general
*/

@if $o-wrapper--enabled
  .o-wrapper
    margin-right: auto
    margin-left: auto
    width: 100%

    +t-clearfix

@if $o-wrapper--enabled and $o-wrapper__mod-bp-from--enabled
  @each $_bp-name in $o-wrapper__mod-bp
    +o-wrapper--from($_bp-name)

@if $o-wrapper--enabled and $o-wrapper__mod-bp-to--enabled
  @each $_bp-name in $o-wrapper__mod-bp
    +o-wrapper--to($_bp-name)
