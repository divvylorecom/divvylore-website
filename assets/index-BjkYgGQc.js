function _p(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Np(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sc={exports:{}},gi={},kc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),zp=Symbol.for("react.portal"),$p=Symbol.for("react.fragment"),Rp=Symbol.for("react.strict_mode"),Lp=Symbol.for("react.profiler"),Tp=Symbol.for("react.provider"),Ip=Symbol.for("react.context"),Op=Symbol.for("react.forward_ref"),Mp=Symbol.for("react.suspense"),Fp=Symbol.for("react.memo"),Ap=Symbol.for("react.lazy"),Ma=Symbol.iterator;function Dp(e){return e===null||typeof e!="object"?null:(e=Ma&&e[Ma]||e["@@iterator"],typeof e=="function"?e:null)}var Cc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ec=Object.assign,jc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=jc,this.updater=n||Cc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pc(){}Pc.prototype=qn.prototype;function Ts(e,t,n){this.props=e,this.context=t,this.refs=jc,this.updater=n||Cc}var Is=Ts.prototype=new Pc;Is.constructor=Ts;Ec(Is,qn.prototype);Is.isPureReactComponent=!0;var Fa=Array.isArray,_c=Object.prototype.hasOwnProperty,Os={current:null},Nc={key:!0,ref:!0,__self:!0,__source:!0};function zc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)_c.call(t,r)&&!Nc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:qr,type:e,key:i,ref:l,props:o,_owner:Os.current}}function Up(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function Bp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Aa=/\/+/g;function Bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bp(""+e.key):t.toString(36)}function Po(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case qr:case zp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Bi(l,0):r,Fa(o)?(n="",e!=null&&(n=e.replace(Aa,"$&/")+"/"),Po(o,t,n,"",function(u){return u})):o!=null&&(Ms(o)&&(o=Up(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Aa,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Fa(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Bi(i,s);l+=Po(i,t,n,a,o)}else if(a=Dp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Bi(i,s++),l+=Po(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function so(e,t,n){if(e==null)return e;var r=[],o=0;return Po(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Wp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},_o={transition:null},Vp={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:_o,ReactCurrentOwner:Os};function $c(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:so,forEach:function(e,t,n){so(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return so(e,function(){t++}),t},toArray:function(e){return so(e,function(t){return t})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=qn;O.Fragment=$p;O.Profiler=Lp;O.PureComponent=Ts;O.StrictMode=Rp;O.Suspense=Mp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;O.act=$c;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ec({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Os.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)_c.call(t,a)&&!Nc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:qr,type:e.type,key:o,ref:i,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:Ip,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tp,_context:e},e.Consumer=e};O.createElement=zc;O.createFactory=function(e){var t=zc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Op,render:e}};O.isValidElement=Ms;O.lazy=function(e){return{$$typeof:Ap,_payload:{_status:-1,_result:e},_init:Wp}};O.memo=function(e,t){return{$$typeof:Fp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=_o.transition;_o.transition={};try{e()}finally{_o.transition=t}};O.unstable_act=$c;O.useCallback=function(e,t){return ke.current.useCallback(e,t)};O.useContext=function(e){return ke.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};O.useEffect=function(e,t){return ke.current.useEffect(e,t)};O.useId=function(){return ke.current.useId()};O.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ke.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};O.useRef=function(e){return ke.current.useRef(e)};O.useState=function(e){return ke.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ke.current.useTransition()};O.version="18.3.1";kc.exports=O;var N=kc.exports;const Re=Np(N),bp=_p({__proto__:null,default:Re},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp=N,Qp=Symbol.for("react.element"),Gp=Symbol.for("react.fragment"),Yp=Object.prototype.hasOwnProperty,Kp=Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xp={key:!0,ref:!0,__self:!0,__source:!0};function Rc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Yp.call(t,r)&&!Xp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Qp,type:e,key:i,ref:l,props:o,_owner:Kp.current}}gi.Fragment=Gp;gi.jsx=Rc;gi.jsxs=Rc;Sc.exports=gi;var f=Sc.exports,Lc={exports:{}},Oe={},Tc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var L=z.length;z.push(R);e:for(;0<L;){var B=L-1>>>1,F=z[B];if(0<o(F,R))z[B]=R,z[L]=F,L=B;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],L=z.pop();if(L!==R){z[0]=L;e:for(var B=0,F=z.length,ie=F>>>1;B<ie;){var Z=2*(B+1)-1,te=z[Z],ze=Z+1,Fe=z[ze];if(0>o(te,L))ze<F&&0>o(Fe,te)?(z[B]=Fe,z[ze]=L,B=ze):(z[B]=te,z[Z]=L,B=Z);else if(ze<F&&0>o(Fe,L))z[B]=Fe,z[ze]=L,B=ze;else break e}}return R}function o(z,R){var L=z.sortIndex-R.sortIndex;return L!==0?L:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],h=1,c=null,m=3,v=!1,y=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=z)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function S(z){if(x=!1,g(z),!y)if(n(a)!==null)y=!0,xt(j);else{var R=n(u);R!==null&&Gt(S,R.startTime-z)}}function j(z,R){y=!1,x&&(x=!1,p(P),P=-1),v=!0;var L=m;try{for(g(R),c=n(a);c!==null&&(!(c.expirationTime>R)||z&&!Q());){var B=c.callback;if(typeof B=="function"){c.callback=null,m=c.priorityLevel;var F=B(c.expirationTime<=R);R=e.unstable_now(),typeof F=="function"?c.callback=F:c===n(a)&&r(a),g(R)}else r(a);c=n(a)}if(c!==null)var ie=!0;else{var Z=n(u);Z!==null&&Gt(S,Z.startTime-R),ie=!1}return ie}finally{c=null,m=L,v=!1}}var _=!1,C=null,P=-1,D=5,T=-1;function Q(){return!(e.unstable_now()-T<D)}function He(){if(C!==null){var z=e.unstable_now();T=z;var R=!0;try{R=C(!0,z)}finally{R?q():(_=!1,C=null)}}else _=!1}var q;if(typeof d=="function")q=function(){d(He)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Qt=Qe.port2;Qe.port1.onmessage=He,q=function(){Qt.postMessage(null)}}else q=function(){k(He,0)};function xt(z){C=z,_||(_=!0,q())}function Gt(z,R){P=k(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,xt(j))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var L=m;m=R;try{return z()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=m;m=z;try{return R()}finally{m=L}},e.unstable_scheduleCallback=function(z,R,L){var B=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?B+L:B):L=B,z){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,z={id:h++,callback:R,priorityLevel:z,startTime:L,expirationTime:F,sortIndex:-1},L>B?(z.sortIndex=L,t(u,z),n(a)===null&&z===n(u)&&(x?(p(P),P=-1):x=!0,Gt(S,L-B))):(z.sortIndex=F,t(a,z),y||v||(y=!0,xt(j))),z},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(z){var R=m;return function(){var L=m;m=R;try{return z.apply(this,arguments)}finally{m=L}}}})(Ic);Tc.exports=Ic;var qp=Tc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=N,Ie=qp;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oc=new Set,zr={};function gn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(zr[e]=t,e=0;e<t.length;e++)Oc.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,Jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Da={},Ua={};function eh(e){return $l.call(Ua,e)?!0:$l.call(Da,e)?!1:Jp.test(e)?Ua[e]=!0:(Da[e]=!0,!1)}function th(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nh(e,t,n,r){if(t===null||typeof t>"u"||th(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fs=/[\-:]([a-z])/g;function As(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fs,As);me[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fs,As);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fs,As);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ds(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nh(t,n,o,r)&&(n=null),r||o===null?eh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),Us=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),Mc=Symbol.for("react.provider"),Fc=Symbol.for("react.context"),Bs=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Tl=Symbol.for("react.suspense_list"),Ws=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Ac=Symbol.for("react.offscreen"),Ba=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Wi;function fr(e){if(Wi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wi=t&&t[1]||""}return`
`+Wi+e}var Vi=!1;function bi(e,t){if(!e||Vi)return"";Vi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Vi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fr(e):""}function rh(e){switch(e.tag){case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return fr("Suspense");case 19:return fr("SuspenseList");case 0:case 2:case 15:return e=bi(e.type,!1),e;case 11:return e=bi(e.type.render,!1),e;case 1:return e=bi(e.type,!0),e;default:return""}}function Il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case kn:return"Portal";case Rl:return"Profiler";case Us:return"StrictMode";case Ll:return"Suspense";case Tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fc:return(e.displayName||"Context")+".Consumer";case Mc:return(e._context.displayName||"Context")+".Provider";case Bs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ws:return t=e.displayName||null,t!==null?t:Il(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return Il(e(t))}catch{}}return null}function oh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Il(t);case 8:return t===Us?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ih(e){var t=Dc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uo(e){e._valueTracker||(e._valueTracker=ih(e))}function Uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bc(e,t){t=t.checked,t!=null&&Ds(e,"checked",t,!1)}function Ml(e,t){Bc(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fl(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Va(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fl(e,t,n){(t!=="number"||bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function In(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Al(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ba(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(pr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function Wc(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ha(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var co,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lh=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){lh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function Hc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function Qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Hc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var sh=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ul(e,t){if(t){if(sh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,On=null,Mn=null;function Qa(e){if(e=eo(e)){if(typeof Vl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Si(t),Vl(e.stateNode,e.type,t))}}function Gc(e){On?Mn?Mn.push(e):Mn=[e]:On=e}function Yc(){if(On){var e=On,t=Mn;if(Mn=On=null,Qa(e),t)for(e=0;e<t.length;e++)Qa(t[e])}}function Kc(e,t){return e(t)}function Xc(){}var Hi=!1;function qc(e,t,n){if(Hi)return e(t,n);Hi=!0;try{return Kc(e,t,n)}finally{Hi=!1,(On!==null||Mn!==null)&&(Xc(),Yc())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Si(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var bl=!1;if(mt)try{var or={};Object.defineProperty(or,"passive",{get:function(){bl=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{bl=!1}function ah(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var wr=!1,Ho=null,Qo=!1,Hl=null,uh={onError:function(e){wr=!0,Ho=e}};function ch(e,t,n,r,o,i,l,s,a){wr=!1,Ho=null,ah.apply(uh,arguments)}function dh(e,t,n,r,o,i,l,s,a){if(ch.apply(this,arguments),wr){if(wr){var u=Ho;wr=!1,Ho=null}else throw Error(E(198));Qo||(Qo=!0,Hl=u)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ga(e){if(yn(e)!==e)throw Error(E(188))}function fh(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ga(o),e;if(i===r)return Ga(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Jc(e){return e=fh(e),e!==null?ed(e):null}function ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ed(e);if(t!==null)return t;e=e.sibling}return null}var td=Ie.unstable_scheduleCallback,Ya=Ie.unstable_cancelCallback,ph=Ie.unstable_shouldYield,hh=Ie.unstable_requestPaint,ee=Ie.unstable_now,mh=Ie.unstable_getCurrentPriorityLevel,bs=Ie.unstable_ImmediatePriority,nd=Ie.unstable_UserBlockingPriority,Go=Ie.unstable_NormalPriority,gh=Ie.unstable_LowPriority,rd=Ie.unstable_IdlePriority,yi=null,lt=null;function yh(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(yi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:xh,vh=Math.log,wh=Math.LN2;function xh(e){return e>>>=0,e===0?32:31-(vh(e)/wh|0)|0}var fo=64,po=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=hr(s):(i&=l,i!==0&&(r=hr(i)))}else l=n&~o,l!==0?r=hr(l):i!==0&&(r=hr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),o=1<<n,r|=e[n],t&=~o;return r}function Sh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ze(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Sh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function od(){var e=fo;return fo<<=1,!(fo&4194240)&&(fo=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function Ch(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ze(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ld,Qs,sd,ad,ud,Gl=!1,ho=[],Lt=null,Tt=null,It=null,Lr=new Map,Tr=new Map,Pt=[],Eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ka(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(t.pointerId)}}function ir(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=eo(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function jh(e,t,n,r,o){switch(t){case"focusin":return Lt=ir(Lt,e,t,n,r,o),!0;case"dragenter":return Tt=ir(Tt,e,t,n,r,o),!0;case"mouseover":return It=ir(It,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Lr.set(i,ir(Lr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Tr.set(i,ir(Tr.get(i)||null,e,t,n,r,o)),!0}return!1}function cd(e){var t=nn(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zc(n),t!==null){e.blockedOn=t,ud(e.priority,function(){sd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wl=r,n.target.dispatchEvent(r),Wl=null}else return t=eo(n),t!==null&&Qs(t),e.blockedOn=n,!1;t.shift()}return!0}function Xa(e,t,n){No(e)&&n.delete(t)}function Ph(){Gl=!1,Lt!==null&&No(Lt)&&(Lt=null),Tt!==null&&No(Tt)&&(Tt=null),It!==null&&No(It)&&(It=null),Lr.forEach(Xa),Tr.forEach(Xa)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Ph)))}function Ir(e){function t(o){return lr(o,e)}if(0<ho.length){lr(ho[0],e);for(var n=1;n<ho.length;n++){var r=ho[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&lr(Lt,e),Tt!==null&&lr(Tt,e),It!==null&&lr(It,e),Lr.forEach(t),Tr.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)cd(n),n.blockedOn===null&&Pt.shift()}var Fn=wt.ReactCurrentBatchConfig,Ko=!0;function _h(e,t,n,r){var o=U,i=Fn.transition;Fn.transition=null;try{U=1,Gs(e,t,n,r)}finally{U=o,Fn.transition=i}}function Nh(e,t,n,r){var o=U,i=Fn.transition;Fn.transition=null;try{U=4,Gs(e,t,n,r)}finally{U=o,Fn.transition=i}}function Gs(e,t,n,r){if(Ko){var o=Yl(e,t,n,r);if(o===null)nl(e,t,r,Xo,n),Ka(e,r);else if(jh(o,e,t,n,r))r.stopPropagation();else if(Ka(e,r),t&4&&-1<Eh.indexOf(e)){for(;o!==null;){var i=eo(o);if(i!==null&&ld(i),i=Yl(e,t,n,r),i===null&&nl(e,t,r,Xo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else nl(e,t,r,null,n)}}var Xo=null;function Yl(e,t,n,r){if(Xo=null,e=Vs(r),e=nn(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xo=e,null}function dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mh()){case bs:return 1;case nd:return 4;case Go:case gh:return 16;case rd:return 536870912;default:return 16}default:return 16}}var Nt=null,Ys=null,zo=null;function fd(){if(zo)return zo;var e,t=Ys,n=t.length,r,o="value"in Nt?Nt.value:Nt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return zo=o.slice(e,1<r?1-r:void 0)}function $o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mo(){return!0}function qa(){return!1}function Me(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mo:qa,this.isPropagationStopped=qa,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Me(Zn),Jr=X({},Zn,{view:0,detail:0}),zh=Me(Jr),Gi,Yi,sr,vi=X({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(Gi=e.screenX-sr.screenX,Yi=e.screenY-sr.screenY):Yi=Gi=0,sr=e),Gi)},movementY:function(e){return"movementY"in e?e.movementY:Yi}}),Za=Me(vi),$h=X({},vi,{dataTransfer:0}),Rh=Me($h),Lh=X({},Jr,{relatedTarget:0}),Ki=Me(Lh),Th=X({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ih=Me(Th),Oh=X({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mh=Me(Oh),Fh=X({},Zn,{data:0}),Ja=Me(Fh),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uh[e])?!!t[e]:!1}function Xs(){return Bh}var Wh=X({},Jr,{key:function(e){if(e.key){var t=Ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vh=Me(Wh),bh=X({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=Me(bh),Hh=X({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),Qh=Me(Hh),Gh=X({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yh=Me(Gh),Kh=X({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xh=Me(Kh),qh=[9,13,27,32],qs=mt&&"CompositionEvent"in window,xr=null;mt&&"documentMode"in document&&(xr=document.documentMode);var Zh=mt&&"TextEvent"in window&&!xr,pd=mt&&(!qs||xr&&8<xr&&11>=xr),tu=" ",nu=!1;function hd(e,t){switch(e){case"keyup":return qh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Jh(e,t){switch(e){case"compositionend":return md(t);case"keypress":return t.which!==32?null:(nu=!0,tu);case"textInput":return e=t.data,e===tu&&nu?null:e;default:return null}}function em(e,t){if(En)return e==="compositionend"||!qs&&hd(e,t)?(e=fd(),zo=Ys=Nt=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pd&&t.locale!=="ko"?null:t.data;default:return null}}var tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tm[e.type]:t==="textarea"}function gd(e,t,n,r){Gc(r),t=qo(t,"onChange"),0<t.length&&(n=new Ks("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Or=null;function nm(e){_d(e,0)}function wi(e){var t=_n(e);if(Uc(t))return e}function rm(e,t){if(e==="change")return t}var yd=!1;if(mt){var Xi;if(mt){var qi="oninput"in document;if(!qi){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),qi=typeof ou.oninput=="function"}Xi=qi}else Xi=!1;yd=Xi&&(!document.documentMode||9<document.documentMode)}function iu(){Sr&&(Sr.detachEvent("onpropertychange",vd),Or=Sr=null)}function vd(e){if(e.propertyName==="value"&&wi(Or)){var t=[];gd(t,Or,e,Vs(e)),qc(nm,t)}}function om(e,t,n){e==="focusin"?(iu(),Sr=t,Or=n,Sr.attachEvent("onpropertychange",vd)):e==="focusout"&&iu()}function im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi(Or)}function lm(e,t){if(e==="click")return wi(t)}function sm(e,t){if(e==="input"||e==="change")return wi(t)}function am(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:am;function Mr(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!$l.call(t,o)||!tt(e[o],t[o]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var n=lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xd(){for(var e=window,t=bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bo(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function um(e){var t=xd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wd(n.ownerDocument.documentElement,n)){if(r!==null&&Zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=su(n,i);var l=su(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cm=mt&&"documentMode"in document&&11>=document.documentMode,jn=null,Kl=null,kr=null,Xl=!1;function au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xl||jn==null||jn!==bo(r)||(r=jn,"selectionStart"in r&&Zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Mr(kr,r)||(kr=r,r=qo(Kl,"onSelect"),0<r.length&&(t=new Ks("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jn)))}function go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},Zi={},Sd={};mt&&(Sd=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function xi(e){if(Zi[e])return Zi[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sd)return Zi[e]=t[n];return e}var kd=xi("animationend"),Cd=xi("animationiteration"),Ed=xi("animationstart"),jd=xi("transitionend"),Pd=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Pd.set(e,t),gn(t,[e])}for(var Ji=0;Ji<uu.length;Ji++){var el=uu[Ji],dm=el.toLowerCase(),fm=el[0].toUpperCase()+el.slice(1);Vt(dm,"on"+fm)}Vt(kd,"onAnimationEnd");Vt(Cd,"onAnimationIteration");Vt(Ed,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(jd,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dh(r,t,void 0,e),e.currentTarget=null}function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;cu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;cu(o,s,u),i=a}}}if(Qo)throw e=Hl,Qo=!1,Hl=null,e}function V(e,t){var n=t[ts];n===void 0&&(n=t[ts]=new Set);var r=e+"__bubble";n.has(r)||(Nd(t,e,2,!1),n.add(r))}function tl(e,t,n){var r=0;t&&(r|=4),Nd(n,e,r,t)}var yo="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[yo]){e[yo]=!0,Oc.forEach(function(n){n!=="selectionchange"&&(pm.has(n)||tl(n,!1,e),tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yo]||(t[yo]=!0,tl("selectionchange",!1,t))}}function Nd(e,t,n,r){switch(dd(t)){case 1:var o=_h;break;case 4:o=Nh;break;default:o=Gs}n=o.bind(null,t,n,e),o=void 0,!bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function nl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=nn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}qc(function(){var u=i,h=Vs(n),c=[];e:{var m=Pd.get(e);if(m!==void 0){var v=Ks,y=e;switch(e){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":v=Vh;break;case"focusin":y="focus",v=Ki;break;case"focusout":y="blur",v=Ki;break;case"beforeblur":case"afterblur":v=Ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Za;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Qh;break;case kd:case Cd:case Ed:v=Ih;break;case jd:v=Yh;break;case"scroll":v=zh;break;case"wheel":v=Xh;break;case"copy":case"cut":case"paste":v=Mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=eu}var x=(t&4)!==0,k=!x&&e==="scroll",p=x?m!==null?m+"Capture":null:m;x=[];for(var d=u,g;d!==null;){g=d;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,p!==null&&(S=Rr(d,p),S!=null&&x.push(Ar(d,S,g)))),k)break;d=d.return}0<x.length&&(m=new v(m,y,null,n,h),c.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Wl&&(y=n.relatedTarget||n.fromElement)&&(nn(y)||y[gt]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?nn(y):null,y!==null&&(k=yn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=Za,S="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=eu,S="onPointerLeave",p="onPointerEnter",d="pointer"),k=v==null?m:_n(v),g=y==null?m:_n(y),m=new x(S,d+"leave",v,n,h),m.target=k,m.relatedTarget=g,S=null,nn(h)===u&&(x=new x(p,d+"enter",y,n,h),x.target=g,x.relatedTarget=k,S=x),k=S,v&&y)t:{for(x=v,p=y,d=0,g=x;g;g=wn(g))d++;for(g=0,S=p;S;S=wn(S))g++;for(;0<d-g;)x=wn(x),d--;for(;0<g-d;)p=wn(p),g--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=wn(x),p=wn(p)}x=null}else x=null;v!==null&&du(c,m,v,x,!1),y!==null&&k!==null&&du(c,k,y,x,!0)}}e:{if(m=u?_n(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var j=rm;else if(ru(m))if(yd)j=sm;else{j=im;var _=om}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=lm);if(j&&(j=j(e,u))){gd(c,j,n,h);break e}_&&_(e,m,u),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Fl(m,"number",m.value)}switch(_=u?_n(u):window,e){case"focusin":(ru(_)||_.contentEditable==="true")&&(jn=_,Kl=u,kr=null);break;case"focusout":kr=Kl=jn=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,au(c,n,h);break;case"selectionchange":if(cm)break;case"keydown":case"keyup":au(c,n,h)}var C;if(qs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else En?hd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(pd&&n.locale!=="ko"&&(En||P!=="onCompositionStart"?P==="onCompositionEnd"&&En&&(C=fd()):(Nt=h,Ys="value"in Nt?Nt.value:Nt.textContent,En=!0)),_=qo(u,P),0<_.length&&(P=new Ja(P,e,null,n,h),c.push({event:P,listeners:_}),C?P.data=C:(C=md(n),C!==null&&(P.data=C)))),(C=Zh?Jh(e,n):em(e,n))&&(u=qo(u,"onBeforeInput"),0<u.length&&(h=new Ja("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:u}),h.data=C))}_d(c,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Rr(e,n),i!=null&&r.unshift(Ar(e,i,o)),i=Rr(e,t),i!=null&&r.push(Ar(e,i,o))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function du(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Rr(n,i),a!=null&&l.unshift(Ar(n,a,s))):o||(a=Rr(n,i),a!=null&&l.push(Ar(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var hm=/\r\n?/g,mm=/\u0000|\uFFFD/g;function fu(e){return(typeof e=="string"?e:""+e).replace(hm,`
`).replace(mm,"")}function vo(e,t,n){if(t=fu(t),fu(e)!==t&&n)throw Error(E(425))}function Zo(){}var ql=null,Zl=null;function Jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,gm=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,ym=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(vm)}:es;function vm(e){setTimeout(function(){throw e})}function rl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ir(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),it="__reactFiber$"+Jn,Dr="__reactProps$"+Jn,gt="__reactContainer$"+Jn,ts="__reactEvents$"+Jn,wm="__reactListeners$"+Jn,xm="__reactHandles$"+Jn;function nn(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[it])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function eo(e){return e=e[it]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Si(e){return e[Dr]||null}var ns=[],Nn=-1;function bt(e){return{current:e}}function H(e){0>Nn||(e.current=ns[Nn],ns[Nn]=null,Nn--)}function W(e,t){Nn++,ns[Nn]=e.current,e.current=t}var Wt={},we=bt(Wt),Pe=bt(!1),cn=Wt;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _e(e){return e=e.childContextTypes,e!=null}function Jo(){H(Pe),H(we)}function mu(e,t,n){if(we.current!==Wt)throw Error(E(168));W(we,t),W(Pe,n)}function zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,oh(e)||"Unknown",o));return X({},n,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,cn=we.current,W(we,e),W(Pe,Pe.current),!0}function gu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=zd(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,H(Pe),H(we),W(we,e)):H(Pe),W(Pe,n)}var dt=null,ki=!1,ol=!1;function $d(e){dt===null?dt=[e]:dt.push(e)}function Sm(e){ki=!0,$d(e)}function Ht(){if(!ol&&dt!==null){ol=!0;var e=0,t=U;try{var n=dt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,ki=!1}catch(o){throw dt!==null&&(dt=dt.slice(e+1)),td(bs,Ht),o}finally{U=t,ol=!1}}return null}var zn=[],$n=0,ti=null,ni=0,Ae=[],De=0,dn=null,ft=1,pt="";function Zt(e,t){zn[$n++]=ni,zn[$n++]=ti,ti=e,ni=t}function Rd(e,t,n){Ae[De++]=ft,Ae[De++]=pt,Ae[De++]=dn,dn=e;var r=ft;e=pt;var o=32-Ze(r)-1;r&=~(1<<o),n+=1;var i=32-Ze(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ft=1<<32-Ze(t)+o|n<<o|r,pt=i+e}else ft=1<<i|n<<o|r,pt=e}function Js(e){e.return!==null&&(Zt(e,1),Rd(e,1,0))}function ea(e){for(;e===ti;)ti=zn[--$n],zn[$n]=null,ni=zn[--$n],zn[$n]=null;for(;e===dn;)dn=Ae[--De],Ae[De]=null,pt=Ae[--De],Ae[De]=null,ft=Ae[--De],Ae[De]=null}var Te=null,Le=null,G=!1,qe=null;function Ld(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Le=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Le=null,!0):!1;default:return!1}}function rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function os(e){if(G){var t=Le;if(t){var n=t;if(!yu(e,t)){if(rs(e))throw Error(E(418));t=Ot(n.nextSibling);var r=Te;t&&yu(e,t)?Ld(r,n):(e.flags=e.flags&-4097|2,G=!1,Te=e)}}else{if(rs(e))throw Error(E(418));e.flags=e.flags&-4097|2,G=!1,Te=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function wo(e){if(e!==Te)return!1;if(!G)return vu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jl(e.type,e.memoizedProps)),t&&(t=Le)){if(rs(e))throw Td(),Error(E(418));for(;t;)Ld(e,t),t=Ot(t.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Te?Ot(e.stateNode.nextSibling):null;return!0}function Td(){for(var e=Le;e;)e=Ot(e.nextSibling)}function Vn(){Le=Te=null,G=!1}function ta(e){qe===null?qe=[e]:qe.push(e)}var km=wt.ReactCurrentBatchConfig;function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function xo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wu(e){var t=e._init;return t(e._payload)}function Id(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=Dt(p,d),p.index=0,p.sibling=null,p}function i(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,g,S){return d===null||d.tag!==6?(d=dl(g,p.mode,S),d.return=p,d):(d=o(d,g),d.return=p,d)}function a(p,d,g,S){var j=g.type;return j===Cn?h(p,d,g.props.children,S,g.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Et&&wu(j)===d.type)?(S=o(d,g.props),S.ref=ar(p,d,g),S.return=p,S):(S=Fo(g.type,g.key,g.props,null,p.mode,S),S.ref=ar(p,d,g),S.return=p,S)}function u(p,d,g,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=fl(g,p.mode,S),d.return=p,d):(d=o(d,g.children||[]),d.return=p,d)}function h(p,d,g,S,j){return d===null||d.tag!==7?(d=sn(g,p.mode,S,j),d.return=p,d):(d=o(d,g),d.return=p,d)}function c(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=dl(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ao:return g=Fo(d.type,d.key,d.props,null,p.mode,g),g.ref=ar(p,null,d),g.return=p,g;case kn:return d=fl(d,p.mode,g),d.return=p,d;case Et:var S=d._init;return c(p,S(d._payload),g)}if(pr(d)||rr(d))return d=sn(d,p.mode,g,null),d.return=p,d;xo(p,d)}return null}function m(p,d,g,S){var j=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return j!==null?null:s(p,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ao:return g.key===j?a(p,d,g,S):null;case kn:return g.key===j?u(p,d,g,S):null;case Et:return j=g._init,m(p,d,j(g._payload),S)}if(pr(g)||rr(g))return j!==null?null:h(p,d,g,S,null);xo(p,g)}return null}function v(p,d,g,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(g)||null,s(d,p,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ao:return p=p.get(S.key===null?g:S.key)||null,a(d,p,S,j);case kn:return p=p.get(S.key===null?g:S.key)||null,u(d,p,S,j);case Et:var _=S._init;return v(p,d,g,_(S._payload),j)}if(pr(S)||rr(S))return p=p.get(g)||null,h(d,p,S,j,null);xo(d,S)}return null}function y(p,d,g,S){for(var j=null,_=null,C=d,P=d=0,D=null;C!==null&&P<g.length;P++){C.index>P?(D=C,C=null):D=C.sibling;var T=m(p,C,g[P],S);if(T===null){C===null&&(C=D);break}e&&C&&T.alternate===null&&t(p,C),d=i(T,d,P),_===null?j=T:_.sibling=T,_=T,C=D}if(P===g.length)return n(p,C),G&&Zt(p,P),j;if(C===null){for(;P<g.length;P++)C=c(p,g[P],S),C!==null&&(d=i(C,d,P),_===null?j=C:_.sibling=C,_=C);return G&&Zt(p,P),j}for(C=r(p,C);P<g.length;P++)D=v(C,p,P,g[P],S),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?P:D.key),d=i(D,d,P),_===null?j=D:_.sibling=D,_=D);return e&&C.forEach(function(Q){return t(p,Q)}),G&&Zt(p,P),j}function x(p,d,g,S){var j=rr(g);if(typeof j!="function")throw Error(E(150));if(g=j.call(g),g==null)throw Error(E(151));for(var _=j=null,C=d,P=d=0,D=null,T=g.next();C!==null&&!T.done;P++,T=g.next()){C.index>P?(D=C,C=null):D=C.sibling;var Q=m(p,C,T.value,S);if(Q===null){C===null&&(C=D);break}e&&C&&Q.alternate===null&&t(p,C),d=i(Q,d,P),_===null?j=Q:_.sibling=Q,_=Q,C=D}if(T.done)return n(p,C),G&&Zt(p,P),j;if(C===null){for(;!T.done;P++,T=g.next())T=c(p,T.value,S),T!==null&&(d=i(T,d,P),_===null?j=T:_.sibling=T,_=T);return G&&Zt(p,P),j}for(C=r(p,C);!T.done;P++,T=g.next())T=v(C,p,P,T.value,S),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?P:T.key),d=i(T,d,P),_===null?j=T:_.sibling=T,_=T);return e&&C.forEach(function(He){return t(p,He)}),G&&Zt(p,P),j}function k(p,d,g,S){if(typeof g=="object"&&g!==null&&g.type===Cn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ao:e:{for(var j=g.key,_=d;_!==null;){if(_.key===j){if(j=g.type,j===Cn){if(_.tag===7){n(p,_.sibling),d=o(_,g.props.children),d.return=p,p=d;break e}}else if(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Et&&wu(j)===_.type){n(p,_.sibling),d=o(_,g.props),d.ref=ar(p,_,g),d.return=p,p=d;break e}n(p,_);break}else t(p,_);_=_.sibling}g.type===Cn?(d=sn(g.props.children,p.mode,S,g.key),d.return=p,p=d):(S=Fo(g.type,g.key,g.props,null,p.mode,S),S.ref=ar(p,d,g),S.return=p,p=S)}return l(p);case kn:e:{for(_=g.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=o(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=fl(g,p.mode,S),d.return=p,p=d}return l(p);case Et:return _=g._init,k(p,d,_(g._payload),S)}if(pr(g))return y(p,d,g,S);if(rr(g))return x(p,d,g,S);xo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,g),d.return=p,p=d):(n(p,d),d=dl(g,p.mode,S),d.return=p,p=d),l(p)):n(p,d)}return k}var bn=Id(!0),Od=Id(!1),ri=bt(null),oi=null,Rn=null,na=null;function ra(){na=Rn=oi=null}function oa(e){var t=ri.current;H(ri),e._currentValue=t}function is(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){oi=e,na=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(na!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(oi===null)throw Error(E(308));Rn=e,oi.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var rn=null;function ia(e){rn===null?rn=[e]:rn.push(e)}function Md(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ia(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function la(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yt(e,n)}return o=r.interleaved,o===null?(t.next=t,ia(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function Ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hs(e,n)}}function xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var o=e.updateQueue;jt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=a))}if(i!==null){var c=o.baseState;l=0,h=u=a=null,s=i;do{var m=s.lane,v=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(m=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){c=y.call(v,c,m);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,m=typeof y=="function"?y.call(v,c,m):y,m==null)break e;c=X({},c,m);break e;case 2:jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=v,a=c):h=h.next=v,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(a=c),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);pn|=l,e.lanes=l,e.memoizedState=c}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var to={},st=bt(to),Ur=bt(to),Br=bt(to);function on(e){if(e===to)throw Error(E(174));return e}function sa(e,t){switch(W(Br,t),W(Ur,e),W(st,to),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}H(st),W(st,t)}function Hn(){H(st),H(Ur),H(Br)}function Ad(e){on(Br.current);var t=on(st.current),n=Dl(t,e.type);t!==n&&(W(Ur,e),W(st,n))}function aa(e){Ur.current===e&&(H(st),H(Ur))}var Y=bt(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function ua(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Lo=wt.ReactCurrentDispatcher,ll=wt.ReactCurrentBatchConfig,fn=0,K=null,le=null,ue=null,si=!1,Cr=!1,Wr=0,Cm=0;function ge(){throw Error(E(321))}function ca(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function da(e,t,n,r,o,i){if(fn=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?_m:Nm,e=n(r,o),Cr){i=0;do{if(Cr=!1,Wr=0,25<=i)throw Error(E(301));i+=1,ue=le=null,t.updateQueue=null,Lo.current=zm,e=n(r,o)}while(Cr)}if(Lo.current=ai,t=le!==null&&le.next!==null,fn=0,ue=le=K=null,si=!1,t)throw Error(E(300));return e}function fa(){var e=Wr!==0;return Wr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?K.memoizedState=ue=e:ue=ue.next=e,ue}function Ve(){if(le===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?K.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(E(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?K.memoizedState=ue=e:ue=ue.next=e}return ue}function Vr(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=Ve(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var h=u.lane;if((fn&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,K.lanes|=h,pn|=h}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,tt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,K.lanes|=i,pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function al(e){var t=Ve(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);tt(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Dd(){}function Ud(e,t){var n=K,r=Ve(),o=t(),i=!tt(r.memoizedState,o);if(i&&(r.memoizedState=o,je=!0),r=r.queue,pa(Vd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,br(9,Wd.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(E(349));fn&30||Bd(n,t,o)}return o}function Bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wd(e,t,n,r){t.value=n,t.getSnapshot=r,bd(t)&&Hd(e)}function Vd(e,t,n){return n(function(){bd(t)&&Hd(e)})}function bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Hd(e){var t=yt(e,1);t!==null&&Je(t,e,1,-1)}function ku(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t.queue=e,e=e.dispatch=Pm.bind(null,K,e),[t.memoizedState,e]}function br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qd(){return Ve().memoizedState}function To(e,t,n,r){var o=ot();K.flags|=e,o.memoizedState=br(1|t,n,void 0,r===void 0?null:r)}function Ci(e,t,n,r){var o=Ve();r=r===void 0?null:r;var i=void 0;if(le!==null){var l=le.memoizedState;if(i=l.destroy,r!==null&&ca(r,l.deps)){o.memoizedState=br(t,n,i,r);return}}K.flags|=e,o.memoizedState=br(1|t,n,i,r)}function Cu(e,t){return To(8390656,8,e,t)}function pa(e,t){return Ci(2048,8,e,t)}function Gd(e,t){return Ci(4,2,e,t)}function Yd(e,t){return Ci(4,4,e,t)}function Kd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xd(e,t,n){return n=n!=null?n.concat([e]):null,Ci(4,4,Kd.bind(null,t,e),n)}function ha(){}function qd(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jd(e,t,n){return fn&21?(tt(n,t)||(n=od(),K.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Em(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{U=n,ll.transition=r}}function ef(){return Ve().memoizedState}function jm(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tf(e))nf(t,n);else if(n=Md(e,t,n,r),n!==null){var o=Se();Je(n,e,r,o),rf(n,t,r)}}function Pm(e,t,n){var r=At(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tf(e))nf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,tt(s,l)){var a=t.interleaved;a===null?(o.next=o,ia(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Md(e,t,o,r),n!==null&&(o=Se(),Je(n,e,r,o),rf(n,t,r))}}function tf(e){var t=e.alternate;return e===K||t!==null&&t===K}function nf(e,t){Cr=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hs(e,n)}}var ai={readContext:We,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},_m={readContext:We,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Cu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,Kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jm.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:ku,useDebugValue:ha,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=ku(!1),t=e[0];return e=Em.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,o=ot();if(G){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ce===null)throw Error(E(349));fn&30||Bd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Cu(Vd.bind(null,r,i,e),[e]),r.flags|=2048,br(9,Wd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ot(),t=ce.identifierPrefix;if(G){var n=pt,r=ft;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Nm={readContext:We,useCallback:qd,useContext:We,useEffect:pa,useImperativeHandle:Xd,useInsertionEffect:Gd,useLayoutEffect:Yd,useMemo:Zd,useReducer:sl,useRef:Qd,useState:function(){return sl(Vr)},useDebugValue:ha,useDeferredValue:function(e){var t=Ve();return Jd(t,le.memoizedState,e)},useTransition:function(){var e=sl(Vr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Dd,useSyncExternalStore:Ud,useId:ef,unstable_isNewReconciler:!1},zm={readContext:We,useCallback:qd,useContext:We,useEffect:pa,useImperativeHandle:Xd,useInsertionEffect:Gd,useLayoutEffect:Yd,useMemo:Zd,useReducer:al,useRef:Qd,useState:function(){return al(Vr)},useDebugValue:ha,useDeferredValue:function(e){var t=Ve();return le===null?t.memoizedState=e:Jd(t,le.memoizedState,e)},useTransition:function(){var e=al(Vr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Dd,useSyncExternalStore:Ud,useId:ef,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ei={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=At(e),i=ht(r,o);i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,o),t!==null&&(Je(t,e,o,r),Ro(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=At(e),i=ht(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,o),t!==null&&(Je(t,e,o,r),Ro(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=At(e),o=ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=Mt(e,o,r),t!==null&&(Je(t,e,r,n),Ro(t,e,r))}};function Eu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(o,i):!0}function of(e,t,n){var r=!1,o=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=_e(t)?cn:we.current,r=t.contextTypes,i=(r=r!=null)?Wn(e,o):Wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ei,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ei.enqueueReplaceState(t,t.state,null)}function ss(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},la(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=_e(t)?cn:we.current,o.context=Wn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ls(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ei.enqueueReplaceState(o,o.state,null),ii(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",r=t;do n+=rh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function as(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $m=typeof WeakMap=="function"?WeakMap:Map;function lf(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ci||(ci=!0,vs=r),as(e,t)},n}function sf(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){as(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){as(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Pu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $m;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=bm.bind(null,e,t,n),t.then(e,e))}function _u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Rm=wt.ReactCurrentOwner,je=!1;function xe(e,t,n,r){t.child=e===null?Od(t,null,n,r):bn(t,e.child,n,r)}function zu(e,t,n,r,o){n=n.render;var i=t.ref;return An(t,o),r=da(e,t,n,r,i,o),n=fa(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(G&&n&&Js(t),t.flags|=1,xe(e,t,r,o),t.child)}function $u(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ka(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,af(e,t,i,r,o)):(e=Fo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(l,r)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=Dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function af(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Mr(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,vt(e,t,o)}return us(e,t,n,r,o)}function uf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Tn,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Tn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(Tn,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(Tn,$e),$e|=r;return xe(e,t,o,n),t.child}function cf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function us(e,t,n,r,o){var i=_e(n)?cn:we.current;return i=Wn(t,i),An(t,o),n=da(e,t,n,r,i,o),r=fa(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(G&&r&&Js(t),t.flags|=1,xe(e,t,n,o),t.child)}function Ru(e,t,n,r,o){if(_e(n)){var i=!0;ei(t)}else i=!1;if(An(t,o),t.stateNode===null)Io(e,t),of(t,n,r),ss(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=_e(n)?cn:we.current,u=Wn(t,u));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&ju(t,l,r,u),jt=!1;var m=t.memoizedState;l.state=m,ii(t,r,l,o),a=t.memoizedState,s!==r||m!==a||Pe.current||jt?(typeof h=="function"&&(ls(t,n,h,r),a=t.memoizedState),(s=jt||Eu(t,n,s,r,m,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Fd(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ye(t.type,s),l.props=u,c=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=We(a):(a=_e(n)?cn:we.current,a=Wn(t,a));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||m!==a)&&ju(t,l,r,a),jt=!1,m=t.memoizedState,l.state=m,ii(t,r,l,o);var y=t.memoizedState;s!==c||m!==y||Pe.current||jt?(typeof v=="function"&&(ls(t,n,v,r),y=t.memoizedState),(u=jt||Eu(t,n,u,r,m,y,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return cs(e,t,n,r,i,o)}function cs(e,t,n,r,o,i){cf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&gu(t,n,!1),vt(e,t,i);r=t.stateNode,Rm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=bn(t,e.child,null,i),t.child=bn(t,null,s,i)):xe(e,t,s,i),t.memoizedState=r.state,o&&gu(t,n,!0),t.child}function df(e){var t=e.stateNode;t.pendingContext?mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mu(e,t.context,!1),sa(e,t.containerInfo)}function Lu(e,t,n,r,o){return Vn(),ta(o),t.flags|=256,xe(e,t,n,r),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function ff(e,t,n){var r=t.pendingProps,o=Y.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return os(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=_i(l,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fs(n),t.memoizedState=ds,e):ma(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Lm(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Dt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Dt(s,i):(i=sn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?fs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ds,r}return i=e.child,e=i.sibling,r=Dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ma(e,t){return t=_i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&ta(r),bn(t,e.child,null,n),e=ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(E(422))),So(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=_i({mode:"visible",children:r.children},o,0,null),i=sn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&bn(t,e.child,null,l),t.child.memoizedState=fs(l),t.memoizedState=ds,i);if(!(t.mode&1))return So(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=ul(i,r,void 0),So(e,t,l,r)}if(s=(l&e.childLanes)!==0,je||s){if(r=ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,yt(e,o),Je(r,e,o,-1))}return Sa(),r=ul(Error(E(421))),So(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=Ot(o.nextSibling),Te=t,G=!0,qe=null,e!==null&&(Ae[De++]=ft,Ae[De++]=pt,Ae[De++]=dn,ft=e.id,pt=e.overflow,dn=t),t=ma(t,r.children),t.flags|=4096,t)}function Tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),is(e.return,t,n)}function cl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function pf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tu(e,n,t);else if(e.tag===19)Tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&li(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),cl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&li(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}cl(t,!0,n,null,i);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tm(e,t,n){switch(t.tag){case 3:df(t),Vn();break;case 5:Ad(t);break;case 1:_e(t.type)&&ei(t);break;case 4:sa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(ri,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?ff(e,t,n):(W(Y,Y.current&1),e=vt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,uf(e,t,n)}return vt(e,t,n)}var hf,ps,mf,gf;hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ps=function(){};mf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,on(st.current);var i=null;switch(n){case"input":o=Ol(e,o),r=Ol(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=Al(e,o),r=Al(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zo)}Ul(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o?.[u],r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&V("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};gf=function(e,t,n,r){n!==r&&(t.flags|=4)};function ur(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Im(e,t,n){var r=t.pendingProps;switch(ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return _e(t.type)&&Jo(),ye(t),null;case 3:return r=t.stateNode,Hn(),H(Pe),H(we),ua(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(Ss(qe),qe=null))),ps(e,t),ye(t),null;case 5:aa(t);var o=on(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)mf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ye(t),null}if(e=on(st.current),wo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[it]=t,r[Dr]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<mr.length;o++)V(mr[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Wa(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":ba(r,i),V("invalid",r)}Ul(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,s,e),o=["children",""+s]):zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":uo(r),Va(r,i,!0);break;case"textarea":uo(r),Ha(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[it]=t,e[Dr]=r,hf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Bl(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<mr.length;o++)V(mr[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Wa(e,r),o=Ol(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":ba(e,r),o=Al(e,r),V("invalid",e);break;default:o=r}Ul(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Qc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&bc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&$r(e,a):typeof a=="number"&&$r(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&V("scroll",e):a!=null&&Ds(e,i,a,l))}switch(n){case"input":uo(e),Va(e,r,!1);break;case"textarea":uo(e),Ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?In(e,!!r.multiple,i,!1):r.defaultValue!=null&&In(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)gf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=on(Br.current),on(st.current),wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(i=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return ye(t),null;case 13:if(H(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Le!==null&&t.mode&1&&!(t.flags&128))Td(),Vn(),t.flags|=98560,i=!1;else if(i=wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[it]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),i=!1}else qe!==null&&(Ss(qe),qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):Sa())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Hn(),ps(e,t),e===null&&Fr(t.stateNode.containerInfo),ye(t),null;case 10:return oa(t.type._context),ye(t),null;case 17:return _e(t.type)&&Jo(),ye(t),null;case 19:if(H(Y),i=t.memoizedState,i===null)return ye(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ur(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=li(e),l!==null){for(t.flags|=128,ur(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>Gn&&(t.flags|=128,r=!0,ur(i,!1),t.lanes=4194304)}else{if(!r)if(e=li(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ur(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!G)return ye(t),null}else 2*ee()-i.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,ur(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return xa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Om(e,t){switch(ea(t),t.tag){case 1:return _e(t.type)&&Jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),H(Pe),H(we),ua(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return aa(t),null;case 13:if(H(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Y),null;case 4:return Hn(),null;case 10:return oa(t.type._context),null;case 22:case 23:return xa(),null;case 24:return null;default:return null}}var ko=!1,ve=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function hs(e,t,n){try{n()}catch(r){J(e,t,r)}}var Iu=!1;function Fm(e,t){if(ql=Ko,e=xd(),Zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,h=0,c=e,m=null;t:for(;;){for(var v;c!==n||o!==0&&c.nodeType!==3||(s=l+o),c!==i||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(v=c.firstChild)!==null;)m=c,c=v;for(;;){if(c===e)break t;if(m===n&&++u===o&&(s=l),m===i&&++h===r&&(a=l),(v=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zl={focusedElem:e,selectionRange:n},Ko=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,k=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ye(t.type,x),k);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return y=Iu,Iu=!1,y}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&hs(t,n,i)}o=o.next}while(o!==r)}}function ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ms(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Dr],delete t[ts],delete t[wm],delete t[xm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vf(e){return e.tag===5||e.tag===3||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zo));else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ys(e,t,n),e=e.sibling;e!==null;)ys(e,t,n),e=e.sibling}var fe=null,Ke=!1;function kt(e,t,n){for(n=n.child;n!==null;)wf(e,t,n),n=n.sibling}function wf(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(yi,n)}catch{}switch(n.tag){case 5:ve||Ln(n,t);case 6:var r=fe,o=Ke;fe=null,kt(e,t,n),fe=r,Ke=o,fe!==null&&(Ke?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Ke?(e=fe,n=n.stateNode,e.nodeType===8?rl(e.parentNode,n):e.nodeType===1&&rl(e,n),Ir(e)):rl(fe,n.stateNode));break;case 4:r=fe,o=Ke,fe=n.stateNode.containerInfo,Ke=!0,kt(e,t,n),fe=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&hs(n,t,l),o=o.next}while(o!==r)}kt(e,t,n);break;case 1:if(!ve&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,kt(e,t,n),ve=r):kt(e,t,n);break;default:kt(e,t,n)}}function Mu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mm),t.forEach(function(r){var o=Qm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,Ke=!1;break e;case 3:fe=s.stateNode.containerInfo,Ke=!0;break e;case 4:fe=s.stateNode.containerInfo,Ke=!0;break e}s=s.return}if(fe===null)throw Error(E(160));wf(i,l,o),fe=null,Ke=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){J(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xf(t,e),t=t.sibling}function xf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),nt(e),r&4){try{Er(3,e,e.return),ji(3,e)}catch(x){J(e,e.return,x)}try{Er(5,e,e.return)}catch(x){J(e,e.return,x)}}break;case 1:Ge(t,e),nt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(Ge(t,e),nt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var o=e.stateNode;try{$r(o,"")}catch(x){J(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Bc(o,i),Bl(s,l);var u=Bl(s,i);for(l=0;l<a.length;l+=2){var h=a[l],c=a[l+1];h==="style"?Qc(o,c):h==="dangerouslySetInnerHTML"?bc(o,c):h==="children"?$r(o,c):Ds(o,h,c,u)}switch(s){case"input":Ml(o,i);break;case"textarea":Wc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?In(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?In(o,!!i.multiple,i.defaultValue,!0):In(o,!!i.multiple,i.multiple?[]:"",!1))}o[Dr]=i}catch(x){J(e,e.return,x)}}break;case 6:if(Ge(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){J(e,e.return,x)}}break;case 3:if(Ge(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(x){J(e,e.return,x)}break;case 4:Ge(t,e),nt(e);break;case 13:Ge(t,e),nt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(va=ee())),r&4&&Mu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||h,Ge(t,e),ve=u):Ge(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for($=e,h=e.child;h!==null;){for(c=$=h;$!==null;){switch(m=$,v=m.child,m.tag){case 0:case 11:case 14:case 15:Er(4,m,m.return);break;case 1:Ln(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){J(r,n,x)}}break;case 5:Ln(m,m.return);break;case 22:if(m.memoizedState!==null){Au(c);continue}}v!==null?(v.return=m,$=v):Au(c)}h=h.sibling}e:for(h=null,c=e;;){if(c.tag===5){if(h===null){h=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Hc("display",l))}catch(x){J(e,e.return,x)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(x){J(e,e.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ge(t,e),nt(e),r&4&&Mu(e);break;case 21:break;default:Ge(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vf(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&($r(o,""),r.flags&=-33);var i=Ou(e);ys(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ou(e);gs(e,s,l);break;default:throw Error(E(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e,t,n){$=e,Sf(e)}function Sf(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ko;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ve;s=ko;var u=ve;if(ko=l,(ve=a)&&!u)for($=o;$!==null;)l=$,a=l.child,l.tag===22&&l.memoizedState!==null?Du(o):a!==null?(a.return=l,$=a):Du(o);for(;i!==null;)$=i,Sf(i),i=i.sibling;$=o,ko=s,ve=u}Fu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):Fu(e)}}function Fu(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Su(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&Ir(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ve||t.flags&512&&ms(t)}catch(m){J(t,t.return,m)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Au(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Du(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ji(4,t)}catch(a){J(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){J(t,o,a)}}var i=t.return;try{ms(t)}catch(a){J(t,i,a)}break;case 5:var l=t.return;try{ms(t)}catch(a){J(t,l,a)}}}catch(a){J(t,t.return,a)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var Dm=Math.ceil,ui=wt.ReactCurrentDispatcher,ga=wt.ReactCurrentOwner,Be=wt.ReactCurrentBatchConfig,M=0,ce=null,re=null,he=0,$e=0,Tn=bt(0),ae=0,Hr=null,pn=0,Pi=0,ya=0,jr=null,Ee=null,va=0,Gn=1/0,ut=null,ci=!1,vs=null,Ft=null,Co=!1,zt=null,di=0,Pr=0,ws=null,Oo=-1,Mo=0;function Se(){return M&6?ee():Oo!==-1?Oo:Oo=ee()}function At(e){return e.mode&1?M&2&&he!==0?he&-he:km.transition!==null?(Mo===0&&(Mo=od()),Mo):(e=U,e!==0||(e=window.event,e=e===void 0?16:dd(e.type)),e):1}function Je(e,t,n,r){if(50<Pr)throw Pr=0,ws=null,Error(E(185));Zr(e,n,r),(!(M&2)||e!==ce)&&(e===ce&&(!(M&2)&&(Pi|=n),ae===4&&_t(e,he)),Ne(e,r),n===1&&M===0&&!(t.mode&1)&&(Gn=ee()+500,ki&&Ht()))}function Ne(e,t){var n=e.callbackNode;kh(e,t);var r=Yo(e,e===ce?he:0);if(r===0)n!==null&&Ya(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ya(n),t===1)e.tag===0?Sm(Uu.bind(null,e)):$d(Uu.bind(null,e)),ym(function(){!(M&6)&&Ht()}),n=null;else{switch(id(r)){case 1:n=bs;break;case 4:n=nd;break;case 16:n=Go;break;case 536870912:n=rd;break;default:n=Go}n=zf(n,kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kf(e,t){if(Oo=-1,Mo=0,M&6)throw Error(E(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Yo(e,e===ce?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fi(e,r);else{t=r;var o=M;M|=2;var i=Ef();(ce!==e||he!==t)&&(ut=null,Gn=ee()+500,ln(e,t));do try{Wm();break}catch(s){Cf(e,s)}while(!0);ra(),ui.current=i,M=o,re!==null?t=0:(ce=null,he=0,t=ae)}if(t!==0){if(t===2&&(o=Ql(e),o!==0&&(r=o,t=xs(e,o))),t===1)throw n=Hr,ln(e,0),_t(e,r),Ne(e,ee()),n;if(t===6)_t(e,r);else{if(o=e.current.alternate,!(r&30)&&!Um(o)&&(t=fi(e,r),t===2&&(i=Ql(e),i!==0&&(r=i,t=xs(e,i))),t===1))throw n=Hr,ln(e,0),_t(e,r),Ne(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Jt(e,Ee,ut);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=va+500-ee(),10<t)){if(Yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=es(Jt.bind(null,e,Ee,ut),t);break}Jt(e,Ee,ut);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ze(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dm(r/1960))-r,10<r){e.timeoutHandle=es(Jt.bind(null,e,Ee,ut),r);break}Jt(e,Ee,ut);break;case 5:Jt(e,Ee,ut);break;default:throw Error(E(329))}}}return Ne(e,ee()),e.callbackNode===n?kf.bind(null,e):null}function xs(e,t){var n=jr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=fi(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&Ss(t)),e}function Ss(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Um(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~ya,t&=~Pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Uu(e){if(M&6)throw Error(E(327));Dn();var t=Yo(e,0);if(!(t&1))return Ne(e,ee()),null;var n=fi(e,t);if(e.tag!==0&&n===2){var r=Ql(e);r!==0&&(t=r,n=xs(e,r))}if(n===1)throw n=Hr,ln(e,0),_t(e,t),Ne(e,ee()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Ee,ut),Ne(e,ee()),null}function wa(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Gn=ee()+500,ki&&Ht())}}function hn(e){zt!==null&&zt.tag===0&&!(M&6)&&Dn();var t=M;M|=1;var n=Be.transition,r=U;try{if(Be.transition=null,U=1,e)return e()}finally{U=r,Be.transition=n,M=t,!(M&6)&&Ht()}}function xa(){$e=Tn.current,H(Tn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gm(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jo();break;case 3:Hn(),H(Pe),H(we),ua();break;case 5:aa(r);break;case 4:Hn();break;case 13:H(Y);break;case 19:H(Y);break;case 10:oa(r.type._context);break;case 22:case 23:xa()}n=n.return}if(ce=e,re=e=Dt(e.current,null),he=$e=t,ae=0,Hr=null,ya=Pi=pn=0,Ee=jr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}rn=null}return e}function Cf(e,t){do{var n=re;try{if(ra(),Lo.current=ai,si){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}si=!1}if(fn=0,ue=le=K=null,Cr=!1,Wr=0,ga.current=null,n===null||n.return===null){ae=1,Hr=t,re=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=he,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=s,c=h.tag;if(!(h.mode&1)&&(c===0||c===11||c===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=_u(l);if(v!==null){v.flags&=-257,Nu(v,l,s,i,t),v.mode&1&&Pu(i,u,t),t=v,a=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(a),t.updateQueue=x}else y.add(a);break e}else{if(!(t&1)){Pu(i,u,t),Sa();break e}a=Error(E(426))}}else if(G&&s.mode&1){var k=_u(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Nu(k,l,s,i,t),ta(Qn(a,s));break e}}i=a=Qn(a,s),ae!==4&&(ae=2),jr===null?jr=[i]:jr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=lf(i,a,t);xu(i,p);break e;case 1:s=a;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ft===null||!Ft.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=sf(i,s,t);xu(i,S);break e}}i=i.return}while(i!==null)}Pf(n)}catch(j){t=j,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Ef(){var e=ui.current;return ui.current=ai,e===null?ai:e}function Sa(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(pn&268435455)&&!(Pi&268435455)||_t(ce,he)}function fi(e,t){var n=M;M|=2;var r=Ef();(ce!==e||he!==t)&&(ut=null,ln(e,t));do try{Bm();break}catch(o){Cf(e,o)}while(!0);if(ra(),M=n,ui.current=r,re!==null)throw Error(E(261));return ce=null,he=0,ae}function Bm(){for(;re!==null;)jf(re)}function Wm(){for(;re!==null&&!ph();)jf(re)}function jf(e){var t=Nf(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Pf(e):re=t,ga.current=null}function Pf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Om(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=Im(n,t,$e),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function Jt(e,t,n){var r=U,o=Be.transition;try{Be.transition=null,U=1,Vm(e,t,n,r)}finally{Be.transition=o,U=r}return null}function Vm(e,t,n,r){do Dn();while(zt!==null);if(M&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ch(e,i),e===ce&&(re=ce=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,zf(Go,function(){return Dn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=U;U=1;var s=M;M|=4,ga.current=null,Fm(e,n),xf(n,e),um(Zl),Ko=!!ql,Zl=ql=null,e.current=n,Am(n),hh(),M=s,U=l,Be.transition=i}else e.current=n;if(Co&&(Co=!1,zt=e,di=o),i=e.pendingLanes,i===0&&(Ft=null),yh(n.stateNode),Ne(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ci)throw ci=!1,e=vs,vs=null,e;return di&1&&e.tag!==0&&Dn(),i=e.pendingLanes,i&1?e===ws?Pr++:(Pr=0,ws=e):Pr=0,Ht(),null}function Dn(){if(zt!==null){var e=id(di),t=Be.transition,n=U;try{if(Be.transition=null,U=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,di=0,M&6)throw Error(E(331));var o=M;for(M|=4,$=e.current;$!==null;){var i=$,l=i.child;if($.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for($=u;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Er(8,h,i)}var c=h.child;if(c!==null)c.return=h,$=c;else for(;$!==null;){h=$;var m=h.sibling,v=h.return;if(yf(h),h===u){$=null;break}if(m!==null){m.return=v,$=m;break}$=v}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Er(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,$=p;break e}$=i.return}}var d=e.current;for($=d;$!==null;){l=$;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,$=g;else e:for(l=d;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ji(9,s)}}catch(j){J(s,s.return,j)}if(s===l){$=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}if(M=o,Ht(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(yi,e)}catch{}r=!0}return r}finally{U=n,Be.transition=t}}return!1}function Bu(e,t,n){t=Qn(n,t),t=lf(e,t,1),e=Mt(e,t,1),t=Se(),e!==null&&(Zr(e,1,t),Ne(e,t))}function J(e,t,n){if(e.tag===3)Bu(e,e,n);else for(;t!==null;){if(t.tag===3){Bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Qn(n,e),e=sf(t,e,1),t=Mt(t,e,1),e=Se(),t!==null&&(Zr(t,1,e),Ne(t,e));break}}t=t.return}}function bm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(he&n)===n&&(ae===4||ae===3&&(he&130023424)===he&&500>ee()-va?ln(e,0):ya|=n),Ne(e,t)}function _f(e,t){t===0&&(e.mode&1?(t=po,po<<=1,!(po&130023424)&&(po=4194304)):t=1);var n=Se();e=yt(e,t),e!==null&&(Zr(e,t,n),Ne(e,n))}function Hm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function Qm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),_f(e,n)}var Nf;Nf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,Tm(e,t,n);je=!!(e.flags&131072)}else je=!1,G&&t.flags&1048576&&Rd(t,ni,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Io(e,t),e=t.pendingProps;var o=Wn(t,we.current);An(t,n),o=da(null,t,r,e,o,n);var i=fa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(i=!0,ei(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,la(t),o.updater=Ei,t.stateNode=o,o._reactInternals=t,ss(t,r,e,n),t=cs(null,t,r,!0,i,n)):(t.tag=0,G&&i&&Js(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ym(r),e=Ye(r,e),o){case 0:t=us(null,t,r,e,n);break e;case 1:t=Ru(null,t,r,e,n);break e;case 11:t=zu(null,t,r,e,n);break e;case 14:t=$u(null,t,r,Ye(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),us(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),Ru(e,t,r,o,n);case 3:e:{if(df(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Fd(e,t),ii(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Qn(Error(E(423)),t),t=Lu(e,t,r,n,o);break e}else if(r!==o){o=Qn(Error(E(424)),t),t=Lu(e,t,r,n,o);break e}else for(Le=Ot(t.stateNode.containerInfo.firstChild),Te=t,G=!0,qe=null,n=Od(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===o){t=vt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Ad(t),e===null&&os(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Jl(r,o)?l=null:i!==null&&Jl(r,i)&&(t.flags|=32),cf(e,t),xe(e,t,l,n),t.child;case 6:return e===null&&os(t),null;case 13:return ff(e,t,n);case 4:return sa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),zu(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(ri,r._currentValue),r._currentValue=l,i!==null)if(tt(i.value,l)){if(i.children===o.children&&!Pe.current){t=vt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=ht(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),is(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),is(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,An(t,n),o=We(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=Ye(r,t.pendingProps),o=Ye(r.type,o),$u(e,t,r,o,n);case 15:return af(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ye(r,o),Io(e,t),t.tag=1,_e(r)?(e=!0,ei(t)):e=!1,An(t,n),of(t,r,o),ss(t,r,o,n),cs(null,t,r,!0,e,n);case 19:return pf(e,t,n);case 22:return uf(e,t,n)}throw Error(E(156,t.tag))};function zf(e,t){return td(e,t)}function Gm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Gm(e,t,n,r)}function ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ym(e){if(typeof e=="function")return ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bs)return 11;if(e===Ws)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ka(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Cn:return sn(n.children,o,i,t);case Us:l=8,o|=8;break;case Rl:return e=Ue(12,n,t,o|2),e.elementType=Rl,e.lanes=i,e;case Ll:return e=Ue(13,n,t,o),e.elementType=Ll,e.lanes=i,e;case Tl:return e=Ue(19,n,t,o),e.elementType=Tl,e.lanes=i,e;case Ac:return _i(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mc:l=10;break e;case Fc:l=9;break e;case Bs:l=11;break e;case Ws:l=14;break e;case Et:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ue(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function _i(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Ac,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function fl(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Km(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ca(e,t,n,r,o,i,l,s,a){return e=new Km(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},la(i),e}function Xm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return Wt;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(_e(n))return zd(e,n,t)}return t}function Rf(e,t,n,r,o,i,l,s,a){return e=Ca(n,r,!0,e,o,i,l,s,a),e.context=$f(null),n=e.current,r=Se(),o=At(n),i=ht(r,o),i.callback=t??null,Mt(n,i,o),e.current.lanes=o,Zr(e,o,r),Ne(e,r),e}function Ni(e,t,n,r){var o=t.current,i=Se(),l=At(o);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(o,t,l),e!==null&&(Je(e,o,l,i),Ro(e,o,l)),l}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ea(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}function qm(){return null}var Lf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ja(e){this._internalRoot=e}zi.prototype.render=ja.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ni(e,t,null,null)};zi.prototype.unmount=ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Ni(null,e,null,null)}),t[gt]=null}};function zi(e){this._internalRoot=e}zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ad();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&cd(e)}};function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Zm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=pi(l);i.call(u)}}var l=Rf(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=l,e[gt]=l.current,Fr(e.nodeType===8?e.parentNode:e),hn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=pi(a);s.call(u)}}var a=Ca(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=a,e[gt]=a.current,Fr(e.nodeType===8?e.parentNode:e),hn(function(){Ni(t,a,n,r)}),a}function Ri(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=pi(l);s.call(a)}}Ni(t,l,e,o)}else l=Zm(n,t,e,o,r);return pi(l)}ld=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(Hs(t,n|1),Ne(t,ee()),!(M&6)&&(Gn=ee()+500,Ht()))}break;case 13:hn(function(){var r=yt(e,1);if(r!==null){var o=Se();Je(r,e,1,o)}}),Ea(e,1)}};Qs=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=Se();Je(t,e,134217728,n)}Ea(e,134217728)}};sd=function(e){if(e.tag===13){var t=At(e),n=yt(e,t);if(n!==null){var r=Se();Je(n,e,t,r)}Ea(e,t)}};ad=function(){return U};ud=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Vl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Si(r);if(!o)throw Error(E(90));Uc(r),Ml(r,o)}}}break;case"textarea":Wc(e,n);break;case"select":t=n.value,t!=null&&In(e,!!n.multiple,t,!1)}};Kc=wa;Xc=hn;var Jm={usingClientEntryPoint:!1,Events:[eo,_n,Si,Gc,Yc,wa]},cr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eg={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jc(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||qm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{yi=Eo.inject(eg),lt=Eo}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jm;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pa(t))throw Error(E(200));return Xm(e,t,null,n)};Oe.createRoot=function(e,t){if(!Pa(e))throw Error(E(299));var n=!1,r="",o=Lf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ca(e,1,!1,null,null,n,!1,r,o),e[gt]=t.current,Fr(e.nodeType===8?e.parentNode:e),new ja(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Jc(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return hn(e)};Oe.hydrate=function(e,t,n){if(!$i(t))throw Error(E(200));return Ri(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Pa(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Lf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Rf(t,null,e,1,n??null,o,!1,i,l),e[gt]=t.current,Fr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new zi(t)};Oe.render=function(e,t,n){if(!$i(t))throw Error(E(200));return Ri(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!$i(e))throw Error(E(40));return e._reactRootContainer?(hn(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Oe.unstable_batchedUpdates=wa;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$i(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ri(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function Tf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tf)}catch(e){console.error(e)}}Tf(),Lc.exports=Oe;var tg=Lc.exports;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qr.apply(null,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const bu="popstate";function ng(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:s}=r.location;return ks("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:If(o)}return og(t,n,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _a(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rg(){return Math.random().toString(36).substr(2,8)}function Hu(e,t){return{usr:e.state,key:e.key,idx:t}}function ks(e,t,n,r){return n===void 0&&(n=null),Qr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?er(t):t,{state:n,key:t&&t.key||r||rg()})}function If(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function er(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function og(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=$t.Pop,a=null,u=h();u==null&&(u=0,l.replaceState(Qr({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function c(){s=$t.Pop;let k=h(),p=k==null?null:k-u;u=k,a&&a({action:s,location:x.location,delta:p})}function m(k,p){s=$t.Push;let d=ks(x.location,k,p);u=h()+1;let g=Hu(d,u),S=x.createHref(d);try{l.pushState(g,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(S)}i&&a&&a({action:s,location:x.location,delta:1})}function v(k,p){s=$t.Replace;let d=ks(x.location,k,p);u=h();let g=Hu(d,u),S=x.createHref(d);l.replaceState(g,"",S),i&&a&&a({action:s,location:x.location,delta:0})}function y(k){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof k=="string"?k:If(k);return d=d.replace(/ $/,"%20"),oe(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return s},get location(){return e(o,l)},listen(k){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(bu,c),a=k,()=>{o.removeEventListener(bu,c),a=null}},createHref(k){return t(o,k)},createURL:y,encodeLocation(k){let p=y(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:v,go(k){return l.go(k)}};return x}var Qu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qu||(Qu={}));function ig(e,t,n){return n===void 0&&(n="/"),lg(e,t,n)}function lg(e,t,n,r){let o=typeof t=="string"?er(t):t,i=Ff(o.pathname||"/",n);if(i==null)return null;let l=Of(e);sg(l);let s=null,a=wg(i);for(let u=0;s==null&&u<l.length;++u)s=gg(l[u],a);return s}function Of(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(oe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=an([r,a.relativePath]),h=n.concat(a);i.children&&i.children.length>0&&(oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Of(i.children,t,h,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:hg(u,i.index),routesMeta:h})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of Mf(i.path))o(i,l,a)}),t}function Mf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Mf(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function sg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:mg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ag=/^:[\w-]+$/,ug=3,cg=2,dg=1,fg=10,pg=-2,Gu=e=>e==="*";function hg(e,t){let n=e.split("/"),r=n.length;return n.some(Gu)&&(r+=pg),t&&(r+=cg),n.filter(o=>!Gu(o)).reduce((o,i)=>o+(ag.test(i)?ug:i===""?dg:fg),r)}function mg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function gg(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",c=yg({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},h),m=a.route;if(!c)return null;Object.assign(o,c.params),l.push({params:o,pathname:an([i,c.pathname]),pathnameBase:Eg(an([i,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(i=an([i,c.pathnameBase]))}return l}function yg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,h,c)=>{let{paramName:m,isOptional:v}=h;if(m==="*"){let x=s[c]||"";l=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=s[c];return v&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function vg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_a(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function wg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _a(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ff(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const xg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sg=e=>xg.test(e);function kg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?er(e):e,i;if(n)if(Sg(n))i=n;else{if(n.includes("//")){let l=n;n=Uf(n),_a(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?i=Yu(n.substring(1),"/"):i=Yu(n,t)}else i=t;return{pathname:i,search:jg(r),hash:Pg(o)}}function Yu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Af(e,t){let n=Cg(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Df(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=er(e):(o=Qr({},e),oe(!o.pathname||!o.pathname.includes("?"),pl("?","pathname","search",o)),oe(!o.pathname||!o.pathname.includes("#"),pl("#","pathname","hash",o)),oe(!o.search||!o.search.includes("#"),pl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),c-=1;o.pathname=m.join("/")}s=c>=0?t[c]:"/"}let a=kg(o,s),u=l&&l!=="/"&&l.endsWith("/"),h=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const Uf=e=>e.replace(/\/\/+/g,"/"),an=e=>Uf(e.join("/")),Eg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _g(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bf=["post","put","patch","delete"];new Set(Bf);const Ng=["get",...Bf];new Set(Ng);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gr.apply(null,arguments)}const Na=N.createContext(null),zg=N.createContext(null),no=N.createContext(null),Li=N.createContext(null),vn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Wf=N.createContext(null);function ro(){return N.useContext(Li)!=null}function za(){return ro()||oe(!1),N.useContext(Li).location}function Vf(e){N.useContext(no).static||N.useLayoutEffect(e)}function $g(){let{isDataRoute:e}=N.useContext(vn);return e?Vg():Rg()}function Rg(){ro()||oe(!1);let e=N.useContext(Na),{basename:t,future:n,navigator:r}=N.useContext(no),{matches:o}=N.useContext(vn),{pathname:i}=za(),l=JSON.stringify(Af(o,n.v7_relativeSplatPath)),s=N.useRef(!1);return Vf(()=>{s.current=!0}),N.useCallback(function(u,h){if(h===void 0&&(h={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=Df(u,JSON.parse(l),i,h.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:an([t,c.pathname])),(h.replace?r.replace:r.push)(c,h.state,h)},[t,r,l,i,e])}function Lg(e,t){return Tg(e,t)}function Tg(e,t,n,r){ro()||oe(!1);let{navigator:o}=N.useContext(no),{matches:i}=N.useContext(vn),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=za(),h;if(t){var c;let k=typeof t=="string"?er(t):t;a==="/"||(c=k.pathname)!=null&&c.startsWith(a)||oe(!1),h=k}else h=u;let m=h.pathname||"/",v=m;if(a!=="/"){let k=a.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=ig(e,{pathname:v}),x=Ag(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:an([a,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:an([a,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&x?N.createElement(Li.Provider,{value:{location:Gr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:$t.Pop}},x):x}function Ig(){let e=Wg(),t=_g(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:o},n):null,null)}const Og=N.createElement(Ig,null);class Mg extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(vn.Provider,{value:this.props.routeContext},N.createElement(Wf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Fg(e){let{routeContext:t,match:n,children:r}=e,o=N.useContext(Na);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(vn.Provider,{value:t},r)}function Ag(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let h=l.findIndex(c=>c.route.id&&s?.[c.route.id]!==void 0);h>=0||oe(!1),l=l.slice(0,Math.min(l.length,h+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let c=l[h];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=h),c.route.id){let{loaderData:m,errors:v}=n,y=c.route.loader&&m[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||y){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,c,m)=>{let v,y=!1,x=null,k=null;n&&(v=s&&c.route.id?s[c.route.id]:void 0,x=c.route.errorElement||Og,a&&(u<0&&m===0?(bg("route-fallback"),y=!0,k=null):u===m&&(y=!0,k=c.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,m+1)),d=()=>{let g;return v?g=x:y?g=k:c.route.Component?g=N.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=h,N.createElement(Fg,{match:c,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?N.createElement(Mg,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var bf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bf||{}),Hf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hf||{});function Dg(e){let t=N.useContext(Na);return t||oe(!1),t}function Ug(e){let t=N.useContext(zg);return t||oe(!1),t}function Bg(e){let t=N.useContext(vn);return t||oe(!1),t}function Qf(e){let t=Bg(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function Wg(){var e;let t=N.useContext(Wf),n=Ug(),r=Qf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Vg(){let{router:e}=Dg(bf.UseNavigateStable),t=Qf(Hf.UseNavigateStable),n=N.useRef(!1);return Vf(()=>{n.current=!0}),N.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Gr({fromRouteId:t},i)))},[e,t])}const Ku={};function bg(e,t,n){Ku[e]||(Ku[e]=!0)}function Hg(e,t){e?.v7_startTransition,e?.v7_relativeSplatPath}function Qg(e){let{to:t,replace:n,state:r,relative:o}=e;ro()||oe(!1);let{future:i,static:l}=N.useContext(no),{matches:s}=N.useContext(vn),{pathname:a}=za(),u=$g(),h=Df(t,Af(s,i.v7_relativeSplatPath),a,o==="path"),c=JSON.stringify(h);return N.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:o}),[u,c,o,n,r]),null}function en(e){oe(!1)}function Gg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=$t.Pop,navigator:i,static:l=!1,future:s}=e;ro()&&oe(!1);let a=t.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:a,navigator:i,static:l,future:Gr({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=er(r));let{pathname:h="/",search:c="",hash:m="",state:v=null,key:y="default"}=r,x=N.useMemo(()=>{let k=Ff(h,a);return k==null?null:{location:{pathname:k,search:c,hash:m,state:v,key:y},navigationType:o}},[a,h,c,m,v,y,o]);return x==null?null:N.createElement(no.Provider,{value:u},N.createElement(Li.Provider,{children:n,value:x}))}function Yg(e){let{children:t,location:n}=e;return Lg(Cs(t),n)}new Promise(()=>{});function Cs(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,o)=>{if(!N.isValidElement(r))return;let i=[...t,o];if(r.type===N.Fragment){n.push.apply(n,Cs(r.props.children,i));return}r.type!==en&&oe(!1),!r.props.index||!r.props.children||oe(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Cs(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Kg="6";try{window.__reactRouterVersion=Kg}catch{}const Xg="startTransition",Xu=bp[Xg];function qg(e){let{basename:t,children:n,future:r,window:o}=e,i=N.useRef();i.current==null&&(i.current=ng({window:o,v5Compat:!0}));let l=i.current,[s,a]=N.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},h=N.useCallback(c=>{u&&Xu?Xu(()=>a(c)):a(c)},[a,u]);return N.useLayoutEffect(()=>l.listen(h),[l,h]),N.useEffect(()=>Hg(r),[r]),N.createElement(Gg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}var qu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(qu||(qu={}));var Zu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Zu||(Zu={}));var Gf,Ju=tg;Gf=Ju.createRoot,Ju.hydrateRoot;const Zg={name:"Divvylore",tagline:"Turn your website into sales and support on autopilot with AI agents"},Jg={base:"https://app.divvylore.com",register:"https://app.divvylore.com/register",login:"https://app.divvylore.com/login"},e0={privacyPolicy:"https://blog.divvylore.com/privacy-policy",termsAndConditions:"https://blog.divvylore.com/terms-and-conditions",refundPolicy:"https://blog.divvylore.com/refund-policy"},t0=[{label:"Showcase",href:"#showcase"},{label:"Product",href:"#product"},{label:"How it works",href:"#how-it-works"},{label:"Pricing",href:"#pricing"}],n0={title:"Turn your website into sales and support on autopilot with AI agents",description:"Start with an agent, a website, or content. Divvylore captures leads, resolves support, and keeps your knowledge flowing — so visitors get answers without waiting on your team.",trustLine:"Free to start · No credit card required",primaryCta:{label:"Try for free",url:"https://app.divvylore.com/register"},secondaryCta:{label:"See how it works",url:"#how-it-works"}},r0=[{value:"Sales + Support",label:"one agent covers both"},{value:"3 surfaces",label:"agents, websites, content"},{value:"24/7",label:"always-on visitor coverage"},{value:"Minutes",label:"from signup to live agent"}],o0={title:"See what autopilot looks like",subtitle:"Short demos of agents, websites, and content — video clips can drop in later without changing the layout.",items:[{id:"agent-sales",title:"Sales agent on your site",caption:"Qualify visitors and book next steps in chat",badge:"Coming soon",videoUrl:"",posterLabel:"Agent · Sales"},{id:"agent-support",title:"Support that resolves",caption:"Answer common issues and hand off when needed",badge:"Coming soon",videoUrl:"",posterLabel:"Agent · Support"},{id:"website-publish",title:"Launch a website",caption:"Publish pages, then embed your agent where intent is high",badge:"Coming soon",videoUrl:"",posterLabel:"Website"},{id:"content-seo",title:"Content that feeds the agent",caption:"Articles that rank and become agent knowledge",badge:"Coming soon",videoUrl:"",posterLabel:"Content & SEO"}]},i0={title:"Everything you need to go on autopilot",subtitle:"Pick one outcome to start. Add the rest later — same platform, same knowledge.",cards:[{title:"AI agents for sales & support",description:"Put an agent on your site in minutes. Answer visitors, capture leads, and resolve common issues.",accent:"agents"},{title:"Launch a website",description:"Publish a polished site, then add your agent so every visit can convert or resolve.",accent:"website"},{title:"Grow with content & SEO",description:"Turn topics into articles that strengthen discovery and feed the same knowledge your agent uses.",accent:"content"}]},l0={title:"Four simple steps to go live",subtitle:"From first visit to ongoing improvement — without rebuilding your stack.",steps:[{title:"Choose how you start",description:"Begin with an agent, a website, or content. You can add the other pieces anytime."},{title:"Deploy on your site",description:"Configure prompts, tools, and guardrails so the agent can sell and support with your brand voice."},{title:"Feed it real knowledge",description:"Publish content and connect context so answers stay accurate as your business grows."},{title:"Improve from outcomes",description:"Review chats, leads, and handoffs — then tighten what the agent says and does."}]},s0={title:"Built for real customer journeys",subtitle:"Not a toy chatbot — the ingredients of an autopilot website.",items:[{title:"Lead capture that feels human",description:"Qualify visitors in conversation and pass clean context when a deal is ready."},{title:"Support that resolves",description:"Handle common issues with grounded answers and escalate when humans should take over."},{title:"Website publishing",description:"Ship pages that look like your brand, then embed the agent where intent is highest."},{title:"Content that fuels SEO and agents",description:"Articles strengthen discovery and become the knowledge your agent answers from."},{title:"Guardrails and handoff",description:"Keep responses on-brand and route edge cases with full conversation history."},{title:"Analytics you can act on",description:"See what visitors ask, what converts, and where the agent needs better knowledge."}]},a0={title:"Safe for customer-facing work",subtitle:"Tenant isolation, secure transport, and response guardrails so autopilot stays predictable.",items:[{title:"Your data stays controlled",description:"Tenant-aware design and scoped execution protect customer boundaries."},{title:"Encrypted by default",description:"Secure transport and protected service boundaries across the platform."},{title:"Guardrails for responses",description:"Policies reduce off-topic and unsafe outputs in sales and support chats."}]},u0={title:"Simple pricing that grows with you",subtitle:"Start free or pick a plan. Expand as traffic, agents, and content scale.",plans:[{name:"Starter",price:"$29",period:"/month",description:"For teams launching their first AI agent on a site.",features:["1 production agent","Portal access","Basic analytics","Email support"],highlighted:!1,ctaLabel:"Choose Starter",planCode:"starter"},{name:"Growth",price:"$99",period:"/month",description:"For teams running sales and support agents in production.",features:["5 production agents","Advanced configuration","Queue-first chat flow","Priority support"],highlighted:!0,ctaLabel:"Choose Growth",planCode:"growth"},{name:"Scale",price:"Custom",period:"",description:"For organizations that need governance and dedicated onboarding.",features:["Custom agent limits","Tenant governance","Dedicated onboarding","Architecture support"],highlighted:!1,ctaLabel:"Contact Sales",planCode:"scale"}]},c0={title:"Frequently asked questions",subtitle:"Straight answers before you launch.",items:[{question:"Do I need a website first, or can I start with an agent?",answer:"Either path works. Start with an agent on an existing site, launch a new site then add the agent, or begin with content that feeds both."},{question:"Is this only for support chat?",answer:"No. Divvylore covers sales and support — lead capture, resolution, website publishing, and content that keeps the agent informed."},{question:"Where do registration and login happen?",answer:"All account actions happen in app.divvylore.com."},{question:"Can we keep a human in the loop?",answer:"Yes. Escalate complex or high-stakes conversations to people with full context."},{question:"Will short demo videos be available?",answer:"Yes. Showcase slots on this page are ready for short clips — drop in a video URL when you have them."}]},d0={copyright:"© 2026 Divvylore. All rights reserved.",quickLinks:[{label:"Get Started",url:"https://app.divvylore.com/register"},{label:"Login",url:"https://app.divvylore.com/login"},{label:"Pricing",url:"#pricing"}]},pe={brand:Zg,appUrls:Jg,legalUrls:e0,navigation:t0,hero:n0,stats:r0,showcase:o0,highlights:i0,howItWorks:l0,features:s0,security:a0,pricing:u0,faq:c0,footer:d0};var b="-ms-",_r="-moz-",A="-webkit-",Yf="comm",Ti="rule",$a="decl",f0="@import",p0="@namespace",Kf="@keyframes",h0="@layer",Xf=Math.abs,Ra=String.fromCharCode,Es=Object.assign;function m0(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function qf(e){return e.trim()}function ct(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Ao(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function mn(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function Zf(e){return e.length}function gr(e,t){return t.push(e),e}function g0(e,t){return e.map(t).join("")}function ec(e,t){return e.filter(function(n){return!ct(n,t)})}var Ii=1,Yn=1,Jf=0,be=0,ne=0,tr="";function Oi(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ii,column:Yn,length:l,return:"",siblings:s}}function Ct(e,t){return Es(Oi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xn(e){for(;e.root;)e=Ct(e.root,{children:[e]});gr(e,e.siblings)}function y0(){return ne}function v0(){return ne=be>0?se(tr,--be):0,Yn--,ne===10&&(Yn=1,Ii--),ne}function et(){return ne=be<Jf?se(tr,be++):0,Yn++,ne===10&&(Yn=1,Ii++),ne}function Rt(){return se(tr,be)}function Do(){return be}function Mi(e,t){return mn(tr,e,t)}function Yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function w0(e){return Ii=Yn=1,Jf=Xe(tr=e),be=0,[]}function x0(e){return tr="",e}function hl(e){return qf(Mi(be-1,js(e===91?e+2:e===40?e+1:e)))}function S0(e){for(;(ne=Rt())&&ne<33;)et();return Yr(e)>2||Yr(ne)>3?"":" "}function k0(e,t){for(;--t&&et()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Mi(e,Do()+(t<6&&Rt()==32&&et()==32))}function js(e){for(;et();)switch(ne){case e:return be;case 34:case 39:e!==34&&e!==39&&js(ne);break;case 40:e===41&&js(e);break;case 92:et();break}return be}function C0(e,t){for(;et()&&e+ne!==57;)if(e+ne===84&&Rt()===47)break;return"/*"+Mi(t,be-1)+"*"+Ra(e===47?e:et())}function E0(e){for(;!Yr(Rt());)et();return Mi(e,be)}function j0(e){return x0(Uo("",null,null,null,[""],e=w0(e),0,[0],e))}function Uo(e,t,n,r,o,i,l,s,a){for(var u=0,h=0,c=l,m=0,v=0,y=0,x=1,k=1,p=1,d=0,g="",S=o,j=i,_=r,C=g;k;)switch(y=d,d=et()){case 40:if(y!=108&&se(C,c-1)==58){Ao(C+=I(hl(d),"&","&\f"),"&\f",Xf(u?s[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:C+=hl(d);break;case 9:case 10:case 13:case 32:C+=S0(y);break;case 92:C+=k0(Do()-1,7);continue;case 47:switch(Rt()){case 42:case 47:gr(P0(C0(et(),Do()),t,n,a),a),(Yr(y||1)==5||Yr(Rt()||1)==5)&&Xe(C)&&mn(C,-1,void 0)!==" "&&(C+=" ");break;default:C+="/"}break;case 123*x:s[u++]=Xe(C)*p;case 125*x:case 59:case 0:switch(d){case 0:case 125:k=0;case 59+h:p==-1&&(C=I(C,/\f/g,"")),v>0&&(Xe(C)-c||x===0&&y===47)&&gr(v>32?nc(C+";",r,n,c-1,a):nc(I(C," ","")+";",r,n,c-2,a),a);break;case 59:C+=";";default:if(gr(_=tc(C,t,n,u,h,o,s,g,S=[],j=[],c,i),i),d===123)if(h===0)Uo(C,t,_,_,S,i,c,s,j);else{switch(m){case 99:if(se(C,3)===110)break;case 108:if(se(C,2)===97)break;default:h=0;case 100:case 109:case 115:}h?Uo(e,_,_,r&&gr(tc(e,_,_,0,0,o,s,g,o,S=[],c,j),j),o,j,c,s,r?S:j):Uo(C,_,_,_,[""],j,0,s,j)}}u=h=v=0,x=p=1,g=C="",c=l;break;case 58:c=1+Xe(C),v=y;default:if(x<1){if(d==123)--x;else if(d==125&&x++==0&&v0()==125)continue}switch(C+=Ra(d),d*x){case 38:p=h>0?1:(C+="\f",-1);break;case 44:s[u++]=(Xe(C)-1)*p,p=1;break;case 64:Rt()===45&&(C+=hl(et())),m=Rt(),h=c=Xe(g=C+=E0(Do())),d++;break;case 45:y===45&&Xe(C)==2&&(x=0)}}return i}function tc(e,t,n,r,o,i,l,s,a,u,h,c){for(var m=o-1,v=o===0?i:[""],y=Zf(v),x=0,k=0,p=0;x<r;++x)for(var d=0,g=mn(e,m+1,m=Xf(k=l[x])),S=e;d<y;++d)(S=qf(k>0?v[d]+" "+g:I(g,/&\f/g,v[d])))&&(a[p++]=S);return Oi(e,t,n,o===0?Ti:s,a,u,h,c)}function P0(e,t,n,r){return Oi(e,t,n,Yf,Ra(y0()),mn(e,2,-2),0,r)}function nc(e,t,n,r,o){return Oi(e,t,n,$a,mn(e,0,r),mn(e,r+1,-1),r,o)}function ep(e,t,n){switch(m0(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return A+e+e;case 4855:return A+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return _r+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+_r+e+b+e+e;case 5936:switch(se(e,t+11)){case 114:return A+e+b+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+b+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+b+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+b+e+e;case 6165:return A+e+b+"flex-"+e+e;case 5187:return A+e+I(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+b+"flex-$1$2")+e;case 5443:return A+e+b+"flex-item-"+I(e,/flex-|-self/g,"")+(ct(e,/flex-|baseline/)?"":b+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return A+e+b+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+b+I(e,"shrink","negative")+e;case 5292:return A+e+b+I(e,"basis","preferred-size")+e;case 6060:return A+"box-"+I(e,"-grow","")+A+e+b+I(e,"grow","positive")+e;case 4554:return A+I(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+b+"flex-pack:$3"),/space-between/,"justify")+A+e+e;case 4200:if(!ct(e,/flex-|baseline/))return b+"grid-column-align"+mn(e,t)+e;break;case 2592:case 3360:return b+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ct(r.props,/grid-\w+-end/)})?~Ao(e+(n=n[t].value),"span",0)?e:b+I(e,"-start","")+e+b+"grid-row-span:"+(~Ao(n,"span",0)?ct(n,/\d+/):+ct(n,/\d+/)-+ct(e,/\d+/))+";":b+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ct(r.props,/grid-\w+-start/)})?e:b+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+_r+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ao(e,"stretch",0)?ep(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return b+o+":"+i+u+(l?b+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(se(e,t+6)===121)return I(e,":",":"+A)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(se(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+b+"$2box$3")+e;case 100:return I(e,":",":"+b)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function hi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function _0(e,t,n,r){switch(e.type){case h0:if(e.children.length)break;case f0:case p0:case $a:return e.return=e.return||e.value;case Yf:return"";case Kf:return e.return=e.value+"{"+hi(e.children,r)+"}";case Ti:if(!Xe(e.value=e.props.join(",")))return""}return Xe(n=hi(e.children,r))?e.return=e.value+"{"+n+"}":""}function N0(e){var t=Zf(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function z0(e){return function(t){t.root||(t=t.return)&&e(t)}}function $0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $a:e.return=ep(e.value,e.length,n);return;case Kf:return hi([Ct(e,{value:I(e.value,"@","@"+A)})],r);case Ti:if(e.length)return g0(n=e.props,function(o){switch(ct(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xn(Ct(e,{props:[I(o,/:(read-\w+)/,":"+_r+"$1")]})),xn(Ct(e,{props:[o]})),Es(e,{props:ec(n,r)});break;case"::placeholder":xn(Ct(e,{props:[I(o,/:(plac\w+)/,":"+A+"input-$1")]})),xn(Ct(e,{props:[I(o,/:(plac\w+)/,":"+_r+"$1")]})),xn(Ct(e,{props:[I(o,/:(plac\w+)/,b+"input-$1")]})),xn(Ct(e,{props:[o]})),Es(e,{props:ec(n,r)});break}return""})}}var Un={},ml,gl;const Kn=typeof process<"u"&&Un!==void 0&&(Un.REACT_APP_SC_ATTR||Un.SC_ATTR)||"data-styled",tp="active",np="data-styled-version",Fi="6.4.2",La=`/*!sc*/
`,Nr=typeof window<"u"&&typeof document<"u";function rc(e){if(typeof process<"u"&&Un!==void 0){const t=Un[e];if(t!==void 0&&t!=="")return t!=="false"}}const R0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(gl=(ml=rc("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&ml!==void 0?ml:rc("SC_DISABLE_SPEEDY"))!==null&&gl!==void 0?gl:typeof process<"u"&&Un!==void 0&&!1),L0="sc-keyframes-",T0={};function Ai(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let Bo=new Map,mi=new Map,Wo=1;const jo=e=>{if(Bo.has(e))return Bo.get(e);for(;mi.has(Wo);)Wo++;const t=Wo++;return Bo.set(e,t),mi.set(t,e),t},I0=e=>mi.get(e),O0=(e,t)=>{Wo=t+1,Bo.set(e,t),mi.set(t,e)},Ta=Object.freeze([]),Xn=Object.freeze({});function rp(e,t,n=Xn){return e.theme!==n.theme&&e.theme||t||n.theme}const M0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,F0=/(^-|-$)/g;function op(e){return e.replace(M0,"-").replace(F0,"")}const A0=/(a)(d)/gi,oc=e=>String.fromCharCode(e+(e>25?39:97));function ip(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=oc(t%52)+n;return(oc(t%52)+n).replace(A0,"$1-$2")}const Ps=5381,un=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},lp=e=>un(Ps,e);function sp(e){return ip(lp(e)>>>0)}function D0(e){return e.displayName||e.name||"Component"}function _s(e){return typeof e=="string"&&!0}function U0(e){return _s(e)?`styled.${e}`:`Styled(${D0(e)})`}const ap=Symbol.for("react.memo"),B0=Symbol.for("react.forward_ref"),W0={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},V0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},up={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b0={[B0]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ap]:up};function ic(e){return("type"in(t=e)&&t.type.$$typeof)===ap?up:"$$typeof"in e?b0[e.$$typeof]:W0;var t}const H0=Object.defineProperty,Q0=Object.getOwnPropertyNames,G0=Object.getOwnPropertySymbols,Y0=Object.getOwnPropertyDescriptor,K0=Object.getPrototypeOf,X0=Object.prototype;function cp(e,t,n){if(typeof t!="string"){const r=K0(t);r&&r!==X0&&cp(e,r,n);const o=Q0(t).concat(G0(t)),i=ic(e),l=ic(t);for(let s=0;s<o.length;++s){const a=o[s];if(!(a in V0||n&&n[a]||l&&a in l||i&&a in i)){const u=Y0(t,a);try{H0(e,a,u)}catch{}}}}return e}function oo(e){return typeof e=="function"}const q0=Symbol.for("react.forward_ref");function Ia(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===q0&&"styledComponentId"in e}function yr(e,t){return e&&t?e+" "+t:e||t||""}function Ns(e,t){return e.join("")}function Kr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function zs(e,t,n=!1){if(!n&&!Kr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=zs(e[r],t[r]);else if(Kr(t))for(const r in t)e[r]=zs(e[r],t[r]);return e}function dp(e,t){Object.defineProperty(e,"toString",{value:t})}const Z0=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,i=o.length;let l=i;for(;e>=l;)if(l<<=1,l<0)throw Ai(16,`${e}`);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(let s=i;s<l;s++)this.groupSizes[s]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+La;return t}},J0=`style[${Kn}][${np}="${Fi}"]`,ey=new RegExp(`^${Kn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),lc=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,$s=e=>{if(!e)return document;if(lc(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(lc(t))return t}return document},ty=(e,t,n)=>{const r=n.split(",");let o;for(let i=0,l=r.length;i<l;i++)(o=r[i])&&e.registerName(t,o)},ny=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(La),o=[];for(let i=0,l=r.length;i<l;i++){const s=r[i].trim();if(!s)continue;const a=s.match(ey);if(a){const u=0|parseInt(a[1],10),h=a[2];u!==0&&(O0(h,u),ty(e,h,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}},yl=e=>{const t=$s(e.options.target).querySelectorAll(J0);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(Kn)!==tp&&(ny(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let dr=!1;function ry(){if(dr!==!1)return dr;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return dr=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return dr=t.getAttribute("content")||void 0}return dr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const fp=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),i=(a=>{const u=Array.from(a.querySelectorAll(`style[${Kn}]`));return u[u.length-1]})(r),l=i!==void 0?i.nextSibling:null;o.setAttribute(Kn,tp),o.setAttribute(np,Fi);const s=t||ry();return s&&o.setAttribute("nonce",s),r.insertBefore(o,l),o},oy=class{constructor(e,t){this.element=fp(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,l=o.length;i<l;i++){const s=o[i];if(s.ownerNode===n)return s}throw Ai(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},iy=class{constructor(e,t){this.element=fp(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let sc=Nr;const ly={isServer:!Nr,useCSSOMInjection:!R0};class io{static registerId(t){return jo(t)}constructor(t=Xn,n={},r){this.options=Object.assign(Object.assign({},ly),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Nr&&sc&&(sc=!1,yl(this)),dp(this,()=>(o=>{const i=o.getTag(),{length:l}=i;let s="";for(let a=0;a<l;a++){const u=I0(a);if(u===void 0)continue;const h=o.names.get(u);if(h===void 0||!h.size)continue;const c=i.getGroup(a);if(c.length===0)continue;const m=Kn+".g"+a+'[id="'+u+'"]';let v="";for(const y of h)y.length>0&&(v+=y+",");s+=c+m+'{content:"'+v+'"}'+La}return s})(this))}rehydrate(){!this.server&&Nr&&yl(this)}reconstructWithOptions(t,n=!0){const r=new io(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Nr&&t.target!==this.options.target&&$s(this.options.target)!==$s(t.target)&&yl(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new oy(r,o):new iy(r,o))(this.options),new Z0(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){jo(t),t.startsWith(L0)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(jo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(jo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const pp=new WeakSet,sy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ay(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in sy||e.startsWith("--")?String(t).trim():t+"px"}const tn=47;function ac(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const uy=Symbol.for("sc-keyframes");function cy(e){return typeof e=="object"&&e!==null&&uy in e}function hp(e){return oo(e)&&!(e.prototype&&e.prototype.isReactComponent)}const mp=e=>e==null||e===!1||e==="",dy=Symbol.for("react.client.reference");function uc(e){return e.$$typeof===dy}function gp(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!mp(r)&&(Array.isArray(r)&&pp.has(r)||oo(r)?t.push(ac(n)+":",r,";"):Kr(r)?(t.push(n+" {"),gp(r,t),t.push("}")):t.push(ac(n)+": "+ay(n,r)+";"))}}function Ut(e,t,n,r,o=[]){if(mp(e))return o;const i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(uc(e))return o;if(hp(e)&&t){const l=e(t);return Ut(l,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let l=0;l<e.length;l++)Ut(e[l],t,n,r,o);return o}return Ia(e)?(o.push(`.${e.styledComponentId}`),o):cy(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):uc(e)?o:Kr(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(gp(e,o),o):(o.push(e.toString()),o)}const fy=lp(Fi);class py{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=un(fy,n),this.baseStyle=r,io.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let i="";for(let l=0;l<this.rules.length;l++){const s=this.rules[l];if(typeof s=="string")i+=s;else if(s)if(hp(s)){const a=s(t);typeof a=="string"?i+=a:a!=null&&a!==!1&&(i+=Ns(Ut(a,t,n,r)))}else i+=Ns(Ut(s,t,n,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const l=r.hash?r.hash+i:i;let s=this.dynamicNameCache.get(l);if(!s){if(s=ip(un(un(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){const a=this.dynamicNameCache.keys().next().value;a!==void 0&&this.dynamicNameCache.delete(a)}this.dynamicNameCache.set(l,s)}if(!n.hasNameForId(this.componentId,s)){const a=r(i,"."+s,void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=yr(o,s)}}return o}}const hy=/&/g;function yp(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function vl(e){const t=e.length;let n="",r=0,o=0,i=0,l=!1,s=!1;for(let a=0;a<t;a++){const u=e.charCodeAt(a);if(i!==0||l||u!==tn||e.charCodeAt(a+1)!==42)if(l)u===42&&e.charCodeAt(a+1)===tn&&(l=!1,a++);else if(u!==34&&u!==39||yp(e,a)){if(i===0)if(u===123)o++;else if(u===125){if(o--,o<0){s=!0;let h=a+1;for(;h<t;){const c=e.charCodeAt(h);if(c===59||c===10)break;h++}h<t&&e.charCodeAt(h)===59&&h++,o=0,a=h-1,r=h;continue}o===0&&(n+=e.substring(r,a+1),r=a+1)}else u===59&&o===0&&(n+=e.substring(r,a+1),r=a+1)}else i===0?i=u:i===u&&(i=0);else l=!0,a++}return s||o!==0||i!==0?(r<t&&o===0&&i===0&&(n+=e.substring(r)),n):e}function vp(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const i=e[o];if(i.type==="rule"){i.value=(n+i.value).replaceAll(",",r);const l=i.props,s=[];for(let a=0;a<l.length;a++)s[a]=n+l[a];i.props=s}Array.isArray(i.children)&&i.type!=="@keyframes"&&vp(i.children,t)}return e}function my({options:e=Xn,plugins:t=Ta}=Xn){let n,r,o;const i=(m,v,y)=>y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?`.${n}`:m,l=t.slice();l.push(m=>{m.type===Ti&&m.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),m.props[0]=m.props[0].replace(hy,r).replace(o,i))}),e.prefix&&l.push($0),l.push(_0);let s=[];const a=N0(l.concat(z0(m=>s.push(m)))),u=(m,v="",y="",x="&")=>{n=x,r=v,o=void 0;const k=function(d){const g=d.indexOf("//")!==-1,S=d.indexOf("}")!==-1;if(!g&&!S)return d;if(!g)return vl(d);const j=d.length;let _="",C=0,P=0,D=0,T=0,Q=0,He=!1;for(;P<j;){const q=d.charCodeAt(P);if(q!==34&&q!==39||yp(d,P))if(D===0)if(q===tn&&P+1<j&&d.charCodeAt(P+1)===42){for(P+=2;P+1<j&&(d.charCodeAt(P)!==42||d.charCodeAt(P+1)!==tn);)P++;P+=2}else if(q!==40)if(q!==41)if(T>0)P++;else if(q===42&&P+1<j&&d.charCodeAt(P+1)===tn)_+=d.substring(C,P),P+=2,C=P,He=!0;else if(q===tn&&P+1<j&&d.charCodeAt(P+1)===tn){for(_+=d.substring(C,P);P<j&&d.charCodeAt(P)!==10;)P++;C=P,He=!0}else q===123?Q++:q===125&&Q--,P++;else T>0&&T--,P++;else T++,P++;else P++;else D===0?D=q:D===q&&(D=0),P++}return He?(C<j&&(_+=d.substring(C)),Q===0?_:vl(_)):Q===0?d:vl(d)}(m);let p=j0(y||v?y+" "+v+" { "+k+" }":k);return e.namespace&&(p=vp(p,e.namespace)),s=[],hi(p,a),s},h=e;let c=Ps;for(let m=0;m<t.length;m++)t[m].name||Ai(15),c=un(c,t[m].name);return h?.namespace&&(c=un(c,h.namespace)),h?.prefix&&(c=un(c,"p")),u.hash=c!==Ps?c.toString():"",u}const gy=new io,yy=my(),wp=Re.createContext({shouldForwardProp:void 0,styleSheet:gy,stylis:yy,stylisPlugins:void 0});wp.Consumer;function xp(){return Re.useContext(wp)}const Oa=Re.createContext(void 0);Oa.Consumer;const cc=Object.prototype.hasOwnProperty,wl={};function vy(e,t){const n=typeof e!="string"?"sc":op(e);wl[n]=(wl[n]||0)+1;const r=n+"-"+sp(Fi+n+wl[n]);return t?t+"-"+r:r}function wy(e,t,n){const r=Ia(e),o=e,i=!_s(e),{attrs:l=Ta,componentId:s=vy(t.displayName,t.parentComponentId),displayName:a=U0(e)}=t,u=t.displayName&&t.componentId?op(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l;let{shouldForwardProp:c}=t;if(r&&o.shouldForwardProp){const x=o.shouldForwardProp;if(t.shouldForwardProp){const k=t.shouldForwardProp;c=(p,d)=>x(p,d)&&k(p,d)}else c=x}const m=new py(n,u,r?o.componentStyle:void 0);function v(x,k){return function(p,d,g){const{attrs:S,componentStyle:j,defaultProps:_,foldedComponentIds:C,styledComponentId:P,target:D}=p,T=Re.useContext(Oa),Q=xp(),He=p.shouldForwardProp||Q.shouldForwardProp,q=rp(d,T,_)||Xn;let Qe,Qt;{const R=Re.useRef(null),L=R.current;if(L!==null&&L[1]===q&&L[2]===Q.styleSheet&&L[3]===Q.stylis&&L[7]===j&&function(B,F,ie){const Z=B,te=F;let ze=0;for(const Fe in te)if(cc.call(te,Fe)&&(ze++,Z[Fe]!==te[Fe]))return!1;return ze===ie}(L[0],d,L[4]))Qe=L[5],Qt=L[6];else{Qe=function(F,ie,Z){const te=Object.assign(Object.assign({},ie),{className:void 0,theme:Z}),ze=F.length>1;for(let Fe=0;Fe<F.length;Fe++){const Ui=F[Fe],lo=oo(Ui)?Ui(ze?Object.assign({},te):te):Ui;for(const St in lo)St==="className"?te.className=yr(te.className,lo[St]):St==="style"?te.style=Object.assign(Object.assign({},te.style),lo[St]):St in ie&&ie[St]===void 0||(te[St]=lo[St])}return"className"in ie&&typeof ie.className=="string"&&(te.className=yr(te.className,ie.className)),te}(S,d,q),Qt=function(F,ie,Z,te){return F.generateAndInjectStyles(ie,Z,te)}(j,Qe,Q.styleSheet,Q.stylis);let B=0;for(const F in d)cc.call(d,F)&&B++;R.current=[d,q,Q.styleSheet,Q.stylis,B,Qe,Qt,j]}}const xt=Qe.as||D,Gt=function(R,L,B,F){const ie={};for(const Z in R)R[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&R.theme===B||(Z==="forwardedAs"?ie.as=R.forwardedAs:F&&!F(Z,L)||(ie[Z]=R[Z]));return ie}(Qe,xt,q,He);let z=yr(C,P);return Qt&&(z+=" "+Qt),Qe.className&&(z+=" "+Qe.className),Gt[_s(xt)&&xt.includes("-")?"class":"className"]=z,g&&(Gt.ref=g),N.createElement(xt,Gt)}(y,x,k)}v.displayName=a;let y=Re.forwardRef(v);return y.attrs=h,y.componentStyle=m,y.displayName=a,y.shouldForwardProp=c,y.foldedComponentIds=r?yr(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=u,y.target=r?o.target:e,Object.defineProperty(y,"defaultProps",{get(){return this._foldedDefaultProps},set(x){this._foldedDefaultProps=r?function(k,...p){for(const d of p)zs(k,d,!0);return k}({},o.defaultProps,x):x}}),dp(y,()=>`.${y.styledComponentId}`),i&&cp(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}var xy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function dc(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const fc=e=>(pp.add(e),e);function Xr(e,...t){if(oo(e)||Kr(e))return fc(Ut(dc(Ta,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Ut(n):fc(Ut(dc(n,t)))}function Rs(e,t,n=Xn){if(!t)throw Ai(1,t);const r=(o,...i)=>e(t,n,Xr(o,...i));return r.attrs=o=>Rs(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>Rs(e,t,Object.assign(Object.assign({},n),o)),r}const Sp=e=>Rs(wy,e),w=Sp;xy.forEach(e=>{w[e]=Sp(e)});class Sy{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const i=r[o];if(oo(i)&&!Ia(i))return!1}return!0}(t),io.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const s=this.computeRules(t,n,r,o);r.insertRules(i,s.name,s.rules)}return}const l=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&l){const s=l.rules,a=this.instanceRules.get(t).rules;if(s.length===a.length){let u=!0;for(let h=0;h<s.length;h++)if(s[h]!==a[h]){u=!1;break}if(u)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const i=Ns(Ut(this.rules,n,r,o)),l={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,l),l}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function ky(e,...t){const n=Xr(e,...t),r=`sc-global-${sp(JSON.stringify(n))}`,o=new Sy(n,r),i=s=>{const a=xp(),u=Re.useContext(Oa);let h;{const c=Re.useRef(null);c.current===null&&(c.current=a.styleSheet.allocateGSInstance(r)),h=c.current}a.styleSheet.server&&l(h,s,a.styleSheet,u,a.stylis);{const c=o.isStatic?[h,a.styleSheet,o]:[h,s,a.styleSheet,u,a.stylis,o],m=Re.useRef(o);Re.useLayoutEffect(()=>{a.styleSheet.server||(m.current!==o&&(a.styleSheet.clearRules(r),m.current=o),l(h,s,a.styleSheet,u,a.stylis))},c),Re.useLayoutEffect(()=>()=>{a.styleSheet.server||o.removeStyles(h,a.styleSheet)},[h,a.styleSheet,o])}return a.styleSheet.server&&o.instanceRules.delete(h),null};function l(s,a,u,h,c){if(o.isStatic)o.renderStyles(s,T0,u,c);else{const m=Object.assign(Object.assign({},a),{theme:rp(a,h,i.defaultProps)});o.renderStyles(s,m,u,c)}}return Re.memo(i)}const Cy=w.footer`
  background: #0b1220;
  color: rgba(249, 250, 251, 0.7);
  padding: 3.5rem 1.5rem 2.2rem;
`,Ey=w.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(240px, 1.1fr) 2fr;
  gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,jy=w.div`
  display: grid;
  gap: 0.9rem;
  align-content: start;
`,Py=w.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #ffffff;
`,_y=w.img`
  width: 34px;
  height: 34px;
`,Ny=w.span`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: #ffffff;
  letter-spacing: 0.08em;
  line-height: 1;
`,zy=w.p`
  margin: 0;
  color: rgba(249, 250, 251, 0.55);
  line-height: 1.65;
  max-width: 340px;
`,$y=w.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 1.6rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,xl=w.div`
  display: grid;
  gap: 0.55rem;
  align-content: start;
`,Sl=w.h4`
  margin: 0 0 0.35rem;
  color: #ffffff;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
`,de=w.a`
  color: rgba(249, 250, 251, 0.62);
  font-size: 0.95rem;
  line-height: 1.5;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`,Ry=w.div`
  max-width: 1120px;
  margin: 2.6rem auto 0;
  padding-top: 1.3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  color: rgba(249, 250, 251, 0.42);
  font-size: 0.85rem;
`,Ly=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,Ty=()=>{const e=typeof window<"u"?window.location.hostname:"divvylore.com",t=`${pe.appUrls.register}?source=${encodeURIComponent(e)}&placement=footer`,n=`${pe.appUrls.login}?source=${encodeURIComponent(e)}&placement=footer`,r=pe.legalUrls.privacyPolicy,o=pe.legalUrls.termsAndConditions,i=pe.legalUrls.refundPolicy;return f.jsxs(Cy,{children:[f.jsxs(Ey,{children:[f.jsxs(jy,{children:[f.jsxs(Py,{href:"/","aria-label":"Divvylore home",children:[f.jsx(_y,{src:"/img/svg/logo.svg",alt:""}),f.jsx(Ny,{children:"DIVVYLORE"})]}),f.jsx(zy,{children:pe.brand.tagline})]}),f.jsxs($y,{children:[f.jsxs(xl,{children:[f.jsx(Sl,{children:"Product"}),f.jsx(de,{href:"#showcase",children:"Showcase"}),f.jsx(de,{href:"#product",children:"Product"}),f.jsx(de,{href:"#how-it-works",children:"How it works"}),f.jsx(de,{href:"#capabilities",children:"Capabilities"}),f.jsx(de,{href:"#pricing",children:"Pricing"})]}),f.jsxs(xl,{children:[f.jsx(Sl,{children:"Resources"}),f.jsx(de,{href:"#faq",children:"FAQ"}),f.jsx(de,{href:pe.appUrls.base,children:"Customer portal"}),f.jsx(de,{href:t,children:"Create account"}),f.jsx(de,{href:n,children:"Sign in"}),f.jsx(de,{href:"mailto:hello@divvylore.com",children:"Contact"})]}),f.jsxs(xl,{children:[f.jsx(Sl,{children:"Company"}),f.jsx(de,{href:pe.appUrls.base,children:"About"}),f.jsx(de,{href:r,children:"Privacy policy"}),f.jsx(de,{href:o,children:"Terms and conditions"}),f.jsx(de,{href:i,children:"Refund policy"})]})]})]}),f.jsxs(Ry,{children:[f.jsx("span",{children:pe.footer.copyright}),f.jsxs(Ly,{children:[f.jsx(de,{href:r,children:"Privacy"}),f.jsx(de,{href:o,children:"Terms"}),f.jsx(de,{href:i,children:"Refunds"})]})]})]})},Iy=w.header`
  position: sticky;
  top: 0;
  z-index: 120;
  background: rgba(250, 250, 250, 0.86);
  backdrop-filter: saturate(140%) blur(14px);
  border-bottom: 1px solid var(--line);
`,Oy=w.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 700px) {
    padding: 0.65rem 1.15rem;
  }
`,My=w.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text-primary);
  flex-shrink: 0;
`,Fy=w.img`
  width: 34px;
  height: 34px;
  display: block;
`,Ay=w.span`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  color: var(--text-primary);
  line-height: 1;
`,Dy=w.nav`
  display: flex;
  align-items: center;
  gap: 0.15rem;
  margin-left: 0.4rem;

  @media (max-width: 960px) {
    display: none;
  }
`,Vo=w.a`
  font-size: 0.92rem;
  font-weight: 550;
  color: var(--text-secondary);
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  transition: color 0.15s ease, background-color 0.15s ease;

  &:hover {
    color: var(--text-primary);
    background-color: rgba(17, 24, 39, 0.05);
  }
`,Uy=w.div`
  flex: 1;
`,By=w.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wy=w.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 650;
  color: var(--text-primary);

  &:hover {
    background: rgba(17, 24, 39, 0.05);
  }

  @media (max-width: 480px) {
    display: none;
  }
`,Vy=w.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 650;
  color: #ffffff;
  background: var(--bg-ink);
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: #000000;
  }
`,by=w.button`
  display: none;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;

  @media (max-width: 960px) {
    display: inline-flex;
  }
`,Hy=w.div`
  display: ${e=>e.open?"grid":"none"};
  gap: 0.3rem;
  padding: 0.5rem 1.15rem 1rem;
  border-bottom: 1px solid var(--line);
  background: #ffffff;

  ${Vo} {
    padding: 0.7rem 0.8rem;
    border-radius: 10px;
    font-size: 1rem;
  }

  @media (min-width: 961px) {
    display: none;
  }
`,Qy=()=>{const[e,t]=N.useState(!1),n=typeof window<"u"?window.location.hostname:"divvylore.com",r=`${pe.appUrls.register}?source=${encodeURIComponent(n)}&placement=header`,o=`${pe.appUrls.login}?source=${encodeURIComponent(n)}&placement=header`;return f.jsxs(Iy,{children:[f.jsxs(Oy,{children:[f.jsxs(My,{href:"/","aria-label":"Divvylore home",children:[f.jsx(Fy,{src:"/img/svg/logo.svg",alt:""}),f.jsx(Ay,{children:"DIVVYLORE"})]}),f.jsx(Dy,{children:pe.navigation.map(i=>f.jsx(Vo,{href:i.href,children:i.label},i.label))}),f.jsx(Uy,{}),f.jsxs(By,{children:[f.jsx(Wy,{href:o,children:"Sign in"}),f.jsx(Vy,{href:r,children:"Get started"}),f.jsx(by,{type:"button","aria-label":"Toggle menu","aria-expanded":e,onClick:()=>t(i=>!i),children:f.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:f.jsx("path",{d:"M2 4.5h14M2 9h14M2 13.5h14",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})})})]})]}),f.jsxs(Hy,{open:e,children:[pe.navigation.map(i=>f.jsx(Vo,{href:i.href,onClick:()=>t(!1),children:i.label},`m-${i.label}`)),f.jsx(Vo,{href:o,onClick:()=>t(!1),children:"Sign in"})]})]})};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=e=>{const t=Yy(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Xy=N.createContext({}),qy=()=>N.useContext(Xy),Zy=N.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:o="",children:i,iconNode:l,...s},a)=>{const{size:u=24,strokeWidth:h=2,absoluteStrokeWidth:c=!1,color:m="currentColor",className:v=""}=qy()??{},y=r??c?Number(n??h)*24/Number(t??u):n??h;return N.createElement("svg",{ref:a,...kl,width:t??u??kl.width,height:t??u??kl.height,stroke:e??m,strokeWidth:y,className:kp("lucide",v,o),...!i&&!Ky(s)&&{"aria-hidden":"true"},...s},[...l.map(([x,k])=>N.createElement(x,k)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(e,t)=>{const n=N.forwardRef(({className:r,...o},i)=>N.createElement(Zy,{ref:i,iconNode:t,className:kp(`lucide-${Gy(pc(e))}`,`lucide-${e}`,r),...o}));return n.displayName=pc(e),n};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],hc=at("arrow-right",Jy);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],t1=at("circle-check",e1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Cp=at("earth",n1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ep=at("file-text",r1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],jp=at("message-square",o1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],l1=at("play",i1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],a1=at("plus",s1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],c1=at("shield-check",u1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],f1=at("sparkles",d1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],h1=at("zap",p1),m1=w.main`
  color: var(--text-primary);
`,rt=w.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 700px) {
    padding: 0 1.15rem;
  }
`,g1=w.section`
  position: relative;
  padding: clamp(4.5rem, 10vw, 6.5rem) 0 clamp(2.5rem, 5vw, 3.5rem);
  text-align: center;
  overflow: hidden;
  background:
    radial-gradient(ellipse 70% 55% at 50% -10%, rgba(5, 150, 105, 0.12), transparent 55%),
    radial-gradient(ellipse 45% 40% at 100% 20%, rgba(251, 191, 36, 0.1), transparent 50%),
    #fafafa;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(17, 24, 39, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(17, 24, 39, 0.035) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: linear-gradient(180deg, #000 0%, transparent 85%);
    pointer-events: none;
  }

  > * {
    position: relative;
  }
`,y1=w.h1`
  margin: 0 auto;
  max-width: 14ch;
  font-size: clamp(2.15rem, 5.8vw, 3.65rem);
  line-height: 1.08;
  font-weight: 700;
  letter-spacing: -0.035em;
  color: var(--text-primary);
  animation: rise 0.55s ease both;
`,v1=w.p`
  margin: 1.25rem auto 0;
  max-width: 40rem;
  font-size: clamp(1.02rem, 2vw, 1.18rem);
  line-height: 1.65;
  color: var(--text-secondary);
  animation: rise 0.55s ease 0.05s both;
`,w1=w.div`
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  animation: rise 0.55s ease 0.1s both;
`,Di=Xr`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 48px;
  padding: 0.7rem 1.35rem;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 650;
  transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
`,x1=w.a`
  ${Di};
  color: #ffffff;
  background: var(--bg-ink);
  box-shadow: 0 10px 28px -14px rgba(17, 24, 39, 0.55);

  &:hover {
    transform: translateY(-2px);
    background: #000000;
  }
`,S1=w.a`
  ${Di};
  color: var(--text-primary);
  background: #ffffff;
  border: 1px solid var(--line-strong);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(17, 24, 39, 0.28);
  }
`,k1=w.p`
  margin: 1.1rem 0 0;
  font-size: 0.92rem;
  color: var(--text-muted);
  animation: rise 0.55s ease 0.14s both;
`,C1=w.section`
  padding: 1.5rem 0 2.5rem;
`,E1=w.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 1.4rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: #ffffff;
  box-shadow: var(--shadow-soft);

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,j1=w.div`
  text-align: center;
  padding: 0.4rem 0.5rem;
`,P1=w.strong`
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.4vw, 1.45rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`,_1=w.span`
  display: block;
  margin-top: 0.35rem;
  font-size: 0.88rem;
  color: var(--text-muted);
`,nr=w.section`
  padding: clamp(3.5rem, 8vw, 5.5rem) 0;
`,Yt=w.div`
  text-align: center;
  max-width: 40rem;
  margin: 0 auto;
`,Kt=w.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand-accent);
`,Xt=w.h2`
  margin: 0.65rem 0 0;
  font-size: clamp(1.75rem, 4.2vw, 2.75rem);
  line-height: 1.1;
  font-weight: 700;
`,qt=w.p`
  margin: 0.85rem 0 0;
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.65;
  color: var(--text-secondary);
`,N1=w(nr)`
  background: #ffffff;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
`,z1=w.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,$1=w.article`
  display: grid;
  gap: 0.85rem;
`,R1=w.div`
  position: relative;
  aspect-ratio: 9 / 14;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--line);
  background:
    radial-gradient(circle at 30% 20%, rgba(5, 150, 105, 0.22), transparent 45%),
    radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.18), transparent 40%),
    linear-gradient(160deg, #1f2937 0%, #111827 55%, #0b1220 100%);
  box-shadow: var(--shadow-soft);
`,L1=w.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,T1=w.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  gap: 0.75rem;
  padding: 1.2rem;
  text-align: center;
  color: #f9fafb;
`,I1=w.span`
  width: 52px;
  height: 52px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(8px);
  margin: 0 auto;
`,O1=w.strong`
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`,M1=w.span`
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  z-index: 1;
  padding: 0.28rem 0.55rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--text-primary);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,F1=w.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
`,A1=w.p`
  margin: 0;
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.5;
`,D1=w(nr)`
  background: var(--bg-page);
`,U1=w.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,B1=w.article`
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
  background: #ffffff;
  display: grid;
  gap: 0.75rem;
  box-shadow: 0 10px 30px -24px rgba(17, 24, 39, 0.35);
  transition: transform 0.16s ease, border-color 0.16s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(5, 150, 105, 0.35);
  }

  ${e=>e.$tone==="website"&&Xr`
      background: linear-gradient(180deg, #ffffff, #fffbeb);
    `}

  ${e=>e.$tone==="content"&&Xr`
      background: linear-gradient(180deg, #ffffff, #ecfdf5);
    `}
`,W1=w.span`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--brand-soft);
  color: var(--brand-accent);
`,V1=w.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
`,b1=w.p`
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--text-secondary);
`,H1=w(nr)`
  background: #ffffff;
  border-top: 1px solid var(--line);
`,Q1=w.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.2rem;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,G1=w.div`
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: #ffffff;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  min-height: 360px;
  display: grid;
  grid-template-rows: auto 1fr;
`,Y1=w.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 1rem;
  background: #f3f4f6;
  border-bottom: 1px solid var(--line);
`,Cl=w.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${e=>e.color||"#d1d5db"};
`,K1=w.span`
  margin-left: 0.4rem;
  flex: 1;
  min-width: 0;
  padding: 0.35rem 0.7rem;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid var(--line);
  font-size: 0.78rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,X1=w.div`
  position: relative;
  padding: 1.4rem;
  background:
    radial-gradient(circle at 85% 15%, rgba(5, 150, 105, 0.1), transparent 40%),
    linear-gradient(180deg, #fafafa, #f3f4f6);
  display: grid;
  align-content: start;
  gap: 0.75rem;
`,q1=w.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand-accent);
`,Z1=w.h3`
  margin: 0;
  max-width: 14ch;
  font-size: clamp(1.4rem, 3vw, 1.85rem);
  line-height: 1.12;
`,J1=w.p`
  margin: 0;
  max-width: 34ch;
  font-size: 0.95rem;
`,ev=w.div`
  justify-self: end;
  width: min(100%, 270px);
  margin-top: 0.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
  background: #ffffff;
  box-shadow: 0 16px 36px -20px rgba(17, 24, 39, 0.4);
  overflow: hidden;
`,tv=w.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 0.85rem;
  background: var(--bg-ink);
  color: #ffffff;
`,nv=w.span`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #059669;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.78rem;
`,rv=w.div`
  display: grid;
  gap: 0.05rem;
`,ov=w.strong`
  font-size: 0.82rem;
`,iv=w.span`
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6ee7b7;
  font-weight: 700;
`,lv=w.div`
  padding: 0.8rem;
  display: grid;
  gap: 0.5rem;
`,El=w.div`
  max-width: 94%;
  justify-self: ${e=>e.side==="out"?"end":"start"};
  padding: 0.6rem 0.75rem;
  border-radius: 12px;
  font-size: 0.84rem;
  line-height: 1.45;
  background: ${e=>e.side==="out"?"var(--bg-ink)":"var(--bg-soft)"};
  color: ${e=>e.side==="out"?"#ffffff":"var(--text-primary)"};
`,sv=w.div`
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.45rem 0.65rem;
  border-radius: 12px;
  background: var(--bg-soft);
  width: fit-content;

  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--text-muted);
    opacity: 0.45;
    animation: typing 1.2s ease-in-out infinite;
  }

  span:nth-child(2) {
    animation-delay: 0.15s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes typing {
    0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
    30% { opacity: 1; transform: translateY(-2px); }
  }
`,av=w.aside`
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: #111827;
  color: #f9fafb;
  padding: 1.4rem;
  display: grid;
  gap: 1rem;
  align-content: start;
  box-shadow: var(--shadow-soft);
`,uv=w.h3`
  margin: 0;
  color: #ffffff;
  font-size: 1.05rem;
`,cv=w.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.9rem;
`,jl=w.li`
  display: grid;
  gap: 0.2rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`,Pl=w.span`
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(249, 250, 251, 0.55);
  font-weight: 700;
`,_l=w.strong`
  font-size: 1rem;
  font-weight: 650;
  color: #ffffff;
  line-height: 1.35;
`,dv=w(nr)`
  background: var(--bg-page);
`,fv=w.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,pv=w.article`
  padding: 1.35rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
  background: #ffffff;
  display: grid;
  gap: 0.65rem;
  min-height: 100%;
`,hv=w.span`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-ink);
  color: #ffffff;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.9rem;
`,mv=w.h3`
  margin: 0;
  font-size: 1.08rem;
  font-weight: 700;
`,gv=w.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--text-secondary);
`,yv=w(nr)`
  background: #ffffff;
  border-top: 1px solid var(--line);
`,vv=w.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,wv=w.article`
  padding: 1.3rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
  background: var(--bg-page);
  display: grid;
  gap: 0.55rem;
`,xv=w.span`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--brand-soft);
  color: var(--brand-accent);
`,Sv=w.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
`,kv=w.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--text-secondary);
`,Cv=w.section`
  padding: clamp(3.5rem, 8vw, 5.5rem) 0;
  background: var(--bg-page);
`,Ev=w.div`
  margin: 1.6rem auto 0;
  display: inline-flex;
  padding: 0.25rem;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: #ffffff;
  gap: 0.2rem;
`,mc=w.button`
  border: 0;
  border-radius: 999px;
  padding: 0.5rem 1.05rem;
  background: transparent;
  color: var(--text-secondary);
  font-weight: 650;
  font-size: 0.92rem;
  cursor: pointer;

  &.active {
    color: #ffffff;
    background: var(--bg-ink);
  }
`,jv=w.div`
  text-align: center;
`,Pv=w.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  text-align: left;
`,_v=w.article`
  position: relative;
  padding: 1.35rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid ${e=>e.featured?"rgba(5, 150, 105, 0.45)":"var(--line)"};
  background: ${e=>e.featured?"linear-gradient(180deg, #ffffff, #ecfdf5)":"#ffffff"};
  display: grid;
  gap: 0.7rem;
  opacity: ${e=>e.muted?.65:1};
  box-shadow: ${e=>e.featured?"0 22px 40px -24px rgba(5, 150, 105, 0.35)":"none"};
`,gc=w.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: var(--bg-ink);
  color: #ffffff;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 700;
`,Nv=w.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
`,zv=w.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
`,yc=w.strong`
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.6vw, 2.3rem);
  letter-spacing: -0.03em;
`,$v=w.span`
  color: var(--text-muted);
  font-size: 0.95rem;
`,Rv=w.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.92rem;
  min-height: 42px;
`,Lv=w.span`
  display: inline-flex;
  font-size: 0.88rem;
  color: var(--text-primary);
  padding: 0.32rem 0.6rem;
  border-radius: 999px;
  background: var(--brand-soft);
  width: fit-content;
`,Tv=w.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-weight: 650;
  background: ${e=>e.muted?"rgba(17, 24, 39, 0.08)":"var(--bg-ink)"};
  color: ${e=>e.muted?"var(--text-muted)":"#ffffff"};
  pointer-events: ${e=>e.muted?"none":"auto"};

  &:hover {
    background: ${e=>e.muted?"rgba(17, 24, 39, 0.08)":"#000000"};
  }
`,Iv=w.ul`
  margin: 0.3rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
`,Ov=w.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.45;
`,Mv=w(nr)`
  background: #ffffff;
  border-top: 1px solid var(--line);
`,Fv=w.div`
  margin: 2.2rem auto 0;
  display: grid;
  gap: 0.65rem;
  max-width: 760px;
`,Av=w.details`
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg-page);
  overflow: hidden;

  &[open] {
    border-color: rgba(5, 150, 105, 0.35);
    background: #ffffff;
  }

  &[open] summary svg {
    transform: rotate(45deg);
    color: var(--brand-accent);
  }
`,Dv=w.summary`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.05rem 1.25rem;
  cursor: pointer;
  font-family: var(--font-display);
  font-weight: 650;
  font-size: 1.02rem;
  user-select: none;

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    flex-shrink: 0;
    transition: transform 0.18s ease, color 0.18s ease;
    color: var(--text-muted);
  }
`,Uv=w.div`
  padding: 0 1.25rem 1.1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.97rem;
`,Bv=w.section`
  padding: clamp(3.5rem, 8vw, 5.5rem) 0;
  background:
    radial-gradient(ellipse 60% 80% at 50% 100%, rgba(5, 150, 105, 0.18), transparent 55%),
    #111827;
  text-align: center;
`,Wv=w.h2`
  margin: 0 auto;
  max-width: 16ch;
  font-size: clamp(1.9rem, 4.6vw, 2.9rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  color: #ffffff;
`,Vv=w.p`
  margin: 1rem auto 0;
  max-width: 34rem;
  color: rgba(249, 250, 251, 0.7);
  font-size: 1.05rem;
  line-height: 1.6;
`,bv=w.div`
  margin-top: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`,Hv=w.a`
  ${Di};
  background: #ffffff;
  color: var(--text-primary);

  &:hover {
    transform: translateY(-2px);
  }
`,Qv=w.a`
  ${Di};
  border: 1px solid rgba(255, 255, 255, 0.28);
  color: #ffffff;
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`,Gv=w.p`
  margin: 1rem 0 0;
  color: rgba(249, 250, 251, 0.5);
  font-size: 0.9rem;
`,Ls="https://app.divvylore.com",Yv=Ls.replace(/\/$/,""),Nl="/register",Kv="/login",Xv=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:e%1===0?0:2}).format(e),Sn=e=>{const t=Number(e);return Number.isFinite(t)?t:0},vc=[jp,Cp,Ep],wc=[jp,h1,Cp,Ep,c1,f1],qv=e=>(Array.isArray(e?.pricing?.plans)?e.pricing.plans:[]).map((n,r)=>{const o=Number(String(n.price||"").replace(/[^\d.]/g,"")),i=Number.isFinite(o)?o:0;return{id:n.planCode||`${n.name}-${r}`,name:n.name,description:n.description,code:n.planCode,monthlyPrice:i,yearlyPrice:i>0?Math.round(i*10):0,monthlyCredits:0,yearlyCredits:0,yearlyBonusCredits:0,features:(n.features||[]).map((l,s)=>({name:l,isIncluded:!0,displayOrder:s})),buttonText:n.ctaLabel,isPopular:!!n.highlighted,isActive:!0,isVisible:!0,displayOrder:r,isCustomPricing:String(n.price||"").toLowerCase().includes("custom")}}),xc=()=>{const e=pe,t=N.useMemo(()=>qv(e),[e]),[n,r]=N.useState("monthly"),[o,i]=N.useState(t);N.useEffect(()=>{const c=new AbortController;return(async()=>{try{const v=await fetch(`${Yv}/account/tenant/plans`,{method:"GET",headers:{Accept:"application/json"},signal:c.signal});if(!v.ok)throw new Error(`Pricing API returned ${v.status}`);const y=await v.json();if(!Array.isArray(y))throw new Error("Pricing API response is not a plan list");const x=y.map(k=>({...k,monthlyPrice:Sn(k.monthlyPrice),yearlyPrice:Sn(k.yearlyPrice),monthlyCredits:Sn(k.monthlyCredits),yearlyCredits:Sn(k.yearlyCredits),yearlyBonusCredits:Sn(k.yearlyBonusCredits??0),displayOrder:Sn(k.displayOrder??999),features:Array.isArray(k.features)?k.features:[]})).sort((k,p)=>(k.displayOrder??999)-(p.displayOrder??999));x.length>0&&i(x)}catch(v){if(v.name==="AbortError")return}})(),()=>c.abort()},[]);const l=N.useMemo(()=>o.filter(c=>c.name),[o]),s=n==="monthly"?"/month":"/year",a=typeof window<"u"?window.location.hostname:"divvylore.com",u=(c,m)=>{const v=new URLSearchParams({source:a,...m||{}}).toString();return`${Ls}${c}?${v}`},h=e.showcase?.items||[];return f.jsxs(m1,{children:[f.jsx(g1,{children:f.jsxs(rt,{children:[f.jsx(y1,{children:e.hero?.title}),f.jsx(v1,{children:e.hero?.description}),f.jsxs(w1,{children:[f.jsxs(x1,{href:u(Nl,{placement:"hero"}),target:"_blank",rel:"noreferrer",children:[e.hero?.primaryCta?.label||"Try for free",f.jsx(hc,{size:16})]}),f.jsx(S1,{href:e.hero?.secondaryCta?.url||"#how-it-works",children:e.hero?.secondaryCta?.label||"See how it works"})]}),f.jsx(k1,{children:e.hero?.trustLine})]})}),f.jsx(C1,{children:f.jsx(rt,{children:f.jsx(E1,{children:(e.stats||[]).map(c=>f.jsxs(j1,{children:[f.jsx(P1,{children:c.value}),f.jsx(_1,{children:c.label})]},c.label))})})}),f.jsx(N1,{id:"showcase",children:f.jsxs(rt,{children:[f.jsxs(Yt,{children:[f.jsx(Kt,{children:"Showcase"}),f.jsx(Xt,{children:e.showcase?.title}),f.jsx(qt,{children:e.showcase?.subtitle})]}),f.jsx(z1,{children:h.map(c=>{const m=!!(c.videoUrl&&c.videoUrl.trim());return f.jsxs($1,{children:[f.jsxs(R1,{children:[c.badge&&f.jsx(M1,{children:c.badge}),m?f.jsx(L1,{src:c.videoUrl,controls:!0,playsInline:!0,preload:"metadata","aria-label":c.title}):f.jsxs(T1,{children:[f.jsx(I1,{"aria-hidden":!0,children:f.jsx(l1,{size:20,fill:"currentColor"})}),f.jsx(O1,{children:c.posterLabel})]})]}),f.jsxs("div",{children:[f.jsx(F1,{children:c.title}),f.jsx(A1,{children:c.caption})]})]},c.id)})})]})}),f.jsx(D1,{id:"product",children:f.jsxs(rt,{children:[f.jsxs(Yt,{children:[f.jsx(Kt,{children:"Product"}),f.jsx(Xt,{children:e.highlights?.title}),f.jsx(qt,{children:e.highlights?.subtitle})]}),f.jsx(U1,{children:(e.highlights?.cards||[]).map((c,m)=>{const v=vc[m%vc.length];return f.jsxs(B1,{$tone:c.accent,children:[f.jsx(W1,{children:f.jsx(v,{size:20})}),f.jsx(V1,{children:c.title}),f.jsx(b1,{children:c.description})]},c.title)})})]})}),f.jsx(H1,{id:"demo",children:f.jsxs(rt,{children:[f.jsxs(Yt,{children:[f.jsx(Kt,{children:"In action"}),f.jsx(Xt,{children:"Your website, with an agent that sells and supports"}),f.jsx(qt,{children:"Visitors ask. The agent qualifies, resolves, or hands off — while content keeps answers sharp."})]}),f.jsxs(Q1,{children:[f.jsxs(G1,{children:[f.jsxs(Y1,{children:[f.jsx(Cl,{color:"#f87171"}),f.jsx(Cl,{color:"#fbbf24"}),f.jsx(Cl,{color:"#34d399"}),f.jsx(K1,{children:"yourbrand.com"})]}),f.jsxs(X1,{children:[f.jsx(q1,{children:"Live on your site"}),f.jsx(Z1,{children:"Visitors arrive. Autopilot takes over."}),f.jsx(J1,{children:"Sales questions become leads. Support questions get resolved — without waiting for a human inbox."}),f.jsxs(ev,{children:[f.jsxs(tv,{children:[f.jsx(nv,{children:"D"}),f.jsxs(rv,{children:[f.jsx(ov,{children:"Divvylore Agent"}),f.jsx(iv,{children:"Online · sales & support"})]})]}),f.jsxs(lv,{children:[f.jsx(El,{side:"in",children:"Do you offer onboarding help?"}),f.jsx(El,{side:"out",children:"Yes — I can walk you through plans and book a demo, or fix a billing issue right now."}),f.jsx(El,{side:"in",children:"Book a demo for Thursday."}),f.jsxs(sv,{"aria-hidden":!0,children:[f.jsx("span",{})," ",f.jsx("span",{})," ",f.jsx("span",{})]})]})]})]})]}),f.jsxs(av,{children:[f.jsx(uv,{children:"What the agent handles"}),f.jsxs(cv,{children:[f.jsxs(jl,{children:[f.jsx(Pl,{children:"Sales"}),f.jsx(_l,{children:"Qualify visitors and capture leads in chat"})]}),f.jsxs(jl,{children:[f.jsx(Pl,{children:"Support"}),f.jsx(_l,{children:"Resolve common issues with guardrails"})]}),f.jsxs(jl,{children:[f.jsx(Pl,{children:"Content"}),f.jsx(_l,{children:"Articles that rank and feed the agent"})]})]})]})]})]})}),f.jsx(dv,{id:"how-it-works",children:f.jsxs(rt,{children:[f.jsxs(Yt,{children:[f.jsx(Kt,{children:"How it works"}),f.jsx(Xt,{children:e.howItWorks?.title}),f.jsx(qt,{children:e.howItWorks?.subtitle})]}),f.jsx(fv,{children:(e.howItWorks?.steps||[]).map((c,m)=>f.jsxs(pv,{children:[f.jsx(hv,{children:String(m+1).padStart(2,"0")}),f.jsx(mv,{children:c.title}),f.jsx(gv,{children:c.description})]},c.title))})]})}),f.jsx(yv,{id:"capabilities",children:f.jsxs(rt,{children:[f.jsxs(Yt,{children:[f.jsx(Kt,{children:"Capabilities"}),f.jsx(Xt,{children:e.features?.title}),f.jsx(qt,{children:e.features?.subtitle})]}),f.jsx(vv,{children:(e.features?.items||[]).map((c,m)=>{const v=wc[m%wc.length];return f.jsxs(wv,{children:[f.jsx(xv,{children:f.jsx(v,{size:18})}),f.jsx(Sv,{children:c.title}),f.jsx(kv,{children:c.description})]},c.title)})})]})}),f.jsx(Cv,{id:"pricing",children:f.jsxs(rt,{children:[f.jsxs(jv,{children:[f.jsxs(Yt,{children:[f.jsx(Kt,{children:"Pricing"}),f.jsx(Xt,{children:e.pricing?.title}),f.jsx(qt,{children:e.pricing?.subtitle})]}),f.jsxs(Ev,{role:"tablist","aria-label":"Billing cycle",children:[f.jsx(mc,{type:"button",className:n==="monthly"?"active":"",onClick:()=>r("monthly"),children:"Monthly"}),f.jsx(mc,{type:"button",className:n==="yearly"?"active":"",onClick:()=>r("yearly"),children:"Yearly"})]})]}),f.jsx(Pv,{children:l.map(c=>{const m=c.isActive===!1||c.isVisible===!1,v=n==="monthly"?c.monthlyPrice:c.yearlyPrice,y=n==="monthly"?c.monthlyCredits:c.yearlyCredits,x=n==="yearly"&&c.yearlyBonusCredits||0,k=(c.features||[]).filter(d=>d.isIncluded).sort((d,g)=>(d.displayOrder??999)-(g.displayOrder??999)),p=new URLSearchParams({source:a,placement:"pricing",plan:c.code||c.id,billing:n}).toString();return f.jsxs(_v,{featured:!!c.isPopular,muted:m,children:[c.isPopular&&!m&&f.jsx(gc,{children:"Most popular"}),m&&f.jsx(gc,{children:"Unavailable"}),f.jsx(Nv,{children:c.name}),f.jsx(zv,{children:c.isCustomPricing?f.jsx(yc,{children:"Custom"}):f.jsxs(f.Fragment,{children:[f.jsx(yc,{children:Xv(v)}),f.jsx($v,{children:s})]})}),f.jsx(Rv,{children:c.description}),f.jsxs(Lv,{children:[y.toLocaleString()," credits / ",n==="monthly"?"mo":"yr",x>0?` · +${x.toLocaleString()} bonus`:""]}),f.jsx(Tv,{href:m?void 0:`${Ls}${Nl}?${p}`,muted:m,"aria-disabled":m,onClick:d=>{m&&d.preventDefault()},target:"_blank",rel:"noreferrer",children:m?"Not available":c.buttonText||"Get started"}),f.jsx(Iv,{children:k.map(d=>f.jsxs(Ov,{children:[f.jsx(t1,{size:16,color:"#059669"}),f.jsx("span",{children:d.name})]},`${c.name}-${d.name}`))})]},c.id||c.name)})})]})}),f.jsx(Mv,{id:"faq",children:f.jsxs(rt,{children:[f.jsxs(Yt,{children:[f.jsx(Kt,{children:"FAQ"}),f.jsx(Xt,{children:e.faq?.title}),f.jsx(qt,{children:e.faq?.subtitle})]}),f.jsx(Fv,{children:(e.faq?.items||[]).map((c,m)=>f.jsxs(Av,{...m===0?{open:!0}:{},children:[f.jsxs(Dv,{children:[f.jsx("span",{children:c.question}),f.jsx(a1,{size:20,"aria-hidden":!0})]}),f.jsx(Uv,{children:c.answer})]},c.question))})]})}),f.jsx(Bv,{id:"cta",children:f.jsxs(rt,{children:[f.jsx(Wv,{children:"Your website deserves autopilot"}),f.jsx(Vv,{children:"Put AI agents on your site for sales and support — then grow with websites and content."}),f.jsxs(bv,{children:[f.jsxs(Hv,{href:u(Nl,{placement:"bottom-cta"}),target:"_blank",rel:"noreferrer",children:["Try for free",f.jsx(hc,{size:16})]}),f.jsx(Qv,{href:u(Kv,{placement:"bottom-cta"}),target:"_blank",rel:"noreferrer",children:"Sign in"})]}),f.jsx(Gv,{children:"Free to start · No credit card required"})]})})]})},Zv=ky`
    :root {
        --bg-page: #fafafa;
        --bg-elevated: #ffffff;
        --bg-soft: #f3f4f6;
        --bg-ink: #111827;
        --text-primary: #111827;
        --text-secondary: #4b5563;
        --text-muted: #6b7280;
        --brand: #111827;
        --brand-accent: #059669;
        --brand-soft: rgba(5, 150, 105, 0.1);
        --line: rgba(17, 24, 39, 0.08);
        --line-strong: rgba(17, 24, 39, 0.14);
        --radius-sm: 12px;
        --radius-md: 18px;
        --radius-lg: 28px;
        --font-display: 'Syne', sans-serif;
        --font-body: 'Figtree', sans-serif;
        --shadow-soft: 0 18px 50px -28px rgba(17, 24, 39, 0.28);
    }

    html,
    body,
    a,
    button,
    input,
    textarea {
        font-family: var(--font-body);
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        background: var(--bg-page);
        color: var(--text-primary);
        overflow-x: hidden;
        min-height: 100vh;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    * {
        box-sizing: border-box;
    }

    img,
    svg,
    video {
        max-width: 100%;
        height: auto;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: var(--font-display);
        margin: 0;
        color: var(--text-primary);
        letter-spacing: -0.03em;
    }

    p {
        line-height: 1.65;
        color: var(--text-secondary);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ::selection {
        background: rgba(5, 150, 105, 0.18);
        color: var(--text-primary);
    }

    @keyframes rise {
        from {
            opacity: 0;
            transform: translateY(14px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`,zl=({to:e})=>(N.useEffect(()=>{window.location.replace(e)},[e]),null),Jv=()=>f.jsxs(N.Suspense,{fallback:null,children:[f.jsx(Zv,{}),f.jsx(Qy,{}),f.jsxs(Yg,{children:[f.jsx(en,{path:"/",element:f.jsx(xc,{})}),f.jsx(en,{path:"/home",element:f.jsx(xc,{})}),f.jsx(en,{path:"/privacy-policy",element:f.jsx(zl,{to:pe.legalUrls.privacyPolicy})}),f.jsx(en,{path:"/terms-and-conditions",element:f.jsx(zl,{to:pe.legalUrls.termsAndConditions})}),f.jsx(en,{path:"/refund-policy",element:f.jsx(zl,{to:pe.legalUrls.refundPolicy})}),f.jsx(en,{path:"*",element:f.jsx(Qg,{to:"/",replace:!0})})]}),f.jsx(Ty,{})]}),ew=()=>f.jsx(qg,{children:f.jsx(Jv,{})}),Pp=document.getElementById("root");if(!Pp)throw new Error("Root element not found");Gf(Pp).render(f.jsx(ew,{}));
