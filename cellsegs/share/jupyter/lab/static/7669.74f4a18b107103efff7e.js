"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[7669],{17669:(e,t,n)=>{n.r(t);n.d(t,{solr:()=>p});var r=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/;var i=/[\|\!\+\-\*\?\~\^\&]/;var u=/^(OR|AND|NOT|TO)$/i;function o(e){return parseFloat(e).toString()===e}function a(e){return function(t,n){var r=false,i;while((i=t.next())!=null){if(i==e&&!r)break;r=!r&&i=="\\"}if(!r)n.tokenize=s;return"string"}}function l(e){return function(t,n){if(e=="|")t.eat(/\|/);else if(e=="&")t.eat(/\&/);n.tokenize=s;return"operator"}}function f(e){return function(t,n){var i=e;while((e=t.peek())&&e.match(r)!=null){i+=t.next()}n.tokenize=s;if(u.test(i))return"operator";else if(o(i))return"number";else if(t.peek()==":")return"propertyName";else return"string"}}function s(e,t){var n=e.next();if(n=='"')t.tokenize=a(n);else if(i.test(n))t.tokenize=l(n);else if(r.test(n))t.tokenize=f(n);return t.tokenize!=s?t.tokenize(e,t):null}const p={startState:function(){return{tokenize:s}},token:function(e,t){if(e.eatSpace())return null;return t.tokenize(e,t)}}}}]);
//# sourceMappingURL=7669.74f4a18b107103efff7e.js.map?v=74f4a18b107103efff7e