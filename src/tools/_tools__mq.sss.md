/*---
title: MQ
section: settings
---
Based on https://github.com/sass-mq/sass-mq
*/

$t-sass-mq__base-font-size: map(font-sizes, base) !default
$t-sass-mq__media-type: all !default

=t-mq($from: false, $until: false, $and: false, $media-type: $t-sass-mq__media-type)
  $min-width: 0
  $max-width: 0
  $media-query: ""

  // From: this breakpoint (inclusive)

  @if $from
    @if type-of($from) == number
      $min-width: calc($from * 1px)
    @else
      $min-width: map(breakpoints, $from)

  // Until: that breakpoint (exclusive)

  @if $until
    @if type-of($until) == number
      $max-width: calc($until * 1px)
    @else
      $max-width: calc(map(breakpoints, $until) - 1px)

  // Query building

  @if $min-width != 0
    $media-query: "#{$media-query} and (min-width: #{$min-width})"

  @if $max-width != 0
    $media-query: "#{$media-query} and (max-width: #{$max-width})"

  @if $and
    $media-query: "#{$media-query} and #{$and}"

  @media #{$media-type + $media-query}
    @content
