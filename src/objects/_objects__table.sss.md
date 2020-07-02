/*---
title: TABLE
section: settings
---
A simple object for manipulating the structure of HTML `table`s.
*Params:*
* SPACE .............................. Horizontal separation between cells

$o-table--enabled: map(feature-switches, objects, table) !default

$o-table__space: map(spaces, none) !default

$o-table_mod-spaces--enabled: true !default
$o-table__mod-spaces: (none, xs, s, m, l, xl)

$o-table__mod-fixed--enabled: true !default

/*---
section: mixin
*/

=o-table
  width: 100%

=o-table__cell($_space-value: $o-table__space)
  padding: $_space-value

// Space modifiers
// --------------------------------------------------

=o-table__mod-space($_space-name: "none", $_space-value: map(spaces, none))
  .o-table--space-#{$_space-name}
    th,
    td
      padding: $_space-value

// Fixed modifier
// --------------------------------------------------

=o-table--fixed
  table-layout: fixed

// Unset as mixin
// --------------------------------------------------

=o-table--unset
  width: auto

=o-table__cell--unset
  padding: inherit

/*---
section: general
*/

@if $o-table--enabled
  .o-table
    +o-table

    th,
    td
      +o-table__cell

/*---
section: spaces
*/

@if $o-table--enabled and $o-table_mod-spaces--enabled
  @each $_space-name in $o-table__mod-spaces
    +o-table__mod-space($_space-name, map(spaces, #{$_space-name}))

/*---
section: fixed
*/

@if $o-table--enabled and $o-table__mod-fixed--enabled
  .o-table--fixed
    +o-table--fixed

