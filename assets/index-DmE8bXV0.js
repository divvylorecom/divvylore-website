function jp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kc={exports:{}},pl={},Sc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),Np=Symbol.for("react.portal"),zp=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),Rp=Symbol.for("react.profiler"),Tp=Symbol.for("react.provider"),Lp=Symbol.for("react.context"),Ip=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),Ap=Symbol.for("react.memo"),Mp=Symbol.for("react.lazy"),La=Symbol.iterator;function Fp(e){return e===null||typeof e!="object"?null:(e=La&&e[La]||e["@@iterator"],typeof e=="function"?e:null)}var Cc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ec=Object.assign,Pc={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=Pc,this.updater=n||Cc}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jc(){}jc.prototype=Xn.prototype;function $s(e,t,n){this.props=e,this.context=t,this.refs=Pc,this.updater=n||Cc}var Rs=$s.prototype=new jc;Rs.constructor=$s;Ec(Rs,Xn.prototype);Rs.isPureReactComponent=!0;var Ia=Array.isArray,_c=Object.prototype.hasOwnProperty,Ts={current:null},Nc={key:!0,ref:!0,__self:!0,__source:!0};function zc(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)_c.call(t,r)&&!Nc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Yr,type:e,key:l,ref:o,props:i,_owner:Ts.current}}function Dp(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function Up(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oa=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Up(""+e.key):t.toString(36)}function Ci(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Yr:case Np:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ml(o,0):r,Ia(i)?(n="",e!=null&&(n=e.replace(Oa,"$&/")+"/"),Ci(i,t,n,"",function(c){return c})):i!=null&&(Ls(i)&&(i=Dp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Oa,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ia(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Ml(l,s);o+=Ci(l,t,n,a,i)}else if(a=Fp(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Ml(l,s++),o+=Ci(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ii(e,t,n){if(e==null)return e;var r=[],i=0;return Ci(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Bp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Ei={transition:null},Wp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:Ts};function $c(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!Ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Xn;O.Fragment=zp;O.Profiler=Rp;O.PureComponent=$s;O.StrictMode=$p;O.Suspense=Op;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wp;O.act=$c;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ec({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Ts.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)_c.call(t,a)&&!Nc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Yr,type:e.type,key:i,ref:l,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:Lp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tp,_context:e},e.Consumer=e};O.createElement=zc;O.createFactory=function(e){var t=zc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Ip,render:e}};O.isValidElement=Ls;O.lazy=function(e){return{$$typeof:Mp,_payload:{_status:-1,_result:e},_init:Bp}};O.memo=function(e,t){return{$$typeof:Ap,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=t}};O.unstable_act=$c;O.useCallback=function(e,t){return Se.current.useCallback(e,t)};O.useContext=function(e){return Se.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};O.useEffect=function(e,t){return Se.current.useEffect(e,t)};O.useId=function(){return Se.current.useId()};O.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Se.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};O.useRef=function(e){return Se.current.useRef(e)};O.useState=function(e){return Se.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Se.current.useTransition()};O.version="18.3.1";Sc.exports=O;var N=Sc.exports;const Re=_p(N),bp=jp({__proto__:null,default:Re},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp=N,Vp=Symbol.for("react.element"),Qp=Symbol.for("react.fragment"),Gp=Object.prototype.hasOwnProperty,Yp=Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kp={key:!0,ref:!0,__self:!0,__source:!0};function Rc(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Gp.call(t,r)&&!Kp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Vp,type:e,key:l,ref:o,props:i,_owner:Yp.current}}pl.Fragment=Qp;pl.jsx=Rc;pl.jsxs=Rc;kc.exports=pl;var d=kc.exports,Tc={exports:{}},Oe={},Lc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var T=z.length;z.push(R);e:for(;0<T;){var B=T-1>>>1,M=z[B];if(0<i(M,R))z[B]=R,z[T]=M,T=B;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],T=z.pop();if(T!==R){z[0]=T;e:for(var B=0,M=z.length,le=M>>>1;B<le;){var Z=2*(B+1)-1,te=z[Z],ze=Z+1,Me=z[ze];if(0>i(te,T))ze<M&&0>i(Me,te)?(z[B]=Me,z[ze]=T,B=ze):(z[B]=te,z[Z]=T,B=Z);else if(ze<M&&0>i(Me,T))z[B]=Me,z[ze]=T,B=ze;else break e}}return R}function i(z,R){var T=z.sortIndex-R.sortIndex;return T!==0?T:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],c=[],h=1,f=null,g=3,y=!1,v=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=z)r(c),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(c)}}function k(z){if(x=!1,m(z),!v)if(n(a)!==null)v=!0,wt(E);else{var R=n(c);R!==null&&Gt(k,R.startTime-z)}}function E(z,R){v=!1,x&&(x=!1,p(j),j=-1),y=!0;var T=g;try{for(m(R),f=n(a);f!==null&&(!(f.expirationTime>R)||z&&!Q());){var B=f.callback;if(typeof B=="function"){f.callback=null,g=f.priorityLevel;var M=B(f.expirationTime<=R);R=e.unstable_now(),typeof M=="function"?f.callback=M:f===n(a)&&r(a),m(R)}else r(a);f=n(a)}if(f!==null)var le=!0;else{var Z=n(c);Z!==null&&Gt(k,Z.startTime-R),le=!1}return le}finally{f=null,g=T,y=!1}}var _=!1,S=null,j=-1,D=5,L=-1;function Q(){return!(e.unstable_now()-L<D)}function Ve(){if(S!==null){var z=e.unstable_now();L=z;var R=!0;try{R=S(!0,z)}finally{R?q():(_=!1,S=null)}}else _=!1}var q;if(typeof u=="function")q=function(){u(Ve)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Qt=Qe.port2;Qe.port1.onmessage=Ve,q=function(){Qt.postMessage(null)}}else q=function(){P(Ve,0)};function wt(z){S=z,_||(_=!0,q())}function Gt(z,R){j=P(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,wt(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var T=g;g=R;try{return z()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=g;g=z;try{return R()}finally{g=T}},e.unstable_scheduleCallback=function(z,R,T){var B=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?B+T:B):T=B,z){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=T+M,z={id:h++,callback:R,priorityLevel:z,startTime:T,expirationTime:M,sortIndex:-1},T>B?(z.sortIndex=T,t(c,z),n(a)===null&&z===n(c)&&(x?(p(j),j=-1):x=!0,Gt(k,T-B))):(z.sortIndex=M,t(a,z),v||y||(v=!0,wt(E))),z},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(z){var R=g;return function(){var T=g;g=R;try{return z.apply(this,arguments)}finally{g=T}}}})(Ic);Lc.exports=Ic;var Xp=Lc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=N,Ie=Xp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oc=new Set,_r={};function mn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(_r[e]=t,e=0;e<t.length;e++)Oc.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=Object.prototype.hasOwnProperty,Zp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Aa={},Ma={};function Jp(e){return _o.call(Ma,e)?!0:_o.call(Aa,e)?!1:Zp.test(e)?Ma[e]=!0:(Aa[e]=!0,!1)}function eh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function th(e,t,n,r){if(t===null||typeof t>"u"||eh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Is=/[\-:]([a-z])/g;function Os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Is,Os);me[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Is,Os);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Is,Os);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function As(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(th(t,n,i,r)&&(n=null),r||i===null?Jp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,li=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),No=Symbol.for("react.profiler"),Ac=Symbol.for("react.provider"),Mc=Symbol.for("react.context"),Fs=Symbol.for("react.forward_ref"),zo=Symbol.for("react.suspense"),$o=Symbol.for("react.suspense_list"),Ds=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Fc=Symbol.for("react.offscreen"),Fa=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Fl;function cr(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Dl=!1;function Ul(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function nh(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function Ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case No:return"Profiler";case Ms:return"StrictMode";case zo:return"Suspense";case $o:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mc:return(e.displayName||"Context")+".Consumer";case Ac:return(e._context.displayName||"Context")+".Provider";case Fs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ds:return t=e.displayName||null,t!==null?t:Ro(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return Ro(e(t))}catch{}}return null}function rh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ro(t);case 8:return t===Ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ih(e){var t=Dc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oi(e){e._valueTracker||(e._valueTracker=ih(e))}function Uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function To(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Da(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bc(e,t){t=t.checked,t!=null&&As(e,"checked",t,!1)}function Lo(e,t){Bc(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Io(e,t.type,n):t.hasOwnProperty("defaultValue")&&Io(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Io(e,t,n){(t!=="number"||Bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ba(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(dr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function Wc(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ao(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var si,Hc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lh=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){lh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function Vc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function Qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var oh=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mo(e,t){if(t){if(oh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Do=null;function Us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Uo=null,In=null,On=null;function ba(e){if(e=qr(e)){if(typeof Uo!="function")throw Error(C(280));var t=e.stateNode;t&&(t=vl(t),Uo(e.stateNode,e.type,t))}}function Gc(e){In?On?On.push(e):On=[e]:In=e}function Yc(){if(In){var e=In,t=On;if(On=In=null,ba(e),t)for(e=0;e<t.length;e++)ba(t[e])}}function Kc(e,t){return e(t)}function Xc(){}var Bl=!1;function qc(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return Kc(e,t,n)}finally{Bl=!1,(In!==null||On!==null)&&(Xc(),Yc())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Bo=!1;if(ht)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Bo=!1}function sh(e,t,n,r,i,l,o,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var yr=!1,Wi=null,bi=!1,Wo=null,ah={onError:function(e){yr=!0,Wi=e}};function uh(e,t,n,r,i,l,o,s,a){yr=!1,Wi=null,sh.apply(ah,arguments)}function ch(e,t,n,r,i,l,o,s,a){if(uh.apply(this,arguments),yr){if(yr){var c=Wi;yr=!1,Wi=null}else throw Error(C(198));bi||(bi=!0,Wo=c)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ha(e){if(gn(e)!==e)throw Error(C(188))}function dh(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Ha(i),e;if(l===r)return Ha(i),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Jc(e){return e=dh(e),e!==null?ed(e):null}function ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ed(e);if(t!==null)return t;e=e.sibling}return null}var td=Ie.unstable_scheduleCallback,Va=Ie.unstable_cancelCallback,fh=Ie.unstable_shouldYield,ph=Ie.unstable_requestPaint,ee=Ie.unstable_now,hh=Ie.unstable_getCurrentPriorityLevel,Bs=Ie.unstable_ImmediatePriority,nd=Ie.unstable_UserBlockingPriority,Hi=Ie.unstable_NormalPriority,mh=Ie.unstable_LowPriority,rd=Ie.unstable_IdlePriority,hl=null,ot=null;function gh(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:xh,yh=Math.log,vh=Math.LN2;function xh(e){return e>>>=0,e===0?32:31-(yh(e)/vh|0)|0}var ai=64,ui=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=fr(s):(l&=o,l!==0&&(r=fr(l)))}else o=n&~i,o!==0?r=fr(o):l!==0&&(r=fr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function wh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Je(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=wh(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function bo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function id(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Sh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Ws(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function ld(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var od,bs,sd,ad,ud,Ho=!1,ci=[],Tt=null,Lt=null,It=null,$r=new Map,Rr=new Map,jt=[],Ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function rr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=qr(t),t!==null&&bs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Eh(e,t,n,r,i){switch(t){case"focusin":return Tt=rr(Tt,e,t,n,r,i),!0;case"dragenter":return Lt=rr(Lt,e,t,n,r,i),!0;case"mouseover":return It=rr(It,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return $r.set(l,rr($r.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Rr.set(l,rr(Rr.get(l)||null,e,t,n,r,i)),!0}return!1}function cd(e){var t=tn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zc(n),t!==null){e.blockedOn=t,ud(e.priority,function(){sd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Do=r,n.target.dispatchEvent(r),Do=null}else return t=qr(n),t!==null&&bs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ga(e,t,n){Pi(e)&&n.delete(t)}function Ph(){Ho=!1,Tt!==null&&Pi(Tt)&&(Tt=null),Lt!==null&&Pi(Lt)&&(Lt=null),It!==null&&Pi(It)&&(It=null),$r.forEach(Ga),Rr.forEach(Ga)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ho||(Ho=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Ph)))}function Tr(e){function t(i){return ir(i,e)}if(0<ci.length){ir(ci[0],e);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&ir(Tt,e),Lt!==null&&ir(Lt,e),It!==null&&ir(It,e),$r.forEach(t),Rr.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)cd(n),n.blockedOn===null&&jt.shift()}var An=vt.ReactCurrentBatchConfig,Qi=!0;function jh(e,t,n,r){var i=U,l=An.transition;An.transition=null;try{U=1,Hs(e,t,n,r)}finally{U=i,An.transition=l}}function _h(e,t,n,r){var i=U,l=An.transition;An.transition=null;try{U=4,Hs(e,t,n,r)}finally{U=i,An.transition=l}}function Hs(e,t,n,r){if(Qi){var i=Vo(e,t,n,r);if(i===null)Zl(e,t,r,Gi,n),Qa(e,r);else if(Eh(i,e,t,n,r))r.stopPropagation();else if(Qa(e,r),t&4&&-1<Ch.indexOf(e)){for(;i!==null;){var l=qr(i);if(l!==null&&od(l),l=Vo(e,t,n,r),l===null&&Zl(e,t,r,Gi,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var Gi=null;function Vo(e,t,n,r){if(Gi=null,e=Us(r),e=tn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hh()){case Bs:return 1;case nd:return 4;case Hi:case mh:return 16;case rd:return 536870912;default:return 16}default:return 16}}var Nt=null,Vs=null,ji=null;function fd(){if(ji)return ji;var e,t=Vs,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return ji=i.slice(e,1<r?1-r:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function Ya(){return!1}function Ae(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?di:Ya,this.isPropagationStopped=Ya,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=Ae(qn),Xr=X({},qn,{view:0,detail:0}),Nh=Ae(Xr),bl,Hl,lr,ml=X({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(bl=e.screenX-lr.screenX,Hl=e.screenY-lr.screenY):Hl=bl=0,lr=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),Ka=Ae(ml),zh=X({},ml,{dataTransfer:0}),$h=Ae(zh),Rh=X({},Xr,{relatedTarget:0}),Vl=Ae(Rh),Th=X({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=Ae(Th),Ih=X({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oh=Ae(Ih),Ah=X({},qn,{data:0}),Xa=Ae(Ah),Mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dh[e])?!!t[e]:!1}function Gs(){return Uh}var Bh=X({},Xr,{key:function(e){if(e.key){var t=Mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wh=Ae(Bh),bh=X({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=Ae(bh),Hh=X({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),Vh=Ae(Hh),Qh=X({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gh=Ae(Qh),Yh=X({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kh=Ae(Yh),Xh=[9,13,27,32],Ys=ht&&"CompositionEvent"in window,vr=null;ht&&"documentMode"in document&&(vr=document.documentMode);var qh=ht&&"TextEvent"in window&&!vr,pd=ht&&(!Ys||vr&&8<vr&&11>=vr),Za=" ",Ja=!1;function hd(e,t){switch(e){case"keyup":return Xh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Zh(e,t){switch(e){case"compositionend":return md(t);case"keypress":return t.which!==32?null:(Ja=!0,Za);case"textInput":return e=t.data,e===Za&&Ja?null:e;default:return null}}function Jh(e,t){if(Cn)return e==="compositionend"||!Ys&&hd(e,t)?(e=fd(),ji=Vs=Nt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pd&&t.locale!=="ko"?null:t.data;default:return null}}var em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!em[e.type]:t==="textarea"}function gd(e,t,n,r){Gc(r),t=Yi(t,"onChange"),0<t.length&&(n=new Qs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,Lr=null;function tm(e){_d(e,0)}function gl(e){var t=jn(e);if(Uc(t))return e}function nm(e,t){if(e==="change")return t}var yd=!1;if(ht){var Ql;if(ht){var Gl="oninput"in document;if(!Gl){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),Gl=typeof tu.oninput=="function"}Ql=Gl}else Ql=!1;yd=Ql&&(!document.documentMode||9<document.documentMode)}function nu(){xr&&(xr.detachEvent("onpropertychange",vd),Lr=xr=null)}function vd(e){if(e.propertyName==="value"&&gl(Lr)){var t=[];gd(t,Lr,e,Us(e)),qc(tm,t)}}function rm(e,t,n){e==="focusin"?(nu(),xr=t,Lr=n,xr.attachEvent("onpropertychange",vd)):e==="focusout"&&nu()}function im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Lr)}function lm(e,t){if(e==="click")return gl(t)}function om(e,t){if(e==="input"||e==="change")return gl(t)}function sm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:sm;function Ir(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_o.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,t){var n=ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ru(n)}}function xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function am(e){var t=wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xd(n.ownerDocument.documentElement,n)){if(r!==null&&Ks(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=iu(n,l);var o=iu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var um=ht&&"documentMode"in document&&11>=document.documentMode,En=null,Qo=null,wr=null,Go=!1;function lu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Go||En==null||En!==Bi(r)||(r=En,"selectionStart"in r&&Ks(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Ir(wr,r)||(wr=r,r=Yi(Qo,"onSelect"),0<r.length&&(t=new Qs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},Yl={},kd={};ht&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function yl(e){if(Yl[e])return Yl[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kd)return Yl[e]=t[n];return e}var Sd=yl("animationend"),Cd=yl("animationiteration"),Ed=yl("animationstart"),Pd=yl("transitionend"),jd=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){jd.set(e,t),mn(t,[e])}for(var Kl=0;Kl<ou.length;Kl++){var Xl=ou[Kl],cm=Xl.toLowerCase(),dm=Xl[0].toUpperCase()+Xl.slice(1);bt(cm,"on"+dm)}bt(Sd,"onAnimationEnd");bt(Cd,"onAnimationIteration");bt(Ed,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(Pd,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fm=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ch(r,t,void 0,e),e.currentTarget=null}function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;su(i,s,c),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;su(i,s,c),l=a}}}if(bi)throw e=Wo,bi=!1,Wo=null,e}function b(e,t){var n=t[Zo];n===void 0&&(n=t[Zo]=new Set);var r=e+"__bubble";n.has(r)||(Nd(t,e,2,!1),n.add(r))}function ql(e,t,n){var r=0;t&&(r|=4),Nd(n,e,r,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[pi]){e[pi]=!0,Oc.forEach(function(n){n!=="selectionchange"&&(fm.has(n)||ql(n,!1,e),ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,ql("selectionchange",!1,t))}}function Nd(e,t,n,r){switch(dd(t)){case 1:var i=jh;break;case 4:i=_h;break;default:i=Hs}n=i.bind(null,t,n,e),i=void 0,!Bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=tn(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}qc(function(){var c=l,h=Us(n),f=[];e:{var g=jd.get(e);if(g!==void 0){var y=Qs,v=e;switch(e){case"keypress":if(_i(n)===0)break e;case"keydown":case"keyup":y=Wh;break;case"focusin":v="focus",y=Vl;break;case"focusout":v="blur",y=Vl;break;case"beforeblur":case"afterblur":y=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=$h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Vh;break;case Sd:case Cd:case Ed:y=Lh;break;case Pd:y=Gh;break;case"scroll":y=Nh;break;case"wheel":y=Kh;break;case"copy":case"cut":case"paste":y=Oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qa}var x=(t&4)!==0,P=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var u=c,m;u!==null;){m=u;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=zr(u,p),k!=null&&x.push(Ar(u,k,m)))),P)break;u=u.return}0<x.length&&(g=new y(g,v,null,n,h),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Do&&(v=n.relatedTarget||n.fromElement)&&(tn(v)||v[mt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?tn(v):null,v!==null&&(P=gn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(x=Ka,k="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=qa,k="onPointerLeave",p="onPointerEnter",u="pointer"),P=y==null?g:jn(y),m=v==null?g:jn(v),g=new x(k,u+"leave",y,n,h),g.target=P,g.relatedTarget=m,k=null,tn(h)===c&&(x=new x(p,u+"enter",v,n,h),x.target=m,x.relatedTarget=P,k=x),P=k,y&&v)t:{for(x=y,p=v,u=0,m=x;m;m=vn(m))u++;for(m=0,k=p;k;k=vn(k))m++;for(;0<u-m;)x=vn(x),u--;for(;0<m-u;)p=vn(p),m--;for(;u--;){if(x===p||p!==null&&x===p.alternate)break t;x=vn(x),p=vn(p)}x=null}else x=null;y!==null&&au(f,g,y,x,!1),v!==null&&P!==null&&au(f,P,v,x,!0)}}e:{if(g=c?jn(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var E=nm;else if(eu(g))if(yd)E=om;else{E=im;var _=rm}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=lm);if(E&&(E=E(e,c))){gd(f,E,n,h);break e}_&&_(e,g,c),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Io(g,"number",g.value)}switch(_=c?jn(c):window,e){case"focusin":(eu(_)||_.contentEditable==="true")&&(En=_,Qo=c,wr=null);break;case"focusout":wr=Qo=En=null;break;case"mousedown":Go=!0;break;case"contextmenu":case"mouseup":case"dragend":Go=!1,lu(f,n,h);break;case"selectionchange":if(um)break;case"keydown":case"keyup":lu(f,n,h)}var S;if(Ys)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Cn?hd(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(pd&&n.locale!=="ko"&&(Cn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Cn&&(S=fd()):(Nt=h,Vs="value"in Nt?Nt.value:Nt.textContent,Cn=!0)),_=Yi(c,j),0<_.length&&(j=new Xa(j,e,null,n,h),f.push({event:j,listeners:_}),S?j.data=S:(S=md(n),S!==null&&(j.data=S)))),(S=qh?Zh(e,n):Jh(e,n))&&(c=Yi(c,"onBeforeInput"),0<c.length&&(h=new Xa("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=S))}_d(f,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=zr(e,n),l!=null&&r.unshift(Ar(e,l,i)),l=zr(e,t),l!=null&&r.push(Ar(e,l,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=zr(n,l),a!=null&&o.unshift(Ar(n,a,s))):i||(a=zr(n,l),a!=null&&o.push(Ar(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var pm=/\r\n?/g,hm=/\u0000|\uFFFD/g;function uu(e){return(typeof e=="string"?e:""+e).replace(pm,`
`).replace(hm,"")}function hi(e,t,n){if(t=uu(t),uu(e)!==t&&n)throw Error(C(425))}function Ki(){}var Yo=null,Ko=null;function Xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qo=typeof setTimeout=="function"?setTimeout:void 0,mm=typeof clearTimeout=="function"?clearTimeout:void 0,cu=typeof Promise=="function"?Promise:void 0,gm=typeof queueMicrotask=="function"?queueMicrotask:typeof cu<"u"?function(e){return cu.resolve(null).then(e).catch(ym)}:qo;function ym(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Tr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function du(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Zn,Mr="__reactProps$"+Zn,mt="__reactContainer$"+Zn,Zo="__reactEvents$"+Zn,vm="__reactListeners$"+Zn,xm="__reactHandles$"+Zn;function tn(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=du(e);e!==null;){if(n=e[lt])return n;e=du(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[lt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function vl(e){return e[Mr]||null}var Jo=[],_n=-1;function Ht(e){return{current:e}}function V(e){0>_n||(e.current=Jo[_n],Jo[_n]=null,_n--)}function W(e,t){_n++,Jo[_n]=e.current,e.current=t}var Wt={},xe=Ht(Wt),je=Ht(!1),un=Wt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function Xi(){V(je),V(xe)}function fu(e,t,n){if(xe.current!==Wt)throw Error(C(168));W(xe,t),W(je,n)}function zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,rh(e)||"Unknown",i));return X({},n,r)}function qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,un=xe.current,W(xe,e),W(je,je.current),!0}function pu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=zd(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,V(je),V(xe),W(xe,e)):V(je),W(je,n)}var ct=null,xl=!1,eo=!1;function $d(e){ct===null?ct=[e]:ct.push(e)}function wm(e){xl=!0,$d(e)}function Vt(){if(!eo&&ct!==null){eo=!0;var e=0,t=U;try{var n=ct;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,xl=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),td(Bs,Vt),i}finally{U=t,eo=!1}}return null}var Nn=[],zn=0,Zi=null,Ji=0,Fe=[],De=0,cn=null,dt=1,ft="";function qt(e,t){Nn[zn++]=Ji,Nn[zn++]=Zi,Zi=e,Ji=t}function Rd(e,t,n){Fe[De++]=dt,Fe[De++]=ft,Fe[De++]=cn,cn=e;var r=dt;e=ft;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var l=32-Je(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dt=1<<32-Je(t)+i|n<<i|r,ft=l+e}else dt=1<<l|n<<i|r,ft=e}function Xs(e){e.return!==null&&(qt(e,1),Rd(e,1,0))}function qs(e){for(;e===Zi;)Zi=Nn[--zn],Nn[zn]=null,Ji=Nn[--zn],Nn[zn]=null;for(;e===cn;)cn=Fe[--De],Fe[De]=null,ft=Fe[--De],Fe[De]=null,dt=Fe[--De],Fe[De]=null}var Le=null,Te=null,G=!1,Ze=null;function Td(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Te=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Te=null,!0):!1;default:return!1}}function es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ts(e){if(G){var t=Te;if(t){var n=t;if(!hu(e,t)){if(es(e))throw Error(C(418));t=Ot(n.nextSibling);var r=Le;t&&hu(e,t)?Td(r,n):(e.flags=e.flags&-4097|2,G=!1,Le=e)}}else{if(es(e))throw Error(C(418));e.flags=e.flags&-4097|2,G=!1,Le=e}}}function mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function mi(e){if(e!==Le)return!1;if(!G)return mu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xo(e.type,e.memoizedProps)),t&&(t=Te)){if(es(e))throw Ld(),Error(C(418));for(;t;)Td(e,t),t=Ot(t.nextSibling)}if(mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Le?Ot(e.stateNode.nextSibling):null;return!0}function Ld(){for(var e=Te;e;)e=Ot(e.nextSibling)}function Wn(){Te=Le=null,G=!1}function Zs(e){Ze===null?Ze=[e]:Ze.push(e)}var km=vt.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function gi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gu(e){var t=e._init;return t(e._payload)}function Id(e){function t(p,u){if(e){var m=p.deletions;m===null?(p.deletions=[u],p.flags|=16):m.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=Dt(p,u),p.index=0,p.sibling=null,p}function l(p,u,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<u?(p.flags|=2,u):m):(p.flags|=2,u)):(p.flags|=1048576,u)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,u,m,k){return u===null||u.tag!==6?(u=so(m,p.mode,k),u.return=p,u):(u=i(u,m),u.return=p,u)}function a(p,u,m,k){var E=m.type;return E===Sn?h(p,u,m.props.children,k,m.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&gu(E)===u.type)?(k=i(u,m.props),k.ref=or(p,u,m),k.return=p,k):(k=Ii(m.type,m.key,m.props,null,p.mode,k),k.ref=or(p,u,m),k.return=p,k)}function c(p,u,m,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=ao(m,p.mode,k),u.return=p,u):(u=i(u,m.children||[]),u.return=p,u)}function h(p,u,m,k,E){return u===null||u.tag!==7?(u=on(m,p.mode,k,E),u.return=p,u):(u=i(u,m),u.return=p,u)}function f(p,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=so(""+u,p.mode,m),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case li:return m=Ii(u.type,u.key,u.props,null,p.mode,m),m.ref=or(p,null,u),m.return=p,m;case kn:return u=ao(u,p.mode,m),u.return=p,u;case Et:var k=u._init;return f(p,k(u._payload),m)}if(dr(u)||tr(u))return u=on(u,p.mode,m,null),u.return=p,u;gi(p,u)}return null}function g(p,u,m,k){var E=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,u,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case li:return m.key===E?a(p,u,m,k):null;case kn:return m.key===E?c(p,u,m,k):null;case Et:return E=m._init,g(p,u,E(m._payload),k)}if(dr(m)||tr(m))return E!==null?null:h(p,u,m,k,null);gi(p,m)}return null}function y(p,u,m,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,s(u,p,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case li:return p=p.get(k.key===null?m:k.key)||null,a(u,p,k,E);case kn:return p=p.get(k.key===null?m:k.key)||null,c(u,p,k,E);case Et:var _=k._init;return y(p,u,m,_(k._payload),E)}if(dr(k)||tr(k))return p=p.get(m)||null,h(u,p,k,E,null);gi(u,k)}return null}function v(p,u,m,k){for(var E=null,_=null,S=u,j=u=0,D=null;S!==null&&j<m.length;j++){S.index>j?(D=S,S=null):D=S.sibling;var L=g(p,S,m[j],k);if(L===null){S===null&&(S=D);break}e&&S&&L.alternate===null&&t(p,S),u=l(L,u,j),_===null?E=L:_.sibling=L,_=L,S=D}if(j===m.length)return n(p,S),G&&qt(p,j),E;if(S===null){for(;j<m.length;j++)S=f(p,m[j],k),S!==null&&(u=l(S,u,j),_===null?E=S:_.sibling=S,_=S);return G&&qt(p,j),E}for(S=r(p,S);j<m.length;j++)D=y(S,p,j,m[j],k),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?j:D.key),u=l(D,u,j),_===null?E=D:_.sibling=D,_=D);return e&&S.forEach(function(Q){return t(p,Q)}),G&&qt(p,j),E}function x(p,u,m,k){var E=tr(m);if(typeof E!="function")throw Error(C(150));if(m=E.call(m),m==null)throw Error(C(151));for(var _=E=null,S=u,j=u=0,D=null,L=m.next();S!==null&&!L.done;j++,L=m.next()){S.index>j?(D=S,S=null):D=S.sibling;var Q=g(p,S,L.value,k);if(Q===null){S===null&&(S=D);break}e&&S&&Q.alternate===null&&t(p,S),u=l(Q,u,j),_===null?E=Q:_.sibling=Q,_=Q,S=D}if(L.done)return n(p,S),G&&qt(p,j),E;if(S===null){for(;!L.done;j++,L=m.next())L=f(p,L.value,k),L!==null&&(u=l(L,u,j),_===null?E=L:_.sibling=L,_=L);return G&&qt(p,j),E}for(S=r(p,S);!L.done;j++,L=m.next())L=y(S,p,j,L.value,k),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?j:L.key),u=l(L,u,j),_===null?E=L:_.sibling=L,_=L);return e&&S.forEach(function(Ve){return t(p,Ve)}),G&&qt(p,j),E}function P(p,u,m,k){if(typeof m=="object"&&m!==null&&m.type===Sn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case li:e:{for(var E=m.key,_=u;_!==null;){if(_.key===E){if(E=m.type,E===Sn){if(_.tag===7){n(p,_.sibling),u=i(_,m.props.children),u.return=p,p=u;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&gu(E)===_.type){n(p,_.sibling),u=i(_,m.props),u.ref=or(p,_,m),u.return=p,p=u;break e}n(p,_);break}else t(p,_);_=_.sibling}m.type===Sn?(u=on(m.props.children,p.mode,k,m.key),u.return=p,p=u):(k=Ii(m.type,m.key,m.props,null,p.mode,k),k.ref=or(p,u,m),k.return=p,p=k)}return o(p);case kn:e:{for(_=m.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){n(p,u.sibling),u=i(u,m.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=ao(m,p.mode,k),u.return=p,p=u}return o(p);case Et:return _=m._init,P(p,u,_(m._payload),k)}if(dr(m))return v(p,u,m,k);if(tr(m))return x(p,u,m,k);gi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(n(p,u.sibling),u=i(u,m),u.return=p,p=u):(n(p,u),u=so(m,p.mode,k),u.return=p,p=u),o(p)):n(p,u)}return P}var bn=Id(!0),Od=Id(!1),el=Ht(null),tl=null,$n=null,Js=null;function ea(){Js=$n=tl=null}function ta(e){var t=el.current;V(el),e._currentValue=t}function ns(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){tl=e,Js=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Js!==e)if(e={context:e,memoizedValue:t,next:null},$n===null){if(tl===null)throw Error(C(308));$n=e,tl.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return t}var nn=null;function na(e){nn===null?nn=[e]:nn.push(e)}function Ad(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,na(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,na(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ws(e,n)}}function yu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nl(e,t,n,r){var i=e.updateQueue;Pt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?l=c:o.next=c,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(l!==null){var f=i.baseState;o=0,h=c=a=null,s=l;do{var g=s.lane,y=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,x=s;switch(g=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(y,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(y,f,g):v,g==null)break e;f=X({},f,g);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=y,a=f):h=h.next=y,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(a=f),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);fn|=o,e.lanes=o,e.memoizedState=f}}function vu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Zr={},st=Ht(Zr),Fr=Ht(Zr),Dr=Ht(Zr);function rn(e){if(e===Zr)throw Error(C(174));return e}function ia(e,t){switch(W(Dr,t),W(Fr,e),W(st,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ao(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ao(t,e)}V(st),W(st,t)}function Hn(){V(st),V(Fr),V(Dr)}function Fd(e){rn(Dr.current);var t=rn(st.current),n=Ao(t,e.type);t!==n&&(W(Fr,e),W(st,n))}function la(e){Fr.current===e&&(V(st),V(Fr))}var Y=Ht(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function oa(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var zi=vt.ReactCurrentDispatcher,no=vt.ReactCurrentBatchConfig,dn=0,K=null,oe=null,ue=null,il=!1,kr=!1,Ur=0,Sm=0;function ge(){throw Error(C(321))}function sa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function aa(e,t,n,r,i,l){if(dn=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zi.current=e===null||e.memoizedState===null?jm:_m,e=n(r,i),kr){l=0;do{if(kr=!1,Ur=0,25<=l)throw Error(C(301));l+=1,ue=oe=null,t.updateQueue=null,zi.current=Nm,e=n(r,i)}while(kr)}if(zi.current=ll,t=oe!==null&&oe.next!==null,dn=0,ue=oe=K=null,il=!1,t)throw Error(C(300));return e}function ua(){var e=Ur!==0;return Ur=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?K.memoizedState=ue=e:ue=ue.next=e,ue}function be(){if(oe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?K.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(C(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?K.memoizedState=ue=e:ue=ue.next=e}return ue}function Br(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,c=l;do{var h=c.lane;if((dn&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=f,o=r):a=a.next=f,K.lanes|=h,fn|=h}c=c.next}while(c!==null&&c!==l);a===null?o=r:a.next=s,nt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,K.lanes|=l,fn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function io(e){var t=be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);nt(l,t.memoizedState)||(Pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Dd(){}function Ud(e,t){var n=K,r=be(),i=t(),l=!nt(r.memoizedState,i);if(l&&(r.memoizedState=i,Pe=!0),r=r.queue,ca(bd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Wr(9,Wd.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(C(349));dn&30||Bd(n,t,i)}return i}function Bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wd(e,t,n,r){t.value=n,t.getSnapshot=r,Hd(t)&&Vd(e)}function bd(e,t,n){return n(function(){Hd(t)&&Vd(e)})}function Hd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Vd(e){var t=gt(e,1);t!==null&&et(t,e,1,-1)}function xu(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=Pm.bind(null,K,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qd(){return be().memoizedState}function $i(e,t,n,r){var i=it();K.flags|=e,i.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var i=be();r=r===void 0?null:r;var l=void 0;if(oe!==null){var o=oe.memoizedState;if(l=o.destroy,r!==null&&sa(r,o.deps)){i.memoizedState=Wr(t,n,l,r);return}}K.flags|=e,i.memoizedState=Wr(1|t,n,l,r)}function wu(e,t){return $i(8390656,8,e,t)}function ca(e,t){return wl(2048,8,e,t)}function Gd(e,t){return wl(4,2,e,t)}function Yd(e,t){return wl(4,4,e,t)}function Kd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xd(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,Kd.bind(null,t,e),n)}function da(){}function qd(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jd(e,t,n){return dn&21?(nt(n,t)||(n=id(),K.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function Cm(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=no.transition;no.transition={};try{e(!1),t()}finally{U=n,no.transition=r}}function ef(){return be().memoizedState}function Em(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tf(e))nf(t,n);else if(n=Ad(e,t,n,r),n!==null){var i=ke();et(n,e,r,i),rf(n,t,r)}}function Pm(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tf(e))nf(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,nt(s,o)){var a=t.interleaved;a===null?(i.next=i,na(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Ad(e,t,i,r),n!==null&&(i=ke(),et(n,e,r,i),rf(n,t,r))}}function tf(e){var t=e.alternate;return e===K||t!==null&&t===K}function nf(e,t){kr=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ws(e,n)}}var ll={readContext:We,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},jm={readContext:We,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:wu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$i(4194308,4,Kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Em.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:xu,useDebugValue:da,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=xu(!1),t=e[0];return e=Cm.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=it();if(G){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ce===null)throw Error(C(349));dn&30||Bd(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,wu(bd.bind(null,r,l,e),[e]),r.flags|=2048,Wr(9,Wd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=it(),t=ce.identifierPrefix;if(G){var n=ft,r=dt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_m={readContext:We,useCallback:qd,useContext:We,useEffect:ca,useImperativeHandle:Xd,useInsertionEffect:Gd,useLayoutEffect:Yd,useMemo:Zd,useReducer:ro,useRef:Qd,useState:function(){return ro(Br)},useDebugValue:da,useDeferredValue:function(e){var t=be();return Jd(t,oe.memoizedState,e)},useTransition:function(){var e=ro(Br)[0],t=be().memoizedState;return[e,t]},useMutableSource:Dd,useSyncExternalStore:Ud,useId:ef,unstable_isNewReconciler:!1},Nm={readContext:We,useCallback:qd,useContext:We,useEffect:ca,useImperativeHandle:Xd,useInsertionEffect:Gd,useLayoutEffect:Yd,useMemo:Zd,useReducer:io,useRef:Qd,useState:function(){return io(Br)},useDebugValue:da,useDeferredValue:function(e){var t=be();return oe===null?t.memoizedState=e:Jd(t,oe.memoizedState,e)},useTransition:function(){var e=io(Br)[0],t=be().memoizedState;return[e,t]},useMutableSource:Dd,useSyncExternalStore:Ud,useId:ef,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Ft(e),l=pt(r,i);l.payload=t,n!=null&&(l.callback=n),t=At(e,l,i),t!==null&&(et(t,e,i,r),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Ft(e),l=pt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=At(e,l,i),t!==null&&(et(t,e,i,r),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Ft(e),i=pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&(et(t,e,r,n),Ni(t,e,r))}};function ku(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,l):!0}function lf(e,t,n){var r=!1,i=Wt,l=t.contextType;return typeof l=="object"&&l!==null?l=We(l):(i=_e(t)?un:xe.current,r=t.contextTypes,l=(r=r!=null)?Bn(e,i):Wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Su(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ra(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=We(l):(l=_e(t)?un:xe.current,i.context=Bn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(rs(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&kl.enqueueReplaceState(i,i.state,null),nl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=nh(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function lo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zm=typeof WeakMap=="function"?WeakMap:Map;function of(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,ms=r),ls(e,t)},n}function sf(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ls(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ls(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bm.bind(null,e,t,n),t.then(e,e))}function Eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e)}var $m=vt.ReactCurrentOwner,Pe=!1;function we(e,t,n,r){t.child=e===null?Od(t,null,n,r):bn(t,e.child,n,r)}function ju(e,t,n,r,i){n=n.render;var l=t.ref;return Mn(t,i),r=aa(e,t,n,r,l,i),n=ua(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(G&&n&&Xs(t),t.flags|=1,we(e,t,r,i),t.child)}function _u(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!xa(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,af(e,t,l,r,i)):(e=Ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(o,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Dt(l,r),e.ref=t.ref,e.return=t,t.child=e}function af(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Ir(l,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,yt(e,t,i)}return os(e,t,n,r,i)}function uf(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Tn,$e),$e|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Tn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,W(Tn,$e),$e|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,W(Tn,$e),$e|=r;return we(e,t,i,n),t.child}function cf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function os(e,t,n,r,i){var l=_e(n)?un:xe.current;return l=Bn(t,l),Mn(t,i),n=aa(e,t,n,r,l,i),r=ua(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(G&&r&&Xs(t),t.flags|=1,we(e,t,n,i),t.child)}function Nu(e,t,n,r,i){if(_e(n)){var l=!0;qi(t)}else l=!1;if(Mn(t,i),t.stateNode===null)Ri(e,t),lf(t,n,r),is(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=We(c):(c=_e(n)?un:xe.current,c=Bn(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Su(t,o,r,c),Pt=!1;var g=t.memoizedState;o.state=g,nl(t,r,o,i),a=t.memoizedState,s!==r||g!==a||je.current||Pt?(typeof h=="function"&&(rs(t,n,h,r),a=t.memoizedState),(s=Pt||ku(t,n,s,r,g,a,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Md(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ke(t.type,s),o.props=c,f=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=We(a):(a=_e(n)?un:xe.current,a=Bn(t,a));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||g!==a)&&Su(t,o,r,a),Pt=!1,g=t.memoizedState,o.state=g,nl(t,r,o,i);var v=t.memoizedState;s!==f||g!==v||je.current||Pt?(typeof y=="function"&&(rs(t,n,y,r),v=t.memoizedState),(c=Pt||ku(t,n,c,r,g,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ss(e,t,n,r,l,i)}function ss(e,t,n,r,i,l){cf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&pu(t,n,!1),yt(e,t,l);r=t.stateNode,$m.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=bn(t,e.child,null,l),t.child=bn(t,null,s,l)):we(e,t,s,l),t.memoizedState=r.state,i&&pu(t,n,!0),t.child}function df(e){var t=e.stateNode;t.pendingContext?fu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fu(e,t.context,!1),ia(e,t.containerInfo)}function zu(e,t,n,r,i){return Wn(),Zs(i),t.flags|=256,we(e,t,n,r),t.child}var as={dehydrated:null,treeContext:null,retryLane:0};function us(e){return{baseLanes:e,cachePool:null,transitions:null}}function ff(e,t,n){var r=t.pendingProps,i=Y.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Y,i&1),e===null)return ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=El(o,r,0,null),e=on(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=us(n),t.memoizedState=as,e):fa(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Rm(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Dt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=Dt(s,l):(l=on(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?us(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=as,r}return l=e.child,e=l.sibling,r=Dt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fa(e,t){return t=El({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,n,r){return r!==null&&Zs(r),bn(t,e.child,null,n),e=fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rm(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=lo(Error(C(422))),yi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=El({mode:"visible",children:r.children},i,0,null),l=on(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&bn(t,e.child,null,o),t.child.memoizedState=us(o),t.memoizedState=as,l);if(!(t.mode&1))return yi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(C(419)),r=lo(l,r,void 0),yi(e,t,o,r)}if(s=(o&e.childLanes)!==0,Pe||s){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,gt(e,i),et(r,e,i,-1))}return va(),r=lo(Error(C(421))),yi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hm.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Te=Ot(i.nextSibling),Le=t,G=!0,Ze=null,e!==null&&(Fe[De++]=dt,Fe[De++]=ft,Fe[De++]=cn,dt=e.id,ft=e.overflow,cn=t),t=fa(t,r.children),t.flags|=4096,t)}function $u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ns(e.return,t,n)}function oo(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function pf(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(we(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$u(e,n,t);else if(e.tag===19)$u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oo(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&rl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oo(t,!0,n,null,l);break;case"together":oo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tm(e,t,n){switch(t.tag){case 3:df(t),Wn();break;case 5:Fd(t);break;case 1:_e(t.type)&&qi(t);break;case 4:ia(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(el,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?ff(e,t,n):(W(Y,Y.current&1),e=yt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,uf(e,t,n)}return yt(e,t,n)}var hf,cs,mf,gf;hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cs=function(){};mf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rn(st.current);var l=null;switch(n){case"input":i=To(e,i),r=To(e,r),l=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":i=Oo(e,i),r=Oo(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ki)}Mo(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_r.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=i?.[c],r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_r.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&b("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};gf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lm(e,t,n){var r=t.pendingProps;switch(qs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return _e(t.type)&&Xi(),ye(t),null;case 3:return r=t.stateNode,Hn(),V(je),V(xe),oa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(vs(Ze),Ze=null))),cs(e,t),ye(t),null;case 5:la(t);var i=rn(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)mf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ye(t),null}if(e=rn(st.current),mi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[lt]=t,r[Mr]=l,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)b(pr[i],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Da(r,l),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},b("invalid",r);break;case"textarea":Ba(r,l),b("invalid",r)}Mo(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&hi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&hi(r.textContent,s,e),i=["children",""+s]):_r.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&b("scroll",r)}switch(n){case"input":oi(r),Ua(r,l,!0);break;case"textarea":oi(r),Wa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ki)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[lt]=t,e[Mr]=r,hf(e,t,!1,!1),t.stateNode=e;e:{switch(o=Fo(n,r),n){case"dialog":b("cancel",e),b("close",e),i=r;break;case"iframe":case"object":case"embed":b("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)b(pr[i],e);i=r;break;case"source":b("error",e),i=r;break;case"img":case"image":case"link":b("error",e),b("load",e),i=r;break;case"details":b("toggle",e),i=r;break;case"input":Da(e,r),i=To(e,r),b("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),b("invalid",e);break;case"textarea":Ba(e,r),i=Oo(e,r),b("invalid",e);break;default:i=r}Mo(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Qc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hc(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Nr(e,a):typeof a=="number"&&Nr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_r.hasOwnProperty(l)?a!=null&&l==="onScroll"&&b("scroll",e):a!=null&&As(e,l,a,o))}switch(n){case"input":oi(e),Ua(e,r,!1);break;case"textarea":oi(e),Wa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ki)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)gf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=rn(Dr.current),rn(st.current),mi(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(l=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:hi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return ye(t),null;case 13:if(V(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Te!==null&&t.mode&1&&!(t.flags&128))Ld(),Wn(),t.flags|=98560,l=!1;else if(l=mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[lt]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),l=!1}else Ze!==null&&(vs(Ze),Ze=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):va())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Hn(),cs(e,t),e===null&&Or(t.stateNode.containerInfo),ye(t),null;case 10:return ta(t.type._context),ye(t),null;case 17:return _e(t.type)&&Xi(),ye(t),null;case 19:if(V(Y),l=t.memoizedState,l===null)return ye(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)sr(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=rl(e),o!==null){for(t.flags|=128,sr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}l.tail!==null&&ee()>Qn&&(t.flags|=128,r=!0,sr(l,!1),t.lanes=4194304)}else{if(!r)if(e=rl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!G)return ye(t),null}else 2*ee()-l.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,sr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ee(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Im(e,t){switch(qs(t),t.tag){case 1:return _e(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),V(je),V(xe),oa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return la(t),null;case 13:if(V(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Y),null;case 4:return Hn(),null;case 10:return ta(t.type._context),null;case 22:case 23:return ya(),null;case 24:return null;default:return null}}var vi=!1,ve=!1,Om=typeof WeakSet=="function"?WeakSet:Set,$=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function ds(e,t,n){try{n()}catch(r){J(e,t,r)}}var Ru=!1;function Am(e,t){if(Yo=Qi,e=wd(),Ks(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,c=0,h=0,f=e,g=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==l||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===n&&++c===i&&(s=o),g===l&&++h===r&&(a=o),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ko={focusedElem:e,selectionRange:n},Qi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,P=v.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ke(t.type,x),P);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){J(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return v=Ru,Ru=!1,v}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ds(t,n,l)}i=i.next}while(i!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Mr],delete t[Zo],delete t[vm],delete t[xm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vf(e){return e.tag===5||e.tag===3||e.tag===4}function Tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki));else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}function hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hs(e,t,n),e=e.sibling;e!==null;)hs(e,t,n),e=e.sibling}var fe=null,Xe=!1;function St(e,t,n){for(n=n.child;n!==null;)xf(e,t,n),n=n.sibling}function xf(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:ve||Rn(n,t);case 6:var r=fe,i=Xe;fe=null,St(e,t,n),fe=r,Xe=i,fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),Tr(e)):Jl(fe,n.stateNode));break;case 4:r=fe,i=Xe,fe=n.stateNode.containerInfo,Xe=!0,St(e,t,n),fe=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ds(n,t,o),i=i.next}while(i!==r)}St(e,t,n);break;case 1:if(!ve&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,St(e,t,n),ve=r):St(e,t,n);break;default:St(e,t,n)}}function Lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Om),t.forEach(function(r){var i=Vm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,Xe=!1;break e;case 3:fe=s.stateNode.containerInfo,Xe=!0;break e;case 4:fe=s.stateNode.containerInfo,Xe=!0;break e}s=s.return}if(fe===null)throw Error(C(160));xf(l,o,i),fe=null,Xe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){J(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}function wf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),rt(e),r&4){try{Sr(3,e,e.return),Sl(3,e)}catch(x){J(e,e.return,x)}try{Sr(5,e,e.return)}catch(x){J(e,e.return,x)}}break;case 1:Ge(t,e),rt(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(Ge(t,e),rt(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(x){J(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Bc(i,l),Fo(s,o);var c=Fo(s,l);for(o=0;o<a.length;o+=2){var h=a[o],f=a[o+1];h==="style"?Qc(i,f):h==="dangerouslySetInnerHTML"?Hc(i,f):h==="children"?Nr(i,f):As(i,h,f,c)}switch(s){case"input":Lo(i,l);break;case"textarea":Wc(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?Ln(i,!!l.multiple,y,!1):g!==!!l.multiple&&(l.defaultValue!=null?Ln(i,!!l.multiple,l.defaultValue,!0):Ln(i,!!l.multiple,l.multiple?[]:"",!1))}i[Mr]=l}catch(x){J(e,e.return,x)}}break;case 6:if(Ge(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){J(e,e.return,x)}}break;case 3:if(Ge(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(x){J(e,e.return,x)}break;case 4:Ge(t,e),rt(e);break;case 13:Ge(t,e),rt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ma=ee())),r&4&&Lu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||h,Ge(t,e),ve=c):Ge(t,e),rt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for($=e,h=e.child;h!==null;){for(f=$=h;$!==null;){switch(g=$,y=g.child,g.tag){case 0:case 11:case 14:case 15:Sr(4,g,g.return);break;case 1:Rn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){J(r,n,x)}}break;case 5:Rn(g,g.return);break;case 22:if(g.memoizedState!==null){Ou(f);continue}}y!==null?(y.return=g,$=y):Ou(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Vc("display",o))}catch(x){J(e,e.return,x)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){J(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ge(t,e),rt(e),r&4&&Lu(e);break;case 21:break;default:Ge(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vf(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var l=Tu(e);hs(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Tu(e);ps(e,s,o);break;default:throw Error(C(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mm(e,t,n){$=e,kf(e)}function kf(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vi;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||ve;s=vi;var c=ve;if(vi=o,(ve=a)&&!c)for($=i;$!==null;)o=$,a=o.child,o.tag===22&&o.memoizedState!==null?Au(i):a!==null?(a.return=o,$=a):Au(i);for(;l!==null;)$=l,kf(l),l=l.sibling;$=i,vi=s,ve=c}Iu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,$=l):Iu(e)}}function Iu(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&vu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vu(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Tr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ve||t.flags&512&&fs(t)}catch(g){J(t,t.return,g)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Ou(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Au(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(a){J(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){J(t,i,a)}}var l=t.return;try{fs(t)}catch(a){J(t,l,a)}break;case 5:var o=t.return;try{fs(t)}catch(a){J(t,o,a)}}}catch(a){J(t,t.return,a)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var Fm=Math.ceil,ol=vt.ReactCurrentDispatcher,pa=vt.ReactCurrentOwner,Be=vt.ReactCurrentBatchConfig,A=0,ce=null,re=null,he=0,$e=0,Tn=Ht(0),ae=0,br=null,fn=0,Cl=0,ha=0,Cr=null,Ee=null,ma=0,Qn=1/0,at=null,sl=!1,ms=null,Mt=null,xi=!1,zt=null,al=0,Er=0,gs=null,Ti=-1,Li=0;function ke(){return A&6?ee():Ti!==-1?Ti:Ti=ee()}function Ft(e){return e.mode&1?A&2&&he!==0?he&-he:km.transition!==null?(Li===0&&(Li=id()),Li):(e=U,e!==0||(e=window.event,e=e===void 0?16:dd(e.type)),e):1}function et(e,t,n,r){if(50<Er)throw Er=0,gs=null,Error(C(185));Kr(e,n,r),(!(A&2)||e!==ce)&&(e===ce&&(!(A&2)&&(Cl|=n),ae===4&&_t(e,he)),Ne(e,r),n===1&&A===0&&!(t.mode&1)&&(Qn=ee()+500,xl&&Vt()))}function Ne(e,t){var n=e.callbackNode;kh(e,t);var r=Vi(e,e===ce?he:0);if(r===0)n!==null&&Va(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Va(n),t===1)e.tag===0?wm(Mu.bind(null,e)):$d(Mu.bind(null,e)),gm(function(){!(A&6)&&Vt()}),n=null;else{switch(ld(r)){case 1:n=Bs;break;case 4:n=nd;break;case 16:n=Hi;break;case 536870912:n=rd;break;default:n=Hi}n=zf(n,Sf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sf(e,t){if(Ti=-1,Li=0,A&6)throw Error(C(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Vi(e,e===ce?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ul(e,r);else{t=r;var i=A;A|=2;var l=Ef();(ce!==e||he!==t)&&(at=null,Qn=ee()+500,ln(e,t));do try{Bm();break}catch(s){Cf(e,s)}while(!0);ea(),ol.current=l,A=i,re!==null?t=0:(ce=null,he=0,t=ae)}if(t!==0){if(t===2&&(i=bo(e),i!==0&&(r=i,t=ys(e,i))),t===1)throw n=br,ln(e,0),_t(e,r),Ne(e,ee()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!Dm(i)&&(t=ul(e,r),t===2&&(l=bo(e),l!==0&&(r=l,t=ys(e,l))),t===1))throw n=br,ln(e,0),_t(e,r),Ne(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Zt(e,Ee,at);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=ma+500-ee(),10<t)){if(Vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qo(Zt.bind(null,e,Ee,at),t);break}Zt(e,Ee,at);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Je(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fm(r/1960))-r,10<r){e.timeoutHandle=qo(Zt.bind(null,e,Ee,at),r);break}Zt(e,Ee,at);break;case 5:Zt(e,Ee,at);break;default:throw Error(C(329))}}}return Ne(e,ee()),e.callbackNode===n?Sf.bind(null,e):null}function ys(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=ul(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&vs(t)),e}function vs(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Dm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!nt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~ha,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Mu(e){if(A&6)throw Error(C(327));Fn();var t=Vi(e,0);if(!(t&1))return Ne(e,ee()),null;var n=ul(e,t);if(e.tag!==0&&n===2){var r=bo(e);r!==0&&(t=r,n=ys(e,r))}if(n===1)throw n=br,ln(e,0),_t(e,t),Ne(e,ee()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Ee,at),Ne(e,ee()),null}function ga(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Qn=ee()+500,xl&&Vt())}}function pn(e){zt!==null&&zt.tag===0&&!(A&6)&&Fn();var t=A;A|=1;var n=Be.transition,r=U;try{if(Be.transition=null,U=1,e)return e()}finally{U=r,Be.transition=n,A=t,!(A&6)&&Vt()}}function ya(){$e=Tn.current,V(Tn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mm(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(qs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:Hn(),V(je),V(xe),oa();break;case 5:la(r);break;case 4:Hn();break;case 13:V(Y);break;case 19:V(Y);break;case 10:ta(r.type._context);break;case 22:case 23:ya()}n=n.return}if(ce=e,re=e=Dt(e.current,null),he=$e=t,ae=0,br=null,ha=Cl=fn=0,Ee=Cr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}nn=null}return e}function Cf(e,t){do{var n=re;try{if(ea(),zi.current=ll,il){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}il=!1}if(dn=0,ue=oe=K=null,kr=!1,Ur=0,pa.current=null,n===null||n.return===null){ae=1,br=t,re=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=he,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Eu(o);if(y!==null){y.flags&=-257,Pu(y,o,s,l,t),y.mode&1&&Cu(l,c,t),t=y,a=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(a),t.updateQueue=x}else v.add(a);break e}else{if(!(t&1)){Cu(l,c,t),va();break e}a=Error(C(426))}}else if(G&&s.mode&1){var P=Eu(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Pu(P,o,s,l,t),Zs(Vn(a,s));break e}}l=a=Vn(a,s),ae!==4&&(ae=2),Cr===null?Cr=[l]:Cr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=of(l,a,t);yu(l,p);break e;case 1:s=a;var u=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Mt===null||!Mt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=sf(l,s,t);yu(l,k);break e}}l=l.return}while(l!==null)}jf(n)}catch(E){t=E,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Ef(){var e=ol.current;return ol.current=ll,e===null?ll:e}function va(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(fn&268435455)&&!(Cl&268435455)||_t(ce,he)}function ul(e,t){var n=A;A|=2;var r=Ef();(ce!==e||he!==t)&&(at=null,ln(e,t));do try{Um();break}catch(i){Cf(e,i)}while(!0);if(ea(),A=n,ol.current=r,re!==null)throw Error(C(261));return ce=null,he=0,ae}function Um(){for(;re!==null;)Pf(re)}function Bm(){for(;re!==null&&!fh();)Pf(re)}function Pf(e){var t=Nf(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?jf(e):re=t,pa.current=null}function jf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Im(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=Lm(n,t,$e),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function Zt(e,t,n){var r=U,i=Be.transition;try{Be.transition=null,U=1,Wm(e,t,n,r)}finally{Be.transition=i,U=r}return null}function Wm(e,t,n,r){do Fn();while(zt!==null);if(A&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Sh(e,l),e===ce&&(re=ce=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,zf(Hi,function(){return Fn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Be.transition,Be.transition=null;var o=U;U=1;var s=A;A|=4,pa.current=null,Am(e,n),wf(n,e),am(Ko),Qi=!!Yo,Ko=Yo=null,e.current=n,Mm(n),ph(),A=s,U=o,Be.transition=l}else e.current=n;if(xi&&(xi=!1,zt=e,al=i),l=e.pendingLanes,l===0&&(Mt=null),gh(n.stateNode),Ne(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,e=ms,ms=null,e;return al&1&&e.tag!==0&&Fn(),l=e.pendingLanes,l&1?e===gs?Er++:(Er=0,gs=e):Er=0,Vt(),null}function Fn(){if(zt!==null){var e=ld(al),t=Be.transition,n=U;try{if(Be.transition=null,U=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,al=0,A&6)throw Error(C(331));var i=A;for(A|=4,$=e.current;$!==null;){var l=$,o=l.child;if($.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for($=c;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Sr(8,h,l)}var f=h.child;if(f!==null)f.return=h,$=f;else for(;$!==null;){h=$;var g=h.sibling,y=h.return;if(yf(h),h===c){$=null;break}if(g!==null){g.return=y,$=g;break}$=y}}}var v=l.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}$=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,$=o;else e:for(;$!==null;){if(l=$,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Sr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,$=p;break e}$=l.return}}var u=e.current;for($=u;$!==null;){o=$;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,$=m;else e:for(o=u;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(E){J(s,s.return,E)}if(s===o){$=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,$=k;break e}$=s.return}}if(A=i,Vt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{U=n,Be.transition=t}}return!1}function Fu(e,t,n){t=Vn(n,t),t=of(e,t,1),e=At(e,t,1),t=ke(),e!==null&&(Kr(e,1,t),Ne(e,t))}function J(e,t,n){if(e.tag===3)Fu(e,e,n);else for(;t!==null;){if(t.tag===3){Fu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Vn(n,e),e=sf(t,e,1),t=At(t,e,1),e=ke(),t!==null&&(Kr(t,1,e),Ne(t,e));break}}t=t.return}}function bm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(he&n)===n&&(ae===4||ae===3&&(he&130023424)===he&&500>ee()-ma?ln(e,0):ha|=n),Ne(e,t)}function _f(e,t){t===0&&(e.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var n=ke();e=gt(e,t),e!==null&&(Kr(e,t,n),Ne(e,n))}function Hm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function Vm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),_f(e,n)}var Nf;Nf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,Tm(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,G&&t.flags&1048576&&Rd(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ri(e,t),e=t.pendingProps;var i=Bn(t,xe.current);Mn(t,n),i=aa(null,t,r,e,i,n);var l=ua();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(l=!0,qi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ra(t),i.updater=kl,t.stateNode=i,i._reactInternals=t,is(t,r,e,n),t=ss(null,t,r,!0,l,n)):(t.tag=0,G&&l&&Xs(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ri(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Gm(r),e=Ke(r,e),i){case 0:t=os(null,t,r,e,n);break e;case 1:t=Nu(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=_u(null,t,r,Ke(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),os(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Nu(e,t,r,i,n);case 3:e:{if(df(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Md(e,t),nl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Vn(Error(C(423)),t),t=zu(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error(C(424)),t),t=zu(e,t,r,n,i);break e}else for(Te=Ot(t.stateNode.containerInfo.firstChild),Le=t,G=!0,Ze=null,n=Od(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===i){t=yt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Fd(t),e===null&&ts(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Xo(r,i)?o=null:l!==null&&Xo(r,l)&&(t.flags|=32),cf(e,t),we(e,t,o,n),t.child;case 6:return e===null&&ts(t),null;case 13:return ff(e,t,n);case 4:return ia(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),ju(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,W(el,r._currentValue),r._currentValue=o,l!==null)if(nt(l.value,o)){if(l.children===i.children&&!je.current){t=yt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=pt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ns(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(C(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ns(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mn(t,n),i=We(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),_u(e,t,r,i,n);case 15:return af(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Ri(e,t),t.tag=1,_e(r)?(e=!0,qi(t)):e=!1,Mn(t,n),lf(t,r,i),is(t,r,i,n),ss(null,t,r,!0,e,n);case 19:return pf(e,t,n);case 22:return uf(e,t,n)}throw Error(C(156,t.tag))};function zf(e,t){return td(e,t)}function Qm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Qm(e,t,n,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gm(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fs)return 11;if(e===Ds)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ii(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")xa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sn:return on(n.children,i,l,t);case Ms:o=8,i|=8;break;case No:return e=Ue(12,n,t,i|2),e.elementType=No,e.lanes=l,e;case zo:return e=Ue(13,n,t,i),e.elementType=zo,e.lanes=l,e;case $o:return e=Ue(19,n,t,i),e.elementType=$o,e.lanes=l,e;case Fc:return El(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ac:o=10;break e;case Mc:o=9;break e;case Fs:o=11;break e;case Ds:o=14;break e;case Et:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ue(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function on(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function El(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Fc,e.lanes=n,e.stateNode={isHidden:!1},e}function so(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function ao(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ym(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wa(e,t,n,r,i,l,o,s,a){return e=new Ym(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ue(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ra(l),e}function Km(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return Wt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(_e(n))return zd(e,n,t)}return t}function Rf(e,t,n,r,i,l,o,s,a){return e=wa(n,r,!0,e,i,l,o,s,a),e.context=$f(null),n=e.current,r=ke(),i=Ft(n),l=pt(r,i),l.callback=t??null,At(n,l,i),e.current.lanes=i,Kr(e,i,r),Ne(e,r),e}function Pl(e,t,n,r){var i=t.current,l=ke(),o=Ft(i);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,o),e!==null&&(et(e,i,o,l),Ni(e,i,o)),o}function cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ka(e,t){Du(e,t),(e=e.alternate)&&Du(e,t)}function Xm(){return null}var Tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sa(e){this._internalRoot=e}jl.prototype.render=Sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Pl(e,t,null,null)};jl.prototype.unmount=Sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Pl(null,e,null,null)}),t[mt]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ad();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&cd(e)}};function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function qm(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=cl(o);l.call(c)}}var o=Rf(t,r,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=o,e[mt]=o.current,Or(e.nodeType===8?e.parentNode:e),pn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=cl(a);s.call(c)}}var a=wa(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=a,e[mt]=a.current,Or(e.nodeType===8?e.parentNode:e),pn(function(){Pl(t,a,n,r)}),a}function Nl(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=cl(o);s.call(a)}}Pl(t,o,e,i)}else o=qm(n,t,e,i,r);return cl(o)}od=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Ws(t,n|1),Ne(t,ee()),!(A&6)&&(Qn=ee()+500,Vt()))}break;case 13:pn(function(){var r=gt(e,1);if(r!==null){var i=ke();et(r,e,1,i)}}),ka(e,1)}};bs=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=ke();et(t,e,134217728,n)}ka(e,134217728)}};sd=function(e){if(e.tag===13){var t=Ft(e),n=gt(e,t);if(n!==null){var r=ke();et(n,e,t,r)}ka(e,t)}};ad=function(){return U};ud=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Uo=function(e,t,n){switch(t){case"input":if(Lo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vl(r);if(!i)throw Error(C(90));Uc(r),Lo(r,i)}}}break;case"textarea":Wc(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Kc=ga;Xc=pn;var Zm={usingClientEntryPoint:!1,Events:[qr,jn,vl,Gc,Yc,ga]},ar={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jm={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jc(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{hl=wi.inject(Jm),ot=wi}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zm;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ca(t))throw Error(C(200));return Km(e,t,null,n)};Oe.createRoot=function(e,t){if(!Ca(e))throw Error(C(299));var n=!1,r="",i=Tf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wa(e,1,!1,null,null,n,!1,r,i),e[mt]=t.current,Or(e.nodeType===8?e.parentNode:e),new Sa(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Jc(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return pn(e)};Oe.hydrate=function(e,t,n){if(!_l(t))throw Error(C(200));return Nl(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Ca(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Tf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Rf(t,null,e,1,n??null,i,!1,l,o),e[mt]=t.current,Or(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jl(t)};Oe.render=function(e,t,n){if(!_l(t))throw Error(C(200));return Nl(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!_l(e))throw Error(C(40));return e._reactRootContainer?(pn(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Oe.unstable_batchedUpdates=ga;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Nl(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function Lf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lf)}catch(e){console.error(e)}}Lf(),Tc.exports=Oe;var eg=Tc.exports;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(null,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const Bu="popstate";function tg(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:s}=r.location;return xs("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:If(i)}return rg(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ea(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ng(){return Math.random().toString(36).substr(2,8)}function Wu(e,t){return{usr:e.state,key:e.key,idx:t}}function xs(e,t,n,r){return n===void 0&&(n=null),Hr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:n,key:t&&t.key||r||ng()})}function If(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function rg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=$t.Pop,a=null,c=h();c==null&&(c=0,o.replaceState(Hr({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){s=$t.Pop;let P=h(),p=P==null?null:P-c;c=P,a&&a({action:s,location:x.location,delta:p})}function g(P,p){s=$t.Push;let u=xs(x.location,P,p);c=h()+1;let m=Wu(u,c),k=x.createHref(u);try{o.pushState(m,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(k)}l&&a&&a({action:s,location:x.location,delta:1})}function y(P,p){s=$t.Replace;let u=xs(x.location,P,p);c=h();let m=Wu(u,c),k=x.createHref(u);o.replaceState(m,"",k),l&&a&&a({action:s,location:x.location,delta:0})}function v(P){let p=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof P=="string"?P:If(P);return u=u.replace(/ $/,"%20"),ie(p,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,p)}let x={get action(){return s},get location(){return e(i,o)},listen(P){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Bu,f),a=P,()=>{i.removeEventListener(Bu,f),a=null}},createHref(P){return t(i,P)},createURL:v,encodeLocation(P){let p=v(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(P){return o.go(P)}};return x}var bu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bu||(bu={}));function ig(e,t,n){return n===void 0&&(n="/"),lg(e,t,n)}function lg(e,t,n,r){let i=typeof t=="string"?Jn(t):t,l=Mf(i.pathname||"/",n);if(l==null)return null;let o=Of(e);og(o);let s=null,a=vg(l);for(let c=0;s==null&&c<o.length;++c)s=mg(o[c],a);return s}function Of(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(ie(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=sn([r,a.relativePath]),h=n.concat(a);l.children&&l.children.length>0&&(ie(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Of(l.children,t,h,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:pg(c,l.index),routesMeta:h})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let a of Af(l.path))i(l,o,a)}),t}function Af(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Af(r.join("/")),s=[];return s.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function og(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sg=/^:[\w-]+$/,ag=3,ug=2,cg=1,dg=10,fg=-2,Hu=e=>e==="*";function pg(e,t){let n=e.split("/"),r=n.length;return n.some(Hu)&&(r+=fg),t&&(r+=ug),n.filter(i=>!Hu(i)).reduce((i,l)=>i+(sg.test(l)?ag:l===""?cg:dg),r)}function hg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function mg(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",f=gg({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},h),g=a.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:sn([l,f.pathname]),pathnameBase:Cg(sn([l,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(l=sn([l,f.pathnameBase]))}return o}function gg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=yg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let x=s[f]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const v=s[f];return y&&!v?c[g]=void 0:c[g]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:o,pattern:e}}function yg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ea(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function vg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ea(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Mf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const xg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wg=e=>xg.test(e);function kg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jn(e):e,l;if(n)if(wg(n))l=n;else{if(n.includes("//")){let o=n;n=Uf(n),Ea(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=Vu(n.substring(1),"/"):l=Vu(n,t)}else l=t;return{pathname:l,search:Eg(r),hash:Pg(i)}}function Vu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ff(e,t){let n=Sg(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Df(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jn(e):(i=Hr({},e),ie(!i.pathname||!i.pathname.includes("?"),uo("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),uo("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),uo("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}s=f>=0?t[f]:"/"}let a=kg(i,s),c=o&&o!=="/"&&o.endsWith("/"),h=(l||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||h)&&(a.pathname+="/"),a}const Uf=e=>e.replace(/\/\/+/g,"/"),sn=e=>Uf(e.join("/")),Cg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Eg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function jg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bf=["post","put","patch","delete"];new Set(Bf);const _g=["get",...Bf];new Set(_g);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(null,arguments)}const Pa=N.createContext(null),Ng=N.createContext(null),Jr=N.createContext(null),zl=N.createContext(null),yn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Wf=N.createContext(null);function ei(){return N.useContext(zl)!=null}function ja(){return ei()||ie(!1),N.useContext(zl).location}function bf(e){N.useContext(Jr).static||N.useLayoutEffect(e)}function zg(){let{isDataRoute:e}=N.useContext(yn);return e?Wg():$g()}function $g(){ei()||ie(!1);let e=N.useContext(Pa),{basename:t,future:n,navigator:r}=N.useContext(Jr),{matches:i}=N.useContext(yn),{pathname:l}=ja(),o=JSON.stringify(Ff(i,n.v7_relativeSplatPath)),s=N.useRef(!1);return bf(()=>{s.current=!0}),N.useCallback(function(c,h){if(h===void 0&&(h={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=Df(c,JSON.parse(o),l,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:sn([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,o,l,e])}function Rg(e,t){return Tg(e,t)}function Tg(e,t,n,r){ei()||ie(!1);let{navigator:i}=N.useContext(Jr),{matches:l}=N.useContext(yn),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=ja(),h;if(t){var f;let P=typeof t=="string"?Jn(t):t;a==="/"||(f=P.pathname)!=null&&f.startsWith(a)||ie(!1),h=P}else h=c;let g=h.pathname||"/",y=g;if(a!=="/"){let P=a.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let v=ig(e,{pathname:y}),x=Mg(v&&v.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:sn([a,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?a:sn([a,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,n,r);return t&&x?N.createElement(zl.Provider,{value:{location:Vr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:$t.Pop}},x):x}function Lg(){let e=Bg(),t=jg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,null)}const Ig=N.createElement(Lg,null);class Og extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(yn.Provider,{value:this.props.routeContext},N.createElement(Wf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ag(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(Pa);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(yn.Provider,{value:t},r)}function Mg(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let h=o.findIndex(f=>f.route.id&&s?.[f.route.id]!==void 0);h>=0||ie(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:g,errors:y}=n,v=f.route.loader&&g[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||v){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,g)=>{let y,v=!1,x=null,P=null;n&&(y=s&&f.route.id?s[f.route.id]:void 0,x=f.route.errorElement||Ig,a&&(c<0&&g===0?(bg("route-fallback"),v=!0,P=null):c===g&&(v=!0,P=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),u=()=>{let m;return y?m=x:v?m=P:f.route.Component?m=N.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,N.createElement(Ag,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?N.createElement(Og,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:u(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):u()},null)}var Hf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hf||{}),Vf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vf||{});function Fg(e){let t=N.useContext(Pa);return t||ie(!1),t}function Dg(e){let t=N.useContext(Ng);return t||ie(!1),t}function Ug(e){let t=N.useContext(yn);return t||ie(!1),t}function Qf(e){let t=Ug(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function Bg(){var e;let t=N.useContext(Wf),n=Dg(),r=Qf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Wg(){let{router:e}=Fg(Hf.UseNavigateStable),t=Qf(Vf.UseNavigateStable),n=N.useRef(!1);return bf(()=>{n.current=!0}),N.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Vr({fromRouteId:t},l)))},[e,t])}const Qu={};function bg(e,t,n){Qu[e]||(Qu[e]=!0)}function Hg(e,t){e?.v7_startTransition,e?.v7_relativeSplatPath}function Vg(e){let{to:t,replace:n,state:r,relative:i}=e;ei()||ie(!1);let{future:l,static:o}=N.useContext(Jr),{matches:s}=N.useContext(yn),{pathname:a}=ja(),c=zg(),h=Df(t,Ff(s,l.v7_relativeSplatPath),a,i==="path"),f=JSON.stringify(h);return N.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Jt(e){ie(!1)}function Qg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:l,static:o=!1,future:s}=e;ei()&&ie(!1);let a=t.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:a,navigator:l,static:o,future:Vr({v7_relativeSplatPath:!1},s)}),[a,s,l,o]);typeof r=="string"&&(r=Jn(r));let{pathname:h="/",search:f="",hash:g="",state:y=null,key:v="default"}=r,x=N.useMemo(()=>{let P=Mf(h,a);return P==null?null:{location:{pathname:P,search:f,hash:g,state:y,key:v},navigationType:i}},[a,h,f,g,y,v,i]);return x==null?null:N.createElement(Jr.Provider,{value:c},N.createElement(zl.Provider,{children:n,value:x}))}function Gg(e){let{children:t,location:n}=e;return Rg(ws(t),n)}new Promise(()=>{});function ws(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let l=[...t,i];if(r.type===N.Fragment){n.push.apply(n,ws(r.props.children,l));return}r.type!==Jt&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ws(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Yg="6";try{window.__reactRouterVersion=Yg}catch{}const Kg="startTransition",Gu=bp[Kg];function Xg(e){let{basename:t,children:n,future:r,window:i}=e,l=N.useRef();l.current==null&&(l.current=tg({window:i,v5Compat:!0}));let o=l.current,[s,a]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=N.useCallback(f=>{c&&Gu?Gu(()=>a(f)):a(f)},[a,c]);return N.useLayoutEffect(()=>o.listen(h),[o,h]),N.useEffect(()=>Hg(r),[r]),N.createElement(Qg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var Yu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yu||(Yu={}));var Ku;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ku||(Ku={}));var Gf,Xu=eg;Gf=Xu.createRoot,Xu.hydrateRoot;const qg={name:"Divvylore",tagline:"AI support agents for customer journeys"},Zg={base:"https://app.divvylore.com",register:"https://app.divvylore.com/register",login:"https://app.divvylore.com/login"},Jg={privacyPolicy:"https://blog.divvylore.com/privacy-policy",termsAndConditions:"https://blog.divvylore.com/terms-and-conditions",refundPolicy:"https://blog.divvylore.com/refund-policy"},e0=[{label:"Product",href:"#highlights"},{label:"How it works",href:"#how-it-works"},{label:"Capabilities",href:"#features"},{label:"Pricing",href:"#pricing"}],t0={eyebrow:"Conversational AI for customer support",title:"Build AI support agents that resolve issues and keep customers moving.",description:"Divvylore is a complete platform for designing, deploying, and improving support agents with guardrails, real system actions, and human handoff.",primaryCta:{label:"Build your agent",url:"https://app.divvylore.com/register"},secondaryCta:{label:"Login",url:"https://app.divvylore.com/login"},supportPills:["Website chat","Queue-ready transport","Human escalation","Tenant isolation"]},n0={title:"The complete platform for AI support agents",subtitle:"Designed for production customer support from day one.",cards:[{title:"Purpose-built for support",description:"Train agents on your support knowledge, workflows, and response standards."},{title:"Designed for simplicity",description:"Create, test, and deploy agents without heavy operational overhead."},{title:"Engineered for reliability",description:"Use queue-first delivery and worker-backed processing for stable production behavior."}]},r0={title:"How Divvylore support agents work",steps:[{title:"Build and configure",description:"Define prompts, tools, and guardrails for your support use cases."},{title:"Connect your systems",description:"Link business context so agents can answer with real-time relevance."},{title:"Resolve customer issues",description:"Let agents handle common requests and execute approved actions."},{title:"Escalate complex cases",description:"Route edge cases to humans with full conversation context."},{title:"Improve with insights",description:"Review outcomes and optimize prompts, tools, and journey flows."}]},i0={title:"Build the support experience your customers expect",items:[{title:"Sync with support context",description:"Agents can use relevant customer and workflow context for better resolution quality."},{title:"Action-driven workflows",description:"Enable controlled actions so the agent can do more than just answer questions."},{title:"Smart escalation",description:"Escalate by policy when confidence is low or requests require human approval."},{title:"Operational analytics",description:"Track outcomes and response quality to continuously improve support performance."},{title:"Works across channels",description:"Support website chat and extensible channels from one agent control layer."},{title:"API-first integration",description:"Integrate deeply with your product using APIs and flexible runtime architecture."}]},l0={title:"See the Divvylore platform in action",subtitle:"Real product screens from analytics, agents, tools, chat, leads, and billing workflows.",items:[{title:"Analytics dashboard",imageUrl:"/artifacts/analytics-dashboard.png",alt:"Analytics dashboard with response and sender metrics"},{title:"Usage and credits",imageUrl:"/artifacts/usage-credits.png",alt:"Usage and credits page with limits and progress bars"},{title:"Agent management",imageUrl:"/artifacts/agent-management.png",alt:"Agent management list and details"},{title:"Tool marketplace",imageUrl:"/artifacts/tool-marketplace.png",alt:"Tool marketplace modal with featured tools"},{title:"Live playground",imageUrl:"/artifacts/live-playground.png",alt:"Agent playground with floating live preview"},{title:"Chat history",imageUrl:"/artifacts/chat-history.png",alt:"Chat history interface with conversation threads"},{title:"Lead generation",imageUrl:"/artifacts/lead-generation.png",alt:"Lead generation contacts table"},{title:"Billing and plans",imageUrl:"/artifacts/billing-plans.png",alt:"Billing and subscription plans"},{title:"Credit center",imageUrl:"/artifacts/credit-center.png",alt:"Credit balance and transaction summary"}]},o0={title:"Enterprise-grade security and privacy",items:[{title:"Your data stays controlled",description:"Tenant-aware design and scoped execution protect customer boundaries."},{title:"Encrypted by default",description:"Use secure transport and protected service boundaries across system flows."},{title:"Guardrails for responses",description:"Response policies reduce off-topic and unsafe outputs in customer-facing chats."}]},s0={title:"Pricing for teams growing support automation",subtitle:"Start simple and expand as support volume and complexity increase.",plans:[{name:"Starter",price:"$29",period:"/month",description:"For teams launching their first AI support workflow.",features:["1 production agent","Portal access","Basic analytics","Email support"],highlighted:!1,ctaLabel:"Choose Starter",planCode:"starter"},{name:"Growth",price:"$99",period:"/month",description:"For teams running multiple production support workflows.",features:["5 production agents","Advanced configuration","Queue-first chat flow","Priority support"],highlighted:!0,ctaLabel:"Choose Growth",planCode:"growth"},{name:"Scale",price:"Custom",period:"",description:"For enterprises with advanced governance requirements.",features:["Custom agent limits","Tenant governance","Dedicated onboarding","Architecture support"],highlighted:!1,ctaLabel:"Contact Sales",planCode:"scale"}]},a0={title:"FAQ",items:[{question:"Can we start with one workflow and scale later?",answer:"Yes. You can start with one production workflow and scale to additional agents and channels."},{question:"Where do registration and login happen?",answer:"All account actions happen in app.divvylore.com."},{question:"Can we keep a human in the loop?",answer:"Yes. Divvylore supports escalation and handoff patterns for complex customer issues."}]},u0={copyright:"© 2026 Divvylore. All rights reserved.",quickLinks:[{label:"Get Started",url:"https://app.divvylore.com/register"},{label:"Login",url:"https://app.divvylore.com/login"},{label:"Pricing",url:"#pricing"}]},pe={brand:qg,appUrls:Zg,legalUrls:Jg,navigation:e0,hero:t0,highlights:n0,howItWorks:r0,features:i0,artifacts:l0,security:o0,pricing:s0,faq:a0,footer:u0};var H="-ms-",Pr="-moz-",F="-webkit-",Yf="comm",$l="rule",_a="decl",c0="@import",d0="@namespace",Kf="@keyframes",f0="@layer",Xf=Math.abs,Na=String.fromCharCode,ks=Object.assign;function p0(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function qf(e){return e.trim()}function ut(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Oi(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function hn(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Zf(e){return e.length}function hr(e,t){return t.push(e),e}function h0(e,t){return e.map(t).join("")}function qu(e,t){return e.filter(function(n){return!ut(n,t)})}var Rl=1,Gn=1,Jf=0,He=0,ne=0,er="";function Tl(e,t,n,r,i,l,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:Rl,column:Gn,length:o,return:"",siblings:s}}function Ct(e,t){return ks(Tl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xn(e){for(;e.root;)e=Ct(e.root,{children:[e]});hr(e,e.siblings)}function m0(){return ne}function g0(){return ne=He>0?se(er,--He):0,Gn--,ne===10&&(Gn=1,Rl--),ne}function tt(){return ne=He<Jf?se(er,He++):0,Gn++,ne===10&&(Gn=1,Rl++),ne}function Rt(){return se(er,He)}function Ai(){return He}function Ll(e,t){return hn(er,e,t)}function Qr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function y0(e){return Rl=Gn=1,Jf=qe(er=e),He=0,[]}function v0(e){return er="",e}function co(e){return qf(Ll(He-1,Ss(e===91?e+2:e===40?e+1:e)))}function x0(e){for(;(ne=Rt())&&ne<33;)tt();return Qr(e)>2||Qr(ne)>3?"":" "}function w0(e,t){for(;--t&&tt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Ll(e,Ai()+(t<6&&Rt()==32&&tt()==32))}function Ss(e){for(;tt();)switch(ne){case e:return He;case 34:case 39:e!==34&&e!==39&&Ss(ne);break;case 40:e===41&&Ss(e);break;case 92:tt();break}return He}function k0(e,t){for(;tt()&&e+ne!==57;)if(e+ne===84&&Rt()===47)break;return"/*"+Ll(t,He-1)+"*"+Na(e===47?e:tt())}function S0(e){for(;!Qr(Rt());)tt();return Ll(e,He)}function C0(e){return v0(Mi("",null,null,null,[""],e=y0(e),0,[0],e))}function Mi(e,t,n,r,i,l,o,s,a){for(var c=0,h=0,f=o,g=0,y=0,v=0,x=1,P=1,p=1,u=0,m="",k=i,E=l,_=r,S=m;P;)switch(v=u,u=tt()){case 40:if(v!=108&&se(S,f-1)==58){Oi(S+=I(co(u),"&","&\f"),"&\f",Xf(c?s[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:S+=co(u);break;case 9:case 10:case 13:case 32:S+=x0(v);break;case 92:S+=w0(Ai()-1,7);continue;case 47:switch(Rt()){case 42:case 47:hr(E0(k0(tt(),Ai()),t,n,a),a),(Qr(v||1)==5||Qr(Rt()||1)==5)&&qe(S)&&hn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*x:s[c++]=qe(S)*p;case 125*x:case 59:case 0:switch(u){case 0:case 125:P=0;case 59+h:p==-1&&(S=I(S,/\f/g,"")),y>0&&(qe(S)-f||x===0&&v===47)&&hr(y>32?Ju(S+";",r,n,f-1,a):Ju(I(S," ","")+";",r,n,f-2,a),a);break;case 59:S+=";";default:if(hr(_=Zu(S,t,n,c,h,i,s,m,k=[],E=[],f,l),l),u===123)if(h===0)Mi(S,t,_,_,k,l,f,s,E);else{switch(g){case 99:if(se(S,3)===110)break;case 108:if(se(S,2)===97)break;default:h=0;case 100:case 109:case 115:}h?Mi(e,_,_,r&&hr(Zu(e,_,_,0,0,i,s,m,i,k=[],f,E),E),i,E,f,s,r?k:E):Mi(S,_,_,_,[""],E,0,s,E)}}c=h=y=0,x=p=1,m=S="",f=o;break;case 58:f=1+qe(S),y=v;default:if(x<1){if(u==123)--x;else if(u==125&&x++==0&&g0()==125)continue}switch(S+=Na(u),u*x){case 38:p=h>0?1:(S+="\f",-1);break;case 44:s[c++]=(qe(S)-1)*p,p=1;break;case 64:Rt()===45&&(S+=co(tt())),g=Rt(),h=f=qe(m=S+=S0(Ai())),u++;break;case 45:v===45&&qe(S)==2&&(x=0)}}return l}function Zu(e,t,n,r,i,l,o,s,a,c,h,f){for(var g=i-1,y=i===0?l:[""],v=Zf(y),x=0,P=0,p=0;x<r;++x)for(var u=0,m=hn(e,g+1,g=Xf(P=o[x])),k=e;u<v;++u)(k=qf(P>0?y[u]+" "+m:I(m,/&\f/g,y[u])))&&(a[p++]=k);return Tl(e,t,n,i===0?$l:s,a,c,h,f)}function E0(e,t,n,r){return Tl(e,t,n,Yf,Na(m0()),hn(e,2,-2),0,r)}function Ju(e,t,n,r,i){return Tl(e,t,n,_a,hn(e,0,r),hn(e,r+1,-1),r,i)}function ep(e,t,n){switch(p0(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return F+e+e;case 4855:return F+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Pr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Pr+e+H+e+e;case 5936:switch(se(e,t+11)){case 114:return F+e+H+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+H+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+H+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+H+e+e;case 6165:return F+e+H+"flex-"+e+e;case 5187:return F+e+I(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return F+e+H+"flex-item-"+I(e,/flex-|-self/g,"")+(ut(e,/flex-|baseline/)?"":H+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return F+e+H+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+H+I(e,"shrink","negative")+e;case 5292:return F+e+H+I(e,"basis","preferred-size")+e;case 6060:return F+"box-"+I(e,"-grow","")+F+e+H+I(e,"grow","positive")+e;case 4554:return F+I(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+H+"flex-pack:$3"),/space-between/,"justify")+F+e+e;case 4200:if(!ut(e,/flex-|baseline/))return H+"grid-column-align"+hn(e,t)+e;break;case 2592:case 3360:return H+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ut(r.props,/grid-\w+-end/)})?~Oi(e+(n=n[t].value),"span",0)?e:H+I(e,"-start","")+e+H+"grid-row-span:"+(~Oi(n,"span",0)?ut(n,/\d+/):+ut(n,/\d+/)-+ut(e,/\d+/))+";":H+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ut(r.props,/grid-\w+-start/)})?e:H+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Pr+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Oi(e,"stretch",0)?ep(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,l,o,s,a,c){return H+i+":"+l+c+(o?H+i+"-span:"+(s?a:+a-+l)+c:"")+e});case 4949:if(se(e,t+6)===121)return I(e,":",":"+F)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(se(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+H+"$2box$3")+e;case 100:return I(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function dl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function P0(e,t,n,r){switch(e.type){case f0:if(e.children.length)break;case c0:case d0:case _a:return e.return=e.return||e.value;case Yf:return"";case Kf:return e.return=e.value+"{"+dl(e.children,r)+"}";case $l:if(!qe(e.value=e.props.join(",")))return""}return qe(n=dl(e.children,r))?e.return=e.value+"{"+n+"}":""}function j0(e){var t=Zf(e);return function(n,r,i,l){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,l)||"";return o}}function _0(e){return function(t){t.root||(t=t.return)&&e(t)}}function N0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case _a:e.return=ep(e.value,e.length,n);return;case Kf:return dl([Ct(e,{value:I(e.value,"@","@"+F)})],r);case $l:if(e.length)return h0(n=e.props,function(i){switch(ut(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xn(Ct(e,{props:[I(i,/:(read-\w+)/,":"+Pr+"$1")]})),xn(Ct(e,{props:[i]})),ks(e,{props:qu(n,r)});break;case"::placeholder":xn(Ct(e,{props:[I(i,/:(plac\w+)/,":"+F+"input-$1")]})),xn(Ct(e,{props:[I(i,/:(plac\w+)/,":"+Pr+"$1")]})),xn(Ct(e,{props:[I(i,/:(plac\w+)/,H+"input-$1")]})),xn(Ct(e,{props:[i]})),ks(e,{props:qu(n,r)});break}return""})}}var Dn={},fo,po;const Yn=typeof process<"u"&&Dn!==void 0&&(Dn.REACT_APP_SC_ATTR||Dn.SC_ATTR)||"data-styled",tp="active",np="data-styled-version",Il="6.4.2",za=`/*!sc*/
`,jr=typeof window<"u"&&typeof document<"u";function ec(e){if(typeof process<"u"&&Dn!==void 0){const t=Dn[e];if(t!==void 0&&t!=="")return t!=="false"}}const z0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(po=(fo=ec("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&fo!==void 0?fo:ec("SC_DISABLE_SPEEDY"))!==null&&po!==void 0?po:typeof process<"u"&&Dn!==void 0&&!1),$0="sc-keyframes-",R0={};function Ol(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let Fi=new Map,fl=new Map,Di=1;const ki=e=>{if(Fi.has(e))return Fi.get(e);for(;fl.has(Di);)Di++;const t=Di++;return Fi.set(e,t),fl.set(t,e),t},T0=e=>fl.get(e),L0=(e,t)=>{Di=t+1,Fi.set(e,t),fl.set(t,e)},$a=Object.freeze([]),Kn=Object.freeze({});function rp(e,t,n=Kn){return e.theme!==n.theme&&e.theme||t||n.theme}const I0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O0=/(^-|-$)/g;function ip(e){return e.replace(I0,"-").replace(O0,"")}const A0=/(a)(d)/gi,tc=e=>String.fromCharCode(e+(e>25?39:97));function lp(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=tc(t%52)+n;return(tc(t%52)+n).replace(A0,"$1-$2")}const Cs=5381,an=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},op=e=>an(Cs,e);function sp(e){return lp(op(e)>>>0)}function M0(e){return e.displayName||e.name||"Component"}function Es(e){return typeof e=="string"&&!0}function F0(e){return Es(e)?`styled.${e}`:`Styled(${M0(e)})`}const ap=Symbol.for("react.memo"),D0=Symbol.for("react.forward_ref"),U0={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},B0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},up={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},W0={[D0]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ap]:up};function nc(e){return("type"in(t=e)&&t.type.$$typeof)===ap?up:"$$typeof"in e?W0[e.$$typeof]:U0;var t}const b0=Object.defineProperty,H0=Object.getOwnPropertyNames,V0=Object.getOwnPropertySymbols,Q0=Object.getOwnPropertyDescriptor,G0=Object.getPrototypeOf,Y0=Object.prototype;function cp(e,t,n){if(typeof t!="string"){const r=G0(t);r&&r!==Y0&&cp(e,r,n);const i=H0(t).concat(V0(t)),l=nc(e),o=nc(t);for(let s=0;s<i.length;++s){const a=i[s];if(!(a in B0||n&&n[a]||o&&a in o||l&&a in l)){const c=Q0(t,a);try{b0(e,a,c)}catch{}}}}return e}function ti(e){return typeof e=="function"}const K0=Symbol.for("react.forward_ref");function Ra(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===K0&&"styledComponentId"in e}function mr(e,t){return e&&t?e+" "+t:e||t||""}function Ps(e,t){return e.join("")}function Gr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function js(e,t,n=!1){if(!n&&!Gr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=js(e[r],t[r]);else if(Gr(t))for(const r in t)e[r]=js(e[r],t[r]);return e}function dp(e,t){Object.defineProperty(e,"toString",{value:t})}const X0=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const i=this.groupSizes,l=i.length;let o=l;for(;e>=o;)if(o<<=1,o<0)throw Ol(16,`${e}`);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(let s=l;s<o;s++)this.groupSizes[s]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,l=t.length;i<l;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let l=r;l<i;l++)t+=this.tag.getRule(l)+za;return t}},q0=`style[${Yn}][${np}="${Il}"]`,Z0=new RegExp(`^${Yn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),rc=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,_s=e=>{if(!e)return document;if(rc(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(rc(t))return t}return document},J0=(e,t,n)=>{const r=n.split(",");let i;for(let l=0,o=r.length;l<o;l++)(i=r[l])&&e.registerName(t,i)},e1=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(za),i=[];for(let l=0,o=r.length;l<o;l++){const s=r[l].trim();if(!s)continue;const a=s.match(Z0);if(a){const c=0|parseInt(a[1],10),h=a[2];c!==0&&(L0(h,c),J0(e,h,a[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}},ho=e=>{const t=_s(e.options.target).querySelectorAll(q0);for(let n=0,r=t.length;n<r;n++){const i=t[n];i&&i.getAttribute(Yn)!==tp&&(e1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};let ur=!1;function t1(){if(ur!==!1)return ur;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ur=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return ur=t.getAttribute("content")||void 0}return ur=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const fp=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),l=(a=>{const c=Array.from(a.querySelectorAll(`style[${Yn}]`));return c[c.length-1]})(r),o=l!==void 0?l.nextSibling:null;i.setAttribute(Yn,tp),i.setAttribute(np,Il);const s=t||t1();return s&&i.setAttribute("nonce",s),r.insertBefore(i,o),i},n1=class{constructor(e,t){this.element=fp(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let l=0,o=i.length;l<o;l++){const s=i[l];if(s.ownerNode===n)return s}throw Ol(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},r1=class{constructor(e,t){this.element=fp(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let ic=jr;const i1={isServer:!jr,useCSSOMInjection:!z0};class ni{static registerId(t){return ki(t)}constructor(t=Kn,n={},r){this.options=Object.assign(Object.assign({},i1),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&jr&&ic&&(ic=!1,ho(this)),dp(this,()=>(i=>{const l=i.getTag(),{length:o}=l;let s="";for(let a=0;a<o;a++){const c=T0(a);if(c===void 0)continue;const h=i.names.get(c);if(h===void 0||!h.size)continue;const f=l.getGroup(a);if(f.length===0)continue;const g=Yn+".g"+a+'[id="'+c+'"]';let y="";for(const v of h)v.length>0&&(y+=v+",");s+=f+g+'{content:"'+y+'"}'+za}return s})(this))}rehydrate(){!this.server&&jr&&ho(this)}reconstructWithOptions(t,n=!0){const r=new ni(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&jr&&t.target!==this.options.target&&_s(this.options.target)!==_s(t.target)&&ho(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:i})=>n?new n1(r,i):new r1(r,i))(this.options),new X0(t)));var t}hasNameForId(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i}registerName(t,n){ki(t),t.startsWith($0)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(ki(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(ki(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const pp=new WeakSet,l1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function o1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in l1||e.startsWith("--")?String(t).trim():t+"px"}const en=47;function lc(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const s1=Symbol.for("sc-keyframes");function a1(e){return typeof e=="object"&&e!==null&&s1 in e}function hp(e){return ti(e)&&!(e.prototype&&e.prototype.isReactComponent)}const mp=e=>e==null||e===!1||e==="",u1=Symbol.for("react.client.reference");function oc(e){return e.$$typeof===u1}function gp(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!mp(r)&&(Array.isArray(r)&&pp.has(r)||ti(r)?t.push(lc(n)+":",r,";"):Gr(r)?(t.push(n+" {"),gp(r,t),t.push("}")):t.push(lc(n)+": "+o1(n,r)+";"))}}function Ut(e,t,n,r,i=[]){if(mp(e))return i;const l=typeof e;if(l==="string")return i.push(e),i;if(l==="function"){if(oc(e))return i;if(hp(e)&&t){const o=e(t);return Ut(o,t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let o=0;o<e.length;o++)Ut(e[o],t,n,r,i);return i}return Ra(e)?(i.push(`.${e.styledComponentId}`),i):a1(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):oc(e)?i:Gr(e)?e.toString!==Object.prototype.toString?(i.push(e.toString()),i):(gp(e,i),i):(i.push(e.toString()),i)}const c1=op(Il);class d1{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=an(c1,n),this.baseStyle=r,ni.registerId(n)}generateAndInjectStyles(t,n,r){let i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let l="";for(let o=0;o<this.rules.length;o++){const s=this.rules[o];if(typeof s=="string")l+=s;else if(s)if(hp(s)){const a=s(t);typeof a=="string"?l+=a:a!=null&&a!==!1&&(l+=Ps(Ut(a,t,n,r)))}else l+=Ps(Ut(s,t,n,r))}if(l){this.dynamicNameCache||(this.dynamicNameCache=new Map);const o=r.hash?r.hash+l:l;let s=this.dynamicNameCache.get(o);if(!s){if(s=lp(an(an(this.baseHash,r.hash),l)>>>0),this.dynamicNameCache.size>=200){const a=this.dynamicNameCache.keys().next().value;a!==void 0&&this.dynamicNameCache.delete(a)}this.dynamicNameCache.set(o,s)}if(!n.hasNameForId(this.componentId,s)){const a=r(l,"."+s,void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=mr(i,s)}}return i}}const f1=/&/g;function yp(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function mo(e){const t=e.length;let n="",r=0,i=0,l=0,o=!1,s=!1;for(let a=0;a<t;a++){const c=e.charCodeAt(a);if(l!==0||o||c!==en||e.charCodeAt(a+1)!==42)if(o)c===42&&e.charCodeAt(a+1)===en&&(o=!1,a++);else if(c!==34&&c!==39||yp(e,a)){if(l===0)if(c===123)i++;else if(c===125){if(i--,i<0){s=!0;let h=a+1;for(;h<t;){const f=e.charCodeAt(h);if(f===59||f===10)break;h++}h<t&&e.charCodeAt(h)===59&&h++,i=0,a=h-1,r=h;continue}i===0&&(n+=e.substring(r,a+1),r=a+1)}else c===59&&i===0&&(n+=e.substring(r,a+1),r=a+1)}else l===0?l=c:l===c&&(l=0);else o=!0,a++}return s||i!==0||l!==0?(r<t&&i===0&&l===0&&(n+=e.substring(r)),n):e}function vp(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const l=e[i];if(l.type==="rule"){l.value=(n+l.value).replaceAll(",",r);const o=l.props,s=[];for(let a=0;a<o.length;a++)s[a]=n+o[a];l.props=s}Array.isArray(l.children)&&l.type!=="@keyframes"&&vp(l.children,t)}return e}function p1({options:e=Kn,plugins:t=$a}=Kn){let n,r,i;const l=(g,y,v)=>v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?`.${n}`:g,o=t.slice();o.push(g=>{g.type===$l&&g.value.includes("&")&&(i||(i=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(f1,r).replace(i,l))}),e.prefix&&o.push(N0),o.push(P0);let s=[];const a=j0(o.concat(_0(g=>s.push(g)))),c=(g,y="",v="",x="&")=>{n=x,r=y,i=void 0;const P=function(u){const m=u.indexOf("//")!==-1,k=u.indexOf("}")!==-1;if(!m&&!k)return u;if(!m)return mo(u);const E=u.length;let _="",S=0,j=0,D=0,L=0,Q=0,Ve=!1;for(;j<E;){const q=u.charCodeAt(j);if(q!==34&&q!==39||yp(u,j))if(D===0)if(q===en&&j+1<E&&u.charCodeAt(j+1)===42){for(j+=2;j+1<E&&(u.charCodeAt(j)!==42||u.charCodeAt(j+1)!==en);)j++;j+=2}else if(q!==40)if(q!==41)if(L>0)j++;else if(q===42&&j+1<E&&u.charCodeAt(j+1)===en)_+=u.substring(S,j),j+=2,S=j,Ve=!0;else if(q===en&&j+1<E&&u.charCodeAt(j+1)===en){for(_+=u.substring(S,j);j<E&&u.charCodeAt(j)!==10;)j++;S=j,Ve=!0}else q===123?Q++:q===125&&Q--,j++;else L>0&&L--,j++;else L++,j++;else j++;else D===0?D=q:D===q&&(D=0),j++}return Ve?(S<E&&(_+=u.substring(S)),Q===0?_:mo(_)):Q===0?u:mo(u)}(g);let p=C0(v||y?v+" "+y+" { "+P+" }":P);return e.namespace&&(p=vp(p,e.namespace)),s=[],dl(p,a),s},h=e;let f=Cs;for(let g=0;g<t.length;g++)t[g].name||Ol(15),f=an(f,t[g].name);return h?.namespace&&(f=an(f,h.namespace)),h?.prefix&&(f=an(f,"p")),c.hash=f!==Cs?f.toString():"",c}const h1=new ni,m1=p1(),xp=Re.createContext({shouldForwardProp:void 0,styleSheet:h1,stylis:m1,stylisPlugins:void 0});xp.Consumer;function wp(){return Re.useContext(xp)}const Ta=Re.createContext(void 0);Ta.Consumer;const sc=Object.prototype.hasOwnProperty,go={};function g1(e,t){const n=typeof e!="string"?"sc":ip(e);go[n]=(go[n]||0)+1;const r=n+"-"+sp(Il+n+go[n]);return t?t+"-"+r:r}function y1(e,t,n){const r=Ra(e),i=e,l=!Es(e),{attrs:o=$a,componentId:s=g1(t.displayName,t.parentComponentId),displayName:a=F0(e)}=t,c=t.displayName&&t.componentId?ip(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o;let{shouldForwardProp:f}=t;if(r&&i.shouldForwardProp){const x=i.shouldForwardProp;if(t.shouldForwardProp){const P=t.shouldForwardProp;f=(p,u)=>x(p,u)&&P(p,u)}else f=x}const g=new d1(n,c,r?i.componentStyle:void 0);function y(x,P){return function(p,u,m){const{attrs:k,componentStyle:E,defaultProps:_,foldedComponentIds:S,styledComponentId:j,target:D}=p,L=Re.useContext(Ta),Q=wp(),Ve=p.shouldForwardProp||Q.shouldForwardProp,q=rp(u,L,_)||Kn;let Qe,Qt;{const R=Re.useRef(null),T=R.current;if(T!==null&&T[1]===q&&T[2]===Q.styleSheet&&T[3]===Q.stylis&&T[7]===E&&function(B,M,le){const Z=B,te=M;let ze=0;for(const Me in te)if(sc.call(te,Me)&&(ze++,Z[Me]!==te[Me]))return!1;return ze===le}(T[0],u,T[4]))Qe=T[5],Qt=T[6];else{Qe=function(M,le,Z){const te=Object.assign(Object.assign({},le),{className:void 0,theme:Z}),ze=M.length>1;for(let Me=0;Me<M.length;Me++){const Al=M[Me],ri=ti(Al)?Al(ze?Object.assign({},te):te):Al;for(const kt in ri)kt==="className"?te.className=mr(te.className,ri[kt]):kt==="style"?te.style=Object.assign(Object.assign({},te.style),ri[kt]):kt in le&&le[kt]===void 0||(te[kt]=ri[kt])}return"className"in le&&typeof le.className=="string"&&(te.className=mr(te.className,le.className)),te}(k,u,q),Qt=function(M,le,Z,te){return M.generateAndInjectStyles(le,Z,te)}(E,Qe,Q.styleSheet,Q.stylis);let B=0;for(const M in u)sc.call(u,M)&&B++;R.current=[u,q,Q.styleSheet,Q.stylis,B,Qe,Qt,E]}}const wt=Qe.as||D,Gt=function(R,T,B,M){const le={};for(const Z in R)R[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&R.theme===B||(Z==="forwardedAs"?le.as=R.forwardedAs:M&&!M(Z,T)||(le[Z]=R[Z]));return le}(Qe,wt,q,Ve);let z=mr(S,j);return Qt&&(z+=" "+Qt),Qe.className&&(z+=" "+Qe.className),Gt[Es(wt)&&wt.includes("-")?"class":"className"]=z,m&&(Gt.ref=m),N.createElement(wt,Gt)}(v,x,P)}y.displayName=a;let v=Re.forwardRef(y);return v.attrs=h,v.componentStyle=g,v.displayName=a,v.shouldForwardProp=f,v.foldedComponentIds=r?mr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=c,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get(){return this._foldedDefaultProps},set(x){this._foldedDefaultProps=r?function(P,...p){for(const u of p)js(P,u,!0);return P}({},i.defaultProps,x):x}}),dp(v,()=>`.${v.styledComponentId}`),l&&cp(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}var v1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function ac(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const uc=e=>(pp.add(e),e);function kp(e,...t){if(ti(e)||Gr(e))return uc(Ut(ac($a,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Ut(n):uc(Ut(ac(n,t)))}function Ns(e,t,n=Kn){if(!t)throw Ol(1,t);const r=(i,...l)=>e(t,n,kp(i,...l));return r.attrs=i=>Ns(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)})),r.withConfig=i=>Ns(e,t,Object.assign(Object.assign({},n),i)),r}const Sp=e=>Ns(y1,e),w=Sp;v1.forEach(e=>{w[e]=Sp(e)});class x1{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let i=0;i<r.length;i+=1){const l=r[i];if(ti(l)&&!Ra(l))return!1}return!0}(t),ni.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,i){const l=this.componentId;if(this.isStatic){if(r.hasNameForId(l,l+t))this.instanceRules.has(t)||this.computeRules(t,n,r,i);else{const s=this.computeRules(t,n,r,i);r.insertRules(l,s.name,s.rules)}return}const o=this.instanceRules.get(t);if(this.computeRules(t,n,r,i),!r.server&&o){const s=o.rules,a=this.instanceRules.get(t).rules;if(s.length===a.length){let c=!0;for(let h=0;h<s.length;h++)if(s[h]!==a[h]){c=!1;break}if(c)return}}this.rebuildGroup(r)}computeRules(t,n,r,i){const l=Ps(Ut(this.rules,n,r,i)),o={name:this.componentId+t,rules:i(l,"")};return this.instanceRules.set(t,o),o}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function w1(e,...t){const n=kp(e,...t),r=`sc-global-${sp(JSON.stringify(n))}`,i=new x1(n,r),l=s=>{const a=wp(),c=Re.useContext(Ta);let h;{const f=Re.useRef(null);f.current===null&&(f.current=a.styleSheet.allocateGSInstance(r)),h=f.current}a.styleSheet.server&&o(h,s,a.styleSheet,c,a.stylis);{const f=i.isStatic?[h,a.styleSheet,i]:[h,s,a.styleSheet,c,a.stylis,i],g=Re.useRef(i);Re.useLayoutEffect(()=>{a.styleSheet.server||(g.current!==i&&(a.styleSheet.clearRules(r),g.current=i),o(h,s,a.styleSheet,c,a.stylis))},f),Re.useLayoutEffect(()=>()=>{a.styleSheet.server||i.removeStyles(h,a.styleSheet)},[h,a.styleSheet,i])}return a.styleSheet.server&&i.instanceRules.delete(h),null};function o(s,a,c,h,f){if(i.isStatic)i.renderStyles(s,R0,c,f);else{const g=Object.assign(Object.assign({},a),{theme:rp(a,h,l.defaultProps)});i.renderStyles(s,g,c,f)}}return Re.memo(l)}const k1=w.footer`
  background: var(--bg-ink);
  color: #c9d1e3;
  padding: 4rem 1.4rem 2.4rem;
`,S1=w.div`
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 1.1fr) 2fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,C1=w.div`
  display: grid;
  gap: 1rem;
  align-content: start;
`,E1=w.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #ffffff;
`,P1=w.img`
  width: 38px;
  height: 38px;
`,j1=w.span`
  font-family: 'DM Serif Display', 'Space Grotesk', serif;
  font-weight: 400;
  font-size: 1.45rem;
  color: #ffffff;
  letter-spacing: 0.08em;
  line-height: 1;
  position: relative;
  top: 1px;
`,_1=w.p`
  margin: 0;
  color: #95a2bf;
  line-height: 1.65;
  max-width: 320px;
`,N1=w.div`
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
`,de=w.a`
  color: #b9c4dd;
  font-size: 0.95rem;
  line-height: 1.5;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`,z1=w.div`
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
`,$1=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,R1=()=>{const e=typeof window<"u"?window.location.hostname:"divvylore.com",t=`${pe.appUrls.register}?source=${encodeURIComponent(e)}&placement=footer`,n=`${pe.appUrls.login}?source=${encodeURIComponent(e)}&placement=footer`,r=pe.legalUrls.privacyPolicy,i=pe.legalUrls.termsAndConditions,l=pe.legalUrls.refundPolicy;return d.jsxs(k1,{children:[d.jsxs(S1,{children:[d.jsxs(C1,{children:[d.jsxs(E1,{href:"/","aria-label":"Divvylore home",children:[d.jsx(P1,{src:"/img/svg/logo.svg",alt:""}),d.jsx(j1,{children:"DIVVYLORE"})]}),d.jsx(_1,{children:pe.brand.tagline})]}),d.jsxs(N1,{children:[d.jsxs(yo,{children:[d.jsx(vo,{children:"Product"}),d.jsx(de,{href:"#highlights",children:"Platform"}),d.jsx(de,{href:"#how-it-works",children:"How it works"}),d.jsx(de,{href:"#features",children:"Capabilities"}),d.jsx(de,{href:"#security",children:"Security"}),d.jsx(de,{href:"#pricing",children:"Pricing"})]}),d.jsxs(yo,{children:[d.jsx(vo,{children:"Resources"}),d.jsx(de,{href:"#faq",children:"FAQ"}),d.jsx(de,{href:pe.appUrls.base,children:"Customer portal"}),d.jsx(de,{href:t,children:"Create account"}),d.jsx(de,{href:n,children:"Sign in"}),d.jsx(de,{href:"mailto:hello@divvylore.com",children:"Contact"})]}),d.jsxs(yo,{children:[d.jsx(vo,{children:"Company"}),d.jsx(de,{href:pe.appUrls.base,children:"About"}),d.jsx(de,{href:r,children:"Privacy policy"}),d.jsx(de,{href:i,children:"Terms and conditions"}),d.jsx(de,{href:l,children:"Refund policy"})]})]})]}),d.jsxs(z1,{children:[d.jsx("span",{children:pe.footer.copyright}),d.jsxs($1,{children:[d.jsx(de,{href:r,children:"Privacy"}),d.jsx(de,{href:i,children:"Terms"}),d.jsx(de,{href:l,children:"Refunds"})]})]})]})},T1=w.header`
  position: sticky;
  top: 0;
  z-index: 120;
  background: rgba(245, 243, 238, 0.82);
  backdrop-filter: saturate(140%) blur(16px);
  border-bottom: 1px solid var(--line);
`,L1=w.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0.7rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 700px) {
    padding: 0.6rem 1rem;
  }
`,I1=w.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text-primary);
  flex-shrink: 0;
`,O1=w.img`
  width: 38px;
  height: 38px;
  display: block;
`,A1=w.span`
  font-family: 'DM Serif Display', 'Space Grotesk', serif;
  font-weight: 400;
  font-size: 1.45rem;
  letter-spacing: 0.08em;
  color: #2a2a2a;
  line-height: 1;
  position: relative;
  top: 1px;
`,M1=w.nav`
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
`,F1=w.div`
  flex: 1;
`,D1=w.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 700px) {
    gap: 0.4rem;
  }
`,U1=w.a`
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
`,B1=w.a`
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
`,W1=w.button`
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
`,b1=w.div`
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
`,H1=()=>{const[e,t]=N.useState(!1),n=typeof window<"u"?window.location.hostname:"divvylore.com",r=`${pe.appUrls.register}?source=${encodeURIComponent(n)}&placement=header`,i=`${pe.appUrls.login}?source=${encodeURIComponent(n)}&placement=header`;return d.jsxs(T1,{children:[d.jsxs(L1,{children:[d.jsxs(I1,{href:"/","aria-label":"Divvylore home",children:[d.jsx(O1,{src:"/img/svg/logo.svg",alt:""}),d.jsx(A1,{children:"DIVVYLORE"})]}),d.jsx(M1,{children:pe.navigation.map(l=>d.jsx(Ui,{href:l.href,children:l.label},l.label))}),d.jsx(F1,{}),d.jsxs(D1,{children:[d.jsx(U1,{href:i,children:"Sign in"}),d.jsx(B1,{href:r,children:"Get started"}),d.jsx(W1,{type:"button","aria-label":"Toggle menu","aria-expanded":e,onClick:()=>t(l=>!l),children:d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:d.jsx("path",{d:"M2 4.5h14M2 9h14M2 13.5h14",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})})})]})]}),d.jsxs(b1,{open:e,children:[pe.navigation.map(l=>d.jsx(Ui,{href:l.href,onClick:()=>t(!1),children:l.label},`m-${l.label}`)),d.jsx(Ui,{href:i,onClick:()=>t(!1),children:"Sign in"})]})]})};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=e=>{const t=Q1(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Y1=N.createContext({}),K1=()=>N.useContext(Y1),X1=N.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:l,iconNode:o,...s},a)=>{const{size:c=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:g="currentColor",className:y=""}=K1()??{},v=r??f?Number(n??h)*24/Number(t??c):n??h;return N.createElement("svg",{ref:a,...xo,width:t??c??xo.width,height:t??c??xo.height,stroke:e??g,strokeWidth:v,className:Cp("lucide",y,i),...!l&&!G1(s)&&{"aria-hidden":"true"},...s},[...o.map(([x,P])=>N.createElement(x,P)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=(e,t)=>{const n=N.forwardRef(({className:r,...i},l)=>N.createElement(X1,{ref:l,iconNode:t,className:Cp(`lucide-${V1(cc(e))}`,`lucide-${e}`,r),...i}));return n.displayName=cc(e),n};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],dc=xt("arrow-right",q1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],J1=xt("bot",Z1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ty=xt("circle-check",ey);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ry=xt("plus",ny);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],fc=xt("shield-check",iy);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],pc=xt("sparkles",ly);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],hc=xt("star",oy);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],ay=xt("workflow",sy);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],cy=xt("zap",uy),dy=w.main`
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
`,fy=w.section`
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
`,py=w.div`
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
`,hy=w.span`
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
`,my=w.h1`
  margin: 0;
  font-size: clamp(2.4rem, 6.8vw, 4.6rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
  max-width: 980px;
  font-weight: 600;
  animation: rise 0.55s ease both;
`,gy=w.span`
  background: linear-gradient(120deg, #1f3df0 0%, #5b3ce4 55%, #ec6f3a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,yy=w.p`
  margin: 1.3rem 0 0;
  max-width: 700px;
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  line-height: 1.6;
  color: var(--text-secondary);
  animation: rise 0.6s ease 0.04s both;
`,vy=w.div`
  margin-top: 1.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  animation: rise 0.6s ease 0.08s both;
`,Ep=w.a`
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
`,xy=w.a`
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
`,wy=w.div`
  margin-top: clamp(2.5rem, 6vw, 4rem);
  border-radius: 28px;
  border: 1px solid var(--line-strong);
  background: linear-gradient(160deg, #ffffff 0%, #f2eee2 100%);
  padding: clamp(0.85rem, 2.4vw, 1.4rem);
  box-shadow:
    0 30px 60px -28px rgba(20, 30, 70, 0.22),
    0 8px 18px -10px rgba(20, 30, 70, 0.12);
  animation: rise 0.7s ease 0.12s both;
`,ky=w.div`
  border-radius: 20px;
  background: #0a0d14;
  color: #d6dff5;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.35fr 1fr;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,Sy=w.div`
  padding: 1.1rem 1.2rem 1.3rem;
  display: grid;
  gap: 0.7rem;
  align-content: start;
  border-right: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 820px) {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`,Cy=w.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding-bottom: 0.7rem;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`,Ey=w.span`
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
`,Py=w.div`
  display: grid;
  gap: 0.1rem;
`,jy=w.strong`
  font-size: 0.88rem;
  color: #ffffff;
  font-weight: 600;
`,_y=w.span`
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
`,Ny=w.div`
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
`;const zy=w.div`
  padding: 1.1rem 1.2rem 1.3rem;
  display: grid;
  gap: 0.85rem;
  align-content: start;
`,$y=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-bottom: 0.7rem;
  margin-bottom: 0.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`,Ry=w.strong`
  font-size: 0.88rem;
  color: #ffffff;
  font-weight: 600;
`,Ty=w.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #7fe8c9;
  font-weight: 700;
`,Ly=w.div`
  display: grid;
  gap: 0.18rem;
  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`,Iy=w.strong`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.5rem, 3.6vw, 1.95rem);
  color: #ffffff;
  letter-spacing: -0.01em;
  line-height: 1.1;
`,Oy=w.span`
  font-size: 0.78rem;
  color: #8f9bbb;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`,Ay=w.section`
  padding: 1.5rem 0 3rem;
  border-top: 1px solid var(--line);
  margin-top: 2rem;
`,My=w.p`
  margin: 0 0 1rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
`,Fy=w.div`
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`,Dy=w.div`
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: marquee 28s linear infinite;
`,Uy=w.span`
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
`,Si=w.section`
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
`,mc=w.div`
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
`,By=w.div`
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
`,Wy=w.section`
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
`;const by=w.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`,Hy=w.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`,Vy=w.div`
  padding: 1.5rem;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 14px 28px -22px rgba(20, 30, 70, 0.15);
`,Qy=w.strong`
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4.6vw, 2.6rem);
  letter-spacing: -0.02em;
  color: var(--text-primary);
`,Gy=w.span`
  display: block;
  margin-top: 0.4rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`,Yy=w.section`
  padding: clamp(3rem, 7vw, 6rem) 0;
`,Ky=w.blockquote`
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
`,Xy=w.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.35rem, 3.4vw, 2rem);
  line-height: 1.32;
  color: #ffffff;
  letter-spacing: -0.012em;
`,qy=w.div`
  margin-top: 1.4rem;
  font-size: 0.92rem;
  color: #b9c4dd;
`,Zy=w.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`,Jy=w.div`
  margin-top: 1.6rem;
  display: inline-flex;
  padding: 0.25rem;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, 0.85);
  gap: 0.2rem;
`,gc=w.button`
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
`,ev=w.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  align-items: stretch;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,tv=w.article`
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
`,yc=w.span`
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
`,nv=w.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
`,rv=w.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
`,vc=w.strong`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.8rem, 3.6vw, 2.3rem);
  letter-spacing: -0.02em;
  color: var(--text-primary);
`,iv=w.span`
  color: var(--text-muted);
  font-size: 0.95rem;
`,lv=w.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.92rem;
  min-height: 42px;
`,ov=w.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  color: var(--text-primary);
  padding: 0.32rem 0.6rem;
  border-radius: 999px;
  background: rgba(31, 61, 240, 0.08);
  width: fit-content;
`,sv=w.a`
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
`,av=w.ul`
  margin: 0.3rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
`,uv=w.li`
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
`;const cv=w.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
  border-top: 1px solid var(--line);
`,dv=w.div`
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
`,fv=w.h2`
  margin: 0;
  font-size: clamp(1.8rem, 4.6vw, 2.8rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 720px;
`,pv=w.p`
  margin: 0;
  color: #c9d1e3;
  max-width: 620px;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
`,hv=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: center;
`,mv=w(Ep)`
  background: #ffffff;
  color: var(--text-primary);

  &:hover {
    background: #f1f1f1;
  }
`,gv=w.a`
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
`,yv=w.ol`
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
`,vv=w.li`
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
`,xv=w.span`
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
`,wv=w.div`
  display: grid;
  gap: 0.3rem;
`,kv=w.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
`,Sv=w.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.55;
`,Cv=w.div`
  margin-top: 2.2rem;
  display: grid;
  gap: 0.65rem;
  max-width: 880px;
`,Ev=w.details`
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
`,Pv=w.summary`
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
`,jv=w.div`
  padding: 0 1.25rem 1.1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.97rem;
`,zs="https://app.divvylore.com",_v=zs.replace(/\/$/,""),Po="/register",Nv="/login",zv=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:e%1===0?0:2}).format(e),wn=e=>{const t=Number(e);return Number.isFinite(t)?t:0},xc=["ENTERPRISE","SUPPORT TEAMS","FINTECH","SAAS","HEALTHCARE","MARKETPLACES","RETAIL","EDUCATION"],$v=[{value:"24/7",label:"Always-on coverage"},{value:"<2m",label:"Median first response"},{value:"99.9%",label:"Platform reliability target"}],Rv=[{value:"90%",label:"Faster resolutions on common tickets"},{value:"60%",label:"Reduction in repeat contacts"},{value:"10x",label:"Throughput vs. linear staffing"},{value:"Days",label:"From kickoff to first deployment"}],Tv=e=>(Array.isArray(e?.pricing?.plans)?e.pricing.plans:[]).map((n,r)=>{const i=Number(String(n.price||"").replace(/[^\d.]/g,"")),l=Number.isFinite(i)?i:0;return{id:n.planCode||`${n.name}-${r}`,name:n.name,description:n.description,code:n.planCode,monthlyPrice:l,yearlyPrice:l>0?Math.round(l*10):0,monthlyCredits:0,yearlyCredits:0,yearlyBonusCredits:0,features:(n.features||[]).map((o,s)=>({name:o,isIncluded:!0,displayOrder:s})),buttonText:n.ctaLabel,isPopular:!!n.highlighted,isActive:!0,isVisible:!0,displayOrder:r,isCustomPricing:String(n.price||"").toLowerCase().includes("custom")}}),wc=()=>{const e=pe,t=N.useMemo(()=>Tv(e),[e]),[n,r]=N.useState("monthly"),[i,l]=N.useState(t),[o,s]=N.useState(!0);N.useEffect(()=>{const y=new AbortController;return(async()=>{s(!0);try{const x=await fetch(`${_v}/account/tenant/plans`,{method:"GET",headers:{Accept:"application/json"},signal:y.signal});if(!x.ok)throw new Error(`Pricing API returned ${x.status}`);const P=await x.json();if(!Array.isArray(P))throw new Error("Pricing API response is not a plan list");const p=P.map(u=>({...u,monthlyPrice:wn(u.monthlyPrice),yearlyPrice:wn(u.yearlyPrice),monthlyCredits:wn(u.monthlyCredits),yearlyCredits:wn(u.yearlyCredits),yearlyBonusCredits:wn(u.yearlyBonusCredits??0),displayOrder:wn(u.displayOrder??999),features:Array.isArray(u.features)?u.features:[]})).sort((u,m)=>(u.displayOrder??999)-(m.displayOrder??999));p.length>0&&l(p)}catch(x){if(x.name==="AbortError")return}finally{s(!1)}})(),()=>y.abort()},[]);const a=N.useMemo(()=>i.filter(y=>y.name),[i]),c=n==="monthly"?"/month":"/year",h=typeof window<"u"?window.location.hostname:"divvylore.com",f=(y,v)=>{const x=new URLSearchParams({source:h,...v||{}}).toString();return`${zs}${y}?${x}`},g=[...xc,...xc];return d.jsxs(dy,{children:[d.jsxs(fy,{children:[d.jsxs(Ye,{children:[d.jsxs(py,{children:[d.jsx(hy,{children:"New"}),"Conversational AI for customer support"]}),d.jsxs(my,{children:["Support agents that resolve issues and"," ",d.jsx(gy,{children:"keep customers moving."})]}),d.jsx(yy,{children:e.hero?.description}),d.jsxs(vy,{children:[d.jsxs(Ep,{href:f(Po,{placement:"hero"}),target:"_blank",rel:"noreferrer",children:["Get started",d.jsx(dc,{size:16})]}),d.jsx(xy,{href:"#pricing",children:"View pricing"})]}),d.jsx(wy,{children:d.jsxs(ky,{children:[d.jsxs(Sy,{children:[d.jsxs(Cy,{children:[d.jsx(Ey,{children:"D"}),d.jsxs(Py,{children:[d.jsx(jy,{children:"Divvylore Agent"}),d.jsx(_y,{children:"Online · responds in < 2s"})]})]}),d.jsx(wo,{side:"in",children:"Hi, I can’t access my dashboard after the billing update."}),d.jsx(wo,{side:"out",children:"Got it. I’ve verified your account and re-issued access. You should be back in under a minute."}),d.jsx(wo,{side:"in",children:"Perfect — works now. Thanks!"}),d.jsxs(Ny,{"aria-hidden":!0,children:[d.jsx("span",{})," ",d.jsx("span",{})," ",d.jsx("span",{})]})]}),d.jsxs(zy,{children:[d.jsxs($y,{children:[d.jsx(Ry,{children:"Live metrics"}),d.jsx(Ty,{children:"Today"})]}),$v.map(y=>d.jsxs(Ly,{children:[d.jsx(Iy,{children:y.value}),d.jsx(Oy,{children:y.label})]},y.label))]})]})})]}),d.jsx(Ye,{children:d.jsxs(Ay,{children:[d.jsx(My,{children:"Built for customer-facing teams across"}),d.jsx(Fy,{children:d.jsx(Dy,{children:g.map((y,v)=>d.jsx(Uy,{children:y},`${y}-${v}`))})})]})})]}),d.jsx(Si,{id:"highlights",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(pc,{size:14})," Platform"]}),d.jsx(Kt,{children:e.highlights?.title}),d.jsx(Xt,{children:e.highlights?.subtitle}),d.jsx(mc,{children:(e.highlights?.cards||[]).map(y=>d.jsxs(ko,{children:[d.jsx(So,{children:d.jsx(hc,{size:18})}),d.jsx(Co,{children:y.title}),d.jsx(Eo,{children:y.description})]},y.title))})]})}),d.jsx(Wy,{id:"how-it-works",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(ay,{size:14})," How it works"]}),d.jsx(Kt,{children:e.howItWorks?.title}),d.jsx(Xt,{children:"Configure your workflows, connect business context, and let agents resolve common requests with smart escalation when needed."}),d.jsx(yv,{children:(e.howItWorks?.steps||[]).map((y,v)=>d.jsxs(vv,{children:[d.jsx(xv,{children:String(v+1).padStart(2,"0")}),d.jsxs(wv,{children:[d.jsx(kv,{children:y.title}),d.jsx(Sv,{children:y.description})]})]},y.title))})]})}),d.jsx(Si,{id:"features",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(J1,{size:14})," Capabilities"]}),d.jsx(Kt,{children:e.features?.title}),d.jsx(Xt,{children:"Everything you need to launch and scale production AI support, from configuration to analytics and escalation."}),d.jsx(By,{children:(e.features?.items||[]).map(y=>d.jsxs(ko,{children:[d.jsx(So,{children:d.jsx(cy,{size:18})}),d.jsx(Co,{children:y.title}),d.jsx(Eo,{children:y.description})]},y.title))})]})}),d.jsx(Si,{id:"security",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(fc,{size:14})," Security"]}),d.jsx(Kt,{children:e.security?.title}),d.jsx(Xt,{children:"Built with tenant isolation, secure transport, and response guardrails so customer-facing agents stay safe and predictable."}),d.jsx(mc,{children:(e.security?.items||[]).map(y=>d.jsxs(ko,{children:[d.jsx(So,{children:d.jsx(fc,{size:18})}),d.jsx(Co,{children:y.title}),d.jsx(Eo,{children:y.description})]},y.title))})]})}),d.jsx(by,{id:"stats",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(pc,{size:14})," Outcomes"]}),d.jsx(Kt,{children:"Results customers see in production"}),d.jsx(Xt,{children:"Modern AI support that ships in days, not quarters, and earns its place in your team."}),d.jsx(Hy,{style:{marginTop:"2.4rem"},children:Rv.map(y=>d.jsxs(Vy,{children:[d.jsx(Qy,{children:y.value}),d.jsx(Gy,{children:y.label})]},y.label))})]})}),d.jsx(Yy,{id:"story",children:d.jsx(Ye,{children:d.jsxs(Ky,{children:[d.jsx(Xy,{children:"“Divvylore lets us launch production-grade support agents quickly, keep humans in the loop, and resolve customer issues without losing brand voice.”"}),d.jsx(qy,{children:"— Customer success leader, SaaS support team"})]})})}),d.jsx(Zy,{id:"pricing",children:d.jsxs(Ye,{children:[d.jsxs(Yt,{children:[d.jsx(hc,{size:14})," Pricing"]}),d.jsx(Kt,{children:e.pricing?.title}),d.jsx(Xt,{children:e.pricing?.subtitle}),d.jsxs(Jy,{role:"tablist","aria-label":"Billing cycle",children:[d.jsx(gc,{type:"button",className:n==="monthly"?"active":"",onClick:()=>r("monthly"),children:"Monthly"}),d.jsx(gc,{type:"button",className:n==="yearly"?"active":"",onClick:()=>r("yearly"),children:"Yearly"})]}),d.jsx(ev,{children:a.map(y=>{const v=y.isActive===!1||y.isVisible===!1,x=n==="monthly"?y.monthlyPrice:y.yearlyPrice,P=n==="monthly"?y.monthlyCredits:y.yearlyCredits,p=n==="yearly"&&y.yearlyBonusCredits||0,u=(y.features||[]).filter(k=>k.isIncluded).sort((k,E)=>(k.displayOrder??999)-(E.displayOrder??999)),m=new URLSearchParams({source:h,placement:"pricing",plan:y.code||y.id,billing:n}).toString();return d.jsxs(tv,{featured:!!y.isPopular,muted:v,children:[y.isPopular&&!v&&d.jsx(yc,{children:"Most popular"}),v&&d.jsx(yc,{children:"Unavailable"}),d.jsx(nv,{children:y.name}),d.jsx(rv,{children:y.isCustomPricing?d.jsx(vc,{children:"Custom"}):d.jsxs(d.Fragment,{children:[d.jsx(vc,{children:zv(x)}),d.jsx(iv,{children:c})]})}),d.jsx(lv,{children:y.description}),d.jsxs(ov,{children:[P.toLocaleString()," credits / ",n==="monthly"?"mo":"yr",p>0?` · +${p.toLocaleString()} bonus`:""]}),d.jsx(sv,{href:v?void 0:`${zs}${Po}?${m}`,muted:v,"aria-disabled":v,onClick:k=>{v&&k.preventDefault()},target:"_blank",rel:"noreferrer",children:v?"Not available":y.buttonText||"Get started"}),d.jsx(av,{children:u.map(k=>d.jsxs(uv,{children:[d.jsx(ty,{size:16,color:"#1f3df0"}),d.jsx("span",{children:k.name})]},`${y.name}-${k.name}`))})]},y.id||y.name)})})]})}),d.jsx(Si,{id:"faq",children:d.jsxs(Ye,{children:[d.jsx(Yt,{children:"FAQ"}),d.jsx(Kt,{children:e.faq?.title}),d.jsx(Xt,{children:"Answers to common questions before you launch your first agent."}),d.jsx(Cv,{children:(e.faq?.items||[]).map((y,v)=>d.jsxs(Ev,{...v===0?{open:!0}:{},children:[d.jsxs(Pv,{children:[d.jsx("span",{children:y.question}),d.jsx(ry,{size:20,"aria-hidden":!0})]}),d.jsx(jv,{children:y.answer})]},y.question))})]})}),d.jsx(cv,{id:"cta",children:d.jsx(Ye,{children:d.jsxs(dv,{children:[d.jsx(fv,{children:"Launch your AI support agent in days."}),d.jsx(pv,{children:"Move customer conversations from backlog to resolution with a production-ready agent platform."}),d.jsxs(hv,{children:[d.jsxs(mv,{href:f(Po,{placement:"bottom-cta"}),target:"_blank",rel:"noreferrer",children:["Get started",d.jsx(dc,{size:16})]}),d.jsx(gv,{href:f(Nv,{placement:"bottom-cta"}),target:"_blank",rel:"noreferrer",children:"Sign in"})]})]})})})]})},Lv=w1`
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
`,jo=({to:e})=>(N.useEffect(()=>{window.location.replace(e)},[e]),null),Iv=()=>d.jsxs(N.Suspense,{fallback:null,children:[d.jsx(Lv,{}),d.jsx(H1,{}),d.jsxs(Gg,{children:[d.jsx(Jt,{path:"/",element:d.jsx(wc,{})}),d.jsx(Jt,{path:"/home",element:d.jsx(wc,{})}),d.jsx(Jt,{path:"/privacy-policy",element:d.jsx(jo,{to:pe.legalUrls.privacyPolicy})}),d.jsx(Jt,{path:"/terms-and-conditions",element:d.jsx(jo,{to:pe.legalUrls.termsAndConditions})}),d.jsx(Jt,{path:"/refund-policy",element:d.jsx(jo,{to:pe.legalUrls.refundPolicy})}),d.jsx(Jt,{path:"*",element:d.jsx(Vg,{to:"/",replace:!0})})]}),d.jsx(R1,{})]}),Ov=()=>d.jsx(Xg,{children:d.jsx(Iv,{})}),Pp=document.getElementById("root");if(!Pp)throw new Error("Root element not found");Gf(Pp).render(d.jsx(Ov,{}));
