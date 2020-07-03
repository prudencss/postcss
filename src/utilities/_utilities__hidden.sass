/*---
title: HIDDEN
section: settings
---
Force hide elements on certain breakpoints range
*/

$u-hidden--enabled: map(feature-switches, utilities, hidden) !default

$u-hidden__bp--from--enabled: true !default
$u-hidden__bp--from: (mobile, tablet, desktop, widescreen) !default

$u-hidden__bp--until--enabled: true !default
$u-hidden__bp--until: (tablet, desktop, widescreen, fullhd) !default

/*---
section: mixin
---
```example:html
  <div class="u-hidden__bp--from@desktop">
    I am hidden on viewports wider than desktop-breakpoint-definition.
  </div>

  <div class="u-hidden__bp--until@tablet">
    I am hidden on viewports smaller in width than tablet-breakpoint-definition
  </div>
```
*/

// Utility breakpoints mixin
// --------------------------------------------------

=u-hidden--bp($_direction: "from", $_breakpoint: desktop, $_media-type: null)
  .u-hidden__bp--#{$_direction}#{stringBreakpoint($_breakpoint)}
    @if $_direction == "from"
      @if $_media-type == null
        +t-mq($from: $_breakpoint)
          display: none !important
      @else
        +t-mq($from: $_breakpoint, $and: true, $media-type: $_media-type)
          display: none !important

    @if $_direction == "until"
      @if $_media-type == null
        +t-mq($until: $_breakpoint)
          display: none !important
      @else
        +t-mq($until: $_breakpoint, $media-type: $_media-type)
          display: none !important



/*---
section: general
*/

@if $u-hidden--enabled
  .u-hidden
    display: none !important

// Utility breakpoints FROM output
// --------------------------------------------------

@if $u-hidden--enabled and $u-hidden__bp--from--enabled
  @each $_bp-name in $u-hidden__bp--from
    +u-hidden--bp("from", $_bp-name)

// Utility breakpoints UNTIL output
// --------------------------------------------------

@if $u-hidden--enabled and $u-hidden__bp--until--enabled
  @each $_bp-name in $u-hidden__bp--until
    +u-hidden--bp("until", $_bp-name)
