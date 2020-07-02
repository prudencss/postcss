/*---
title: BOX
section: settings
---
The box object boxes off content.
Extend with cosmetic styles in the components layer.
*/

$o-box--enabled: map(feature-switches, objects, block) !default

/*---
section: mixin
*/

=o-box
  display: block

  +t-clearfix

=o-box--unset
  display: inherit

  +t-clearfix--unset

/*---
section: general
*/

@if $o-box--enabled
  .o-box
    +o-box

