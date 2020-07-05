/*---
title: LIST BARE
section: settings
---
Strip list-like appearance from lists by removing their bullets, and any indentation.

$o-list-bare--enabled: map(feature-switches, objects, list-bare) !default

/*---
section: mixin
*/

// Object as a mixin
// --------------------------------------------------

=o-list-bare
  list-style: none
  margin-left: 0

// Unset as mixin
// --------------------------------------------------

=o-list-bare--unset
  list-style: inherit
  margin-left: inherit

/*---
section: general
*/

@if $o-list-bare--enabled
  .o-list-bare
    +o-list-bare

