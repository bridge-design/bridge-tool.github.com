(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},IQ4t:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"name":"Bridge the gap between design and development","basepath":"https://bridge-tool.github.io","description":"Bridge is a tool to bridge the gap between design and development.","keywords":["design systems","design","development","ui"],"type":"website","image":"https://bridge-tool.github.io/bridge.png"}}}}')},R3xB:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=(n("MIFh"),n("AqHK"),n("sc67"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("DrhF"),{mobile:0,tablet:737,desktop:1195}),c=function(e){return e/16},u=Object.freeze(["\n          @media screen and (min-width: ","em) {\n            ","\n          }\n        "]),s=Object.freeze(["\n        @media screen and (min-width: ","em) and (max-width: ","em) {\n          ","\n        }\n      "]),l=function(e,t){return t in e?e[t]:(console.error('styled-components-breakpoint: Breakpoint "'+t+'" was not found.'),0)},f=function(e){return function(t,n){return function(r){for(var o=[],a=arguments.length-1;a-- >0;)o[a]=arguments[a+1];if(t&&n){var f=l(e,t),p=l(e,n);return Object(i.css)(s,c(f),c(p-1),i.css.apply(void 0,[r].concat(o)))}var d=l(e,t);return 0===d?i.css.apply(void 0,[r].concat(o)):Object(i.css)(u,c(d),i.css.apply(void 0,[r].concat(o)))}}};function p(e,t,n,r){var o=f(e);if("object"!=typeof t){var a=n(t);return"string"==typeof a||Array.isArray(a)?a:Object(i.css)(a)}return Object.keys(t).map((function(e){var i=o(e),a=t[e];if(void 0===a)return"";var c=n(a,r);return"string"==typeof c||Array.isArray(c)?i([],c):i(c)}))}var d,m,h=function(e,t){return function(n){for(var r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];return function(o){return f((i=o.theme)&&i.breakpoints?i.breakpoints:a)(e,t)(n,r);var i}}},b=n("aAma"),y=Object(i.default)("footer").withConfig({displayName:"Footer__Wrapper",componentId:"zeybkt-0"})(["height:100px;padding:24px 0;background-color:#222;border-top:1px solid rgba(0,0,0,0.38);color:rgba(255,255,255,0.54);font-size:14px;line-height:24px;a{color:#fff;text-decoration:none;:hover{text-decoration:underline;}}"]),g=Object(i.default)("div").withConfig({displayName:"Footer__Inner",componentId:"zeybkt-1"})(["display:flex;flex-flow:nowrap row;@media (max-width:648px){flex-flow:nowrap column;}"]),v=Object(i.default)("div").withConfig({displayName:"Footer__Base",componentId:"zeybkt-2"})(["@media (max-width:648px){margin:0;display:flex;flex-flow:nowrap row;justify-content:center;text-align:center;> *:first-child{margin-right:8px;}}"]),w=Object(i.default)(v).withConfig({displayName:"Footer__Right",componentId:"zeybkt-3"})(["margin-left:auto;text-align:right;"]),x=function(){return o.a.createElement(y,null,o.a.createElement(b.a,{maxWidth:1200},o.a.createElement(g,null,o.a.createElement(w,null,o.a.createElement("div",null,"Copyright ©"," ","Bridge Tool, 2020."),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/bridge-tool/bridge-tool.github.com/blob/develop/LICENSE"},"CC BY-NC")," Licensed.")))))},T=(n("pJf4"),n("gu/5"),n("eoYm"),n("qloh"),n("Wbzz")),O=(n("YbXK"),n("eMsz"),d=1,m=new WeakMap,Object(i.default)("nav").withConfig({displayName:"Navigation__Wrapper",componentId:"sc-1kzyqod-0"})(["display:flex;align-items:center;background-color:#663399;color:#fff;overflow:hidden;"]),Object(i.default)("div").withConfig({displayName:"Navigation__Inner",componentId:"sc-1kzyqod-1"})(["display:flex;flex-flow:nowrap row;@media (max-width:648px){flex-flow:nowrap column;}"]),Object(i.default)(T.Link).withConfig({displayName:"Navigation__Brand",componentId:"sc-1kzyqod-2"})(["margin-right:24px;display:flex;align-items:center;flex:0 0 auto;color:#fff;font-size:20px;line-height:24px;text-decoration:none;text-transform:uppercase;font-weight:900;@media (max-width:648px){margin:8px 0;justify-content:center;}:hover{text-decoration:none;}"]),Object(i.default)("div").withConfig({displayName:"Navigation__Nav",componentId:"sc-1kzyqod-3"})(["display:flex;flex-flow:nowrap row;flex:1 1 auto;align-items:center;@media (max-width:648px){margin:0 -24px;justify-content:center;overflow-x:auto;}"]),Object(i.default)(T.Link).withConfig({shouldForwardProp:function(e){return!["isActive"].includes(e)}}).withConfig({displayName:"Navigation__Item",componentId:"sc-1kzyqod-4"})(["padding:16px 8px;color:#fff;font-weight:500;line-height:24px;opacity:",";text-decoration:none;:hover{opacity:1;text-decoration:none;}@media (max-width:648px){padding:8px;}"],(function(e){return e.isActive?"1":"0.6"})),Object(i.default)("div").withConfig({displayName:"Navigation__Social",componentId:"sc-1kzyqod-5"})(["margin:0;display:flex;flex-flow:nowrap row;align-items:center;@media (max-width:648px){display:none;}"]),n("WRJ3"));function C(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(['\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  body {\n    background-color: #EFF1F3;\n    color: #292828;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 16px 0;\n  }\n\n  h2 {\n    margin-top: 32px;\n    margin-bottom: 16px;\n    padding-bottom: 8px\n    border-bottom: 1px dashed rgba(0, 0, 0, 0.13);\n  }\n\n  p {\n    margin-bottom: 16px;\n  }\n\n  a {\n    :hover,\n    :focus {}\n  }\n\n  ul, ol {\n    margin-bottom: 16px;\n    padding-left: 16px;\n\n    ul, ol {\n      margin-top: 8px;\n      margin-bottom: 8px;\n    }\n  }\n\n  pre {\n    max-width: 100%;\n    overflow: auto;\n  }\n\n  blockquote {\n    padding-left: 16px;\n    margin-left: 8px;\n    border-left: 4px solid rgba(0, 0, 0, 0.13)\n  }\n']);return C=function(){return e},e}var E=Object(i.createGlobalStyle)(C()),k={},j=function(e){var t=e.children;return o.a.createElement(i.ThemeProvider,{theme:k},o.a.createElement(o.a.Fragment,null,o.a.createElement(O.Normalize,null),o.a.createElement(E,null),t))},A=(n("xtjI"),n("4DPX"),n("IQ4t")),S=n("qhky");function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){var t=e.location.pathname,n=e.pageContext,r=e.seo,i=P(P(P({},A.data.site.siteMetadata),r),n.frontmatter),a=i.name,c=i.basepath,u=i.title,s=i.description,l=i.keywords,f=i.type,p=i.image,d=""+c+t;return o.a.createElement(S.a,{titleTemplate:"%s • "+a,defaultTitle:a},o.a.createElement("html",{lang:"en"}),o.a.createElement("title",null,u),o.a.createElement("meta",{name:"description",content:s}),o.a.createElement("meta",{name:"keywords",content:null==l?void 0:l.join(", ")}),o.a.createElement("link",{rel:"canonical",href:d}),o.a.createElement("meta",{property:"og:site_name",content:a}),o.a.createElement("meta",{property:"og:title",content:u}),o.a.createElement("meta",{property:"og:description",content:s}),o.a.createElement("meta",{property:"og:type",content:f}),o.a.createElement("meta",{property:"og:image",content:p}),o.a.createElement("meta",{property:"og:url",content:d}))};function N(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    max-width: 1200px;\n    min-height: 100vh;\n    margin: 0 auto -100px auto;\n  "]);return N=function(){return e},e}_.defaultProps={pageContext:{},seo:{}};var M=i.default.div.withConfig({displayName:"Site__Main",componentId:"sc-4ji0qz-0"})(["",""],h("desktop")(N())),L=function(e){var t=e.location,n=e.pageContext,r=(e.path,e.seo),i=e.children;return o.a.createElement(j,null,o.a.createElement(_,{location:t,pageContext:n,seo:r}),o.a.createElement(M,null,i),o.a.createElement(x,null))};L.defaultProps={pageContext:{},seo:{}}},SGlo:function(e,t,n){"use strict";var r=n("rj/q"),o=n("N+BI").getWeak,i=n("1a8y"),a=n("BjK0"),c=n("xa9o"),u=n("yde8"),s=n("Wadk"),l=n("qDzq"),f=n("O1i0"),p=s(5),d=s(6),m=0,h=function(e){return e._l||(e._l=new b)},b=function(){this.a=[]},y=function(e,t){return p(e.a,(function(e){return e[0]===t}))};b.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var n=y(this,e);n?n[1]=t:this.a.push([e,t])},delete:function(e){var t=d(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,n,i){var s=e((function(e,r){c(e,s,t,"_i"),e._t=t,e._i=m++,e._l=void 0,null!=r&&u(r,n,e[i],e)}));return r(s.prototype,{delete:function(e){if(!a(e))return!1;var n=o(e);return!0===n?h(f(this,t)).delete(e):n&&l(n,this._i)&&delete n[this._i]},has:function(e){if(!a(e))return!1;var n=o(e);return!0===n?h(f(this,t)).has(e):n&&l(n,this._i)}}),s},def:function(e,t,n){var r=o(i(t),!0);return!0===r?h(e).set(t,n):r[e._i]=n,e},ufstore:h}},WRJ3:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Normalize=t.normalize=void 0;var r=n("vOnD"),o=(0,r.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']);t.normalize=o;var i=(0,r.createGlobalStyle)(o);t.Normalize=i;var a=o;t.default=a},aAma:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("vOnD"),o=n("17x9"),i=n.n(o),a=Object(r.default)("div").withConfig({displayName:"Container",componentId:"sc-1x9l97x-0"})(["margin:0 auto;padding:0 24px;max-width:","px;width:100%;"],(function(e){return e.maxWidth}));a.propTypes={maxWidth:i.a.number},a.defaultProps={maxWidth:800}},bmMU:function(e,t,n){n("Ll4R"),n("Ggvi"),n("q8oJ"),n("C9fy"),n("Kz6e"),n("klQ5"),n("MIFh"),n("ToIb"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("xJgp");var r="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(o&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],n.get(u.value[0])))return!1;return!0}if(i&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(t[u]!==n[u])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,s[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],n[s[u]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},eMsz:function(e,t,n){"use strict";var r,o=n("emib"),i=n("Wadk")(0),a=n("IYdN"),c=n("N+BI"),u=n("k5Iv"),s=n("SGlo"),l=n("BjK0"),f=n("O1i0"),p=n("O1i0"),d=!o.ActiveXObject&&"ActiveXObject"in o,m=c.getWeak,h=Object.isExtensible,b=s.ufstore,y=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(e){if(l(e)){var t=m(e);return!0===t?b(f(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return s.def(f(this,"WeakMap"),e,t)}},v=e.exports=n("94Pd")("WeakMap",y,g,s,!0,!0);p&&d&&(u((r=s.getConstructor(y,"WeakMap")).prototype,g),c.NEED=!0,i(["delete","has","get","set"],(function(e){var t=v.prototype,n=t[e];a(t,e,(function(t,o){if(l(t)&&!h(t)){this._f||(this._f=new r);var i=this._f[e](t,o);return"set"==e?this:i}return n.call(this,t,o)}))})))},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,o,i,a,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("MgzW"),b=n.n(h),y="bodyAttributes",g="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",O="href",C="http-equiv",E="innerHTML",k="itemprop",j="name",A="property",S="rel",I="src",P="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",N="defer",M="encodeSpecialCharacters",L="onChangeClientState",q="titleTemplate",B=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),R=[w.NOSCRIPT,w.SCRIPT,w.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=V(e,w.TITLE),n=V(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=V(e,_);return t||r||void 0},U=function(e){return V(e,L)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===S&&"canonical"===e[n].toLowerCase()||u===S&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==E&&c!==T&&c!==k||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=b()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},V=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,o),ce(f,p);var d={baseTag:se(w.BASE,n),linkTags:se(w.LINK,i),metaTags:se(w.META,a),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[m.a.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+G(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=z[e]||e;if(n===E||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===E||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(g,o,r),link:pe(w.LINK,i,r),meta:pe(w.META,a,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,u,r),style:pe(w.STYLE,s,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:Z([O,P],e),bodyAttributes:X(y,e),defer:V(e,N),encode:V(e,M),htmlAttributes:X(g,e),linkTags:Q(w.LINK,[S,O],e),metaTags:Q(w.META,[j,x,C,A,k],e),noscriptTags:Q(w.NOSCRIPT,[E],e),onChangeClientState:U(e),scriptTags:Q(w.SCRIPT,[I,E],e),styleTags:Q(w.STYLE,[T],e),title:J(e),titleAttributes:X(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),he=(o=me,a=i=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return H({},o,((t={})[r.type]=a,t.titleAttributes=H({},i),t));case w.BODY:return H({},o,{bodyAttributes:H({},i)});case w.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(o,r)},W(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind}).call(this,n("yLpj"))},qloh:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"name":"Bridge the gap between design and development"}}}}')},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-773eccd771d3ff571891.js.map