/*---
title: LAYOUT
section: settings
---
Grid-like layout system. Based on and utilizing PostCSS Lost-Grid.

The layout object provides us with a column-style layout system. This file contains the basic structural elements, but classes should be complemented with width utilities, for example:

```Basic example:html
<div class="o-layout">
  <div class="o-layout__item  u-grid__row--1/2">
  </div>
  <div class="o-layout__item  u-grid__row--1/2">
  </div>
</div>
```

The above will create a two-column structure in which each column will fluidly fill half of the width of the parent. We can have more complex systems:

```More C0mplex example:html
<div class="o-layout">
  <div class="o-layout__item  u-grid__column--1/1  u-grid__column--1/3@md">
  </div>
  <div class="o-layout__item  u-grid__column--1/2  u-grid__column--1/3@md">
  </div>
  <div class="o-layout__item  u-grid__column--1/2  u-grid__column--1/3@md">
  </div>
</div>
```

The above will create a system in which the first item will be 100% width until we enter our medium breakpoint, when it will become 33.333% width. The second and third items will be 50% of their parent, until they also become 33.333% width at the medium breakpoint.
We can also manipulate entire layout systems by adding a series of modifiers to the `.o-layout` block. For example:

```Modifiers example:html
<div class="o-layout  o-layout--reverse">
```

This will reverse the displayed order of the system so that it runs in the opposite order to our source, effectively flipping the system over.

```html
<div class="o-layout  o-layout--[right|center]">
```

This will cause the system to fill up from either the centre or the right hand side. Default behaviour is to fill up the layout system from the left. There are plenty more options available to us: explore them below.

By default we use the `font-size: 0;` trick to remove whitespace between items. Set this to true in order to use a markup-based strategy like commenting out whitespace or minifying HTML.

Params:
* SPACE .............................. Horizontal separation between layout__items
*/

$o-layout--enabled: map(feature-switches, objects, layout) !default

// Modifiers Flexbox

$o-layout__flex: (row, column)

// Modifiers Alignments

$o-layout__mod-alignment-enabled: true !default
$o-layout__mod-alignments: (reset, horzontal, vertical, top-left, top-center, top, top-right, middle-left, left, middle-center, center, middle-right, right, bottom-left, bottom-center, bottom, bottom-right)

// Modifiers Centering Container

$o-layout__mod-center--enabled: true !default
$o-layout__mod-center--space: $g-reset__spacing--horizontal !default
$o-layout__mod-center--spaces: (none, xs, s, m, l, xl) !default

// Item Modiefier Units

$o-layout__mod-unit-enabled: true !default
$o-layout__mod-units: (percent, viewport)

/*---
section: mixin
*/

=o-layout($_space-value: $o-layout__space)
  margin: 0
  padding: 0
  list-style: none
  font-size: 0

  @each $_flexmod in $o-layout__flex
    &.o-layout__#{$_flexmod}
      lost-flex-container: $_flexmod

      @if $o-layout__mod-unit-enabled
        &.o-layout__units--percent
          lost-unit: %
        &.o-layout__units--viewport
          @if $_flexmod == row
            lost-unit: vw
          @else
            lost-unit: vh

  @if $o-layout__mod-alignment--enabled
    @each $_alignment in $o-layout__mod-alignments
      &.o-layout__align--#{$_alignment}
        lost-align: $_alignment flex

  @if $o-layout__mod-center--enabled
    @for $_denominator from 1 to map(settings, grid-fractions)
      @for $_numerator from 1 to $_denominator
        @if $_numerator != $_denominator or $_denominator == 1
          @each $_spacing in $o-layout__mod-center--spaces
            &.o-layout__center--#{$_numerator}\/#{$_denominator}-#{$_spacing}
              lost-center: $_numerator/$_denominator $_spacing flex

=o-layout__item($_space-value: $o-layout__space)
  box-sizing: border-box
  display: inline-block
  vertical-align: top
  width: 100%
  padding-left: s-core-px-to-rem($_space-value)
  font-size: s-core-px-to-rem($s-core__font-size)

// Object selector output
// --------------------------------------------------

@if $o-layout--enabled
  .o-layout
    +o-layout

  .o-layout__item
    +o-layout__item

// Space modifiers
// --------------------------------------------------

=o-layout__mod-space($_space-name: none, $_space-value: 0)
  .o-layout--space-#{$_space-name}
    margin-left: -1 * s-core-px-to-rem($_space-value)

    > .o-layout__item
      padding-left: s-core-px-to-rem($_space-value)

@if $o-layout--enabled and $o-layout__mod-spaces--enabled
  @each $_space-name, $_space-value in $o-layout__mod-spaces
    +o-layout__mod-space($_space-name, $_space-value)

// Vertical alignment modifiers
// --------------------------------------------------

=o-layout__mod-alignment-v($_vertical-alignment: top)
  .o-layout--#{$_vertical-alignment}
    > .o-layout__item
      vertical-align: $_vertical-alignment

@if $o-layout--enabled and $o-layout__mod-alignments-v--enabled
  @each $_vertical-alignment in $o-layout__mod-alignments-v
    +o-layout__mod-alignment-v($_vertical-alignment)

// Horizontal alignment modifiers
// --------------------------------------------------

=o-layout__mod-alignment-h($_alignment: left)
  .o-layout--#{$_alignment}
    text-align: $_alignment

    > .o-layout__item
      text-align: left

@if $o-layout--enabled and $o-layout__mod-alignments-h--enabled
  @each $_alignment in $o-layout__mod-alignments-h
    +o-layout__mod-alignment-h($_alignment)

// Reverse modifier
// --------------------------------------------------

=o-layout--reverse
  direction: rtl

=o-layout__item--reverse
  direction: ltr
  text-align: left

@if $o-layout--enabled and $o-layout__mod-reverse--enabled
  .o-layout--reverse
    +o-layout--reverse

    > .o-layout__item
      +o-layout__item--reverse

// Unset as mixin
// --------------------------------------------------

=o-layout--unset
  display: inherit
  margin: inherit
  padding: inherit
  list-style: inherit
  font-size: inherit

=o-layout__item--unset
  box-sizing: inherit
  display: inherit
  vertical-align: inherit
  width: auto
  padding-left: inherit
  font-size: inherit
