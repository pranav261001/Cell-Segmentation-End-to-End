"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[2363],{32363:(e,t,n)=>{n.r(t);n.d(t,{swift:()=>A});function r(e){var t={};for(var n=0;n<e.length;n++)t[e[n]]=true;return t}var i=r(["_","var","let","actor","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","isolated","nonisolated","catch","do","rethrows","throw","throws","async","await","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]);var a=r(["var","let","actor","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]);var o=r(["true","false","nil","self","super","_"]);var u=r(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]);var c="+-/*%=|&<>~^?!";var f=":;,.(){}[]";var l=/^\-?0b[01][01_]*/;var s=/^\-?0o[0-7][0-7_]*/;var p=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/;var d=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/;var v=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/;var h=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;var m=/^\#[A-Za-z]+/;var _=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;function k(e,t,n){if(e.sol())t.indented=e.indentation();if(e.eatSpace())return null;var r=e.peek();if(r=="/"){if(e.match("//")){e.skipToEnd();return"comment"}if(e.match("/*")){t.tokenize.push(x);return x(e,t)}}if(e.match(m))return"builtin";if(e.match(_))return"attribute";if(e.match(l))return"number";if(e.match(s))return"number";if(e.match(p))return"number";if(e.match(d))return"number";if(e.match(h))return"property";if(c.indexOf(r)>-1){e.next();return"operator"}if(f.indexOf(r)>-1){e.next();e.match("..");return"punctuation"}var k;if(k=e.match(/("""|"|')/)){var y=w.bind(null,k[0]);t.tokenize.push(y);return y(e,t)}if(e.match(v)){var b=e.current();if(u.hasOwnProperty(b))return"type";if(o.hasOwnProperty(b))return"atom";if(i.hasOwnProperty(b)){if(a.hasOwnProperty(b))t.prev="define";return"keyword"}if(n=="define")return"def";return"variable"}e.next();return null}function y(){var e=0;return function(t,n,r){var i=k(t,n,r);if(i=="punctuation"){if(t.current()=="(")++e;else if(t.current()==")"){if(e==0){t.backUp(1);n.tokenize.pop();return n.tokenize[n.tokenize.length-1](t,n)}else--e}}return i}}function w(e,t,n){var r=e.length==1;var i,a=false;while(i=t.peek()){if(a){t.next();if(i=="("){n.tokenize.push(y());return"string"}a=false}else if(t.match(e)){n.tokenize.pop();return"string"}else{t.next();a=i=="\\"}}if(r){n.tokenize.pop()}return"string"}function x(e,t){var n;while(true){e.match(/^[^/*]+/,true);n=e.next();if(!n)break;if(n==="/"&&e.eat("*")){t.tokenize.push(x)}else if(n==="*"&&e.eat("/")){t.tokenize.pop()}}return"comment"}function b(e,t,n){this.prev=e;this.align=t;this.indented=n}function g(e,t){var n=t.match(/^\s*($|\/[\/\*]|[)}\]])/,false)?null:t.column()+1;e.context=new b(e.context,n,e.indented)}function z(e){if(e.context){e.indented=e.context.indented;e.context=e.context.prev}}const A={startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,t){var n=t.prev;t.prev=null;var r=t.tokenize[t.tokenize.length-1]||k;var i=r(e,t,n);if(!i||i=="comment")t.prev=n;else if(!t.prev)t.prev=i;if(i=="punctuation"){var a=/[\(\[\{]|([\]\)\}])/.exec(e.current());if(a)(a[1]?z:g)(t,e)}return i},indent:function(e,t,n){var r=e.context;if(!r)return 0;var i=/^[\]\}\)]/.test(t);if(r.align!=null)return r.align-(i?1:0);return r.indented+(i?0:n.unit)},languageData:{indentOnInput:/^\s*[\)\}\]]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}}}}]);
//# sourceMappingURL=2363.958d1bbff442bb3a3c07.js.map?v=958d1bbff442bb3a3c07