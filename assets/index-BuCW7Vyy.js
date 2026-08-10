function Ep(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Pp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},pl={},xc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kr=Symbol.for("react.element"),jp=Symbol.for("react.portal"),_p=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),zp=Symbol.for("react.profiler"),$p=Symbol.for("react.provider"),Rp=Symbol.for("react.context"),Tp=Symbol.for("react.forward_ref"),Lp=Symbol.for("react.suspense"),Ip=Symbol.for("react.memo"),Op=Symbol.for("react.lazy"),Oa=Symbol.iterator;function Ap(e){return e===null||typeof e!="object"?null:(e=Oa&&e[Oa]||e["@@iterator"],typeof e=="function"?e:null)}var kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sc=Object.assign,Cc={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||kc}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ec(){}Ec.prototype=Xn.prototype;function Rs(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||kc}var Ts=Rs.prototype=new Ec;Ts.constructor=Rs;Sc(Ts,Xn.prototype);Ts.isPureReactComponent=!0;var Aa=Array.isArray,Pc=Object.prototype.hasOwnProperty,Ls={current:null},jc={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Pc.call(t,r)&&!jc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Kr,type:e,key:l,ref:o,props:i,_owner:Ls.current}}function Mp(e,t){return{$$typeof:Kr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Is(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kr}function Fp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ma=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fp(""+e.key):t.toString(36)}function Ci(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kr:case jp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Fl(o,0):r,Aa(i)?(n="",e!=null&&(n=e.replace(Ma,"$&/")+"/"),Ci(i,t,n,"",function(u){return u})):i!=null&&(Is(i)&&(i=Mp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ma,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Aa(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Fl(l,s);o+=Ci(l,t,n,a,i)}else if(a=Ap(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Fl(l,s++),o+=Ci(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function li(e,t,n){if(e==null)return e;var r=[],i=0;return Ci(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Dp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Ei={transition:null},Up={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:Ls};function Nc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:li,forEach:function(e,t,n){li(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return li(e,function(){t++}),t},toArray:function(e){return li(e,function(t){return t})||[]},only:function(e){if(!Is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Xn;O.Fragment=_p;O.Profiler=zp;O.PureComponent=Rs;O.StrictMode=Np;O.Suspense=Lp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Up;O.act=Nc;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sc({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Ls.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Pc.call(t,a)&&!jc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Kr,type:e.type,key:i,ref:l,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:Rp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$p,_context:e},e.Consumer=e};O.createElement=_c;O.createFactory=function(e){var t=_c.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Tp,render:e}};O.isValidElement=Is;O.lazy=function(e){return{$$typeof:Op,_payload:{_status:-1,_result:e},_init:Dp}};O.memo=function(e,t){return{$$typeof:Ip,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=t}};O.unstable_act=Nc;O.useCallback=function(e,t){return Se.current.useCallback(e,t)};O.useContext=function(e){return Se.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};O.useEffect=function(e,t){return Se.current.useEffect(e,t)};O.useId=function(){return Se.current.useId()};O.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Se.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};O.useRef=function(e){return Se.current.useRef(e)};O.useState=function(e){return Se.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Se.current.useTransition()};O.version="18.3.1";xc.exports=O;var N=xc.exports;const Re=Pp(N),Bp=Ep({__proto__:null,default:Re},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp=N,bp=Symbol.for("react.element"),Vp=Symbol.for("react.fragment"),Hp=Object.prototype.hasOwnProperty,Qp=Wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gp={key:!0,ref:!0,__self:!0,__source:!0};function zc(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Hp.call(t,r)&&!Gp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bp,type:e,key:l,ref:o,props:i,_owner:Qp.current}}pl.Fragment=Vp;pl.jsx=zc;pl.jsxs=zc;wc.exports=pl;var f=wc.exports,$c={exports:{}},Oe={},Rc={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var T=z.length;z.push(R);e:for(;0<T;){var B=T-1>>>1,M=z[B];if(0<i(M,R))z[B]=R,z[T]=M,T=B;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],T=z.pop();if(T!==R){z[0]=T;e:for(var B=0,M=z.length,le=M>>>1;B<le;){var Z=2*(B+1)-1,te=z[Z],ze=Z+1,Me=z[ze];if(0>i(te,T))ze<M&&0>i(Me,te)?(z[B]=Me,z[ze]=T,B=ze):(z[B]=te,z[Z]=T,B=Z);else if(ze<M&&0>i(Me,T))z[B]=Me,z[ze]=T,B=ze;else break e}}return R}function i(z,R){var T=z.sortIndex-R.sortIndex;return T!==0?T:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],u=[],h=1,d=null,g=3,y=!1,v=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=z)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function k(z){if(w=!1,m(z),!v)if(n(a)!==null)v=!0,xt(E);else{var R=n(u);R!==null&&Gt(k,R.startTime-z)}}function E(z,R){v=!1,w&&(w=!1,p(j),j=-1),y=!0;var T=g;try{for(m(R),d=n(a);d!==null&&(!(d.expirationTime>R)||z&&!Q());){var B=d.callback;if(typeof B=="function"){d.callback=null,g=d.priorityLevel;var M=B(d.expirationTime<=R);R=e.unstable_now(),typeof M=="function"?d.callback=M:d===n(a)&&r(a),m(R)}else r(a);d=n(a)}if(d!==null)var le=!0;else{var Z=n(u);Z!==null&&Gt(k,Z.startTime-R),le=!1}return le}finally{d=null,g=T,y=!1}}var _=!1,S=null,j=-1,D=5,L=-1;function Q(){return!(e.unstable_now()-L<D)}function He(){if(S!==null){var z=e.unstable_now();L=z;var R=!0;try{R=S(!0,z)}finally{R?q():(_=!1,S=null)}}else _=!1}var q;if(typeof c=="function")q=function(){c(He)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Qt=Qe.port2;Qe.port1.onmessage=He,q=function(){Qt.postMessage(null)}}else q=function(){P(He,0)};function xt(z){S=z,_||(_=!0,q())}function Gt(z,R){j=P(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,xt(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var T=g;g=R;try{return z()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=g;g=z;try{return R()}finally{g=T}},e.unstable_scheduleCallback=function(z,R,T){var B=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?B+T:B):T=B,z){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=T+M,z={id:h++,callback:R,priorityLevel:z,startTime:T,expirationTime:M,sortIndex:-1},T>B?(z.sortIndex=T,t(u,z),n(a)===null&&z===n(u)&&(w?(p(j),j=-1):w=!0,Gt(k,T-B))):(z.sortIndex=M,t(a,z),v||y||(v=!0,xt(E))),z},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(z){var R=g;return function(){var T=g;g=R;try{return z.apply(this,arguments)}finally{g=T}}}})(Tc);Rc.exports=Tc;var Yp=Rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=N,Ie=Yp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lc=new Set,_r={};function dn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(_r[e]=t,e=0;e<t.length;e++)Lc.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=Object.prototype.hasOwnProperty,Xp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fa={},Da={};function qp(e){return No.call(Da,e)?!0:No.call(Fa,e)?!1:Xp.test(e)?Da[e]=!0:(Fa[e]=!0,!1)}function Zp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jp(e,t,n,r){if(t===null||typeof t>"u"||Zp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Os=/[\-:]([a-z])/g;function As(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Os,As);me[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Os,As);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Os,As);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ms(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jp(t,n,i,r)&&(n=null),r||i===null?qp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Fs=Symbol.for("react.strict_mode"),zo=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Ds=Symbol.for("react.forward_ref"),$o=Symbol.for("react.suspense"),Ro=Symbol.for("react.suspense_list"),Us=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Ac=Symbol.for("react.offscreen"),Ua=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Ua&&e[Ua]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Dl;function cr(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||""}return`
`+Dl+e}var Ul=!1;function Bl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function eh(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Bl(e.type,!1),e;case 11:return e=Bl(e.type.render,!1),e;case 1:return e=Bl(e.type,!0),e;default:return""}}function To(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case zo:return"Profiler";case Fs:return"StrictMode";case $o:return"Suspense";case Ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case Ic:return(e._context.displayName||"Context")+".Provider";case Ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Us:return t=e.displayName||null,t!==null?t:To(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return To(e(t))}catch{}}return null}function th(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return To(t);case 8:return t===Fs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nh(e){var t=Mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=nh(e))}function Fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lo(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dc(e,t){t=t.checked,t!=null&&Ms(e,"checked",t,!1)}function Io(e,t){Dc(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oo(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oo(e,t,n){(t!=="number"||Bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ba(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(fr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function Uc(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Va(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,Wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rh=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){rh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function bc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function Vc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ih=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,t){if(t){if(ih[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Do(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function Bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bo=null,In=null,On=null;function Ha(e){if(e=Zr(e)){if(typeof Bo!="function")throw Error(C(280));var t=e.stateNode;t&&(t=vl(t),Bo(e.stateNode,e.type,t))}}function Hc(e){In?On?On.push(e):On=[e]:In=e}function Qc(){if(In){var e=In,t=On;if(On=In=null,Ha(e),t)for(e=0;e<t.length;e++)Ha(t[e])}}function Gc(e,t){return e(t)}function Yc(){}var Wl=!1;function Kc(e,t,n){if(Wl)return e(t,n);Wl=!0;try{return Gc(e,t,n)}finally{Wl=!1,(In!==null||On!==null)&&(Yc(),Qc())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Wo=!1;if(ht)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Wo=!1}function lh(e,t,n,r,i,l,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var yr=!1,Wi=null,bi=!1,bo=null,oh={onError:function(e){yr=!0,Wi=e}};function sh(e,t,n,r,i,l,o,s,a){yr=!1,Wi=null,lh.apply(oh,arguments)}function ah(e,t,n,r,i,l,o,s,a){if(sh.apply(this,arguments),yr){if(yr){var u=Wi;yr=!1,Wi=null}else throw Error(C(198));bi||(bi=!0,bo=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qa(e){if(pn(e)!==e)throw Error(C(188))}function uh(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Qa(i),e;if(l===r)return Qa(i),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function qc(e){return e=uh(e),e!==null?Zc(e):null}function Zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zc(e);if(t!==null)return t;e=e.sibling}return null}var Jc=Ie.unstable_scheduleCallback,Ga=Ie.unstable_cancelCallback,ch=Ie.unstable_shouldYield,fh=Ie.unstable_requestPaint,ee=Ie.unstable_now,dh=Ie.unstable_getCurrentPriorityLevel,Ws=Ie.unstable_ImmediatePriority,ef=Ie.unstable_UserBlockingPriority,Vi=Ie.unstable_NormalPriority,ph=Ie.unstable_LowPriority,tf=Ie.unstable_IdlePriority,hl=null,lt=null;function hh(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:yh,mh=Math.log,gh=Math.LN2;function yh(e){return e>>>=0,e===0?32:31-(mh(e)/gh|0)|0}var ui=64,ci=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=dr(s):(l&=o,l!==0&&(r=dr(l)))}else o=n&~i,o!==0?r=dr(o):l!==0&&(r=dr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function vh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ze(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=vh(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function Vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nf(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function xh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function rf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lf,Vs,of,sf,af,Ho=!1,fi=[],Tt=null,Lt=null,It=null,$r=new Map,Rr=new Map,jt=[],kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ya(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function rr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Zr(t),t!==null&&Vs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Sh(e,t,n,r,i){switch(t){case"focusin":return Tt=rr(Tt,e,t,n,r,i),!0;case"dragenter":return Lt=rr(Lt,e,t,n,r,i),!0;case"mouseover":return It=rr(It,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return $r.set(l,rr($r.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Rr.set(l,rr(Rr.get(l)||null,e,t,n,r,i)),!0}return!1}function uf(e){var t=Zt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Xc(n),t!==null){e.blockedOn=t,af(e.priority,function(){of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Uo=r,n.target.dispatchEvent(r),Uo=null}else return t=Zr(n),t!==null&&Vs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ka(e,t,n){Pi(e)&&n.delete(t)}function Ch(){Ho=!1,Tt!==null&&Pi(Tt)&&(Tt=null),Lt!==null&&Pi(Lt)&&(Lt=null),It!==null&&Pi(It)&&(It=null),$r.forEach(Ka),Rr.forEach(Ka)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ho||(Ho=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Ch)))}function Tr(e){function t(i){return ir(i,e)}if(0<fi.length){ir(fi[0],e);for(var n=1;n<fi.length;n++){var r=fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&ir(Tt,e),Lt!==null&&ir(Lt,e),It!==null&&ir(It,e),$r.forEach(t),Rr.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)uf(n),n.blockedOn===null&&jt.shift()}var An=vt.ReactCurrentBatchConfig,Qi=!0;function Eh(e,t,n,r){var i=U,l=An.transition;An.transition=null;try{U=1,Hs(e,t,n,r)}finally{U=i,An.transition=l}}function Ph(e,t,n,r){var i=U,l=An.transition;An.transition=null;try{U=4,Hs(e,t,n,r)}finally{U=i,An.transition=l}}function Hs(e,t,n,r){if(Qi){var i=Qo(e,t,n,r);if(i===null)Jl(e,t,r,Gi,n),Ya(e,r);else if(Sh(i,e,t,n,r))r.stopPropagation();else if(Ya(e,r),t&4&&-1<kh.indexOf(e)){for(;i!==null;){var l=Zr(i);if(l!==null&&lf(l),l=Qo(e,t,n,r),l===null&&Jl(e,t,r,Gi,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Jl(e,t,r,null,n)}}var Gi=null;function Qo(e,t,n,r){if(Gi=null,e=Bs(r),e=Zt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function cf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dh()){case Ws:return 1;case ef:return 4;case Vi:case ph:return 16;case tf:return 536870912;default:return 16}default:return 16}}var Nt=null,Qs=null,ji=null;function ff(){if(ji)return ji;var e,t=Qs,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return ji=i.slice(e,1<r?1-r:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function Xa(){return!1}function Ae(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?di:Xa,this.isPropagationStopped=Xa,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=Ae(qn),qr=X({},qn,{view:0,detail:0}),jh=Ae(qr),Vl,Hl,lr,ml=X({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(Vl=e.screenX-lr.screenX,Hl=e.screenY-lr.screenY):Hl=Vl=0,lr=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),qa=Ae(ml),_h=X({},ml,{dataTransfer:0}),Nh=Ae(_h),zh=X({},qr,{relatedTarget:0}),Ql=Ae(zh),$h=X({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rh=Ae($h),Th=X({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lh=Ae(Th),Ih=X({},qn,{data:0}),Za=Ae(Ih),Oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ah={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mh[e])?!!t[e]:!1}function Ys(){return Fh}var Dh=X({},qr,{key:function(e){if(e.key){var t=Oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ah[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ys,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uh=Ae(Dh),Bh=X({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ja=Ae(Bh),Wh=X({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ys}),bh=Ae(Wh),Vh=X({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hh=Ae(Vh),Qh=X({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gh=Ae(Qh),Yh=[9,13,27,32],Ks=ht&&"CompositionEvent"in window,vr=null;ht&&"documentMode"in document&&(vr=document.documentMode);var Kh=ht&&"TextEvent"in window&&!vr,df=ht&&(!Ks||vr&&8<vr&&11>=vr),eu=" ",tu=!1;function pf(e,t){switch(e){case"keyup":return Yh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Xh(e,t){switch(e){case"compositionend":return hf(t);case"keypress":return t.which!==32?null:(tu=!0,eu);case"textInput":return e=t.data,e===eu&&tu?null:e;default:return null}}function qh(e,t){if(Cn)return e==="compositionend"||!Ks&&pf(e,t)?(e=ff(),ji=Qs=Nt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return df&&t.locale!=="ko"?null:t.data;default:return null}}var Zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zh[e.type]:t==="textarea"}function mf(e,t,n,r){Hc(r),t=Yi(t,"onChange"),0<t.length&&(n=new Gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Lr=null;function Jh(e){jf(e,0)}function gl(e){var t=jn(e);if(Fc(t))return e}function em(e,t){if(e==="change")return t}var gf=!1;if(ht){var Gl;if(ht){var Yl="oninput"in document;if(!Yl){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),Yl=typeof ru.oninput=="function"}Gl=Yl}else Gl=!1;gf=Gl&&(!document.documentMode||9<document.documentMode)}function iu(){wr&&(wr.detachEvent("onpropertychange",yf),Lr=wr=null)}function yf(e){if(e.propertyName==="value"&&gl(Lr)){var t=[];mf(t,Lr,e,Bs(e)),Kc(Jh,t)}}function tm(e,t,n){e==="focusin"?(iu(),wr=t,Lr=n,wr.attachEvent("onpropertychange",yf)):e==="focusout"&&iu()}function nm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Lr)}function rm(e,t){if(e==="click")return gl(t)}function im(e,t){if(e==="input"||e==="change")return gl(t)}function lm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:lm;function Ir(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!No.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function vf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wf(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function om(e){var t=wf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vf(n.ownerDocument.documentElement,n)){if(r!==null&&Xs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ou(n,l);var o=ou(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sm=ht&&"documentMode"in document&&11>=document.documentMode,En=null,Go=null,xr=null,Yo=!1;function su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yo||En==null||En!==Bi(r)||(r=En,"selectionStart"in r&&Xs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Ir(xr,r)||(xr=r,r=Yi(Go,"onSelect"),0<r.length&&(t=new Gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},Kl={},xf={};ht&&(xf=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function yl(e){if(Kl[e])return Kl[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xf)return Kl[e]=t[n];return e}var kf=yl("animationend"),Sf=yl("animationiteration"),Cf=yl("animationstart"),Ef=yl("transitionend"),Pf=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){Pf.set(e,t),dn(t,[e])}for(var Xl=0;Xl<au.length;Xl++){var ql=au[Xl],am=ql.toLowerCase(),um=ql[0].toUpperCase()+ql.slice(1);bt(am,"on"+um)}bt(kf,"onAnimationEnd");bt(Sf,"onAnimationIteration");bt(Cf,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(Ef,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cm=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function uu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ah(r,t,void 0,e),e.currentTarget=null}function jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;uu(i,s,u),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;uu(i,s,u),l=a}}}if(bi)throw e=bo,bi=!1,bo=null,e}function b(e,t){var n=t[Jo];n===void 0&&(n=t[Jo]=new Set);var r=e+"__bubble";n.has(r)||(_f(t,e,2,!1),n.add(r))}function Zl(e,t,n){var r=0;t&&(r|=4),_f(n,e,r,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[hi]){e[hi]=!0,Lc.forEach(function(n){n!=="selectionchange"&&(cm.has(n)||Zl(n,!1,e),Zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,Zl("selectionchange",!1,t))}}function _f(e,t,n,r){switch(cf(t)){case 1:var i=Eh;break;case 4:i=Ph;break;default:i=Hs}n=i.bind(null,t,n,e),i=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Zt(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Kc(function(){var u=l,h=Bs(n),d=[];e:{var g=Pf.get(e);if(g!==void 0){var y=Gs,v=e;switch(e){case"keypress":if(_i(n)===0)break e;case"keydown":case"keyup":y=Uh;break;case"focusin":v="focus",y=Ql;break;case"focusout":v="blur",y=Ql;break;case"beforeblur":case"afterblur":y=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=bh;break;case kf:case Sf:case Cf:y=Rh;break;case Ef:y=Hh;break;case"scroll":y=jh;break;case"wheel":y=Gh;break;case"copy":case"cut":case"paste":y=Lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ja}var w=(t&4)!==0,P=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var c=u,m;c!==null;){m=c;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=zr(c,p),k!=null&&w.push(Ar(c,k,m)))),P)break;c=c.return}0<w.length&&(g=new y(g,v,null,n,h),d.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Uo&&(v=n.relatedTarget||n.fromElement)&&(Zt(v)||v[mt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Zt(v):null,v!==null&&(P=pn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=qa,k="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ja,k="onPointerLeave",p="onPointerEnter",c="pointer"),P=y==null?g:jn(y),m=v==null?g:jn(v),g=new w(k,c+"leave",y,n,h),g.target=P,g.relatedTarget=m,k=null,Zt(h)===u&&(w=new w(p,c+"enter",v,n,h),w.target=m,w.relatedTarget=P,k=w),P=k,y&&v)t:{for(w=y,p=v,c=0,m=w;m;m=mn(m))c++;for(m=0,k=p;k;k=mn(k))m++;for(;0<c-m;)w=mn(w),c--;for(;0<m-c;)p=mn(p),m--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break t;w=mn(w),p=mn(p)}w=null}else w=null;y!==null&&cu(d,g,y,w,!1),v!==null&&P!==null&&cu(d,P,v,w,!0)}}e:{if(g=u?jn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var E=em;else if(nu(g))if(gf)E=im;else{E=nm;var _=tm}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=rm);if(E&&(E=E(e,u))){mf(d,E,n,h);break e}_&&_(e,g,u),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Oo(g,"number",g.value)}switch(_=u?jn(u):window,e){case"focusin":(nu(_)||_.contentEditable==="true")&&(En=_,Go=u,xr=null);break;case"focusout":xr=Go=En=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,su(d,n,h);break;case"selectionchange":if(sm)break;case"keydown":case"keyup":su(d,n,h)}var S;if(Ks)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Cn?pf(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(df&&n.locale!=="ko"&&(Cn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Cn&&(S=ff()):(Nt=h,Qs="value"in Nt?Nt.value:Nt.textContent,Cn=!0)),_=Yi(u,j),0<_.length&&(j=new Za(j,e,null,n,h),d.push({event:j,listeners:_}),S?j.data=S:(S=hf(n),S!==null&&(j.data=S)))),(S=Kh?Xh(e,n):qh(e,n))&&(u=Yi(u,"onBeforeInput"),0<u.length&&(h=new Za("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=S))}jf(d,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=zr(e,n),l!=null&&r.unshift(Ar(e,l,i)),l=zr(e,t),l!=null&&r.push(Ar(e,l,i))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cu(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=zr(n,l),a!=null&&o.unshift(Ar(n,a,s))):i||(a=zr(n,l),a!=null&&o.push(Ar(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var fm=/\r\n?/g,dm=/\u0000|\uFFFD/g;function fu(e){return(typeof e=="string"?e:""+e).replace(fm,`
`).replace(dm,"")}function mi(e,t,n){if(t=fu(t),fu(e)!==t&&n)throw Error(C(425))}function Ki(){}var Ko=null,Xo=null;function qo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=typeof setTimeout=="function"?setTimeout:void 0,pm=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,hm=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(mm)}:Zo;function mm(e){setTimeout(function(){throw e})}function eo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Tr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),it="__reactFiber$"+Zn,Mr="__reactProps$"+Zn,mt="__reactContainer$"+Zn,Jo="__reactEvents$"+Zn,gm="__reactListeners$"+Zn,ym="__reactHandles$"+Zn;function Zt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pu(e);e!==null;){if(n=e[it])return n;e=pu(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[it]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function vl(e){return e[Mr]||null}var es=[],_n=-1;function Vt(e){return{current:e}}function H(e){0>_n||(e.current=es[_n],es[_n]=null,_n--)}function W(e,t){_n++,es[_n]=e.current,e.current=t}var Wt={},we=Vt(Wt),je=Vt(!1),on=Wt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function Xi(){H(je),H(we)}function hu(e,t,n){if(we.current!==Wt)throw Error(C(168));W(we,t),W(je,n)}function Nf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,th(e)||"Unknown",i));return X({},n,r)}function qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,on=we.current,W(we,e),W(je,je.current),!0}function mu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Nf(e,t,on),r.__reactInternalMemoizedMergedChildContext=e,H(je),H(we),W(we,e)):H(je),W(je,n)}var ct=null,wl=!1,to=!1;function zf(e){ct===null?ct=[e]:ct.push(e)}function vm(e){wl=!0,zf(e)}function Ht(){if(!to&&ct!==null){to=!0;var e=0,t=U;try{var n=ct;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,wl=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),Jc(Ws,Ht),i}finally{U=t,to=!1}}return null}var Nn=[],zn=0,Zi=null,Ji=0,Fe=[],De=0,sn=null,ft=1,dt="";function Yt(e,t){Nn[zn++]=Ji,Nn[zn++]=Zi,Zi=e,Ji=t}function $f(e,t,n){Fe[De++]=ft,Fe[De++]=dt,Fe[De++]=sn,sn=e;var r=ft;e=dt;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var l=32-Ze(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ft=1<<32-Ze(t)+i|n<<i|r,dt=l+e}else ft=1<<l|n<<i|r,dt=e}function qs(e){e.return!==null&&(Yt(e,1),$f(e,1,0))}function Zs(e){for(;e===Zi;)Zi=Nn[--zn],Nn[zn]=null,Ji=Nn[--zn],Nn[zn]=null;for(;e===sn;)sn=Fe[--De],Fe[De]=null,dt=Fe[--De],Fe[De]=null,ft=Fe[--De],Fe[De]=null}var Le=null,Te=null,G=!1,qe=null;function Rf(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Te=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Te=null,!0):!1;default:return!1}}function ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ns(e){if(G){var t=Te;if(t){var n=t;if(!gu(e,t)){if(ts(e))throw Error(C(418));t=Ot(n.nextSibling);var r=Le;t&&gu(e,t)?Rf(r,n):(e.flags=e.flags&-4097|2,G=!1,Le=e)}}else{if(ts(e))throw Error(C(418));e.flags=e.flags&-4097|2,G=!1,Le=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function gi(e){if(e!==Le)return!1;if(!G)return yu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qo(e.type,e.memoizedProps)),t&&(t=Te)){if(ts(e))throw Tf(),Error(C(418));for(;t;)Rf(e,t),t=Ot(t.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Le?Ot(e.stateNode.nextSibling):null;return!0}function Tf(){for(var e=Te;e;)e=Ot(e.nextSibling)}function Wn(){Te=Le=null,G=!1}function Js(e){qe===null?qe=[e]:qe.push(e)}var wm=vt.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function Lf(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=Dt(p,c),p.index=0,p.sibling=null,p}function l(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,k){return c===null||c.tag!==6?(c=ao(m,p.mode,k),c.return=p,c):(c=i(c,m),c.return=p,c)}function a(p,c,m,k){var E=m.type;return E===Sn?h(p,c,m.props.children,k,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&vu(E)===c.type)?(k=i(c,m.props),k.ref=or(p,c,m),k.return=p,k):(k=Ii(m.type,m.key,m.props,null,p.mode,k),k.ref=or(p,c,m),k.return=p,k)}function u(p,c,m,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=uo(m,p.mode,k),c.return=p,c):(c=i(c,m.children||[]),c.return=p,c)}function h(p,c,m,k,E){return c===null||c.tag!==7?(c=nn(m,p.mode,k,E),c.return=p,c):(c=i(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ao(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case oi:return m=Ii(c.type,c.key,c.props,null,p.mode,m),m.ref=or(p,null,c),m.return=p,m;case kn:return c=uo(c,p.mode,m),c.return=p,c;case Et:var k=c._init;return d(p,k(c._payload),m)}if(fr(c)||tr(c))return c=nn(c,p.mode,m,null),c.return=p,c;yi(p,c)}return null}function g(p,c,m,k){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,c,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:return m.key===E?a(p,c,m,k):null;case kn:return m.key===E?u(p,c,m,k):null;case Et:return E=m._init,g(p,c,E(m._payload),k)}if(fr(m)||tr(m))return E!==null?null:h(p,c,m,k,null);yi(p,m)}return null}function y(p,c,m,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,s(c,p,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case oi:return p=p.get(k.key===null?m:k.key)||null,a(c,p,k,E);case kn:return p=p.get(k.key===null?m:k.key)||null,u(c,p,k,E);case Et:var _=k._init;return y(p,c,m,_(k._payload),E)}if(fr(k)||tr(k))return p=p.get(m)||null,h(c,p,k,E,null);yi(c,k)}return null}function v(p,c,m,k){for(var E=null,_=null,S=c,j=c=0,D=null;S!==null&&j<m.length;j++){S.index>j?(D=S,S=null):D=S.sibling;var L=g(p,S,m[j],k);if(L===null){S===null&&(S=D);break}e&&S&&L.alternate===null&&t(p,S),c=l(L,c,j),_===null?E=L:_.sibling=L,_=L,S=D}if(j===m.length)return n(p,S),G&&Yt(p,j),E;if(S===null){for(;j<m.length;j++)S=d(p,m[j],k),S!==null&&(c=l(S,c,j),_===null?E=S:_.sibling=S,_=S);return G&&Yt(p,j),E}for(S=r(p,S);j<m.length;j++)D=y(S,p,j,m[j],k),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?j:D.key),c=l(D,c,j),_===null?E=D:_.sibling=D,_=D);return e&&S.forEach(function(Q){return t(p,Q)}),G&&Yt(p,j),E}function w(p,c,m,k){var E=tr(m);if(typeof E!="function")throw Error(C(150));if(m=E.call(m),m==null)throw Error(C(151));for(var _=E=null,S=c,j=c=0,D=null,L=m.next();S!==null&&!L.done;j++,L=m.next()){S.index>j?(D=S,S=null):D=S.sibling;var Q=g(p,S,L.value,k);if(Q===null){S===null&&(S=D);break}e&&S&&Q.alternate===null&&t(p,S),c=l(Q,c,j),_===null?E=Q:_.sibling=Q,_=Q,S=D}if(L.done)return n(p,S),G&&Yt(p,j),E;if(S===null){for(;!L.done;j++,L=m.next())L=d(p,L.value,k),L!==null&&(c=l(L,c,j),_===null?E=L:_.sibling=L,_=L);return G&&Yt(p,j),E}for(S=r(p,S);!L.done;j++,L=m.next())L=y(S,p,j,L.value,k),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?j:L.key),c=l(L,c,j),_===null?E=L:_.sibling=L,_=L);return e&&S.forEach(function(He){return t(p,He)}),G&&Yt(p,j),E}function P(p,c,m,k){if(typeof m=="object"&&m!==null&&m.type===Sn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:e:{for(var E=m.key,_=c;_!==null;){if(_.key===E){if(E=m.type,E===Sn){if(_.tag===7){n(p,_.sibling),c=i(_,m.props.children),c.return=p,p=c;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&vu(E)===_.type){n(p,_.sibling),c=i(_,m.props),c.ref=or(p,_,m),c.return=p,p=c;break e}n(p,_);break}else t(p,_);_=_.sibling}m.type===Sn?(c=nn(m.props.children,p.mode,k,m.key),c.return=p,p=c):(k=Ii(m.type,m.key,m.props,null,p.mode,k),k.ref=or(p,c,m),k.return=p,p=k)}return o(p);case kn:e:{for(_=m.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=i(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=uo(m,p.mode,k),c.return=p,p=c}return o(p);case Et:return _=m._init,P(p,c,_(m._payload),k)}if(fr(m))return v(p,c,m,k);if(tr(m))return w(p,c,m,k);yi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,m),c.return=p,p=c):(n(p,c),c=ao(m,p.mode,k),c.return=p,p=c),o(p)):n(p,c)}return P}var bn=Lf(!0),If=Lf(!1),el=Vt(null),tl=null,$n=null,ea=null;function ta(){ea=$n=tl=null}function na(e){var t=el.current;H(el),e._currentValue=t}function rs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){tl=e,ea=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(ea!==e)if(e={context:e,memoizedValue:t,next:null},$n===null){if(tl===null)throw Error(C(308));$n=e,tl.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return t}var Jt=null;function ra(e){Jt===null?Jt=[e]:Jt.push(e)}function Of(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ra(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,ra(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bs(e,n)}}function wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nl(e,t,n,r){var i=e.updateQueue;Pt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?l=u:o.next=u,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=a))}if(l!==null){var d=i.baseState;o=0,h=u=a=null,s=l;do{var g=s.lane,y=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(g=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(y,d,g);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(y,d,g):v,g==null)break e;d=X({},d,g);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=y,a=d):h=h.next=y,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);un|=o,e.lanes=o,e.memoizedState=d}}function xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Jr={},ot=Vt(Jr),Fr=Vt(Jr),Dr=Vt(Jr);function en(e){if(e===Jr)throw Error(C(174));return e}function la(e,t){switch(W(Dr,t),W(Fr,e),W(ot,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mo(t,e)}H(ot),W(ot,t)}function Vn(){H(ot),H(Fr),H(Dr)}function Mf(e){en(Dr.current);var t=en(ot.current),n=Mo(t,e.type);t!==n&&(W(Fr,e),W(ot,n))}function oa(e){Fr.current===e&&(H(ot),H(Fr))}var Y=Vt(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=[];function sa(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var zi=vt.ReactCurrentDispatcher,ro=vt.ReactCurrentBatchConfig,an=0,K=null,oe=null,ue=null,il=!1,kr=!1,Ur=0,xm=0;function ge(){throw Error(C(321))}function aa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function ua(e,t,n,r,i,l){if(an=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zi.current=e===null||e.memoizedState===null?Em:Pm,e=n(r,i),kr){l=0;do{if(kr=!1,Ur=0,25<=l)throw Error(C(301));l+=1,ue=oe=null,t.updateQueue=null,zi.current=jm,e=n(r,i)}while(kr)}if(zi.current=ll,t=oe!==null&&oe.next!==null,an=0,ue=oe=K=null,il=!1,t)throw Error(C(300));return e}function ca(){var e=Ur!==0;return Ur=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?K.memoizedState=ue=e:ue=ue.next=e,ue}function be(){if(oe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?K.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(C(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?K.memoizedState=ue=e:ue=ue.next=e}return ue}function Br(e,t){return typeof t=="function"?t(e):t}function io(e){var t=be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,u=l;do{var h=u.lane;if((an&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=d,o=r):a=a.next=d,K.lanes|=h,un|=h}u=u.next}while(u!==null&&u!==l);a===null?o=r:a.next=s,tt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,K.lanes|=l,un|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function lo(e){var t=be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);tt(l,t.memoizedState)||(Pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ff(){}function Df(e,t){var n=K,r=be(),i=t(),l=!tt(r.memoizedState,i);if(l&&(r.memoizedState=i,Pe=!0),r=r.queue,fa(Wf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Wr(9,Bf.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(C(349));an&30||Uf(n,t,i)}return i}function Uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bf(e,t,n,r){t.value=n,t.getSnapshot=r,bf(t)&&Vf(e)}function Wf(e,t,n){return n(function(){bf(t)&&Vf(e)})}function bf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Vf(e){var t=gt(e,1);t!==null&&Je(t,e,1,-1)}function ku(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=Cm.bind(null,K,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hf(){return be().memoizedState}function $i(e,t,n,r){var i=rt();K.flags|=e,i.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function xl(e,t,n,r){var i=be();r=r===void 0?null:r;var l=void 0;if(oe!==null){var o=oe.memoizedState;if(l=o.destroy,r!==null&&aa(r,o.deps)){i.memoizedState=Wr(t,n,l,r);return}}K.flags|=e,i.memoizedState=Wr(1|t,n,l,r)}function Su(e,t){return $i(8390656,8,e,t)}function fa(e,t){return xl(2048,8,e,t)}function Qf(e,t){return xl(4,2,e,t)}function Gf(e,t){return xl(4,4,e,t)}function Yf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kf(e,t,n){return n=n!=null?n.concat([e]):null,xl(4,4,Yf.bind(null,t,e),n)}function da(){}function Xf(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qf(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&aa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zf(e,t,n){return an&21?(tt(n,t)||(n=nf(),K.lanes|=n,un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function km(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ro.transition;ro.transition={};try{e(!1),t()}finally{U=n,ro.transition=r}}function Jf(){return be().memoizedState}function Sm(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ed(e))td(t,n);else if(n=Of(e,t,n,r),n!==null){var i=ke();Je(n,e,r,i),nd(n,t,r)}}function Cm(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ed(e))td(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,tt(s,o)){var a=t.interleaved;a===null?(i.next=i,ra(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Of(e,t,i,r),n!==null&&(i=ke(),Je(n,e,r,i),nd(n,t,r))}}function ed(e){var t=e.alternate;return e===K||t!==null&&t===K}function td(e,t){kr=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bs(e,n)}}var ll={readContext:We,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Em={readContext:We,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$i(4194308,4,Yf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sm.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:ku,useDebugValue:da,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=ku(!1),t=e[0];return e=km.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=rt();if(G){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ce===null)throw Error(C(349));an&30||Uf(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Su(Wf.bind(null,r,l,e),[e]),r.flags|=2048,Wr(9,Bf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=rt(),t=ce.identifierPrefix;if(G){var n=dt,r=ft;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pm={readContext:We,useCallback:Xf,useContext:We,useEffect:fa,useImperativeHandle:Kf,useInsertionEffect:Qf,useLayoutEffect:Gf,useMemo:qf,useReducer:io,useRef:Hf,useState:function(){return io(Br)},useDebugValue:da,useDeferredValue:function(e){var t=be();return Zf(t,oe.memoizedState,e)},useTransition:function(){var e=io(Br)[0],t=be().memoizedState;return[e,t]},useMutableSource:Ff,useSyncExternalStore:Df,useId:Jf,unstable_isNewReconciler:!1},jm={readContext:We,useCallback:Xf,useContext:We,useEffect:fa,useImperativeHandle:Kf,useInsertionEffect:Qf,useLayoutEffect:Gf,useMemo:qf,useReducer:lo,useRef:Hf,useState:function(){return lo(Br)},useDebugValue:da,useDeferredValue:function(e){var t=be();return oe===null?t.memoizedState=e:Zf(t,oe.memoizedState,e)},useTransition:function(){var e=lo(Br)[0],t=be().memoizedState;return[e,t]},useMutableSource:Ff,useSyncExternalStore:Df,useId:Jf,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Ft(e),l=pt(r,i);l.payload=t,n!=null&&(l.callback=n),t=At(e,l,i),t!==null&&(Je(t,e,i,r),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Ft(e),l=pt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=At(e,l,i),t!==null&&(Je(t,e,i,r),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Ft(e),i=pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&(Je(t,e,r,n),Ni(t,e,r))}};function Cu(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,l):!0}function rd(e,t,n){var r=!1,i=Wt,l=t.contextType;return typeof l=="object"&&l!==null?l=We(l):(i=_e(t)?on:we.current,r=t.contextTypes,l=(r=r!=null)?Bn(e,i):Wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ia(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=We(l):(l=_e(t)?on:we.current,i.context=Bn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(is(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&kl.enqueueReplaceState(i,i.state,null),nl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=eh(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function oo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function os(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _m=typeof WeakMap=="function"?WeakMap:Map;function id(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,gs=r),os(e,t)},n}function ld(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){os(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){os(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Pu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _m;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bm.bind(null,e,t,n),t.then(e,e))}function ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _u(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e)}var Nm=vt.ReactCurrentOwner,Pe=!1;function xe(e,t,n,r){t.child=e===null?If(t,null,n,r):bn(t,e.child,n,r)}function Nu(e,t,n,r,i){n=n.render;var l=t.ref;return Mn(t,i),r=ua(e,t,n,r,l,i),n=ca(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(G&&n&&qs(t),t.flags|=1,xe(e,t,r,i),t.child)}function zu(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!xa(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,od(e,t,l,r,i)):(e=Ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(o,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Dt(l,r),e.ref=t.ref,e.return=t,t.child=e}function od(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Ir(l,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,yt(e,t,i)}return ss(e,t,n,r,i)}function sd(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Tn,$e),$e|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Tn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,W(Tn,$e),$e|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,W(Tn,$e),$e|=r;return xe(e,t,i,n),t.child}function ad(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ss(e,t,n,r,i){var l=_e(n)?on:we.current;return l=Bn(t,l),Mn(t,i),n=ua(e,t,n,r,l,i),r=ca(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(G&&r&&qs(t),t.flags|=1,xe(e,t,n,i),t.child)}function $u(e,t,n,r,i){if(_e(n)){var l=!0;qi(t)}else l=!1;if(Mn(t,i),t.stateNode===null)Ri(e,t),rd(t,n,r),ls(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=_e(n)?on:we.current,u=Bn(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Eu(t,o,r,u),Pt=!1;var g=t.memoizedState;o.state=g,nl(t,r,o,i),a=t.memoizedState,s!==r||g!==a||je.current||Pt?(typeof h=="function"&&(is(t,n,h,r),a=t.memoizedState),(s=Pt||Cu(t,n,s,r,g,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Af(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ye(t.type,s),o.props=u,d=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=We(a):(a=_e(n)?on:we.current,a=Bn(t,a));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||g!==a)&&Eu(t,o,r,a),Pt=!1,g=t.memoizedState,o.state=g,nl(t,r,o,i);var v=t.memoizedState;s!==d||g!==v||je.current||Pt?(typeof y=="function"&&(is(t,n,y,r),v=t.memoizedState),(u=Pt||Cu(t,n,u,r,g,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return as(e,t,n,r,l,i)}function as(e,t,n,r,i,l){ad(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&mu(t,n,!1),yt(e,t,l);r=t.stateNode,Nm.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=bn(t,e.child,null,l),t.child=bn(t,null,s,l)):xe(e,t,s,l),t.memoizedState=r.state,i&&mu(t,n,!0),t.child}function ud(e){var t=e.stateNode;t.pendingContext?hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hu(e,t.context,!1),la(e,t.containerInfo)}function Ru(e,t,n,r,i){return Wn(),Js(i),t.flags|=256,xe(e,t,n,r),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function cd(e,t,n){var r=t.pendingProps,i=Y.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Y,i&1),e===null)return ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=El(o,r,0,null),e=nn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=cs(n),t.memoizedState=us,e):pa(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return zm(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Dt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=Dt(s,l):(l=nn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?cs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=us,r}return l=e.child,e=l.sibling,r=Dt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pa(e,t){return t=El({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vi(e,t,n,r){return r!==null&&Js(r),bn(t,e.child,null,n),e=pa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zm(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=oo(Error(C(422))),vi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=El({mode:"visible",children:r.children},i,0,null),l=nn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&bn(t,e.child,null,o),t.child.memoizedState=cs(o),t.memoizedState=us,l);if(!(t.mode&1))return vi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(C(419)),r=oo(l,r,void 0),vi(e,t,o,r)}if(s=(o&e.childLanes)!==0,Pe||s){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,gt(e,i),Je(r,e,i,-1))}return wa(),r=oo(Error(C(421))),vi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Wm.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Te=Ot(i.nextSibling),Le=t,G=!0,qe=null,e!==null&&(Fe[De++]=ft,Fe[De++]=dt,Fe[De++]=sn,ft=e.id,dt=e.overflow,sn=t),t=pa(t,r.children),t.flags|=4096,t)}function Tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rs(e.return,t,n)}function so(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function fd(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(xe(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tu(e,n,t);else if(e.tag===19)Tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),so(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&rl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}so(t,!0,n,null,l);break;case"together":so(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $m(e,t,n){switch(t.tag){case 3:ud(t),Wn();break;case 5:Mf(t);break;case 1:_e(t.type)&&qi(t);break;case 4:la(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(el,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?cd(e,t,n):(W(Y,Y.current&1),e=yt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,sd(e,t,n)}return yt(e,t,n)}var dd,fs,pd,hd;dd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fs=function(){};pd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,en(ot.current);var l=null;switch(n){case"input":i=Lo(e,i),r=Lo(e,r),l=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":i=Ao(e,i),r=Ao(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ki)}Fo(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_r.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var a=r[u];if(s=i?.[u],r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_r.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&b("scroll",e),l||s===a||(l=[])):(l=l||[]).push(u,a))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};hd=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rm(e,t,n){var r=t.pendingProps;switch(Zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return _e(t.type)&&Xi(),ye(t),null;case 3:return r=t.stateNode,Vn(),H(je),H(we),sa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(ws(qe),qe=null))),fs(e,t),ye(t),null;case 5:oa(t);var i=en(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)pd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ye(t),null}if(e=en(ot.current),gi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[it]=t,r[Mr]=l,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)b(pr[i],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Ba(r,l),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},b("invalid",r);break;case"textarea":ba(r,l),b("invalid",r)}Fo(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&mi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&mi(r.textContent,s,e),i=["children",""+s]):_r.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&b("scroll",r)}switch(n){case"input":si(r),Wa(r,l,!0);break;case"textarea":si(r),Va(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ki)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[it]=t,e[Mr]=r,dd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Do(n,r),n){case"dialog":b("cancel",e),b("close",e),i=r;break;case"iframe":case"object":case"embed":b("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)b(pr[i],e);i=r;break;case"source":b("error",e),i=r;break;case"img":case"image":case"link":b("error",e),b("load",e),i=r;break;case"details":b("toggle",e),i=r;break;case"input":Ba(e,r),i=Lo(e,r),b("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),b("invalid",e);break;case"textarea":ba(e,r),i=Ao(e,r),b("invalid",e);break;default:i=r}Fo(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Vc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Wc(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Nr(e,a):typeof a=="number"&&Nr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_r.hasOwnProperty(l)?a!=null&&l==="onScroll"&&b("scroll",e):a!=null&&Ms(e,l,a,o))}switch(n){case"input":si(e),Wa(e,r,!1);break;case"textarea":si(e),Va(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ki)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)hd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=en(Dr.current),en(ot.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(l=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return ye(t),null;case 13:if(H(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Te!==null&&t.mode&1&&!(t.flags&128))Tf(),Wn(),t.flags|=98560,l=!1;else if(l=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[it]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),l=!1}else qe!==null&&(ws(qe),qe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):wa())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Vn(),fs(e,t),e===null&&Or(t.stateNode.containerInfo),ye(t),null;case 10:return na(t.type._context),ye(t),null;case 17:return _e(t.type)&&Xi(),ye(t),null;case 19:if(H(Y),l=t.memoizedState,l===null)return ye(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)sr(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=rl(e),o!==null){for(t.flags|=128,sr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}l.tail!==null&&ee()>Qn&&(t.flags|=128,r=!0,sr(l,!1),t.lanes=4194304)}else{if(!r)if(e=rl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!G)return ye(t),null}else 2*ee()-l.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,sr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ee(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Tm(e,t){switch(Zs(t),t.tag){case 1:return _e(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),H(je),H(we),sa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return oa(t),null;case 13:if(H(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Y),null;case 4:return Vn(),null;case 10:return na(t.type._context),null;case 22:case 23:return va(),null;case 24:return null;default:return null}}var wi=!1,ve=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,$=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function ds(e,t,n){try{n()}catch(r){J(e,t,r)}}var Lu=!1;function Im(e,t){if(Ko=Qi,e=wf(),Xs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,u=0,h=0,d=e,g=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==l||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)g=d,d=y;for(;;){if(d===e)break t;if(g===n&&++u===i&&(s=o),g===l&&++h===r&&(a=o),(y=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xo={focusedElem:e,selectionRange:n},Qi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,P=v.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),P);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){J(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return v=Lu,Lu=!1,v}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ds(t,n,l)}i=i.next}while(i!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ps(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function md(e){var t=e.alternate;t!==null&&(e.alternate=null,md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Mr],delete t[Jo],delete t[gm],delete t[ym])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gd(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki));else if(r!==4&&(e=e.child,e!==null))for(hs(e,t,n),e=e.sibling;e!==null;)hs(e,t,n),e=e.sibling}function ms(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ms(e,t,n),e=e.sibling;e!==null;)ms(e,t,n),e=e.sibling}var de=null,Ke=!1;function St(e,t,n){for(n=n.child;n!==null;)yd(e,t,n),n=n.sibling}function yd(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:ve||Rn(n,t);case 6:var r=de,i=Ke;de=null,St(e,t,n),de=r,Ke=i,de!==null&&(Ke?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ke?(e=de,n=n.stateNode,e.nodeType===8?eo(e.parentNode,n):e.nodeType===1&&eo(e,n),Tr(e)):eo(de,n.stateNode));break;case 4:r=de,i=Ke,de=n.stateNode.containerInfo,Ke=!0,St(e,t,n),de=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ds(n,t,o),i=i.next}while(i!==r)}St(e,t,n);break;case 1:if(!ve&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,St(e,t,n),ve=r):St(e,t,n);break;default:St(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lm),t.forEach(function(r){var i=bm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:de=s.stateNode,Ke=!1;break e;case 3:de=s.stateNode.containerInfo,Ke=!0;break e;case 4:de=s.stateNode.containerInfo,Ke=!0;break e}s=s.return}if(de===null)throw Error(C(160));yd(l,o,i),de=null,Ke=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){J(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vd(t,e),t=t.sibling}function vd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),nt(e),r&4){try{Sr(3,e,e.return),Sl(3,e)}catch(w){J(e,e.return,w)}try{Sr(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:Ge(t,e),nt(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(Ge(t,e),nt(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(w){J(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Dc(i,l),Do(s,o);var u=Do(s,l);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?Vc(i,d):h==="dangerouslySetInnerHTML"?Wc(i,d):h==="children"?Nr(i,d):Ms(i,h,d,u)}switch(s){case"input":Io(i,l);break;case"textarea":Uc(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?Ln(i,!!l.multiple,y,!1):g!==!!l.multiple&&(l.defaultValue!=null?Ln(i,!!l.multiple,l.defaultValue,!0):Ln(i,!!l.multiple,l.multiple?[]:"",!1))}i[Mr]=l}catch(w){J(e,e.return,w)}}break;case 6:if(Ge(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){J(e,e.return,w)}}break;case 3:if(Ge(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:Ge(t,e),nt(e);break;case 13:Ge(t,e),nt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ga=ee())),r&4&&Ou(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||h,Ge(t,e),ve=u):Ge(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for($=e,h=e.child;h!==null;){for(d=$=h;$!==null;){switch(g=$,y=g.child,g.tag){case 0:case 11:case 14:case 15:Sr(4,g,g.return);break;case 1:Rn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){J(r,n,w)}}break;case 5:Rn(g,g.return);break;case 22:if(g.memoizedState!==null){Mu(d);continue}}y!==null?(y.return=g,$=y):Mu(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=bc("display",o))}catch(w){J(e,e.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){J(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ge(t,e),nt(e),r&4&&Ou(e);break;case 21:break;default:Ge(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gd(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var l=Iu(e);ms(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Iu(e);hs(e,s,o);break;default:throw Error(C(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Om(e,t,n){$=e,wd(e)}function wd(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wi;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||ve;s=wi;var u=ve;if(wi=o,(ve=a)&&!u)for($=i;$!==null;)o=$,a=o.child,o.tag===22&&o.memoizedState!==null?Fu(i):a!==null?(a.return=o,$=a):Fu(i);for(;l!==null;)$=l,wd(l),l=l.sibling;$=i,wi=s,ve=u}Au(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,$=l):Au(e)}}function Au(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&xu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xu(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Tr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ve||t.flags&512&&ps(t)}catch(g){J(t,t.return,g)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Mu(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Fu(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(a){J(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){J(t,i,a)}}var l=t.return;try{ps(t)}catch(a){J(t,l,a)}break;case 5:var o=t.return;try{ps(t)}catch(a){J(t,o,a)}}}catch(a){J(t,t.return,a)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var Am=Math.ceil,ol=vt.ReactCurrentDispatcher,ha=vt.ReactCurrentOwner,Be=vt.ReactCurrentBatchConfig,A=0,ce=null,re=null,he=0,$e=0,Tn=Vt(0),ae=0,br=null,un=0,Cl=0,ma=0,Cr=null,Ee=null,ga=0,Qn=1/0,at=null,sl=!1,gs=null,Mt=null,xi=!1,zt=null,al=0,Er=0,ys=null,Ti=-1,Li=0;function ke(){return A&6?ee():Ti!==-1?Ti:Ti=ee()}function Ft(e){return e.mode&1?A&2&&he!==0?he&-he:wm.transition!==null?(Li===0&&(Li=nf()),Li):(e=U,e!==0||(e=window.event,e=e===void 0?16:cf(e.type)),e):1}function Je(e,t,n,r){if(50<Er)throw Er=0,ys=null,Error(C(185));Xr(e,n,r),(!(A&2)||e!==ce)&&(e===ce&&(!(A&2)&&(Cl|=n),ae===4&&_t(e,he)),Ne(e,r),n===1&&A===0&&!(t.mode&1)&&(Qn=ee()+500,wl&&Ht()))}function Ne(e,t){var n=e.callbackNode;wh(e,t);var r=Hi(e,e===ce?he:0);if(r===0)n!==null&&Ga(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ga(n),t===1)e.tag===0?vm(Du.bind(null,e)):zf(Du.bind(null,e)),hm(function(){!(A&6)&&Ht()}),n=null;else{switch(rf(r)){case 1:n=Ws;break;case 4:n=ef;break;case 16:n=Vi;break;case 536870912:n=tf;break;default:n=Vi}n=_d(n,xd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xd(e,t){if(Ti=-1,Li=0,A&6)throw Error(C(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Hi(e,e===ce?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ul(e,r);else{t=r;var i=A;A|=2;var l=Sd();(ce!==e||he!==t)&&(at=null,Qn=ee()+500,tn(e,t));do try{Dm();break}catch(s){kd(e,s)}while(!0);ta(),ol.current=l,A=i,re!==null?t=0:(ce=null,he=0,t=ae)}if(t!==0){if(t===2&&(i=Vo(e),i!==0&&(r=i,t=vs(e,i))),t===1)throw n=br,tn(e,0),_t(e,r),Ne(e,ee()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!Mm(i)&&(t=ul(e,r),t===2&&(l=Vo(e),l!==0&&(r=l,t=vs(e,l))),t===1))throw n=br,tn(e,0),_t(e,r),Ne(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Kt(e,Ee,at);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=ga+500-ee(),10<t)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zo(Kt.bind(null,e,Ee,at),t);break}Kt(e,Ee,at);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ze(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Am(r/1960))-r,10<r){e.timeoutHandle=Zo(Kt.bind(null,e,Ee,at),r);break}Kt(e,Ee,at);break;case 5:Kt(e,Ee,at);break;default:throw Error(C(329))}}}return Ne(e,ee()),e.callbackNode===n?xd.bind(null,e):null}function vs(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=ul(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&ws(t)),e}function ws(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Mm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!tt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~ma,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Du(e){if(A&6)throw Error(C(327));Fn();var t=Hi(e,0);if(!(t&1))return Ne(e,ee()),null;var n=ul(e,t);if(e.tag!==0&&n===2){var r=Vo(e);r!==0&&(t=r,n=vs(e,r))}if(n===1)throw n=br,tn(e,0),_t(e,t),Ne(e,ee()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,Ee,at),Ne(e,ee()),null}function ya(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Qn=ee()+500,wl&&Ht())}}function cn(e){zt!==null&&zt.tag===0&&!(A&6)&&Fn();var t=A;A|=1;var n=Be.transition,r=U;try{if(Be.transition=null,U=1,e)return e()}finally{U=r,Be.transition=n,A=t,!(A&6)&&Ht()}}function va(){$e=Tn.current,H(Tn)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pm(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Zs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:Vn(),H(je),H(we),sa();break;case 5:oa(r);break;case 4:Vn();break;case 13:H(Y);break;case 19:H(Y);break;case 10:na(r.type._context);break;case 22:case 23:va()}n=n.return}if(ce=e,re=e=Dt(e.current,null),he=$e=t,ae=0,br=null,ma=Cl=un=0,Ee=Cr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Jt=null}return e}function kd(e,t){do{var n=re;try{if(ta(),zi.current=ll,il){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}il=!1}if(an=0,ue=oe=K=null,kr=!1,Ur=0,ha.current=null,n===null||n.return===null){ae=1,br=t,re=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=he,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=s,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=ju(o);if(y!==null){y.flags&=-257,_u(y,o,s,l,t),y.mode&1&&Pu(l,u,t),t=y,a=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(a),t.updateQueue=w}else v.add(a);break e}else{if(!(t&1)){Pu(l,u,t),wa();break e}a=Error(C(426))}}else if(G&&s.mode&1){var P=ju(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),_u(P,o,s,l,t),Js(Hn(a,s));break e}}l=a=Hn(a,s),ae!==4&&(ae=2),Cr===null?Cr=[l]:Cr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=id(l,a,t);wu(l,p);break e;case 1:s=a;var c=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Mt===null||!Mt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=ld(l,s,t);wu(l,k);break e}}l=l.return}while(l!==null)}Ed(n)}catch(E){t=E,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Sd(){var e=ol.current;return ol.current=ll,e===null?ll:e}function wa(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(un&268435455)&&!(Cl&268435455)||_t(ce,he)}function ul(e,t){var n=A;A|=2;var r=Sd();(ce!==e||he!==t)&&(at=null,tn(e,t));do try{Fm();break}catch(i){kd(e,i)}while(!0);if(ta(),A=n,ol.current=r,re!==null)throw Error(C(261));return ce=null,he=0,ae}function Fm(){for(;re!==null;)Cd(re)}function Dm(){for(;re!==null&&!ch();)Cd(re)}function Cd(e){var t=jd(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Ed(e):re=t,ha.current=null}function Ed(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tm(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=Rm(n,t,$e),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function Kt(e,t,n){var r=U,i=Be.transition;try{Be.transition=null,U=1,Um(e,t,n,r)}finally{Be.transition=i,U=r}return null}function Um(e,t,n,r){do Fn();while(zt!==null);if(A&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(xh(e,l),e===ce&&(re=ce=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,_d(Vi,function(){return Fn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Be.transition,Be.transition=null;var o=U;U=1;var s=A;A|=4,ha.current=null,Im(e,n),vd(n,e),om(Xo),Qi=!!Ko,Xo=Ko=null,e.current=n,Om(n),fh(),A=s,U=o,Be.transition=l}else e.current=n;if(xi&&(xi=!1,zt=e,al=i),l=e.pendingLanes,l===0&&(Mt=null),hh(n.stateNode),Ne(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,e=gs,gs=null,e;return al&1&&e.tag!==0&&Fn(),l=e.pendingLanes,l&1?e===ys?Er++:(Er=0,ys=e):Er=0,Ht(),null}function Fn(){if(zt!==null){var e=rf(al),t=Be.transition,n=U;try{if(Be.transition=null,U=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,al=0,A&6)throw Error(C(331));var i=A;for(A|=4,$=e.current;$!==null;){var l=$,o=l.child;if($.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for($=u;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Sr(8,h,l)}var d=h.child;if(d!==null)d.return=h,$=d;else for(;$!==null;){h=$;var g=h.sibling,y=h.return;if(md(h),h===u){$=null;break}if(g!==null){g.return=y,$=g;break}$=y}}}var v=l.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}$=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,$=o;else e:for(;$!==null;){if(l=$,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Sr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,$=p;break e}$=l.return}}var c=e.current;for($=c;$!==null;){o=$;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,$=m;else e:for(o=c;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(E){J(s,s.return,E)}if(s===o){$=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,$=k;break e}$=s.return}}if(A=i,Ht(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{U=n,Be.transition=t}}return!1}function Uu(e,t,n){t=Hn(n,t),t=id(e,t,1),e=At(e,t,1),t=ke(),e!==null&&(Xr(e,1,t),Ne(e,t))}function J(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Hn(n,e),e=ld(t,e,1),t=At(t,e,1),e=ke(),t!==null&&(Xr(t,1,e),Ne(t,e));break}}t=t.return}}function Bm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(he&n)===n&&(ae===4||ae===3&&(he&130023424)===he&&500>ee()-ga?tn(e,0):ma|=n),Ne(e,t)}function Pd(e,t){t===0&&(e.mode&1?(t=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):t=1);var n=ke();e=gt(e,t),e!==null&&(Xr(e,t,n),Ne(e,n))}function Wm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pd(e,n)}function bm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Pd(e,n)}var jd;jd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,$m(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,G&&t.flags&1048576&&$f(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ri(e,t),e=t.pendingProps;var i=Bn(t,we.current);Mn(t,n),i=ua(null,t,r,e,i,n);var l=ca();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(l=!0,qi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ia(t),i.updater=kl,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=as(null,t,r,!0,l,n)):(t.tag=0,G&&l&&qs(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ri(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hm(r),e=Ye(r,e),i){case 0:t=ss(null,t,r,e,n);break e;case 1:t=$u(null,t,r,e,n);break e;case 11:t=Nu(null,t,r,e,n);break e;case 14:t=zu(null,t,r,Ye(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),ss(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),$u(e,t,r,i,n);case 3:e:{if(ud(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Af(e,t),nl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Hn(Error(C(423)),t),t=Ru(e,t,r,n,i);break e}else if(r!==i){i=Hn(Error(C(424)),t),t=Ru(e,t,r,n,i);break e}else for(Te=Ot(t.stateNode.containerInfo.firstChild),Le=t,G=!0,qe=null,n=If(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===i){t=yt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Mf(t),e===null&&ns(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,qo(r,i)?o=null:l!==null&&qo(r,l)&&(t.flags|=32),ad(e,t),xe(e,t,o,n),t.child;case 6:return e===null&&ns(t),null;case 13:return cd(e,t,n);case 4:return la(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Nu(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,W(el,r._currentValue),r._currentValue=o,l!==null)if(tt(l.value,o)){if(l.children===i.children&&!je.current){t=yt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=pt(-1,n&-n),a.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),rs(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(C(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),rs(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mn(t,n),i=We(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),zu(e,t,r,i,n);case 15:return od(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Ri(e,t),t.tag=1,_e(r)?(e=!0,qi(t)):e=!1,Mn(t,n),rd(t,r,i),ls(t,r,i,n),as(null,t,r,!0,e,n);case 19:return fd(e,t,n);case 22:return sd(e,t,n)}throw Error(C(156,t.tag))};function _d(e,t){return Jc(e,t)}function Vm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Vm(e,t,n,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hm(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ds)return 11;if(e===Us)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ii(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")xa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sn:return nn(n.children,i,l,t);case Fs:o=8,i|=8;break;case zo:return e=Ue(12,n,t,i|2),e.elementType=zo,e.lanes=l,e;case $o:return e=Ue(13,n,t,i),e.elementType=$o,e.lanes=l,e;case Ro:return e=Ue(19,n,t,i),e.elementType=Ro,e.lanes=l,e;case Ac:return El(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ic:o=10;break e;case Oc:o=9;break e;case Ds:o=11;break e;case Us:o=14;break e;case Et:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ue(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function nn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function El(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Ac,e.lanes=n,e.stateNode={isHidden:!1},e}function ao(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function uo(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ka(e,t,n,r,i,l,o,s,a){return e=new Qm(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ue(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ia(l),e}function Gm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nd(e){if(!e)return Wt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(_e(n))return Nf(e,n,t)}return t}function zd(e,t,n,r,i,l,o,s,a){return e=ka(n,r,!0,e,i,l,o,s,a),e.context=Nd(null),n=e.current,r=ke(),i=Ft(n),l=pt(r,i),l.callback=t??null,At(n,l,i),e.current.lanes=i,Xr(e,i,r),Ne(e,r),e}function Pl(e,t,n,r){var i=t.current,l=ke(),o=Ft(i);return n=Nd(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,o),e!==null&&(Je(e,i,o,l),Ni(e,i,o)),o}function cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sa(e,t){Bu(e,t),(e=e.alternate)&&Bu(e,t)}function Ym(){return null}var $d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}jl.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Pl(e,t,null,null)};jl.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){Pl(null,e,null,null)}),t[mt]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=sf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&uf(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Km(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=cl(o);l.call(u)}}var o=zd(t,r,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=o,e[mt]=o.current,Or(e.nodeType===8?e.parentNode:e),cn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=cl(a);s.call(u)}}var a=ka(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=a,e[mt]=a.current,Or(e.nodeType===8?e.parentNode:e),cn(function(){Pl(t,a,n,r)}),a}function Nl(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=cl(o);s.call(a)}}Pl(t,o,e,i)}else o=Km(n,t,e,i,r);return cl(o)}lf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(bs(t,n|1),Ne(t,ee()),!(A&6)&&(Qn=ee()+500,Ht()))}break;case 13:cn(function(){var r=gt(e,1);if(r!==null){var i=ke();Je(r,e,1,i)}}),Sa(e,1)}};Vs=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=ke();Je(t,e,134217728,n)}Sa(e,134217728)}};of=function(e){if(e.tag===13){var t=Ft(e),n=gt(e,t);if(n!==null){var r=ke();Je(n,e,t,r)}Sa(e,t)}};sf=function(){return U};af=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Bo=function(e,t,n){switch(t){case"input":if(Io(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vl(r);if(!i)throw Error(C(90));Fc(r),Io(r,i)}}}break;case"textarea":Uc(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Gc=ya;Yc=cn;var Xm={usingClientEntryPoint:!1,Events:[Zr,jn,vl,Hc,Qc,ya]},ar={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qm={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qc(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Ym,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{hl=ki.inject(qm),lt=ki}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xm;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(C(200));return Gm(e,t,null,n)};Oe.createRoot=function(e,t){if(!Ea(e))throw Error(C(299));var n=!1,r="",i=$d;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ka(e,1,!1,null,null,n,!1,r,i),e[mt]=t.current,Or(e.nodeType===8?e.parentNode:e),new Ca(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=qc(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return cn(e)};Oe.hydrate=function(e,t,n){if(!_l(t))throw Error(C(200));return Nl(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=$d;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=zd(t,null,e,1,n??null,i,!1,l,o),e[mt]=t.current,Or(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jl(t)};Oe.render=function(e,t,n){if(!_l(t))throw Error(C(200));return Nl(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!_l(e))throw Error(C(40));return e._reactRootContainer?(cn(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Oe.unstable_batchedUpdates=ya;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Nl(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function Rd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rd)}catch(e){console.error(e)}}Rd(),$c.exports=Oe;var Zm=$c.exports;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(null,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const bu="popstate";function Jm(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:s}=r.location;return xs("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Td(i)}return tg(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function eg(){return Math.random().toString(36).substr(2,8)}function Vu(e,t){return{usr:e.state,key:e.key,idx:t}}function xs(e,t,n,r){return n===void 0&&(n=null),Vr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:n,key:t&&t.key||r||eg()})}function Td(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function tg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=$t.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(Vr({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){s=$t.Pop;let P=h(),p=P==null?null:P-u;u=P,a&&a({action:s,location:w.location,delta:p})}function g(P,p){s=$t.Push;let c=xs(w.location,P,p);u=h()+1;let m=Vu(c,u),k=w.createHref(c);try{o.pushState(m,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(k)}l&&a&&a({action:s,location:w.location,delta:1})}function y(P,p){s=$t.Replace;let c=xs(w.location,P,p);u=h();let m=Vu(c,u),k=w.createHref(c);o.replaceState(m,"",k),l&&a&&a({action:s,location:w.location,delta:0})}function v(P){let p=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof P=="string"?P:Td(P);return c=c.replace(/ $/,"%20"),ie(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let w={get action(){return s},get location(){return e(i,o)},listen(P){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(bu,d),a=P,()=>{i.removeEventListener(bu,d),a=null}},createHref(P){return t(i,P)},createURL:v,encodeLocation(P){let p=v(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(P){return o.go(P)}};return w}var Hu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hu||(Hu={}));function ng(e,t,n){return n===void 0&&(n="/"),rg(e,t,n)}function rg(e,t,n,r){let i=typeof t=="string"?Jn(t):t,l=Od(i.pathname||"/",n);if(l==null)return null;let o=Ld(e);ig(o);let s=null,a=gg(l);for(let u=0;s==null&&u<o.length;++u)s=pg(o[u],a);return s}function Ld(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(ie(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=rn([r,a.relativePath]),h=n.concat(a);l.children&&l.children.length>0&&(ie(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ld(l.children,t,h,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:fg(u,l.index),routesMeta:h})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let a of Id(l.path))i(l,o,a)}),t}function Id(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Id(r.join("/")),s=[];return s.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function ig(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:dg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lg=/^:[\w-]+$/,og=3,sg=2,ag=1,ug=10,cg=-2,Qu=e=>e==="*";function fg(e,t){let n=e.split("/"),r=n.length;return n.some(Qu)&&(r+=cg),t&&(r+=sg),n.filter(i=>!Qu(i)).reduce((i,l)=>i+(lg.test(l)?og:l===""?ag:ug),r)}function dg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function pg(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",d=hg({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},h),g=a.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:rn([l,d.pathname]),pathnameBase:kg(rn([l,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(l=rn([l,d.pathnameBase]))}return o}function hg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=mg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let w=s[d]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const v=s[d];return y&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function mg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function gg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Od(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const yg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vg=e=>yg.test(e);function wg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jn(e):e,l;if(n)if(vg(n))l=n;else{if(n.includes("//")){let o=n;n=Fd(n),Pa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=Gu(n.substring(1),"/"):l=Gu(n,t)}else l=t;return{pathname:l,search:Sg(r),hash:Cg(i)}}function Gu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function co(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ad(e,t){let n=xg(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Md(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jn(e):(i=Vr({},e),ie(!i.pathname||!i.pathname.includes("?"),co("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),co("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),co("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}s=d>=0?t[d]:"/"}let a=wg(i,s),u=o&&o!=="/"&&o.endsWith("/"),h=(l||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const Fd=e=>e.replace(/\/\/+/g,"/"),rn=e=>Fd(e.join("/")),kg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Cg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Eg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dd=["post","put","patch","delete"];new Set(Dd);const Pg=["get",...Dd];new Set(Pg);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(null,arguments)}const ja=N.createContext(null),jg=N.createContext(null),ei=N.createContext(null),zl=N.createContext(null),hn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Ud=N.createContext(null);function ti(){return N.useContext(zl)!=null}function _a(){return ti()||ie(!1),N.useContext(zl).location}function Bd(e){N.useContext(ei).static||N.useLayoutEffect(e)}function _g(){let{isDataRoute:e}=N.useContext(hn);return e?Ug():Ng()}function Ng(){ti()||ie(!1);let e=N.useContext(ja),{basename:t,future:n,navigator:r}=N.useContext(ei),{matches:i}=N.useContext(hn),{pathname:l}=_a(),o=JSON.stringify(Ad(i,n.v7_relativeSplatPath)),s=N.useRef(!1);return Bd(()=>{s.current=!0}),N.useCallback(function(u,h){if(h===void 0&&(h={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=Md(u,JSON.parse(o),l,h.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:rn([t,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[t,r,o,l,e])}function zg(e,t){return $g(e,t)}function $g(e,t,n,r){ti()||ie(!1);let{navigator:i}=N.useContext(ei),{matches:l}=N.useContext(hn),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=_a(),h;if(t){var d;let P=typeof t=="string"?Jn(t):t;a==="/"||(d=P.pathname)!=null&&d.startsWith(a)||ie(!1),h=P}else h=u;let g=h.pathname||"/",y=g;if(a!=="/"){let P=a.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let v=ng(e,{pathname:y}),w=Og(v&&v.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:rn([a,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?a:rn([a,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,n,r);return t&&w?N.createElement(zl.Provider,{value:{location:Hr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:$t.Pop}},w):w}function Rg(){let e=Dg(),t=Eg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,null)}const Tg=N.createElement(Rg,null);class Lg extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(hn.Provider,{value:this.props.routeContext},N.createElement(Ud.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ig(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(ja);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(hn.Provider,{value:t},r)}function Og(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let h=o.findIndex(d=>d.route.id&&s?.[d.route.id]!==void 0);h>=0||ie(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:g,errors:y}=n,v=d.route.loader&&g[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||v){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,d,g)=>{let y,v=!1,w=null,P=null;n&&(y=s&&d.route.id?s[d.route.id]:void 0,w=d.route.errorElement||Tg,a&&(u<0&&g===0?(Bg("route-fallback"),v=!0,P=null):u===g&&(v=!0,P=d.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),c=()=>{let m;return y?m=w:v?m=P:d.route.Component?m=N.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=h,N.createElement(Ig,{match:d,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?N.createElement(Lg,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var Wd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wd||{}),bd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bd||{});function Ag(e){let t=N.useContext(ja);return t||ie(!1),t}function Mg(e){let t=N.useContext(jg);return t||ie(!1),t}function Fg(e){let t=N.useContext(hn);return t||ie(!1),t}function Vd(e){let t=Fg(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function Dg(){var e;let t=N.useContext(Ud),n=Mg(),r=Vd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ug(){let{router:e}=Ag(Wd.UseNavigateStable),t=Vd(bd.UseNavigateStable),n=N.useRef(!1);return Bd(()=>{n.current=!0}),N.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Hr({fromRouteId:t},l)))},[e,t])}const Yu={};function Bg(e,t,n){Yu[e]||(Yu[e]=!0)}function Wg(e,t){e?.v7_startTransition,e?.v7_relativeSplatPath}function bg(e){let{to:t,replace:n,state:r,relative:i}=e;ti()||ie(!1);let{future:l,static:o}=N.useContext(ei),{matches:s}=N.useContext(hn),{pathname:a}=_a(),u=_g(),h=Md(t,Ad(s,l.v7_relativeSplatPath),a,i==="path"),d=JSON.stringify(h);return N.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function Xt(e){ie(!1)}function Vg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:l,static:o=!1,future:s}=e;ti()&&ie(!1);let a=t.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:a,navigator:l,static:o,future:Hr({v7_relativeSplatPath:!1},s)}),[a,s,l,o]);typeof r=="string"&&(r=Jn(r));let{pathname:h="/",search:d="",hash:g="",state:y=null,key:v="default"}=r,w=N.useMemo(()=>{let P=Od(h,a);return P==null?null:{location:{pathname:P,search:d,hash:g,state:y,key:v},navigationType:i}},[a,h,d,g,y,v,i]);return w==null?null:N.createElement(ei.Provider,{value:u},N.createElement(zl.Provider,{children:n,value:w}))}function Hg(e){let{children:t,location:n}=e;return zg(ks(t),n)}new Promise(()=>{});function ks(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let l=[...t,i];if(r.type===N.Fragment){n.push.apply(n,ks(r.props.children,l));return}r.type!==Xt&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ks(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Qg="6";try{window.__reactRouterVersion=Qg}catch{}const Gg="startTransition",Ku=Bp[Gg];function Yg(e){let{basename:t,children:n,future:r,window:i}=e,l=N.useRef();l.current==null&&(l.current=Jm({window:i,v5Compat:!0}));let o=l.current,[s,a]=N.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=N.useCallback(d=>{u&&Ku?Ku(()=>a(d)):a(d)},[a,u]);return N.useLayoutEffect(()=>o.listen(h),[o,h]),N.useEffect(()=>Wg(r),[r]),N.createElement(Vg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var Xu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xu||(Xu={}));var qu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qu||(qu={}));var Hd,Zu=Zm;Hd=Zu.createRoot,Zu.hydrateRoot;const Kg={name:"Divvylore",tagline:"Turn your website into sales and support on autopilot with AI agents"},Xg={base:"https://app.divvylore.com",register:"https://app.divvylore.com/register",login:"https://app.divvylore.com/login"},qg={privacyPolicy:"https://blog.divvylore.com/privacy-policy",termsAndConditions:"https://blog.divvylore.com/terms-and-conditions",refundPolicy:"https://blog.divvylore.com/refund-policy"},Zg=[{label:"Product",href:"#product"},{label:"How it works",href:"#how-it-works"},{label:"Capabilities",href:"#capabilities"},{label:"Pricing",href:"#pricing"}],Jg={title:"Turn your website into sales and support on autopilot with AI agents",description:"Divvylore puts AI agents on your site to capture sales and resolve support — while websites and content keep the engine fed.",primaryCta:{label:"Get started",url:"https://app.divvylore.com/register"},secondaryCta:{label:"View pricing",url:"#pricing"}},e0={title:"One platform. Three ways to go on autopilot.",subtitle:"Start with an agent, a website, or content — same knowledge, same control plane.",cards:[{title:"AI agents for sales & support",description:"Put an agent on your site in minutes. Answer visitors, capture leads, and resolve common issues without waiting on a queue.",accent:"agents"},{title:"Launch a website",description:"Publish a polished site, then add your agent so every visit can become a conversation that converts or resolves.",accent:"website"},{title:"Grow with content & SEO",description:"Turn topics into published articles that strengthen your site and feed the same knowledge your agent uses.",accent:"content"}]},t0={title:"How autopilot actually works",subtitle:"A simple loop: ship the surface, deploy the agent, feed it with content, then improve from real conversations.",steps:[{title:"Publish your website",description:"Launch or connect the site where visitors already arrive — your storefront for sales and support."},{title:"Deploy an AI agent",description:"Configure prompts, tools, and guardrails so the agent can qualify leads and resolve common requests."},{title:"Feed it with content",description:"Publish articles and knowledge that improve SEO and give the agent sharper answers."},{title:"Improve from outcomes",description:"Review chats, leads, and handoffs — then tighten prompts, tools, and journeys."}]},n0={title:"Everything that keeps sales and support moving",subtitle:"Not just chat — the ingredients of an autopilot website.",items:[{title:"Lead capture that feels human",description:"Qualify visitors in conversation and pass clean context to your team when a deal is ready."},{title:"Support that resolves",description:"Handle common issues with grounded answers and controlled actions — escalate when humans should take over."},{title:"Website publishing",description:"Ship pages that look like your brand, then embed the agent where intent is highest."},{title:"Content that fuels both SEO and agents",description:"Articles strengthen discovery and become the knowledge your agent answers from."},{title:"Guardrails and handoff",description:"Keep responses on-brand and route edge cases to people with full conversation history."},{title:"Analytics you can act on",description:"See what visitors ask, what converts, and where the agent needs better knowledge."}]},r0={title:"See the Divvylore platform in action",subtitle:"Real product screens from analytics, agents, tools, chat, leads, and billing workflows.",items:[{title:"Analytics dashboard",imageUrl:"/artifacts/analytics-dashboard.png",alt:"Analytics dashboard with response and sender metrics"},{title:"Usage and credits",imageUrl:"/artifacts/usage-credits.png",alt:"Usage and credits page with limits and progress bars"},{title:"Agent management",imageUrl:"/artifacts/agent-management.png",alt:"Agent management list and details"},{title:"Tool marketplace",imageUrl:"/artifacts/tool-marketplace.png",alt:"Tool marketplace modal with featured tools"},{title:"Live playground",imageUrl:"/artifacts/live-playground.png",alt:"Agent playground with floating live preview"},{title:"Chat history",imageUrl:"/artifacts/chat-history.png",alt:"Chat history interface with conversation threads"},{title:"Lead generation",imageUrl:"/artifacts/lead-generation.png",alt:"Lead generation contacts table"},{title:"Billing and plans",imageUrl:"/artifacts/billing-plans.png",alt:"Billing and subscription plans"},{title:"Credit center",imageUrl:"/artifacts/credit-center.png",alt:"Credit balance and transaction summary"}]},i0={title:"Built for customer-facing work",subtitle:"Tenant isolation, secure transport, and response guardrails so autopilot stays predictable.",items:[{title:"Your data stays controlled",description:"Tenant-aware design and scoped execution protect customer boundaries."},{title:"Encrypted by default",description:"Secure transport and protected service boundaries across the platform."},{title:"Guardrails for responses",description:"Policies reduce off-topic and unsafe outputs in sales and support chats."}]},l0={title:"Pricing that grows with autopilot",subtitle:"Start simple. Expand as traffic, agents, and content scale.",plans:[{name:"Starter",price:"$29",period:"/month",description:"For teams launching their first AI agent on a site.",features:["1 production agent","Portal access","Basic analytics","Email support"],highlighted:!1,ctaLabel:"Choose Starter",planCode:"starter"},{name:"Growth",price:"$99",period:"/month",description:"For teams running sales and support agents in production.",features:["5 production agents","Advanced configuration","Queue-first chat flow","Priority support"],highlighted:!0,ctaLabel:"Choose Growth",planCode:"growth"},{name:"Scale",price:"Custom",period:"",description:"For organizations that need governance and dedicated onboarding.",features:["Custom agent limits","Tenant governance","Dedicated onboarding","Architecture support"],highlighted:!1,ctaLabel:"Contact Sales",planCode:"scale"}]},o0={title:"Questions before you go live",subtitle:"Straight answers about agents, websites, and content on Divvylore.",items:[{question:"Do I need a website first, or can I start with an agent?",answer:"Either path works. Start with an agent on an existing site, launch a new site then add the agent, or begin with content that feeds both."},{question:"Is this only for support chat?",answer:"No. Divvylore covers sales and support — lead capture, resolution, website publishing, and content that keeps the agent informed."},{question:"Where do registration and login happen?",answer:"All account actions happen in app.divvylore.com."},{question:"Can we keep a human in the loop?",answer:"Yes. Escalate complex or high-stakes conversations to people with full context."}]},s0={copyright:"© 2026 Divvylore. All rights reserved.",quickLinks:[{label:"Get Started",url:"https://app.divvylore.com/register"},{label:"Login",url:"https://app.divvylore.com/login"},{label:"Pricing",url:"#pricing"}]},pe={brand:Kg,appUrls:Xg,legalUrls:qg,navigation:Zg,hero:Jg,highlights:e0,howItWorks:t0,features:n0,artifacts:r0,security:i0,pricing:l0,faq:o0,footer:s0};var V="-ms-",Pr="-moz-",F="-webkit-",Qd="comm",$l="rule",Na="decl",a0="@import",u0="@namespace",Gd="@keyframes",c0="@layer",Yd=Math.abs,za=String.fromCharCode,Ss=Object.assign;function f0(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function Kd(e){return e.trim()}function ut(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Oi(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function fn(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function Xd(e){return e.length}function hr(e,t){return t.push(e),e}function d0(e,t){return e.map(t).join("")}function Ju(e,t){return e.filter(function(n){return!ut(n,t)})}var Rl=1,Gn=1,qd=0,Ve=0,ne=0,er="";function Tl(e,t,n,r,i,l,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:Rl,column:Gn,length:o,return:"",siblings:s}}function Ct(e,t){return Ss(Tl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function gn(e){for(;e.root;)e=Ct(e.root,{children:[e]});hr(e,e.siblings)}function p0(){return ne}function h0(){return ne=Ve>0?se(er,--Ve):0,Gn--,ne===10&&(Gn=1,Rl--),ne}function et(){return ne=Ve<qd?se(er,Ve++):0,Gn++,ne===10&&(Gn=1,Rl++),ne}function Rt(){return se(er,Ve)}function Ai(){return Ve}function Ll(e,t){return fn(er,e,t)}function Qr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m0(e){return Rl=Gn=1,qd=Xe(er=e),Ve=0,[]}function g0(e){return er="",e}function fo(e){return Kd(Ll(Ve-1,Cs(e===91?e+2:e===40?e+1:e)))}function y0(e){for(;(ne=Rt())&&ne<33;)et();return Qr(e)>2||Qr(ne)>3?"":" "}function v0(e,t){for(;--t&&et()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Ll(e,Ai()+(t<6&&Rt()==32&&et()==32))}function Cs(e){for(;et();)switch(ne){case e:return Ve;case 34:case 39:e!==34&&e!==39&&Cs(ne);break;case 40:e===41&&Cs(e);break;case 92:et();break}return Ve}function w0(e,t){for(;et()&&e+ne!==57;)if(e+ne===84&&Rt()===47)break;return"/*"+Ll(t,Ve-1)+"*"+za(e===47?e:et())}function x0(e){for(;!Qr(Rt());)et();return Ll(e,Ve)}function k0(e){return g0(Mi("",null,null,null,[""],e=m0(e),0,[0],e))}function Mi(e,t,n,r,i,l,o,s,a){for(var u=0,h=0,d=o,g=0,y=0,v=0,w=1,P=1,p=1,c=0,m="",k=i,E=l,_=r,S=m;P;)switch(v=c,c=et()){case 40:if(v!=108&&se(S,d-1)==58){Oi(S+=I(fo(c),"&","&\f"),"&\f",Yd(u?s[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:S+=fo(c);break;case 9:case 10:case 13:case 32:S+=y0(v);break;case 92:S+=v0(Ai()-1,7);continue;case 47:switch(Rt()){case 42:case 47:hr(S0(w0(et(),Ai()),t,n,a),a),(Qr(v||1)==5||Qr(Rt()||1)==5)&&Xe(S)&&fn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*w:s[u++]=Xe(S)*p;case 125*w:case 59:case 0:switch(c){case 0:case 125:P=0;case 59+h:p==-1&&(S=I(S,/\f/g,"")),y>0&&(Xe(S)-d||w===0&&v===47)&&hr(y>32?tc(S+";",r,n,d-1,a):tc(I(S," ","")+";",r,n,d-2,a),a);break;case 59:S+=";";default:if(hr(_=ec(S,t,n,u,h,i,s,m,k=[],E=[],d,l),l),c===123)if(h===0)Mi(S,t,_,_,k,l,d,s,E);else{switch(g){case 99:if(se(S,3)===110)break;case 108:if(se(S,2)===97)break;default:h=0;case 100:case 109:case 115:}h?Mi(e,_,_,r&&hr(ec(e,_,_,0,0,i,s,m,i,k=[],d,E),E),i,E,d,s,r?k:E):Mi(S,_,_,_,[""],E,0,s,E)}}u=h=y=0,w=p=1,m=S="",d=o;break;case 58:d=1+Xe(S),y=v;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&h0()==125)continue}switch(S+=za(c),c*w){case 38:p=h>0?1:(S+="\f",-1);break;case 44:s[u++]=(Xe(S)-1)*p,p=1;break;case 64:Rt()===45&&(S+=fo(et())),g=Rt(),h=d=Xe(m=S+=x0(Ai())),c++;break;case 45:v===45&&Xe(S)==2&&(w=0)}}return l}function ec(e,t,n,r,i,l,o,s,a,u,h,d){for(var g=i-1,y=i===0?l:[""],v=Xd(y),w=0,P=0,p=0;w<r;++w)for(var c=0,m=fn(e,g+1,g=Yd(P=o[w])),k=e;c<v;++c)(k=Kd(P>0?y[c]+" "+m:I(m,/&\f/g,y[c])))&&(a[p++]=k);return Tl(e,t,n,i===0?$l:s,a,u,h,d)}function S0(e,t,n,r){return Tl(e,t,n,Qd,za(p0()),fn(e,2,-2),0,r)}function tc(e,t,n,r,i){return Tl(e,t,n,Na,fn(e,0,r),fn(e,r+1,-1),r,i)}function Zd(e,t,n){switch(f0(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return F+e+e;case 4855:return F+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Pr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Pr+e+V+e+e;case 5936:switch(se(e,t+11)){case 114:return F+e+V+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+V+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+V+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+V+e+e;case 6165:return F+e+V+"flex-"+e+e;case 5187:return F+e+I(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return F+e+V+"flex-item-"+I(e,/flex-|-self/g,"")+(ut(e,/flex-|baseline/)?"":V+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return F+e+V+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+V+I(e,"shrink","negative")+e;case 5292:return F+e+V+I(e,"basis","preferred-size")+e;case 6060:return F+"box-"+I(e,"-grow","")+F+e+V+I(e,"grow","positive")+e;case 4554:return F+I(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+V+"flex-pack:$3"),/space-between/,"justify")+F+e+e;case 4200:if(!ut(e,/flex-|baseline/))return V+"grid-column-align"+fn(e,t)+e;break;case 2592:case 3360:return V+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ut(r.props,/grid-\w+-end/)})?~Oi(e+(n=n[t].value),"span",0)?e:V+I(e,"-start","")+e+V+"grid-row-span:"+(~Oi(n,"span",0)?ut(n,/\d+/):+ut(n,/\d+/)-+ut(e,/\d+/))+";":V+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ut(r.props,/grid-\w+-start/)})?e:V+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Pr+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Oi(e,"stretch",0)?Zd(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,l,o,s,a,u){return V+i+":"+l+u+(o?V+i+"-span:"+(s?a:+a-+l)+u:"")+e});case 4949:if(se(e,t+6)===121)return I(e,":",":"+F)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(se(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+V+"$2box$3")+e;case 100:return I(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function fl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function C0(e,t,n,r){switch(e.type){case c0:if(e.children.length)break;case a0:case u0:case Na:return e.return=e.return||e.value;case Qd:return"";case Gd:return e.return=e.value+"{"+fl(e.children,r)+"}";case $l:if(!Xe(e.value=e.props.join(",")))return""}return Xe(n=fl(e.children,r))?e.return=e.value+"{"+n+"}":""}function E0(e){var t=Xd(e);return function(n,r,i,l){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,l)||"";return o}}function P0(e){return function(t){t.root||(t=t.return)&&e(t)}}function j0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Na:e.return=Zd(e.value,e.length,n);return;case Gd:return fl([Ct(e,{value:I(e.value,"@","@"+F)})],r);case $l:if(e.length)return d0(n=e.props,function(i){switch(ut(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gn(Ct(e,{props:[I(i,/:(read-\w+)/,":"+Pr+"$1")]})),gn(Ct(e,{props:[i]})),Ss(e,{props:Ju(n,r)});break;case"::placeholder":gn(Ct(e,{props:[I(i,/:(plac\w+)/,":"+F+"input-$1")]})),gn(Ct(e,{props:[I(i,/:(plac\w+)/,":"+Pr+"$1")]})),gn(Ct(e,{props:[I(i,/:(plac\w+)/,V+"input-$1")]})),gn(Ct(e,{props:[i]})),Ss(e,{props:Ju(n,r)});break}return""})}}var Dn={},po,ho;const Yn=typeof process<"u"&&Dn!==void 0&&(Dn.REACT_APP_SC_ATTR||Dn.SC_ATTR)||"data-styled",Jd="active",ep="data-styled-version",Il="6.4.2",$a=`/*!sc*/
`,jr=typeof window<"u"&&typeof document<"u";function nc(e){if(typeof process<"u"&&Dn!==void 0){const t=Dn[e];if(t!==void 0&&t!=="")return t!=="false"}}const _0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(ho=(po=nc("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&po!==void 0?po:nc("SC_DISABLE_SPEEDY"))!==null&&ho!==void 0?ho:typeof process<"u"&&Dn!==void 0&&!1),N0="sc-keyframes-",z0={};function Ol(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let Fi=new Map,dl=new Map,Di=1;const Si=e=>{if(Fi.has(e))return Fi.get(e);for(;dl.has(Di);)Di++;const t=Di++;return Fi.set(e,t),dl.set(t,e),t},$0=e=>dl.get(e),R0=(e,t)=>{Di=t+1,Fi.set(e,t),dl.set(t,e)},Ra=Object.freeze([]),Kn=Object.freeze({});function tp(e,t,n=Kn){return e.theme!==n.theme&&e.theme||t||n.theme}const T0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,L0=/(^-|-$)/g;function np(e){return e.replace(T0,"-").replace(L0,"")}const I0=/(a)(d)/gi,rc=e=>String.fromCharCode(e+(e>25?39:97));function rp(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=rc(t%52)+n;return(rc(t%52)+n).replace(I0,"$1-$2")}const Es=5381,ln=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ip=e=>ln(Es,e);function lp(e){return rp(ip(e)>>>0)}function O0(e){return e.displayName||e.name||"Component"}function Ps(e){return typeof e=="string"&&!0}function A0(e){return Ps(e)?`styled.${e}`:`Styled(${O0(e)})`}const op=Symbol.for("react.memo"),M0=Symbol.for("react.forward_ref"),F0={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},D0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},U0={[M0]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[op]:sp};function ic(e){return("type"in(t=e)&&t.type.$$typeof)===op?sp:"$$typeof"in e?U0[e.$$typeof]:F0;var t}const B0=Object.defineProperty,W0=Object.getOwnPropertyNames,b0=Object.getOwnPropertySymbols,V0=Object.getOwnPropertyDescriptor,H0=Object.getPrototypeOf,Q0=Object.prototype;function ap(e,t,n){if(typeof t!="string"){const r=H0(t);r&&r!==Q0&&ap(e,r,n);const i=W0(t).concat(b0(t)),l=ic(e),o=ic(t);for(let s=0;s<i.length;++s){const a=i[s];if(!(a in D0||n&&n[a]||o&&a in o||l&&a in l)){const u=V0(t,a);try{B0(e,a,u)}catch{}}}}return e}function ni(e){return typeof e=="function"}const G0=Symbol.for("react.forward_ref");function Ta(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===G0&&"styledComponentId"in e}function mr(e,t){return e&&t?e+" "+t:e||t||""}function js(e,t){return e.join("")}function Gr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _s(e,t,n=!1){if(!n&&!Gr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=_s(e[r],t[r]);else if(Gr(t))for(const r in t)e[r]=_s(e[r],t[r]);return e}function up(e,t){Object.defineProperty(e,"toString",{value:t})}const Y0=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const i=this.groupSizes,l=i.length;let o=l;for(;e>=o;)if(o<<=1,o<0)throw Ol(16,`${e}`);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(let s=l;s<o;s++)this.groupSizes[s]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,l=t.length;i<l;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let l=r;l<i;l++)t+=this.tag.getRule(l)+$a;return t}},K0=`style[${Yn}][${ep}="${Il}"]`,X0=new RegExp(`^${Yn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),lc=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Ns=e=>{if(!e)return document;if(lc(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(lc(t))return t}return document},q0=(e,t,n)=>{const r=n.split(",");let i;for(let l=0,o=r.length;l<o;l++)(i=r[l])&&e.registerName(t,i)},Z0=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split($a),i=[];for(let l=0,o=r.length;l<o;l++){const s=r[l].trim();if(!s)continue;const a=s.match(X0);if(a){const u=0|parseInt(a[1],10),h=a[2];u!==0&&(R0(h,u),q0(e,h,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}},mo=e=>{const t=Ns(e.options.target).querySelectorAll(K0);for(let n=0,r=t.length;n<r;n++){const i=t[n];i&&i.getAttribute(Yn)!==Jd&&(Z0(e,i),i.parentNode&&i.parentNode.removeChild(i))}};let ur=!1;function J0(){if(ur!==!1)return ur;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ur=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return ur=t.getAttribute("content")||void 0}return ur=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const cp=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),l=(a=>{const u=Array.from(a.querySelectorAll(`style[${Yn}]`));return u[u.length-1]})(r),o=l!==void 0?l.nextSibling:null;i.setAttribute(Yn,Jd),i.setAttribute(ep,Il);const s=t||J0();return s&&i.setAttribute("nonce",s),r.insertBefore(i,o),i},e1=class{constructor(e,t){this.element=cp(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let l=0,o=i.length;l<o;l++){const s=i[l];if(s.ownerNode===n)return s}throw Ol(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},t1=class{constructor(e,t){this.element=cp(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let oc=jr;const n1={isServer:!jr,useCSSOMInjection:!_0};class ri{static registerId(t){return Si(t)}constructor(t=Kn,n={},r){this.options=Object.assign(Object.assign({},n1),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&jr&&oc&&(oc=!1,mo(this)),up(this,()=>(i=>{const l=i.getTag(),{length:o}=l;let s="";for(let a=0;a<o;a++){const u=$0(a);if(u===void 0)continue;const h=i.names.get(u);if(h===void 0||!h.size)continue;const d=l.getGroup(a);if(d.length===0)continue;const g=Yn+".g"+a+'[id="'+u+'"]';let y="";for(const v of h)v.length>0&&(y+=v+",");s+=d+g+'{content:"'+y+'"}'+$a}return s})(this))}rehydrate(){!this.server&&jr&&mo(this)}reconstructWithOptions(t,n=!0){const r=new ri(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&jr&&t.target!==this.options.target&&Ns(this.options.target)!==Ns(t.target)&&mo(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:i})=>n?new e1(r,i):new t1(r,i))(this.options),new Y0(t)));var t}hasNameForId(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i}registerName(t,n){Si(t),t.startsWith(N0)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Si(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Si(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const fp=new WeakSet,r1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function i1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in r1||e.startsWith("--")?String(t).trim():t+"px"}const qt=47;function sc(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const l1=Symbol.for("sc-keyframes");function o1(e){return typeof e=="object"&&e!==null&&l1 in e}function dp(e){return ni(e)&&!(e.prototype&&e.prototype.isReactComponent)}const pp=e=>e==null||e===!1||e==="",s1=Symbol.for("react.client.reference");function ac(e){return e.$$typeof===s1}function hp(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!pp(r)&&(Array.isArray(r)&&fp.has(r)||ni(r)?t.push(sc(n)+":",r,";"):Gr(r)?(t.push(n+" {"),hp(r,t),t.push("}")):t.push(sc(n)+": "+i1(n,r)+";"))}}function Ut(e,t,n,r,i=[]){if(pp(e))return i;const l=typeof e;if(l==="string")return i.push(e),i;if(l==="function"){if(ac(e))return i;if(dp(e)&&t){const o=e(t);return Ut(o,t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let o=0;o<e.length;o++)Ut(e[o],t,n,r,i);return i}return Ta(e)?(i.push(`.${e.styledComponentId}`),i):o1(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):ac(e)?i:Gr(e)?e.toString!==Object.prototype.toString?(i.push(e.toString()),i):(hp(e,i),i):(i.push(e.toString()),i)}const a1=ip(Il);class u1{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=ln(a1,n),this.baseStyle=r,ri.registerId(n)}generateAndInjectStyles(t,n,r){let i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let l="";for(let o=0;o<this.rules.length;o++){const s=this.rules[o];if(typeof s=="string")l+=s;else if(s)if(dp(s)){const a=s(t);typeof a=="string"?l+=a:a!=null&&a!==!1&&(l+=js(Ut(a,t,n,r)))}else l+=js(Ut(s,t,n,r))}if(l){this.dynamicNameCache||(this.dynamicNameCache=new Map);const o=r.hash?r.hash+l:l;let s=this.dynamicNameCache.get(o);if(!s){if(s=rp(ln(ln(this.baseHash,r.hash),l)>>>0),this.dynamicNameCache.size>=200){const a=this.dynamicNameCache.keys().next().value;a!==void 0&&this.dynamicNameCache.delete(a)}this.dynamicNameCache.set(o,s)}if(!n.hasNameForId(this.componentId,s)){const a=r(l,"."+s,void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=mr(i,s)}}return i}}const c1=/&/g;function mp(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function go(e){const t=e.length;let n="",r=0,i=0,l=0,o=!1,s=!1;for(let a=0;a<t;a++){const u=e.charCodeAt(a);if(l!==0||o||u!==qt||e.charCodeAt(a+1)!==42)if(o)u===42&&e.charCodeAt(a+1)===qt&&(o=!1,a++);else if(u!==34&&u!==39||mp(e,a)){if(l===0)if(u===123)i++;else if(u===125){if(i--,i<0){s=!0;let h=a+1;for(;h<t;){const d=e.charCodeAt(h);if(d===59||d===10)break;h++}h<t&&e.charCodeAt(h)===59&&h++,i=0,a=h-1,r=h;continue}i===0&&(n+=e.substring(r,a+1),r=a+1)}else u===59&&i===0&&(n+=e.substring(r,a+1),r=a+1)}else l===0?l=u:l===u&&(l=0);else o=!0,a++}return s||i!==0||l!==0?(r<t&&i===0&&l===0&&(n+=e.substring(r)),n):e}function gp(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const l=e[i];if(l.type==="rule"){l.value=(n+l.value).replaceAll(",",r);const o=l.props,s=[];for(let a=0;a<o.length;a++)s[a]=n+o[a];l.props=s}Array.isArray(l.children)&&l.type!=="@keyframes"&&gp(l.children,t)}return e}function f1({options:e=Kn,plugins:t=Ra}=Kn){let n,r,i;const l=(g,y,v)=>v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?`.${n}`:g,o=t.slice();o.push(g=>{g.type===$l&&g.value.includes("&")&&(i||(i=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(c1,r).replace(i,l))}),e.prefix&&o.push(j0),o.push(C0);let s=[];const a=E0(o.concat(P0(g=>s.push(g)))),u=(g,y="",v="",w="&")=>{n=w,r=y,i=void 0;const P=function(c){const m=c.indexOf("//")!==-1,k=c.indexOf("}")!==-1;if(!m&&!k)return c;if(!m)return go(c);const E=c.length;let _="",S=0,j=0,D=0,L=0,Q=0,He=!1;for(;j<E;){const q=c.charCodeAt(j);if(q!==34&&q!==39||mp(c,j))if(D===0)if(q===qt&&j+1<E&&c.charCodeAt(j+1)===42){for(j+=2;j+1<E&&(c.charCodeAt(j)!==42||c.charCodeAt(j+1)!==qt);)j++;j+=2}else if(q!==40)if(q!==41)if(L>0)j++;else if(q===42&&j+1<E&&c.charCodeAt(j+1)===qt)_+=c.substring(S,j),j+=2,S=j,He=!0;else if(q===qt&&j+1<E&&c.charCodeAt(j+1)===qt){for(_+=c.substring(S,j);j<E&&c.charCodeAt(j)!==10;)j++;S=j,He=!0}else q===123?Q++:q===125&&Q--,j++;else L>0&&L--,j++;else L++,j++;else j++;else D===0?D=q:D===q&&(D=0),j++}return He?(S<E&&(_+=c.substring(S)),Q===0?_:go(_)):Q===0?c:go(c)}(g);let p=k0(v||y?v+" "+y+" { "+P+" }":P);return e.namespace&&(p=gp(p,e.namespace)),s=[],fl(p,a),s},h=e;let d=Es;for(let g=0;g<t.length;g++)t[g].name||Ol(15),d=ln(d,t[g].name);return h?.namespace&&(d=ln(d,h.namespace)),h?.prefix&&(d=ln(d,"p")),u.hash=d!==Es?d.toString():"",u}const d1=new ri,p1=f1(),yp=Re.createContext({shouldForwardProp:void 0,styleSheet:d1,stylis:p1,stylisPlugins:void 0});yp.Consumer;function vp(){return Re.useContext(yp)}const La=Re.createContext(void 0);La.Consumer;const uc=Object.prototype.hasOwnProperty,yo={};function h1(e,t){const n=typeof e!="string"?"sc":np(e);yo[n]=(yo[n]||0)+1;const r=n+"-"+lp(Il+n+yo[n]);return t?t+"-"+r:r}function m1(e,t,n){const r=Ta(e),i=e,l=!Ps(e),{attrs:o=Ra,componentId:s=h1(t.displayName,t.parentComponentId),displayName:a=A0(e)}=t,u=t.displayName&&t.componentId?np(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o;let{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){const w=i.shouldForwardProp;if(t.shouldForwardProp){const P=t.shouldForwardProp;d=(p,c)=>w(p,c)&&P(p,c)}else d=w}const g=new u1(n,u,r?i.componentStyle:void 0);function y(w,P){return function(p,c,m){const{attrs:k,componentStyle:E,defaultProps:_,foldedComponentIds:S,styledComponentId:j,target:D}=p,L=Re.useContext(La),Q=vp(),He=p.shouldForwardProp||Q.shouldForwardProp,q=tp(c,L,_)||Kn;let Qe,Qt;{const R=Re.useRef(null),T=R.current;if(T!==null&&T[1]===q&&T[2]===Q.styleSheet&&T[3]===Q.stylis&&T[7]===E&&function(B,M,le){const Z=B,te=M;let ze=0;for(const Me in te)if(uc.call(te,Me)&&(ze++,Z[Me]!==te[Me]))return!1;return ze===le}(T[0],c,T[4]))Qe=T[5],Qt=T[6];else{Qe=function(M,le,Z){const te=Object.assign(Object.assign({},le),{className:void 0,theme:Z}),ze=M.length>1;for(let Me=0;Me<M.length;Me++){const Ml=M[Me],ii=ni(Ml)?Ml(ze?Object.assign({},te):te):Ml;for(const kt in ii)kt==="className"?te.className=mr(te.className,ii[kt]):kt==="style"?te.style=Object.assign(Object.assign({},te.style),ii[kt]):kt in le&&le[kt]===void 0||(te[kt]=ii[kt])}return"className"in le&&typeof le.className=="string"&&(te.className=mr(te.className,le.className)),te}(k,c,q),Qt=function(M,le,Z,te){return M.generateAndInjectStyles(le,Z,te)}(E,Qe,Q.styleSheet,Q.stylis);let B=0;for(const M in c)uc.call(c,M)&&B++;R.current=[c,q,Q.styleSheet,Q.stylis,B,Qe,Qt,E]}}const xt=Qe.as||D,Gt=function(R,T,B,M){const le={};for(const Z in R)R[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&R.theme===B||(Z==="forwardedAs"?le.as=R.forwardedAs:M&&!M(Z,T)||(le[Z]=R[Z]));return le}(Qe,xt,q,He);let z=mr(S,j);return Qt&&(z+=" "+Qt),Qe.className&&(z+=" "+Qe.className),Gt[Ps(xt)&&xt.includes("-")?"class":"className"]=z,m&&(Gt.ref=m),N.createElement(xt,Gt)}(v,w,P)}y.displayName=a;let v=Re.forwardRef(y);return v.attrs=h,v.componentStyle=g,v.displayName=a,v.shouldForwardProp=d,v.foldedComponentIds=r?mr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=u,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get(){return this._foldedDefaultProps},set(w){this._foldedDefaultProps=r?function(P,...p){for(const c of p)_s(P,c,!0);return P}({},i.defaultProps,w):w}}),up(v,()=>`.${v.styledComponentId}`),l&&ap(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}var g1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function cc(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const fc=e=>(fp.add(e),e);function Yr(e,...t){if(ni(e)||Gr(e))return fc(Ut(cc(Ra,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Ut(n):fc(Ut(cc(n,t)))}function zs(e,t,n=Kn){if(!t)throw Ol(1,t);const r=(i,...l)=>e(t,n,Yr(i,...l));return r.attrs=i=>zs(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)})),r.withConfig=i=>zs(e,t,Object.assign(Object.assign({},n),i)),r}const wp=e=>zs(m1,e),x=wp;g1.forEach(e=>{x[e]=wp(e)});class y1{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let i=0;i<r.length;i+=1){const l=r[i];if(ni(l)&&!Ta(l))return!1}return!0}(t),ri.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,i){const l=this.componentId;if(this.isStatic){if(r.hasNameForId(l,l+t))this.instanceRules.has(t)||this.computeRules(t,n,r,i);else{const s=this.computeRules(t,n,r,i);r.insertRules(l,s.name,s.rules)}return}const o=this.instanceRules.get(t);if(this.computeRules(t,n,r,i),!r.server&&o){const s=o.rules,a=this.instanceRules.get(t).rules;if(s.length===a.length){let u=!0;for(let h=0;h<s.length;h++)if(s[h]!==a[h]){u=!1;break}if(u)return}}this.rebuildGroup(r)}computeRules(t,n,r,i){const l=js(Ut(this.rules,n,r,i)),o={name:this.componentId+t,rules:i(l,"")};return this.instanceRules.set(t,o),o}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function v1(e,...t){const n=Yr(e,...t),r=`sc-global-${lp(JSON.stringify(n))}`,i=new y1(n,r),l=s=>{const a=vp(),u=Re.useContext(La);let h;{const d=Re.useRef(null);d.current===null&&(d.current=a.styleSheet.allocateGSInstance(r)),h=d.current}a.styleSheet.server&&o(h,s,a.styleSheet,u,a.stylis);{const d=i.isStatic?[h,a.styleSheet,i]:[h,s,a.styleSheet,u,a.stylis,i],g=Re.useRef(i);Re.useLayoutEffect(()=>{a.styleSheet.server||(g.current!==i&&(a.styleSheet.clearRules(r),g.current=i),o(h,s,a.styleSheet,u,a.stylis))},d),Re.useLayoutEffect(()=>()=>{a.styleSheet.server||i.removeStyles(h,a.styleSheet)},[h,a.styleSheet,i])}return a.styleSheet.server&&i.instanceRules.delete(h),null};function o(s,a,u,h,d){if(i.isStatic)i.renderStyles(s,z0,u,d);else{const g=Object.assign(Object.assign({},a),{theme:tp(a,h,l.defaultProps)});i.renderStyles(s,g,u,d)}}return Re.memo(l)}const w1=x.footer`
  background: #061218;
  color: rgba(243, 247, 249, 0.72);
  padding: 4rem 1.5rem 2.4rem;
`,x1=x.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 1.1fr) 2fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,k1=x.div`
  display: grid;
  gap: 1rem;
  align-content: start;
`,S1=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #ffffff;
`,C1=x.img`
  width: 34px;
  height: 34px;
`,E1=x.span`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  color: #ffffff;
  letter-spacing: 0.14em;
  line-height: 1;
`,P1=x.p`
  margin: 0;
  color: rgba(243, 247, 249, 0.55);
  line-height: 1.65;
  max-width: 340px;
`,j1=x.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 1.6rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,vo=x.div`
  display: grid;
  gap: 0.55rem;
  align-content: start;
`,wo=x.h4`
  margin: 0 0 0.4rem;
  color: #ffffff;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
`,fe=x.a`
  color: rgba(243, 247, 249, 0.62);
  font-size: 0.95rem;
  line-height: 1.5;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`,_1=x.div`
  max-width: 1180px;
  margin: 3rem auto 0;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(243, 247, 249, 0.08);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  color: rgba(243, 247, 249, 0.42);
  font-size: 0.85rem;
`,N1=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,z1=()=>{const e=typeof window<"u"?window.location.hostname:"divvylore.com",t=`${pe.appUrls.register}?source=${encodeURIComponent(e)}&placement=footer`,n=`${pe.appUrls.login}?source=${encodeURIComponent(e)}&placement=footer`,r=pe.legalUrls.privacyPolicy,i=pe.legalUrls.termsAndConditions,l=pe.legalUrls.refundPolicy;return f.jsxs(w1,{children:[f.jsxs(x1,{children:[f.jsxs(k1,{children:[f.jsxs(S1,{href:"/","aria-label":"Divvylore home",children:[f.jsx(C1,{src:"/img/svg/logo.svg",alt:""}),f.jsx(E1,{children:"DIVVYLORE"})]}),f.jsx(P1,{children:pe.brand.tagline})]}),f.jsxs(j1,{children:[f.jsxs(vo,{children:[f.jsx(wo,{children:"Product"}),f.jsx(fe,{href:"#product",children:"Product"}),f.jsx(fe,{href:"#how-it-works",children:"How it works"}),f.jsx(fe,{href:"#capabilities",children:"Capabilities"}),f.jsx(fe,{href:"#security",children:"Security"}),f.jsx(fe,{href:"#pricing",children:"Pricing"})]}),f.jsxs(vo,{children:[f.jsx(wo,{children:"Resources"}),f.jsx(fe,{href:"#faq",children:"FAQ"}),f.jsx(fe,{href:pe.appUrls.base,children:"Customer portal"}),f.jsx(fe,{href:t,children:"Create account"}),f.jsx(fe,{href:n,children:"Sign in"}),f.jsx(fe,{href:"mailto:hello@divvylore.com",children:"Contact"})]}),f.jsxs(vo,{children:[f.jsx(wo,{children:"Company"}),f.jsx(fe,{href:pe.appUrls.base,children:"About"}),f.jsx(fe,{href:r,children:"Privacy policy"}),f.jsx(fe,{href:i,children:"Terms and conditions"}),f.jsx(fe,{href:l,children:"Refund policy"})]})]})]}),f.jsxs(_1,{children:[f.jsx("span",{children:pe.footer.copyright}),f.jsxs(N1,{children:[f.jsx(fe,{href:r,children:"Privacy"}),f.jsx(fe,{href:i,children:"Terms"}),f.jsx(fe,{href:l,children:"Refunds"})]})]})]})},$1=x.header`
  position: sticky;
  top: 0;
  z-index: 120;
  background: rgba(7, 21, 28, 0.78);
  backdrop-filter: saturate(140%) blur(16px);
  border-bottom: 1px solid rgba(243, 247, 249, 0.08);
  color: #f3f7f9;
`,R1=x.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 700px) {
    padding: 0.65rem 1.1rem;
  }
`,T1=x.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #f3f7f9;
  flex-shrink: 0;
`,L1=x.img`
  width: 34px;
  height: 34px;
  display: block;
`,I1=x.span`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.14em;
  color: #f3f7f9;
  line-height: 1;
`,O1=x.nav`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-left: 0.4rem;

  @media (max-width: 960px) {
    display: none;
  }
`,Ui=x.a`
  font-size: 0.92rem;
  font-weight: 550;
  color: rgba(243, 247, 249, 0.72);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: color 0.15s ease, background-color 0.15s ease;

  &:hover {
    color: #ffffff;
    background-color: rgba(243, 247, 249, 0.08);
  }
`,A1=x.div`
  flex: 1;
`,M1=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,F1=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.45rem 0.9rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 650;
  color: #f3f7f9;
  background: transparent;

  &:hover {
    background: rgba(243, 247, 249, 0.08);
  }

  @media (max-width: 480px) {
    display: none;
  }
`,D1=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 650;
  color: #0b1c24;
  background: #f3f7f9;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: #ffffff;
  }
`,U1=x.button`
  display: none;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(243, 247, 249, 0.16);
  background: transparent;
  color: #f3f7f9;
  cursor: pointer;

  @media (max-width: 960px) {
    display: inline-flex;
  }
`,B1=x.div`
  display: ${e=>e.open?"grid":"none"};
  gap: 0.3rem;
  padding: 0.5rem 1.1rem 1rem;
  border-bottom: 1px solid rgba(243, 247, 249, 0.08);
  background: #07151c;

  ${Ui} {
    padding: 0.7rem 0.8rem;
    border-radius: 10px;
    font-size: 1rem;
  }

  @media (min-width: 961px) {
    display: none;
  }
`,W1=()=>{const[e,t]=N.useState(!1),n=typeof window<"u"?window.location.hostname:"divvylore.com",r=`${pe.appUrls.register}?source=${encodeURIComponent(n)}&placement=header`,i=`${pe.appUrls.login}?source=${encodeURIComponent(n)}&placement=header`;return f.jsxs($1,{children:[f.jsxs(R1,{children:[f.jsxs(T1,{href:"/","aria-label":"Divvylore home",children:[f.jsx(L1,{src:"/img/svg/logo.svg",alt:""}),f.jsx(I1,{children:"DIVVYLORE"})]}),f.jsx(O1,{children:pe.navigation.map(l=>f.jsx(Ui,{href:l.href,children:l.label},l.label))}),f.jsx(A1,{}),f.jsxs(M1,{children:[f.jsx(F1,{href:i,children:"Sign in"}),f.jsx(D1,{href:r,children:"Get started"}),f.jsx(U1,{type:"button","aria-label":"Toggle menu","aria-expanded":e,onClick:()=>t(l=>!l),children:f.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:f.jsx("path",{d:"M2 4.5h14M2 9h14M2 13.5h14",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})})})]})]}),f.jsxs(B1,{open:e,children:[pe.navigation.map(l=>f.jsx(Ui,{href:l.href,onClick:()=>t(!1),children:l.label},`m-${l.label}`)),f.jsx(Ui,{href:i,onClick:()=>t(!1),children:"Sign in"})]})]})};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=e=>{const t=V1(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Q1=N.createContext({}),G1=()=>N.useContext(Q1),Y1=N.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:l,iconNode:o,...s},a)=>{const{size:u=24,strokeWidth:h=2,absoluteStrokeWidth:d=!1,color:g="currentColor",className:y=""}=G1()??{},v=r??d?Number(n??h)*24/Number(t??u):n??h;return N.createElement("svg",{ref:a,...xo,width:t??u??xo.width,height:t??u??xo.height,stroke:e??g,strokeWidth:v,className:xp("lucide",y,i),...!l&&!H1(s)&&{"aria-hidden":"true"},...s},[...o.map(([w,P])=>N.createElement(w,P)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(e,t)=>{const n=N.forwardRef(({className:r,...i},l)=>N.createElement(Y1,{ref:l,iconNode:t,className:xp(`lucide-${b1(dc(e))}`,`lucide-${e}`,r),...i}));return n.displayName=dc(e),n};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],pc=wt("arrow-right",K1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],q1=wt("circle-check",X1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],J1=wt("earth",Z1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ty=wt("file-text",ey);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ry=wt("message-square",ny);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ly=wt("plus",iy);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],kp=wt("shield-check",oy);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ay=wt("sparkles",sy);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],cy=wt("zap",uy),fy=x.main`
  color: var(--text-primary);
`,st=x.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 700px) {
    padding: 0 1.1rem;
  }
`,dy=x.section`
  position: relative;
  min-height: min(100vh, 980px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(5.5rem, 12vw, 7.5rem) 0 0;
  overflow: hidden;
  background: var(--bg-hero);
  color: var(--text-on-dark);

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    background:
      radial-gradient(ellipse 70% 55% at 18% 20%, rgba(15, 143, 123, 0.38), transparent 58%),
      radial-gradient(ellipse 55% 50% at 88% 12%, rgba(217, 119, 6, 0.22), transparent 52%),
      radial-gradient(ellipse 80% 60% at 50% 100%, rgba(15, 143, 123, 0.18), transparent 55%),
      linear-gradient(180deg, #07151c 0%, #0b2430 48%, #10363d 100%);
    animation: drift 18s ease-in-out infinite;
  }

  &::after {
    background-image:
      linear-gradient(rgba(243, 247, 249, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(243, 247, 249, 0.04) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.55), transparent 78%);
    opacity: 0.55;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,py=x.p`
  margin: 0 0 1.1rem;
  font-family: var(--font-display);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(243, 247, 249, 0.72);
  animation: rise 0.55s ease both;
`,hy=x.h1`
  margin: 0;
  max-width: 16ch;
  font-size: clamp(2.35rem, 7.2vw, 4.55rem);
  line-height: 1.02;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--text-on-dark);
  animation: rise 0.6s ease 0.04s both;

  em {
    font-style: normal;
    color: #5eead4;
  }
`,my=x.p`
  margin: 1.35rem 0 0;
  max-width: 38rem;
  font-size: clamp(1.05rem, 2.1vw, 1.22rem);
  line-height: 1.6;
  color: rgba(243, 247, 249, 0.78);
  animation: rise 0.6s ease 0.08s both;
`,gy=x.div`
  margin-top: 1.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  animation: rise 0.6s ease 0.12s both;
`,Ia=Yr`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 48px;
  padding: 0.7rem 1.35rem;
  border-radius: var(--radius-sm);
  font-size: 0.98rem;
  font-weight: 650;
  transition: transform 0.16s ease, background 0.16s ease, border-color 0.16s ease;
`,Sp=x.a`
  ${Ia};
  color: var(--bg-ink);
  background: #f3f7f9;

  &:hover {
    transform: translateY(-2px);
    background: #ffffff;
  }
`,yy=x.a`
  ${Ia};
  color: var(--text-on-dark);
  background: transparent;
  border: 1px solid rgba(243, 247, 249, 0.28);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(243, 247, 249, 0.55);
    background: rgba(243, 247, 249, 0.06);
  }
`,vy=x.div`
  margin-top: clamp(2.8rem, 7vw, 4.2rem);
  width: 100%;
  animation: rise 0.75s ease 0.16s both;
`,wy=x.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  border-top: 1px solid rgba(243, 247, 249, 0.1);
  background:
    linear-gradient(180deg, rgba(7, 21, 28, 0.2), rgba(7, 21, 28, 0.75)),
    linear-gradient(135deg, #0d2a32 0%, #123f45 45%, #0b1c24 100%);
`,xy=x.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: clamp(1.4rem, 3vw, 2rem) 1.5rem clamp(1.8rem, 4vw, 2.6rem);
  display: grid;
  grid-template-columns: 1.35fr 0.95fr;
  gap: 1.2rem;
  align-items: stretch;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }
`,ky=x.div`
  border: 1px solid rgba(243, 247, 249, 0.12);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background: #f7fafb;
  color: var(--text-primary);
  overflow: hidden;
  min-height: 320px;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 0 -20px 60px rgba(0, 0, 0, 0.28);
`,Sy=x.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.75rem 1rem;
  background: #e8eef1;
  border-bottom: 1px solid rgba(11, 28, 36, 0.08);
`,ko=x.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${e=>e.color||"#94a3b8"};
`,Cy=x.span`
  margin-left: 0.5rem;
  flex: 1;
  min-width: 0;
  padding: 0.35rem 0.7rem;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(11, 28, 36, 0.08);
  font-size: 0.78rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ey=x.div`
  position: relative;
  padding: clamp(1.2rem, 3vw, 1.8rem);
  display: grid;
  align-content: start;
  gap: 0.85rem;
  background:
    radial-gradient(circle at 85% 20%, rgba(15, 143, 123, 0.12), transparent 40%),
    linear-gradient(180deg, #f7fafb, #eef4f6);
`,Py=x.span`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brand-strong);
`,jy=x.h3`
  margin: 0;
  max-width: 16ch;
  font-size: clamp(1.45rem, 3vw, 2rem);
  line-height: 1.1;
  color: var(--text-primary);
`,_y=x.p`
  margin: 0;
  max-width: 34ch;
  font-size: 0.95rem;
  color: var(--text-secondary);
`,Ny=x.div`
  justify-self: end;
  width: min(100%, 280px);
  margin-top: 0.4rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(11, 28, 36, 0.1);
  background: #ffffff;
  box-shadow: 0 18px 40px -20px rgba(11, 28, 36, 0.35);
  overflow: hidden;
`,zy=x.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.75rem 0.9rem;
  background: var(--bg-ink);
  color: #ffffff;
`,$y=x.span`
  width: 30px;
  height: 30px;
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f8f7b, #0b6f60);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.82rem;
`,Ry=x.div`
  display: grid;
  gap: 0.1rem;
`,Ty=x.strong`
  font-size: 0.84rem;
  font-weight: 650;
`,Ly=x.span`
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #5eead4;
  font-weight: 700;
`,Iy=x.div`
  padding: 0.85rem;
  display: grid;
  gap: 0.55rem;
`,So=x.div`
  align-self: ${e=>e.side==="out"?"end":"start"};
  max-width: 94%;
  padding: 0.65rem 0.8rem;
  border-radius: 12px;
  font-size: 0.86rem;
  line-height: 1.45;
  background: ${e=>e.side==="out"?"var(--bg-ink)":"var(--bg-soft)"};
  color: ${e=>e.side==="out"?"#ffffff":"var(--text-primary)"};
`,Oy=x.div`
  display: inline-flex;
  align-items: center;
  gap: 0.28rem;
  padding: 0.5rem 0.7rem;
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
`,Ay=x.aside`
  border: 1px solid rgba(243, 247, 249, 0.12);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background: rgba(7, 21, 28, 0.55);
  backdrop-filter: blur(10px);
  padding: 1.25rem 1.3rem 1.4rem;
  display: grid;
  gap: 1rem;
  align-content: start;
  color: var(--text-on-dark);

  @media (max-width: 860px) {
    border-radius: var(--radius-md);
  }
`,My=x.h3`
  margin: 0;
  font-size: 1rem;
  color: var(--text-on-dark);
`,Fy=x.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.85rem;
`,Co=x.li`
  display: grid;
  gap: 0.2rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(243, 247, 249, 0.1);

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`,Eo=x.span`
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(243, 247, 249, 0.55);
  font-weight: 700;
`,Po=x.strong`
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 650;
  color: #ffffff;
  line-height: 1.25;
`,Al=x.section`
  padding: clamp(3.5rem, 8vw, 6rem) 0;
`,Dy=x(Al)`
  background:
    radial-gradient(circle at 10% 0%, rgba(15, 143, 123, 0.1), transparent 42%),
    linear-gradient(180deg, #eef3f6 0%, #e6eef2 100%);
`,yn=x.span`
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--brand-strong);
`,vn=x.h2`
  margin: 0.7rem 0 0;
  font-size: clamp(1.9rem, 4.6vw, 3.1rem);
  line-height: 1.08;
  max-width: 16ch;
  font-weight: 700;
`,wn=x.p`
  margin: 0.9rem 0 0;
  max-width: 40rem;
  font-size: clamp(1.02rem, 2vw, 1.15rem);
  line-height: 1.65;
  color: var(--text-secondary);
`,Uy=x.div`
  margin-top: 2.6rem;
  display: grid;
  gap: 1rem;
`,By=x.article`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1.4rem;
  align-items: start;
  padding: clamp(1.3rem, 3vw, 1.8rem);
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.78);
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(15, 143, 123, 0.35);
    box-shadow: 0 22px 40px -28px rgba(11, 28, 36, 0.35);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }

  ${e=>e.$tone==="website"&&Yr`
      background: linear-gradient(120deg, rgba(255, 255, 255, 0.9), rgba(217, 119, 6, 0.08));
    `}

  ${e=>e.$tone==="content"&&Yr`
      background: linear-gradient(120deg, rgba(255, 255, 255, 0.9), rgba(15, 143, 123, 0.1));
    `}
`,Wy=x.span`
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: rgba(11, 28, 36, 0.14);
`,by=x.div`
  display: grid;
  gap: 0.45rem;
`,Vy=x.h3`
  margin: 0;
  font-size: clamp(1.25rem, 2.4vw, 1.55rem);
  font-weight: 700;
`,Hy=x.p`
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 52ch;
`,Qy=x.section`
  padding: clamp(3.5rem, 8vw, 6rem) 0;
  background:
    radial-gradient(circle at 90% 20%, rgba(217, 119, 6, 0.1), transparent 40%),
    #f7fafb;
`,Gy=x.ol`
  list-style: none;
  margin: 2.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.85rem;
  counter-reset: step;
`,Yy=x.li`
  counter-increment: step;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1rem;
  padding: 1.15rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
  background: #ffffff;
  align-items: start;
  transition: transform 0.16s ease, border-color 0.16s ease;

  &:hover {
    transform: translateX(4px);
    border-color: rgba(15, 143, 123, 0.35);
  }

  @media (max-width: 640px) {
    grid-template-columns: 44px 1fr;
    padding: 1rem;
  }
`,Ky=x.span`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-ink);
  color: #ffffff;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
`,Xy=x.div`
  display: grid;
  gap: 0.3rem;
`,qy=x.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
`,Zy=x.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.98rem;
  line-height: 1.55;
`,Jy=x(Al)`
  background:
    radial-gradient(circle at 12% 10%, rgba(15, 143, 123, 0.1), transparent 42%),
    linear-gradient(180deg, #eef3f6, #e8f0f3);
`,ev=x.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,tv=x.article`
  padding: 1.4rem 1.45rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.86);
  display: grid;
  gap: 0.55rem;
  transition: transform 0.16s ease, border-color 0.16s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(15, 143, 123, 0.3);
  }
`,nv=x.span`
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: var(--brand-soft);
  color: var(--brand-strong);
`,rv=x.h3`
  margin: 0;
  font-size: 1.12rem;
  font-weight: 700;
`,iv=x.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.98rem;
  line-height: 1.6;
`,lv=x(Al)`
  background: #f7fafb;
`,ov=x.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,sv=x.article`
  padding: 1.35rem 1.4rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
  background: #ffffff;
  display: grid;
  gap: 0.5rem;
`,av=x.span`
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: var(--brand-soft);
  color: var(--brand-strong);
`,uv=x.h3`
  margin: 0;
  font-size: 1.08rem;
  font-weight: 700;
`,cv=x.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.97rem;
  line-height: 1.6;
`,fv=x.section`
  padding: clamp(3.5rem, 8vw, 6rem) 0;
  background: var(--bg-ink);
`,dv=x.blockquote`
  margin: 0;
  max-width: 920px;
`,pv=x.p`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.45rem, 3.6vw, 2.35rem);
  line-height: 1.22;
  letter-spacing: -0.03em;
  color: #ffffff;
`,hv=x.div`
  margin-top: 1.4rem;
  font-size: 0.95rem;
  color: rgba(243, 247, 249, 0.58);
`,mv=x.section`
  padding: clamp(3.5rem, 8vw, 6rem) 0;
  background:
    radial-gradient(circle at 85% 10%, rgba(217, 119, 6, 0.1), transparent 38%),
    linear-gradient(180deg, #f7fafb, #eef3f6);
`,gv=x.div`
  margin-top: 1.6rem;
  display: inline-flex;
  padding: 0.25rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line-strong);
  background: #ffffff;
  gap: 0.2rem;
`,hc=x.button`
  border: 0;
  border-radius: 8px;
  padding: 0.5rem 1.05rem;
  background: transparent;
  color: var(--text-secondary);
  font-weight: 650;
  font-size: 0.92rem;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;

  &.active {
    color: #ffffff;
    background: var(--bg-ink);
  }
`,yv=x.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  align-items: stretch;
`,vv=x.article`
  position: relative;
  padding: 1.35rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid ${e=>e.featured?"rgba(15, 143, 123, 0.45)":"var(--line)"};
  background: ${e=>e.featured?"linear-gradient(180deg, #ffffff, #e8f6f3)":"#ffffff"};
  display: grid;
  gap: 0.7rem;
  opacity: ${e=>e.muted?.65:1};
  box-shadow: ${e=>e.featured?"0 22px 40px -24px rgba(15, 143, 123, 0.4)":"none"};
  min-width: 0;
`,mc=x.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.55rem;
  border-radius: 8px;
  background: var(--bg-ink);
  color: #ffffff;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
`,wv=x.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
`,xv=x.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
`,gc=x.strong`
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.6vw, 2.3rem);
  letter-spacing: -0.03em;
  color: var(--text-primary);
`,kv=x.span`
  color: var(--text-muted);
  font-size: 0.95rem;
`,Sv=x.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.92rem;
  min-height: 42px;
`,Cv=x.span`
  display: inline-flex;
  align-items: center;
  font-size: 0.88rem;
  color: var(--text-primary);
  padding: 0.32rem 0.6rem;
  border-radius: 8px;
  background: var(--brand-soft);
  width: fit-content;
`,Ev=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.55rem 1rem;
  border-radius: var(--radius-sm);
  font-weight: 650;
  background: ${e=>e.muted?"rgba(11, 28, 36, 0.08)":"var(--bg-ink)"};
  color: ${e=>e.muted?"var(--text-muted)":"#ffffff"};
  pointer-events: ${e=>e.muted?"none":"auto"};

  &:hover {
    background: ${e=>e.muted?"rgba(11, 28, 36, 0.08)":"#12303a"};
  }
`,Pv=x.ul`
  margin: 0.3rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
`,jv=x.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  line-height: 1.45;
`,_v=x(Al)`
  background: #f7fafb;
`,Nv=x.div`
  margin-top: 2.2rem;
  display: grid;
  gap: 0.65rem;
  max-width: 880px;
`,zv=x.details`
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: #ffffff;
  overflow: hidden;
  transition: border-color 0.15s ease;

  &[open] {
    border-color: rgba(15, 143, 123, 0.35);
  }

  &[open] summary svg {
    transform: rotate(45deg);
    color: var(--brand-strong);
  }
`,$v=x.summary`
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
`,Rv=x.div`
  padding: 0 1.25rem 1.1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.97rem;
`,Tv=x.section`
  padding: clamp(3.5rem, 8vw, 6rem) 0;
  background:
    radial-gradient(circle at 80% 0%, rgba(15, 143, 123, 0.35), transparent 40%),
    radial-gradient(circle at 10% 100%, rgba(217, 119, 6, 0.22), transparent 42%),
    var(--bg-ink);
`,Lv=x.div`
  display: grid;
  gap: 1rem;
  text-align: left;
  max-width: 760px;
`,Iv=x.h2`
  margin: 0;
  font-size: clamp(1.9rem, 4.8vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  color: #ffffff;
  max-width: 16ch;
`,Ov=x.p`
  margin: 0;
  color: rgba(243, 247, 249, 0.72);
  max-width: 40rem;
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.6;
`,Av=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 0.4rem;
`,Mv=x(Sp)``,Fv=x.a`
  ${Ia};
  border: 1px solid rgba(243, 247, 249, 0.28);
  color: #ffffff;
  background: transparent;

  &:hover {
    background: rgba(243, 247, 249, 0.08);
  }
`,$s="https://app.divvylore.com",Dv=$s.replace(/\/$/,""),jo="/register",Uv="/login",Bv=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:e%1===0?0:2}).format(e),xn=e=>{const t=Number(e);return Number.isFinite(t)?t:0},yc=[ry,cy,J1,ty,kp,ay],Wv=e=>(Array.isArray(e?.pricing?.plans)?e.pricing.plans:[]).map((n,r)=>{const i=Number(String(n.price||"").replace(/[^\d.]/g,"")),l=Number.isFinite(i)?i:0;return{id:n.planCode||`${n.name}-${r}`,name:n.name,description:n.description,code:n.planCode,monthlyPrice:l,yearlyPrice:l>0?Math.round(l*10):0,monthlyCredits:0,yearlyCredits:0,yearlyBonusCredits:0,features:(n.features||[]).map((o,s)=>({name:o,isIncluded:!0,displayOrder:s})),buttonText:n.ctaLabel,isPopular:!!n.highlighted,isActive:!0,isVisible:!0,displayOrder:r,isCustomPricing:String(n.price||"").toLowerCase().includes("custom")}}),vc=()=>{const e=pe,t=N.useMemo(()=>Wv(e),[e]),[n,r]=N.useState("monthly"),[i,l]=N.useState(t);N.useEffect(()=>{const y=new AbortController;return(async()=>{try{const w=await fetch(`${Dv}/account/tenant/plans`,{method:"GET",headers:{Accept:"application/json"},signal:y.signal});if(!w.ok)throw new Error(`Pricing API returned ${w.status}`);const P=await w.json();if(!Array.isArray(P))throw new Error("Pricing API response is not a plan list");const p=P.map(c=>({...c,monthlyPrice:xn(c.monthlyPrice),yearlyPrice:xn(c.yearlyPrice),monthlyCredits:xn(c.monthlyCredits),yearlyCredits:xn(c.yearlyCredits),yearlyBonusCredits:xn(c.yearlyBonusCredits??0),displayOrder:xn(c.displayOrder??999),features:Array.isArray(c.features)?c.features:[]})).sort((c,m)=>(c.displayOrder??999)-(m.displayOrder??999));p.length>0&&l(p)}catch(w){if(w.name==="AbortError")return}})(),()=>y.abort()},[]);const o=N.useMemo(()=>i.filter(y=>y.name),[i]),s=n==="monthly"?"/month":"/year",a=typeof window<"u"?window.location.hostname:"divvylore.com",u=(y,v)=>{const w=new URLSearchParams({source:a,...v||{}}).toString();return`${$s}${y}?${w}`},h=e.hero?.title||e.brand?.tagline,d="with AI agents",g=h.endsWith(d)?h.slice(0,-d.length).trimEnd():h;return f.jsxs(fy,{children:[f.jsxs(dy,{children:[f.jsxs(st,{children:[f.jsx(py,{children:"Divvylore"}),f.jsxs(hy,{children:[g," ",f.jsx("em",{children:d})]}),f.jsx(my,{children:e.hero?.description}),f.jsxs(gy,{children:[f.jsxs(Sp,{href:u(jo,{placement:"hero"}),target:"_blank",rel:"noreferrer",children:["Get started",f.jsx(pc,{size:16})]}),f.jsx(yy,{href:"#pricing",children:"View pricing"})]})]}),f.jsx(vy,{children:f.jsx(wy,{children:f.jsxs(xy,{children:[f.jsxs(ky,{children:[f.jsxs(Sy,{children:[f.jsx(ko,{color:"#f87171"}),f.jsx(ko,{color:"#fbbf24"}),f.jsx(ko,{color:"#34d399"}),f.jsx(Cy,{children:"yourbrand.com — live with Divvylore"})]}),f.jsxs(Ey,{children:[f.jsx(Py,{children:"On your website"}),f.jsx(jy,{children:"Visitors arrive. Autopilot takes over."}),f.jsx(_y,{children:"Sales questions become leads. Support questions get resolved — without waiting for a human to wake up."}),f.jsxs(Ny,{children:[f.jsxs(zy,{children:[f.jsx($y,{children:"D"}),f.jsxs(Ry,{children:[f.jsx(Ty,{children:"Divvylore Agent"}),f.jsx(Ly,{children:"Online · sales & support"})]})]}),f.jsxs(Iy,{children:[f.jsx(So,{side:"in",children:"Do you offer onboarding help?"}),f.jsx(So,{side:"out",children:"Yes — I can walk you through plans and book a demo, or fix a billing issue right now."}),f.jsx(So,{side:"in",children:"Book a demo for Thursday."}),f.jsxs(Oy,{"aria-hidden":!0,children:[f.jsx("span",{})," ",f.jsx("span",{})," ",f.jsx("span",{})]})]})]})]})]}),f.jsxs(Ay,{children:[f.jsx(My,{children:"What autopilot handles"}),f.jsxs(Fy,{children:[f.jsxs(Co,{children:[f.jsx(Eo,{children:"Sales"}),f.jsx(Po,{children:"Qualify visitors and capture leads in chat"})]}),f.jsxs(Co,{children:[f.jsx(Eo,{children:"Support"}),f.jsx(Po,{children:"Resolve common issues with guardrails"})]}),f.jsxs(Co,{children:[f.jsx(Eo,{children:"Content"}),f.jsx(Po,{children:"Articles that rank and feed the agent"})]})]})]})]})})})]}),f.jsx(Dy,{id:"product",children:f.jsxs(st,{children:[f.jsx(yn,{children:"Product"}),f.jsx(vn,{children:e.highlights?.title}),f.jsx(wn,{children:e.highlights?.subtitle}),f.jsx(Uy,{children:(e.highlights?.cards||[]).map((y,v)=>f.jsxs(By,{$tone:y.accent||"agents",children:[f.jsx(Wy,{children:String(v+1).padStart(2,"0")}),f.jsxs(by,{children:[f.jsx(Vy,{children:y.title}),f.jsx(Hy,{children:y.description})]})]},y.title))})]})}),f.jsx(Qy,{id:"how-it-works",children:f.jsxs(st,{children:[f.jsx(yn,{children:"How it works"}),f.jsx(vn,{children:e.howItWorks?.title}),f.jsx(wn,{children:e.howItWorks?.subtitle}),f.jsx(Gy,{children:(e.howItWorks?.steps||[]).map((y,v)=>f.jsxs(Yy,{children:[f.jsx(Ky,{children:String(v+1).padStart(2,"0")}),f.jsxs(Xy,{children:[f.jsx(qy,{children:y.title}),f.jsx(Zy,{children:y.description})]})]},y.title))})]})}),f.jsx(Jy,{id:"capabilities",children:f.jsxs(st,{children:[f.jsx(yn,{children:"Capabilities"}),f.jsx(vn,{children:e.features?.title}),f.jsx(wn,{children:e.features?.subtitle}),f.jsx(ev,{children:(e.features?.items||[]).map((y,v)=>{const w=yc[v%yc.length];return f.jsxs(tv,{children:[f.jsx(nv,{children:f.jsx(w,{size:18})}),f.jsx(rv,{children:y.title}),f.jsx(iv,{children:y.description})]},y.title)})})]})}),f.jsx(lv,{id:"security",children:f.jsxs(st,{children:[f.jsx(yn,{children:"Security"}),f.jsx(vn,{children:e.security?.title}),f.jsx(wn,{children:e.security?.subtitle}),f.jsx(ov,{children:(e.security?.items||[]).map(y=>f.jsxs(sv,{children:[f.jsx(av,{children:f.jsx(kp,{size:18})}),f.jsx(uv,{children:y.title}),f.jsx(cv,{children:y.description})]},y.title))})]})}),f.jsx(fv,{id:"story",children:f.jsx(st,{children:f.jsxs(dv,{children:[f.jsx(pv,{children:"“We stopped babysitting every chat. Divvylore runs sales and support on our site — and content keeps the agent sharp.”"}),f.jsx(hv,{children:"— Operator running a customer-facing website"})]})})}),f.jsx(mv,{id:"pricing",children:f.jsxs(st,{children:[f.jsx(yn,{children:"Pricing"}),f.jsx(vn,{children:e.pricing?.title}),f.jsx(wn,{children:e.pricing?.subtitle}),f.jsxs(gv,{role:"tablist","aria-label":"Billing cycle",children:[f.jsx(hc,{type:"button",className:n==="monthly"?"active":"",onClick:()=>r("monthly"),children:"Monthly"}),f.jsx(hc,{type:"button",className:n==="yearly"?"active":"",onClick:()=>r("yearly"),children:"Yearly"})]}),f.jsx(yv,{children:o.map(y=>{const v=y.isActive===!1||y.isVisible===!1,w=n==="monthly"?y.monthlyPrice:y.yearlyPrice,P=n==="monthly"?y.monthlyCredits:y.yearlyCredits,p=n==="yearly"&&y.yearlyBonusCredits||0,c=(y.features||[]).filter(k=>k.isIncluded).sort((k,E)=>(k.displayOrder??999)-(E.displayOrder??999)),m=new URLSearchParams({source:a,placement:"pricing",plan:y.code||y.id,billing:n}).toString();return f.jsxs(vv,{featured:!!y.isPopular,muted:v,children:[y.isPopular&&!v&&f.jsx(mc,{children:"Most popular"}),v&&f.jsx(mc,{children:"Unavailable"}),f.jsx(wv,{children:y.name}),f.jsx(xv,{children:y.isCustomPricing?f.jsx(gc,{children:"Custom"}):f.jsxs(f.Fragment,{children:[f.jsx(gc,{children:Bv(w)}),f.jsx(kv,{children:s})]})}),f.jsx(Sv,{children:y.description}),f.jsxs(Cv,{children:[P.toLocaleString()," credits / ",n==="monthly"?"mo":"yr",p>0?` · +${p.toLocaleString()} bonus`:""]}),f.jsx(Ev,{href:v?void 0:`${$s}${jo}?${m}`,muted:v,"aria-disabled":v,onClick:k=>{v&&k.preventDefault()},target:"_blank",rel:"noreferrer",children:v?"Not available":y.buttonText||"Get started"}),f.jsx(Pv,{children:c.map(k=>f.jsxs(jv,{children:[f.jsx(q1,{size:16,color:"#0f8f7b"}),f.jsx("span",{children:k.name})]},`${y.name}-${k.name}`))})]},y.id||y.name)})})]})}),f.jsx(_v,{id:"faq",children:f.jsxs(st,{children:[f.jsx(yn,{children:"FAQ"}),f.jsx(vn,{children:e.faq?.title}),f.jsx(wn,{children:e.faq?.subtitle}),f.jsx(Nv,{children:(e.faq?.items||[]).map((y,v)=>f.jsxs(zv,{...v===0?{open:!0}:{},children:[f.jsxs($v,{children:[f.jsx("span",{children:y.question}),f.jsx(ly,{size:20,"aria-hidden":!0})]}),f.jsx(Rv,{children:y.answer})]},y.question))})]})}),f.jsx(Tv,{id:"cta",children:f.jsx(st,{children:f.jsxs(Lv,{children:[f.jsx(Iv,{children:"Turn your website into sales and support on autopilot."}),f.jsx(Ov,{children:"Launch with an AI agent, a website, or content — then let Divvylore keep conversations moving."}),f.jsxs(Av,{children:[f.jsxs(Mv,{href:u(jo,{placement:"bottom-cta"}),target:"_blank",rel:"noreferrer",children:["Get started",f.jsx(pc,{size:16})]}),f.jsx(Fv,{href:u(Uv,{placement:"bottom-cta"}),target:"_blank",rel:"noreferrer",children:"Sign in"})]})]})})})]})},bv=v1`
    :root {
        --bg-page: #eef3f6;
        --bg-elevated: #ffffff;
        --bg-soft: #e2ebf0;
        --bg-ink: #0b1c24;
        --bg-hero: #07151c;
        --text-primary: #0b1c24;
        --text-secondary: #3d5560;
        --text-muted: #6a8090;
        --text-on-dark: #f3f7f9;
        --brand: #0f8f7b;
        --brand-strong: #0b6f60;
        --brand-soft: rgba(15, 143, 123, 0.12);
        --accent: #d97706;
        --accent-soft: rgba(217, 119, 6, 0.14);
        --line: rgba(11, 28, 36, 0.1);
        --line-strong: rgba(11, 28, 36, 0.18);
        --radius-sm: 10px;
        --radius-md: 16px;
        --radius-lg: 24px;
        --font-display: 'Syne', sans-serif;
        --font-body: 'Figtree', sans-serif;
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
        letter-spacing: 0.01em;
        color: var(--text-secondary);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ::selection {
        background: rgba(15, 143, 123, 0.22);
        color: var(--text-primary);
    }

    @keyframes rise {
        from {
            opacity: 0;
            transform: translateY(18px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes drift {
        0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
        50% { transform: translate3d(2%, -1.5%, 0) scale(1.04); }
    }

    @keyframes pulseGlow {
        0%, 100% { opacity: 0.45; }
        50% { opacity: 0.85; }
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
`,_o=({to:e})=>(N.useEffect(()=>{window.location.replace(e)},[e]),null),Vv=()=>f.jsxs(N.Suspense,{fallback:null,children:[f.jsx(bv,{}),f.jsx(W1,{}),f.jsxs(Hg,{children:[f.jsx(Xt,{path:"/",element:f.jsx(vc,{})}),f.jsx(Xt,{path:"/home",element:f.jsx(vc,{})}),f.jsx(Xt,{path:"/privacy-policy",element:f.jsx(_o,{to:pe.legalUrls.privacyPolicy})}),f.jsx(Xt,{path:"/terms-and-conditions",element:f.jsx(_o,{to:pe.legalUrls.termsAndConditions})}),f.jsx(Xt,{path:"/refund-policy",element:f.jsx(_o,{to:pe.legalUrls.refundPolicy})}),f.jsx(Xt,{path:"*",element:f.jsx(bg,{to:"/",replace:!0})})]}),f.jsx(z1,{})]}),Hv=()=>f.jsx(Yg,{children:f.jsx(Vv,{})}),Cp=document.getElementById("root");if(!Cp)throw new Error("Root element not found");Hd(Cp).render(f.jsx(Hv,{}));
