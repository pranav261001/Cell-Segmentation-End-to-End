"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[4419],{54419:(n,e,t)=>{t.r(e);t.d(e,{cmake:()=>u});var r=/({)?[a-zA-Z0-9_]+(})?/;function i(n,e){var t,r,i=false;while(!n.eol()&&(t=n.next())!=e.pending){if(t==="$"&&r!="\\"&&e.pending=='"'){i=true;break}r=t}if(i){n.backUp(1)}if(t==e.pending){e.continueString=false}else{e.continueString=true}return"string"}function a(n,e){var t=n.next();if(t==="$"){if(n.match(r)){return"variableName.special"}return"variable"}if(e.continueString){n.backUp(1);return i(n,e)}if(n.match(/(\s+)?\w+\(/)||n.match(/(\s+)?\w+\ \(/)){n.backUp(1);return"def"}if(t=="#"){n.skipToEnd();return"comment"}if(t=="'"||t=='"'){e.pending=t;return i(n,e)}if(t=="("||t==")"){return"bracket"}if(t.match(/[0-9]/)){return"number"}n.eatWhile(/[\w-]/);return null}const u={startState:function(){var n={};n.inDefinition=false;n.inInclude=false;n.continueString=false;n.pending=false;return n},token:function(n,e){if(n.eatSpace())return null;return a(n,e)}}}}]);
//# sourceMappingURL=4419.558042c14c1289806097.js.map?v=558042c14c1289806097