import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
 margin:0;
 padding:0;
 border:0;
 outline:0;
 font-size:100%;
 vertical-align:baseline;
 background:transparent;

 body {
 line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
 display:block;
}

nav ul {
 list-style:none;
}

blockquote, q {
 quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
 content:'';
 content:none;
}
a {
 margin:0;
 padding:0;
 font-size:100%;
 vertical-align:baseline;
 background:transparent;
}}`

export default GlobalStyle

