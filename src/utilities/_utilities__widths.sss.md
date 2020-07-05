/*---
title: utility-grid
section: settings
---
Generates a series of utility classes that give a fluid width to whichever element they're applied, combining the fractions numbers (there are $u-grid__fractions number of fractions), e.g.:

```example:html
  <img src="" alt="" class="u-1/2" />
```

These classes are most commonly used in conjunction with objects, e.g.:

```obj combinatoric example:html
  <div class="o-layout__item  u-1/2">
```

By default, will also generate responsive variants of each of these classes by using your Sass MQ configuration, e.g.:

```obj combinatori example with breakpoints:html
  <div class="o-layout__item  u-1/1  u-1/2@sm  u-1/3@lg">
```

Optionally, offset classes can br generated which can push and pull elements left and right by a specified amount, e.g.:

```move helpers:html
  <div class="o-layout__item  u-2/3  u-pull--1/3">
```

This is useful for making very granular changes to the rendered order of items in a layout.
*/

$u-grid--enabled: map(feature-switches, utilities, grid) !default

// Fractions

$u-grid__fractions: 16 !default

// Breakpoints

$u-grid__bp--enabled: true !default
$u-grid__bp: (mobile, tablet, desktop, widescreen, fullhd) !default

/*---
section: mixin
*/

=u-grid($_fractions, $_bp-suffix: null)
  @each $_denominator from 1 through $_fractions
    @for $_numerator from 1 through $_denominator
      @if $_numerator != $_denominator or $_denominator == 1
        @each $_grid-type in (column, row, waffle)
          @if $_bp-suffix == null
            .u-grid__#{$_grid-type}--#{$_numerator}\/#{$_denominator}
              lost-#{$_grid-type}: $_numerator / $_denominator

            @if $_denominator > 1
              .u-grid__push--#{$_numerator}\/#{$_denominator}
                lost-offset: $_numerator / $_denominator
              .u-grid__move-fwd--#{$_numerator}\/#{$_denominator}
                lost-move: $_numerator / $_denominator

            @if $_denominator > 1
              .u-grid__pull--#{$_numerator}\/#{$_denominator}
                lost-offset: - $_numerator / $_denominator
              .u-grid__move-bwd--#{$_numerator}\/#{$_denominator}
                lost-move: - $_numerator / $_denominator
          @else
            .u-grid__#{$-grid-type}--#{$_numerator}\/#{$_denominator}#{$_bp-suffix}
              lost-#{$_grid-type}: $_numerator / $_denominator

            @if $_denominator > 1
              .u-grid__push--#{$_numerator}\/#{$_denominator}#{$_bp-suffix}
                lost-offset: $_numerator / $_denominator
              .u-grid__move-fwd--#{$_numerator}\/#{$_denominator}#{$_bp-suffix}
                lost-move: $_numerator / $_denominator

            @if $_denominator > 1
              .u-grid__pull--#{$_numerator}\/#{$_denominator}#{$_bp-suffix}
                lost-offset: - $_numerator / $_denominator
              .u-grid__move-bwd--#{$_numerator}\/#{$_denominator}#{$_bp-suffix}
                lost-move: - $_numerator / $_denominator

/*---
section: general
*/

@if $u-grid--enabled
  +u-grid($u-grid__fractions)

// Build classes with breakpoint suffixes
// --------------------------------------------------

@if $u-grid--enabled and $u-grid__bp--enabled
  @each $_bp-name in $u-grid__bp
    +t-mq($from: $_bp-name)
      +u-grid($u-grid__fractions, stringBreakpoint($_bp-name))
