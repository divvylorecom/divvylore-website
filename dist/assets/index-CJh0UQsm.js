function Pp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Np(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kc={exports:{}},mi={},Ec={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),Rp=Symbol.for("react.portal"),Ap=Symbol.for("react.fragment"),bp=Symbol.for("react.strict_mode"),jp=Symbol.for("react.profiler"),Op=Symbol.for("react.provider"),Lp=Symbol.for("react.context"),_p=Symbol.for("react.forward_ref"),Dp=Symbol.for("react.suspense"),zp=Symbol.for("react.memo"),$p=Symbol.for("react.lazy"),Ls=Symbol.iterator;function Mp(e){return e===null||typeof e!="object"?null:(e=Ls&&e[Ls]||e["@@iterator"],typeof e=="function"?e:null)}var Cc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tc=Object.assign,Ic={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=Ic,this.updater=n||Cc}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pc(){}Pc.prototype=Xn.prototype;function Aa(e,t,n){this.props=e,this.context=t,this.refs=Ic,this.updater=n||Cc}var ba=Aa.prototype=new Pc;ba.constructor=Aa;Tc(ba,Xn.prototype);ba.isPureReactComponent=!0;var _s=Array.isArray,Nc=Object.prototype.hasOwnProperty,ja={current:null},Rc={key:!0,ref:!0,__self:!0,__source:!0};function Ac(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Nc.call(t,r)&&!Rc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Qr,type:e,key:i,ref:l,props:o,_owner:ja.current}}function Up(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function Fp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ds=/\/+/g;function Mi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fp(""+e.key):t.toString(36)}function To(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qr:case Rp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Mi(l,0):r,_s(o)?(n="",e!=null&&(n=e.replace(Ds,"$&/")+"/"),To(o,t,n,"",function(u){return u})):o!=null&&(Oa(o)&&(o=Up(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ds,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",_s(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Mi(i,a);l+=To(i,t,n,s,o)}else if(s=Mp(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Mi(i,a++),l+=To(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function io(e,t,n){if(e==null)return e;var r=[],o=0;return To(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Wp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Io={transition:null},Bp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Io,ReactCurrentOwner:ja};function bc(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!Oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=Xn;_.Fragment=Ap;_.Profiler=jp;_.PureComponent=Aa;_.StrictMode=bp;_.Suspense=Dp;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bp;_.act=bc;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ja.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Nc.call(t,s)&&!Rc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qr,type:e.type,key:o,ref:i,props:r,_owner:l}};_.createContext=function(e){return e={$$typeof:Lp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Op,_context:e},e.Consumer=e};_.createElement=Ac;_.createFactory=function(e){var t=Ac.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:_p,render:e}};_.isValidElement=Oa;_.lazy=function(e){return{$$typeof:$p,_payload:{_status:-1,_result:e},_init:Wp}};_.memo=function(e,t){return{$$typeof:zp,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=Io.transition;Io.transition={};try{e()}finally{Io.transition=t}};_.unstable_act=bc;_.useCallback=function(e,t){return Se.current.useCallback(e,t)};_.useContext=function(e){return Se.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};_.useEffect=function(e,t){return Se.current.useEffect(e,t)};_.useId=function(){return Se.current.useId()};_.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return Se.current.useMemo(e,t)};_.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};_.useRef=function(e){return Se.current.useRef(e)};_.useState=function(e){return Se.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return Se.current.useTransition()};_.version="18.3.1";Ec.exports=_;var N=Ec.exports;const Ae=Np(N),Hp=Pp({__proto__:null,default:Ae},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp=N,Gp=Symbol.for("react.element"),Yp=Symbol.for("react.fragment"),qp=Object.prototype.hasOwnProperty,Qp=Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kp={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)qp.call(t,r)&&!Kp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Gp,type:e,key:i,ref:l,props:o,_owner:Qp.current}}mi.Fragment=Yp;mi.jsx=jc;mi.jsxs=jc;kc.exports=mi;var d=kc.exports,Oc={exports:{}},Le={},Lc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,b){var j=R.length;R.push(b);e:for(;0<j;){var F=j-1>>>1,z=R[F];if(0<o(z,b))R[F]=b,R[j]=z,j=F;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var b=R[0],j=R.pop();if(j!==b){R[0]=j;e:for(var F=0,z=R.length,ie=z>>>1;F<ie;){var Z=2*(F+1)-1,te=R[Z],Ne=Z+1,De=R[Ne];if(0>o(te,j))Ne<z&&0>o(De,te)?(R[F]=De,R[Ne]=j,F=Ne):(R[F]=te,R[Z]=j,F=Z);else if(Ne<z&&0>o(De,j))R[F]=De,R[Ne]=j,F=Ne;else break e}}return b}function o(R,b){var j=R.sortIndex-b.sortIndex;return j!==0?j:R.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,p=null,g=3,y=!1,v=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=R)r(u),b.sortIndex=b.expirationTime,t(s,b);else break;b=n(u)}}function S(R){if(w=!1,m(R),!v)if(n(s)!==null)v=!0,xt(T);else{var b=n(u);b!==null&&Yt(S,b.startTime-R)}}function T(R,b){v=!1,w&&(w=!1,h(I),I=-1),y=!0;var j=g;try{for(m(b),p=n(s);p!==null&&(!(p.expirationTime>b)||R&&!G());){var F=p.callback;if(typeof F=="function"){p.callback=null,g=p.priorityLevel;var z=F(p.expirationTime<=b);b=e.unstable_now(),typeof z=="function"?p.callback=z:p===n(s)&&r(s),m(b)}else r(s);p=n(s)}if(p!==null)var ie=!0;else{var Z=n(u);Z!==null&&Yt(S,Z.startTime-b),ie=!1}return ie}finally{p=null,g=j,y=!1}}var P=!1,k=null,I=-1,M=5,O=-1;function G(){return!(e.unstable_now()-O<M)}function He(){if(k!==null){var R=e.unstable_now();O=R;var b=!0;try{b=k(!0,R)}finally{b?X():(P=!1,k=null)}}else P=!1}var X;if(typeof c=="function")X=function(){c(He)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Gt=Ve.port2;Ve.port1.onmessage=He,X=function(){Gt.postMessage(null)}}else X=function(){E(He,0)};function xt(R){k=R,P||(P=!0,X())}function Yt(R,b){I=E(function(){R(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,xt(T))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var j=g;g=b;try{return R()}finally{g=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,b){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=g;g=R;try{return b()}finally{g=j}},e.unstable_scheduleCallback=function(R,b,j){var F=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?F+j:F):j=F,R){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=j+z,R={id:f++,callback:b,priorityLevel:R,startTime:j,expirationTime:z,sortIndex:-1},j>F?(R.sortIndex=j,t(u,R),n(s)===null&&R===n(u)&&(w?(h(I),I=-1):w=!0,Yt(S,j-F))):(R.sortIndex=z,t(s,R),v||y||(v=!0,xt(T))),R},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(R){var b=g;return function(){var j=g;g=b;try{return R.apply(this,arguments)}finally{g=j}}}})(_c);Lc.exports=_c;var Xp=Lc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=N,Oe=Xp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dc=new Set,Nr={};function mn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(Nr[e]=t,e=0;e<t.length;e++)Dc.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pl=Object.prototype.hasOwnProperty,Jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zs={},$s={};function eh(e){return Pl.call($s,e)?!0:Pl.call(zs,e)?!1:Jp.test(e)?$s[e]=!0:(zs[e]=!0,!1)}function th(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nh(e,t,n,r){if(t===null||typeof t>"u"||th(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var La=/[\-:]([a-z])/g;function _a(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(La,_a);he[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(La,_a);he[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(La,_a);he[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Da(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nh(t,n,o,r)&&(n=null),r||o===null?eh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),kn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),zc=Symbol.for("react.provider"),$c=Symbol.for("react.context"),$a=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Ma=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Mc=Symbol.for("react.offscreen"),Ms=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=Ms&&e[Ms]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Ui;function dr(e){if(Ui===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ui=t&&t[1]||""}return`
`+Ui+e}var Fi=!1;function Wi(e,t){if(!e||Fi)return"";Fi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Fi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function rh(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Wi(e.type,!1),e;case 11:return e=Wi(e.type.render,!1),e;case 1:return e=Wi(e.type,!0),e;default:return""}}function bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case kn:return"Portal";case Nl:return"Profiler";case za:return"StrictMode";case Rl:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $c:return(e.displayName||"Context")+".Consumer";case zc:return(e._context.displayName||"Context")+".Provider";case $a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ma:return t=e.displayName||null,t!==null?t:bl(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return bl(e(t))}catch{}}return null}function oh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bl(t);case 8:return t===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ih(e){var t=Uc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){e._valueTracker||(e._valueTracker=ih(e))}function Fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Uc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Us(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wc(e,t){t=t.checked,t!=null&&Da(e,"checked",t,!1)}function Ol(e,t){Wc(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ll(e,t,n){(t!=="number"||Bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function _l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ws(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(fr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function Bc(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,Vc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lh=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){lh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function Gc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function Yc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Gc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ah=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(ah[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function $l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function Ua(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,_n=null,Dn=null;function Hs(e){if(e=Zr(e)){if(typeof Ul!="function")throw Error(C(280));var t=e.stateNode;t&&(t=xi(t),Ul(e.stateNode,e.type,t))}}function qc(e){_n?Dn?Dn.push(e):Dn=[e]:_n=e}function Qc(){if(_n){var e=_n,t=Dn;if(Dn=_n=null,Hs(e),t)for(e=0;e<t.length;e++)Hs(t[e])}}function Kc(e,t){return e(t)}function Xc(){}var Bi=!1;function Zc(e,t,n){if(Bi)return e(t,n);Bi=!0;try{return Kc(e,t,n)}finally{Bi=!1,(_n!==null||Dn!==null)&&(Xc(),Qc())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Fl=!1;if(ht)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Fl=!1}function sh(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var vr=!1,Ho=null,Vo=!1,Wl=null,uh={onError:function(e){vr=!0,Ho=e}};function ch(e,t,n,r,o,i,l,a,s){vr=!1,Ho=null,sh.apply(uh,arguments)}function dh(e,t,n,r,o,i,l,a,s){if(ch.apply(this,arguments),vr){if(vr){var u=Ho;vr=!1,Ho=null}else throw Error(C(198));Vo||(Vo=!0,Wl=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vs(e){if(gn(e)!==e)throw Error(C(188))}function fh(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Vs(o),e;if(i===r)return Vs(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function ed(e){return e=fh(e),e!==null?td(e):null}function td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=td(e);if(t!==null)return t;e=e.sibling}return null}var nd=Oe.unstable_scheduleCallback,Gs=Oe.unstable_cancelCallback,ph=Oe.unstable_shouldYield,hh=Oe.unstable_requestPaint,ee=Oe.unstable_now,mh=Oe.unstable_getCurrentPriorityLevel,Fa=Oe.unstable_ImmediatePriority,rd=Oe.unstable_UserBlockingPriority,Go=Oe.unstable_NormalPriority,gh=Oe.unstable_LowPriority,od=Oe.unstable_IdlePriority,gi=null,lt=null;function yh(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(gi,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:xh,vh=Math.log,wh=Math.LN2;function xh(e){return e>>>=0,e===0?32:31-(vh(e)/wh|0)|0}var uo=64,co=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=pr(a):(i&=l,i!==0&&(r=pr(i)))}else l=n&~o,l!==0?r=pr(l):i!==0&&(r=pr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function Sh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Je(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Sh(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function id(){var e=uo;return uo<<=1,!(uo&4194240)&&(uo=64),e}function Hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Eh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function ld(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ad,Ba,sd,ud,cd,Hl=!1,fo=[],jt=null,Ot=null,Lt=null,br=new Map,jr=new Map,It=[],Ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ys(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function or(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zr(t),t!==null&&Ba(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Th(e,t,n,r,o){switch(t){case"focusin":return jt=or(jt,e,t,n,r,o),!0;case"dragenter":return Ot=or(Ot,e,t,n,r,o),!0;case"mouseover":return Lt=or(Lt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return br.set(i,or(br.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,jr.set(i,or(jr.get(i)||null,e,t,n,r,o)),!0}return!1}function dd(e){var t=tn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Jc(n),t!==null){e.blockedOn=t,cd(e.priority,function(){sd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ml=r,n.target.dispatchEvent(r),Ml=null}else return t=Zr(n),t!==null&&Ba(t),e.blockedOn=n,!1;t.shift()}return!0}function qs(e,t,n){Po(e)&&n.delete(t)}function Ih(){Hl=!1,jt!==null&&Po(jt)&&(jt=null),Ot!==null&&Po(Ot)&&(Ot=null),Lt!==null&&Po(Lt)&&(Lt=null),br.forEach(qs),jr.forEach(qs)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Hl||(Hl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Ih)))}function Or(e){function t(o){return ir(o,e)}if(0<fo.length){ir(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&ir(jt,e),Ot!==null&&ir(Ot,e),Lt!==null&&ir(Lt,e),br.forEach(t),jr.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)dd(n),n.blockedOn===null&&It.shift()}var zn=vt.ReactCurrentBatchConfig,qo=!0;function Ph(e,t,n,r){var o=U,i=zn.transition;zn.transition=null;try{U=1,Ha(e,t,n,r)}finally{U=o,zn.transition=i}}function Nh(e,t,n,r){var o=U,i=zn.transition;zn.transition=null;try{U=4,Ha(e,t,n,r)}finally{U=o,zn.transition=i}}function Ha(e,t,n,r){if(qo){var o=Vl(e,t,n,r);if(o===null)el(e,t,r,Qo,n),Ys(e,r);else if(Th(o,e,t,n,r))r.stopPropagation();else if(Ys(e,r),t&4&&-1<Ch.indexOf(e)){for(;o!==null;){var i=Zr(o);if(i!==null&&ad(i),i=Vl(e,t,n,r),i===null&&el(e,t,r,Qo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else el(e,t,r,null,n)}}var Qo=null;function Vl(e,t,n,r){if(Qo=null,e=Ua(r),e=tn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qo=e,null}function fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mh()){case Fa:return 1;case rd:return 4;case Go:case gh:return 16;case od:return 536870912;default:return 16}default:return 16}}var Nt=null,Va=null,No=null;function pd(){if(No)return No;var e,t=Va,n=t.length,r,o="value"in Nt?Nt.value:Nt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return No=o.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Qs(){return!1}function _e(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?po:Qs,this.isPropagationStopped=Qs,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=_e(Zn),Xr=K({},Zn,{view:0,detail:0}),Rh=_e(Xr),Vi,Gi,lr,yi=K({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(Vi=e.screenX-lr.screenX,Gi=e.screenY-lr.screenY):Gi=Vi=0,lr=e),Vi)},movementY:function(e){return"movementY"in e?e.movementY:Gi}}),Ks=_e(yi),Ah=K({},yi,{dataTransfer:0}),bh=_e(Ah),jh=K({},Xr,{relatedTarget:0}),Yi=_e(jh),Oh=K({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=_e(Oh),_h=K({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dh=_e(_h),zh=K({},Zn,{data:0}),Xs=_e(zh),$h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uh[e])?!!t[e]:!1}function Ya(){return Fh}var Wh=K({},Xr,{key:function(e){if(e.key){var t=$h[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ya,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bh=_e(Wh),Hh=K({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zs=_e(Hh),Vh=K({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ya}),Gh=_e(Vh),Yh=K({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qh=_e(Yh),Qh=K({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kh=_e(Qh),Xh=[9,13,27,32],qa=ht&&"CompositionEvent"in window,wr=null;ht&&"documentMode"in document&&(wr=document.documentMode);var Zh=ht&&"TextEvent"in window&&!wr,hd=ht&&(!qa||wr&&8<wr&&11>=wr),Js=" ",eu=!1;function md(e,t){switch(e){case"keyup":return Xh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Jh(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(eu=!0,Js);case"textInput":return e=t.data,e===Js&&eu?null:e;default:return null}}function em(e,t){if(Cn)return e==="compositionend"||!qa&&md(e,t)?(e=pd(),No=Va=Nt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hd&&t.locale!=="ko"?null:t.data;default:return null}}var tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tm[e.type]:t==="textarea"}function yd(e,t,n,r){qc(r),t=Ko(t,"onChange"),0<t.length&&(n=new Ga("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,Lr=null;function nm(e){Nd(e,0)}function vi(e){var t=Pn(e);if(Fc(t))return e}function rm(e,t){if(e==="change")return t}var vd=!1;if(ht){var qi;if(ht){var Qi="oninput"in document;if(!Qi){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),Qi=typeof nu.oninput=="function"}qi=Qi}else qi=!1;vd=qi&&(!document.documentMode||9<document.documentMode)}function ru(){xr&&(xr.detachEvent("onpropertychange",wd),Lr=xr=null)}function wd(e){if(e.propertyName==="value"&&vi(Lr)){var t=[];yd(t,Lr,e,Ua(e)),Zc(nm,t)}}function om(e,t,n){e==="focusin"?(ru(),xr=t,Lr=n,xr.attachEvent("onpropertychange",wd)):e==="focusout"&&ru()}function im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(Lr)}function lm(e,t){if(e==="click")return vi(t)}function am(e,t){if(e==="input"||e==="change")return vi(t)}function sm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:sm;function _r(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Pl.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,t){var n=ou(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ou(n)}}function xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sd(){for(var e=window,t=Bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bo(e.document)}return t}function Qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function um(e){var t=Sd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xd(n.ownerDocument.documentElement,n)){if(r!==null&&Qa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=iu(n,i);var l=iu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cm=ht&&"documentMode"in document&&11>=document.documentMode,Tn=null,Gl=null,Sr=null,Yl=!1;function lu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yl||Tn==null||Tn!==Bo(r)||(r=Tn,"selectionStart"in r&&Qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&_r(Sr,r)||(Sr=r,r=Ko(Gl,"onSelect"),0<r.length&&(t=new Ga("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tn)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Ki={},kd={};ht&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function wi(e){if(Ki[e])return Ki[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kd)return Ki[e]=t[n];return e}var Ed=wi("animationend"),Cd=wi("animationiteration"),Td=wi("animationstart"),Id=wi("transitionend"),Pd=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){Pd.set(e,t),mn(t,[e])}for(var Xi=0;Xi<au.length;Xi++){var Zi=au[Xi],dm=Zi.toLowerCase(),fm=Zi[0].toUpperCase()+Zi.slice(1);Bt(dm,"on"+fm)}Bt(Ed,"onAnimationEnd");Bt(Cd,"onAnimationIteration");Bt(Td,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(Id,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dh(r,t,void 0,e),e.currentTarget=null}function Nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;su(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;su(o,a,u),i=s}}}if(Vo)throw e=Wl,Vo=!1,Wl=null,e}function B(e,t){var n=t[Zl];n===void 0&&(n=t[Zl]=new Set);var r=e+"__bubble";n.has(r)||(Rd(t,e,2,!1),n.add(r))}function Ji(e,t,n){var r=0;t&&(r|=4),Rd(n,e,r,t)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[mo]){e[mo]=!0,Dc.forEach(function(n){n!=="selectionchange"&&(pm.has(n)||Ji(n,!1,e),Ji(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mo]||(t[mo]=!0,Ji("selectionchange",!1,t))}}function Rd(e,t,n,r){switch(fd(t)){case 1:var o=Ph;break;case 4:o=Nh;break;default:o=Ha}n=o.bind(null,t,n,e),o=void 0,!Fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function el(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=tn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Zc(function(){var u=i,f=Ua(n),p=[];e:{var g=Pd.get(e);if(g!==void 0){var y=Ga,v=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":y=Bh;break;case"focusin":v="focus",y=Yi;break;case"focusout":v="blur",y=Yi;break;case"beforeblur":case"afterblur":y=Yi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Gh;break;case Ed:case Cd:case Td:y=Lh;break;case Id:y=qh;break;case"scroll":y=Rh;break;case"wheel":y=Kh;break;case"copy":case"cut":case"paste":y=Dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Zs}var w=(t&4)!==0,E=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var c=u,m;c!==null;){m=c;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=Ar(c,h),S!=null&&w.push(zr(c,S,m)))),E)break;c=c.return}0<w.length&&(g=new y(g,v,null,n,f),p.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Ml&&(v=n.relatedTarget||n.fromElement)&&(tn(v)||v[mt]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?tn(v):null,v!==null&&(E=gn(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Ks,S="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Zs,S="onPointerLeave",h="onPointerEnter",c="pointer"),E=y==null?g:Pn(y),m=v==null?g:Pn(v),g=new w(S,c+"leave",y,n,f),g.target=E,g.relatedTarget=m,S=null,tn(f)===u&&(w=new w(h,c+"enter",v,n,f),w.target=m,w.relatedTarget=E,S=w),E=S,y&&v)t:{for(w=y,h=v,c=0,m=w;m;m=vn(m))c++;for(m=0,S=h;S;S=vn(S))m++;for(;0<c-m;)w=vn(w),c--;for(;0<m-c;)h=vn(h),m--;for(;c--;){if(w===h||h!==null&&w===h.alternate)break t;w=vn(w),h=vn(h)}w=null}else w=null;y!==null&&uu(p,g,y,w,!1),v!==null&&E!==null&&uu(p,E,v,w,!0)}}e:{if(g=u?Pn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var T=rm;else if(tu(g))if(vd)T=am;else{T=im;var P=om}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=lm);if(T&&(T=T(e,u))){yd(p,T,n,f);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Ll(g,"number",g.value)}switch(P=u?Pn(u):window,e){case"focusin":(tu(P)||P.contentEditable==="true")&&(Tn=P,Gl=u,Sr=null);break;case"focusout":Sr=Gl=Tn=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,lu(p,n,f);break;case"selectionchange":if(cm)break;case"keydown":case"keyup":lu(p,n,f)}var k;if(qa)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Cn?md(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(hd&&n.locale!=="ko"&&(Cn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Cn&&(k=pd()):(Nt=f,Va="value"in Nt?Nt.value:Nt.textContent,Cn=!0)),P=Ko(u,I),0<P.length&&(I=new Xs(I,e,null,n,f),p.push({event:I,listeners:P}),k?I.data=k:(k=gd(n),k!==null&&(I.data=k)))),(k=Zh?Jh(e,n):em(e,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(f=new Xs("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=k))}Nd(p,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ar(e,n),i!=null&&r.unshift(zr(e,i,o)),i=Ar(e,t),i!=null&&r.push(zr(e,i,o))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Ar(n,i),s!=null&&l.unshift(zr(n,s,a))):o||(s=Ar(n,i),s!=null&&l.push(zr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var hm=/\r\n?/g,mm=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace(hm,`
`).replace(mm,"")}function go(e,t,n){if(t=cu(t),cu(e)!==t&&n)throw Error(C(425))}function Xo(){}var ql=null,Ql=null;function Kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,gm=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,ym=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(vm)}:Xl;function vm(e){setTimeout(function(){throw e})}function tl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Or(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),it="__reactFiber$"+Jn,$r="__reactProps$"+Jn,mt="__reactContainer$"+Jn,Zl="__reactEvents$"+Jn,wm="__reactListeners$"+Jn,xm="__reactHandles$"+Jn;function tn(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fu(e);e!==null;){if(n=e[it])return n;e=fu(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[it]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function xi(e){return e[$r]||null}var Jl=[],Nn=-1;function Ht(e){return{current:e}}function V(e){0>Nn||(e.current=Jl[Nn],Jl[Nn]=null,Nn--)}function W(e,t){Nn++,Jl[Nn]=e.current,e.current=t}var Wt={},ve=Ht(Wt),Te=Ht(!1),un=Wt;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function Zo(){V(Te),V(ve)}function pu(e,t,n){if(ve.current!==Wt)throw Error(C(168));W(ve,t),W(Te,n)}function Ad(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,oh(e)||"Unknown",o));return K({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,un=ve.current,W(ve,e),W(Te,Te.current),!0}function hu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Ad(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,V(Te),V(ve),W(ve,e)):V(Te),W(Te,n)}var ct=null,Si=!1,nl=!1;function bd(e){ct===null?ct=[e]:ct.push(e)}function Sm(e){Si=!0,bd(e)}function Vt(){if(!nl&&ct!==null){nl=!0;var e=0,t=U;try{var n=ct;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,Si=!1}catch(o){throw ct!==null&&(ct=ct.slice(e+1)),nd(Fa,Vt),o}finally{U=t,nl=!1}}return null}var Rn=[],An=0,ei=null,ti=0,ze=[],$e=0,cn=null,dt=1,ft="";function Xt(e,t){Rn[An++]=ti,Rn[An++]=ei,ei=e,ti=t}function jd(e,t,n){ze[$e++]=dt,ze[$e++]=ft,ze[$e++]=cn,cn=e;var r=dt;e=ft;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,dt=1<<32-Je(t)+o|n<<o|r,ft=i+e}else dt=1<<i|n<<o|r,ft=e}function Ka(e){e.return!==null&&(Xt(e,1),jd(e,1,0))}function Xa(e){for(;e===ei;)ei=Rn[--An],Rn[An]=null,ti=Rn[--An],Rn[An]=null;for(;e===cn;)cn=ze[--$e],ze[$e]=null,ft=ze[--$e],ze[$e]=null,dt=ze[--$e],ze[$e]=null}var je=null,be=null,Y=!1,Xe=null;function Od(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,be=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,be=null,!0):!1;default:return!1}}function ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ta(e){if(Y){var t=be;if(t){var n=t;if(!mu(e,t)){if(ea(e))throw Error(C(418));t=_t(n.nextSibling);var r=je;t&&mu(e,t)?Od(r,n):(e.flags=e.flags&-4097|2,Y=!1,je=e)}}else{if(ea(e))throw Error(C(418));e.flags=e.flags&-4097|2,Y=!1,je=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function yo(e){if(e!==je)return!1;if(!Y)return gu(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kl(e.type,e.memoizedProps)),t&&(t=be)){if(ea(e))throw Ld(),Error(C(418));for(;t;)Od(e,t),t=_t(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=je?_t(e.stateNode.nextSibling):null;return!0}function Ld(){for(var e=be;e;)e=_t(e.nextSibling)}function Bn(){be=je=null,Y=!1}function Za(e){Xe===null?Xe=[e]:Xe.push(e)}var km=vt.ReactCurrentBatchConfig;function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function _d(e){function t(h,c){if(e){var m=h.deletions;m===null?(h.deletions=[c],h.flags|=16):m.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function o(h,c){return h=Mt(h,c),h.index=0,h.sibling=null,h}function i(h,c,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<c?(h.flags|=2,c):m):(h.flags|=2,c)):(h.flags|=1048576,c)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,m,S){return c===null||c.tag!==6?(c=ul(m,h.mode,S),c.return=h,c):(c=o(c,m),c.return=h,c)}function s(h,c,m,S){var T=m.type;return T===En?f(h,c,m.props.children,S,m.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ct&&yu(T)===c.type)?(S=o(c,m.props),S.ref=ar(h,c,m),S.return=h,S):(S=Do(m.type,m.key,m.props,null,h.mode,S),S.ref=ar(h,c,m),S.return=h,S)}function u(h,c,m,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=cl(m,h.mode,S),c.return=h,c):(c=o(c,m.children||[]),c.return=h,c)}function f(h,c,m,S,T){return c===null||c.tag!==7?(c=ln(m,h.mode,S,T),c.return=h,c):(c=o(c,m),c.return=h,c)}function p(h,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ul(""+c,h.mode,m),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lo:return m=Do(c.type,c.key,c.props,null,h.mode,m),m.ref=ar(h,null,c),m.return=h,m;case kn:return c=cl(c,h.mode,m),c.return=h,c;case Ct:var S=c._init;return p(h,S(c._payload),m)}if(fr(c)||nr(c))return c=ln(c,h.mode,m,null),c.return=h,c;vo(h,c)}return null}function g(h,c,m,S){var T=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(h,c,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case lo:return m.key===T?s(h,c,m,S):null;case kn:return m.key===T?u(h,c,m,S):null;case Ct:return T=m._init,g(h,c,T(m._payload),S)}if(fr(m)||nr(m))return T!==null?null:f(h,c,m,S,null);vo(h,m)}return null}function y(h,c,m,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,a(c,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case lo:return h=h.get(S.key===null?m:S.key)||null,s(c,h,S,T);case kn:return h=h.get(S.key===null?m:S.key)||null,u(c,h,S,T);case Ct:var P=S._init;return y(h,c,m,P(S._payload),T)}if(fr(S)||nr(S))return h=h.get(m)||null,f(c,h,S,T,null);vo(c,S)}return null}function v(h,c,m,S){for(var T=null,P=null,k=c,I=c=0,M=null;k!==null&&I<m.length;I++){k.index>I?(M=k,k=null):M=k.sibling;var O=g(h,k,m[I],S);if(O===null){k===null&&(k=M);break}e&&k&&O.alternate===null&&t(h,k),c=i(O,c,I),P===null?T=O:P.sibling=O,P=O,k=M}if(I===m.length)return n(h,k),Y&&Xt(h,I),T;if(k===null){for(;I<m.length;I++)k=p(h,m[I],S),k!==null&&(c=i(k,c,I),P===null?T=k:P.sibling=k,P=k);return Y&&Xt(h,I),T}for(k=r(h,k);I<m.length;I++)M=y(k,h,I,m[I],S),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?I:M.key),c=i(M,c,I),P===null?T=M:P.sibling=M,P=M);return e&&k.forEach(function(G){return t(h,G)}),Y&&Xt(h,I),T}function w(h,c,m,S){var T=nr(m);if(typeof T!="function")throw Error(C(150));if(m=T.call(m),m==null)throw Error(C(151));for(var P=T=null,k=c,I=c=0,M=null,O=m.next();k!==null&&!O.done;I++,O=m.next()){k.index>I?(M=k,k=null):M=k.sibling;var G=g(h,k,O.value,S);if(G===null){k===null&&(k=M);break}e&&k&&G.alternate===null&&t(h,k),c=i(G,c,I),P===null?T=G:P.sibling=G,P=G,k=M}if(O.done)return n(h,k),Y&&Xt(h,I),T;if(k===null){for(;!O.done;I++,O=m.next())O=p(h,O.value,S),O!==null&&(c=i(O,c,I),P===null?T=O:P.sibling=O,P=O);return Y&&Xt(h,I),T}for(k=r(h,k);!O.done;I++,O=m.next())O=y(k,h,I,O.value,S),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?I:O.key),c=i(O,c,I),P===null?T=O:P.sibling=O,P=O);return e&&k.forEach(function(He){return t(h,He)}),Y&&Xt(h,I),T}function E(h,c,m,S){if(typeof m=="object"&&m!==null&&m.type===En&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case lo:e:{for(var T=m.key,P=c;P!==null;){if(P.key===T){if(T=m.type,T===En){if(P.tag===7){n(h,P.sibling),c=o(P,m.props.children),c.return=h,h=c;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ct&&yu(T)===P.type){n(h,P.sibling),c=o(P,m.props),c.ref=ar(h,P,m),c.return=h,h=c;break e}n(h,P);break}else t(h,P);P=P.sibling}m.type===En?(c=ln(m.props.children,h.mode,S,m.key),c.return=h,h=c):(S=Do(m.type,m.key,m.props,null,h.mode,S),S.ref=ar(h,c,m),S.return=h,h=S)}return l(h);case kn:e:{for(P=m.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(h,c.sibling),c=o(c,m.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=cl(m,h.mode,S),c.return=h,h=c}return l(h);case Ct:return P=m._init,E(h,c,P(m._payload),S)}if(fr(m))return v(h,c,m,S);if(nr(m))return w(h,c,m,S);vo(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(h,c.sibling),c=o(c,m),c.return=h,h=c):(n(h,c),c=ul(m,h.mode,S),c.return=h,h=c),l(h)):n(h,c)}return E}var Hn=_d(!0),Dd=_d(!1),ni=Ht(null),ri=null,bn=null,Ja=null;function es(){Ja=bn=ri=null}function ts(e){var t=ni.current;V(ni),e._currentValue=t}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){ri=e,Ja=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Ja!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(ri===null)throw Error(C(308));bn=e,ri.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var nn=null;function ns(e){nn===null?nn=[e]:nn.push(e)}function zd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ns(t)):(n.next=o.next,o.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,gt(e,n)}return o=r.interleaved,o===null?(t.next=t,ns(r)):(t.next=o.next,o.next=t),r.interleaved=t,gt(e,n)}function Ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wa(e,n)}}function vu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oi(e,t,n,r){var o=e.updateQueue;Tt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,f=u=s=null,a=i;do{var g=a.lane,y=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(g=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(y,p,g);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(y,p,g):v,g==null)break e;p=K({},p,g);break e;case 2:Tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=y,s=p):f=f.next=y,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(f===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);fn|=l,e.lanes=l,e.memoizedState=p}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Jr={},at=Ht(Jr),Mr=Ht(Jr),Ur=Ht(Jr);function rn(e){if(e===Jr)throw Error(C(174));return e}function os(e,t){switch(W(Ur,t),W(Mr,e),W(at,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}V(at),W(at,t)}function Vn(){V(at),V(Mr),V(Ur)}function Md(e){rn(Ur.current);var t=rn(at.current),n=Dl(t,e.type);t!==n&&(W(Mr,e),W(at,n))}function is(e){Mr.current===e&&(V(at),V(Mr))}var q=Ht(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rl=[];function ls(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var bo=vt.ReactCurrentDispatcher,ol=vt.ReactCurrentBatchConfig,dn=0,Q=null,le=null,ue=null,li=!1,kr=!1,Fr=0,Em=0;function me(){throw Error(C(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function ss(e,t,n,r,o,i){if(dn=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bo.current=e===null||e.memoizedState===null?Pm:Nm,e=n(r,o),kr){i=0;do{if(kr=!1,Fr=0,25<=i)throw Error(C(301));i+=1,ue=le=null,t.updateQueue=null,bo.current=Rm,e=n(r,o)}while(kr)}if(bo.current=ai,t=le!==null&&le.next!==null,dn=0,ue=le=Q=null,li=!1,t)throw Error(C(300));return e}function us(){var e=Fr!==0;return Fr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Q.memoizedState=ue=e:ue=ue.next=e,ue}function We(){if(le===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?Q.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(C(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?Q.memoizedState=ue=e:ue=ue.next=e}return ue}function Wr(e,t){return typeof t=="function"?t(e):t}function il(e){var t=We(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var f=u.lane;if((dn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,Q.lanes|=f,fn|=f}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,nt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,fn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ll(e){var t=We(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);nt(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ud(){}function Fd(e,t){var n=Q,r=We(),o=t(),i=!nt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ce=!0),r=r.queue,cs(Hd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Br(9,Bd.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(C(349));dn&30||Wd(n,t,o)}return o}function Wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bd(e,t,n,r){t.value=n,t.getSnapshot=r,Vd(t)&&Gd(e)}function Hd(e,t,n){return n(function(){Vd(t)&&Gd(e)})}function Vd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Gd(e){var t=gt(e,1);t!==null&&et(t,e,1,-1)}function xu(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Im.bind(null,Q,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yd(){return We().memoizedState}function jo(e,t,n,r){var o=ot();Q.flags|=e,o.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function ki(e,t,n,r){var o=We();r=r===void 0?null:r;var i=void 0;if(le!==null){var l=le.memoizedState;if(i=l.destroy,r!==null&&as(r,l.deps)){o.memoizedState=Br(t,n,i,r);return}}Q.flags|=e,o.memoizedState=Br(1|t,n,i,r)}function Su(e,t){return jo(8390656,8,e,t)}function cs(e,t){return ki(2048,8,e,t)}function qd(e,t){return ki(4,2,e,t)}function Qd(e,t){return ki(4,4,e,t)}function Kd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xd(e,t,n){return n=n!=null?n.concat([e]):null,ki(4,4,Kd.bind(null,t,e),n)}function ds(){}function Zd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&as(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&as(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ef(e,t,n){return dn&21?(nt(n,t)||(n=id(),Q.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Cm(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),t()}finally{U=n,ol.transition=r}}function tf(){return We().memoizedState}function Tm(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nf(e))rf(t,n);else if(n=zd(e,t,n,r),n!==null){var o=xe();et(n,e,r,o),of(n,t,r)}}function Im(e,t,n){var r=$t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nf(e))rf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,nt(a,l)){var s=t.interleaved;s===null?(o.next=o,ns(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=zd(e,t,o,r),n!==null&&(o=xe(),et(n,e,r,o),of(n,t,r))}}function nf(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function rf(e,t){kr=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function of(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wa(e,n)}}var ai={readContext:Fe,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Pm={readContext:Fe,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jo(4194308,4,Kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return jo(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Tm.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:xu,useDebugValue:ds,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=xu(!1),t=e[0];return e=Cm.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=ot();if(Y){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ce===null)throw Error(C(349));dn&30||Wd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Su(Hd.bind(null,r,i,e),[e]),r.flags|=2048,Br(9,Bd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ot(),t=ce.identifierPrefix;if(Y){var n=ft,r=dt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Em++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Nm={readContext:Fe,useCallback:Zd,useContext:Fe,useEffect:cs,useImperativeHandle:Xd,useInsertionEffect:qd,useLayoutEffect:Qd,useMemo:Jd,useReducer:il,useRef:Yd,useState:function(){return il(Wr)},useDebugValue:ds,useDeferredValue:function(e){var t=We();return ef(t,le.memoizedState,e)},useTransition:function(){var e=il(Wr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Ud,useSyncExternalStore:Fd,useId:tf,unstable_isNewReconciler:!1},Rm={readContext:Fe,useCallback:Zd,useContext:Fe,useEffect:cs,useImperativeHandle:Xd,useInsertionEffect:qd,useLayoutEffect:Qd,useMemo:Jd,useReducer:ll,useRef:Yd,useState:function(){return ll(Wr)},useDebugValue:ds,useDeferredValue:function(e){var t=We();return le===null?t.memoizedState=e:ef(t,le.memoizedState,e)},useTransition:function(){var e=ll(Wr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Ud,useSyncExternalStore:Fd,useId:tf,unstable_isNewReconciler:!1};function qe(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ra(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ei={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=$t(e),i=pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(et(t,e,o,r),Ao(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=$t(e),i=pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(et(t,e,o,r),Ao(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=$t(e),o=pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dt(e,o,r),t!==null&&(et(t,e,r,n),Ao(t,e,r))}};function ku(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(o,i):!0}function lf(e,t,n){var r=!1,o=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(o=Ie(t)?un:ve.current,r=t.contextTypes,i=(r=r!=null)?Wn(e,o):Wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ei,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ei.enqueueReplaceState(t,t.state,null)}function oa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},rs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Fe(i):(i=Ie(t)?un:ve.current,o.context=Wn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ra(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ei.enqueueReplaceState(o,o.state,null),oi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=rh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function al(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ia(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Am=typeof WeakMap=="function"?WeakMap:Map;function af(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ui||(ui=!0,ma=r),ia(e,t)},n}function sf(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ia(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ia(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Am;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Hm.bind(null,e,t,n),t.then(e,e))}function Tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Iu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var bm=vt.ReactCurrentOwner,Ce=!1;function we(e,t,n,r){t.child=e===null?Dd(t,null,n,r):Hn(t,e.child,n,r)}function Pu(e,t,n,r,o){n=n.render;var i=t.ref;return $n(t,o),r=ss(e,t,n,r,i,o),n=us(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(Y&&n&&Ka(t),t.flags|=1,we(e,t,r,o),t.child)}function Nu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ws(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,uf(e,t,i,r,o)):(e=Do(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(l,r)&&e.ref===t.ref)return yt(e,t,o)}return t.flags|=1,e=Mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function uf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(_r(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,yt(e,t,o)}return la(e,t,n,r,o)}function cf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(On,Re),Re|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(On,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(On,Re),Re|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(On,Re),Re|=r;return we(e,t,o,n),t.child}function df(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function la(e,t,n,r,o){var i=Ie(n)?un:ve.current;return i=Wn(t,i),$n(t,o),n=ss(e,t,n,r,i,o),r=us(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(Y&&r&&Ka(t),t.flags|=1,we(e,t,n,o),t.child)}function Ru(e,t,n,r,o){if(Ie(n)){var i=!0;Jo(t)}else i=!1;if($n(t,o),t.stateNode===null)Oo(e,t),lf(t,n,r),oa(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=Ie(n)?un:ve.current,u=Wn(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Eu(t,l,r,u),Tt=!1;var g=t.memoizedState;l.state=g,oi(t,r,l,o),s=t.memoizedState,a!==r||g!==s||Te.current||Tt?(typeof f=="function"&&(ra(t,n,f,r),s=t.memoizedState),(a=Tt||ku(t,n,a,r,g,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,$d(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:qe(t.type,a),l.props=u,p=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Fe(s):(s=Ie(n)?un:ve.current,s=Wn(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||g!==s)&&Eu(t,l,r,s),Tt=!1,g=t.memoizedState,l.state=g,oi(t,r,l,o);var v=t.memoizedState;a!==p||g!==v||Te.current||Tt?(typeof y=="function"&&(ra(t,n,y,r),v=t.memoizedState),(u=Tt||ku(t,n,u,r,g,v,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return aa(e,t,n,r,i,o)}function aa(e,t,n,r,o,i){df(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&hu(t,n,!1),yt(e,t,i);r=t.stateNode,bm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Hn(t,e.child,null,i),t.child=Hn(t,null,a,i)):we(e,t,a,i),t.memoizedState=r.state,o&&hu(t,n,!0),t.child}function ff(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),os(e,t.containerInfo)}function Au(e,t,n,r,o){return Bn(),Za(o),t.flags|=256,we(e,t,n,r),t.child}var sa={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function pf(e,t,n){var r=t.pendingProps,o=q.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(q,o&1),e===null)return ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ii(l,r,0,null),e=ln(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ua(n),t.memoizedState=sa,e):fs(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return jm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Mt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Mt(a,i):(i=ln(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ua(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=sa,r}return i=e.child,e=i.sibling,r=Mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fs(e,t){return t=Ii({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wo(e,t,n,r){return r!==null&&Za(r),Hn(t,e.child,null,n),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=al(Error(C(422))),wo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ii({mode:"visible",children:r.children},o,0,null),i=ln(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Hn(t,e.child,null,l),t.child.memoizedState=ua(l),t.memoizedState=sa,i);if(!(t.mode&1))return wo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(C(419)),r=al(i,r,void 0),wo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ce||a){if(r=ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,gt(e,o),et(r,e,o,-1))}return vs(),r=al(Error(C(421))),wo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Vm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,be=_t(o.nextSibling),je=t,Y=!0,Xe=null,e!==null&&(ze[$e++]=dt,ze[$e++]=ft,ze[$e++]=cn,dt=e.id,ft=e.overflow,cn=t),t=fs(t,r.children),t.flags|=4096,t)}function bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function sl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function hf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bu(e,n,t);else if(e.tag===19)bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),sl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ii(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}sl(t,!0,n,null,i);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Om(e,t,n){switch(t.tag){case 3:ff(t),Bn();break;case 5:Md(t);break;case 1:Ie(t.type)&&Jo(t);break;case 4:os(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(ni,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?pf(e,t,n):(W(q,q.current&1),e=yt(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,cf(e,t,n)}return yt(e,t,n)}var mf,ca,gf,yf;mf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ca=function(){};gf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(at.current);var i=null;switch(n){case"input":o=jl(e,o),r=jl(e,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=_l(e,o),r=_l(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}zl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Nr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o?.[u],r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&B("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};yf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lm(e,t,n){var r=t.pendingProps;switch(Xa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ie(t.type)&&Zo(),ge(t),null;case 3:return r=t.stateNode,Vn(),V(Te),V(ve),ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(va(Xe),Xe=null))),ca(e,t),ge(t),null;case 5:is(t);var o=rn(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)gf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ge(t),null}if(e=rn(at.current),yo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[it]=t,r[$r]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<hr.length;o++)B(hr[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Us(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":Ws(r,i),B("invalid",r)}zl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&go(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&go(r.textContent,a,e),o=["children",""+a]):Nr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":ao(r),Fs(r,i,!0);break;case"textarea":ao(r),Bs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[it]=t,e[$r]=r,mf(e,t,!1,!1),t.stateNode=e;e:{switch(l=$l(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<hr.length;o++)B(hr[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":Us(e,r),o=jl(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),B("invalid",e);break;case"textarea":Ws(e,r),o=_l(e,r),B("invalid",e);break;default:o=r}zl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Yc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Vc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Rr(e,s):typeof s=="number"&&Rr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Nr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&B("scroll",e):s!=null&&Da(e,i,s,l))}switch(n){case"input":ao(e),Fs(e,r,!1);break;case"textarea":ao(e),Bs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ln(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)yf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=rn(Ur.current),rn(at.current),yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return ge(t),null;case 13:if(V(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&be!==null&&t.mode&1&&!(t.flags&128))Ld(),Bn(),t.flags|=98560,i=!1;else if(i=yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[it]=t}else Bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),i=!1}else Xe!==null&&(va(Xe),Xe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?se===0&&(se=3):vs())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Vn(),ca(e,t),e===null&&Dr(t.stateNode.containerInfo),ge(t),null;case 10:return ts(t.type._context),ge(t),null;case 17:return Ie(t.type)&&Zo(),ge(t),null;case 19:if(V(q),i=t.memoizedState,i===null)return ge(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)sr(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ii(e),l!==null){for(t.flags|=128,sr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>Yn&&(t.flags|=128,r=!0,sr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ii(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return ge(t),null}else 2*ee()-i.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,sr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return ys(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function _m(e,t){switch(Xa(t),t.tag){case 1:return Ie(t.type)&&Zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),V(Te),V(ve),ls(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return is(t),null;case 13:if(V(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(q),null;case 4:return Vn(),null;case 10:return ts(t.type._context),null;case 22:case 23:return ys(),null;case 24:return null;default:return null}}var xo=!1,ye=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,A=null;function jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function da(e,t,n){try{n()}catch(r){J(e,t,r)}}var ju=!1;function zm(e,t){if(ql=qo,e=Sd(),Qa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,p=e,g=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===n&&++u===o&&(a=l),g===i&&++f===r&&(s=l),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ql={focusedElem:e,selectionRange:n},qo=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,E=v.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:qe(t.type,w),E);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=ju,ju=!1,v}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&da(t,n,i)}o=o.next}while(o!==r)}}function Ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vf(e){var t=e.alternate;t!==null&&(e.alternate=null,vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[$r],delete t[Zl],delete t[wm],delete t[xm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wf(e){return e.tag===5||e.tag===3||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(pa(e,t,n),e=e.sibling;e!==null;)pa(e,t,n),e=e.sibling}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}var fe=null,Qe=!1;function kt(e,t,n){for(n=n.child;n!==null;)xf(e,t,n),n=n.sibling}function xf(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(gi,n)}catch{}switch(n.tag){case 5:ye||jn(n,t);case 6:var r=fe,o=Qe;fe=null,kt(e,t,n),fe=r,Qe=o,fe!==null&&(Qe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Qe?(e=fe,n=n.stateNode,e.nodeType===8?tl(e.parentNode,n):e.nodeType===1&&tl(e,n),Or(e)):tl(fe,n.stateNode));break;case 4:r=fe,o=Qe,fe=n.stateNode.containerInfo,Qe=!0,kt(e,t,n),fe=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&da(n,t,l),o=o.next}while(o!==r)}kt(e,t,n);break;case 1:if(!ye&&(jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,kt(e,t,n),ye=r):kt(e,t,n);break;default:kt(e,t,n)}}function Lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dm),t.forEach(function(r){var o=Gm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,Qe=!1;break e;case 3:fe=a.stateNode.containerInfo,Qe=!0;break e;case 4:fe=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(fe===null)throw Error(C(160));xf(i,l,o),fe=null,Qe=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){J(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}function Sf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),rt(e),r&4){try{Er(3,e,e.return),Ci(3,e)}catch(w){J(e,e.return,w)}try{Er(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:Ge(t,e),rt(e),r&512&&n!==null&&jn(n,n.return);break;case 5:if(Ge(t,e),rt(e),r&512&&n!==null&&jn(n,n.return),e.flags&32){var o=e.stateNode;try{Rr(o,"")}catch(w){J(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Wc(o,i),$l(a,l);var u=$l(a,i);for(l=0;l<s.length;l+=2){var f=s[l],p=s[l+1];f==="style"?Yc(o,p):f==="dangerouslySetInnerHTML"?Vc(o,p):f==="children"?Rr(o,p):Da(o,f,p,u)}switch(a){case"input":Ol(o,i);break;case"textarea":Bc(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Ln(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ln(o,!!i.multiple,i.defaultValue,!0):Ln(o,!!i.multiple,i.multiple?[]:"",!1))}o[$r]=i}catch(w){J(e,e.return,w)}}break;case 6:if(Ge(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){J(e,e.return,w)}}break;case 3:if(Ge(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:Ge(t,e),rt(e);break;case 13:Ge(t,e),rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ms=ee())),r&4&&Lu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||f,Ge(t,e),ye=u):Ge(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(p=A=f;A!==null;){switch(g=A,y=g.child,g.tag){case 0:case 11:case 14:case 15:Er(4,g,g.return);break;case 1:jn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){J(r,n,w)}}break;case 5:jn(g,g.return);break;case 22:if(g.memoizedState!==null){Du(p);continue}}y!==null?(y.return=g,A=y):Du(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Gc("display",l))}catch(w){J(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){J(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ge(t,e),rt(e),r&4&&Lu(e);break;case 21:break;default:Ge(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wf(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Rr(o,""),r.flags&=-33);var i=Ou(e);ha(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ou(e);pa(e,a,l);break;default:throw Error(C(161))}}catch(s){J(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $m(e,t,n){A=e,kf(e)}function kf(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||xo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ye;a=xo;var u=ye;if(xo=l,(ye=s)&&!u)for(A=o;A!==null;)l=A,s=l.child,l.tag===22&&l.memoizedState!==null?zu(o):s!==null?(s.return=l,A=s):zu(o);for(;i!==null;)A=i,kf(i),i=i.sibling;A=o,xo=a,ye=u}_u(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):_u(e)}}function _u(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Or(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||t.flags&512&&fa(t)}catch(g){J(t,t.return,g)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Du(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function zu(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ci(4,t)}catch(s){J(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){J(t,o,s)}}var i=t.return;try{fa(t)}catch(s){J(t,i,s)}break;case 5:var l=t.return;try{fa(t)}catch(s){J(t,l,s)}}}catch(s){J(t,t.return,s)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var Mm=Math.ceil,si=vt.ReactCurrentDispatcher,ps=vt.ReactCurrentOwner,Ue=vt.ReactCurrentBatchConfig,D=0,ce=null,re=null,pe=0,Re=0,On=Ht(0),se=0,Hr=null,fn=0,Ti=0,hs=0,Cr=null,Ee=null,ms=0,Yn=1/0,st=null,ui=!1,ma=null,zt=null,So=!1,Rt=null,ci=0,Tr=0,ga=null,Lo=-1,_o=0;function xe(){return D&6?ee():Lo!==-1?Lo:Lo=ee()}function $t(e){return e.mode&1?D&2&&pe!==0?pe&-pe:km.transition!==null?(_o===0&&(_o=id()),_o):(e=U,e!==0||(e=window.event,e=e===void 0?16:fd(e.type)),e):1}function et(e,t,n,r){if(50<Tr)throw Tr=0,ga=null,Error(C(185));Kr(e,n,r),(!(D&2)||e!==ce)&&(e===ce&&(!(D&2)&&(Ti|=n),se===4&&Pt(e,pe)),Pe(e,r),n===1&&D===0&&!(t.mode&1)&&(Yn=ee()+500,Si&&Vt()))}function Pe(e,t){var n=e.callbackNode;kh(e,t);var r=Yo(e,e===ce?pe:0);if(r===0)n!==null&&Gs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gs(n),t===1)e.tag===0?Sm($u.bind(null,e)):bd($u.bind(null,e)),ym(function(){!(D&6)&&Vt()}),n=null;else{switch(ld(r)){case 1:n=Fa;break;case 4:n=rd;break;case 16:n=Go;break;case 536870912:n=od;break;default:n=Go}n=Af(n,Ef.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ef(e,t){if(Lo=-1,_o=0,D&6)throw Error(C(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Yo(e,e===ce?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=di(e,r);else{t=r;var o=D;D|=2;var i=Tf();(ce!==e||pe!==t)&&(st=null,Yn=ee()+500,on(e,t));do try{Wm();break}catch(a){Cf(e,a)}while(!0);es(),si.current=i,D=o,re!==null?t=0:(ce=null,pe=0,t=se)}if(t!==0){if(t===2&&(o=Bl(e),o!==0&&(r=o,t=ya(e,o))),t===1)throw n=Hr,on(e,0),Pt(e,r),Pe(e,ee()),n;if(t===6)Pt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Um(o)&&(t=di(e,r),t===2&&(i=Bl(e),i!==0&&(r=i,t=ya(e,i))),t===1))throw n=Hr,on(e,0),Pt(e,r),Pe(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Zt(e,Ee,st);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=ms+500-ee(),10<t)){if(Yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Xl(Zt.bind(null,e,Ee,st),t);break}Zt(e,Ee,st);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Je(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mm(r/1960))-r,10<r){e.timeoutHandle=Xl(Zt.bind(null,e,Ee,st),r);break}Zt(e,Ee,st);break;case 5:Zt(e,Ee,st);break;default:throw Error(C(329))}}}return Pe(e,ee()),e.callbackNode===n?Ef.bind(null,e):null}function ya(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=di(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&va(t)),e}function va(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Um(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~hs,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if(D&6)throw Error(C(327));Mn();var t=Yo(e,0);if(!(t&1))return Pe(e,ee()),null;var n=di(e,t);if(e.tag!==0&&n===2){var r=Bl(e);r!==0&&(t=r,n=ya(e,r))}if(n===1)throw n=Hr,on(e,0),Pt(e,t),Pe(e,ee()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Ee,st),Pe(e,ee()),null}function gs(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Yn=ee()+500,Si&&Vt())}}function pn(e){Rt!==null&&Rt.tag===0&&!(D&6)&&Mn();var t=D;D|=1;var n=Ue.transition,r=U;try{if(Ue.transition=null,U=1,e)return e()}finally{U=r,Ue.transition=n,D=t,!(D&6)&&Vt()}}function ys(){Re=On.current,V(On)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gm(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Xa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:Vn(),V(Te),V(ve),ls();break;case 5:is(r);break;case 4:Vn();break;case 13:V(q);break;case 19:V(q);break;case 10:ts(r.type._context);break;case 22:case 23:ys()}n=n.return}if(ce=e,re=e=Mt(e.current,null),pe=Re=t,se=0,Hr=null,hs=Ti=fn=0,Ee=Cr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}nn=null}return e}function Cf(e,t){do{var n=re;try{if(es(),bo.current=ai,li){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}li=!1}if(dn=0,ue=le=Q=null,kr=!1,Fr=0,ps.current=null,n===null||n.return===null){se=1,Hr=t,re=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=pe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Tu(l);if(y!==null){y.flags&=-257,Iu(y,l,a,i,t),y.mode&1&&Cu(i,u,t),t=y,s=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(s),t.updateQueue=w}else v.add(s);break e}else{if(!(t&1)){Cu(i,u,t),vs();break e}s=Error(C(426))}}else if(Y&&a.mode&1){var E=Tu(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Iu(E,l,a,i,t),Za(Gn(s,a));break e}}i=s=Gn(s,a),se!==4&&(se=2),Cr===null?Cr=[i]:Cr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=af(i,s,t);vu(i,h);break e;case 1:a=s;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zt===null||!zt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=sf(i,a,t);vu(i,S);break e}}i=i.return}while(i!==null)}Pf(n)}catch(T){t=T,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Tf(){var e=si.current;return si.current=ai,e===null?ai:e}function vs(){(se===0||se===3||se===2)&&(se=4),ce===null||!(fn&268435455)&&!(Ti&268435455)||Pt(ce,pe)}function di(e,t){var n=D;D|=2;var r=Tf();(ce!==e||pe!==t)&&(st=null,on(e,t));do try{Fm();break}catch(o){Cf(e,o)}while(!0);if(es(),D=n,si.current=r,re!==null)throw Error(C(261));return ce=null,pe=0,se}function Fm(){for(;re!==null;)If(re)}function Wm(){for(;re!==null&&!ph();)If(re)}function If(e){var t=Rf(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?Pf(e):re=t,ps.current=null}function Pf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_m(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=Lm(n,t,Re),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function Zt(e,t,n){var r=U,o=Ue.transition;try{Ue.transition=null,U=1,Bm(e,t,n,r)}finally{Ue.transition=o,U=r}return null}function Bm(e,t,n,r){do Mn();while(Rt!==null);if(D&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Eh(e,i),e===ce&&(re=ce=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,Af(Go,function(){return Mn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ue.transition,Ue.transition=null;var l=U;U=1;var a=D;D|=4,ps.current=null,zm(e,n),Sf(n,e),um(Ql),qo=!!ql,Ql=ql=null,e.current=n,$m(n),hh(),D=a,U=l,Ue.transition=i}else e.current=n;if(So&&(So=!1,Rt=e,ci=o),i=e.pendingLanes,i===0&&(zt=null),yh(n.stateNode),Pe(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ui)throw ui=!1,e=ma,ma=null,e;return ci&1&&e.tag!==0&&Mn(),i=e.pendingLanes,i&1?e===ga?Tr++:(Tr=0,ga=e):Tr=0,Vt(),null}function Mn(){if(Rt!==null){var e=ld(ci),t=Ue.transition,n=U;try{if(Ue.transition=null,U=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,ci=0,D&6)throw Error(C(331));var o=D;for(D|=4,A=e.current;A!==null;){var i=A,l=i.child;if(A.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(A=u;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:Er(8,f,i)}var p=f.child;if(p!==null)p.return=f,A=p;else for(;A!==null;){f=A;var g=f.sibling,y=f.return;if(vf(f),f===u){A=null;break}if(g!==null){g.return=y,A=g;break}A=y}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}A=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,A=l;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Er(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,A=h;break e}A=i.return}}var c=e.current;for(A=c;A!==null;){l=A;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,A=m;else e:for(l=c;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ci(9,a)}}catch(T){J(a,a.return,T)}if(a===l){A=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,A=S;break e}A=a.return}}if(D=o,Vt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(gi,e)}catch{}r=!0}return r}finally{U=n,Ue.transition=t}}return!1}function Mu(e,t,n){t=Gn(n,t),t=af(e,t,1),e=Dt(e,t,1),t=xe(),e!==null&&(Kr(e,1,t),Pe(e,t))}function J(e,t,n){if(e.tag===3)Mu(e,e,n);else for(;t!==null;){if(t.tag===3){Mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Gn(n,e),e=sf(t,e,1),t=Dt(t,e,1),e=xe(),t!==null&&(Kr(t,1,e),Pe(t,e));break}}t=t.return}}function Hm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(pe&n)===n&&(se===4||se===3&&(pe&130023424)===pe&&500>ee()-ms?on(e,0):hs|=n),Pe(e,t)}function Nf(e,t){t===0&&(e.mode&1?(t=co,co<<=1,!(co&130023424)&&(co=4194304)):t=1);var n=xe();e=gt(e,t),e!==null&&(Kr(e,t,n),Pe(e,n))}function Vm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nf(e,n)}function Gm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Nf(e,n)}var Rf;Rf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Om(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,Y&&t.flags&1048576&&jd(t,ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oo(e,t),e=t.pendingProps;var o=Wn(t,ve.current);$n(t,n),o=ss(null,t,r,e,o,n);var i=us();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(i=!0,Jo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,rs(t),o.updater=Ei,t.stateNode=o,o._reactInternals=t,oa(t,r,e,n),t=aa(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&Ka(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=qm(r),e=qe(r,e),o){case 0:t=la(null,t,r,e,n);break e;case 1:t=Ru(null,t,r,e,n);break e;case 11:t=Pu(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,qe(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),la(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Ru(e,t,r,o,n);case 3:e:{if(ff(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,$d(e,t),oi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Gn(Error(C(423)),t),t=Au(e,t,r,n,o);break e}else if(r!==o){o=Gn(Error(C(424)),t),t=Au(e,t,r,n,o);break e}else for(be=_t(t.stateNode.containerInfo.firstChild),je=t,Y=!0,Xe=null,n=Dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===o){t=yt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Md(t),e===null&&ta(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Kl(r,o)?l=null:i!==null&&Kl(r,i)&&(t.flags|=32),df(e,t),we(e,t,l,n),t.child;case 6:return e===null&&ta(t),null;case 13:return pf(e,t,n);case 4:return os(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Pu(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(ni,r._currentValue),r._currentValue=l,i!==null)if(nt(i.value,l)){if(i.children===o.children&&!Te.current){t=yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=pt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),na(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),na(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$n(t,n),o=Fe(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=qe(r,t.pendingProps),o=qe(r.type,o),Nu(e,t,r,o,n);case 15:return uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Oo(e,t),t.tag=1,Ie(r)?(e=!0,Jo(t)):e=!1,$n(t,n),lf(t,r,o),oa(t,r,o,n),aa(null,t,r,!0,e,n);case 19:return hf(e,t,n);case 22:return cf(e,t,n)}throw Error(C(156,t.tag))};function Af(e,t){return nd(e,t)}function Ym(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new Ym(e,t,n,r)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qm(e){if(typeof e=="function")return ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$a)return 11;if(e===Ma)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Do(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ws(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case En:return ln(n.children,o,i,t);case za:l=8,o|=8;break;case Nl:return e=Me(12,n,t,o|2),e.elementType=Nl,e.lanes=i,e;case Rl:return e=Me(13,n,t,o),e.elementType=Rl,e.lanes=i,e;case Al:return e=Me(19,n,t,o),e.elementType=Al,e.lanes=i,e;case Mc:return Ii(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zc:l=10;break e;case $c:l=9;break e;case $a:l=11;break e;case Ma:l=14;break e;case Ct:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Me(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function ln(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Ii(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Mc,e.lanes=n,e.stateNode={isHidden:!1},e}function ul(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function cl(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xs(e,t,n,r,o,i,l,a,s){return e=new Qm(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Me(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rs(i),e}function Km(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bf(e){if(!e)return Wt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Ad(e,n,t)}return t}function jf(e,t,n,r,o,i,l,a,s){return e=xs(n,r,!0,e,o,i,l,a,s),e.context=bf(null),n=e.current,r=xe(),o=$t(n),i=pt(r,o),i.callback=t??null,Dt(n,i,o),e.current.lanes=o,Kr(e,o,r),Pe(e,r),e}function Pi(e,t,n,r){var o=t.current,i=xe(),l=$t(o);return n=bf(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(o,t,l),e!==null&&(et(e,o,l,i),Ao(e,o,l)),l}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ss(e,t){Uu(e,t),(e=e.alternate)&&Uu(e,t)}function Xm(){return null}var Of=typeof reportError=="function"?reportError:function(e){console.error(e)};function ks(e){this._internalRoot=e}Ni.prototype.render=ks.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Pi(e,t,null,null)};Ni.prototype.unmount=ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Pi(null,e,null,null)}),t[mt]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&dd(e)}};function Es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fu(){}function Zm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=fi(l);i.call(u)}}var l=jf(t,r,e,0,null,!1,!1,"",Fu);return e._reactRootContainer=l,e[mt]=l.current,Dr(e.nodeType===8?e.parentNode:e),pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=fi(s);a.call(u)}}var s=xs(e,0,!1,null,null,!1,!1,"",Fu);return e._reactRootContainer=s,e[mt]=s.current,Dr(e.nodeType===8?e.parentNode:e),pn(function(){Pi(t,s,n,r)}),s}function Ai(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=fi(l);a.call(s)}}Pi(t,l,e,o)}else l=Zm(n,t,e,o,r);return fi(l)}ad=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(Wa(t,n|1),Pe(t,ee()),!(D&6)&&(Yn=ee()+500,Vt()))}break;case 13:pn(function(){var r=gt(e,1);if(r!==null){var o=xe();et(r,e,1,o)}}),Ss(e,1)}};Ba=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=xe();et(t,e,134217728,n)}Ss(e,134217728)}};sd=function(e){if(e.tag===13){var t=$t(e),n=gt(e,t);if(n!==null){var r=xe();et(n,e,t,r)}Ss(e,t)}};ud=function(){return U};cd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Ul=function(e,t,n){switch(t){case"input":if(Ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=xi(r);if(!o)throw Error(C(90));Fc(r),Ol(r,o)}}}break;case"textarea":Bc(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Kc=gs;Xc=pn;var Jm={usingClientEntryPoint:!1,Events:[Zr,Pn,xi,qc,Qc,gs]},ur={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eg={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ed(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{gi=ko.inject(eg),lt=ko}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jm;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Es(t))throw Error(C(200));return Km(e,t,null,n)};Le.createRoot=function(e,t){if(!Es(e))throw Error(C(299));var n=!1,r="",o=Of;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xs(e,1,!1,null,null,n,!1,r,o),e[mt]=t.current,Dr(e.nodeType===8?e.parentNode:e),new ks(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=ed(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return pn(e)};Le.hydrate=function(e,t,n){if(!Ri(t))throw Error(C(200));return Ai(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Es(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Of;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jf(t,null,e,1,n??null,o,!1,i,l),e[mt]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ni(t)};Le.render=function(e,t,n){if(!Ri(t))throw Error(C(200));return Ai(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(C(40));return e._reactRootContainer?(pn(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Le.unstable_batchedUpdates=gs;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ri(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ai(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function Lf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lf)}catch(e){console.error(e)}}Lf(),Oc.exports=Le;var tg=Oc.exports;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(null,arguments)}var At;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(At||(At={}));const Wu="popstate";function ng(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return wa("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:_f(o)}return og(t,n,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rg(){return Math.random().toString(36).substr(2,8)}function Bu(e,t){return{usr:e.state,key:e.key,idx:t}}function wa(e,t,n,r){return n===void 0&&(n=null),Vr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?er(t):t,{state:n,key:t&&t.key||r||rg()})}function _f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function er(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function og(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=At.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(Vr({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function p(){a=At.Pop;let E=f(),h=E==null?null:E-u;u=E,s&&s({action:a,location:w.location,delta:h})}function g(E,h){a=At.Push;let c=wa(w.location,E,h);u=f()+1;let m=Bu(c,u),S=w.createHref(c);try{l.pushState(m,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;o.location.assign(S)}i&&s&&s({action:a,location:w.location,delta:1})}function y(E,h){a=At.Replace;let c=wa(w.location,E,h);u=f();let m=Bu(c,u),S=w.createHref(c);l.replaceState(m,"",S),i&&s&&s({action:a,location:w.location,delta:0})}function v(E){let h=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof E=="string"?E:_f(E);return c=c.replace(/ $/,"%20"),oe(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let w={get action(){return a},get location(){return e(o,l)},listen(E){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Wu,p),s=E,()=>{o.removeEventListener(Wu,p),s=null}},createHref(E){return t(o,E)},createURL:v,encodeLocation(E){let h=v(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:y,go(E){return l.go(E)}};return w}var Hu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hu||(Hu={}));function ig(e,t,n){return n===void 0&&(n="/"),lg(e,t,n)}function lg(e,t,n,r){let o=typeof t=="string"?er(t):t,i=$f(o.pathname||"/",n);if(i==null)return null;let l=Df(e);ag(l);let a=null,s=wg(i);for(let u=0;a==null&&u<l.length;++u)a=gg(l[u],s);return a}function Df(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(oe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=an([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Df(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:hg(u,i.index),routesMeta:f})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of zf(i.path))o(i,l,s)}),t}function zf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=zf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function ag(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:mg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sg=/^:[\w-]+$/,ug=3,cg=2,dg=1,fg=10,pg=-2,Vu=e=>e==="*";function hg(e,t){let n=e.split("/"),r=n.length;return n.some(Vu)&&(r+=pg),t&&(r+=cg),n.filter(o=>!Vu(o)).reduce((o,i)=>o+(sg.test(i)?ug:i===""?dg:fg),r)}function mg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function gg(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",p=yg({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),g=s.route;if(!p)return null;Object.assign(o,p.params),l.push({params:o,pathname:an([i,p.pathname]),pathnameBase:Cg(an([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=an([i,p.pathnameBase]))}return l}function yg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,f,p)=>{let{paramName:g,isOptional:y}=f;if(g==="*"){let w=a[p]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[p];return y&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function vg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Cs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function wg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Cs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $f(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const xg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sg=e=>xg.test(e);function kg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?er(e):e,i;if(n)if(Sg(n))i=n;else{if(n.includes("//")){let l=n;n=Ff(n),Cs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?i=Gu(n.substring(1),"/"):i=Gu(n,t)}else i=t;return{pathname:i,search:Tg(r),hash:Ig(o)}}function Gu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Eg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Mf(e,t){let n=Eg(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Uf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=er(e):(o=Vr({},e),oe(!o.pathname||!o.pathname.includes("?"),dl("?","pathname","search",o)),oe(!o.pathname||!o.pathname.includes("#"),dl("#","pathname","hash",o)),oe(!o.search||!o.search.includes("#"),dl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),p-=1;o.pathname=g.join("/")}a=p>=0?t[p]:"/"}let s=kg(o,a),u=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Ff=e=>e.replace(/\/\/+/g,"/"),an=e=>Ff(e.join("/")),Cg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Tg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ig=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Pg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wf=["post","put","patch","delete"];new Set(Wf);const Ng=["get",...Wf];new Set(Ng);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gr.apply(null,arguments)}const Ts=N.createContext(null),Rg=N.createContext(null),eo=N.createContext(null),bi=N.createContext(null),yn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Bf=N.createContext(null);function to(){return N.useContext(bi)!=null}function Is(){return to()||oe(!1),N.useContext(bi).location}function Hf(e){N.useContext(eo).static||N.useLayoutEffect(e)}function Ag(){let{isDataRoute:e}=N.useContext(yn);return e?Bg():bg()}function bg(){to()||oe(!1);let e=N.useContext(Ts),{basename:t,future:n,navigator:r}=N.useContext(eo),{matches:o}=N.useContext(yn),{pathname:i}=Is(),l=JSON.stringify(Mf(o,n.v7_relativeSplatPath)),a=N.useRef(!1);return Hf(()=>{a.current=!0}),N.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let p=Uf(u,JSON.parse(l),i,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:an([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,l,i,e])}function jg(e,t){return Og(e,t)}function Og(e,t,n,r){to()||oe(!1);let{navigator:o}=N.useContext(eo),{matches:i}=N.useContext(yn),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Is(),f;if(t){var p;let E=typeof t=="string"?er(t):t;s==="/"||(p=E.pathname)!=null&&p.startsWith(s)||oe(!1),f=E}else f=u;let g=f.pathname||"/",y=g;if(s!=="/"){let E=s.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=ig(e,{pathname:y}),w=$g(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:an([s,o.encodeLocation?o.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?s:an([s,o.encodeLocation?o.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n,r);return t&&w?N.createElement(bi.Provider,{value:{location:Gr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:At.Pop}},w):w}function Lg(){let e=Wg(),t=Pg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:o},n):null,null)}const _g=N.createElement(Lg,null);class Dg extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(yn.Provider,{value:this.props.routeContext},N.createElement(Bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zg(e){let{routeContext:t,match:n,children:r}=e,o=N.useContext(Ts);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(yn.Provider,{value:t},r)}function $g(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let f=l.findIndex(p=>p.route.id&&a?.[p.route.id]!==void 0);f>=0||oe(!1),l=l.slice(0,Math.min(l.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let p=l[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=f),p.route.id){let{loaderData:g,errors:y}=n,v=p.route.loader&&g[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||v){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((f,p,g)=>{let y,v=!1,w=null,E=null;n&&(y=a&&p.route.id?a[p.route.id]:void 0,w=p.route.errorElement||_g,s&&(u<0&&g===0?(Hg("route-fallback"),v=!0,E=null):u===g&&(v=!0,E=p.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,g+1)),c=()=>{let m;return y?m=w:v?m=E:p.route.Component?m=N.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=f,N.createElement(zg,{match:p,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?N.createElement(Dg,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Vf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vf||{}),Gf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gf||{});function Mg(e){let t=N.useContext(Ts);return t||oe(!1),t}function Ug(e){let t=N.useContext(Rg);return t||oe(!1),t}function Fg(e){let t=N.useContext(yn);return t||oe(!1),t}function Yf(e){let t=Fg(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function Wg(){var e;let t=N.useContext(Bf),n=Ug(),r=Yf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Bg(){let{router:e}=Mg(Vf.UseNavigateStable),t=Yf(Gf.UseNavigateStable),n=N.useRef(!1);return Hf(()=>{n.current=!0}),N.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Gr({fromRouteId:t},i)))},[e,t])}const Yu={};function Hg(e,t,n){Yu[e]||(Yu[e]=!0)}function Vg(e,t){e?.v7_startTransition,e?.v7_relativeSplatPath}function Gg(e){let{to:t,replace:n,state:r,relative:o}=e;to()||oe(!1);let{future:i,static:l}=N.useContext(eo),{matches:a}=N.useContext(yn),{pathname:s}=Is(),u=Ag(),f=Uf(t,Mf(a,i.v7_relativeSplatPath),s,o==="path"),p=JSON.stringify(f);return N.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:o}),[u,p,o,n,r]),null}function Jt(e){oe(!1)}function Yg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=At.Pop,navigator:i,static:l=!1,future:a}=e;to()&&oe(!1);let s=t.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:s,navigator:i,static:l,future:Gr({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=er(r));let{pathname:f="/",search:p="",hash:g="",state:y=null,key:v="default"}=r,w=N.useMemo(()=>{let E=$f(f,s);return E==null?null:{location:{pathname:E,search:p,hash:g,state:y,key:v},navigationType:o}},[s,f,p,g,y,v,o]);return w==null?null:N.createElement(eo.Provider,{value:u},N.createElement(bi.Provider,{children:n,value:w}))}function qg(e){let{children:t,location:n}=e;return jg(xa(t),n)}new Promise(()=>{});function xa(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,o)=>{if(!N.isValidElement(r))return;let i=[...t,o];if(r.type===N.Fragment){n.push.apply(n,xa(r.props.children,i));return}r.type!==Jt&&oe(!1),!r.props.index||!r.props.children||oe(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=xa(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Qg="6";try{window.__reactRouterVersion=Qg}catch{}const Kg="startTransition",qu=Hp[Kg];function Xg(e){let{basename:t,children:n,future:r,window:o}=e,i=N.useRef();i.current==null&&(i.current=ng({window:o,v5Compat:!0}));let l=i.current,[a,s]=N.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=N.useCallback(p=>{u&&qu?qu(()=>s(p)):s(p)},[s,u]);return N.useLayoutEffect(()=>l.listen(f),[l,f]),N.useEffect(()=>Vg(r),[r]),N.createElement(Yg,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var Qu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Qu||(Qu={}));var Ku;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ku||(Ku={}));var qf,Xu=tg;qf=Xu.createRoot,Xu.hydrateRoot;const Zg={name:"Divvylore",tagline:"AI support agents for customer journeys"},Jg={base:"https://app.divvylore.com",register:"https://app.divvylore.com/register",login:"https://app.divvylore.com/login"},ey=[{label:"Product",href:"#highlights"},{label:"How it works",href:"#how-it-works"},{label:"Capabilities",href:"#features"},{label:"Pricing",href:"#pricing"}],ty={eyebrow:"Conversational AI for customer support",title:"Build AI support agents that resolve issues and keep customers moving.",description:"Divvylore is a complete platform for designing, deploying, and improving support agents with guardrails, real system actions, and human handoff.",primaryCta:{label:"Build your agent",url:"https://app.divvylore.com/register"},secondaryCta:{label:"Login",url:"https://app.divvylore.com/login"},supportPills:["Website chat","Queue-ready transport","Human escalation","Tenant isolation"]},ny={title:"The complete platform for AI support agents",subtitle:"Designed for production customer support from day one.",cards:[{title:"Purpose-built for support",description:"Train agents on your support knowledge, workflows, and response standards."},{title:"Designed for simplicity",description:"Create, test, and deploy agents without heavy operational overhead."},{title:"Engineered for reliability",description:"Use queue-first delivery and worker-backed processing for stable production behavior."}]},ry={title:"How Divvylore support agents work",steps:[{title:"Build and configure",description:"Define prompts, tools, and guardrails for your support use cases."},{title:"Connect your systems",description:"Link business context so agents can answer with real-time relevance."},{title:"Resolve customer issues",description:"Let agents handle common requests and execute approved actions."},{title:"Escalate complex cases",description:"Route edge cases to humans with full conversation context."},{title:"Improve with insights",description:"Review outcomes and optimize prompts, tools, and journey flows."}]},oy={title:"Build the support experience your customers expect",items:[{title:"Sync with support context",description:"Agents can use relevant customer and workflow context for better resolution quality."},{title:"Action-driven workflows",description:"Enable controlled actions so the agent can do more than just answer questions."},{title:"Smart escalation",description:"Escalate by policy when confidence is low or requests require human approval."},{title:"Operational analytics",description:"Track outcomes and response quality to continuously improve support performance."},{title:"Works across channels",description:"Support website chat and extensible channels from one agent control layer."},{title:"API-first integration",description:"Integrate deeply with your product using APIs and flexible runtime architecture."}]},iy={title:"See the Divvylore platform in action",subtitle:"Real product screens from analytics, agents, tools, chat, leads, and billing workflows.",items:[{title:"Analytics dashboard",imageUrl:"/artifacts/analytics-dashboard.png",alt:"Analytics dashboard with response and sender metrics"},{title:"Usage and credits",imageUrl:"/artifacts/usage-credits.png",alt:"Usage and credits page with limits and progress bars"},{title:"Agent management",imageUrl:"/artifacts/agent-management.png",alt:"Agent management list and details"},{title:"Tool marketplace",imageUrl:"/artifacts/tool-marketplace.png",alt:"Tool marketplace modal with featured tools"},{title:"Live playground",imageUrl:"/artifacts/live-playground.png",alt:"Agent playground with floating live preview"},{title:"Chat history",imageUrl:"/artifacts/chat-history.png",alt:"Chat history interface with conversation threads"},{title:"Lead generation",imageUrl:"/artifacts/lead-generation.png",alt:"Lead generation contacts table"},{title:"Billing and plans",imageUrl:"/artifacts/billing-plans.png",alt:"Billing and subscription plans"},{title:"Credit center",imageUrl:"/artifacts/credit-center.png",alt:"Credit balance and transaction summary"}]},ly={title:"Enterprise-grade security and privacy",items:[{title:"Your data stays controlled",description:"Tenant-aware design and scoped execution protect customer boundaries."},{title:"Encrypted by default",description:"Use secure transport and protected service boundaries across system flows."},{title:"Guardrails for responses",description:"Response policies reduce off-topic and unsafe outputs in customer-facing chats."}]},ay={title:"Pricing for teams growing support automation",subtitle:"Start simple and expand as support volume and complexity increase.",plans:[{name:"Starter",price:"$29",period:"/month",description:"For teams launching their first AI support workflow.",features:["1 production agent","Portal access","Basic analytics","Email support"],highlighted:!1,ctaLabel:"Choose Starter",planCode:"starter"},{name:"Growth",price:"$99",period:"/month",description:"For teams running multiple production support workflows.",features:["5 production agents","Advanced configuration","Queue-first chat flow","Priority support"],highlighted:!0,ctaLabel:"Choose Growth",planCode:"growth"},{name:"Scale",price:"Custom",period:"",description:"For enterprises with advanced governance requirements.",features:["Custom agent limits","Tenant governance","Dedicated onboarding","Architecture support"],highlighted:!1,ctaLabel:"Contact Sales",planCode:"scale"}]},sy={title:"FAQ",items:[{question:"Can we start with one workflow and scale later?",answer:"Yes. You can start with one production workflow and scale to additional agents and channels."},{question:"Where do registration and login happen?",answer:"All account actions happen in app.divvylore.com."},{question:"Can we keep a human in the loop?",answer:"Yes. Divvylore supports escalation and handoff patterns for complex customer issues."}]},uy={copyright:"© 2026 Divvylore. All rights reserved.",quickLinks:[{label:"Get Started",url:"https://app.divvylore.com/register"},{label:"Login",url:"https://app.divvylore.com/login"},{label:"Pricing",url:"#pricing"}]},Ze={brand:Zg,appUrls:Jg,navigation:ey,hero:ty,highlights:ny,howItWorks:ry,features:oy,artifacts:iy,security:ly,pricing:ay,faq:sy,footer:uy};var H="-ms-",Ir="-moz-",$="-webkit-",Qf="comm",ji="rule",Ps="decl",cy="@import",dy="@namespace",Kf="@keyframes",fy="@layer",Xf=Math.abs,Ns=String.fromCharCode,Sa=Object.assign;function py(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Zf(e){return e.trim()}function ut(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function zo(e,t,n){return e.indexOf(t,n)}function ae(e,t){return e.charCodeAt(t)|0}function hn(e,t,n){return e.slice(t,n)}function Ke(e){return e.length}function Jf(e){return e.length}function mr(e,t){return t.push(e),e}function hy(e,t){return e.map(t).join("")}function Zu(e,t){return e.filter(function(n){return!ut(n,t)})}var Oi=1,qn=1,ep=0,Be=0,ne=0,tr="";function Li(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Oi,column:qn,length:l,return:"",siblings:a}}function Et(e,t){return Sa(Li("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function wn(e){for(;e.root;)e=Et(e.root,{children:[e]});mr(e,e.siblings)}function my(){return ne}function gy(){return ne=Be>0?ae(tr,--Be):0,qn--,ne===10&&(qn=1,Oi--),ne}function tt(){return ne=Be<ep?ae(tr,Be++):0,qn++,ne===10&&(qn=1,Oi++),ne}function bt(){return ae(tr,Be)}function $o(){return Be}function _i(e,t){return hn(tr,e,t)}function Yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yy(e){return Oi=qn=1,ep=Ke(tr=e),Be=0,[]}function vy(e){return tr="",e}function fl(e){return Zf(_i(Be-1,ka(e===91?e+2:e===40?e+1:e)))}function wy(e){for(;(ne=bt())&&ne<33;)tt();return Yr(e)>2||Yr(ne)>3?"":" "}function xy(e,t){for(;--t&&tt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return _i(e,$o()+(t<6&&bt()==32&&tt()==32))}function ka(e){for(;tt();)switch(ne){case e:return Be;case 34:case 39:e!==34&&e!==39&&ka(ne);break;case 40:e===41&&ka(e);break;case 92:tt();break}return Be}function Sy(e,t){for(;tt()&&e+ne!==57;)if(e+ne===84&&bt()===47)break;return"/*"+_i(t,Be-1)+"*"+Ns(e===47?e:tt())}function ky(e){for(;!Yr(bt());)tt();return _i(e,Be)}function Ey(e){return vy(Mo("",null,null,null,[""],e=yy(e),0,[0],e))}function Mo(e,t,n,r,o,i,l,a,s){for(var u=0,f=0,p=l,g=0,y=0,v=0,w=1,E=1,h=1,c=0,m="",S=o,T=i,P=r,k=m;E;)switch(v=c,c=tt()){case 40:if(v!=108&&ae(k,p-1)==58){zo(k+=L(fl(c),"&","&\f"),"&\f",Xf(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:k+=fl(c);break;case 9:case 10:case 13:case 32:k+=wy(v);break;case 92:k+=xy($o()-1,7);continue;case 47:switch(bt()){case 42:case 47:mr(Cy(Sy(tt(),$o()),t,n,s),s),(Yr(v||1)==5||Yr(bt()||1)==5)&&Ke(k)&&hn(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*w:a[u++]=Ke(k)*h;case 125*w:case 59:case 0:switch(c){case 0:case 125:E=0;case 59+f:h==-1&&(k=L(k,/\f/g,"")),y>0&&(Ke(k)-p||w===0&&v===47)&&mr(y>32?ec(k+";",r,n,p-1,s):ec(L(k," ","")+";",r,n,p-2,s),s);break;case 59:k+=";";default:if(mr(P=Ju(k,t,n,u,f,o,a,m,S=[],T=[],p,i),i),c===123)if(f===0)Mo(k,t,P,P,S,i,p,a,T);else{switch(g){case 99:if(ae(k,3)===110)break;case 108:if(ae(k,2)===97)break;default:f=0;case 100:case 109:case 115:}f?Mo(e,P,P,r&&mr(Ju(e,P,P,0,0,o,a,m,o,S=[],p,T),T),o,T,p,a,r?S:T):Mo(k,P,P,P,[""],T,0,a,T)}}u=f=y=0,w=h=1,m=k="",p=l;break;case 58:p=1+Ke(k),y=v;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&gy()==125)continue}switch(k+=Ns(c),c*w){case 38:h=f>0?1:(k+="\f",-1);break;case 44:a[u++]=(Ke(k)-1)*h,h=1;break;case 64:bt()===45&&(k+=fl(tt())),g=bt(),f=p=Ke(m=k+=ky($o())),c++;break;case 45:v===45&&Ke(k)==2&&(w=0)}}return i}function Ju(e,t,n,r,o,i,l,a,s,u,f,p){for(var g=o-1,y=o===0?i:[""],v=Jf(y),w=0,E=0,h=0;w<r;++w)for(var c=0,m=hn(e,g+1,g=Xf(E=l[w])),S=e;c<v;++c)(S=Zf(E>0?y[c]+" "+m:L(m,/&\f/g,y[c])))&&(s[h++]=S);return Li(e,t,n,o===0?ji:a,s,u,f,p)}function Cy(e,t,n,r){return Li(e,t,n,Qf,Ns(my()),hn(e,2,-2),0,r)}function ec(e,t,n,r,o){return Li(e,t,n,Ps,hn(e,0,r),hn(e,r+1,-1),r,o)}function tp(e,t,n){switch(py(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return $+e+e;case 4855:return $+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ir+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Ir+e+H+e+e;case 5936:switch(ae(e,t+11)){case 114:return $+e+H+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+H+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+H+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+H+e+e;case 6165:return $+e+H+"flex-"+e+e;case 5187:return $+e+L(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return $+e+H+"flex-item-"+L(e,/flex-|-self/g,"")+(ut(e,/flex-|baseline/)?"":H+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return $+e+H+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+H+L(e,"shrink","negative")+e;case 5292:return $+e+H+L(e,"basis","preferred-size")+e;case 6060:return $+"box-"+L(e,"-grow","")+$+e+H+L(e,"grow","positive")+e;case 4554:return $+L(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+H+"flex-pack:$3"),/space-between/,"justify")+$+e+e;case 4200:if(!ut(e,/flex-|baseline/))return H+"grid-column-align"+hn(e,t)+e;break;case 2592:case 3360:return H+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ut(r.props,/grid-\w+-end/)})?~zo(e+(n=n[t].value),"span",0)?e:H+L(e,"-start","")+e+H+"grid-row-span:"+(~zo(n,"span",0)?ut(n,/\d+/):+ut(n,/\d+/)-+ut(e,/\d+/))+";":H+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ut(r.props,/grid-\w+-start/)})?e:H+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ke(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Ir+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~zo(e,"stretch",0)?tp(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return H+o+":"+i+u+(l?H+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(ae(e,t+6)===121)return L(e,":",":"+$)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(ae(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+H+"$2box$3")+e;case 100:return L(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function pi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ty(e,t,n,r){switch(e.type){case fy:if(e.children.length)break;case cy:case dy:case Ps:return e.return=e.return||e.value;case Qf:return"";case Kf:return e.return=e.value+"{"+pi(e.children,r)+"}";case ji:if(!Ke(e.value=e.props.join(",")))return""}return Ke(n=pi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Iy(e){var t=Jf(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Py(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ny(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ps:e.return=tp(e.value,e.length,n);return;case Kf:return pi([Et(e,{value:L(e.value,"@","@"+$)})],r);case ji:if(e.length)return hy(n=e.props,function(o){switch(ut(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wn(Et(e,{props:[L(o,/:(read-\w+)/,":"+Ir+"$1")]})),wn(Et(e,{props:[o]})),Sa(e,{props:Zu(n,r)});break;case"::placeholder":wn(Et(e,{props:[L(o,/:(plac\w+)/,":"+$+"input-$1")]})),wn(Et(e,{props:[L(o,/:(plac\w+)/,":"+Ir+"$1")]})),wn(Et(e,{props:[L(o,/:(plac\w+)/,H+"input-$1")]})),wn(Et(e,{props:[o]})),Sa(e,{props:Zu(n,r)});break}return""})}}var Un={},pl,hl;const Qn=typeof process<"u"&&Un!==void 0&&(Un.REACT_APP_SC_ATTR||Un.SC_ATTR)||"data-styled",np="active",rp="data-styled-version",Di="6.4.2",Rs=`/*!sc*/
`,Pr=typeof window<"u"&&typeof document<"u";function tc(e){if(typeof process<"u"&&Un!==void 0){const t=Un[e];if(t!==void 0&&t!=="")return t!=="false"}}const Ry=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(hl=(pl=tc("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&pl!==void 0?pl:tc("SC_DISABLE_SPEEDY"))!==null&&hl!==void 0?hl:typeof process<"u"&&Un!==void 0&&!1),Ay="sc-keyframes-",by={};function zi(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let Uo=new Map,hi=new Map,Fo=1;const Eo=e=>{if(Uo.has(e))return Uo.get(e);for(;hi.has(Fo);)Fo++;const t=Fo++;return Uo.set(e,t),hi.set(t,e),t},jy=e=>hi.get(e),Oy=(e,t)=>{Fo=t+1,Uo.set(e,t),hi.set(t,e)},As=Object.freeze([]),Kn=Object.freeze({});function op(e,t,n=Kn){return e.theme!==n.theme&&e.theme||t||n.theme}const Ly=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_y=/(^-|-$)/g;function ip(e){return e.replace(Ly,"-").replace(_y,"")}const Dy=/(a)(d)/gi,nc=e=>String.fromCharCode(e+(e>25?39:97));function lp(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=nc(t%52)+n;return(nc(t%52)+n).replace(Dy,"$1-$2")}const Ea=5381,sn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ap=e=>sn(Ea,e);function sp(e){return lp(ap(e)>>>0)}function zy(e){return e.displayName||e.name||"Component"}function Ca(e){return typeof e=="string"&&!0}function $y(e){return Ca(e)?`styled.${e}`:`Styled(${zy(e)})`}const up=Symbol.for("react.memo"),My=Symbol.for("react.forward_ref"),Uy={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Fy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wy={[My]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[up]:cp};function rc(e){return("type"in(t=e)&&t.type.$$typeof)===up?cp:"$$typeof"in e?Wy[e.$$typeof]:Uy;var t}const By=Object.defineProperty,Hy=Object.getOwnPropertyNames,Vy=Object.getOwnPropertySymbols,Gy=Object.getOwnPropertyDescriptor,Yy=Object.getPrototypeOf,qy=Object.prototype;function dp(e,t,n){if(typeof t!="string"){const r=Yy(t);r&&r!==qy&&dp(e,r,n);const o=Hy(t).concat(Vy(t)),i=rc(e),l=rc(t);for(let a=0;a<o.length;++a){const s=o[a];if(!(s in Fy||n&&n[s]||l&&s in l||i&&s in i)){const u=Gy(t,s);try{By(e,s,u)}catch{}}}}return e}function no(e){return typeof e=="function"}const Qy=Symbol.for("react.forward_ref");function bs(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Qy&&"styledComponentId"in e}function gr(e,t){return e&&t?e+" "+t:e||t||""}function Ta(e,t){return e.join("")}function qr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ia(e,t,n=!1){if(!n&&!qr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Ia(e[r],t[r]);else if(qr(t))for(const r in t)e[r]=Ia(e[r],t[r]);return e}function fp(e,t){Object.defineProperty(e,"toString",{value:t})}const Ky=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,i=o.length;let l=i;for(;e>=l;)if(l<<=1,l<0)throw zi(16,`${e}`);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(let a=i;a<l;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+Rs;return t}},Xy=`style[${Qn}][${rp}="${Di}"]`,Zy=new RegExp(`^${Qn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),oc=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Pa=e=>{if(!e)return document;if(oc(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(oc(t))return t}return document},Jy=(e,t,n)=>{const r=n.split(",");let o;for(let i=0,l=r.length;i<l;i++)(o=r[i])&&e.registerName(t,o)},ev=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Rs),o=[];for(let i=0,l=r.length;i<l;i++){const a=r[i].trim();if(!a)continue;const s=a.match(Zy);if(s){const u=0|parseInt(s[1],10),f=s[2];u!==0&&(Oy(f,u),Jy(e,f,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}},ml=e=>{const t=Pa(e.options.target).querySelectorAll(Xy);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(Qn)!==np&&(ev(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let cr=!1;function tv(){if(cr!==!1)return cr;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return cr=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return cr=t.getAttribute("content")||void 0}return cr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const pp=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),i=(s=>{const u=Array.from(s.querySelectorAll(`style[${Qn}]`));return u[u.length-1]})(r),l=i!==void 0?i.nextSibling:null;o.setAttribute(Qn,np),o.setAttribute(rp,Di);const a=t||tv();return a&&o.setAttribute("nonce",a),r.insertBefore(o,l),o},nv=class{constructor(e,t){this.element=pp(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,l=o.length;i<l;i++){const a=o[i];if(a.ownerNode===n)return a}throw zi(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},rv=class{constructor(e,t){this.element=pp(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let ic=Pr;const ov={isServer:!Pr,useCSSOMInjection:!Ry};class ro{static registerId(t){return Eo(t)}constructor(t=Kn,n={},r){this.options=Object.assign(Object.assign({},ov),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Pr&&ic&&(ic=!1,ml(this)),fp(this,()=>(o=>{const i=o.getTag(),{length:l}=i;let a="";for(let s=0;s<l;s++){const u=jy(s);if(u===void 0)continue;const f=o.names.get(u);if(f===void 0||!f.size)continue;const p=i.getGroup(s);if(p.length===0)continue;const g=Qn+".g"+s+'[id="'+u+'"]';let y="";for(const v of f)v.length>0&&(y+=v+",");a+=p+g+'{content:"'+y+'"}'+Rs}return a})(this))}rehydrate(){!this.server&&Pr&&ml(this)}reconstructWithOptions(t,n=!0){const r=new ro(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Pr&&t.target!==this.options.target&&Pa(this.options.target)!==Pa(t.target)&&ml(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new nv(r,o):new rv(r,o))(this.options),new Ky(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){Eo(t),t.startsWith(Ay)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Eo(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Eo(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const hp=new WeakSet,iv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function lv(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in iv||e.startsWith("--")?String(t).trim():t+"px"}const en=47;function lc(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const av=Symbol.for("sc-keyframes");function sv(e){return typeof e=="object"&&e!==null&&av in e}function mp(e){return no(e)&&!(e.prototype&&e.prototype.isReactComponent)}const gp=e=>e==null||e===!1||e==="",uv=Symbol.for("react.client.reference");function ac(e){return e.$$typeof===uv}function yp(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!gp(r)&&(Array.isArray(r)&&hp.has(r)||no(r)?t.push(lc(n)+":",r,";"):qr(r)?(t.push(n+" {"),yp(r,t),t.push("}")):t.push(lc(n)+": "+lv(n,r)+";"))}}function Ut(e,t,n,r,o=[]){if(gp(e))return o;const i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(ac(e))return o;if(mp(e)&&t){const l=e(t);return Ut(l,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let l=0;l<e.length;l++)Ut(e[l],t,n,r,o);return o}return bs(e)?(o.push(`.${e.styledComponentId}`),o):sv(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):ac(e)?o:qr(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(yp(e,o),o):(o.push(e.toString()),o)}const cv=ap(Di);class dv{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=sn(cv,n),this.baseStyle=r,ro.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let i="";for(let l=0;l<this.rules.length;l++){const a=this.rules[l];if(typeof a=="string")i+=a;else if(a)if(mp(a)){const s=a(t);typeof s=="string"?i+=s:s!=null&&s!==!1&&(i+=Ta(Ut(s,t,n,r)))}else i+=Ta(Ut(a,t,n,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const l=r.hash?r.hash+i:i;let a=this.dynamicNameCache.get(l);if(!a){if(a=lp(sn(sn(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){const s=this.dynamicNameCache.keys().next().value;s!==void 0&&this.dynamicNameCache.delete(s)}this.dynamicNameCache.set(l,a)}if(!n.hasNameForId(this.componentId,a)){const s=r(i,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=gr(o,a)}}return o}}const fv=/&/g;function vp(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function gl(e){const t=e.length;let n="",r=0,o=0,i=0,l=!1,a=!1;for(let s=0;s<t;s++){const u=e.charCodeAt(s);if(i!==0||l||u!==en||e.charCodeAt(s+1)!==42)if(l)u===42&&e.charCodeAt(s+1)===en&&(l=!1,s++);else if(u!==34&&u!==39||vp(e,s)){if(i===0)if(u===123)o++;else if(u===125){if(o--,o<0){a=!0;let f=s+1;for(;f<t;){const p=e.charCodeAt(f);if(p===59||p===10)break;f++}f<t&&e.charCodeAt(f)===59&&f++,o=0,s=f-1,r=f;continue}o===0&&(n+=e.substring(r,s+1),r=s+1)}else u===59&&o===0&&(n+=e.substring(r,s+1),r=s+1)}else i===0?i=u:i===u&&(i=0);else l=!0,s++}return a||o!==0||i!==0?(r<t&&o===0&&i===0&&(n+=e.substring(r)),n):e}function wp(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const i=e[o];if(i.type==="rule"){i.value=(n+i.value).replaceAll(",",r);const l=i.props,a=[];for(let s=0;s<l.length;s++)a[s]=n+l[s];i.props=a}Array.isArray(i.children)&&i.type!=="@keyframes"&&wp(i.children,t)}return e}function pv({options:e=Kn,plugins:t=As}=Kn){let n,r,o;const i=(g,y,v)=>v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?`.${n}`:g,l=t.slice();l.push(g=>{g.type===ji&&g.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(fv,r).replace(o,i))}),e.prefix&&l.push(Ny),l.push(Ty);let a=[];const s=Iy(l.concat(Py(g=>a.push(g)))),u=(g,y="",v="",w="&")=>{n=w,r=y,o=void 0;const E=function(c){const m=c.indexOf("//")!==-1,S=c.indexOf("}")!==-1;if(!m&&!S)return c;if(!m)return gl(c);const T=c.length;let P="",k=0,I=0,M=0,O=0,G=0,He=!1;for(;I<T;){const X=c.charCodeAt(I);if(X!==34&&X!==39||vp(c,I))if(M===0)if(X===en&&I+1<T&&c.charCodeAt(I+1)===42){for(I+=2;I+1<T&&(c.charCodeAt(I)!==42||c.charCodeAt(I+1)!==en);)I++;I+=2}else if(X!==40)if(X!==41)if(O>0)I++;else if(X===42&&I+1<T&&c.charCodeAt(I+1)===en)P+=c.substring(k,I),I+=2,k=I,He=!0;else if(X===en&&I+1<T&&c.charCodeAt(I+1)===en){for(P+=c.substring(k,I);I<T&&c.charCodeAt(I)!==10;)I++;k=I,He=!0}else X===123?G++:X===125&&G--,I++;else O>0&&O--,I++;else O++,I++;else I++;else M===0?M=X:M===X&&(M=0),I++}return He?(k<T&&(P+=c.substring(k)),G===0?P:gl(P)):G===0?c:gl(c)}(g);let h=Ey(v||y?v+" "+y+" { "+E+" }":E);return e.namespace&&(h=wp(h,e.namespace)),a=[],pi(h,s),a},f=e;let p=Ea;for(let g=0;g<t.length;g++)t[g].name||zi(15),p=sn(p,t[g].name);return f?.namespace&&(p=sn(p,f.namespace)),f?.prefix&&(p=sn(p,"p")),u.hash=p!==Ea?p.toString():"",u}const hv=new ro,mv=pv(),xp=Ae.createContext({shouldForwardProp:void 0,styleSheet:hv,stylis:mv,stylisPlugins:void 0});xp.Consumer;function Sp(){return Ae.useContext(xp)}const js=Ae.createContext(void 0);js.Consumer;const sc=Object.prototype.hasOwnProperty,yl={};function gv(e,t){const n=typeof e!="string"?"sc":ip(e);yl[n]=(yl[n]||0)+1;const r=n+"-"+sp(Di+n+yl[n]);return t?t+"-"+r:r}function yv(e,t,n){const r=bs(e),o=e,i=!Ca(e),{attrs:l=As,componentId:a=gv(t.displayName,t.parentComponentId),displayName:s=$y(e)}=t,u=t.displayName&&t.componentId?ip(t.displayName)+"-"+t.componentId:t.componentId||a,f=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l;let{shouldForwardProp:p}=t;if(r&&o.shouldForwardProp){const w=o.shouldForwardProp;if(t.shouldForwardProp){const E=t.shouldForwardProp;p=(h,c)=>w(h,c)&&E(h,c)}else p=w}const g=new dv(n,u,r?o.componentStyle:void 0);function y(w,E){return function(h,c,m){const{attrs:S,componentStyle:T,defaultProps:P,foldedComponentIds:k,styledComponentId:I,target:M}=h,O=Ae.useContext(js),G=Sp(),He=h.shouldForwardProp||G.shouldForwardProp,X=op(c,O,P)||Kn;let Ve,Gt;{const b=Ae.useRef(null),j=b.current;if(j!==null&&j[1]===X&&j[2]===G.styleSheet&&j[3]===G.stylis&&j[7]===T&&function(F,z,ie){const Z=F,te=z;let Ne=0;for(const De in te)if(sc.call(te,De)&&(Ne++,Z[De]!==te[De]))return!1;return Ne===ie}(j[0],c,j[4]))Ve=j[5],Gt=j[6];else{Ve=function(z,ie,Z){const te=Object.assign(Object.assign({},ie),{className:void 0,theme:Z}),Ne=z.length>1;for(let De=0;De<z.length;De++){const $i=z[De],oo=no($i)?$i(Ne?Object.assign({},te):te):$i;for(const St in oo)St==="className"?te.className=gr(te.className,oo[St]):St==="style"?te.style=Object.assign(Object.assign({},te.style),oo[St]):St in ie&&ie[St]===void 0||(te[St]=oo[St])}return"className"in ie&&typeof ie.className=="string"&&(te.className=gr(te.className,ie.className)),te}(S,c,X),Gt=function(z,ie,Z,te){return z.generateAndInjectStyles(ie,Z,te)}(T,Ve,G.styleSheet,G.stylis);let F=0;for(const z in c)sc.call(c,z)&&F++;b.current=[c,X,G.styleSheet,G.stylis,F,Ve,Gt,T]}}const xt=Ve.as||M,Yt=function(b,j,F,z){const ie={};for(const Z in b)b[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&b.theme===F||(Z==="forwardedAs"?ie.as=b.forwardedAs:z&&!z(Z,j)||(ie[Z]=b[Z]));return ie}(Ve,xt,X,He);let R=gr(k,I);return Gt&&(R+=" "+Gt),Ve.className&&(R+=" "+Ve.className),Yt[Ca(xt)&&xt.includes("-")?"class":"className"]=R,m&&(Yt.ref=m),N.createElement(xt,Yt)}(v,w,E)}y.displayName=s;let v=Ae.forwardRef(y);return v.attrs=f,v.componentStyle=g,v.displayName=s,v.shouldForwardProp=p,v.foldedComponentIds=r?gr(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=u,v.target=r?o.target:e,Object.defineProperty(v,"defaultProps",{get(){return this._foldedDefaultProps},set(w){this._foldedDefaultProps=r?function(E,...h){for(const c of h)Ia(E,c,!0);return E}({},o.defaultProps,w):w}}),fp(v,()=>`.${v.styledComponentId}`),i&&dp(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}var vv=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function uc(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const cc=e=>(hp.add(e),e);function kp(e,...t){if(no(e)||qr(e))return cc(Ut(uc(As,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Ut(n):cc(Ut(uc(n,t)))}function Na(e,t,n=Kn){if(!t)throw zi(1,t);const r=(o,...i)=>e(t,n,kp(o,...i));return r.attrs=o=>Na(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>Na(e,t,Object.assign(Object.assign({},n),o)),r}const Ep=e=>Na(yv,e),x=Ep;vv.forEach(e=>{x[e]=Ep(e)});class wv{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const i=r[o];if(no(i)&&!bs(i))return!1}return!0}(t),ro.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const a=this.computeRules(t,n,r,o);r.insertRules(i,a.name,a.rules)}return}const l=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&l){const a=l.rules,s=this.instanceRules.get(t).rules;if(a.length===s.length){let u=!0;for(let f=0;f<a.length;f++)if(a[f]!==s[f]){u=!1;break}if(u)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const i=Ta(Ut(this.rules,n,r,o)),l={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,l),l}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function xv(e,...t){const n=kp(e,...t),r=`sc-global-${sp(JSON.stringify(n))}`,o=new wv(n,r),i=a=>{const s=Sp(),u=Ae.useContext(js);let f;{const p=Ae.useRef(null);p.current===null&&(p.current=s.styleSheet.allocateGSInstance(r)),f=p.current}s.styleSheet.server&&l(f,a,s.styleSheet,u,s.stylis);{const p=o.isStatic?[f,s.styleSheet,o]:[f,a,s.styleSheet,u,s.stylis,o],g=Ae.useRef(o);Ae.useLayoutEffect(()=>{s.styleSheet.server||(g.current!==o&&(s.styleSheet.clearRules(r),g.current=o),l(f,a,s.styleSheet,u,s.stylis))},p),Ae.useLayoutEffect(()=>()=>{s.styleSheet.server||o.removeStyles(f,s.styleSheet)},[f,s.styleSheet,o])}return s.styleSheet.server&&o.instanceRules.delete(f),null};function l(a,s,u,f,p){if(o.isStatic)o.renderStyles(a,by,u,p);else{const g=Object.assign(Object.assign({},s),{theme:op(s,f,i.defaultProps)});o.renderStyles(a,g,u,p)}}return Ae.memo(i)}const Sv=x.footer`
  background: var(--bg-ink);
  color: #c9d1e3;
  padding: 4rem 1.4rem 2.4rem;
`,kv=x.div`
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 1.1fr) 2fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Ev=x.div`
  display: grid;
  gap: 1rem;
  align-content: start;
`,Cv=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #ffffff;
`,Tv=x.img`
  width: 38px;
  height: 38px;
`,Iv=x.span`
  font-family: 'DM Serif Display', 'Space Grotesk', serif;
  font-weight: 400;
  font-size: 1.45rem;
  color: #ffffff;
  letter-spacing: 0.08em;
  line-height: 1;
  position: relative;
  top: 1px;
`,Pv=x.p`
  margin: 0;
  color: #95a2bf;
  line-height: 1.65;
  max-width: 320px;
`,Nv=x.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 1.6rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,vl=x.div`
  display: grid;
  gap: 0.55rem;
  align-content: start;
`,wl=x.h4`
  margin: 0 0 0.4rem;
  color: #ffffff;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
`,de=x.a`
  color: #b9c4dd;
  font-size: 0.95rem;
  line-height: 1.5;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`,Rv=x.div`
  max-width: 1240px;
  margin: 3rem auto 0;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  color: #8190ae;
  font-size: 0.85rem;
`,Av=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,bv=()=>{const e=typeof window<"u"?window.location.hostname:"divvylore.com",t=`${Ze.appUrls.register}?source=${encodeURIComponent(e)}&placement=footer`,n=`${Ze.appUrls.login}?source=${encodeURIComponent(e)}&placement=footer`,r="/privacy-policy",o="/terms-and-conditions",i="/refund-policy";return d.jsxs(Sv,{children:[d.jsxs(kv,{children:[d.jsxs(Ev,{children:[d.jsxs(Cv,{href:"/","aria-label":"Divvylore home",children:[d.jsx(Tv,{src:"/img/svg/logo.svg",alt:""}),d.jsx(Iv,{children:"DIVVYLORE"})]}),d.jsx(Pv,{children:Ze.brand.tagline})]}),d.jsxs(Nv,{children:[d.jsxs(vl,{children:[d.jsx(wl,{children:"Product"}),d.jsx(de,{href:"#highlights",children:"Platform"}),d.jsx(de,{href:"#how-it-works",children:"How it works"}),d.jsx(de,{href:"#features",children:"Capabilities"}),d.jsx(de,{href:"#security",children:"Security"}),d.jsx(de,{href:"#pricing",children:"Pricing"})]}),d.jsxs(vl,{children:[d.jsx(wl,{children:"Resources"}),d.jsx(de,{href:"#faq",children:"FAQ"}),d.jsx(de,{href:Ze.appUrls.base,children:"Customer portal"}),d.jsx(de,{href:t,children:"Create account"}),d.jsx(de,{href:n,children:"Sign in"}),d.jsx(de,{href:"mailto:hello@divvylore.com",children:"Contact"})]}),d.jsxs(vl,{children:[d.jsx(wl,{children:"Company"}),d.jsx(de,{href:Ze.appUrls.base,children:"About"}),d.jsx(de,{href:r,children:"Privacy policy"}),d.jsx(de,{href:o,children:"Terms and conditions"}),d.jsx(de,{href:i,children:"Refund policy"})]})]})]}),d.jsxs(Rv,{children:[d.jsx("span",{children:Ze.footer.copyright}),d.jsxs(Av,{children:[d.jsx(de,{href:r,children:"Privacy"}),d.jsx(de,{href:o,children:"Terms"}),d.jsx(de,{href:i,children:"Refunds"})]})]})]})},jv=x.header`
  position: sticky;
  top: 0;
  z-index: 120;
  background: rgba(245, 243, 238, 0.82);
  backdrop-filter: saturate(140%) blur(16px);
  border-bottom: 1px solid var(--line);
`,Ov=x.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0.7rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 700px) {
    padding: 0.6rem 1rem;
  }
`,Lv=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text-primary);
  flex-shrink: 0;
`,_v=x.img`
  width: 38px;
  height: 38px;
  display: block;
`,Dv=x.span`
  font-family: 'DM Serif Display', 'Space Grotesk', serif;
  font-weight: 400;
  font-size: 1.45rem;
  letter-spacing: 0.08em;
  color: #2a2a2a;
  line-height: 1;
  position: relative;
  top: 1px;
`,zv=x.nav`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 0.6rem;

  @media (max-width: 960px) {
    display: none;
  }
`,Wo=x.a`
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: color 0.15s ease, background-color 0.15s ease;

  &:hover {
    color: var(--text-primary);
    background-color: rgba(14, 22, 45, 0.05);
  }
`,$v=x.div`
  flex: 1;
`,Mv=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 700px) {
    gap: 0.4rem;
  }
`,Uv=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  background: transparent;

  &:hover {
    background: rgba(14, 22, 45, 0.06);
  }

  @media (max-width: 480px) {
    display: none;
  }
`,Fv=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--bg-ink);
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: #14192a;
  }
`,Wv=x.button`
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
`,Bv=x.div`
  display: ${e=>e.open?"grid":"none"};
  gap: 0.3rem;
  padding: 0.5rem 1rem 1rem;
  border-bottom: 1px solid var(--line);
  background: var(--bg-page);

  ${Wo} {
    padding: 0.7rem 0.8rem;
    border-radius: 10px;
    font-size: 1rem;
  }

  @media (min-width: 961px) {
    display: none;
  }
`,Hv=()=>{const[e,t]=N.useState(!1),n=typeof window<"u"?window.location.hostname:"divvylore.com",r=`${Ze.appUrls.register}?source=${encodeURIComponent(n)}&placement=header`,o=`${Ze.appUrls.login}?source=${encodeURIComponent(n)}&placement=header`;return d.jsxs(jv,{children:[d.jsxs(Ov,{children:[d.jsxs(Lv,{href:"/","aria-label":"Divvylore home",children:[d.jsx(_v,{src:"/img/svg/logo.svg",alt:""}),d.jsx(Dv,{children:"DIVVYLORE"})]}),d.jsx(zv,{children:Ze.navigation.map(i=>d.jsx(Wo,{href:i.href,children:i.label},i.label))}),d.jsx($v,{}),d.jsxs(Mv,{children:[d.jsx(Uv,{href:o,children:"Sign in"}),d.jsx(Fv,{href:r,children:"Get started"}),d.jsx(Wv,{type:"button","aria-label":"Toggle menu","aria-expanded":e,onClick:()=>t(i=>!i),children:d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:d.jsx("path",{d:"M2 4.5h14M2 9h14M2 13.5h14",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})})})]})]}),d.jsxs(Bv,{open:e,children:[Ze.navigation.map(i=>d.jsx(Wo,{href:i.href,onClick:()=>t(!1),children:i.label},`m-${i.label}`)),d.jsx(Wo,{href:o,onClick:()=>t(!1),children:"Sign in"})]})]})};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=e=>{const t=Gv(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},qv=N.createContext({}),Qv=()=>N.useContext(qv),Kv=N.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:o="",children:i,iconNode:l,...a},s)=>{const{size:u=24,strokeWidth:f=2,absoluteStrokeWidth:p=!1,color:g="currentColor",className:y=""}=Qv()??{},v=r??p?Number(n??f)*24/Number(t??u):n??f;return N.createElement("svg",{ref:s,...xl,width:t??u??xl.width,height:t??u??xl.height,stroke:e??g,strokeWidth:v,className:Cp("lucide",y,o),...!i&&!Yv(a)&&{"aria-hidden":"true"},...a},[...l.map(([w,E])=>N.createElement(w,E)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(e,t)=>{const n=N.forwardRef(({className:r,...o},i)=>N.createElement(Kv,{ref:i,iconNode:t,className:Cp(`lucide-${Vv(dc(e))}`,`lucide-${e}`,r),...o}));return n.displayName=dc(e),n};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],fc=wt("arrow-right",Xv);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Jv=wt("bot",Zv);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],t0=wt("circle-check",e0);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],r0=wt("plus",n0);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],pc=wt("shield-check",o0);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],hc=wt("sparkles",i0);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],mc=wt("star",l0);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],s0=wt("workflow",a0);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],c0=wt("zap",u0),d0=x.main`
  color: var(--text-primary);

  /* Per-section palette  AI-website inspired, brand-aligned */

  #highlights {
    background:
      radial-gradient(circle at 8% 14%, rgba(91, 60, 228, 0.12), transparent 42%),
      radial-gradient(circle at 92% 90%, rgba(31, 61, 240, 0.1), transparent 38%),
      linear-gradient(180deg, #f1eefe 0%, #f6f4ff 100%);
  }

  #how-it-works {
    background:
      radial-gradient(circle at 90% 10%, rgba(127, 232, 201, 0.22), transparent 45%),
      radial-gradient(circle at 8% 95%, rgba(31, 61, 240, 0.08), transparent 40%),
      linear-gradient(180deg, #eaf6ee 0%, #f0f8f1 100%);
  }

  #features {
    background:
      radial-gradient(circle at 12% 16%, rgba(255, 170, 105, 0.22), transparent 42%),
      radial-gradient(circle at 92% 88%, rgba(255, 122, 89, 0.14), transparent 38%),
      linear-gradient(180deg, #fdefe1 0%, #fff5ec 100%);
  }

  #security {
    background:
      radial-gradient(circle at 10% 12%, rgba(31, 61, 240, 0.18), transparent 42%),
      radial-gradient(circle at 88% 90%, rgba(91, 60, 228, 0.14), transparent 40%),
      linear-gradient(180deg, #e8f1ff 0%, #eef4ff 100%);
  }

  #stats {
    background:
      radial-gradient(circle at 10% 14%, rgba(31, 61, 240, 0.14), transparent 40%),
      radial-gradient(circle at 92% 92%, rgba(91, 60, 228, 0.14), transparent 40%),
      linear-gradient(180deg, #f3f6ff 0%, #ecf1fb 100%);
  }

  #story {
    background:
      radial-gradient(circle at 16% 18%, rgba(255, 170, 105, 0.18), transparent 38%),
      radial-gradient(circle at 86% 86%, rgba(91, 60, 228, 0.22), transparent 40%),
      linear-gradient(180deg, #1a0f3d 0%, #0a0a24 100%);
  }

  #pricing {
    background:
      radial-gradient(circle at 88% 16%, rgba(255, 170, 105, 0.18), transparent 40%),
      radial-gradient(circle at 10% 92%, rgba(31, 61, 240, 0.1), transparent 38%),
      linear-gradient(180deg, #f7f1e1 0%, #faf6ea 100%);
  }

  #faq {
    background:
      radial-gradient(circle at 14% 14%, rgba(255, 140, 170, 0.18), transparent 42%),
      radial-gradient(circle at 90% 90%, rgba(91, 60, 228, 0.12), transparent 40%),
      linear-gradient(180deg, #fcefef 0%, #fff4f4 100%);
  }
`,Ye=x.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.4rem;

  @media (max-width: 700px) {
    padding: 0 1rem;
  }
`,f0=x.section`
  position: relative;
  padding: clamp(3rem, 9vw, 6rem) 0 clamp(3rem, 8vw, 5rem);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 16% 20%, rgba(31, 61, 240, 0.16), transparent 38%),
      radial-gradient(circle at 84% 8%, rgba(255, 170, 105, 0.18), transparent 42%),
      radial-gradient(circle at 50% 110%, rgba(31, 61, 240, 0.12), transparent 48%);
    pointer-events: none;
  }

  > * {
    position: relative;
  }
`,p0=x.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.34rem 0.7rem 0.34rem 0.42rem;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, 0.7);
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1.4rem;
  animation: rise 0.5s ease both;
`,h0=x.span`
  display: inline-flex;
  align-items: center;
  padding: 0.16rem 0.5rem;
  border-radius: 999px;
  background: var(--bg-ink);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,m0=x.h1`
  margin: 0;
  font-size: clamp(2.4rem, 6.8vw, 4.6rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
  max-width: 980px;
  font-weight: 600;
  animation: rise 0.55s ease both;
`,g0=x.span`
  background: linear-gradient(120deg, #1f3df0 0%, #5b3ce4 55%, #ec6f3a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,y0=x.p`
  margin: 1.3rem 0 0;
  max-width: 700px;
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  line-height: 1.6;
  color: var(--text-secondary);
  animation: rise 0.6s ease 0.04s both;
`,v0=x.div`
  margin-top: 1.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  animation: rise 0.6s ease 0.08s both;
`,Tp=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 46px;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--bg-ink);
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: #14192a;
  }
`,w0=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 46px;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--line-strong);
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.9);
  }
`,x0=x.div`
  margin-top: clamp(2.5rem, 6vw, 4rem);
  border-radius: 28px;
  border: 1px solid var(--line-strong);
  background: linear-gradient(160deg, #ffffff 0%, #f2eee2 100%);
  padding: clamp(0.85rem, 2.4vw, 1.4rem);
  box-shadow:
    0 30px 60px -28px rgba(20, 30, 70, 0.22),
    0 8px 18px -10px rgba(20, 30, 70, 0.12);
  animation: rise 0.7s ease 0.12s both;
`,S0=x.div`
  border-radius: 20px;
  background: #0a0d14;
  color: #d6dff5;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.35fr 1fr;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,k0=x.div`
  padding: 1.1rem 1.2rem 1.3rem;
  display: grid;
  gap: 0.7rem;
  align-content: start;
  border-right: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 820px) {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`,E0=x.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding-bottom: 0.7rem;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`,C0=x.span`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1f3df0, #5b3ce4);
  color: #ffffff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.86rem;
`,T0=x.div`
  display: grid;
  gap: 0.1rem;
`,I0=x.strong`
  font-size: 0.88rem;
  color: #ffffff;
  font-weight: 600;
`,P0=x.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.74rem;
  color: #7fe8c9;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 700;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: #7fe8c9;
    box-shadow: 0 0 0 4px rgba(127, 232, 201, 0.18);
  }
`,Sl=x.div`
  align-self: ${e=>e.side==="out"?"flex-end":"flex-start"};
  max-width: 90%;
  padding: 0.7rem 0.9rem;
  border-radius: 14px;
  font-size: 0.92rem;
  line-height: 1.5;
  background: ${e=>e.side==="out"?"linear-gradient(135deg, #1f3df0, #1a31bc)":"rgba(255, 255, 255, 0.06)"};
  color: ${e=>e.side==="out"?"#ffffff":"#cfd9f1"};
  border: 1px solid ${e=>e.side==="out"?"transparent":"rgba(255,255,255,0.07)"};
`,N0=x.div`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.55rem 0.75rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.06);

  span {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #9aa8c8;
    opacity: 0.4;
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
`;x.span`
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #6f7da0;
`;const R0=x.div`
  padding: 1.1rem 1.2rem 1.3rem;
  display: grid;
  gap: 0.85rem;
  align-content: start;
`,A0=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-bottom: 0.7rem;
  margin-bottom: 0.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`,b0=x.strong`
  font-size: 0.88rem;
  color: #ffffff;
  font-weight: 600;
`,j0=x.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #7fe8c9;
  font-weight: 700;
`,O0=x.div`
  display: grid;
  gap: 0.18rem;
  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`,L0=x.strong`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.5rem, 3.6vw, 1.95rem);
  color: #ffffff;
  letter-spacing: -0.01em;
  line-height: 1.1;
`,_0=x.span`
  font-size: 0.78rem;
  color: #8f9bbb;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`,D0=x.section`
  padding: 1.5rem 0 3rem;
  border-top: 1px solid var(--line);
  margin-top: 2rem;
`,z0=x.p`
  margin: 0 0 1rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
`,$0=x.div`
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`,M0=x.div`
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: marquee 28s linear infinite;
`,U0=x.span`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 1.2rem;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.7);
  color: var(--text-primary);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
`,Co=x.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`,qt=x.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.28rem 0.66rem;
  border-radius: 999px;
  background: rgba(31, 61, 240, 0.08);
  color: var(--brand-strong);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,Qt=x.h2`
  margin: 0.85rem 0 0;
  font-size: clamp(1.75rem, 4.4vw, 2.85rem);
  line-height: 1.1;
  letter-spacing: -0.018em;
  max-width: 820px;
  font-weight: 600;
`,Kt=x.p`
  margin: 0.85rem 0 0;
  max-width: 720px;
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.65;
  color: var(--text-secondary);
`,gc=x.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,F0=x.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,kl=x.article`
  padding: 1.4rem;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.85);
  display: grid;
  gap: 0.6rem;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--line-strong);
    box-shadow: 0 18px 30px -22px rgba(20, 30, 70, 0.2);
  }
`,El=x.span`
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: rgba(31, 61, 240, 0.1);
  color: var(--brand-strong);
`,Cl=x.h3`
  margin: 0.2rem 0 0;
  font-size: 1.12rem;
  font-weight: 600;
`,Tl=x.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.98rem;
  line-height: 1.6;
`,W0=x.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`;x.div`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;

  ${e=>e.reverse&&`
    & > *:first-child {
      order: 2;
    }
  `}

  @media (max-width: 920px) {
    grid-template-columns: 1fr;

    & > *:first-child,
    & > *:last-child {
      order: initial;
    }
  }
`;x.div`
  border-radius: 24px;
  border: 1px solid var(--line-strong);
  background: linear-gradient(160deg, #ffffff, #efeadc);
  padding: clamp(1rem, 3vw, 1.8rem);
  min-height: 280px;
  display: grid;
  gap: 0.8rem;
  align-content: center;
  box-shadow: 0 22px 40px -28px rgba(20, 30, 70, 0.2);
`;x.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  border-radius: 14px;
  background: ${e=>e.tone==="primary"?"linear-gradient(135deg, #1f3df0, #1a31bc)":e.tone==="soft"?"rgba(31, 61, 240, 0.08)":"rgba(255, 255, 255, 0.92)"};
  border: 1px solid ${e=>e.tone==="primary"?"transparent":"var(--line)"};
  color: ${e=>e.tone==="primary"?"#ffffff":"var(--text-primary)"};
  font-weight: 500;
  font-size: 0.95rem;
`;const B0=x.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`,H0=x.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`,V0=x.div`
  padding: 1.5rem;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 14px 28px -22px rgba(20, 30, 70, 0.15);
`,G0=x.strong`
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4.6vw, 2.6rem);
  letter-spacing: -0.02em;
  color: var(--text-primary);
`,Y0=x.span`
  display: block;
  margin-top: 0.4rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`,q0=x.section`
  padding: clamp(3rem, 7vw, 6rem) 0;
`,Q0=x.blockquote`
  margin: 0;
  padding: clamp(2rem, 5vw, 3.5rem);
  border-radius: 24px;
  background: var(--bg-ink);
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 86% 12%, rgba(255, 170, 105, 0.22), transparent 35%),
      radial-gradient(circle at 8% 86%, rgba(31, 61, 240, 0.32), transparent 38%);
    pointer-events: none;
  }

  > * {
    position: relative;
  }
`,K0=x.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.35rem, 3.4vw, 2rem);
  line-height: 1.32;
  color: #ffffff;
  letter-spacing: -0.012em;
`,X0=x.div`
  margin-top: 1.4rem;
  font-size: 0.92rem;
  color: #b9c4dd;
`,Z0=x.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`,J0=x.div`
  margin-top: 1.6rem;
  display: inline-flex;
  padding: 0.25rem;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, 0.85);
  gap: 0.2rem;
`,yc=x.button`
  border: 0;
  border-radius: 999px;
  padding: 0.45rem 1.05rem;
  background: transparent;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.92rem;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;

  &.active {
    color: #ffffff;
    background: var(--bg-ink);
  }
`,e1=x.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  align-items: stretch;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,t1=x.article`
  position: relative;
  padding: 1.3rem 1.2rem;
  border-radius: 20px;
  border: 1px solid ${e=>e.featured?"rgba(31, 61, 240, 0.45)":"var(--line)"};
  background: ${e=>e.featured?"linear-gradient(180deg, #ffffff, #eef1ff)":"rgba(255, 255, 255, 0.85)"};
  display: grid;
  gap: 0.7rem;
  opacity: ${e=>e.muted?.65:1};
  box-shadow: ${e=>e.featured?"0 22px 40px -22px rgba(31, 61, 240, 0.35)":"none"};
  min-width: 0;
`,vc=x.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
  background: var(--bg-ink);
  color: #ffffff;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
`,n1=x.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
`,r1=x.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
`,wc=x.strong`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.8rem, 3.6vw, 2.3rem);
  letter-spacing: -0.02em;
  color: var(--text-primary);
`,o1=x.span`
  color: var(--text-muted);
  font-size: 0.95rem;
`,i1=x.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.92rem;
  min-height: 42px;
`,l1=x.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  color: var(--text-primary);
  padding: 0.32rem 0.6rem;
  border-radius: 999px;
  background: rgba(31, 61, 240, 0.08);
  width: fit-content;
`,a1=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  background: ${e=>e.muted?"rgba(14, 22, 45, 0.08)":"var(--bg-ink)"};
  color: ${e=>e.muted?"var(--text-muted)":"#ffffff"};
  pointer-events: ${e=>e.muted?"none":"auto"};

  &:hover {
    background: ${e=>e.muted?"rgba(14, 22, 45, 0.08)":"#14192a"};
  }
`,s1=x.ul`
  margin: 0.3rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
`,u1=x.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  line-height: 1.45;
`;x.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;x.div`
  padding: 1.2rem 1.3rem;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.85);
`;x.h3`
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  font-weight: 600;
`;x.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
`;const c1=x.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
  border-top: 1px solid var(--line);
`,d1=x.div`
  padding: clamp(2rem, 5vw, 3.5rem);
  border-radius: 24px;
  background:
    radial-gradient(circle at 90% -10%, rgba(255, 170, 105, 0.4), transparent 38%),
    radial-gradient(circle at 0% 110%, rgba(31, 61, 240, 0.5), transparent 38%),
    var(--bg-ink);
  color: #ffffff;
  display: grid;
  gap: 1rem;
  text-align: center;
  justify-items: center;
`,f1=x.h2`
  margin: 0;
  font-size: clamp(1.8rem, 4.6vw, 2.8rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 720px;
`,p1=x.p`
  margin: 0;
  color: #c9d1e3;
  max-width: 620px;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
`,h1=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: center;
`,m1=x(Tp)`
  background: #ffffff;
  color: var(--text-primary);

  &:hover {
    background: #f1f1f1;
  }
`,g1=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  color: #ffffff;
  font-weight: 600;
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`,y1=x.ol`
  list-style: none;
  margin: 2.4rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.9rem;
  counter-reset: step;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 23px;
    top: 14px;
    bottom: 14px;
    width: 2px;
    background: linear-gradient(180deg, var(--brand), transparent);
    opacity: 0.25;
    pointer-events: none;

    @media (max-width: 640px) {
      left: 19px;
    }
  }
`,v1=x.li`
  counter-increment: step;
  position: relative;
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 1rem;
  padding: 1rem 1.2rem 1rem 0.4rem;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.85);
  align-items: start;
  transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: var(--line-strong);
    transform: translateY(-1px);
    box-shadow: 0 14px 24px -18px rgba(20, 30, 70, 0.18);
  }

  @media (max-width: 640px) {
    grid-template-columns: 40px 1fr;
    padding: 0.85rem 1rem 0.85rem 0.3rem;
  }
`,w1=x.span`
  width: 36px;
  height: 36px;
  margin-left: 6px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-ink);
  color: #ffffff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.85);
`,x1=x.div`
  display: grid;
  gap: 0.3rem;
`,S1=x.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
`,k1=x.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.55;
`,E1=x.div`
  margin-top: 2.2rem;
  display: grid;
  gap: 0.65rem;
  max-width: 880px;
`,C1=x.details`
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.92);
  padding: 0;
  overflow: hidden;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &[open] {
    border-color: rgba(31, 61, 240, 0.32);
    box-shadow: 0 14px 30px -22px rgba(20, 30, 70, 0.18);
  }

  &[open] summary svg {
    transform: rotate(45deg);
    color: var(--brand-strong);
  }
`,T1=x.summary`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.05rem 1.25rem;
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.02rem;
  color: var(--text-primary);
  user-select: none;

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    flex-shrink: 0;
    transition: transform 0.18s ease, color 0.18s ease;
    color: var(--text-muted);
  }
`,I1=x.div`
  padding: 0 1.25rem 1.1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.97rem;
`,Ra="https://app.divvylore.com",P1=Ra.replace(/\/$/,""),Il="/register",N1="/login",R1=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:e%1===0?0:2}).format(e),xn=e=>{const t=Number(e);return Number.isFinite(t)?t:0},xc=["ENTERPRISE","SUPPORT TEAMS","FINTECH","SAAS","HEALTHCARE","MARKETPLACES","RETAIL","EDUCATION"],A1=[{value:"24/7",label:"Always-on coverage"},{value:"<2m",label:"Median first response"},{value:"99.9%",label:"Platform reliability target"}],b1=[{value:"90%",label:"Faster resolutions on common tickets"},{value:"60%",label:"Reduction in repeat contacts"},{value:"10x",label:"Throughput vs. linear staffing"},{value:"Days",label:"From kickoff to first deployment"}],j1=e=>(Array.isArray(e?.pricing?.plans)?e.pricing.plans:[]).map((n,r)=>{const o=Number(String(n.price||"").replace(/[^\d.]/g,"")),i=Number.isFinite(o)?o:0;return{id:n.planCode||`${n.name}-${r}`,name:n.name,description:n.description,code:n.planCode,monthlyPrice:i,yearlyPrice:i>0?Math.round(i*10):0,monthlyCredits:0,yearlyCredits:0,yearlyBonusCredits:0,features:(n.features||[]).map((l,a)=>({name:l,isIncluded:!0,displayOrder:a})),buttonText:n.ctaLabel,isPopular:!!n.highlighted,isActive:!0,isVisible:!0,displayOrder:r,isCustomPricing:String(n.price||"").toLowerCase().includes("custom")}}),Sc=()=>{const e=Ze,t=N.useMemo(()=>j1(e),[e]),[n,r]=N.useState("monthly"),[o,i]=N.useState(t),[l,a]=N.useState(!0);N.useEffect(()=>{const y=new AbortController;return(async()=>{a(!0);try{const w=await fetch(`${P1}/account/tenant/plans`,{method:"GET",headers:{Accept:"application/json"},signal:y.signal});if(!w.ok)throw new Error(`Pricing API returned ${w.status}`);const E=await w.json();if(!Array.isArray(E))throw new Error("Pricing API response is not a plan list");const h=E.map(c=>({...c,monthlyPrice:xn(c.monthlyPrice),yearlyPrice:xn(c.yearlyPrice),monthlyCredits:xn(c.monthlyCredits),yearlyCredits:xn(c.yearlyCredits),yearlyBonusCredits:xn(c.yearlyBonusCredits??0),displayOrder:xn(c.displayOrder??999),features:Array.isArray(c.features)?c.features:[]})).sort((c,m)=>(c.displayOrder??999)-(m.displayOrder??999));h.length>0&&i(h)}catch(w){if(w.name==="AbortError")return}finally{a(!1)}})(),()=>y.abort()},[]);const s=N.useMemo(()=>o.filter(y=>y.name),[o]),u=n==="monthly"?"/month":"/year",f=typeof window<"u"?window.location.hostname:"divvylore.com",p=(y,v)=>{const w=new URLSearchParams({source:f,...v||{}}).toString();return`${Ra}${y}?${w}`},g=[...xc,...xc];return d.jsxs(d0,{children:[d.jsxs(f0,{children:[d.jsxs(Ye,{children:[d.jsxs(p0,{children:[d.jsx(h0,{children:"New"}),"Conversational AI for customer support"]}),d.jsxs(m0,{children:["Support agents that resolve issues and"," ",d.jsx(g0,{children:"keep customers moving."})]}),d.jsx(y0,{children:e.hero?.description}),d.jsxs(v0,{children:[d.jsxs(Tp,{href:p(Il,{placement:"hero"}),target:"_blank",rel:"noreferrer",children:["Get started",d.jsx(fc,{size:16})]}),d.jsx(w0,{href:"#pricing",children:"View pricing"})]}),d.jsx(x0,{children:d.jsxs(S0,{children:[d.jsxs(k0,{children:[d.jsxs(E0,{children:[d.jsx(C0,{children:"D"}),d.jsxs(T0,{children:[d.jsx(I0,{children:"Divvylore Agent"}),d.jsx(P0,{children:"Online · responds in < 2s"})]})]}),d.jsx(Sl,{side:"in",children:"Hi, I can’t access my dashboard after the billing update."}),d.jsx(Sl,{side:"out",children:"Got it. I’ve verified your account and re-issued access. You should be back in under a minute."}),d.jsx(Sl,{side:"in",children:"Perfect — works now. Thanks!"}),d.jsxs(N0,{"aria-hidden":!0,children:[d.jsx("span",{})," ",d.jsx("span",{})," ",d.jsx("span",{})]})]}),d.jsxs(R0,{children:[d.jsxs(A0,{children:[d.jsx(b0,{children:"Live metrics"}),d.jsx(j0,{children:"Today"})]}),A1.map(y=>d.jsxs(O0,{children:[d.jsx(L0,{children:y.value}),d.jsx(_0,{children:y.label})]},y.label))]})]})})]}),d.jsx(Ye,{children:d.jsxs(D0,{children:[d.jsx(z0,{children:"Built for customer-facing teams across"}),d.jsx($0,{children:d.jsx(M0,{children:g.map((y,v)=>d.jsx(U0,{children:y},`${y}-${v}`))})})]})})]}),d.jsx(Co,{id:"highlights",children:d.jsxs(Ye,{children:[d.jsxs(qt,{children:[d.jsx(hc,{size:14})," Platform"]}),d.jsx(Qt,{children:e.highlights?.title}),d.jsx(Kt,{children:e.highlights?.subtitle}),d.jsx(gc,{children:(e.highlights?.cards||[]).map(y=>d.jsxs(kl,{children:[d.jsx(El,{children:d.jsx(mc,{size:18})}),d.jsx(Cl,{children:y.title}),d.jsx(Tl,{children:y.description})]},y.title))})]})}),d.jsx(W0,{id:"how-it-works",children:d.jsxs(Ye,{children:[d.jsxs(qt,{children:[d.jsx(s0,{size:14})," How it works"]}),d.jsx(Qt,{children:e.howItWorks?.title}),d.jsx(Kt,{children:"Configure your workflows, connect business context, and let agents resolve common requests with smart escalation when needed."}),d.jsx(y1,{children:(e.howItWorks?.steps||[]).map((y,v)=>d.jsxs(v1,{children:[d.jsx(w1,{children:String(v+1).padStart(2,"0")}),d.jsxs(x1,{children:[d.jsx(S1,{children:y.title}),d.jsx(k1,{children:y.description})]})]},y.title))})]})}),d.jsx(Co,{id:"features",children:d.jsxs(Ye,{children:[d.jsxs(qt,{children:[d.jsx(Jv,{size:14})," Capabilities"]}),d.jsx(Qt,{children:e.features?.title}),d.jsx(Kt,{children:"Everything you need to launch and scale production AI support, from configuration to analytics and escalation."}),d.jsx(F0,{children:(e.features?.items||[]).map(y=>d.jsxs(kl,{children:[d.jsx(El,{children:d.jsx(c0,{size:18})}),d.jsx(Cl,{children:y.title}),d.jsx(Tl,{children:y.description})]},y.title))})]})}),d.jsx(Co,{id:"security",children:d.jsxs(Ye,{children:[d.jsxs(qt,{children:[d.jsx(pc,{size:14})," Security"]}),d.jsx(Qt,{children:e.security?.title}),d.jsx(Kt,{children:"Built with tenant isolation, secure transport, and response guardrails so customer-facing agents stay safe and predictable."}),d.jsx(gc,{children:(e.security?.items||[]).map(y=>d.jsxs(kl,{children:[d.jsx(El,{children:d.jsx(pc,{size:18})}),d.jsx(Cl,{children:y.title}),d.jsx(Tl,{children:y.description})]},y.title))})]})}),d.jsx(B0,{id:"stats",children:d.jsxs(Ye,{children:[d.jsxs(qt,{children:[d.jsx(hc,{size:14})," Outcomes"]}),d.jsx(Qt,{children:"Results customers see in production"}),d.jsx(Kt,{children:"Modern AI support that ships in days, not quarters, and earns its place in your team."}),d.jsx(H0,{style:{marginTop:"2.4rem"},children:b1.map(y=>d.jsxs(V0,{children:[d.jsx(G0,{children:y.value}),d.jsx(Y0,{children:y.label})]},y.label))})]})}),d.jsx(q0,{id:"story",children:d.jsx(Ye,{children:d.jsxs(Q0,{children:[d.jsx(K0,{children:"“Divvylore lets us launch production-grade support agents quickly, keep humans in the loop, and resolve customer issues without losing brand voice.”"}),d.jsx(X0,{children:"— Customer success leader, SaaS support team"})]})})}),d.jsx(Z0,{id:"pricing",children:d.jsxs(Ye,{children:[d.jsxs(qt,{children:[d.jsx(mc,{size:14})," Pricing"]}),d.jsx(Qt,{children:e.pricing?.title}),d.jsx(Kt,{children:e.pricing?.subtitle}),d.jsxs(J0,{role:"tablist","aria-label":"Billing cycle",children:[d.jsx(yc,{type:"button",className:n==="monthly"?"active":"",onClick:()=>r("monthly"),children:"Monthly"}),d.jsx(yc,{type:"button",className:n==="yearly"?"active":"",onClick:()=>r("yearly"),children:"Yearly"})]}),d.jsx(e1,{children:s.map(y=>{const v=y.isActive===!1||y.isVisible===!1,w=n==="monthly"?y.monthlyPrice:y.yearlyPrice,E=n==="monthly"?y.monthlyCredits:y.yearlyCredits,h=n==="yearly"&&y.yearlyBonusCredits||0,c=(y.features||[]).filter(S=>S.isIncluded).sort((S,T)=>(S.displayOrder??999)-(T.displayOrder??999)),m=new URLSearchParams({source:f,placement:"pricing",plan:y.code||y.id,billing:n}).toString();return d.jsxs(t1,{featured:!!y.isPopular,muted:v,children:[y.isPopular&&!v&&d.jsx(vc,{children:"Most popular"}),v&&d.jsx(vc,{children:"Unavailable"}),d.jsx(n1,{children:y.name}),d.jsx(r1,{children:y.isCustomPricing?d.jsx(wc,{children:"Custom"}):d.jsxs(d.Fragment,{children:[d.jsx(wc,{children:R1(w)}),d.jsx(o1,{children:u})]})}),d.jsx(i1,{children:y.description}),d.jsxs(l1,{children:[E.toLocaleString()," credits / ",n==="monthly"?"mo":"yr",h>0?` · +${h.toLocaleString()} bonus`:""]}),d.jsx(a1,{href:v?void 0:`${Ra}${Il}?${m}`,muted:v,"aria-disabled":v,onClick:S=>{v&&S.preventDefault()},target:"_blank",rel:"noreferrer",children:v?"Not available":y.buttonText||"Get started"}),d.jsx(s1,{children:c.map(S=>d.jsxs(u1,{children:[d.jsx(t0,{size:16,color:"#1f3df0"}),d.jsx("span",{children:S.name})]},`${y.name}-${S.name}`))})]},y.id||y.name)})})]})}),d.jsx(Co,{id:"faq",children:d.jsxs(Ye,{children:[d.jsx(qt,{children:"FAQ"}),d.jsx(Qt,{children:e.faq?.title}),d.jsx(Kt,{children:"Answers to common questions before you launch your first agent."}),d.jsx(E1,{children:(e.faq?.items||[]).map((y,v)=>d.jsxs(C1,{...v===0?{open:!0}:{},children:[d.jsxs(T1,{children:[d.jsx("span",{children:y.question}),d.jsx(r0,{size:20,"aria-hidden":!0})]}),d.jsx(I1,{children:y.answer})]},y.question))})]})}),d.jsx(c1,{id:"cta",children:d.jsx(Ye,{children:d.jsxs(d1,{children:[d.jsx(f1,{children:"Launch your AI support agent in days."}),d.jsx(p1,{children:"Move customer conversations from backlog to resolution with a production-ready agent platform."}),d.jsxs(h1,{children:[d.jsxs(m1,{href:p(Il,{placement:"bottom-cta"}),target:"_blank",rel:"noreferrer",children:["Get started",d.jsx(fc,{size:16})]}),d.jsx(g1,{href:p(N1,{placement:"bottom-cta"}),target:"_blank",rel:"noreferrer",children:"Sign in"})]})]})})})]})},O1=`# Privacy Policy\r
\r
**Last updated:** 9 August 2026  \r
**Effective date:** 9 August 2026  \r
**Applies to:** https://divvylore.com, https://app.divvylore.com, and related Divvylore services\r
\r
Divvylore (“**Divvylore**,” “**we**,” “**us**,” or “**our**”) provides a multi-tenant software platform for AI support agents, content workflows, website publishing, and related business tools (the “**Services**”).\r
\r
This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our websites, create an account, or use the Services. By using the Services, you acknowledge this Policy. If you do not agree, please do not use the Services. Related documents: [Terms and Conditions](/terms-and-conditions) and [Refund Policy](/refund-policy).\r
\r
If you are a business customer (a “**Tenant**”), this Policy describes how Divvylore processes data as a service provider / processor for Tenant-controlled end-user data. Your own privacy notice may also apply to end users who interact with your agents, websites, or content.\r
\r
---\r
\r
## 1. Who we are\r
\r
| | |\r
|---|---|\r
| **Service provider** | Divvylore |\r
| **Websites** | https://divvylore.com (marketing), https://app.divvylore.com (customer portal), and related product domains we operate |\r
| **Privacy contact** | [hello@divvylore.com](mailto:hello@divvylore.com) |\r
\r
For privacy questions, requests, or complaints, email [hello@divvylore.com](mailto:hello@divvylore.com).\r
\r
---\r
\r
## 2. Scope\r
\r
This Policy covers personal information we process when you:\r
\r
- Visit our marketing site or blogs  \r
- Register for or sign in to the Divvylore portal  \r
- Configure agents, workflows, websites, integrations, or billing  \r
- Contact support  \r
- Interact with a Tenant’s Divvylore-powered chat widget or published content (to the limited extent Divvylore processes that data to operate the Services)  \r
\r
It does **not** cover third-party websites or apps that you connect (for example Google, social platforms, payment providers) under their own policies.\r
\r
---\r
\r
## 3. Information we collect\r
\r
### 3.1 Information you provide\r
\r
- **Account and profile data** — name, email address, organisation/tenant name, role, and similar profile fields  \r
- **Authentication data** — credentials or tokens managed through our identity providers (we do not store plaintext passwords where federation/managed auth is used)  \r
- **Billing and licensing data** — plan selection, invoices, and payment-related identifiers processed via our payment partners (we do not store full card numbers on Divvylore systems when processors tokenise payments)  \r
- **Configuration and content** — agent settings, prompts, guardrails, knowledge you upload, workflow definitions, website content, schedules, and approvals  \r
- **Support communications** — messages you send to us  \r
\r
### 3.2 Information collected automatically\r
\r
- **Usage and device data** — IP address, browser type, device identifiers, pages viewed, feature usage, approximate location derived from IP, and diagnostic logs  \r
- **Cookies and similar technologies** — see [Cookies](#10-cookies-and-similar-technologies)  \r
\r
### 3.3 Information from integrations you connect\r
\r
When a Tenant connects a third-party service (for example Google for Keyword Planner research, or social publishing connectors), we receive the tokens and account identifiers needed to provide that feature, such as:\r
\r
- OAuth tokens / refresh tokens (stored securely, typically encrypted / vaulted)  \r
- External account IDs and display names  \r
- Research or publishing metadata required to run the connected feature  \r
\r
We only request scopes reasonably needed for the feature you enable. You may disconnect integrations in the portal; tokens are revoked or deleted promptly thereafter, subject to backup retention.\r
\r
### 3.4 End-user / visitor data (Tenant-controlled)\r
\r
If you embed a Divvylore chat widget or publish content, we may process conversation messages, session identifiers, and related telemetry **on behalf of the Tenant**. The Tenant determines what is collected from their customers and is responsible for providing an appropriate notice and lawful basis to those end users.\r
\r
### 3.5 Sensitive personal information\r
\r
The Services are not designed for systematic processing of special-category or highly sensitive personal data (for example certain health, biometric, or children’s data). Do not submit such data unless you have a lawful basis and it is necessary for your use case. Tenants are responsible for configuring agents and knowledge sources accordingly.\r
\r
---\r
\r
## 4. How we use information and legal bases\r
\r
We use personal information to:\r
\r
- Provide, operate, secure, and improve the Services  \r
- Authenticate users and enforce tenant isolation and permissions  \r
- Process subscriptions, licensing, refunds, and related billing  \r
- Run AI features you configure (support agents, content generation/review, workflows), including sending prompts and necessary context to our AI infrastructure and subprocessors  \r
- Enable integrations you connect (for example keyword research or social/website publishing)  \r
- Provide customer support and send service-related notices  \r
- Monitor abuse, debug issues, and protect the Services  \r
- Comply with law and enforce our terms  \r
- With consent or as otherwise permitted, send product updates or marketing (you can opt out of non-essential marketing)  \r
\r
We do **not** sell personal information and we do not share personal information for cross-context behavioural advertising as those concepts are commonly defined under California law.\r
\r
Where the GDPR or UK GDPR applies, our legal bases typically include: **performance of a contract** (providing the Services); **legitimate interests** (security, product improvement with appropriate safeguards, B2B marketing where permitted); **legal obligation**; and **consent** (where required, for example certain cookies or marketing).\r
\r
Where India’s Digital Personal Data Protection Act (DPDP Act) or similar laws apply, we process personal data for the purposes described in this Policy and in accordance with applicable lawful grounds and your directions as a Tenant.\r
\r
---\r
\r
## 5. AI-assisted features\r
\r
The Services offer optional AI features that generate or rewrite replies, drafts, captions, summaries, recommendations, and similar materials. To provide them we may transmit your prompts and the inputs you choose to include to third-party model providers acting as our sub-processors.\r
\r
AI outputs are generated **probabilistically** and may be inaccurate, incomplete, or unsuitable. **You remain responsible for reviewing them before relying on them or publishing them.** Divvylore is not responsible for incorrect AI Output or for loss of business or profits arising from it — see our [Terms and Conditions](/terms-and-conditions).\r
\r
We design tenant isolation controls so one Tenant’s confidential configuration and data are not exposed to other Tenants in the product experience. We instruct model providers not to use your inputs to train their models for unrelated purposes where the provider contract allows that instruction; where a provider’s default policy differs, we describe material cases in documentation or this Policy when we become aware of them.\r
\r
Do not submit sensitive personal data into AI features unless you have a lawful basis and it is necessary for your use case.\r
\r
---\r
\r
## 6. Divvylore as controller vs processor\r
\r
For account, billing, Site analytics, marketing, and security data about Site visitors and Tenant users, Divvylore acts as a **data controller** (or equivalent under applicable law).\r
\r
For content you publish through the Services and personal data of your end users, customers, or audience that flows through Divvylore on your instructions (for example chat transcripts with your website visitors), Divvylore acts as a **data processor** (or service provider) on your behalf, and **you are the controller**. You are responsible for having a lawful basis for that processing, for providing notices and obtaining consents from your end users, and for honouring their rights.\r
\r
Enterprise customers may request our standard Data Processing Addendum (DPA), including appropriate international transfer terms where relevant, by emailing [hello@divvylore.com](mailto:hello@divvylore.com).\r
\r
---\r
\r
## 7. How we share information\r
\r
We may share personal information with:\r
\r
- **Service providers / subprocessors** — hosting, databases, logging, email, payments, analytics, AI model providers, and integration platforms that help us run the Services, under contractual confidentiality and security obligations, and only for agreed purposes  \r
- **Integration providers you authorise** — when you connect Google, social networks, or similar services, those providers process data under their terms and privacy policies  \r
- **Tenant administrators** — within a Tenant, admins and authorised members may access workspace data according to roles and permissions  \r
- **Professional advisors and authorities** — when required by law, legal process, or to protect rights, safety, and security. Where lawful, we may attempt to redirect a request to you first  \r
- **Business transfers** — in connection with a merger, acquisition, financing, or sale of assets, subject to appropriate safeguards  \r
\r
We do not share Tenant content with other Tenants for their independent use.\r
\r
---\r
\r
## 8. Google API services\r
\r
If you connect Google accounts for features such as Keyword Planner research, Google’s APIs may provide certain account and research data to Divvylore. Your use of Google features is also subject to Google’s terms and the [Google Privacy Policy](https://policies.google.com/privacy). You may revoke Divvylore’s access at any time in your Google account permissions and in Divvylore Integrations settings.\r
\r
Where Google’s Limited Use requirements apply to user data obtained via Google APIs, Divvylore uses that data only to provide or improve user-facing features that are prominent in the requesting application, and not for serving advertisements, and not for other prohibited purposes under those requirements.\r
\r
---\r
\r
## 9. International transfers\r
\r
We may process and store information in countries other than where you live, including where our cloud providers and subprocessors operate. Those countries may not provide the same level of data protection as your home country. Where required, we use appropriate transfer mechanisms and contractual protections (for example Standard Contractual Clauses or equivalent safeguards).\r
\r
---\r
\r
## 10. Cookies and similar technologies\r
\r
We use cookies and similar technologies to:\r
\r
- Keep you signed in and secure sessions (**strictly necessary**)  \r
- Remember preferences (**functional**)  \r
- Understand site and product usage (**analytics**)  \r
- Support fraud prevention and reliability (**security**)  \r
\r
Where required by law, we request consent for non-essential cookies. You can control cookies through your browser settings and any consent tools we display. Disabling some cookies may limit functionality of the Services. Marketing cookies, if used on the Site, can be refused where a consent banner is shown.\r
\r
---\r
\r
## 11. Data retention\r
\r
We retain personal information for as long as needed to provide the Services, meet legal obligations, resolve disputes, and enforce agreements.\r
\r
Typical periods (subject to legal holds and backups):\r
\r
- **Account and Tenant configuration** — while the account is active; after closure, generally deleted or anonymised within a commercially reasonable period (often within 90 days), except billing records  \r
- **Billing and tax records** — retained for the period required by applicable tax and accounting law  \r
- **OAuth / integration tokens** — while the connection is active; deleted or invalidated promptly after disconnect  \r
- **Operational and security logs** — typically up to 12 months  \r
- **Backups** — roll off on normal backup schedules after deletion from live systems  \r
\r
---\r
\r
## 12. Security\r
\r
We implement technical and organisational measures appropriate to the nature of the Services, including encryption in transit, access controls, tenant isolation patterns, and secure storage of secrets (for example credential vaulting). No method of transmission or storage is completely secure; please use strong authentication and protect your account.\r
\r
If we become aware of a personal-data breach affecting you, we will notify you and/or regulators as required by applicable law, without undue delay where mandated.\r
\r
---\r
\r
## 13. Your rights and choices\r
\r
Depending on your location, you may have rights to:\r
\r
- Access the personal data we hold about you and receive a portable copy  \r
- Request correction of inaccurate or incomplete data  \r
- Request deletion, subject to retention obligations  \r
- Object to or restrict certain processing, including direct marketing  \r
- Withdraw consent where processing is based on consent (without affecting prior lawful processing)  \r
- Lodge a complaint with a supervisory authority  \r
\r
To exercise these rights, contact [hello@divvylore.com](mailto:hello@divvylore.com). We will respond within the timeframe required by applicable law (typically within **30 days**, extendable for complex requests). We may need to verify your identity. We will not discriminate against you for exercising your rights.\r
\r
If you are an end user of a Tenant’s deployment (for example a visitor chatting with a Tenant’s agent), contact that Tenant first — they control that relationship. We will assist Tenants with verified requests as required.\r
\r
You may also:\r
\r
- Update account profile information in the portal where available  \r
- Disconnect integrations under Settings → Integrations  \r
- Opt out of non-essential marketing emails via unsubscribe links  \r
\r
### California residents\r
\r
If you are a California resident, the CCPA/CPRA may provide rights to know, delete, correct, and opt out of “sale” or “sharing” of personal information. Divvylore does **not** sell personal information and does **not** share it for cross-context behavioural advertising. Categories of personal information we collect are described in Section 3; purposes are described in Section 4. To exercise California rights, email [hello@divvylore.com](mailto:hello@divvylore.com).\r
\r
### India (DPDP Act)\r
\r
Where the DPDP Act applies, you may have rights to access, correction, erasure, and grievance redressal regarding your personal data. Contact [hello@divvylore.com](mailto:hello@divvylore.com). We will designate or publish a grievance / data-protection contact as required when applicable rules take effect for our operations.\r
\r
---\r
\r
## 14. Children’s privacy\r
\r
The Services are designed for business use and are not directed to children under **18** (or the higher age of majority in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us and we will take appropriate steps to delete it.\r
\r
---\r
\r
## 15. Third-party links and services\r
\r
The Services may link to or integrate with third-party products. Their privacy practices are governed by their own policies. Review those policies before connecting an integration or sharing data with them.\r
\r
---\r
\r
## 16. Automated decision-making\r
\r
AI features may generate content or suggested actions automatically based on your configuration. We do not use automated decision-making that produces legal or similarly significant effects about natural persons solely by Divvylore without meaningful human involvement in a way that would require additional notices under applicable law, except as configured by a Tenant for their own end users — in which case the Tenant is responsible for required notices and safeguards.\r
\r
---\r
\r
## 17. Changes to this Policy\r
\r
We may update this Privacy Policy from time to time. We will post the updated version with a revised “Last updated” date and, for material changes, provide additional notice as appropriate (for example in-product or by email). Continued use of the Services after the effective date means you accept the updated Policy.\r
\r
---\r
\r
## 18. Contact\r
\r
Privacy questions or requests:  \r
**Email:** [hello@divvylore.com](mailto:hello@divvylore.com)  \r
**Web:** [https://divvylore.com](https://divvylore.com)\r
\r
---\r
\r
*Have qualified counsel confirm legal entity name, registered address, DPDP grievance officer details, and subprocessor disclosures before relying on this Policy for regulatory filings.*\r
`,L1=`# Refund Policy\r
\r
**Last updated:** 9 August 2026  \r
**Effective date:** 9 August 2026  \r
**Applies to:** paid Divvylore subscriptions purchased through https://divvylore.com, https://app.divvylore.com, or related Divvylore checkout flows\r
\r
This Refund Policy is part of our [Terms and Conditions](/terms-and-conditions). If there is a conflict on refunds, this Policy controls for that topic. Capitalised terms not defined here have the meaning in the Terms.\r
\r
We aim to keep refunds **customer-friendly and flexible**, while preventing abuse and remaining fair for long-term use.\r
\r
---\r
\r
## 1. How to request a refund\r
\r
Email [hello@divvylore.com](mailto:hello@divvylore.com) from the account billing email with:\r
\r
- Tenant / organisation name  \r
- Account email  \r
- Invoice or payment reference (if available)  \r
- Reason for the request (optional, but helps us improve)\r
\r
We will normally respond within **seven (7) business days**. Approved refunds are issued to the original payment method via our payment processor and may take additional processor/bank time to appear.\r
\r
---\r
\r
## 2. Flexible refunds (first 90 days)\r
\r
If your Tenant’s **first paid subscription start date** is **ninety (90) days or fewer** before the refund request date (the “**Flexibility Window**”), you may request a refund of **eligible prepaid fees** for the Services, and we will generally approve it in good faith.\r
\r
During the Flexibility Window we will typically refund:\r
\r
- The **unused portion** of the current prepaid billing period; and  \r
- Where you paid annually (or another multi-month prepaid term) and cancel within the Flexibility Window, a **full refund of unused prepaid time** for that term, calculated fairly from the request date.\r
\r
We may, at our discretion, refund the **full amount of the most recent prepaid charge** during the Flexibility Window when that is simpler and still reasonable.\r
\r
---\r
\r
## 3. Prorated refunds (after 90 days)\r
\r
If your Tenant has been on a **paid subscription for more than ninety (90) days** since the first paid subscription start date, refunds (if approved) are on a **prorated** basis only:\r
\r
- We refund the **unused remaining portion** of the current prepaid billing period, measured from the refund approval / cancellation effective date through the end of that period.  \r
- Time already used in the current period is **not** refundable.  \r
- Prior completed billing periods are **not** refundable.  \r
- Example: on an annual plan with 4 months remaining after day 91, an approved refund covers those remaining months (less any non-refundable add-ons or usage charges described below), not the full year.\r
\r
---\r
\r
## 4. What is not refundable\r
\r
Unless required by law, the following are not refundable (or are deducted from any refund):\r
\r
- Fees for periods already fully used  \r
- One-time setup, onboarding, professional services, custom development, or marketplace/third-party pass-through fees (unless we expressly say otherwise in writing)  \r
- Overage, usage-based, or metered charges already incurred  \r
- Taxes remitted to tax authorities that cannot be recovered  \r
- Payments obtained by fraud, chargeback abuse, or Terms violations  \r
- Free trials, free plans, promotional credits, and beta features provided at no charge  \r
\r
---\r
\r
## 5. Cancellation vs refund\r
\r
- **Cancel** stops future renewals. You keep access until the end of the paid period unless we refund and terminate earlier.  \r
- A **refund request** may include a request to cancel and end access when the refund is processed.  \r
- Cancelling alone does not automatically create a refund; you must request one under this Policy.\r
\r
---\r
\r
## 6. Good-faith discretion and abuse\r
\r
We reserve the right to:\r
\r
- Ask for reasonable verification of account ownership  \r
- Deny or reduce refunds where we reasonably believe there is abuse (for example repeated subscribe–refund cycles, chargebacks instead of contacting us, or clear Terms violations)  \r
- Offset amounts you owe us against any refund  \r
- Offer account credit instead of a cash refund where you prefer that  \r
\r
Nothing in this Policy limits rights you cannot waive under mandatory consumer law.\r
\r
---\r
\r
## 7. Chargebacks\r
\r
Please contact us before filing a payment dispute. Filing a chargeback without first giving us a reasonable chance to resolve the issue may result in suspension of the account while the dispute is pending.\r
\r
---\r
\r
## 8. Changes\r
\r
We may update this Refund Policy from time to time. The version posted on the Site with the latest “Last updated” date applies to refund requests made on or after that date, except where mandatory law requires otherwise.\r
\r
---\r
\r
## 9. Contact\r
\r
**Email:** [hello@divvylore.com](mailto:hello@divvylore.com)  \r
**Web:** [https://divvylore.com](https://divvylore.com)\r
`,_1=`# Terms and Conditions\r
\r
**Last updated:** 9 August 2026  \r
**Effective date:** 9 August 2026  \r
**Applies to:** https://divvylore.com, https://app.divvylore.com, and related Divvylore services\r
\r
These Terms and Conditions (“**Terms**”) govern access to and use of Divvylore’s websites, applications, and platform services (the “**Services**”) operated by Divvylore (“**Divvylore**,” “**we**,” “**us**,” or “**our**”).\r
\r
By accessing or using the Services, creating an account, or clicking to accept these Terms, you agree to be bound by them and by our [Privacy Policy](/privacy-policy) and [Refund Policy](/refund-policy). If you use the Services on behalf of an organisation, you represent that you have authority to bind that organisation, and “**you**” includes that organisation (a “**Tenant**”).\r
\r
If you do not agree, do not use the Services.\r
\r
---\r
\r
## 1. Eligibility and the Services\r
\r
### 1.1 Eligibility\r
\r
You must be at least **18 years old** (or the age of majority in your jurisdiction) and able to form a binding contract. The Services are intended for **business and professional use**, not for personal consumer use by children.\r
\r
### 1.2 The Services\r
\r
Divvylore provides a multi-tenant SaaS platform that may include, depending on your plan and configuration:\r
\r
- AI support agents and chat experiences  \r
- Knowledge, tools, guardrails, and human handoff features  \r
- Content and SEO workflows (including research, drafting, review, approvals, and publishing)  \r
- Website management and related publishing features  \r
- Integrations with third-party platforms you choose to connect  \r
- Administration, billing, and team collaboration features  \r
\r
We may modify, improve, suspend, or discontinue features with reasonable notice where practicable. We do **not** guarantee any particular uptime, response time, or business result unless a signed service-level agreement expressly says otherwise.\r
\r
### 1.3 Beta and free offerings\r
\r
Features marked beta, preview, experimental, or free are provided **“as is”**, may change or end at any time, and may be excluded from support and refund calculations except as required by law.\r
\r
---\r
\r
## 2. Accounts and tenants\r
\r
- You must provide accurate registration information and keep it updated.  \r
- You are responsible for safeguarding credentials (including API keys and integration secrets) and for all activity under your account and Tenant workspace.  \r
- Tenant administrators control member access, roles, and workspace configuration.  \r
- You must promptly notify us of unauthorised use at [hello@divvylore.com](mailto:hello@divvylore.com).  \r
- We may suspend accounts that appear compromised, abusive, unpaid, or in material breach of these Terms.  \r
- One natural person or organisation may not create multiple Tenants primarily to abuse trials, refunds, or promotional offers.\r
\r
---\r
\r
## 3. Plans, fees, cancellation, and refunds\r
\r
### 3.1 Billing\r
\r
- Paid features require a valid subscription or licence as described at purchase or in an order form.  \r
- By purchasing a subscription you authorise Divvylore (and its third-party payment processors) to charge the applicable fees to your chosen payment method on the billing cycle you selected (monthly, annual, or other). Subscriptions renew automatically at the then-current rate unless cancelled before renewal.  \r
- Fees are due according to the billing terms presented at checkout or in your agreement. Late or failed payment may result in suspension until cured.  \r
- You are responsible for applicable taxes, excluding taxes based on Divvylore’s income. Card and bank details are handled by our payment processors under their terms and privacy policies.  \r
- We may change prices for new billing periods on at least **30 days’** notice by email or in-product notice. Continued use of paid Services after a price change takes effect constitutes acceptance of the new price.\r
\r
### 3.2 Cancellation\r
\r
You may cancel from your account billing settings where available, or by contacting [hello@divvylore.com](mailto:hello@divvylore.com). Cancellation stops future renewals. Unless a refund is approved under the Refund Policy, you retain access until the end of the current paid period.\r
\r
### 3.3 Refunds (flexible; prorated after 90 days)\r
\r
Our [Refund Policy](/refund-policy) applies. In summary:\r
\r
- We keep a **flexible, customer-friendly** refund approach.  \r
- If your Tenant’s first paid subscription start date is **90 days or fewer** before the refund request, eligible prepaid fees are generally refundable under that Policy.  \r
- If your Tenant has used paid Services for **more than 90 days**, approved refunds are on a **prorated** basis for the **unused remaining portion** of the current prepaid period only.  \r
- Setup fees, professional services, metered overages, fully used periods, and abusive or fraudulent requests are not refundable except where law requires.  \r
- Please contact us before filing a chargeback.\r
\r
Mandatory consumer or local law rights that cannot be waived remain available.\r
\r
---\r
\r
## 4. Acceptable use\r
\r
You will not, and will not allow others to:\r
\r
- Use the Services unlawfully or for fraud, malware, spam, phishing, or harassment  \r
- Infringe intellectual property, privacy, publicity, or other rights  \r
- Attempt to bypass security, tenant isolation, rate limits, or access controls  \r
- Reverse engineer the Services except where such restriction is prohibited by law  \r
- Resell, sublicense, or provide the Services to third parties except as expressly permitted  \r
- Upload or process content you do not have rights to use  \r
- Use the Services to build a competing product using unauthorised scraping or systematic extraction of non-public platform data  \r
- Misrepresent AI-generated content as human-created where disclosure is legally required  \r
- Use integrations in violation of the third party’s terms (including Google Ads API / Keyword Planner rules and social platform policies)  \r
- Process special-category or highly regulated data (for example certain health, biometric, or children’s data) unless you have a lawful basis and the feature is designed for that use  \r
- Interfere with other Tenants or with the integrity or performance of the Services  \r
\r
We may investigate and suspend or terminate access for violations, and may remove offending content.\r
\r
---\r
\r
## 5. Your content and licences\r
\r
“**Customer Content**” means data, text, files, prompts, knowledge, configurations, chat transcripts, websites, media, and other materials you or your end users submit to the Services.\r
\r
- You retain ownership of Customer Content.  \r
- You grant Divvylore a worldwide, non-exclusive, royalty-free licence to host, process, transmit, display, and create derivative **technical** representations of Customer Content **solely to provide, secure, maintain, and support the Services** for you (including AI processing and integrations you enable), and to create aggregated, de-identified analytics that do not identify you or your end users.  \r
- We do **not** sell Customer Content. We do not use Customer Content to train foundation models for unrelated third parties, except where a model provider’s processing is required to deliver a feature you enabled and is governed by that provider’s terms and our instructions as described in the Privacy Policy.  \r
- You represent that you have all rights, notices, and consents required to submit Customer Content and to allow processing described in our Privacy Policy.  \r
- You are responsible for backups of Customer Content that you need outside the Services. On written request before account deletion, we will provide a reasonable export of Tenant-configurable content then available through product export tools or support, subject to technical limits and legal holds.\r
\r
---\r
\r
## 6. AI features and outputs\r
\r
The Services may offer AI-assisted features that generate text, recommendations, agent replies, drafts, captions, summaries, analytics, workflows, or similar materials (“**AI Output**”). AI Output is generated **probabilistically** and may be inaccurate, incomplete, outdated, biased, misleading, or otherwise unsuitable for your purpose (including false statements of fact).\r
\r
You acknowledge and agree that:\r
\r
- **You are solely responsible** for reviewing AI Output before relying on it, publishing it, sending it to customers, or taking any business, legal, financial, medical, or operational action, and for ensuring it complies with applicable law, third-party platform rules, and the rights of any persons depicted or referenced.  \r
- **Divvylore is not responsible for any AI Output**, or for any AI-generated or AI-assisted content, response, recommendation, action, or omission, whether delivered to you, your Users, or your end customers.  \r
- The Services do **not** provide legal, medical, financial, tax, or other professional advice. AI Output is not a substitute for qualified professional judgement.  \r
- You are solely responsible for how AI features are configured and used in your workspace (including prompts, knowledge, tools, guardrails, approvals, and automations), and for all consequences of that use — including automated replies to your customers.  \r
- Divvylore does not warrant that AI Output is accurate, unique, non-infringing, fit for a particular purpose, or free of third-party claims.  \r
- To provide AI features we may transmit your prompts and selected inputs to third-party model providers. Features that call those providers are subject to their availability, limitations, and terms; Divvylore is not liable for their errors or unavailability.  \r
- To the maximum extent permitted by law, Divvylore has **no liability** for any loss, claim, cost, or damage arising from AI Output or from your reliance on it, including **loss of profits, revenue, business, customers, goodwill, data, opportunity, or anticipated savings**.\r
\r
---\r
\r
## 7. Third-party integrations and platform APIs\r
\r
Optional integrations (for example Google services for keyword research, social publishing connectors, payment processors, or hosting providers) are provided by third parties.\r
\r
- Enabling an integration authorises Divvylore to exchange data with that provider as needed for the feature.  \r
- Your use of each integration is subject to that provider’s terms and privacy policy.  \r
- **Google.** Where you use Google Keyword Planner or other Google API features through the Services, you also agree to applicable Google terms, including the [Google APIs Terms of Service](https://developers.google.com/terms) and Google’s policies for the relevant product. Divvylore’s use of Google user data (if any) is limited to providing or improving user-facing features you enable, consistent with Google’s Limited Use requirements where they apply.  \r
- **Social and messaging platforms.** Publishing or connecting accounts is also subject to each platform’s terms (for example Meta, LinkedIn, X, TikTok, YouTube, and others you connect). You can revoke access from your Divvylore integrations settings or the platform’s permission pages.  \r
- **Your use of Third-Party Services is at your own risk.** Divvylore does not endorse Third-Party Services and expressly disclaims all warranties and liability for them, including outages, policy changes, app-review decisions, account suspensions, rate-limit changes, content moderation decisions, data handled by those providers, or inability to use them.  \r
- Where a third-party platform changes its API, terminates a developer programme, or modifies its terms in a way that affects the Services, we may modify or discontinue the affected integration without liability.  \r
- You must maintain any developer approvals, business accounts, or permissions those platforms require. Warranty claims and disputes about Third-Party Services must be directed to those providers.\r
\r
---\r
\r
## 8. Intellectual property and feedback\r
\r
- The Services, including software, designs, documentation, trademarks, and branding, are owned by Divvylore or its licensors.  \r
- Except for the limited right to use the Services under these Terms, no rights are granted.  \r
- Feedback you provide may be used by Divvylore without obligation or compensation to you.  \r
- If you believe content on the Services infringes your intellectual-property rights, contact [hello@divvylore.com](mailto:hello@divvylore.com) with sufficient detail for us to investigate.\r
\r
---\r
\r
## 9. Confidentiality\r
\r
Each party may receive non-public information from the other (“**Confidential Information**”). The receiving party will use it only to perform under these Terms and protect it with reasonable care. Confidential Information does not include information that is public, independently developed, or rightfully received from another source without duty of confidentiality. Compelled disclosures are permitted with notice where legally allowed.\r
\r
---\r
\r
## 10. Privacy and data protection\r
\r
Our [Privacy Policy](/privacy-policy) describes how we process personal information. You agree to:\r
\r
- Provide required notices to your end users (for example website visitors using your chat widget)  \r
- Obtain any consents required by law  \r
- Process personal data in compliance with applicable law (including, where relevant, GDPR/UK GDPR, India’s Digital Personal Data Protection Act, and similar laws)  \r
- Not instruct Divvylore to process data in a way that would cause Divvylore to violate applicable law  \r
\r
For end-user data you control, you are the controller (or equivalent) and Divvylore acts as processor (or equivalent) as described in the Privacy Policy. Enterprise customers may request a Data Processing Addendum where required; contact [hello@divvylore.com](mailto:hello@divvylore.com).\r
\r
---\r
\r
## 11. Warranties and disclaimers\r
\r
EXCEPT AS EXPRESSLY STATED IN A SIGNED WRITTEN AGREEMENT WITH DIVVYLORE, THE SERVICES AND ALL RELATED COMPONENTS, INFORMATION, AND AI OUTPUTS ARE PROVIDED ON AN **“AS IS”** AND **“AS AVAILABLE”** BASIS WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, DIVVYLORE EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.\r
\r
WITHOUT LIMITING THE FOREGOING, DIVVYLORE DOES NOT WARRANT THAT: (A) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (B) AI AGENTS, MODELS, OR WORKFLOWS WILL PRODUCE ACCURATE, COMPLETE, OR RELIABLE RESULTS; (C) DEFECTS WILL BE CORRECTED; (D) THE SERVICES OR AI OUTPUTS WILL MEET YOUR REQUIREMENTS OR ACHIEVE ANY PARTICULAR BUSINESS OUTCOME; OR (E) SCHEDULED PUBLISHING, INTEGRATIONS, OR THIRD-PARTY APIS WILL SUCCEED ON ANY PARTICULAR TIMELINE.\r
\r
SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OF CERTAIN WARRANTIES; IN THAT CASE, THE FOREGOING DISCLAIMERS APPLY TO THE FULLEST EXTENT PERMITTED BY LAW.\r
\r
---\r
\r
## 12. Limitation of liability\r
\r
TO THE MAXIMUM EXTENT PERMITTED BY LAW, AND NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THESE TERMS:\r
\r
**A. No consequential or business damages.** IN NO EVENT SHALL DIVVYLORE OR ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, BUSINESS, BUSINESS OPPORTUNITY, OR ANTICIPATED SAVINGS, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICES — WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE — EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS INCLUDES DAMAGES ARISING FROM USE OF, ACCESS TO, INTERRUPTION OF, DELAY IN, OR INABILITY TO USE THE SERVICES, COST OF SUBSTITUTE SERVICES, BUSINESS INTERRUPTION, OR SYSTEM FAILURE.\r
\r
**B. No liability for AI outputs.** WITHOUT LIMITING SECTION 12(A), DIVVYLORE WILL HAVE **NO LIABILITY** FOR ANY CLAIM, LOSS, OR DAMAGE ARISING FROM OR RELATED TO: (I) INCORRECT, INCOMPLETE, OR MISLEADING AI OUTPUT OR AI-ASSISTED ACTIONS; (II) YOUR OR YOUR END USERS’ RELIANCE ON AI AGENTS OR OUTPUTS; OR (III) ANY BUSINESS, FINANCIAL, REPUTATIONAL, OR OPERATIONAL HARM ALLEGEDLY CAUSED BY AI FEATURES.\r
\r
**C. Cap on liability.** THE AGGREGATE LIABILITY OF DIVVYLORE ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL FEES ACTUALLY PAID BY YOU TO DIVVYLORE FOR THE SERVICES IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, AND (B) ONE HUNDRED U.S. DOLLARS (USD 100) OR LOCAL EQUIVALENT.\r
\r
**D. Exceptions.** NOTHING IN THESE TERMS EXCLUDES OR LIMITS LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW (INCLUDING LIABILITY FOR FRAUD OR FRAUDULENT MISREPRESENTATION, OR FOR DEATH OR PERSONAL INJURY CAUSED BY NEGLIGENCE WHERE SUCH LIMITATION IS PROHIBITED).\r
\r
**E. Basis of the bargain.** THESE LIMITATIONS ARE AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN YOU AND DIVVYLORE AND APPLY EVEN IF ANY REMEDY FAILS OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN THAT CASE, OUR LIABILITY IS LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW.\r
\r
---\r
\r
## 13. Indemnification\r
\r
You will defend, indemnify, and hold harmless Divvylore and its affiliates, officers, and employees from and against any claims, damages, losses, and expenses (including reasonable legal fees) arising from or related to: (a) Customer Content; (b) your use of the Services (including AI agents and workflows) in violation of these Terms or law; (c) your end users’ use of your deployments; (d) your misuse of third-party integrations; (e) your failure to provide required notices or obtain consents from end users; or (f) any claim that AI-generated or AI-assisted content you publish, send, or act upon infringes rights or causes harm to a third party.\r
\r
---\r
\r
## 14. Suspension and termination\r
\r
- You may stop using the Services and request account closure subject to plan terms and the Refund Policy.  \r
- We may suspend or terminate access for non-payment, security risk, legal requirements, or material breach.  \r
- Upon termination, your right to access the Services ends. We may delete Customer Content after a reasonable period, subject to legal retention needs and our Privacy Policy.  \r
- Sections that by nature should survive (including IP, confidentiality, disclaimers, liability limits, indemnity, governing law, and this survival clause) will survive termination.\r
\r
---\r
\r
## 15. Export, sanctions, and force majeure\r
\r
- You must comply with applicable export control and sanctions laws. You may not use the Services if you are prohibited under those laws.  \r
- We are not liable for delay or failure caused by events beyond our reasonable control, including natural disasters, war, terrorism, labour disputes, internet or cloud-provider failures, power outages, government actions, or third-party platform outages.\r
\r
---\r
\r
## 16. Changes to the Terms\r
\r
We may update these Terms from time to time. We will post the updated Terms with a new “Last updated” date and, for material changes, provide additional notice where appropriate (for example email or in-product notice). Continued use after the effective date constitutes acceptance. If you do not agree, you must stop using the Services and may request a refund under the Refund Policy where applicable.\r
\r
---\r
\r
## 17. Governing law and disputes\r
\r
These Terms are governed by the laws of **India**, without regard to conflict-of-law rules. Subject to mandatory consumer protections that cannot be waived, courts in India will have exclusive jurisdiction, except that Divvylore may seek injunctive or equitable relief in any jurisdiction to protect its intellectual property, Confidential Information, or security.\r
\r
Before filing a formal claim, you agree to contact us at [hello@divvylore.com](mailto:hello@divvylore.com) and attempt in good faith to resolve the dispute informally within thirty (30) days.\r
\r
---\r
\r
## 18. Miscellaneous\r
\r
- These Terms, together with the Privacy Policy, Refund Policy, and any signed order form or enterprise agreement, are the entire agreement regarding the Services and supersede prior conflicting terms for the same subject. If a signed enterprise agreement conflicts, that agreement controls for the conflicting subject.  \r
- If any provision is unenforceable, the remainder remains in effect.  \r
- Failure to enforce a provision is not a waiver.  \r
- You may not assign these Terms without our consent; we may assign them to an affiliate or in connection with a corporate transaction.  \r
- Notices may be sent to your account email or posted in the Services; legal notices to us: [hello@divvylore.com](mailto:hello@divvylore.com).  \r
- Headings are for convenience only.  \r
- The English version of these Terms controls if translations conflict.\r
\r
---\r
\r
## 19. Contact\r
\r
**Email:** [hello@divvylore.com](mailto:hello@divvylore.com)  \r
**Web:** [https://divvylore.com](https://divvylore.com)\r
\r
---\r
\r
*Have qualified counsel confirm legal entity name, registered address, and any jurisdiction-specific consumer rules before relying on these Terms for regulatory filings or enterprise contracting.*\r
`;function D1(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Sn(e){let t=D1(e);return t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t}function z1(e){const t=e.replace(/\r\n/g,`
`).split(`
`),n=[];let r=0,o=!1,i=!1,l=!1;const a=()=>{o&&(n.push("</ul>"),o=!1),i&&(n.push("</ol>"),i=!1)},s=()=>{l&&(n.push("</tbody></table>"),l=!1)};for(;r<t.length;){const f=t[r].trim();if(!f){a(),s(),r+=1;continue}if(f==="---"){a(),s(),n.push("<hr />"),r+=1;continue}const p=/^(#{1,3})\s+(.+)$/.exec(f);if(p){a(),s();const v=p[1].length,w=p[2].toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-");n.push(`<h${v} id="${w}">${Sn(p[2])}</h${v}>`),r+=1;continue}if(f.startsWith("|")&&f.endsWith("|")){a();const v=f.slice(1,-1).split("|").map(E=>E.trim());if(v.every(E=>/^:?-+:?$/.test(E)||E==="")){r+=1;continue}l||(n.push("<table><tbody>"),l=!0),n.push(`<tr>${v.map(E=>`<td>${Sn(E)}</td>`).join("")}</tr>`),r+=1;continue}s();const g=/^[-*]\s+(.+)$/.exec(f);if(g){i&&(n.push("</ol>"),i=!1),o||(n.push("<ul>"),o=!0),n.push(`<li>${Sn(g[1])}</li>`),r+=1;continue}const y=/^\d+\.\s+(.+)$/.exec(f);if(y){o&&(n.push("</ul>"),o=!1),i||(n.push("<ol>"),i=!0),n.push(`<li>${Sn(y[1])}</li>`),r+=1;continue}if(a(),f.startsWith("*")&&f.endsWith("*")&&!f.startsWith("**")){n.push(`<p><em>${Sn(f.slice(1,-1))}</em></p>`),r+=1;continue}n.push(`<p>${Sn(f)}</p>`),r+=1}return a(),s(),n.join(`
`)}const $1=x.main`
  max-width: 820px;
  margin: 0 auto;
  padding: 3.5rem 1.5rem 5rem;
  color: #1a1f2c;
  line-height: 1.65;

  h1 {
    font-size: clamp(1.75rem, 3vw, 2.35rem);
    line-height: 1.2;
    margin: 0 0 1rem;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 1.35rem;
    margin: 2.25rem 0 0.75rem;
    letter-spacing: -0.01em;
  }

  h3 {
    font-size: 1.1rem;
    margin: 1.5rem 0 0.5rem;
  }

  p {
    margin: 0 0 0.9rem;
  }

  ul,
  ol {
    margin: 0 0 1rem 1.25rem;
    padding: 0;
  }

  li {
    margin-bottom: 0.35rem;
  }

  a {
    color: #1f4fd6;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  hr {
    border: 0;
    border-top: 1px solid #e4e7ef;
    margin: 1.75rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 0 1.25rem;
    font-size: 0.95rem;
  }

  td {
    border: 1px solid #e4e7ef;
    padding: 0.55rem 0.75rem;
    vertical-align: top;
  }

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.9em;
    background: #f3f5f9;
    padding: 0.1em 0.35em;
    border-radius: 4px;
  }

  em {
    color: #4a5160;
  }
`,M1=x.a`
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #4a5160;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    color: #1f4fd6;
  }
`,U1={privacy:O1,terms:_1,refund:L1},Os=({document:e})=>{const t=U1[e],n=N.useMemo(()=>z1(t),[t]);return d.jsxs($1,{children:[d.jsx(M1,{href:"/",children:"← Back to Divvylore"}),d.jsx("article",{dangerouslySetInnerHTML:{__html:n}})]})},F1=()=>d.jsx(Os,{document:"privacy"}),W1=()=>d.jsx(Os,{document:"terms"}),B1=()=>d.jsx(Os,{document:"refund"}),H1=xv`
    :root {
        --bg-page: #f5f3ee;
        --bg-elevated: #ffffff;
        --bg-soft: #efece4;
        --bg-ink: #0a0d14;
        --text-primary: #0c1322;
        --text-secondary: #4b556b;
        --text-muted: #6c7891;
        --brand: #1f3df0;
        --brand-strong: #1a31bc;
        --line: rgba(14, 22, 45, 0.09);
        --line-strong: rgba(14, 22, 45, 0.16);
    }

    html,
    body,
    a,
    button,
    input,
    textarea {
        font-family: 'Manrope', sans-serif;
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
        font-family: 'Space Grotesk', sans-serif;
        margin: 0;
        color: var(--text-primary);
        letter-spacing: -0.015em;
    }

    p {
        line-height: 1.65;
        letter-spacing: 0.005em;
        color: var(--text-secondary);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ::selection {
        background: rgba(31, 61, 240, 0.18);
        color: var(--text-primary);
    }

    @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
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
`,V1=()=>d.jsxs(N.Suspense,{fallback:null,children:[d.jsx(H1,{}),d.jsx(Hv,{}),d.jsxs(qg,{children:[d.jsx(Jt,{path:"/",element:d.jsx(Sc,{})}),d.jsx(Jt,{path:"/home",element:d.jsx(Sc,{})}),d.jsx(Jt,{path:"/privacy-policy",element:d.jsx(F1,{})}),d.jsx(Jt,{path:"/terms-and-conditions",element:d.jsx(W1,{})}),d.jsx(Jt,{path:"/refund-policy",element:d.jsx(B1,{})}),d.jsx(Jt,{path:"*",element:d.jsx(Gg,{to:"/",replace:!0})})]}),d.jsx(bv,{})]}),G1=()=>d.jsx(Xg,{children:d.jsx(V1,{})}),Ip=document.getElementById("root");if(!Ip)throw new Error("Root element not found");qf(Ip).render(d.jsx(G1,{}));
