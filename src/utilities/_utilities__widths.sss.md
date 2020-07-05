/*---
title: utility-widths
section: settings
---
Generates a series of utility classes that give a fluid width to whichever element they're applied, combining the fractions numbers, e.g.:

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

$u-widths--enabled: map(feature-switches, utilities, widths) !default

// Fractions

$u-widths__fractions: (1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11, 12) !default

// Breakpoints

$u-widths__bp--enabled: true !default
$u-widths__bp: (mobile, tablet, desktop, widescreen, fullhd) !default

// Pull and push options

$u-widths__offset-push--enabled: true !default
$u-widths__offset-pull--enabled: true !default

/*---
section: mixin
*/

=u-widths($_columns, $_bp-suffix: null)
  @each $_denominator in $_columns
    @for $_numerator from 1 through $_denominator
      @if $_numerator != $_denominator or $_denominator == 1
        .u-#{$_numerator}\/#{$_denominator}#{$_bp-suffix}
          width: ($_numerator / $_denominator * 100%) !important

        @if $u-widths__offset-push--enabled and $_denominator > 1
          .u-push--#{$_numerator}\/#{$_denominator}#{$_bp-suffix}
            left: ($_numerator / $_denominator * 100%) !important

        @if $u-widths__offset-pull--enabled and $_denominator > 1
          .u-pull--#{$_numerator}\/#{$_denominator}#{$_bp-suffix}
            right: ($_numerator / $_denominator * 100%) !important

  @if $u-widths__offset-push--enabled
    [class^="u-push"],
    [class*=" u-push"]
      position: relative
      right: auto !important

    .u-push--0#{$_bp-suffix}
      left: auto !important

  @if $u-widths__offset-pull--enabled
    [class^="u-pull"],
    [class*=" u-pull"]
      position: relative
      left: auto !important

    .u-pull--0#{$_bp-suffix}
      right: auto !important

// Build classes
// --------------------------------------------------

@if $u-widths--enabled
  +u-widths($u-widths__fractions)

// Build classes with breakpoint suffixes
// --------------------------------------------------

@if $u-widths--enabled and $u-widths__bp--enabled
  @each $_bp-name, $_bp-value in $u-widths__bp
    +t-mq($from: $_bp-name)
      +u-widths($u-widths__fractions, s-core-string-breakpoint($_bp-name))
