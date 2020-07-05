/*---
title: LIST IN-LINE
section: settings
---
The list-inline object displays a list of items in one line.
*/

$o-list-inline--enabled: true !default

/*---
section: mixin
*/

// Object as a mixin
// --------------------------------------------------

=o-list-inline
  font-size: 0

  > *
    font-size: pxToRem(map(settings, coreFontSize))
    display: inline-block

// Unset as mixin
// --------------------------------------------------

=o-list-inline--unset
  font-size: inherit

  > *
    font-size: inherit
    display: inherit

/*---
section: general
*/

// Object selector output
// --------------------------------------------------

@if $o-list-inline--enabled
  .o-list-inline
    +o-list-inline

