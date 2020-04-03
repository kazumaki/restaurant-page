!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],l=n.base?i[0]+n.base:i[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:b(f,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function m(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function b(e,n){var t,r,o;if(n.singleton){var i=v++;t=p||(p=s(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=s(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=l(e,n),s=0;s<t.length;s++){var u=c(t[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center; }\r\n  #content .tabs {\r\n    width: 100%; }\r\n\r\n.tab-list {\r\n  list-style-type: none;\r\n  display: flex;\r\n  background-color: grey; }\r\n  .tab-list li {\r\n    background-color: lightgray;\r\n    padding: 20px; }\r\n  .tab-list li:hover {\r\n    background-color: grey; }\r\n  .tab-list .selected {\r\n    background-color: white !important; }\r\n\r\n#tab-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-width: 500px;\r\n  background-color: lightgrey;\r\n  border-radius: 10px;\r\n  padding: 20px; }\r\n  #tab-content span {\r\n    text-align: center; }\r\n  #tab-content img {\r\n    width: 80%;\r\n    padding: 10px; }\r\n  #tab-content form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 400px; }\r\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n,t){"use strict";t.r(n);var r=function(){document.getElementById("content").innerHTML="<div class='tabs'>\n    <ul class='tab-list'>\n      <li id=\"home\">Home</li>\n      <li id=\"menu\">Menu</li>\n      <li id=\"contact\">Contact</li>\n    </ul>\n  </div>\n  <div id='tab-content'>\n\n  </div>"},o=function(){document.getElementById("tab-content").innerHTML="<h1>The greatest restaurant</h1>\n  <img src='../src/restaurant-chocolat.jpg'>\n  <span>Welcome to the greatest restaurant in the world. Enjoy your meal and take care, it's addicting.</span>"},i=function(){document.getElementById("tab-content").innerHTML="<h1>Restaurant menu</h1>\n  <ul>\n    <li>Salmon Pasta - $8</li>\n    <li>Fish Chip Cheese - $22</li>\n    <li>Kerupuk Udang - $15</li>\n    <li>New York Style Pizza - $7</li>\n  </ul>"},a=function(){document.getElementById("tab-content").innerHTML="\n  <form>\n    <label for='name'>Name</label>\n    <input type='text' name='name' id='name'>\n    <label for='name'>Message</label>\n    <textarea></textarea>\n    <input type='submit' id='submit' value='Send Message'>\n  </form>\n  "},c=(t(0),function(){return document.getElementById("home")}),l=function(){return document.getElementById("menu")},s=function(){return document.getElementById("contact")},u=function(){o(),c().classList.add("selected"),l().classList.remove("selected"),s().classList.remove("selected")},d=function(){i(),l().classList.add("selected"),c().classList.remove("selected"),s().classList.remove("selected")},f=function(){a(),s().classList.add("selected"),l().classList.remove("selected"),c().classList.remove("selected")};window.onload=function(){r();var e={home:document.getElementById("home"),menu:document.getElementById("menu"),contact:document.getElementById("contact")};e.home.addEventListener("click",u,!1),e.menu.addEventListener("click",d,!1),e.contact.addEventListener("click",f,!1),u()}}]);