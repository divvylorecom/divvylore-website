function Pp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function jp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},pl={},kc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),_p=Symbol.for("react.portal"),Np=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),$p=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Tp=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),Ip=Symbol.for("react.suspense"),Op=Symbol.for("react.memo"),Ap=Symbol.for("react.lazy"),Ta=Symbol.iterator;function Mp(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,Ec={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=Ec,this.updater=n||Sc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pc(){}Pc.prototype=Kn.prototype;function zs(e,t,n){this.props=e,this.context=t,this.refs=Ec,this.updater=n||Sc}var $s=zs.prototype=new Pc;$s.constructor=zs;Cc($s,Kn.prototype);$s.isPureReactComponent=!0;var La=Array.isArray,jc=Object.prototype.hasOwnProperty,Rs={current:null},_c={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)jc.call(t,r)&&!_c.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Gr,type:e,key:l,ref:o,props:i,_owner:Rs.current}}function Fp(e,t){return{$$typeof:Gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ts(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function Dp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ia=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dp(""+e.key):t.toString(36)}function Si(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gr:case _p:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ml(o,0):r,La(i)?(n="",e!=null&&(n=e.replace(Ia,"$&/")+"/"),Si(i,t,n,"",function(c){return c})):i!=null&&(Ts(i)&&(i=Fp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ia,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",La(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Ml(l,s);o+=Si(l,t,n,a,i)}else if(a=Mp(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Ml(l,s++),o+=Si(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ri(e,t,n){if(e==null)return e;var r=[],i=0;return Si(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Up(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Ci={transition:null},Bp={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:Rs};function zc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ri,forEach:function(e,t,n){ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ri(e,function(){t++}),t},toArray:function(e){return ri(e,function(t){return t})||[]},only:function(e){if(!Ts(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Kn;O.Fragment=Np;O.Profiler=$p;O.PureComponent=zs;O.StrictMode=zp;O.Suspense=Ip;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bp;O.act=zc;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Rs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)jc.call(t,a)&&!_c.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Gr,type:e.type,key:i,ref:l,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:Tp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rp,_context:e},e.Consumer=e};O.createElement=Nc;O.createFactory=function(e){var t=Nc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Lp,render:e}};O.isValidElement=Ts;O.lazy=function(e){return{$$typeof:Ap,_payload:{_status:-1,_result:e},_init:Up}};O.memo=function(e,t){return{$$typeof:Op,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};O.unstable_act=zc;O.useCallback=function(e,t){return ke.current.useCallback(e,t)};O.useContext=function(e){return ke.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};O.useEffect=function(e,t){return ke.current.useEffect(e,t)};O.useId=function(){return ke.current.useId()};O.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ke.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};O.useRef=function(e){return ke.current.useRef(e)};O.useState=function(e){return ke.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ke.current.useTransition()};O.version="18.3.1";kc.exports=O;var N=kc.exports;const Re=jp(N),Wp=Pp({__proto__:null,default:Re},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp=N,Hp=Symbol.for("react.element"),Vp=Symbol.for("react.fragment"),Qp=Object.prototype.hasOwnProperty,Gp=bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yp={key:!0,ref:!0,__self:!0,__source:!0};function $c(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Qp.call(t,r)&&!Yp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Hp,type:e,key:l,ref:o,props:i,_owner:Gp.current}}pl.Fragment=Vp;pl.jsx=$c;pl.jsxs=$c;wc.exports=pl;var d=wc.exports,Rc={exports:{}},Oe={},Tc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var T=z.length;z.push(R);e:for(;0<T;){var B=T-1>>>1,M=z[B];if(0<i(M,R))z[B]=R,z[T]=M,T=B;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],T=z.pop();if(T!==R){z[0]=T;e:for(var B=0,M=z.length,le=M>>>1;B<le;){var Z=2*(B+1)-1,te=z[Z],Ne=Z+1,Me=z[Ne];if(0>i(te,T))Ne<M&&0>i(Me,te)?(z[B]=Me,z[Ne]=T,B=Ne):(z[B]=te,z[Z]=T,B=Z);else if(Ne<M&&0>i(Me,T))z[B]=Me,z[Ne]=T,B=Ne;else break e}}return R}function i(z,R){var T=z.sortIndex-R.sortIndex;return T!==0?T:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],c=[],h=1,f=null,g=3,y=!1,v=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=z)r(c),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(c)}}function k(z){if(x=!1,m(z),!v)if(n(a)!==null)v=!0,wt(E);else{var R=n(c);R!==null&&Gt(k,R.startTime-z)}}function E(z,R){v=!1,x&&(x=!1,p(j),j=-1),y=!0;var T=g;try{for(m(R),f=n(a);f!==null&&(!(f.expirationTime>R)||z&&!Q());){var B=f.callback;if(typeof B=="function"){f.callback=null,g=f.priorityLevel;var M=B(f.expirationTime<=R);R=e.unstable_now(),typeof M=="function"?f.callback=M:f===n(a)&&r(a),m(R)}else r(a);f=n(a)}if(f!==null)var le=!0;else{var Z=n(c);Z!==null&&Gt(k,Z.startTime-R),le=!1}return le}finally{f=null,g=T,y=!1}}var _=!1,S=null,j=-1,D=5,L=-1;function Q(){return!(e.unstable_now()-L<D)}function Ve(){if(S!==null){var z=e.unstable_now();L=z;var R=!0;try{R=S(!0,z)}finally{R?q():(_=!1,S=null)}}else _=!1}var q;if(typeof u=="function")q=function(){u(Ve)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Qt=Qe.port2;Qe.port1.onmessage=Ve,q=function(){Qt.postMessage(null)}}else q=function(){P(Ve,0)};function wt(z){S=z,_||(_=!0,q())}function Gt(z,R){j=P(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,wt(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var T=g;g=R;try{return z()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=g;g=z;try{return R()}finally{g=T}},e.unstable_scheduleCallback=function(z,R,T){var B=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?B+T:B):T=B,z){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=T+M,z={id:h++,callback:R,priorityLevel:z,startTime:T,expirationTime:M,sortIndex:-1},T>B?(z.sortIndex=T,t(c,z),n(a)===null&&z===n(c)&&(x?(p(j),j=-1):x=!0,Gt(k,T-B))):(z.sortIndex=M,t(a,z),v||y||(v=!0,wt(E))),z},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(z){var R=g;return function(){var T=g;g=R;try{return z.apply(this,arguments)}finally{g=T}}}})(Lc);Tc.exports=Lc;var Kp=Tc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=N,Ie=Kp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,jr={};function hn(e,t){Dn(e,t),Dn(e+"Capture",t)}function Dn(e,t){for(jr[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=Object.prototype.hasOwnProperty,qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa={},Aa={};function Zp(e){return jo.call(Aa,e)?!0:jo.call(Oa,e)?!1:qp.test(e)?Aa[e]=!0:(Oa[e]=!0,!1)}function Jp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eh(e,t,n,r){if(t===null||typeof t>"u"||Jp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ls=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ls,Is);pe[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ls,Is);pe[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ls,Is);pe[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Os(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(eh(t,n,i,r)&&(n=null),r||i===null?Zp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ii=Symbol.for("react.element"),wn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),As=Symbol.for("react.strict_mode"),_o=Symbol.for("react.profiler"),Oc=Symbol.for("react.provider"),Ac=Symbol.for("react.context"),Ms=Symbol.for("react.forward_ref"),No=Symbol.for("react.suspense"),zo=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Mc=Symbol.for("react.offscreen"),Ma=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Ma&&e[Ma]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Fl;function ur(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Dl=!1;function Ul(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function th(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function $o(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case wn:return"Portal";case _o:return"Profiler";case As:return"StrictMode";case No:return"Suspense";case zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ac:return(e.displayName||"Context")+".Consumer";case Oc:return(e._context.displayName||"Context")+".Provider";case Ms:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fs:return t=e.displayName||null,t!==null?t:$o(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return $o(e(t))}catch{}}return null}function nh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $o(t);case 8:return t===As?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rh(e){var t=Fc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=rh(e))}function Dc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ro(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uc(e,t){t=t.checked,t!=null&&Os(e,"checked",t,!1)}function To(e,t){Uc(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Lo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Lo(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Da(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Lo(e,t,n){(t!=="number"||Bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(cr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function Bc(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ba(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ih=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){ih.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function Hc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function Vc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lh=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(lh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Mo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fo=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Do=null,Ln=null,In=null;function Wa(e){if(e=Xr(e)){if(typeof Do!="function")throw Error(C(280));var t=e.stateNode;t&&(t=vl(t),Do(e.stateNode,e.type,t))}}function Qc(e){Ln?In?In.push(e):In=[e]:Ln=e}function Gc(){if(Ln){var e=Ln,t=In;if(In=Ln=null,Wa(e),t)for(e=0;e<t.length;e++)Wa(t[e])}}function Yc(e,t){return e(t)}function Kc(){}var Bl=!1;function Xc(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return Yc(e,t,n)}finally{Bl=!1,(Ln!==null||In!==null)&&(Kc(),Gc())}}function Nr(e,t){var n=e.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Uo=!1;if(ht)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Uo=!1}function oh(e,t,n,r,i,l,o,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var gr=!1,Wi=null,bi=!1,Bo=null,sh={onError:function(e){gr=!0,Wi=e}};function ah(e,t,n,r,i,l,o,s,a){gr=!1,Wi=null,oh.apply(sh,arguments)}function uh(e,t,n,r,i,l,o,s,a){if(ah.apply(this,arguments),gr){if(gr){var c=Wi;gr=!1,Wi=null}else throw Error(C(198));bi||(bi=!0,Bo=c)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ba(e){if(mn(e)!==e)throw Error(C(188))}function ch(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return ba(i),e;if(l===r)return ba(i),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Zc(e){return e=ch(e),e!==null?Jc(e):null}function Jc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jc(e);if(t!==null)return t;e=e.sibling}return null}var ef=Ie.unstable_scheduleCallback,Ha=Ie.unstable_cancelCallback,fh=Ie.unstable_shouldYield,dh=Ie.unstable_requestPaint,ee=Ie.unstable_now,ph=Ie.unstable_getCurrentPriorityLevel,Us=Ie.unstable_ImmediatePriority,tf=Ie.unstable_UserBlockingPriority,Hi=Ie.unstable_NormalPriority,hh=Ie.unstable_LowPriority,nf=Ie.unstable_IdlePriority,hl=null,ot=null;function mh(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:vh,gh=Math.log,yh=Math.LN2;function vh(e){return e>>>=0,e===0?32:31-(gh(e)/yh|0)|0}var si=64,ai=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=fr(s):(l&=o,l!==0&&(r=fr(l)))}else o=n&~i,o!==0?r=fr(o):l!==0&&(r=fr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function xh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Je(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=xh(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function Wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rf(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function kh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function lf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var of,Ws,sf,af,uf,bo=!1,ui=[],Tt=null,Lt=null,It=null,zr=new Map,$r=new Map,jt=[],Sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Va(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function nr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Xr(t),t!==null&&Ws(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ch(e,t,n,r,i){switch(t){case"focusin":return Tt=nr(Tt,e,t,n,r,i),!0;case"dragenter":return Lt=nr(Lt,e,t,n,r,i),!0;case"mouseover":return It=nr(It,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return zr.set(l,nr(zr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,$r.set(l,nr($r.get(l)||null,e,t,n,r,i)),!0}return!1}function cf(e){var t=en(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=qc(n),t!==null){e.blockedOn=t,uf(e.priority,function(){sf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ho(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fo=r,n.target.dispatchEvent(r),Fo=null}else return t=Xr(n),t!==null&&Ws(t),e.blockedOn=n,!1;t.shift()}return!0}function Qa(e,t,n){Ei(e)&&n.delete(t)}function Eh(){bo=!1,Tt!==null&&Ei(Tt)&&(Tt=null),Lt!==null&&Ei(Lt)&&(Lt=null),It!==null&&Ei(It)&&(It=null),zr.forEach(Qa),$r.forEach(Qa)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,bo||(bo=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Eh)))}function Rr(e){function t(i){return rr(i,e)}if(0<ui.length){rr(ui[0],e);for(var n=1;n<ui.length;n++){var r=ui[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&rr(Tt,e),Lt!==null&&rr(Lt,e),It!==null&&rr(It,e),zr.forEach(t),$r.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)cf(n),n.blockedOn===null&&jt.shift()}var On=vt.ReactCurrentBatchConfig,Qi=!0;function Ph(e,t,n,r){var i=U,l=On.transition;On.transition=null;try{U=1,bs(e,t,n,r)}finally{U=i,On.transition=l}}function jh(e,t,n,r){var i=U,l=On.transition;On.transition=null;try{U=4,bs(e,t,n,r)}finally{U=i,On.transition=l}}function bs(e,t,n,r){if(Qi){var i=Ho(e,t,n,r);if(i===null)Zl(e,t,r,Gi,n),Va(e,r);else if(Ch(i,e,t,n,r))r.stopPropagation();else if(Va(e,r),t&4&&-1<Sh.indexOf(e)){for(;i!==null;){var l=Xr(i);if(l!==null&&of(l),l=Ho(e,t,n,r),l===null&&Zl(e,t,r,Gi,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var Gi=null;function Ho(e,t,n,r){if(Gi=null,e=Ds(r),e=en(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ph()){case Us:return 1;case tf:return 4;case Hi:case hh:return 16;case nf:return 536870912;default:return 16}default:return 16}}var Nt=null,Hs=null,Pi=null;function df(){if(Pi)return Pi;var e,t=Hs,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Pi=i.slice(e,1<r?1-r:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function Ga(){return!1}function Ae(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ci:Ga,this.isPropagationStopped=Ga,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=Ae(Xn),Kr=X({},Xn,{view:0,detail:0}),_h=Ae(Kr),bl,Hl,ir,ml=X({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(bl=e.screenX-ir.screenX,Hl=e.screenY-ir.screenY):Hl=bl=0,ir=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),Ya=Ae(ml),Nh=X({},ml,{dataTransfer:0}),zh=Ae(Nh),$h=X({},Kr,{relatedTarget:0}),Vl=Ae($h),Rh=X({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Th=Ae(Rh),Lh=X({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ih=Ae(Lh),Oh=X({},Xn,{data:0}),Ka=Ae(Oh),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fh[e])?!!t[e]:!1}function Qs(){return Dh}var Uh=X({},Kr,{key:function(e){if(e.key){var t=Ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qs,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bh=Ae(Uh),Wh=X({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xa=Ae(Wh),bh=X({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qs}),Hh=Ae(bh),Vh=X({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qh=Ae(Vh),Gh=X({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yh=Ae(Gh),Kh=[9,13,27,32],Gs=ht&&"CompositionEvent"in window,yr=null;ht&&"documentMode"in document&&(yr=document.documentMode);var Xh=ht&&"TextEvent"in window&&!yr,pf=ht&&(!Gs||yr&&8<yr&&11>=yr),qa=" ",Za=!1;function hf(e,t){switch(e){case"keyup":return Kh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function qh(e,t){switch(e){case"compositionend":return mf(t);case"keypress":return t.which!==32?null:(Za=!0,qa);case"textInput":return e=t.data,e===qa&&Za?null:e;default:return null}}function Zh(e,t){if(Sn)return e==="compositionend"||!Gs&&hf(e,t)?(e=df(),Pi=Hs=Nt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pf&&t.locale!=="ko"?null:t.data;default:return null}}var Jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jh[e.type]:t==="textarea"}function gf(e,t,n,r){Qc(r),t=Yi(t,"onChange"),0<t.length&&(n=new Vs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,Tr=null;function em(e){_f(e,0)}function gl(e){var t=Pn(e);if(Dc(t))return e}function tm(e,t){if(e==="change")return t}var yf=!1;if(ht){var Ql;if(ht){var Gl="oninput"in document;if(!Gl){var eu=document.createElement("div");eu.setAttribute("oninput","return;"),Gl=typeof eu.oninput=="function"}Ql=Gl}else Ql=!1;yf=Ql&&(!document.documentMode||9<document.documentMode)}function tu(){vr&&(vr.detachEvent("onpropertychange",vf),Tr=vr=null)}function vf(e){if(e.propertyName==="value"&&gl(Tr)){var t=[];gf(t,Tr,e,Ds(e)),Xc(em,t)}}function nm(e,t,n){e==="focusin"?(tu(),vr=t,Tr=n,vr.attachEvent("onpropertychange",vf)):e==="focusout"&&tu()}function rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Tr)}function im(e,t){if(e==="click")return gl(t)}function lm(e,t){if(e==="input"||e==="change")return gl(t)}function om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:om;function Lr(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jo.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ru(e,t){var n=nu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wf(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sm(e){var t=wf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xf(n.ownerDocument.documentElement,n)){if(r!==null&&Ys(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ru(n,l);var o=ru(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var am=ht&&"documentMode"in document&&11>=document.documentMode,Cn=null,Vo=null,xr=null,Qo=!1;function iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qo||Cn==null||Cn!==Bi(r)||(r=Cn,"selectionStart"in r&&Ys(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Lr(xr,r)||(xr=r,r=Yi(Vo,"onSelect"),0<r.length&&(t=new Vs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},Yl={},kf={};ht&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function yl(e){if(Yl[e])return Yl[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kf)return Yl[e]=t[n];return e}var Sf=yl("animationend"),Cf=yl("animationiteration"),Ef=yl("animationstart"),Pf=yl("transitionend"),jf=new Map,lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){jf.set(e,t),hn(t,[e])}for(var Kl=0;Kl<lu.length;Kl++){var Xl=lu[Kl],um=Xl.toLowerCase(),cm=Xl[0].toUpperCase()+Xl.slice(1);bt(um,"on"+cm)}bt(Sf,"onAnimationEnd");bt(Cf,"onAnimationIteration");bt(Ef,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(Pf,"onTransitionEnd");Dn("onMouseEnter",["mouseout","mouseover"]);Dn("onMouseLeave",["mouseout","mouseover"]);Dn("onPointerEnter",["pointerout","pointerover"]);Dn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fm=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function ou(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uh(r,t,void 0,e),e.currentTarget=null}function _f(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;ou(i,s,c),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;ou(i,s,c),l=a}}}if(bi)throw e=Bo,bi=!1,Bo=null,e}function b(e,t){var n=t[qo];n===void 0&&(n=t[qo]=new Set);var r=e+"__bubble";n.has(r)||(Nf(t,e,2,!1),n.add(r))}function ql(e,t,n){var r=0;t&&(r|=4),Nf(n,e,r,t)}var di="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[di]){e[di]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(fm.has(n)||ql(n,!1,e),ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[di]||(t[di]=!0,ql("selectionchange",!1,t))}}function Nf(e,t,n,r){switch(ff(t)){case 1:var i=Ph;break;case 4:i=jh;break;default:i=bs}n=i.bind(null,t,n,e),i=void 0,!Uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=en(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Xc(function(){var c=l,h=Ds(n),f=[];e:{var g=jf.get(e);if(g!==void 0){var y=Vs,v=e;switch(e){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":y=Bh;break;case"focusin":v="focus",y=Vl;break;case"focusout":v="blur",y=Vl;break;case"beforeblur":case"afterblur":y=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Hh;break;case Sf:case Cf:case Ef:y=Th;break;case Pf:y=Qh;break;case"scroll":y=_h;break;case"wheel":y=Yh;break;case"copy":case"cut":case"paste":y=Ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Xa}var x=(t&4)!==0,P=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var u=c,m;u!==null;){m=u;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=Nr(u,p),k!=null&&x.push(Or(u,k,m)))),P)break;u=u.return}0<x.length&&(g=new y(g,v,null,n,h),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Fo&&(v=n.relatedTarget||n.fromElement)&&(en(v)||v[mt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?en(v):null,v!==null&&(P=mn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(x=Ya,k="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=Xa,k="onPointerLeave",p="onPointerEnter",u="pointer"),P=y==null?g:Pn(y),m=v==null?g:Pn(v),g=new x(k,u+"leave",y,n,h),g.target=P,g.relatedTarget=m,k=null,en(h)===c&&(x=new x(p,u+"enter",v,n,h),x.target=m,x.relatedTarget=P,k=x),P=k,y&&v)t:{for(x=y,p=v,u=0,m=x;m;m=yn(m))u++;for(m=0,k=p;k;k=yn(k))m++;for(;0<u-m;)x=yn(x),u--;for(;0<m-u;)p=yn(p),m--;for(;u--;){if(x===p||p!==null&&x===p.alternate)break t;x=yn(x),p=yn(p)}x=null}else x=null;y!==null&&su(f,g,y,x,!1),v!==null&&P!==null&&su(f,P,v,x,!0)}}e:{if(g=c?Pn(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var E=tm;else if(Ja(g))if(yf)E=lm;else{E=rm;var _=nm}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=im);if(E&&(E=E(e,c))){gf(f,E,n,h);break e}_&&_(e,g,c),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Lo(g,"number",g.value)}switch(_=c?Pn(c):window,e){case"focusin":(Ja(_)||_.contentEditable==="true")&&(Cn=_,Vo=c,xr=null);break;case"focusout":xr=Vo=Cn=null;break;case"mousedown":Qo=!0;break;case"contextmenu":case"mouseup":case"dragend":Qo=!1,iu(f,n,h);break;case"selectionchange":if(am)break;case"keydown":case"keyup":iu(f,n,h)}var S;if(Gs)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Sn?hf(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(pf&&n.locale!=="ko"&&(Sn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Sn&&(S=df()):(Nt=h,Hs="value"in Nt?Nt.value:Nt.textContent,Sn=!0)),_=Yi(c,j),0<_.length&&(j=new Ka(j,e,null,n,h),f.push({event:j,listeners:_}),S?j.data=S:(S=mf(n),S!==null&&(j.data=S)))),(S=Xh?qh(e,n):Zh(e,n))&&(c=Yi(c,"onBeforeInput"),0<c.length&&(h=new Ka("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=S))}_f(f,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Nr(e,n),l!=null&&r.unshift(Or(e,l,i)),l=Nr(e,t),l!=null&&r.push(Or(e,l,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function su(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Nr(n,l),a!=null&&o.unshift(Or(n,a,s))):i||(a=Nr(n,l),a!=null&&o.push(Or(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var dm=/\r\n?/g,pm=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(dm,`
`).replace(pm,"")}function pi(e,t,n){if(t=au(t),au(e)!==t&&n)throw Error(C(425))}function Ki(){}var Go=null,Yo=null;function Ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,hm=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,mm=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(e){return uu.resolve(null).then(e).catch(gm)}:Xo;function gm(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),lt="__reactFiber$"+qn,Ar="__reactProps$"+qn,mt="__reactContainer$"+qn,qo="__reactEvents$"+qn,ym="__reactListeners$"+qn,vm="__reactHandles$"+qn;function en(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cu(e);e!==null;){if(n=e[lt])return n;e=cu(e)}return t}e=n,n=e.parentNode}return null}function Xr(e){return e=e[lt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function vl(e){return e[Ar]||null}var Zo=[],jn=-1;function Ht(e){return{current:e}}function V(e){0>jn||(e.current=Zo[jn],Zo[jn]=null,jn--)}function W(e,t){jn++,Zo[jn]=e.current,e.current=t}var Wt={},ye=Ht(Wt),Pe=Ht(!1),an=Wt;function Un(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function Xi(){V(Pe),V(ye)}function fu(e,t,n){if(ye.current!==Wt)throw Error(C(168));W(ye,t),W(Pe,n)}function zf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,nh(e)||"Unknown",i));return X({},n,r)}function qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,an=ye.current,W(ye,e),W(Pe,Pe.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=zf(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,V(Pe),V(ye),W(ye,e)):V(Pe),W(Pe,n)}var ct=null,xl=!1,eo=!1;function $f(e){ct===null?ct=[e]:ct.push(e)}function xm(e){xl=!0,$f(e)}function Vt(){if(!eo&&ct!==null){eo=!0;var e=0,t=U;try{var n=ct;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,xl=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),ef(Us,Vt),i}finally{U=t,eo=!1}}return null}var _n=[],Nn=0,Zi=null,Ji=0,Fe=[],De=0,un=null,ft=1,dt="";function qt(e,t){_n[Nn++]=Ji,_n[Nn++]=Zi,Zi=e,Ji=t}function Rf(e,t,n){Fe[De++]=ft,Fe[De++]=dt,Fe[De++]=un,un=e;var r=ft;e=dt;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var l=32-Je(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ft=1<<32-Je(t)+i|n<<i|r,dt=l+e}else ft=1<<l|n<<i|r,dt=e}function Ks(e){e.return!==null&&(qt(e,1),Rf(e,1,0))}function Xs(e){for(;e===Zi;)Zi=_n[--Nn],_n[Nn]=null,Ji=_n[--Nn],_n[Nn]=null;for(;e===un;)un=Fe[--De],Fe[De]=null,dt=Fe[--De],Fe[De]=null,ft=Fe[--De],Fe[De]=null}var Le=null,Te=null,G=!1,Ze=null;function Tf(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Te=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Te=null,!0):!1;default:return!1}}function Jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function es(e){if(G){var t=Te;if(t){var n=t;if(!pu(e,t)){if(Jo(e))throw Error(C(418));t=Ot(n.nextSibling);var r=Le;t&&pu(e,t)?Tf(r,n):(e.flags=e.flags&-4097|2,G=!1,Le=e)}}else{if(Jo(e))throw Error(C(418));e.flags=e.flags&-4097|2,G=!1,Le=e}}}function hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function hi(e){if(e!==Le)return!1;if(!G)return hu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ko(e.type,e.memoizedProps)),t&&(t=Te)){if(Jo(e))throw Lf(),Error(C(418));for(;t;)Tf(e,t),t=Ot(t.nextSibling)}if(hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Le?Ot(e.stateNode.nextSibling):null;return!0}function Lf(){for(var e=Te;e;)e=Ot(e.nextSibling)}function Bn(){Te=Le=null,G=!1}function qs(e){Ze===null?Ze=[e]:Ze.push(e)}var wm=vt.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function If(e){function t(p,u){if(e){var m=p.deletions;m===null?(p.deletions=[u],p.flags|=16):m.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=Dt(p,u),p.index=0,p.sibling=null,p}function l(p,u,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<u?(p.flags|=2,u):m):(p.flags|=2,u)):(p.flags|=1048576,u)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,u,m,k){return u===null||u.tag!==6?(u=so(m,p.mode,k),u.return=p,u):(u=i(u,m),u.return=p,u)}function a(p,u,m,k){var E=m.type;return E===kn?h(p,u,m.props.children,k,m.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&mu(E)===u.type)?(k=i(u,m.props),k.ref=lr(p,u,m),k.return=p,k):(k=Li(m.type,m.key,m.props,null,p.mode,k),k.ref=lr(p,u,m),k.return=p,k)}function c(p,u,m,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=ao(m,p.mode,k),u.return=p,u):(u=i(u,m.children||[]),u.return=p,u)}function h(p,u,m,k,E){return u===null||u.tag!==7?(u=ln(m,p.mode,k,E),u.return=p,u):(u=i(u,m),u.return=p,u)}function f(p,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=so(""+u,p.mode,m),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ii:return m=Li(u.type,u.key,u.props,null,p.mode,m),m.ref=lr(p,null,u),m.return=p,m;case wn:return u=ao(u,p.mode,m),u.return=p,u;case Et:var k=u._init;return f(p,k(u._payload),m)}if(cr(u)||er(u))return u=ln(u,p.mode,m,null),u.return=p,u;mi(p,u)}return null}function g(p,u,m,k){var E=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,u,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ii:return m.key===E?a(p,u,m,k):null;case wn:return m.key===E?c(p,u,m,k):null;case Et:return E=m._init,g(p,u,E(m._payload),k)}if(cr(m)||er(m))return E!==null?null:h(p,u,m,k,null);mi(p,m)}return null}function y(p,u,m,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,s(u,p,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ii:return p=p.get(k.key===null?m:k.key)||null,a(u,p,k,E);case wn:return p=p.get(k.key===null?m:k.key)||null,c(u,p,k,E);case Et:var _=k._init;return y(p,u,m,_(k._payload),E)}if(cr(k)||er(k))return p=p.get(m)||null,h(u,p,k,E,null);mi(u,k)}return null}function v(p,u,m,k){for(var E=null,_=null,S=u,j=u=0,D=null;S!==null&&j<m.length;j++){S.index>j?(D=S,S=null):D=S.sibling;var L=g(p,S,m[j],k);if(L===null){S===null&&(S=D);break}e&&S&&L.alternate===null&&t(p,S),u=l(L,u,j),_===null?E=L:_.sibling=L,_=L,S=D}if(j===m.length)return n(p,S),G&&qt(p,j),E;if(S===null){for(;j<m.length;j++)S=f(p,m[j],k),S!==null&&(u=l(S,u,j),_===null?E=S:_.sibling=S,_=S);return G&&qt(p,j),E}for(S=r(p,S);j<m.length;j++)D=y(S,p,j,m[j],k),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?j:D.key),u=l(D,u,j),_===null?E=D:_.sibling=D,_=D);return e&&S.forEach(function(Q){return t(p,Q)}),G&&qt(p,j),E}function x(p,u,m,k){var E=er(m);if(typeof E!="function")throw Error(C(150));if(m=E.call(m),m==null)throw Error(C(151));for(var _=E=null,S=u,j=u=0,D=null,L=m.next();S!==null&&!L.done;j++,L=m.next()){S.index>j?(D=S,S=null):D=S.sibling;var Q=g(p,S,L.value,k);if(Q===null){S===null&&(S=D);break}e&&S&&Q.alternate===null&&t(p,S),u=l(Q,u,j),_===null?E=Q:_.sibling=Q,_=Q,S=D}if(L.done)return n(p,S),G&&qt(p,j),E;if(S===null){for(;!L.done;j++,L=m.next())L=f(p,L.value,k),L!==null&&(u=l(L,u,j),_===null?E=L:_.sibling=L,_=L);return G&&qt(p,j),E}for(S=r(p,S);!L.done;j++,L=m.next())L=y(S,p,j,L.value,k),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?j:L.key),u=l(L,u,j),_===null?E=L:_.sibling=L,_=L);return e&&S.forEach(function(Ve){return t(p,Ve)}),G&&qt(p,j),E}function P(p,u,m,k){if(typeof m=="object"&&m!==null&&m.type===kn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ii:e:{for(var E=m.key,_=u;_!==null;){if(_.key===E){if(E=m.type,E===kn){if(_.tag===7){n(p,_.sibling),u=i(_,m.props.children),u.return=p,p=u;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&mu(E)===_.type){n(p,_.sibling),u=i(_,m.props),u.ref=lr(p,_,m),u.return=p,p=u;break e}n(p,_);break}else t(p,_);_=_.sibling}m.type===kn?(u=ln(m.props.children,p.mode,k,m.key),u.return=p,p=u):(k=Li(m.type,m.key,m.props,null,p.mode,k),k.ref=lr(p,u,m),k.return=p,p=k)}return o(p);case wn:e:{for(_=m.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){n(p,u.sibling),u=i(u,m.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=ao(m,p.mode,k),u.return=p,p=u}return o(p);case Et:return _=m._init,P(p,u,_(m._payload),k)}if(cr(m))return v(p,u,m,k);if(er(m))return x(p,u,m,k);mi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(n(p,u.sibling),u=i(u,m),u.return=p,p=u):(n(p,u),u=so(m,p.mode,k),u.return=p,p=u),o(p)):n(p,u)}return P}var Wn=If(!0),Of=If(!1),el=Ht(null),tl=null,zn=null,Zs=null;function Js(){Zs=zn=tl=null}function ea(e){var t=el.current;V(el),e._currentValue=t}function ts(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){tl=e,Zs=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Zs!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(tl===null)throw Error(C(308));zn=e,tl.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var tn=null;function ta(e){tn===null?tn=[e]:tn.push(e)}function Af(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ta(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,ta(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bs(e,n)}}function gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nl(e,t,n,r){var i=e.updateQueue;Pt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?l=c:o.next=c,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(l!==null){var f=i.baseState;o=0,h=c=a=null,s=l;do{var g=s.lane,y=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,x=s;switch(g=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(y,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(y,f,g):v,g==null)break e;f=X({},f,g);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=y,a=f):h=h.next=y,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(a=f),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);fn|=o,e.lanes=o,e.memoizedState=f}}function yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var qr={},st=Ht(qr),Mr=Ht(qr),Fr=Ht(qr);function nn(e){if(e===qr)throw Error(C(174));return e}function ra(e,t){switch(W(Fr,t),W(Mr,e),W(st,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oo(t,e)}V(st),W(st,t)}function bn(){V(st),V(Mr),V(Fr)}function Ff(e){nn(Fr.current);var t=nn(st.current),n=Oo(t,e.type);t!==n&&(W(Mr,e),W(st,n))}function ia(e){Mr.current===e&&(V(st),V(Mr))}var Y=Ht(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function la(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var Ni=vt.ReactCurrentDispatcher,no=vt.ReactCurrentBatchConfig,cn=0,K=null,oe=null,ue=null,il=!1,wr=!1,Dr=0,km=0;function he(){throw Error(C(321))}function oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function sa(e,t,n,r,i,l){if(cn=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?Pm:jm,e=n(r,i),wr){l=0;do{if(wr=!1,Dr=0,25<=l)throw Error(C(301));l+=1,ue=oe=null,t.updateQueue=null,Ni.current=_m,e=n(r,i)}while(wr)}if(Ni.current=ll,t=oe!==null&&oe.next!==null,cn=0,ue=oe=K=null,il=!1,t)throw Error(C(300));return e}function aa(){var e=Dr!==0;return Dr=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?K.memoizedState=ue=e:ue=ue.next=e,ue}function be(){if(oe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?K.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(C(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?K.memoizedState=ue=e:ue=ue.next=e}return ue}function Ur(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,c=l;do{var h=c.lane;if((cn&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=f,o=r):a=a.next=f,K.lanes|=h,fn|=h}c=c.next}while(c!==null&&c!==l);a===null?o=r:a.next=s,nt(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,K.lanes|=l,fn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function io(e){var t=be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);nt(l,t.memoizedState)||(Ee=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Df(){}function Uf(e,t){var n=K,r=be(),i=t(),l=!nt(r.memoizedState,i);if(l&&(r.memoizedState=i,Ee=!0),r=r.queue,ua(bf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Br(9,Wf.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(C(349));cn&30||Bf(n,t,i)}return i}function Bf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wf(e,t,n,r){t.value=n,t.getSnapshot=r,Hf(t)&&Vf(e)}function bf(e,t,n){return n(function(){Hf(t)&&Vf(e)})}function Hf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Vf(e){var t=gt(e,1);t!==null&&et(t,e,1,-1)}function vu(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Em.bind(null,K,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qf(){return be().memoizedState}function zi(e,t,n,r){var i=it();K.flags|=e,i.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var i=be();r=r===void 0?null:r;var l=void 0;if(oe!==null){var o=oe.memoizedState;if(l=o.destroy,r!==null&&oa(r,o.deps)){i.memoizedState=Br(t,n,l,r);return}}K.flags|=e,i.memoizedState=Br(1|t,n,l,r)}function xu(e,t){return zi(8390656,8,e,t)}function ua(e,t){return wl(2048,8,e,t)}function Gf(e,t){return wl(4,2,e,t)}function Yf(e,t){return wl(4,4,e,t)}function Kf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xf(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,Kf.bind(null,t,e),n)}function ca(){}function qf(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zf(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jf(e,t,n){return cn&21?(nt(n,t)||(n=rf(),K.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function Sm(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=no.transition;no.transition={};try{e(!1),t()}finally{U=n,no.transition=r}}function ed(){return be().memoizedState}function Cm(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},td(e))nd(t,n);else if(n=Af(e,t,n,r),n!==null){var i=we();et(n,e,r,i),rd(n,t,r)}}function Em(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(td(e))nd(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,nt(s,o)){var a=t.interleaved;a===null?(i.next=i,ta(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Af(e,t,i,r),n!==null&&(i=we(),et(n,e,r,i),rd(n,t,r))}}function td(e){var t=e.alternate;return e===K||t!==null&&t===K}function nd(e,t){wr=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bs(e,n)}}var ll={readContext:We,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Pm={readContext:We,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,Kf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cm.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:vu,useDebugValue:ca,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=vu(!1),t=e[0];return e=Sm.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=it();if(G){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ce===null)throw Error(C(349));cn&30||Bf(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,xu(bf.bind(null,r,l,e),[e]),r.flags|=2048,Br(9,Wf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=it(),t=ce.identifierPrefix;if(G){var n=dt,r=ft;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=km++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jm={readContext:We,useCallback:qf,useContext:We,useEffect:ua,useImperativeHandle:Xf,useInsertionEffect:Gf,useLayoutEffect:Yf,useMemo:Zf,useReducer:ro,useRef:Qf,useState:function(){return ro(Ur)},useDebugValue:ca,useDeferredValue:function(e){var t=be();return Jf(t,oe.memoizedState,e)},useTransition:function(){var e=ro(Ur)[0],t=be().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:Uf,useId:ed,unstable_isNewReconciler:!1},_m={readContext:We,useCallback:qf,useContext:We,useEffect:ua,useImperativeHandle:Xf,useInsertionEffect:Gf,useLayoutEffect:Yf,useMemo:Zf,useReducer:io,useRef:Qf,useState:function(){return io(Ur)},useDebugValue:ca,useDeferredValue:function(e){var t=be();return oe===null?t.memoizedState=e:Jf(t,oe.memoizedState,e)},useTransition:function(){var e=io(Ur)[0],t=be().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:Uf,useId:ed,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ns(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),i=Ft(e),l=pt(r,i);l.payload=t,n!=null&&(l.callback=n),t=At(e,l,i),t!==null&&(et(t,e,i,r),_i(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),i=Ft(e),l=pt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=At(e,l,i),t!==null&&(et(t,e,i,r),_i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Ft(e),i=pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&(et(t,e,r,n),_i(t,e,r))}};function wu(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,l):!0}function id(e,t,n){var r=!1,i=Wt,l=t.contextType;return typeof l=="object"&&l!==null?l=We(l):(i=je(t)?an:ye.current,r=t.contextTypes,l=(r=r!=null)?Un(e,i):Wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function rs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},na(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=We(l):(l=je(t)?an:ye.current,i.context=Un(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ns(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&kl.enqueueReplaceState(i,i.state,null),nl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=th(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function lo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nm=typeof WeakMap=="function"?WeakMap:Map;function ld(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,hs=r),is(e,t)},n}function od(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){is(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){is(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Su(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Wm.bind(null,e,t,n),t.then(e,e))}function Cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Eu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e)}var zm=vt.ReactCurrentOwner,Ee=!1;function xe(e,t,n,r){t.child=e===null?Of(t,null,n,r):Wn(t,e.child,n,r)}function Pu(e,t,n,r,i){n=n.render;var l=t.ref;return An(t,i),r=sa(e,t,n,r,l,i),n=aa(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(G&&n&&Ks(t),t.flags|=1,xe(e,t,r,i),t.child)}function ju(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!va(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,sd(e,t,l,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(o,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Dt(l,r),e.ref=t.ref,e.return=t,t.child=e}function sd(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Lr(l,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,yt(e,t,i)}return ls(e,t,n,r,i)}function ad(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Rn,ze),ze|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Rn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,W(Rn,ze),ze|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,W(Rn,ze),ze|=r;return xe(e,t,i,n),t.child}function ud(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ls(e,t,n,r,i){var l=je(n)?an:ye.current;return l=Un(t,l),An(t,i),n=sa(e,t,n,r,l,i),r=aa(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(G&&r&&Ks(t),t.flags|=1,xe(e,t,n,i),t.child)}function _u(e,t,n,r,i){if(je(n)){var l=!0;qi(t)}else l=!1;if(An(t,i),t.stateNode===null)$i(e,t),id(t,n,r),rs(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=We(c):(c=je(n)?an:ye.current,c=Un(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&ku(t,o,r,c),Pt=!1;var g=t.memoizedState;o.state=g,nl(t,r,o,i),a=t.memoizedState,s!==r||g!==a||Pe.current||Pt?(typeof h=="function"&&(ns(t,n,h,r),a=t.memoizedState),(s=Pt||wu(t,n,s,r,g,a,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Mf(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ke(t.type,s),o.props=c,f=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=We(a):(a=je(n)?an:ye.current,a=Un(t,a));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||g!==a)&&ku(t,o,r,a),Pt=!1,g=t.memoizedState,o.state=g,nl(t,r,o,i);var v=t.memoizedState;s!==f||g!==v||Pe.current||Pt?(typeof y=="function"&&(ns(t,n,y,r),v=t.memoizedState),(c=Pt||wu(t,n,c,r,g,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return os(e,t,n,r,l,i)}function os(e,t,n,r,i,l){ud(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&du(t,n,!1),yt(e,t,l);r=t.stateNode,zm.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Wn(t,e.child,null,l),t.child=Wn(t,null,s,l)):xe(e,t,s,l),t.memoizedState=r.state,i&&du(t,n,!0),t.child}function cd(e){var t=e.stateNode;t.pendingContext?fu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fu(e,t.context,!1),ra(e,t.containerInfo)}function Nu(e,t,n,r,i){return Bn(),qs(i),t.flags|=256,xe(e,t,n,r),t.child}var ss={dehydrated:null,treeContext:null,retryLane:0};function as(e){return{baseLanes:e,cachePool:null,transitions:null}}function fd(e,t,n){var r=t.pendingProps,i=Y.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Y,i&1),e===null)return es(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=El(o,r,0,null),e=ln(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=as(n),t.memoizedState=ss,e):fa(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return $m(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Dt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=Dt(s,l):(l=ln(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?as(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ss,r}return l=e.child,e=l.sibling,r=Dt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fa(e,t){return t=El({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,n,r){return r!==null&&qs(r),Wn(t,e.child,null,n),e=fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $m(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=lo(Error(C(422))),gi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=El({mode:"visible",children:r.children},i,0,null),l=ln(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Wn(t,e.child,null,o),t.child.memoizedState=as(o),t.memoizedState=ss,l);if(!(t.mode&1))return gi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(C(419)),r=lo(l,r,void 0),gi(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ee||s){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,gt(e,i),et(r,e,i,-1))}return ya(),r=lo(Error(C(421))),gi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bm.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Te=Ot(i.nextSibling),Le=t,G=!0,Ze=null,e!==null&&(Fe[De++]=ft,Fe[De++]=dt,Fe[De++]=un,ft=e.id,dt=e.overflow,un=t),t=fa(t,r.children),t.flags|=4096,t)}function zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ts(e.return,t,n)}function oo(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function dd(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(xe(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zu(e,n,t);else if(e.tag===19)zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oo(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&rl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oo(t,!0,n,null,l);break;case"together":oo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $i(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rm(e,t,n){switch(t.tag){case 3:cd(t),Bn();break;case 5:Ff(t);break;case 1:je(t.type)&&qi(t);break;case 4:ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(el,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?fd(e,t,n):(W(Y,Y.current&1),e=yt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,ad(e,t,n)}return yt(e,t,n)}var pd,us,hd,md;pd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};us=function(){};hd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nn(st.current);var l=null;switch(n){case"input":i=Ro(e,i),r=Ro(e,r),l=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":i=Io(e,i),r=Io(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ki)}Ao(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=i?.[c],r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&b("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};md=function(e,t,n,r){n!==r&&(t.flags|=4)};function or(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tm(e,t,n){var r=t.pendingProps;switch(Xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return je(t.type)&&Xi(),me(t),null;case 3:return r=t.stateNode,bn(),V(Pe),V(ye),la(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(ys(Ze),Ze=null))),us(e,t),me(t),null;case 5:ia(t);var i=nn(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)hd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return me(t),null}if(e=nn(st.current),hi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[lt]=t,r[Ar]=l,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)b(dr[i],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Fa(r,l),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},b("invalid",r);break;case"textarea":Ua(r,l),b("invalid",r)}Ao(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&pi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&pi(r.textContent,s,e),i=["children",""+s]):jr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&b("scroll",r)}switch(n){case"input":li(r),Da(r,l,!0);break;case"textarea":li(r),Ba(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ki)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[lt]=t,e[Ar]=r,pd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Mo(n,r),n){case"dialog":b("cancel",e),b("close",e),i=r;break;case"iframe":case"object":case"embed":b("load",e),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)b(dr[i],e);i=r;break;case"source":b("error",e),i=r;break;case"img":case"image":case"link":b("error",e),b("load",e),i=r;break;case"details":b("toggle",e),i=r;break;case"input":Fa(e,r),i=Ro(e,r),b("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),b("invalid",e);break;case"textarea":Ua(e,r),i=Io(e,r),b("invalid",e);break;default:i=r}Ao(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Vc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&bc(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&_r(e,a):typeof a=="number"&&_r(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(jr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&b("scroll",e):a!=null&&Os(e,l,a,o))}switch(n){case"input":li(e),Da(e,r,!1);break;case"textarea":li(e),Ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Tn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ki)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)md(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=nn(Fr.current),nn(st.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(l=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:pi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return me(t),null;case 13:if(V(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Te!==null&&t.mode&1&&!(t.flags&128))Lf(),Bn(),t.flags|=98560,l=!1;else if(l=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[lt]=t}else Bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),l=!1}else Ze!==null&&(ys(Ze),Ze=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):ya())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return bn(),us(e,t),e===null&&Ir(t.stateNode.containerInfo),me(t),null;case 10:return ea(t.type._context),me(t),null;case 17:return je(t.type)&&Xi(),me(t),null;case 19:if(V(Y),l=t.memoizedState,l===null)return me(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)or(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=rl(e),o!==null){for(t.flags|=128,or(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}l.tail!==null&&ee()>Vn&&(t.flags|=128,r=!0,or(l,!1),t.lanes=4194304)}else{if(!r)if(e=rl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!G)return me(t),null}else 2*ee()-l.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,or(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ee(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return ga(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Lm(e,t){switch(Xs(t),t.tag){case 1:return je(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),V(Pe),V(ye),la(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ia(t),null;case 13:if(V(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Y),null;case 4:return bn(),null;case 10:return ea(t.type._context),null;case 22:case 23:return ga(),null;case 24:return null;default:return null}}var yi=!1,ge=!1,Im=typeof WeakSet=="function"?WeakSet:Set,$=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function cs(e,t,n){try{n()}catch(r){J(e,t,r)}}var $u=!1;function Om(e,t){if(Go=Qi,e=wf(),Ys(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,c=0,h=0,f=e,g=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==l||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===n&&++c===i&&(s=o),g===l&&++h===r&&(a=o),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yo={focusedElem:e,selectionRange:n},Qi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,P=v.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ke(t.type,x),P);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){J(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return v=$u,$u=!1,v}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&cs(t,n,l)}i=i.next}while(i!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gd(e){var t=e.alternate;t!==null&&(e.alternate=null,gd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Ar],delete t[qo],delete t[ym],delete t[vm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yd(e){return e.tag===5||e.tag===3||e.tag===4}function Ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki));else if(r!==4&&(e=e.child,e!==null))for(ds(e,t,n),e=e.sibling;e!==null;)ds(e,t,n),e=e.sibling}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}var fe=null,Xe=!1;function St(e,t,n){for(n=n.child;n!==null;)vd(e,t,n),n=n.sibling}function vd(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:ge||$n(n,t);case 6:var r=fe,i=Xe;fe=null,St(e,t,n),fe=r,Xe=i,fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),Rr(e)):Jl(fe,n.stateNode));break;case 4:r=fe,i=Xe,fe=n.stateNode.containerInfo,Xe=!0,St(e,t,n),fe=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&cs(n,t,o),i=i.next}while(i!==r)}St(e,t,n);break;case 1:if(!ge&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,St(e,t,n),ge=r):St(e,t,n);break;default:St(e,t,n)}}function Tu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Im),t.forEach(function(r){var i=Hm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,Xe=!1;break e;case 3:fe=s.stateNode.containerInfo,Xe=!0;break e;case 4:fe=s.stateNode.containerInfo,Xe=!0;break e}s=s.return}if(fe===null)throw Error(C(160));vd(l,o,i),fe=null,Xe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){J(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xd(t,e),t=t.sibling}function xd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),rt(e),r&4){try{kr(3,e,e.return),Sl(3,e)}catch(x){J(e,e.return,x)}try{kr(5,e,e.return)}catch(x){J(e,e.return,x)}}break;case 1:Ge(t,e),rt(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(Ge(t,e),rt(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var i=e.stateNode;try{_r(i,"")}catch(x){J(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Uc(i,l),Mo(s,o);var c=Mo(s,l);for(o=0;o<a.length;o+=2){var h=a[o],f=a[o+1];h==="style"?Vc(i,f):h==="dangerouslySetInnerHTML"?bc(i,f):h==="children"?_r(i,f):Os(i,h,f,c)}switch(s){case"input":To(i,l);break;case"textarea":Bc(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?Tn(i,!!l.multiple,y,!1):g!==!!l.multiple&&(l.defaultValue!=null?Tn(i,!!l.multiple,l.defaultValue,!0):Tn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ar]=l}catch(x){J(e,e.return,x)}}break;case 6:if(Ge(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){J(e,e.return,x)}}break;case 3:if(Ge(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(x){J(e,e.return,x)}break;case 4:Ge(t,e),rt(e);break;case 13:Ge(t,e),rt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ha=ee())),r&4&&Tu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||h,Ge(t,e),ge=c):Ge(t,e),rt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for($=e,h=e.child;h!==null;){for(f=$=h;$!==null;){switch(g=$,y=g.child,g.tag){case 0:case 11:case 14:case 15:kr(4,g,g.return);break;case 1:$n(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){J(r,n,x)}}break;case 5:$n(g,g.return);break;case 22:if(g.memoizedState!==null){Iu(f);continue}}y!==null?(y.return=g,$=y):Iu(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Hc("display",o))}catch(x){J(e,e.return,x)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){J(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ge(t,e),rt(e),r&4&&Tu(e);break;case 21:break;default:Ge(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yd(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_r(i,""),r.flags&=-33);var l=Ru(e);ps(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Ru(e);ds(e,s,o);break;default:throw Error(C(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e,t,n){$=e,wd(e)}function wd(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yi;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||ge;s=yi;var c=ge;if(yi=o,(ge=a)&&!c)for($=i;$!==null;)o=$,a=o.child,o.tag===22&&o.memoizedState!==null?Ou(i):a!==null?(a.return=o,$=a):Ou(i);for(;l!==null;)$=l,wd(l),l=l.sibling;$=i,yi=s,ge=c}Lu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,$=l):Lu(e)}}function Lu(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&yu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yu(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Rr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ge||t.flags&512&&fs(t)}catch(g){J(t,t.return,g)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Iu(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Ou(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(a){J(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){J(t,i,a)}}var l=t.return;try{fs(t)}catch(a){J(t,l,a)}break;case 5:var o=t.return;try{fs(t)}catch(a){J(t,o,a)}}}catch(a){J(t,t.return,a)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var Mm=Math.ceil,ol=vt.ReactCurrentDispatcher,da=vt.ReactCurrentOwner,Be=vt.ReactCurrentBatchConfig,A=0,ce=null,re=null,de=0,ze=0,Rn=Ht(0),ae=0,Wr=null,fn=0,Cl=0,pa=0,Sr=null,Ce=null,ha=0,Vn=1/0,at=null,sl=!1,hs=null,Mt=null,vi=!1,zt=null,al=0,Cr=0,ms=null,Ri=-1,Ti=0;function we(){return A&6?ee():Ri!==-1?Ri:Ri=ee()}function Ft(e){return e.mode&1?A&2&&de!==0?de&-de:wm.transition!==null?(Ti===0&&(Ti=rf()),Ti):(e=U,e!==0||(e=window.event,e=e===void 0?16:ff(e.type)),e):1}function et(e,t,n,r){if(50<Cr)throw Cr=0,ms=null,Error(C(185));Yr(e,n,r),(!(A&2)||e!==ce)&&(e===ce&&(!(A&2)&&(Cl|=n),ae===4&&_t(e,de)),_e(e,r),n===1&&A===0&&!(t.mode&1)&&(Vn=ee()+500,xl&&Vt()))}function _e(e,t){var n=e.callbackNode;wh(e,t);var r=Vi(e,e===ce?de:0);if(r===0)n!==null&&Ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ha(n),t===1)e.tag===0?xm(Au.bind(null,e)):$f(Au.bind(null,e)),mm(function(){!(A&6)&&Vt()}),n=null;else{switch(lf(r)){case 1:n=Us;break;case 4:n=tf;break;case 16:n=Hi;break;case 536870912:n=nf;break;default:n=Hi}n=Nd(n,kd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kd(e,t){if(Ri=-1,Ti=0,A&6)throw Error(C(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Vi(e,e===ce?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ul(e,r);else{t=r;var i=A;A|=2;var l=Cd();(ce!==e||de!==t)&&(at=null,Vn=ee()+500,rn(e,t));do try{Um();break}catch(s){Sd(e,s)}while(!0);Js(),ol.current=l,A=i,re!==null?t=0:(ce=null,de=0,t=ae)}if(t!==0){if(t===2&&(i=Wo(e),i!==0&&(r=i,t=gs(e,i))),t===1)throw n=Wr,rn(e,0),_t(e,r),_e(e,ee()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!Fm(i)&&(t=ul(e,r),t===2&&(l=Wo(e),l!==0&&(r=l,t=gs(e,l))),t===1))throw n=Wr,rn(e,0),_t(e,r),_e(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Zt(e,Ce,at);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=ha+500-ee(),10<t)){if(Vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xo(Zt.bind(null,e,Ce,at),t);break}Zt(e,Ce,at);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Je(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mm(r/1960))-r,10<r){e.timeoutHandle=Xo(Zt.bind(null,e,Ce,at),r);break}Zt(e,Ce,at);break;case 5:Zt(e,Ce,at);break;default:throw Error(C(329))}}}return _e(e,ee()),e.callbackNode===n?kd.bind(null,e):null}function gs(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=ul(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&ys(t)),e}function ys(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Fm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!nt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~pa,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Au(e){if(A&6)throw Error(C(327));Mn();var t=Vi(e,0);if(!(t&1))return _e(e,ee()),null;var n=ul(e,t);if(e.tag!==0&&n===2){var r=Wo(e);r!==0&&(t=r,n=gs(e,r))}if(n===1)throw n=Wr,rn(e,0),_t(e,t),_e(e,ee()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Ce,at),_e(e,ee()),null}function ma(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Vn=ee()+500,xl&&Vt())}}function dn(e){zt!==null&&zt.tag===0&&!(A&6)&&Mn();var t=A;A|=1;var n=Be.transition,r=U;try{if(Be.transition=null,U=1,e)return e()}finally{U=r,Be.transition=n,A=t,!(A&6)&&Vt()}}function ga(){ze=Rn.current,V(Rn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hm(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:bn(),V(Pe),V(ye),la();break;case 5:ia(r);break;case 4:bn();break;case 13:V(Y);break;case 19:V(Y);break;case 10:ea(r.type._context);break;case 22:case 23:ga()}n=n.return}if(ce=e,re=e=Dt(e.current,null),de=ze=t,ae=0,Wr=null,pa=Cl=fn=0,Ce=Sr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}tn=null}return e}function Sd(e,t){do{var n=re;try{if(Js(),Ni.current=ll,il){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}il=!1}if(cn=0,ue=oe=K=null,wr=!1,Dr=0,da.current=null,n===null||n.return===null){ae=1,Wr=t,re=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=de,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Cu(o);if(y!==null){y.flags&=-257,Eu(y,o,s,l,t),y.mode&1&&Su(l,c,t),t=y,a=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(a),t.updateQueue=x}else v.add(a);break e}else{if(!(t&1)){Su(l,c,t),ya();break e}a=Error(C(426))}}else if(G&&s.mode&1){var P=Cu(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Eu(P,o,s,l,t),qs(Hn(a,s));break e}}l=a=Hn(a,s),ae!==4&&(ae=2),Sr===null?Sr=[l]:Sr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=ld(l,a,t);gu(l,p);break e;case 1:s=a;var u=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Mt===null||!Mt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=od(l,s,t);gu(l,k);break e}}l=l.return}while(l!==null)}Pd(n)}catch(E){t=E,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Cd(){var e=ol.current;return ol.current=ll,e===null?ll:e}function ya(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(fn&268435455)&&!(Cl&268435455)||_t(ce,de)}function ul(e,t){var n=A;A|=2;var r=Cd();(ce!==e||de!==t)&&(at=null,rn(e,t));do try{Dm();break}catch(i){Sd(e,i)}while(!0);if(Js(),A=n,ol.current=r,re!==null)throw Error(C(261));return ce=null,de=0,ae}function Dm(){for(;re!==null;)Ed(re)}function Um(){for(;re!==null&&!fh();)Ed(re)}function Ed(e){var t=_d(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Pd(e):re=t,da.current=null}function Pd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lm(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=Tm(n,t,ze),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function Zt(e,t,n){var r=U,i=Be.transition;try{Be.transition=null,U=1,Bm(e,t,n,r)}finally{Be.transition=i,U=r}return null}function Bm(e,t,n,r){do Mn();while(zt!==null);if(A&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(kh(e,l),e===ce&&(re=ce=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vi||(vi=!0,Nd(Hi,function(){return Mn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Be.transition,Be.transition=null;var o=U;U=1;var s=A;A|=4,da.current=null,Om(e,n),xd(n,e),sm(Yo),Qi=!!Go,Yo=Go=null,e.current=n,Am(n),dh(),A=s,U=o,Be.transition=l}else e.current=n;if(vi&&(vi=!1,zt=e,al=i),l=e.pendingLanes,l===0&&(Mt=null),mh(n.stateNode),_e(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,e=hs,hs=null,e;return al&1&&e.tag!==0&&Mn(),l=e.pendingLanes,l&1?e===ms?Cr++:(Cr=0,ms=e):Cr=0,Vt(),null}function Mn(){if(zt!==null){var e=lf(al),t=Be.transition,n=U;try{if(Be.transition=null,U=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,al=0,A&6)throw Error(C(331));var i=A;for(A|=4,$=e.current;$!==null;){var l=$,o=l.child;if($.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for($=c;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:kr(8,h,l)}var f=h.child;if(f!==null)f.return=h,$=f;else for(;$!==null;){h=$;var g=h.sibling,y=h.return;if(gd(h),h===c){$=null;break}if(g!==null){g.return=y,$=g;break}$=y}}}var v=l.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}$=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,$=o;else e:for(;$!==null;){if(l=$,l.flags&2048)switch(l.tag){case 0:case 11:case 15:kr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,$=p;break e}$=l.return}}var u=e.current;for($=u;$!==null;){o=$;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,$=m;else e:for(o=u;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(E){J(s,s.return,E)}if(s===o){$=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,$=k;break e}$=s.return}}if(A=i,Vt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{U=n,Be.transition=t}}return!1}function Mu(e,t,n){t=Hn(n,t),t=ld(e,t,1),e=At(e,t,1),t=we(),e!==null&&(Yr(e,1,t),_e(e,t))}function J(e,t,n){if(e.tag===3)Mu(e,e,n);else for(;t!==null;){if(t.tag===3){Mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Hn(n,e),e=od(t,e,1),t=At(t,e,1),e=we(),t!==null&&(Yr(t,1,e),_e(t,e));break}}t=t.return}}function Wm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(de&n)===n&&(ae===4||ae===3&&(de&130023424)===de&&500>ee()-ha?rn(e,0):pa|=n),_e(e,t)}function jd(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=we();e=gt(e,t),e!==null&&(Yr(e,t,n),_e(e,n))}function bm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jd(e,n)}function Hm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),jd(e,n)}var _d;_d=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,Rm(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,G&&t.flags&1048576&&Rf(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$i(e,t),e=t.pendingProps;var i=Un(t,ye.current);An(t,n),i=sa(null,t,r,e,i,n);var l=aa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(l=!0,qi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,na(t),i.updater=kl,t.stateNode=i,i._reactInternals=t,rs(t,r,e,n),t=os(null,t,r,!0,l,n)):(t.tag=0,G&&l&&Ks(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($i(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qm(r),e=Ke(r,e),i){case 0:t=ls(null,t,r,e,n);break e;case 1:t=_u(null,t,r,e,n);break e;case 11:t=Pu(null,t,r,e,n);break e;case 14:t=ju(null,t,r,Ke(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),ls(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),_u(e,t,r,i,n);case 3:e:{if(cd(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Mf(e,t),nl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Hn(Error(C(423)),t),t=Nu(e,t,r,n,i);break e}else if(r!==i){i=Hn(Error(C(424)),t),t=Nu(e,t,r,n,i);break e}else for(Te=Ot(t.stateNode.containerInfo.firstChild),Le=t,G=!0,Ze=null,n=Of(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===i){t=yt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Ff(t),e===null&&es(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ko(r,i)?o=null:l!==null&&Ko(r,l)&&(t.flags|=32),ud(e,t),xe(e,t,o,n),t.child;case 6:return e===null&&es(t),null;case 13:return fd(e,t,n);case 4:return ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Pu(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,W(el,r._currentValue),r._currentValue=o,l!==null)if(nt(l.value,o)){if(l.children===i.children&&!Pe.current){t=yt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=pt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ts(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(C(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ts(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,An(t,n),i=We(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),ju(e,t,r,i,n);case 15:return sd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),$i(e,t),t.tag=1,je(r)?(e=!0,qi(t)):e=!1,An(t,n),id(t,r,i),rs(t,r,i,n),os(null,t,r,!0,e,n);case 19:return dd(e,t,n);case 22:return ad(e,t,n)}throw Error(C(156,t.tag))};function Nd(e,t){return ef(e,t)}function Vm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Vm(e,t,n,r)}function va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qm(e){if(typeof e=="function")return va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ms)return 11;if(e===Fs)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")va(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case kn:return ln(n.children,i,l,t);case As:o=8,i|=8;break;case _o:return e=Ue(12,n,t,i|2),e.elementType=_o,e.lanes=l,e;case No:return e=Ue(13,n,t,i),e.elementType=No,e.lanes=l,e;case zo:return e=Ue(19,n,t,i),e.elementType=zo,e.lanes=l,e;case Mc:return El(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oc:o=10;break e;case Ac:o=9;break e;case Ms:o=11;break e;case Fs:o=14;break e;case Et:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ue(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function ln(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function El(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Mc,e.lanes=n,e.stateNode={isHidden:!1},e}function so(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function ao(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xa(e,t,n,r,i,l,o,s,a){return e=new Gm(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ue(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},na(l),e}function Ym(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zd(e){if(!e)return Wt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(je(n))return zf(e,n,t)}return t}function $d(e,t,n,r,i,l,o,s,a){return e=xa(n,r,!0,e,i,l,o,s,a),e.context=zd(null),n=e.current,r=we(),i=Ft(n),l=pt(r,i),l.callback=t??null,At(n,l,i),e.current.lanes=i,Yr(e,i,r),_e(e,r),e}function Pl(e,t,n,r){var i=t.current,l=we(),o=Ft(i);return n=zd(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,o),e!==null&&(et(e,i,o,l),_i(e,i,o)),o}function cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wa(e,t){Fu(e,t),(e=e.alternate)&&Fu(e,t)}function Km(){return null}var Rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ka(e){this._internalRoot=e}jl.prototype.render=ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Pl(e,t,null,null)};jl.prototype.unmount=ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Pl(null,e,null,null)}),t[mt]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=af();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&cf(e)}};function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function Xm(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=cl(o);l.call(c)}}var o=$d(t,r,e,0,null,!1,!1,"",Du);return e._reactRootContainer=o,e[mt]=o.current,Ir(e.nodeType===8?e.parentNode:e),dn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=cl(a);s.call(c)}}var a=xa(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=a,e[mt]=a.current,Ir(e.nodeType===8?e.parentNode:e),dn(function(){Pl(t,a,n,r)}),a}function Nl(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=cl(o);s.call(a)}}Pl(t,o,e,i)}else o=Xm(n,t,e,i,r);return cl(o)}of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Bs(t,n|1),_e(t,ee()),!(A&6)&&(Vn=ee()+500,Vt()))}break;case 13:dn(function(){var r=gt(e,1);if(r!==null){var i=we();et(r,e,1,i)}}),wa(e,1)}};Ws=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=we();et(t,e,134217728,n)}wa(e,134217728)}};sf=function(e){if(e.tag===13){var t=Ft(e),n=gt(e,t);if(n!==null){var r=we();et(n,e,t,r)}wa(e,t)}};af=function(){return U};uf=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Do=function(e,t,n){switch(t){case"input":if(To(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vl(r);if(!i)throw Error(C(90));Dc(r),To(r,i)}}}break;case"textarea":Bc(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};Yc=ma;Kc=dn;var qm={usingClientEntryPoint:!1,Events:[Xr,Pn,vl,Qc,Gc,ma]},sr={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zm={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zc(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||Km,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{hl=xi.inject(Zm),ot=xi}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sa(t))throw Error(C(200));return Ym(e,t,null,n)};Oe.createRoot=function(e,t){if(!Sa(e))throw Error(C(299));var n=!1,r="",i=Rd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xa(e,1,!1,null,null,n,!1,r,i),e[mt]=t.current,Ir(e.nodeType===8?e.parentNode:e),new ka(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Zc(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return dn(e)};Oe.hydrate=function(e,t,n){if(!_l(t))throw Error(C(200));return Nl(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Sa(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Rd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=$d(t,null,e,1,n??null,i,!1,l,o),e[mt]=t.current,Ir(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jl(t)};Oe.render=function(e,t,n){if(!_l(t))throw Error(C(200));return Nl(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!_l(e))throw Error(C(40));return e._reactRootContainer?(dn(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Oe.unstable_batchedUpdates=ma;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Nl(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function Td(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Td)}catch(e){console.error(e)}}Td(),Rc.exports=Oe;var Jm=Rc.exports;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},br.apply(null,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const Uu="popstate";function eg(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:s}=r.location;return vs("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ld(i)}return ng(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ca(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tg(){return Math.random().toString(36).substr(2,8)}function Bu(e,t){return{usr:e.state,key:e.key,idx:t}}function vs(e,t,n,r){return n===void 0&&(n=null),br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zn(t):t,{state:n,key:t&&t.key||r||tg()})}function Ld(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ng(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=$t.Pop,a=null,c=h();c==null&&(c=0,o.replaceState(br({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){s=$t.Pop;let P=h(),p=P==null?null:P-c;c=P,a&&a({action:s,location:x.location,delta:p})}function g(P,p){s=$t.Push;let u=vs(x.location,P,p);c=h()+1;let m=Bu(u,c),k=x.createHref(u);try{o.pushState(m,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(k)}l&&a&&a({action:s,location:x.location,delta:1})}function y(P,p){s=$t.Replace;let u=vs(x.location,P,p);c=h();let m=Bu(u,c),k=x.createHref(u);o.replaceState(m,"",k),l&&a&&a({action:s,location:x.location,delta:0})}function v(P){let p=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof P=="string"?P:Ld(P);return u=u.replace(/ $/,"%20"),ie(p,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,p)}let x={get action(){return s},get location(){return e(i,o)},listen(P){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Uu,f),a=P,()=>{i.removeEventListener(Uu,f),a=null}},createHref(P){return t(i,P)},createURL:v,encodeLocation(P){let p=v(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(P){return o.go(P)}};return x}var Wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wu||(Wu={}));function rg(e,t,n){return n===void 0&&(n="/"),ig(e,t,n)}function ig(e,t,n,r){let i=typeof t=="string"?Zn(t):t,l=Ad(i.pathname||"/",n);if(l==null)return null;let o=Id(e);lg(o);let s=null,a=yg(l);for(let c=0;s==null&&c<o.length;++c)s=hg(o[c],a);return s}function Id(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(ie(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=on([r,a.relativePath]),h=n.concat(a);l.children&&l.children.length>0&&(ie(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Id(l.children,t,h,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:dg(c,l.index),routesMeta:h})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let a of Od(l.path))i(l,o,a)}),t}function Od(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Od(r.join("/")),s=[];return s.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function lg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:pg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const og=/^:[\w-]+$/,sg=3,ag=2,ug=1,cg=10,fg=-2,bu=e=>e==="*";function dg(e,t){let n=e.split("/"),r=n.length;return n.some(bu)&&(r+=fg),t&&(r+=ag),n.filter(i=>!bu(i)).reduce((i,l)=>i+(og.test(l)?sg:l===""?ug:cg),r)}function pg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function hg(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",f=mg({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},h),g=a.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:on([l,f.pathname]),pathnameBase:Sg(on([l,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(l=on([l,f.pathnameBase]))}return o}function mg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=gg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let x=s[f]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const v=s[f];return y&&!v?c[g]=void 0:c[g]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:o,pattern:e}}function gg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ca(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function yg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ca(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ad(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const vg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xg=e=>vg.test(e);function wg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zn(e):e,l;if(n)if(xg(n))l=n;else{if(n.includes("//")){let o=n;n=Dd(n),Ca(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=Hu(n.substring(1),"/"):l=Hu(n,t)}else l=t;return{pathname:l,search:Cg(r),hash:Eg(i)}}function Hu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Md(e,t){let n=kg(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Fd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zn(e):(i=br({},e),ie(!i.pathname||!i.pathname.includes("?"),uo("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),uo("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),uo("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}s=f>=0?t[f]:"/"}let a=wg(i,s),c=o&&o!=="/"&&o.endsWith("/"),h=(l||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||h)&&(a.pathname+="/"),a}const Dd=e=>e.replace(/\/\/+/g,"/"),on=e=>Dd(e.join("/")),Sg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Eg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Pg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ud=["post","put","patch","delete"];new Set(Ud);const jg=["get",...Ud];new Set(jg);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(null,arguments)}const Ea=N.createContext(null),_g=N.createContext(null),Zr=N.createContext(null),zl=N.createContext(null),gn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Bd=N.createContext(null);function Jr(){return N.useContext(zl)!=null}function Pa(){return Jr()||ie(!1),N.useContext(zl).location}function Wd(e){N.useContext(Zr).static||N.useLayoutEffect(e)}function Ng(){let{isDataRoute:e}=N.useContext(gn);return e?Bg():zg()}function zg(){Jr()||ie(!1);let e=N.useContext(Ea),{basename:t,future:n,navigator:r}=N.useContext(Zr),{matches:i}=N.useContext(gn),{pathname:l}=Pa(),o=JSON.stringify(Md(i,n.v7_relativeSplatPath)),s=N.useRef(!1);return Wd(()=>{s.current=!0}),N.useCallback(function(c,h){if(h===void 0&&(h={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=Fd(c,JSON.parse(o),l,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:on([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,o,l,e])}function $g(e,t){return Rg(e,t)}function Rg(e,t,n,r){Jr()||ie(!1);let{navigator:i}=N.useContext(Zr),{matches:l}=N.useContext(gn),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=Pa(),h;if(t){var f;let P=typeof t=="string"?Zn(t):t;a==="/"||(f=P.pathname)!=null&&f.startsWith(a)||ie(!1),h=P}else h=c;let g=h.pathname||"/",y=g;if(a!=="/"){let P=a.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let v=rg(e,{pathname:y}),x=Ag(v&&v.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:on([a,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?a:on([a,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,n,r);return t&&x?N.createElement(zl.Provider,{value:{location:Hr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:$t.Pop}},x):x}function Tg(){let e=Ug(),t=Pg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,null)}const Lg=N.createElement(Tg,null);class Ig extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(gn.Provider,{value:this.props.routeContext},N.createElement(Bd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Og(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(Ea);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(gn.Provider,{value:t},r)}function Ag(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let h=o.findIndex(f=>f.route.id&&s?.[f.route.id]!==void 0);h>=0||ie(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:g,errors:y}=n,v=f.route.loader&&g[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||v){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,g)=>{let y,v=!1,x=null,P=null;n&&(y=s&&f.route.id?s[f.route.id]:void 0,x=f.route.errorElement||Lg,a&&(c<0&&g===0?(Wg("route-fallback"),v=!0,P=null):c===g&&(v=!0,P=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),u=()=>{let m;return y?m=x:v?m=P:f.route.Component?m=N.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,N.createElement(Og,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?N.createElement(Ig,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:u(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):u()},null)}var bd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bd||{}),Hd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hd||{});function Mg(e){let t=N.useContext(Ea);return t||ie(!1),t}function Fg(e){let t=N.useContext(_g);return t||ie(!1),t}function Dg(e){let t=N.useContext(gn);return t||ie(!1),t}function Vd(e){let t=Dg(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function Ug(){var e;let t=N.useContext(Bd),n=Fg(),r=Vd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Bg(){let{router:e}=Mg(bd.UseNavigateStable),t=Vd(Hd.UseNavigateStable),n=N.useRef(!1);return Wd(()=>{n.current=!0}),N.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Hr({fromRouteId:t},l)))},[e,t])}const Vu={};function Wg(e,t,n){Vu[e]||(Vu[e]=!0)}function bg(e,t){e?.v7_startTransition,e?.v7_relativeSplatPath}function Hg(e){let{to:t,replace:n,state:r,relative:i}=e;Jr()||ie(!1);let{future:l,static:o}=N.useContext(Zr),{matches:s}=N.useContext(gn),{pathname:a}=Pa(),c=Ng(),h=Fd(t,Md(s,l.v7_relativeSplatPath),a,i==="path"),f=JSON.stringify(h);return N.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Ii(e){ie(!1)}function Vg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:l,static:o=!1,future:s}=e;Jr()&&ie(!1);let a=t.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:a,navigator:l,static:o,future:Hr({v7_relativeSplatPath:!1},s)}),[a,s,l,o]);typeof r=="string"&&(r=Zn(r));let{pathname:h="/",search:f="",hash:g="",state:y=null,key:v="default"}=r,x=N.useMemo(()=>{let P=Ad(h,a);return P==null?null:{location:{pathname:P,search:f,hash:g,state:y,key:v},navigationType:i}},[a,h,f,g,y,v,i]);return x==null?null:N.createElement(Zr.Provider,{value:c},N.createElement(zl.Provider,{children:n,value:x}))}function Qg(e){let{children:t,location:n}=e;return $g(xs(t),n)}new Promise(()=>{});function xs(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let l=[...t,i];if(r.type===N.Fragment){n.push.apply(n,xs(r.props.children,l));return}r.type!==Ii&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xs(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Gg="6";try{window.__reactRouterVersion=Gg}catch{}const Yg="startTransition",Qu=Wp[Yg];function Kg(e){let{basename:t,children:n,future:r,window:i}=e,l=N.useRef();l.current==null&&(l.current=eg({window:i,v5Compat:!0}));let o=l.current,[s,a]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=N.useCallback(f=>{c&&Qu?Qu(()=>a(f)):a(f)},[a,c]);return N.useLayoutEffect(()=>o.listen(h),[o,h]),N.useEffect(()=>bg(r),[r]),N.createElement(Vg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var Gu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gu||(Gu={}));var Yu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yu||(Yu={}));var Qd,Ku=Jm;Qd=Ku.createRoot,Ku.hydrateRoot;const Xg={name:"Divvylore",tagline:"AI support agents for customer journeys"},qg={base:"https://app.divvylore.com",register:"https://app.divvylore.com/register",login:"https://app.divvylore.com/login"},Zg=[{label:"Product",href:"#highlights"},{label:"How it works",href:"#how-it-works"},{label:"Capabilities",href:"#features"},{label:"Pricing",href:"#pricing"}],Jg={eyebrow:"Conversational AI for customer support",title:"Build AI support agents that resolve issues and keep customers moving.",description:"Divvylore is a complete platform for designing, deploying, and improving support agents with guardrails, real system actions, and human handoff.",primaryCta:{label:"Build your agent",url:"https://app.divvylore.com/register"},secondaryCta:{label:"Login",url:"https://app.divvylore.com/login"},supportPills:["Website chat","Queue-ready transport","Human escalation","Tenant isolation"]},e0={title:"The complete platform for AI support agents",subtitle:"Designed for production customer support from day one.",cards:[{title:"Purpose-built for support",description:"Train agents on your support knowledge, workflows, and response standards."},{title:"Designed for simplicity",description:"Create, test, and deploy agents without heavy operational overhead."},{title:"Engineered for reliability",description:"Use queue-first delivery and worker-backed processing for stable production behavior."}]},t0={title:"How Divvylore support agents work",steps:[{title:"Build and configure",description:"Define prompts, tools, and guardrails for your support use cases."},{title:"Connect your systems",description:"Link business context so agents can answer with real-time relevance."},{title:"Resolve customer issues",description:"Let agents handle common requests and execute approved actions."},{title:"Escalate complex cases",description:"Route edge cases to humans with full conversation context."},{title:"Improve with insights",description:"Review outcomes and optimize prompts, tools, and journey flows."}]},n0={title:"Build the support experience your customers expect",items:[{title:"Sync with support context",description:"Agents can use relevant customer and workflow context for better resolution quality."},{title:"Action-driven workflows",description:"Enable controlled actions so the agent can do more than just answer questions."},{title:"Smart escalation",description:"Escalate by policy when confidence is low or requests require human approval."},{title:"Operational analytics",description:"Track outcomes and response quality to continuously improve support performance."},{title:"Works across channels",description:"Support website chat and extensible channels from one agent control layer."},{title:"API-first integration",description:"Integrate deeply with your product using APIs and flexible runtime architecture."}]},r0={title:"See the Divvylore platform in action",subtitle:"Real product screens from analytics, agents, tools, chat, leads, and billing workflows.",items:[{title:"Analytics dashboard",imageUrl:"/artifacts/analytics-dashboard.png",alt:"Analytics dashboard with response and sender metrics"},{title:"Usage and credits",imageUrl:"/artifacts/usage-credits.png",alt:"Usage and credits page with limits and progress bars"},{title:"Agent management",imageUrl:"/artifacts/agent-management.png",alt:"Agent management list and details"},{title:"Tool marketplace",imageUrl:"/artifacts/tool-marketplace.png",alt:"Tool marketplace modal with featured tools"},{title:"Live playground",imageUrl:"/artifacts/live-playground.png",alt:"Agent playground with floating live preview"},{title:"Chat history",imageUrl:"/artifacts/chat-history.png",alt:"Chat history interface with conversation threads"},{title:"Lead generation",imageUrl:"/artifacts/lead-generation.png",alt:"Lead generation contacts table"},{title:"Billing and plans",imageUrl:"/artifacts/billing-plans.png",alt:"Billing and subscription plans"},{title:"Credit center",imageUrl:"/artifacts/credit-center.png",alt:"Credit balance and transaction summary"}]},i0={title:"Enterprise-grade security and privacy",items:[{title:"Your data stays controlled",description:"Tenant-aware design and scoped execution protect customer boundaries."},{title:"Encrypted by default",description:"Use secure transport and protected service boundaries across system flows."},{title:"Guardrails for responses",description:"Response policies reduce off-topic and unsafe outputs in customer-facing chats."}]},l0={title:"Pricing for teams growing support automation",subtitle:"Start simple and expand as support volume and complexity increase.",plans:[{name:"Starter",price:"$29",period:"/month",description:"For teams launching their first AI support workflow.",features:["1 production agent","Portal access","Basic analytics","Email support"],highlighted:!1,ctaLabel:"Choose Starter",planCode:"starter"},{name:"Growth",price:"$99",period:"/month",description:"For teams running multiple production support workflows.",features:["5 production agents","Advanced configuration","Queue-first chat flow","Priority support"],highlighted:!0,ctaLabel:"Choose Growth",planCode:"growth"},{name:"Scale",price:"Custom",period:"",description:"For enterprises with advanced governance requirements.",features:["Custom agent limits","Tenant governance","Dedicated onboarding","Architecture support"],highlighted:!1,ctaLabel:"Contact Sales",planCode:"scale"}]},o0={title:"FAQ",items:[{question:"Can we start with one workflow and scale later?",answer:"Yes. You can start with one production workflow and scale to additional agents and channels."},{question:"Where do registration and login happen?",answer:"All account actions happen in app.divvylore.com."},{question:"Can we keep a human in the loop?",answer:"Yes. Divvylore supports escalation and handoff patterns for complex customer issues."}]},s0={copyright:"© 2026 Divvylore. All rights reserved.",quickLinks:[{label:"Get Started",url:"https://app.divvylore.com/register"},{label:"Login",url:"https://app.divvylore.com/login"},{label:"Pricing",url:"#pricing"}]},$e={brand:Xg,appUrls:qg,navigation:Zg,hero:Jg,highlights:e0,howItWorks:t0,features:n0,artifacts:r0,security:i0,pricing:l0,faq:o0,footer:s0};var H="-ms-",Er="-moz-",F="-webkit-",Gd="comm",$l="rule",ja="decl",a0="@import",u0="@namespace",Yd="@keyframes",c0="@layer",Kd=Math.abs,_a=String.fromCharCode,ws=Object.assign;function f0(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function Xd(e){return e.trim()}function ut(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Oi(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function pn(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function qd(e){return e.length}function pr(e,t){return t.push(e),e}function d0(e,t){return e.map(t).join("")}function Xu(e,t){return e.filter(function(n){return!ut(n,t)})}var Rl=1,Qn=1,Zd=0,He=0,ne=0,Jn="";function Tl(e,t,n,r,i,l,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:Rl,column:Qn,length:o,return:"",siblings:s}}function Ct(e,t){return ws(Tl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function vn(e){for(;e.root;)e=Ct(e.root,{children:[e]});pr(e,e.siblings)}function p0(){return ne}function h0(){return ne=He>0?se(Jn,--He):0,Qn--,ne===10&&(Qn=1,Rl--),ne}function tt(){return ne=He<Zd?se(Jn,He++):0,Qn++,ne===10&&(Qn=1,Rl++),ne}function Rt(){return se(Jn,He)}function Ai(){return He}function Ll(e,t){return pn(Jn,e,t)}function Vr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m0(e){return Rl=Qn=1,Zd=qe(Jn=e),He=0,[]}function g0(e){return Jn="",e}function co(e){return Xd(Ll(He-1,ks(e===91?e+2:e===40?e+1:e)))}function y0(e){for(;(ne=Rt())&&ne<33;)tt();return Vr(e)>2||Vr(ne)>3?"":" "}function v0(e,t){for(;--t&&tt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Ll(e,Ai()+(t<6&&Rt()==32&&tt()==32))}function ks(e){for(;tt();)switch(ne){case e:return He;case 34:case 39:e!==34&&e!==39&&ks(ne);break;case 40:e===41&&ks(e);break;case 92:tt();break}return He}function x0(e,t){for(;tt()&&e+ne!==57;)if(e+ne===84&&Rt()===47)break;return"/*"+Ll(t,He-1)+"*"+_a(e===47?e:tt())}function w0(e){for(;!Vr(Rt());)tt();return Ll(e,He)}function k0(e){return g0(Mi("",null,null,null,[""],e=m0(e),0,[0],e))}function Mi(e,t,n,r,i,l,o,s,a){for(var c=0,h=0,f=o,g=0,y=0,v=0,x=1,P=1,p=1,u=0,m="",k=i,E=l,_=r,S=m;P;)switch(v=u,u=tt()){case 40:if(v!=108&&se(S,f-1)==58){Oi(S+=I(co(u),"&","&\f"),"&\f",Kd(c?s[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:S+=co(u);break;case 9:case 10:case 13:case 32:S+=y0(v);break;case 92:S+=v0(Ai()-1,7);continue;case 47:switch(Rt()){case 42:case 47:pr(S0(x0(tt(),Ai()),t,n,a),a),(Vr(v||1)==5||Vr(Rt()||1)==5)&&qe(S)&&pn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*x:s[c++]=qe(S)*p;case 125*x:case 59:case 0:switch(u){case 0:case 125:P=0;case 59+h:p==-1&&(S=I(S,/\f/g,"")),y>0&&(qe(S)-f||x===0&&v===47)&&pr(y>32?Zu(S+";",r,n,f-1,a):Zu(I(S," ","")+";",r,n,f-2,a),a);break;case 59:S+=";";default:if(pr(_=qu(S,t,n,c,h,i,s,m,k=[],E=[],f,l),l),u===123)if(h===0)Mi(S,t,_,_,k,l,f,s,E);else{switch(g){case 99:if(se(S,3)===110)break;case 108:if(se(S,2)===97)break;default:h=0;case 100:case 109:case 115:}h?Mi(e,_,_,r&&pr(qu(e,_,_,0,0,i,s,m,i,k=[],f,E),E),i,E,f,s,r?k:E):Mi(S,_,_,_,[""],E,0,s,E)}}c=h=y=0,x=p=1,m=S="",f=o;break;case 58:f=1+qe(S),y=v;default:if(x<1){if(u==123)--x;else if(u==125&&x++==0&&h0()==125)continue}switch(S+=_a(u),u*x){case 38:p=h>0?1:(S+="\f",-1);break;case 44:s[c++]=(qe(S)-1)*p,p=1;break;case 64:Rt()===45&&(S+=co(tt())),g=Rt(),h=f=qe(m=S+=w0(Ai())),u++;break;case 45:v===45&&qe(S)==2&&(x=0)}}return l}function qu(e,t,n,r,i,l,o,s,a,c,h,f){for(var g=i-1,y=i===0?l:[""],v=qd(y),x=0,P=0,p=0;x<r;++x)for(var u=0,m=pn(e,g+1,g=Kd(P=o[x])),k=e;u<v;++u)(k=Xd(P>0?y[u]+" "+m:I(m,/&\f/g,y[u])))&&(a[p++]=k);return Tl(e,t,n,i===0?$l:s,a,c,h,f)}function S0(e,t,n,r){return Tl(e,t,n,Gd,_a(p0()),pn(e,2,-2),0,r)}function Zu(e,t,n,r,i){return Tl(e,t,n,ja,pn(e,0,r),pn(e,r+1,-1),r,i)}function Jd(e,t,n){switch(f0(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return F+e+e;case 4855:return F+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Er+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Er+e+H+e+e;case 5936:switch(se(e,t+11)){case 114:return F+e+H+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+H+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+H+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+H+e+e;case 6165:return F+e+H+"flex-"+e+e;case 5187:return F+e+I(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return F+e+H+"flex-item-"+I(e,/flex-|-self/g,"")+(ut(e,/flex-|baseline/)?"":H+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return F+e+H+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+H+I(e,"shrink","negative")+e;case 5292:return F+e+H+I(e,"basis","preferred-size")+e;case 6060:return F+"box-"+I(e,"-grow","")+F+e+H+I(e,"grow","positive")+e;case 4554:return F+I(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+H+"flex-pack:$3"),/space-between/,"justify")+F+e+e;case 4200:if(!ut(e,/flex-|baseline/))return H+"grid-column-align"+pn(e,t)+e;break;case 2592:case 3360:return H+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ut(r.props,/grid-\w+-end/)})?~Oi(e+(n=n[t].value),"span",0)?e:H+I(e,"-start","")+e+H+"grid-row-span:"+(~Oi(n,"span",0)?ut(n,/\d+/):+ut(n,/\d+/)-+ut(e,/\d+/))+";":H+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ut(r.props,/grid-\w+-start/)})?e:H+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Er+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Oi(e,"stretch",0)?Jd(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,l,o,s,a,c){return H+i+":"+l+c+(o?H+i+"-span:"+(s?a:+a-+l)+c:"")+e});case 4949:if(se(e,t+6)===121)return I(e,":",":"+F)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(se(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+H+"$2box$3")+e;case 100:return I(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function fl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function C0(e,t,n,r){switch(e.type){case c0:if(e.children.length)break;case a0:case u0:case ja:return e.return=e.return||e.value;case Gd:return"";case Yd:return e.return=e.value+"{"+fl(e.children,r)+"}";case $l:if(!qe(e.value=e.props.join(",")))return""}return qe(n=fl(e.children,r))?e.return=e.value+"{"+n+"}":""}function E0(e){var t=qd(e);return function(n,r,i,l){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,l)||"";return o}}function P0(e){return function(t){t.root||(t=t.return)&&e(t)}}function j0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ja:e.return=Jd(e.value,e.length,n);return;case Yd:return fl([Ct(e,{value:I(e.value,"@","@"+F)})],r);case $l:if(e.length)return d0(n=e.props,function(i){switch(ut(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vn(Ct(e,{props:[I(i,/:(read-\w+)/,":"+Er+"$1")]})),vn(Ct(e,{props:[i]})),ws(e,{props:Xu(n,r)});break;case"::placeholder":vn(Ct(e,{props:[I(i,/:(plac\w+)/,":"+F+"input-$1")]})),vn(Ct(e,{props:[I(i,/:(plac\w+)/,":"+Er+"$1")]})),vn(Ct(e,{props:[I(i,/:(plac\w+)/,H+"input-$1")]})),vn(Ct(e,{props:[i]})),ws(e,{props:Xu(n,r)});break}return""})}}var Fn={},fo,po;const Gn=typeof process<"u"&&Fn!==void 0&&(Fn.REACT_APP_SC_ATTR||Fn.SC_ATTR)||"data-styled",ep="active",tp="data-styled-version",Il="6.4.2",Na=`/*!sc*/
`,Pr=typeof window<"u"&&typeof document<"u";function Ju(e){if(typeof process<"u"&&Fn!==void 0){const t=Fn[e];if(t!==void 0&&t!=="")return t!=="false"}}const _0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(po=(fo=Ju("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&fo!==void 0?fo:Ju("SC_DISABLE_SPEEDY"))!==null&&po!==void 0?po:typeof process<"u"&&Fn!==void 0&&!1),N0="sc-keyframes-",z0={};function Ol(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let Fi=new Map,dl=new Map,Di=1;const wi=e=>{if(Fi.has(e))return Fi.get(e);for(;dl.has(Di);)Di++;const t=Di++;return Fi.set(e,t),dl.set(t,e),t},$0=e=>dl.get(e),R0=(e,t)=>{Di=t+1,Fi.set(e,t),dl.set(t,e)},za=Object.freeze([]),Yn=Object.freeze({});function np(e,t,n=Yn){return e.theme!==n.theme&&e.theme||t||n.theme}const T0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,L0=/(^-|-$)/g;function rp(e){return e.replace(T0,"-").replace(L0,"")}const I0=/(a)(d)/gi,ec=e=>String.fromCharCode(e+(e>25?39:97));function ip(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ec(t%52)+n;return(ec(t%52)+n).replace(I0,"$1-$2")}const Ss=5381,sn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},lp=e=>sn(Ss,e);function op(e){return ip(lp(e)>>>0)}function O0(e){return e.displayName||e.name||"Component"}function Cs(e){return typeof e=="string"&&!0}function A0(e){return Cs(e)?`styled.${e}`:`Styled(${O0(e)})`}const sp=Symbol.for("react.memo"),M0=Symbol.for("react.forward_ref"),F0={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},D0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ap={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},U0={[M0]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[sp]:ap};function tc(e){return("type"in(t=e)&&t.type.$$typeof)===sp?ap:"$$typeof"in e?U0[e.$$typeof]:F0;var t}const B0=Object.defineProperty,W0=Object.getOwnPropertyNames,b0=Object.getOwnPropertySymbols,H0=Object.getOwnPropertyDescriptor,V0=Object.getPrototypeOf,Q0=Object.prototype;function up(e,t,n){if(typeof t!="string"){const r=V0(t);r&&r!==Q0&&up(e,r,n);const i=W0(t).concat(b0(t)),l=tc(e),o=tc(t);for(let s=0;s<i.length;++s){const a=i[s];if(!(a in D0||n&&n[a]||o&&a in o||l&&a in l)){const c=H0(t,a);try{B0(e,a,c)}catch{}}}}return e}function ei(e){return typeof e=="function"}const G0=Symbol.for("react.forward_ref");function $a(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===G0&&"styledComponentId"in e}function hr(e,t){return e&&t?e+" "+t:e||t||""}function Es(e,t){return e.join("")}function Qr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ps(e,t,n=!1){if(!n&&!Qr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Ps(e[r],t[r]);else if(Qr(t))for(const r in t)e[r]=Ps(e[r],t[r]);return e}function cp(e,t){Object.defineProperty(e,"toString",{value:t})}const Y0=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const i=this.groupSizes,l=i.length;let o=l;for(;e>=o;)if(o<<=1,o<0)throw Ol(16,`${e}`);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(let s=l;s<o;s++)this.groupSizes[s]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,l=t.length;i<l;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let l=r;l<i;l++)t+=this.tag.getRule(l)+Na;return t}},K0=`style[${Gn}][${tp}="${Il}"]`,X0=new RegExp(`^${Gn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),nc=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,js=e=>{if(!e)return document;if(nc(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(nc(t))return t}return document},q0=(e,t,n)=>{const r=n.split(",");let i;for(let l=0,o=r.length;l<o;l++)(i=r[l])&&e.registerName(t,i)},Z0=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Na),i=[];for(let l=0,o=r.length;l<o;l++){const s=r[l].trim();if(!s)continue;const a=s.match(X0);if(a){const c=0|parseInt(a[1],10),h=a[2];c!==0&&(R0(h,c),q0(e,h,a[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}},ho=e=>{const t=js(e.options.target).querySelectorAll(K0);for(let n=0,r=t.length;n<r;n++){const i=t[n];i&&i.getAttribute(Gn)!==ep&&(Z0(e,i),i.parentNode&&i.parentNode.removeChild(i))}};let ar=!1;function J0(){if(ar!==!1)return ar;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ar=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return ar=t.getAttribute("content")||void 0}return ar=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const fp=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),l=(a=>{const c=Array.from(a.querySelectorAll(`style[${Gn}]`));return c[c.length-1]})(r),o=l!==void 0?l.nextSibling:null;i.setAttribute(Gn,ep),i.setAttribute(tp,Il);const s=t||J0();return s&&i.setAttribute("nonce",s),r.insertBefore(i,o),i},e1=class{constructor(e,t){this.element=fp(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let l=0,o=i.length;l<o;l++){const s=i[l];if(s.ownerNode===n)return s}throw Ol(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},t1=class{constructor(e,t){this.element=fp(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let rc=Pr;const n1={isServer:!Pr,useCSSOMInjection:!_0};class ti{static registerId(t){return wi(t)}constructor(t=Yn,n={},r){this.options=Object.assign(Object.assign({},n1),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Pr&&rc&&(rc=!1,ho(this)),cp(this,()=>(i=>{const l=i.getTag(),{length:o}=l;let s="";for(let a=0;a<o;a++){const c=$0(a);if(c===void 0)continue;const h=i.names.get(c);if(h===void 0||!h.size)continue;const f=l.getGroup(a);if(f.length===0)continue;const g=Gn+".g"+a+'[id="'+c+'"]';let y="";for(const v of h)v.length>0&&(y+=v+",");s+=f+g+'{content:"'+y+'"}'+Na}return s})(this))}rehydrate(){!this.server&&Pr&&ho(this)}reconstructWithOptions(t,n=!0){const r=new ti(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Pr&&t.target!==this.options.target&&js(this.options.target)!==js(t.target)&&ho(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:i})=>n?new e1(r,i):new t1(r,i))(this.options),new Y0(t)));var t}hasNameForId(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i}registerName(t,n){wi(t),t.startsWith(N0)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(wi(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(wi(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const dp=new WeakSet,r1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function i1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in r1||e.startsWith("--")?String(t).trim():t+"px"}const Jt=47;function ic(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const l1=Symbol.for("sc-keyframes");function o1(e){return typeof e=="object"&&e!==null&&l1 in e}function pp(e){return ei(e)&&!(e.prototype&&e.prototype.isReactComponent)}const hp=e=>e==null||e===!1||e==="",s1=Symbol.for("react.client.reference");function lc(e){return e.$$typeof===s1}function mp(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!hp(r)&&(Array.isArray(r)&&dp.has(r)||ei(r)?t.push(ic(n)+":",r,";"):Qr(r)?(t.push(n+" {"),mp(r,t),t.push("}")):t.push(ic(n)+": "+i1(n,r)+";"))}}function Ut(e,t,n,r,i=[]){if(hp(e))return i;const l=typeof e;if(l==="string")return i.push(e),i;if(l==="function"){if(lc(e))return i;if(pp(e)&&t){const o=e(t);return Ut(o,t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let o=0;o<e.length;o++)Ut(e[o],t,n,r,i);return i}return $a(e)?(i.push(`.${e.styledComponentId}`),i):o1(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):lc(e)?i:Qr(e)?e.toString!==Object.prototype.toString?(i.push(e.toString()),i):(mp(e,i),i):(i.push(e.toString()),i)}const a1=lp(Il);class u1{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=sn(a1,n),this.baseStyle=r,ti.registerId(n)}generateAndInjectStyles(t,n,r){let i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let l="";for(let o=0;o<this.rules.length;o++){const s=this.rules[o];if(typeof s=="string")l+=s;else if(s)if(pp(s)){const a=s(t);typeof a=="string"?l+=a:a!=null&&a!==!1&&(l+=Es(Ut(a,t,n,r)))}else l+=Es(Ut(s,t,n,r))}if(l){this.dynamicNameCache||(this.dynamicNameCache=new Map);const o=r.hash?r.hash+l:l;let s=this.dynamicNameCache.get(o);if(!s){if(s=ip(sn(sn(this.baseHash,r.hash),l)>>>0),this.dynamicNameCache.size>=200){const a=this.dynamicNameCache.keys().next().value;a!==void 0&&this.dynamicNameCache.delete(a)}this.dynamicNameCache.set(o,s)}if(!n.hasNameForId(this.componentId,s)){const a=r(l,"."+s,void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=hr(i,s)}}return i}}const c1=/&/g;function gp(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function mo(e){const t=e.length;let n="",r=0,i=0,l=0,o=!1,s=!1;for(let a=0;a<t;a++){const c=e.charCodeAt(a);if(l!==0||o||c!==Jt||e.charCodeAt(a+1)!==42)if(o)c===42&&e.charCodeAt(a+1)===Jt&&(o=!1,a++);else if(c!==34&&c!==39||gp(e,a)){if(l===0)if(c===123)i++;else if(c===125){if(i--,i<0){s=!0;let h=a+1;for(;h<t;){const f=e.charCodeAt(h);if(f===59||f===10)break;h++}h<t&&e.charCodeAt(h)===59&&h++,i=0,a=h-1,r=h;continue}i===0&&(n+=e.substring(r,a+1),r=a+1)}else c===59&&i===0&&(n+=e.substring(r,a+1),r=a+1)}else l===0?l=c:l===c&&(l=0);else o=!0,a++}return s||i!==0||l!==0?(r<t&&i===0&&l===0&&(n+=e.substring(r)),n):e}function yp(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const l=e[i];if(l.type==="rule"){l.value=(n+l.value).replaceAll(",",r);const o=l.props,s=[];for(let a=0;a<o.length;a++)s[a]=n+o[a];l.props=s}Array.isArray(l.children)&&l.type!=="@keyframes"&&yp(l.children,t)}return e}function f1({options:e=Yn,plugins:t=za}=Yn){let n,r,i;const l=(g,y,v)=>v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?`.${n}`:g,o=t.slice();o.push(g=>{g.type===$l&&g.value.includes("&")&&(i||(i=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(c1,r).replace(i,l))}),e.prefix&&o.push(j0),o.push(C0);let s=[];const a=E0(o.concat(P0(g=>s.push(g)))),c=(g,y="",v="",x="&")=>{n=x,r=y,i=void 0;const P=function(u){const m=u.indexOf("//")!==-1,k=u.indexOf("}")!==-1;if(!m&&!k)return u;if(!m)return mo(u);const E=u.length;let _="",S=0,j=0,D=0,L=0,Q=0,Ve=!1;for(;j<E;){const q=u.charCodeAt(j);if(q!==34&&q!==39||gp(u,j))if(D===0)if(q===Jt&&j+1<E&&u.charCodeAt(j+1)===42){for(j+=2;j+1<E&&(u.charCodeAt(j)!==42||u.charCodeAt(j+1)!==Jt);)j++;j+=2}else if(q!==40)if(q!==41)if(L>0)j++;else if(q===42&&j+1<E&&u.charCodeAt(j+1)===Jt)_+=u.substring(S,j),j+=2,S=j,Ve=!0;else if(q===Jt&&j+1<E&&u.charCodeAt(j+1)===Jt){for(_+=u.substring(S,j);j<E&&u.charCodeAt(j)!==10;)j++;S=j,Ve=!0}else q===123?Q++:q===125&&Q--,j++;else L>0&&L--,j++;else L++,j++;else j++;else D===0?D=q:D===q&&(D=0),j++}return Ve?(S<E&&(_+=u.substring(S)),Q===0?_:mo(_)):Q===0?u:mo(u)}(g);let p=k0(v||y?v+" "+y+" { "+P+" }":P);return e.namespace&&(p=yp(p,e.namespace)),s=[],fl(p,a),s},h=e;let f=Ss;for(let g=0;g<t.length;g++)t[g].name||Ol(15),f=sn(f,t[g].name);return h?.namespace&&(f=sn(f,h.namespace)),h?.prefix&&(f=sn(f,"p")),c.hash=f!==Ss?f.toString():"",c}const d1=new ti,p1=f1(),vp=Re.createContext({shouldForwardProp:void 0,styleSheet:d1,stylis:p1,stylisPlugins:void 0});vp.Consumer;function xp(){return Re.useContext(vp)}const Ra=Re.createContext(void 0);Ra.Consumer;const oc=Object.prototype.hasOwnProperty,go={};function h1(e,t){const n=typeof e!="string"?"sc":rp(e);go[n]=(go[n]||0)+1;const r=n+"-"+op(Il+n+go[n]);return t?t+"-"+r:r}function m1(e,t,n){const r=$a(e),i=e,l=!Cs(e),{attrs:o=za,componentId:s=h1(t.displayName,t.parentComponentId),displayName:a=A0(e)}=t,c=t.displayName&&t.componentId?rp(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o;let{shouldForwardProp:f}=t;if(r&&i.shouldForwardProp){const x=i.shouldForwardProp;if(t.shouldForwardProp){const P=t.shouldForwardProp;f=(p,u)=>x(p,u)&&P(p,u)}else f=x}const g=new u1(n,c,r?i.componentStyle:void 0);function y(x,P){return function(p,u,m){const{attrs:k,componentStyle:E,defaultProps:_,foldedComponentIds:S,styledComponentId:j,target:D}=p,L=Re.useContext(Ra),Q=xp(),Ve=p.shouldForwardProp||Q.shouldForwardProp,q=np(u,L,_)||Yn;let Qe,Qt;{const R=Re.useRef(null),T=R.current;if(T!==null&&T[1]===q&&T[2]===Q.styleSheet&&T[3]===Q.stylis&&T[7]===E&&function(B,M,le){const Z=B,te=M;let Ne=0;for(const Me in te)if(oc.call(te,Me)&&(Ne++,Z[Me]!==te[Me]))return!1;return Ne===le}(T[0],u,T[4]))Qe=T[5],Qt=T[6];else{Qe=function(M,le,Z){const te=Object.assign(Object.assign({},le),{className:void 0,theme:Z}),Ne=M.length>1;for(let Me=0;Me<M.length;Me++){const Al=M[Me],ni=ei(Al)?Al(Ne?Object.assign({},te):te):Al;for(const kt in ni)kt==="className"?te.className=hr(te.className,ni[kt]):kt==="style"?te.style=Object.assign(Object.assign({},te.style),ni[kt]):kt in le&&le[kt]===void 0||(te[kt]=ni[kt])}return"className"in le&&typeof le.className=="string"&&(te.className=hr(te.className,le.className)),te}(k,u,q),Qt=function(M,le,Z,te){return M.generateAndInjectStyles(le,Z,te)}(E,Qe,Q.styleSheet,Q.stylis);let B=0;for(const M in u)oc.call(u,M)&&B++;R.current=[u,q,Q.styleSheet,Q.stylis,B,Qe,Qt,E]}}const wt=Qe.as||D,Gt=function(R,T,B,M){const le={};for(const Z in R)R[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&R.theme===B||(Z==="forwardedAs"?le.as=R.forwardedAs:M&&!M(Z,T)||(le[Z]=R[Z]));return le}(Qe,wt,q,Ve);let z=hr(S,j);return Qt&&(z+=" "+Qt),Qe.className&&(z+=" "+Qe.className),Gt[Cs(wt)&&wt.includes("-")?"class":"className"]=z,m&&(Gt.ref=m),N.createElement(wt,Gt)}(v,x,P)}y.displayName=a;let v=Re.forwardRef(y);return v.attrs=h,v.componentStyle=g,v.displayName=a,v.shouldForwardProp=f,v.foldedComponentIds=r?hr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=c,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get(){return this._foldedDefaultProps},set(x){this._foldedDefaultProps=r?function(P,...p){for(const u of p)Ps(P,u,!0);return P}({},i.defaultProps,x):x}}),cp(v,()=>`.${v.styledComponentId}`),l&&up(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}var g1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function sc(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const ac=e=>(dp.add(e),e);function wp(e,...t){if(ei(e)||Qr(e))return ac(Ut(sc(za,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Ut(n):ac(Ut(sc(n,t)))}function _s(e,t,n=Yn){if(!t)throw Ol(1,t);const r=(i,...l)=>e(t,n,wp(i,...l));return r.attrs=i=>_s(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)})),r.withConfig=i=>_s(e,t,Object.assign(Object.assign({},n),i)),r}const kp=e=>_s(m1,e),w=kp;g1.forEach(e=>{w[e]=kp(e)});class y1{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let i=0;i<r.length;i+=1){const l=r[i];if(ei(l)&&!$a(l))return!1}return!0}(t),ti.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,i){const l=this.componentId;if(this.isStatic){if(r.hasNameForId(l,l+t))this.instanceRules.has(t)||this.computeRules(t,n,r,i);else{const s=this.computeRules(t,n,r,i);r.insertRules(l,s.name,s.rules)}return}const o=this.instanceRules.get(t);if(this.computeRules(t,n,r,i),!r.server&&o){const s=o.rules,a=this.instanceRules.get(t).rules;if(s.length===a.length){let c=!0;for(let h=0;h<s.length;h++)if(s[h]!==a[h]){c=!1;break}if(c)return}}this.rebuildGroup(r)}computeRules(t,n,r,i){const l=Es(Ut(this.rules,n,r,i)),o={name:this.componentId+t,rules:i(l,"")};return this.instanceRules.set(t,o),o}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function v1(e,...t){const n=wp(e,...t),r=`sc-global-${op(JSON.stringify(n))}`,i=new y1(n,r),l=s=>{const a=xp(),c=Re.useContext(Ra);let h;{const f=Re.useRef(null);f.current===null&&(f.current=a.styleSheet.allocateGSInstance(r)),h=f.current}a.styleSheet.server&&o(h,s,a.styleSheet,c,a.stylis);{const f=i.isStatic?[h,a.styleSheet,i]:[h,s,a.styleSheet,c,a.stylis,i],g=Re.useRef(i);Re.useLayoutEffect(()=>{a.styleSheet.server||(g.current!==i&&(a.styleSheet.clearRules(r),g.current=i),o(h,s,a.styleSheet,c,a.stylis))},f),Re.useLayoutEffect(()=>()=>{a.styleSheet.server||i.removeStyles(h,a.styleSheet)},[h,a.styleSheet,i])}return a.styleSheet.server&&i.instanceRules.delete(h),null};function o(s,a,c,h,f){if(i.isStatic)i.renderStyles(s,z0,c,f);else{const g=Object.assign(Object.assign({},a),{theme:np(a,h,l.defaultProps)});i.renderStyles(s,g,c,f)}}return Re.memo(l)}const x1=w.footer`
  background: var(--bg-ink);
  color: #c9d1e3;
  padding: 4rem 1.4rem 2.4rem;
`,w1=w.div`
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 1.1fr) 2fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,k1=w.div`
  display: grid;
  gap: 1rem;
  align-content: start;
`,S1=w.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #ffffff;
`,C1=w.img`
  width: 38px;
  height: 38px;
`,E1=w.span`
  font-family: 'DM Serif Display', 'Space Grotesk', serif;
  font-weight: 400;
  font-size: 1.45rem;
  color: #ffffff;
  letter-spacing: 0.08em;
  line-height: 1;
  position: relative;
  top: 1px;
`,P1=w.p`
  margin: 0;
  color: #95a2bf;
  line-height: 1.65;
  max-width: 320px;
`,j1=w.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 1.6rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,yo=w.div`
  display: grid;
  gap: 0.55rem;
  align-content: start;
`,vo=w.h4`
  margin: 0 0 0.4rem;
  color: #ffffff;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
`,ve=w.a`
  color: #b9c4dd;
  font-size: 0.95rem;
  line-height: 1.5;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`,_1=w.div`
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
`,N1=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,z1=()=>{const e=typeof window<"u"?window.location.hostname:"divvylore.com",t=`${$e.appUrls.register}?source=${encodeURIComponent(e)}&placement=footer`,n=`${$e.appUrls.login}?source=${encodeURIComponent(e)}&placement=footer`,r=`${$e.appUrls.base}/privacy-policy`,i=`${$e.appUrls.base}/terms-and-conditions`;return d.jsxs(x1,{children:[d.jsxs(w1,{children:[d.jsxs(k1,{children:[d.jsxs(S1,{href:"/","aria-label":"Divvylore home",children:[d.jsx(C1,{src:"/img/svg/logo.svg",alt:""}),d.jsx(E1,{children:"DIVVYLORE"})]}),d.jsx(P1,{children:$e.brand.tagline})]}),d.jsxs(j1,{children:[d.jsxs(yo,{children:[d.jsx(vo,{children:"Product"}),d.jsx(ve,{href:"#highlights",children:"Platform"}),d.jsx(ve,{href:"#how-it-works",children:"How it works"}),d.jsx(ve,{href:"#features",children:"Capabilities"}),d.jsx(ve,{href:"#security",children:"Security"}),d.jsx(ve,{href:"#pricing",children:"Pricing"})]}),d.jsxs(yo,{children:[d.jsx(vo,{children:"Resources"}),d.jsx(ve,{href:"#faq",children:"FAQ"}),d.jsx(ve,{href:$e.appUrls.base,children:"Customer portal"}),d.jsx(ve,{href:t,children:"Create account"}),d.jsx(ve,{href:n,children:"Sign in"}),d.jsx(ve,{href:"mailto:hello@divvylore.com",children:"Contact"})]}),d.jsxs(yo,{children:[d.jsx(vo,{children:"Company"}),d.jsx(ve,{href:$e.appUrls.base,children:"About"}),d.jsx(ve,{href:r,children:"Privacy policy"}),d.jsx(ve,{href:i,children:"Terms and conditions"})]})]})]}),d.jsxs(_1,{children:[d.jsx("span",{children:$e.footer.copyright}),d.jsxs(N1,{children:[d.jsx(ve,{href:r,children:"Privacy"}),d.jsx(ve,{href:i,children:"Terms"})]})]})]})},$1=w.header`
  position: sticky;
  top: 0;
  z-index: 120;
  background: rgba(245, 243, 238, 0.82);
  backdrop-filter: saturate(140%) blur(16px);
  border-bottom: 1px solid var(--line);
`,R1=w.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0.7rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 700px) {
    padding: 0.6rem 1rem;
  }
`,T1=w.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text-primary);
  flex-shrink: 0;
`,L1=w.img`
  width: 38px;
  height: 38px;
  display: block;
`,I1=w.span`
  font-family: 'DM Serif Display', 'Space Grotesk', serif;
  font-weight: 400;
  font-size: 1.45rem;
  letter-spacing: 0.08em;
  color: #2a2a2a;
  line-height: 1;
  position: relative;
  top: 1px;
`,O1=w.nav`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 0.6rem;

  @media (max-width: 960px) {
    display: none;
  }
`,Ui=w.a`
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
`,A1=w.div`
  flex: 1;
`,M1=w.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 700px) {
    gap: 0.4rem;
  }
`,F1=w.a`
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
`,D1=w.a`
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
`,U1=w.button`
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
`,B1=w.div`
  display: ${e=>e.open?"grid":"none"};
  gap: 0.3rem;
  padding: 0.5rem 1rem 1rem;
  border-bottom: 1px solid var(--line);
  background: var(--bg-page);

  ${Ui} {
    padding: 0.7rem 0.8rem;
    border-radius: 10px;
    font-size: 1rem;
  }

  @media (min-width: 961px) {
    display: none;
  }
`,W1=()=>{const[e,t]=N.useState(!1),n=typeof window<"u"?window.location.hostname:"divvylore.com",r=`${$e.appUrls.register}?source=${encodeURIComponent(n)}&placement=header`,i=`${$e.appUrls.login}?source=${encodeURIComponent(n)}&placement=header`;return d.jsxs($1,{children:[d.jsxs(R1,{children:[d.jsxs(T1,{href:"/","aria-label":"Divvylore home",children:[d.jsx(L1,{src:"/img/svg/logo.svg",alt:""}),d.jsx(I1,{children:"DIVVYLORE"})]}),d.jsx(O1,{children:$e.navigation.map(l=>d.jsx(Ui,{href:l.href,children:l.label},l.label))}),d.jsx(A1,{}),d.jsxs(M1,{children:[d.jsx(F1,{href:i,children:"Sign in"}),d.jsx(D1,{href:r,children:"Get started"}),d.jsx(U1,{type:"button","aria-label":"Toggle menu","aria-expanded":e,onClick:()=>t(l=>!l),children:d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:d.jsx("path",{d:"M2 4.5h14M2 9h14M2 13.5h14",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})})})]})]}),d.jsxs(B1,{open:e,children:[$e.navigation.map(l=>d.jsx(Ui,{href:l.href,onClick:()=>t(!1),children:l.label},`m-${l.label}`)),d.jsx(Ui,{href:i,onClick:()=>t(!1),children:"Sign in"})]})]})};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=e=>{const t=H1(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Q1=N.createContext({}),G1=()=>N.useContext(Q1),Y1=N.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:l,iconNode:o,...s},a)=>{const{size:c=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:g="currentColor",className:y=""}=G1()??{},v=r??f?Number(n??h)*24/Number(t??c):n??h;return N.createElement("svg",{ref:a,...xo,width:t??c??xo.width,height:t??c??xo.height,stroke:e??g,strokeWidth:v,className:Sp("lucide",y,i),...!l&&!V1(s)&&{"aria-hidden":"true"},...s},[...o.map(([x,P])=>N.createElement(x,P)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=(e,t)=>{const n=N.forwardRef(({className:r,...i},l)=>N.createElement(Y1,{ref:l,iconNode:t,className:Sp(`lucide-${b1(uc(e))}`,`lucide-${e}`,r),...i}));return n.displayName=uc(e),n};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],cc=xt("arrow-right",K1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],q1=xt("bot",X1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],J1=xt("circle-check",Z1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ty=xt("plus",ey);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],fc=xt("shield-check",ny);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],dc=xt("sparkles",ry);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],pc=xt("star",iy);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],oy=xt("workflow",ly);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ay=xt("zap",sy),uy=w.main`
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
`,Ye=w.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.4rem;

  @media (max-width: 700px) {
    padding: 0 1rem;
  }
`,cy=w.section`
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
`,fy=w.div`
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
`,dy=w.span`
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
`,py=w.h1`
  margin: 0;
  font-size: clamp(2.4rem, 6.8vw, 4.6rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
  max-width: 980px;
  font-weight: 600;
  animation: rise 0.55s ease both;
`,hy=w.span`
  background: linear-gradient(120deg, #1f3df0 0%, #5b3ce4 55%, #ec6f3a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,my=w.p`
  margin: 1.3rem 0 0;
  max-width: 700px;
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  line-height: 1.6;
  color: var(--text-secondary);
  animation: rise 0.6s ease 0.04s both;
`,gy=w.div`
  margin-top: 1.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  animation: rise 0.6s ease 0.08s both;
`,Cp=w.a`
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
`,yy=w.a`
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
`,vy=w.div`
  margin-top: clamp(2.5rem, 6vw, 4rem);
  border-radius: 28px;
  border: 1px solid var(--line-strong);
  background: linear-gradient(160deg, #ffffff 0%, #f2eee2 100%);
  padding: clamp(0.85rem, 2.4vw, 1.4rem);
  box-shadow:
    0 30px 60px -28px rgba(20, 30, 70, 0.22),
    0 8px 18px -10px rgba(20, 30, 70, 0.12);
  animation: rise 0.7s ease 0.12s both;
`,xy=w.div`
  border-radius: 20px;
  background: #0a0d14;
  color: #d6dff5;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.35fr 1fr;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,wy=w.div`
  padding: 1.1rem 1.2rem 1.3rem;
  display: grid;
  gap: 0.7rem;
  align-content: start;
  border-right: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 820px) {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`,ky=w.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding-bottom: 0.7rem;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`,Sy=w.span`
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
`,Cy=w.div`
  display: grid;
  gap: 0.1rem;
`,Ey=w.strong`
  font-size: 0.88rem;
  color: #ffffff;
  font-weight: 600;
`,Py=w.span`
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
`,wo=w.div`
  align-self: ${e=>e.side==="out"?"flex-end":"flex-start"};
  max-width: 90%;
  padding: 0.7rem 0.9rem;
  border-radius: 14px;
  font-size: 0.92rem;
  line-height: 1.5;
  background: ${e=>e.side==="out"?"linear-gradient(135deg, #1f3df0, #1a31bc)":"rgba(255, 255, 255, 0.06)"};
  color: ${e=>e.side==="out"?"#ffffff":"#cfd9f1"};
  border: 1px solid ${e=>e.side==="out"?"transparent":"rgba(255,255,255,0.07)"};
`,jy=w.div`
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
`;w.span`
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #6f7da0;
`;const _y=w.div`
  padding: 1.1rem 1.2rem 1.3rem;
  display: grid;
  gap: 0.85rem;
  align-content: start;
`,Ny=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-bottom: 0.7rem;
  margin-bottom: 0.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`,zy=w.strong`
  font-size: 0.88rem;
  color: #ffffff;
  font-weight: 600;
`,$y=w.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #7fe8c9;
  font-weight: 700;
`,Ry=w.div`
  display: grid;
  gap: 0.18rem;
  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`,Ty=w.strong`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.5rem, 3.6vw, 1.95rem);
  color: #ffffff;
  letter-spacing: -0.01em;
  line-height: 1.1;
`,Ly=w.span`
  font-size: 0.78rem;
  color: #8f9bbb;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`,Iy=w.section`
  padding: 1.5rem 0 3rem;
  border-top: 1px solid var(--line);
  margin-top: 2rem;
`,Oy=w.p`
  margin: 0 0 1rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
`,Ay=w.div`
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`,My=w.div`
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: marquee 28s linear infinite;
`,Fy=w.span`
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
`,ki=w.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`,Yt=w.span`
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
`,Kt=w.h2`
  margin: 0.85rem 0 0;
  font-size: clamp(1.75rem, 4.4vw, 2.85rem);
  line-height: 1.1;
  letter-spacing: -0.018em;
  max-width: 820px;
  font-weight: 600;
`,Xt=w.p`
  margin: 0.85rem 0 0;
  max-width: 720px;
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.65;
  color: var(--text-secondary);
`,hc=w.div`
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
`,Dy=w.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,ko=w.article`
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
`,So=w.span`
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: rgba(31, 61, 240, 0.1);
  color: var(--brand-strong);
`,Co=w.h3`
  margin: 0.2rem 0 0;
  font-size: 1.12rem;
  font-weight: 600;
`,Eo=w.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.98rem;
  line-height: 1.6;
`,Uy=w.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`;w.div`
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
`;w.div`
  border-radius: 24px;
  border: 1px solid var(--line-strong);
  background: linear-gradient(160deg, #ffffff, #efeadc);
  padding: clamp(1rem, 3vw, 1.8rem);
  min-height: 280px;
  display: grid;
  gap: 0.8rem;
  align-content: center;
  box-shadow: 0 22px 40px -28px rgba(20, 30, 70, 0.2);
`;w.div`
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
`;const By=w.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`,Wy=w.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`,by=w.div`
  padding: 1.5rem;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 14px 28px -22px rgba(20, 30, 70, 0.15);
`,Hy=w.strong`
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4.6vw, 2.6rem);
  letter-spacing: -0.02em;
  color: var(--text-primary);
`,Vy=w.span`
  display: block;
  margin-top: 0.4rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`,Qy=w.section`
  padding: clamp(3rem, 7vw, 6rem) 0;
`,Gy=w.blockquote`
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
`,Yy=w.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.35rem, 3.4vw, 2rem);
  line-height: 1.32;
  color: #ffffff;
  letter-spacing: -0.012em;
`,Ky=w.div`
  margin-top: 1.4rem;
  font-size: 0.92rem;
  color: #b9c4dd;
`,Xy=w.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`,qy=w.div`
  margin-top: 1.6rem;
  display: inline-flex;
  padding: 0.25rem;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, 0.85);
  gap: 0.2rem;
`,mc=w.button`
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
`,Zy=w.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  align-items: stretch;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Jy=w.article`
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
`,gc=w.span`
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
`,ev=w.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
`,tv=w.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
`,yc=w.strong`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.8rem, 3.6vw, 2.3rem);
  letter-spacing: -0.02em;
  color: var(--text-primary);
`,nv=w.span`
  color: var(--text-muted);
  font-size: 0.95rem;
`,rv=w.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.92rem;
  min-height: 42px;
`,iv=w.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  color: var(--text-primary);
  padding: 0.32rem 0.6rem;
  border-radius: 999px;
  background: rgba(31, 61, 240, 0.08);
  width: fit-content;
`,lv=w.a`
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
`,ov=w.ul`
  margin: 0.3rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
`,sv=w.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  line-height: 1.45;
`;w.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;w.div`
  padding: 1.2rem 1.3rem;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.85);
`;w.h3`
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  font-weight: 600;
`;w.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
`;const av=w.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
  border-top: 1px solid var(--line);
`,uv=w.div`
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
`,cv=w.h2`
  margin: 0;
  font-size: clamp(1.8rem, 4.6vw, 2.8rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 720px;
`,fv=w.p`
  margin: 0;
  color: #c9d1e3;
  max-width: 620px;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
`,dv=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: center;
`,pv=w(Cp)`
  background: #ffffff;
  color: var(--text-primary);

  &:hover {
    background: #f1f1f1;
  }
`,hv=w.a`
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
`,mv=w.ol`
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
`,gv=w.li`
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
`,yv=w.span`
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
`,vv=w.div`
  display: grid;
  gap: 0.3rem;
`,xv=w.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
`,wv=w.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.55;
`,kv=w.div`
  margin-top: 2.2rem;
  display: grid;
  gap: 0.65rem;
  max-width: 880px;
`,Sv=w.details`
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
`,Cv=w.summary`
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
`,Ev=w.div`
  padding: 0 1.25rem 1.1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.97rem;
`,Ns="https://app.divvylore.com",Pv=Ns.replace(/\/$/,""),Po="/register",jv="/login",_v=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:e%1===0?0:2}).format(e),xn=e=>{const t=Number(e);return Number.isFinite(t)?t:0},vc=["ENTERPRISE","SUPPORT TEAMS","FINTECH","SAAS","HEALTHCARE","MARKETPLACES","RETAIL","EDUCATION"],Nv=[{value:"24/7",label:"Always-on coverage"},{value:"<2m",label:"Median first response"},{value:"99.9%",label:"Platform reliability target"}],zv=[{value:"90%",label:"Faster resolutions on common tickets"},{value:"60%",label:"Reduction in repeat contacts"},{value:"10x",label:"Throughput vs. linear staffing"},{value:"Days",label:"From kickoff to first deployment"}],$v=e=>(Array.isArray(e?.pricing?.plans)?e.pricing.plans:[]).map((n,r)=>{const i=Number(String(n.price||"").replace(/[^\d.]/g,"")),l=Number.isFinite(i)?i:0;return{id:n.planCode||`${n.name}-${r}`,name:n.name,description:n.description,code:n.planCode,monthlyPrice:l,yearlyPrice:l>0?Math.round(l*10):0,monthlyCredits:0,yearlyCredits:0,yearlyBonusCredits:0,features:(n.features||[]).map((o,s)=>({name:o,isIncluded:!0,displayOrder:s})),buttonText:n.ctaLabel,isPopular:!!n.highlighted,isActive:!0,isVisible:!0,displayOrder:r,isCustomPricing:String(n.price||"").toLowerCase().includes("custom")}}),xc=()=>{const e=$e,t=N.useMemo(()=>$v(e),[e]),[n,r]=N.useState("monthly"),[i,l]=N.useState(t),[o,s]=N.useState(!0);N.useEffect(()=>{const y=new AbortController;return(async()=>{s(!0);try{const x=await fetch(`${Pv}/account/tenant/plans`,{method:"GET",headers:{Accept:"application/json"},signal:y.signal});if(!x.ok)throw new Error(`Pricing API returned ${x.status}`);const P=await x.json();if(!Array.isArray(P))throw new Error("Pricing API response is not a plan list");const p=P.map(u=>({...u,monthlyPrice:xn(u.monthlyPrice),yearlyPrice:xn(u.yearlyPrice),monthlyCredits:xn(u.monthlyCredits),yearlyCredits:xn(u.yearlyCredits),yearlyBonusCredits:xn(u.yearlyBonusCredits??0),displayOrder:xn(u.displayOrder??999),features:Array.isArray(u.features)?u.features:[]})).sort((u,m)=>(u.displayOrder??999)-(m.displayOrder??999));p.length>0&&l(p)}catch(x){if(x.name==="AbortError")return}finally{s(!1)}})(),()=>y.abort()},[]);const a=N.useMemo(()=>i.filter(y=>y.name),[i]),c=n==="monthly"?"/month":"/year",h=typeof window<"u"?window.location.hostname:"divvylore.com",f=(y,v)=>{const x=new URLSearchParams({source:h,...v||{}}).toString();return`${Ns}${y}?${x}`},g=[...vc,...vc];return d.jsxs(uy,{children:[d.jsxs(cy,{children:[d.jsxs(Ye,{children:[d.jsxs(fy,{children:[d.jsx(dy,{children:"New"}),"Conversational AI for customer support"]}),d.jsxs(py,{children:["Support agents that resolve issues and"," ",d.jsx(hy,{children:"keep customers moving."})]}),d.jsx(my,{children:e.hero?.description}),d.jsxs(gy,{children:[d.jsxs(Cp,{href:f(Po,{placement:"hero"}),target:"_blank",rel:"noreferrer",children:["Get started",d.jsx(cc,{size:16})]}),d.jsx(yy,{href:"#pricing",children:"View pricing"})]}),d.jsx(vy,{children:d.jsxs(xy,{children:[d.jsxs(wy,{children:[d.jsxs(ky,{children:[d.jsx(Sy,{children:"D"}),d.jsxs(Cy,{children:[d.jsx(Ey,{children:"Divvylore Agent"}),d.jsx(Py,{children:"Online · responds in < 2s"})]})]}),d.jsx(wo,{side:"in",children:"Hi, I can’t access my dashboard after the billing update."}),d.jsx(wo,{side:"out",children:"Got it. I’ve verified your account and re-issued access. You should be back in under a minute."}),d.jsx(wo,{side:"in",children:"Perfect — works now. Thanks!"}),d.jsxs(jy,{"aria-hidden":!0,children:[d.jsx("span",{})," ",d.jsx("span",{})," ",d.jsx("span",{})]})]}),d.jsxs(_y,{children:[d.jsxs(Ny,{children:[d.jsx(zy,{children:"Live metrics"}),d.jsx($y,{children:"Today"})]}),Nv.map(y=>d.jsxs(Ry,{children:[d.jsx(Ty,{children:y.value}),d.jsx(Ly,{children:y.label})]},y.label))]})]})})]}),d.jsx(Ye,{children:d.jsxs(Iy,{children:[d.jsx(Oy,{children:"Built for customer-facing teams across"}),d.jsx(Ay,{children:d.jsx(My,{children:g.map((y,v)=>d.jsx(Fy,{children:y},`${y}-${v}`))})})]})})]}),d.jsx(ki,{id:"highlights",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(dc,{size:14})," Platform"]}),d.jsx(Kt,{children:e.highlights?.title}),d.jsx(Xt,{children:e.highlights?.subtitle}),d.jsx(hc,{children:(e.highlights?.cards||[]).map(y=>d.jsxs(ko,{children:[d.jsx(So,{children:d.jsx(pc,{size:18})}),d.jsx(Co,{children:y.title}),d.jsx(Eo,{children:y.description})]},y.title))})]})}),d.jsx(Uy,{id:"how-it-works",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(oy,{size:14})," How it works"]}),d.jsx(Kt,{children:e.howItWorks?.title}),d.jsx(Xt,{children:"Configure your workflows, connect business context, and let agents resolve common requests with smart escalation when needed."}),d.jsx(mv,{children:(e.howItWorks?.steps||[]).map((y,v)=>d.jsxs(gv,{children:[d.jsx(yv,{children:String(v+1).padStart(2,"0")}),d.jsxs(vv,{children:[d.jsx(xv,{children:y.title}),d.jsx(wv,{children:y.description})]})]},y.title))})]})}),d.jsx(ki,{id:"features",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(q1,{size:14})," Capabilities"]}),d.jsx(Kt,{children:e.features?.title}),d.jsx(Xt,{children:"Everything you need to launch and scale production AI support, from configuration to analytics and escalation."}),d.jsx(Dy,{children:(e.features?.items||[]).map(y=>d.jsxs(ko,{children:[d.jsx(So,{children:d.jsx(ay,{size:18})}),d.jsx(Co,{children:y.title}),d.jsx(Eo,{children:y.description})]},y.title))})]})}),d.jsx(ki,{id:"security",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(fc,{size:14})," Security"]}),d.jsx(Kt,{children:e.security?.title}),d.jsx(Xt,{children:"Built with tenant isolation, secure transport, and response guardrails so customer-facing agents stay safe and predictable."}),d.jsx(hc,{children:(e.security?.items||[]).map(y=>d.jsxs(ko,{children:[d.jsx(So,{children:d.jsx(fc,{size:18})}),d.jsx(Co,{children:y.title}),d.jsx(Eo,{children:y.description})]},y.title))})]})}),d.jsx(By,{id:"stats",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(dc,{size:14})," Outcomes"]}),d.jsx(Kt,{children:"Results customers see in production"}),d.jsx(Xt,{children:"Modern AI support that ships in days, not quarters, and earns its place in your team."}),d.jsx(Wy,{style:{marginTop:"2.4rem"},children:zv.map(y=>d.jsxs(by,{children:[d.jsx(Hy,{children:y.value}),d.jsx(Vy,{children:y.label})]},y.label))})]})}),d.jsx(Qy,{id:"story",children:d.jsx(Ye,{children:d.jsxs(Gy,{children:[d.jsx(Yy,{children:"“Divvylore lets us launch production-grade support agents quickly, keep humans in the loop, and resolve customer issues without losing brand voice.”"}),d.jsx(Ky,{children:"— Customer success leader, SaaS support team"})]})})}),d.jsx(Xy,{id:"pricing",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(pc,{size:14})," Pricing"]}),d.jsx(Kt,{children:e.pricing?.title}),d.jsx(Xt,{children:e.pricing?.subtitle}),d.jsxs(qy,{role:"tablist","aria-label":"Billing cycle",children:[d.jsx(mc,{type:"button",className:n==="monthly"?"active":"",onClick:()=>r("monthly"),children:"Monthly"}),d.jsx(mc,{type:"button",className:n==="yearly"?"active":"",onClick:()=>r("yearly"),children:"Yearly"})]}),d.jsx(Zy,{children:a.map(y=>{const v=y.isActive===!1||y.isVisible===!1,x=n==="monthly"?y.monthlyPrice:y.yearlyPrice,P=n==="monthly"?y.monthlyCredits:y.yearlyCredits,p=n==="yearly"&&y.yearlyBonusCredits||0,u=(y.features||[]).filter(k=>k.isIncluded).sort((k,E)=>(k.displayOrder??999)-(E.displayOrder??999)),m=new URLSearchParams({source:h,placement:"pricing",plan:y.code||y.id,billing:n}).toString();return d.jsxs(Jy,{featured:!!y.isPopular,muted:v,children:[y.isPopular&&!v&&d.jsx(gc,{children:"Most popular"}),v&&d.jsx(gc,{children:"Unavailable"}),d.jsx(ev,{children:y.name}),d.jsx(tv,{children:y.isCustomPricing?d.jsx(yc,{children:"Custom"}):d.jsxs(d.Fragment,{children:[d.jsx(yc,{children:_v(x)}),d.jsx(nv,{children:c})]})}),d.jsx(rv,{children:y.description}),d.jsxs(iv,{children:[P.toLocaleString()," credits / ",n==="monthly"?"mo":"yr",p>0?` · +${p.toLocaleString()} bonus`:""]}),d.jsx(lv,{href:v?void 0:`${Ns}${Po}?${m}`,muted:v,"aria-disabled":v,onClick:k=>{v&&k.preventDefault()},target:"_blank",rel:"noreferrer",children:v?"Not available":y.buttonText||"Get started"}),d.jsx(ov,{children:u.map(k=>d.jsxs(sv,{children:[d.jsx(J1,{size:16,color:"#1f3df0"}),d.jsx("span",{children:k.name})]},`${y.name}-${k.name}`))})]},y.id||y.name)})})]})}),d.jsx(ki,{id:"faq",children:d.jsxs(Ye,{children:[d.jsx(Yt,{children:"FAQ"}),d.jsx(Kt,{children:e.faq?.title}),d.jsx(Xt,{children:"Answers to common questions before you launch your first agent."}),d.jsx(kv,{children:(e.faq?.items||[]).map((y,v)=>d.jsxs(Sv,{...v===0?{open:!0}:{},children:[d.jsxs(Cv,{children:[d.jsx("span",{children:y.question}),d.jsx(ty,{size:20,"aria-hidden":!0})]}),d.jsx(Ev,{children:y.answer})]},y.question))})]})}),d.jsx(av,{id:"cta",children:d.jsx(Ye,{children:d.jsxs(uv,{children:[d.jsx(cv,{children:"Launch your AI support agent in days."}),d.jsx(fv,{children:"Move customer conversations from backlog to resolution with a production-ready agent platform."}),d.jsxs(dv,{children:[d.jsxs(pv,{href:f(Po,{placement:"bottom-cta"}),target:"_blank",rel:"noreferrer",children:["Get started",d.jsx(cc,{size:16})]}),d.jsx(hv,{href:f(jv,{placement:"bottom-cta"}),target:"_blank",rel:"noreferrer",children:"Sign in"})]})]})})})]})},Rv=v1`
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
`,Tv=()=>d.jsxs(N.Suspense,{fallback:null,children:[d.jsx(Rv,{}),d.jsx(W1,{}),d.jsxs(Qg,{children:[d.jsx(Ii,{path:"/",element:d.jsx(xc,{})}),d.jsx(Ii,{path:"/home",element:d.jsx(xc,{})}),d.jsx(Ii,{path:"*",element:d.jsx(Hg,{to:"/",replace:!0})})]}),d.jsx(z1,{})]}),Lv=()=>d.jsx(Kg,{children:d.jsx(Tv,{})}),Ep=document.getElementById("root");if(!Ep)throw new Error("Root element not found");Qd(Ep).render(d.jsx(Lv,{}));
