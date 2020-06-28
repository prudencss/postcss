/*---
title: RESET
section: settings
---

A very simple reset that sits on top of Normalize.css.

*/

$g-reset__spacing--vertical: map(spaces, m) !default
$g-reset__spacing--horizontal: map(spaces, m) !default

/*---
section: content
*/

body,
h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
p,
pre,
dl,
dd,
ol,
ul,
figure,
hr,
fieldset,
legend
  margin: 0
  padding: 0

/*---
section: lists
---

Remove trailing margins from nested lists.

*/

li >
  ol,
  ul
    margin-bottom: 0

/*---
section: tables
---

Remove default table spacing.

*/

table
  border-collapse: collapse
  border-spacing: 0

/*---
section: vertical spacing
*/

address,
h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
p,
pre,
dl,
ol,
ul,
figure,
hr,
table,
fieldset
  margin-bottom: $g-reset__spacing--vertical

/*---
section: list indentation
---
Consistent indentation for lists.
*/

dd,
ol,
ul
  margin-left: $g-reset__spacing--horizontal
