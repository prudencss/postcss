/*---
title: COLORS
section: settings
---
Foundation colors as color
*/

$u-colors--enabled: map(feature-switches, utilities, colors) !default

$u-colors__maps: (brand, state, neutral, vendor) !default
$u-color__map--brand: (primary, secondary, accent) !default
$u-color__map--state: (info, success, warning, disabled) !default
$u-color__map--neutral: (foreground, background) !default
$u-color__map--vendor: (facebook, facebookold, twitter, youtube, instagrammagenta, instagramblue, instagrampurple, instagramorange, instagramyellow, googleblue, googlered, googleyellow, googlegreen, pinterest, googleplus, linkedin, vimeoblue, tumblr, snapchat, whatsappgreen, whatsappteal1, whatsappteal2, mastodon, apple, amazon, microsoftred, microsoftgreen, microsoftblue, microsoftyellow, periscope, foursquarepink, foursquarenavy, foursquareblue, yelp, swarm, medium, skypeblue, skypedkblue, android, twitch, stumbleupon, flickrpink, flickrblue, yahoo, soundcloud, spotifygreen, spotifydarkgreen, dribbble, slackpurple, slackblue, slackgreen, slackred, slackyellow, reddit, deviantart, pocket, quora, quorablue, slideshareorange, slideshareblue, fivehundredpx, vk, listlyorange, listlyblue, vine, steam, discord, telegram, clarity, homeadvisor, houzz, angieslist) !default

/*---
  section: general
*/

@if $u-colors--enabled
  @each $_color-group__name in $u-colors__maps
    @each $_color__name in $u-color__map--#{$_color-group__name}
      .u-color__#{$_color-group__name}--#{$_color-name}
        color: map(colors, #{$_color-group__name}, #{$_color__name})

      .u-bg-color__#{$_color-group__name}--#{$_color-name}
        background-color: map(colors, #{$_color-group__name}, #{$_color__name})
