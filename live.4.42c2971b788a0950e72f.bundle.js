(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(e,t,n){var r=n(178);"string"==typeof r&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(5)(r,a);r.locals&&(e.exports=r.locals)},178:function(e,t,n){},375:function(e,t,n){"use strict";n.r(t),n.d(t,"CommentsList",function(){return b});var r=n(2),a=n.n(r),c=n(372),o=n(373);n(177);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m,u=c.a.ul({}),f=c.a.li({enter:{opacity:1},exit:{opacity:0}}),p=new o.a,b=Object(r.memo)(function(){var e=l(Object(r.useState)([]),2),t=e[0],n=e[1];return Object(r.useEffect)(function(){m||((m=new WebSocket("ws://".concat(window.location.hostname,":").concat(void 0))).onmessage=function(e){var t=e.data,r=JSON.parse(t);if(Array.isArray(r)&&0!==r.length)if("Rate limit exceeded"===r[0].message);else if("hello:)"===r[0].message);else{var a=r.reverse().map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{createdAt:p.format(e.createdAt)})});n(function(e){return e.concat(a)})}})},[]),a.a.createElement("div",{className:"comments-list"},a.a.createElement("div",{className:"comments-list-title"},a.a.createElement("span",null,"Private Mode"),a.a.createElement("span",{className:"comments-list-total"},t.length," comments")),a.a.createElement(u,{className:"comments-list-ul"},a.a.createElement("div",null,t.map(function(e){var t=e.id,n=e.avatar,r=e.text,c=e.screenName,o=e.createdAt;return a.a.createElement(f,{key:t,className:"comments-list-li"},n&&a.a.createElement("img",{src:n,className:"comments-list-li-avatar"}),a.a.createElement("div",{className:"comments-list-li-body"},a.a.createElement("div",{className:"comments-list-li-body-info"},a.a.createElement("span",{className:"comments-list-li-screen-name"},"@",c),a.a.createElement("span",{className:"comments-list-li-time-ago"},o)),a.a.createElement("span",{className:"comments-list-li-comment"},r)))}))))})}}]);