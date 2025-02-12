var E0=Object.defineProperty;var T0=(o,e,t)=>e in o?E0(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var Ct=(o,e,t)=>T0(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var rf={exports:{}},oa={},sf={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function A0(){if(Rm)return dt;Rm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(N,ne,Ne){this.props=N,this.context=ne,this.refs=T,this.updater=Ne||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function D(N,ne,Ne){this.props=N,this.context=ne,this.refs=T,this.updater=Ne||y}var L=D.prototype=new x;L.constructor=D,M(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,V=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function j(N,ne,Ne){var Q,de={},Se=null,ve=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Se=""+ne.key),ne)V.call(ne,Q)&&!U.hasOwnProperty(Q)&&(de[Q]=ne[Q]);var Te=arguments.length-2;if(Te===1)de.children=Ne;else if(1<Te){for(var De=Array(Te),Ze=0;Ze<Te;Ze++)De[Ze]=arguments[Ze+2];de.children=De}if(N&&N.defaultProps)for(Q in Te=N.defaultProps,Te)de[Q]===void 0&&(de[Q]=Te[Q]);return{$$typeof:o,type:N,key:Se,ref:ve,props:de,_owner:O.current}}function b(N,ne){return{$$typeof:o,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function z(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ne){return ne[Ne]})}var oe=/\/+/g;function te(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):ne.toString(36)}function ce(N,ne,Ne,Q,de){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case o:case e:ve=!0}}if(ve)return ve=N,de=de(ve),N=Q===""?"."+te(ve,0):Q,C(de)?(Ne="",N!=null&&(Ne=N.replace(oe,"$&/")+"/"),ce(de,ne,Ne,"",function(Ze){return Ze})):de!=null&&(R(de)&&(de=b(de,Ne+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(oe,"$&/")+"/")+N)),ne.push(de)),1;if(ve=0,Q=Q===""?".":Q+":",C(N))for(var Te=0;Te<N.length;Te++){Se=N[Te];var De=Q+te(Se,Te);ve+=ce(Se,ne,Ne,De,de)}else if(De=_(N),typeof De=="function")for(N=De.call(N),Te=0;!(Se=N.next()).done;)Se=Se.value,De=Q+te(Se,Te++),ve+=ce(Se,ne,Ne,De,de);else if(Se==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(N,ne,Ne){if(N==null)return N;var Q=[],de=0;return ce(N,Q,"","",function(Se){return ne.call(Ne,Se,de++)}),Q}function se(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Ne){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ne)},function(Ne){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ne)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:he,forEach:function(N,ne,Ne){he(N,function(){ne.apply(this,arguments)},Ne)},count:function(N){var ne=0;return he(N,function(){ne++}),ne},toArray:function(N){return he(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},dt.Component=S,dt.Fragment=t,dt.Profiler=s,dt.PureComponent=D,dt.StrictMode=i,dt.Suspense=d,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,dt.act=re,dt.cloneElement=function(N,ne,Ne){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=M({},N.props),de=N.key,Se=N.ref,ve=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Se=ne.ref,ve=O.current),ne.key!==void 0&&(de=""+ne.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(De in ne)V.call(ne,De)&&!U.hasOwnProperty(De)&&(Q[De]=ne[De]===void 0&&Te!==void 0?Te[De]:ne[De])}var De=arguments.length-2;if(De===1)Q.children=Ne;else if(1<De){Te=Array(De);for(var Ze=0;Ze<De;Ze++)Te[Ze]=arguments[Ze+2];Q.children=Te}return{$$typeof:o,type:N.type,key:de,ref:Se,props:Q,_owner:ve}},dt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},dt.createElement=j,dt.createFactory=function(N){var ne=j.bind(null,N);return ne.type=N,ne},dt.createRef=function(){return{current:null}},dt.forwardRef=function(N){return{$$typeof:c,render:N}},dt.isValidElement=R,dt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:se}},dt.memo=function(N,ne){return{$$typeof:h,type:N,compare:ne===void 0?null:ne}},dt.startTransition=function(N){var ne=B.transition;B.transition={};try{N()}finally{B.transition=ne}},dt.unstable_act=re,dt.useCallback=function(N,ne){return le.current.useCallback(N,ne)},dt.useContext=function(N){return le.current.useContext(N)},dt.useDebugValue=function(){},dt.useDeferredValue=function(N){return le.current.useDeferredValue(N)},dt.useEffect=function(N,ne){return le.current.useEffect(N,ne)},dt.useId=function(){return le.current.useId()},dt.useImperativeHandle=function(N,ne,Ne){return le.current.useImperativeHandle(N,ne,Ne)},dt.useInsertionEffect=function(N,ne){return le.current.useInsertionEffect(N,ne)},dt.useLayoutEffect=function(N,ne){return le.current.useLayoutEffect(N,ne)},dt.useMemo=function(N,ne){return le.current.useMemo(N,ne)},dt.useReducer=function(N,ne,Ne){return le.current.useReducer(N,ne,Ne)},dt.useRef=function(N){return le.current.useRef(N)},dt.useState=function(N){return le.current.useState(N)},dt.useSyncExternalStore=function(N,ne,Ne){return le.current.useSyncExternalStore(N,ne,Ne)},dt.useTransition=function(){return le.current.useTransition()},dt.version="18.3.1",dt}var Cm;function Od(){return Cm||(Cm=1,sf.exports=A0()),sf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function w0(){if(bm)return oa;bm=1;var o=Od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var m,g={},_=null,y=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(y=d.ref);for(m in d)i.call(d,m)&&!a.hasOwnProperty(m)&&(g[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:c,key:_,ref:y,props:g,_owner:s.current}}return oa.Fragment=t,oa.jsx=u,oa.jsxs=u,oa}var Pm;function R0(){return Pm||(Pm=1,rf.exports=w0()),rf.exports}var lo=R0(),uu=Od(),Ul={},of={exports:{}},zn={},af={exports:{}},lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function C0(){return Lm||(Lm=1,function(o){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var N=re-1>>>1,ne=B[N];if(0<s(ne,ae))B[N]=ae,B[re]=ne,re=N;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var N=0,ne=B.length,Ne=ne>>>1;N<Ne;){var Q=2*(N+1)-1,de=B[Q],Se=Q+1,ve=B[Se];if(0>s(de,re))Se<ne&&0>s(ve,de)?(B[N]=ve,B[Se]=re,N=Se):(B[N]=de,B[Q]=re,N=Q);else if(Se<ne&&0>s(ve,re))B[N]=ve,B[Se]=re,N=Se;else break e}}return ae}function s(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var d=[],h=[],m=1,g=null,_=3,y=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ae=t(h);ae!==null;){if(ae.callback===null)i(h);else if(ae.startTime<=B)i(h),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(h)}}function C(B){if(T=!1,L(B),!M)if(t(d)!==null)M=!0,se(V);else{var ae=t(h);ae!==null&&le(C,ae.startTime-B)}}function V(B,ae){M=!1,T&&(T=!1,x(j),j=-1),y=!0;var re=_;try{for(L(ae),g=t(d);g!==null&&(!(g.expirationTime>ae)||B&&!z());){var N=g.callback;if(typeof N=="function"){g.callback=null,_=g.priorityLevel;var ne=N(g.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(d)&&i(d),L(ae)}else i(d);g=t(d)}if(g!==null)var Ne=!0;else{var Q=t(h);Q!==null&&le(C,Q.startTime-ae),Ne=!1}return Ne}finally{g=null,_=re,y=!1}}var O=!1,U=null,j=-1,b=5,R=-1;function z(){return!(o.unstable_now()-R<b)}function oe(){if(U!==null){var B=o.unstable_now();R=B;var ae=!0;try{ae=U(!0,B)}finally{ae?te():(O=!1,U=null)}}else O=!1}var te;if(typeof D=="function")te=function(){D(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=oe,te=function(){he.postMessage(null)}}else te=function(){S(oe,0)};function se(B){U=B,O||(O=!0,te())}function le(B,ae){j=S(function(){B(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,se(V))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var re=_;_=ae;try{return B()}finally{_=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=_;_=B;try{return ae()}finally{_=re}},o.unstable_scheduleCallback=function(B,ae,re){var N=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:m++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>N?(B.sortIndex=re,e(h,B),t(d)===null&&B===t(h)&&(T?(x(j),j=-1):T=!0,le(C,re-N))):(B.sortIndex=ne,e(d,B),M||y||(M=!0,se(V))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var ae=_;return function(){var re=_;_=ae;try{return B.apply(this,arguments)}finally{_=re}}}}(lf)),lf}var Im;function b0(){return Im||(Im=1,af.exports=C0()),af.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function P0(){if(Dm)return zn;Dm=1;var o=Od(),e=b0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return d.call(g,n)?!0:d.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,l,f,p,v,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,D);S[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,D);S[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,D);S[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,f){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,f)&&(l=null),f||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,f=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Ne=!1;function Q(n,r){if(!n||Ne)return"";Ne=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ee){var f=ee}Reflect.construct(n,[],r)}else{try{r.call()}catch(ee){f=ee}n.call(r.prototype)}else{try{throw Error()}catch(ee){f=ee}n()}}catch(ee){if(ee&&f&&typeof ee.stack=="string"){for(var p=ee.stack.split(`
`),v=f.stack.split(`
`),E=p.length-1,I=v.length-1;1<=E&&0<=I&&p[E]!==v[I];)I--;for(;1<=E&&0<=I;E--,I--)if(p[E]!==v[I]){if(E!==1||I!==1)do if(E--,I--,0>I||p[E]!==v[I]){var F=`
`+p[E].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=E&&0<=I);break}}}finally{Ne=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function de(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case O:return"Portal";case b:return"Profiler";case j:return"StrictMode";case te:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case oe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:Se(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return Se(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=De(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){f=""+E,v.call(this,E)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(E){f=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function It(n){n._valueTracker||(n._valueTracker=Ze(n))}function gt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=De(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function Ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,r){var l=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Mn(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Te(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function ct(n,r){ht(n,r);var l=Te(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Pt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Pt(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function je(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Pt(n,r,l){(r!=="number"||Ut(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ge=Array.isArray;function P(n,r,l,f){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Te(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,f&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function A(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Ge(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Te(l)}}function pe(n,r){var l=Te(r.value),f=Te(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Ue=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ut(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function qe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function Je(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,p=qe(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,p):n[l]=p}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,r){if(r){if(ke[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function nt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,ie=null,fe=null;function Pe(n){if(n=Xo(n)){if(typeof we!="function")throw Error(t(280));var r=n.stateNode;r&&(r=$a(r),we(n.stateNode,n.type,r))}}function be(n){ie?fe?fe.push(n):fe=[n]:ie=n}function it(){if(ie){var n=ie,r=fe;if(fe=ie=null,Pe(n),r)for(n=0;n<r.length;n++)Pe(r[n])}}function Ot(n,r){return n(r)}function Zt(){}var Mt=!1;function Nn(n,r,l){if(Mt)return n(r,l);Mt=!0;try{return Ot(n,r,l)}finally{Mt=!1,(ie!==null||fe!==null)&&(Zt(),it())}}function En(n,r){var l=n.stateNode;if(l===null)return null;var f=$a(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var _s=!1;if(c)try{var or={};Object.defineProperty(or,"passive",{get:function(){_s=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{_s=!1}function Ii(n,r,l,f,p,v,E,I,F){var ee=Array.prototype.slice.call(arguments,3);try{r.apply(l,ee)}catch(_e){this.onError(_e)}}var Di=!1,Vr=null,Gr=!1,ar=null,Ca={onError:function(n){Di=!0,Vr=n}};function vs(n,r,l,f,p,v,E,I,F){Di=!1,Vr=null,Ii.apply(Ca,arguments)}function ba(n,r,l,f,p,v,E,I,F){if(vs.apply(this,arguments),Di){if(Di){var ee=Vr;Di=!1,Vr=null}else throw Error(t(198));Gr||(Gr=!0,ar=ee)}}function yi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Pa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function La(n){if(yi(n)!==n)throw Error(t(188))}function wu(n){var r=n.alternate;if(!r){if(r=yi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(f=p.return,f!==null){l=f;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return La(p),n;if(v===f)return La(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==f.return)l=p,f=v;else{for(var E=!1,I=p.child;I;){if(I===l){E=!0,l=p,f=v;break}if(I===f){E=!0,f=p,l=v;break}I=I.sibling}if(!E){for(I=v.child;I;){if(I===l){E=!0,l=v,f=p;break}if(I===f){E=!0,f=v,l=p;break}I=I.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ia(n){return n=wu(n),n!==null?Da(n):null}function Da(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Da(n);if(r!==null)return r;n=n.sibling}return null}var Na=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,W=e.unstable_shouldYield,J=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,ye=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Be=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function vt(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:xt,Xt=Math.log,zt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Xt(n)/zt|0)|0}var Ye=64,jt=4194304;function _t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pn(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,p=n.suspendedLanes,v=n.pingedLanes,E=l&268435455;if(E!==0){var I=E&~p;I!==0?f=_t(I):(v&=E,v!==0&&(f=_t(v)))}else E=l&~p,E!==0?f=_t(E):v!==0&&(f=_t(v));if(f===0)return 0;if(r!==0&&r!==f&&!(r&p)&&(p=f&-f,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if(f&4&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-st(r),p=1<<l,f|=n[l],r&=~p;return f}function lr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var E=31-st(v),I=1<<E,F=p[E];F===-1?(!(I&l)||I&f)&&(p[E]=lr(I,r)):F<=r&&(n.expiredLanes|=I),v&=~I}}function Ni(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nt(){var n=Ye;return Ye<<=1,!(Ye&4194240)&&(Ye=64),n}function mn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function nn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-st(r),n[r]=l}function fn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-st(l),v=1<<p;r[p]=0,f[p]=-1,n[p]=-1,l&=~v}}function rn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-st(l),p=1<<f;p&r|n[f]&r&&(n[f]|=r),l&=~p}}var Et=0;function Si(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var oh,Ru,ah,lh,uh,Cu=!1,Ua=[],ur=null,cr=null,fr=null,bo=new Map,Po=new Map,dr=[],j_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(n,r){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":bo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(r.pointerId)}}function Lo(n,r,l,f,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:v,targetContainers:[p]},r!==null&&(r=Xo(r),r!==null&&Ru(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Y_(n,r,l,f,p){switch(r){case"focusin":return ur=Lo(ur,n,r,l,f,p),!0;case"dragenter":return cr=Lo(cr,n,r,l,f,p),!0;case"mouseover":return fr=Lo(fr,n,r,l,f,p),!0;case"pointerover":var v=p.pointerId;return bo.set(v,Lo(bo.get(v)||null,n,r,l,f,p)),!0;case"gotpointercapture":return v=p.pointerId,Po.set(v,Lo(Po.get(v)||null,n,r,l,f,p)),!0}return!1}function fh(n){var r=Wr(n.target);if(r!==null){var l=yi(r);if(l!==null){if(r=l.tag,r===13){if(r=Pa(l),r!==null){n.blockedOn=r,uh(n.priority,function(){ah(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Pu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Rt=f,l.target.dispatchEvent(f),Rt=null}else return r=Xo(l),r!==null&&Ru(r),n.blockedOn=l,!1;r.shift()}return!0}function dh(n,r,l){Fa(n)&&l.delete(r)}function q_(){Cu=!1,ur!==null&&Fa(ur)&&(ur=null),cr!==null&&Fa(cr)&&(cr=null),fr!==null&&Fa(fr)&&(fr=null),bo.forEach(dh),Po.forEach(dh)}function Io(n,r){n.blockedOn===r&&(n.blockedOn=null,Cu||(Cu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,q_)))}function Do(n){function r(p){return Io(p,n)}if(0<Ua.length){Io(Ua[0],n);for(var l=1;l<Ua.length;l++){var f=Ua[l];f.blockedOn===n&&(f.blockedOn=null)}}for(ur!==null&&Io(ur,n),cr!==null&&Io(cr,n),fr!==null&&Io(fr,n),bo.forEach(r),Po.forEach(r),l=0;l<dr.length;l++)f=dr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<dr.length&&(l=dr[0],l.blockedOn===null);)fh(l),l.blockedOn===null&&dr.shift()}var xs=C.ReactCurrentBatchConfig,Oa=!0;function K_(n,r,l,f){var p=Et,v=xs.transition;xs.transition=null;try{Et=1,bu(n,r,l,f)}finally{Et=p,xs.transition=v}}function $_(n,r,l,f){var p=Et,v=xs.transition;xs.transition=null;try{Et=4,bu(n,r,l,f)}finally{Et=p,xs.transition=v}}function bu(n,r,l,f){if(Oa){var p=Pu(n,r,l,f);if(p===null)Yu(n,r,f,ka,l),ch(n,f);else if(Y_(p,n,r,l,f))f.stopPropagation();else if(ch(n,f),r&4&&-1<j_.indexOf(n)){for(;p!==null;){var v=Xo(p);if(v!==null&&oh(v),v=Pu(n,r,l,f),v===null&&Yu(n,r,f,ka,l),v===p)break;p=v}p!==null&&f.stopPropagation()}else Yu(n,r,f,null,l)}}var ka=null;function Pu(n,r,l,f){if(ka=null,n=G(f),n=Wr(n),n!==null)if(r=yi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Pa(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ka=n,null}function hh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case ye:return 1;case Re:return 4;case Le:case Be:return 16;case et:return 536870912;default:return 16}default:return 16}}var hr=null,Lu=null,Ba=null;function ph(){if(Ba)return Ba;var n,r=Lu,l=r.length,f,p="value"in hr?hr.value:hr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var E=l-n;for(f=1;f<=E&&r[l-f]===p[v-f];f++);return Ba=p.slice(n,1<f?1-f:void 0)}function za(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ha(){return!0}function mh(){return!1}function Vn(n){function r(l,f,p,v,E){this._reactName=l,this._targetInst=p,this.type=f,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ha:mh,this.isPropagationStopped=mh,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),r}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=Vn(ys),No=re({},ys,{view:0,detail:0}),Z_=Vn(No),Du,Nu,Uo,Va=re({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Uo&&(Uo&&n.type==="mousemove"?(Du=n.screenX-Uo.screenX,Nu=n.screenY-Uo.screenY):Nu=Du=0,Uo=n),Du)},movementY:function(n){return"movementY"in n?n.movementY:Nu}}),gh=Vn(Va),Q_=re({},Va,{dataTransfer:0}),J_=Vn(Q_),ev=re({},No,{relatedTarget:0}),Uu=Vn(ev),tv=re({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=Vn(tv),iv=re({},ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rv=Vn(iv),sv=re({},ys,{data:0}),_h=Vn(sv),ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=lv[n])?!!r[n]:!1}function Fu(){return uv}var cv=re({},No,{key:function(n){if(n.key){var r=ov[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=za(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?av[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(n){return n.type==="keypress"?za(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?za(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fv=Vn(cv),dv=re({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=Vn(dv),hv=re({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),pv=Vn(hv),mv=re({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=Vn(mv),_v=re({},Va,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=Vn(_v),xv=[9,13,27,32],Ou=c&&"CompositionEvent"in window,Fo=null;c&&"documentMode"in document&&(Fo=document.documentMode);var yv=c&&"TextEvent"in window&&!Fo,xh=c&&(!Ou||Fo&&8<Fo&&11>=Fo),yh=" ",Sh=!1;function Mh(n,r){switch(n){case"keyup":return xv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ss=!1;function Sv(n,r){switch(n){case"compositionend":return Eh(r);case"keypress":return r.which!==32?null:(Sh=!0,yh);case"textInput":return n=r.data,n===yh&&Sh?null:n;default:return null}}function Mv(n,r){if(Ss)return n==="compositionend"||!Ou&&Mh(n,r)?(n=ph(),Ba=Lu=hr=null,Ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return xh&&r.locale!=="ko"?null:r.data;default:return null}}var Ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Ev[n.type]:r==="textarea"}function Ah(n,r,l,f){be(f),r=Ya(r,"onChange"),0<r.length&&(l=new Iu("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var Oo=null,ko=null;function Tv(n){Gh(n,0)}function Ga(n){var r=ws(n);if(gt(r))return n}function Av(n,r){if(n==="change")return r}var wh=!1;if(c){var ku;if(c){var Bu="oninput"in document;if(!Bu){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),Bu=typeof Rh.oninput=="function"}ku=Bu}else ku=!1;wh=ku&&(!document.documentMode||9<document.documentMode)}function Ch(){Oo&&(Oo.detachEvent("onpropertychange",bh),ko=Oo=null)}function bh(n){if(n.propertyName==="value"&&Ga(ko)){var r=[];Ah(r,ko,n,G(n)),Nn(Tv,r)}}function wv(n,r,l){n==="focusin"?(Ch(),Oo=r,ko=l,Oo.attachEvent("onpropertychange",bh)):n==="focusout"&&Ch()}function Rv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ga(ko)}function Cv(n,r){if(n==="click")return Ga(r)}function bv(n,r){if(n==="input"||n==="change")return Ga(r)}function Pv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ri=typeof Object.is=="function"?Object.is:Pv;function Bo(n,r){if(ri(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var p=l[f];if(!d.call(r,p)||!ri(n[p],r[p]))return!1}return!0}function Ph(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lh(n,r){var l=Ph(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ph(l)}}function Ih(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ih(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Dh(){for(var n=window,r=Ut();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ut(n.document)}return r}function zu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Lv(n){var r=Dh(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Ih(l.ownerDocument.documentElement,l)){if(f!==null&&zu(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(f.start,p);f=f.end===void 0?v:Math.min(f.end,p),!n.extend&&v>f&&(p=f,f=v,v=p),p=Lh(l,v);var E=Lh(l,f);p&&E&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>f?(n.addRange(r),n.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Iv=c&&"documentMode"in document&&11>=document.documentMode,Ms=null,Hu=null,zo=null,Vu=!1;function Nh(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vu||Ms==null||Ms!==Ut(f)||(f=Ms,"selectionStart"in f&&zu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),zo&&Bo(zo,f)||(zo=f,f=Ya(Hu,"onSelect"),0<f.length&&(r=new Iu("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=Ms)))}function Wa(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Es={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Gu={},Uh={};c&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Xa(n){if(Gu[n])return Gu[n];if(!Es[n])return n;var r=Es[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Uh)return Gu[n]=r[l];return n}var Fh=Xa("animationend"),Oh=Xa("animationiteration"),kh=Xa("animationstart"),Bh=Xa("transitionend"),zh=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,r){zh.set(n,r),a(r,[n])}for(var Wu=0;Wu<Hh.length;Wu++){var Xu=Hh[Wu],Dv=Xu.toLowerCase(),Nv=Xu[0].toUpperCase()+Xu.slice(1);pr(Dv,"on"+Nv)}pr(Fh,"onAnimationEnd"),pr(Oh,"onAnimationIteration"),pr(kh,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(Bh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function Vh(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,ba(f,r,void 0,n),n.currentTarget=null}function Gh(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],p=f.event;f=f.listeners;e:{var v=void 0;if(r)for(var E=f.length-1;0<=E;E--){var I=f[E],F=I.instance,ee=I.currentTarget;if(I=I.listener,F!==v&&p.isPropagationStopped())break e;Vh(p,I,ee),v=F}else for(E=0;E<f.length;E++){if(I=f[E],F=I.instance,ee=I.currentTarget,I=I.listener,F!==v&&p.isPropagationStopped())break e;Vh(p,I,ee),v=F}}}if(Gr)throw n=ar,Gr=!1,ar=null,n}function kt(n,r){var l=r[Ju];l===void 0&&(l=r[Ju]=new Set);var f=n+"__bubble";l.has(f)||(Wh(r,n,2,!1),l.add(f))}function ju(n,r,l){var f=0;r&&(f|=4),Wh(l,n,f,r)}var ja="_reactListening"+Math.random().toString(36).slice(2);function Vo(n){if(!n[ja]){n[ja]=!0,i.forEach(function(l){l!=="selectionchange"&&(Uv.has(l)||ju(l,!1,n),ju(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ja]||(r[ja]=!0,ju("selectionchange",!1,r))}}function Wh(n,r,l,f){switch(hh(r)){case 1:var p=K_;break;case 4:p=$_;break;default:p=bu}l=p.bind(null,r,l,n),p=void 0,!_s||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),f?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Yu(n,r,l,f,p){var v=f;if(!(r&1)&&!(r&2)&&f!==null)e:for(;;){if(f===null)return;var E=f.tag;if(E===3||E===4){var I=f.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(E===4)for(E=f.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===p||F.nodeType===8&&F.parentNode===p))return;E=E.return}for(;I!==null;){if(E=Wr(I),E===null)return;if(F=E.tag,F===5||F===6){f=v=E;continue e}I=I.parentNode}}f=f.return}Nn(function(){var ee=v,_e=G(l),xe=[];e:{var me=zh.get(n);if(me!==void 0){var Ie=Iu,ze=n;switch(n){case"keypress":if(za(l)===0)break e;case"keydown":case"keyup":Ie=fv;break;case"focusin":ze="focus",Ie=Uu;break;case"focusout":ze="blur",Ie=Uu;break;case"beforeblur":case"afterblur":Ie=Uu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=J_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=pv;break;case Fh:case Oh:case kh:Ie=nv;break;case Bh:Ie=gv;break;case"scroll":Ie=Z_;break;case"wheel":Ie=vv;break;case"copy":case"cut":case"paste":Ie=rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=vh}var Ve=(r&4)!==0,qt=!Ve&&n==="scroll",q=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var H=ee,$;H!==null;){$=H;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,q!==null&&(Ee=En(H,q),Ee!=null&&Ve.push(Go(H,Ee,$)))),qt)break;H=H.return}0<Ve.length&&(me=new Ie(me,ze,null,l,_e),xe.push({event:me,listeners:Ve}))}}if(!(r&7)){e:{if(me=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",me&&l!==Rt&&(ze=l.relatedTarget||l.fromElement)&&(Wr(ze)||ze[Ui]))break e;if((Ie||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ze=l.relatedTarget||l.toElement,Ie=ee,ze=ze?Wr(ze):null,ze!==null&&(qt=yi(ze),ze!==qt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=ee),Ie!==ze)){if(Ve=gh,Ee="onMouseLeave",q="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=vh,Ee="onPointerLeave",q="onPointerEnter",H="pointer"),qt=Ie==null?me:ws(Ie),$=ze==null?me:ws(ze),me=new Ve(Ee,H+"leave",Ie,l,_e),me.target=qt,me.relatedTarget=$,Ee=null,Wr(_e)===ee&&(Ve=new Ve(q,H+"enter",ze,l,_e),Ve.target=$,Ve.relatedTarget=qt,Ee=Ve),qt=Ee,Ie&&ze)t:{for(Ve=Ie,q=ze,H=0,$=Ve;$;$=Ts($))H++;for($=0,Ee=q;Ee;Ee=Ts(Ee))$++;for(;0<H-$;)Ve=Ts(Ve),H--;for(;0<$-H;)q=Ts(q),$--;for(;H--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=Ts(Ve),q=Ts(q)}Ve=null}else Ve=null;Ie!==null&&Xh(xe,me,Ie,Ve,!1),ze!==null&&qt!==null&&Xh(xe,qt,ze,Ve,!0)}}e:{if(me=ee?ws(ee):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var Xe=Av;else if(Th(me))if(wh)Xe=bv;else{Xe=Rv;var Ke=wv}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Cv);if(Xe&&(Xe=Xe(n,ee))){Ah(xe,Xe,l,_e);break e}Ke&&Ke(n,me,ee),n==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Pt(me,"number",me.value)}switch(Ke=ee?ws(ee):window,n){case"focusin":(Th(Ke)||Ke.contentEditable==="true")&&(Ms=Ke,Hu=ee,zo=null);break;case"focusout":zo=Hu=Ms=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Nh(xe,l,_e);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":Nh(xe,l,_e)}var $e;if(Ou)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Ss?Mh(n,l)&&(tt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(tt="onCompositionStart");tt&&(xh&&l.locale!=="ko"&&(Ss||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Ss&&($e=ph()):(hr=_e,Lu="value"in hr?hr.value:hr.textContent,Ss=!0)),Ke=Ya(ee,tt),0<Ke.length&&(tt=new _h(tt,n,null,l,_e),xe.push({event:tt,listeners:Ke}),$e?tt.data=$e:($e=Eh(l),$e!==null&&(tt.data=$e)))),($e=yv?Sv(n,l):Mv(n,l))&&(ee=Ya(ee,"onBeforeInput"),0<ee.length&&(_e=new _h("onBeforeInput","beforeinput",null,l,_e),xe.push({event:_e,listeners:ee}),_e.data=$e))}Gh(xe,r)})}function Go(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Ya(n,r){for(var l=r+"Capture",f=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=En(n,l),v!=null&&f.unshift(Go(n,v,p)),v=En(n,r),v!=null&&f.push(Go(n,v,p))),n=n.return}return f}function Ts(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xh(n,r,l,f,p){for(var v=r._reactName,E=[];l!==null&&l!==f;){var I=l,F=I.alternate,ee=I.stateNode;if(F!==null&&F===f)break;I.tag===5&&ee!==null&&(I=ee,p?(F=En(l,v),F!=null&&E.unshift(Go(l,F,I))):p||(F=En(l,v),F!=null&&E.push(Go(l,F,I)))),l=l.return}E.length!==0&&n.push({event:r,listeners:E})}var Fv=/\r\n?/g,Ov=/\u0000|\uFFFD/g;function jh(n){return(typeof n=="string"?n:""+n).replace(Fv,`
`).replace(Ov,"")}function qa(n,r,l){if(r=jh(r),jh(n)!==r&&l)throw Error(t(425))}function Ka(){}var qu=null,Ku=null;function $u(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,Bv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(n){return Yh.resolve(null).then(n).catch(zv)}:Zu;function zv(n){setTimeout(function(){throw n})}function Qu(n,r){var l=r,f=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(f===0){n.removeChild(p),Do(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=p}while(l);Do(r)}function mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function qh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var As=Math.random().toString(36).slice(2),Mi="__reactFiber$"+As,Wo="__reactProps$"+As,Ui="__reactContainer$"+As,Ju="__reactEvents$"+As,Hv="__reactListeners$"+As,Vv="__reactHandles$"+As;function Wr(n){var r=n[Mi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Ui]||l[Mi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=qh(n);n!==null;){if(l=n[Mi])return l;n=qh(n)}return r}n=l,l=n.parentNode}return null}function Xo(n){return n=n[Mi]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function $a(n){return n[Wo]||null}var ec=[],Rs=-1;function gr(n){return{current:n}}function Bt(n){0>Rs||(n.current=ec[Rs],ec[Rs]=null,Rs--)}function Ft(n,r){Rs++,ec[Rs]=n.current,n.current=r}var _r={},gn=gr(_r),Un=gr(!1),Xr=_r;function Cs(n,r){var l=n.type.contextTypes;if(!l)return _r;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Fn(n){return n=n.childContextTypes,n!=null}function Za(){Bt(Un),Bt(gn)}function Kh(n,r,l){if(gn.current!==_r)throw Error(t(168));Ft(gn,r),Ft(Un,l)}function $h(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var p in f)if(!(p in r))throw Error(t(108,ve(n)||"Unknown",p));return re({},l,f)}function Qa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Xr=gn.current,Ft(gn,n),Ft(Un,Un.current),!0}function Zh(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=$h(n,r,Xr),f.__reactInternalMemoizedMergedChildContext=n,Bt(Un),Bt(gn),Ft(gn,n)):Bt(Un),Ft(Un,l)}var Fi=null,Ja=!1,tc=!1;function Qh(n){Fi===null?Fi=[n]:Fi.push(n)}function Gv(n){Ja=!0,Qh(n)}function vr(){if(!tc&&Fi!==null){tc=!0;var n=0,r=Et;try{var l=Fi;for(Et=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}Fi=null,Ja=!1}catch(p){throw Fi!==null&&(Fi=Fi.slice(n+1)),Na(ye,vr),p}finally{Et=r,tc=!1}}return null}var bs=[],Ps=0,el=null,tl=0,Kn=[],$n=0,jr=null,Oi=1,ki="";function Yr(n,r){bs[Ps++]=tl,bs[Ps++]=el,el=n,tl=r}function Jh(n,r,l){Kn[$n++]=Oi,Kn[$n++]=ki,Kn[$n++]=jr,jr=n;var f=Oi;n=ki;var p=32-st(f)-1;f&=~(1<<p),l+=1;var v=32-st(r)+p;if(30<v){var E=p-p%5;v=(f&(1<<E)-1).toString(32),f>>=E,p-=E,Oi=1<<32-st(r)+p|l<<p|f,ki=v+n}else Oi=1<<v|l<<p|f,ki=n}function nc(n){n.return!==null&&(Yr(n,1),Jh(n,1,0))}function ic(n){for(;n===el;)el=bs[--Ps],bs[Ps]=null,tl=bs[--Ps],bs[Ps]=null;for(;n===jr;)jr=Kn[--$n],Kn[$n]=null,ki=Kn[--$n],Kn[$n]=null,Oi=Kn[--$n],Kn[$n]=null}var Gn=null,Wn=null,Ht=!1,si=null;function ep(n,r){var l=ei(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function tp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Gn=n,Wn=mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Gn=n,Wn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=jr!==null?{id:Oi,overflow:ki}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ei(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Gn=n,Wn=null,!0):!1;default:return!1}}function rc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function sc(n){if(Ht){var r=Wn;if(r){var l=r;if(!tp(n,r)){if(rc(n))throw Error(t(418));r=mr(l.nextSibling);var f=Gn;r&&tp(n,r)?ep(f,l):(n.flags=n.flags&-4097|2,Ht=!1,Gn=n)}}else{if(rc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,Gn=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function nl(n){if(n!==Gn)return!1;if(!Ht)return np(n),Ht=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!$u(n.type,n.memoizedProps)),r&&(r=Wn)){if(rc(n))throw ip(),Error(t(418));for(;r;)ep(n,r),r=mr(r.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Wn=mr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Wn=null}}else Wn=Gn?mr(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=Wn;n;)n=mr(n.nextSibling)}function Ls(){Wn=Gn=null,Ht=!1}function oc(n){si===null?si=[n]:si.push(n)}var Wv=C.ReactCurrentBatchConfig;function jo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var p=f,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(E){var I=p.refs;E===null?delete I[v]:I[v]=E},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function il(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function rp(n){var r=n._init;return r(n._payload)}function sp(n){function r(q,H){if(n){var $=q.deletions;$===null?(q.deletions=[H],q.flags|=16):$.push(H)}}function l(q,H){if(!n)return null;for(;H!==null;)r(q,H),H=H.sibling;return null}function f(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function p(q,H){return q=wr(q,H),q.index=0,q.sibling=null,q}function v(q,H,$){return q.index=$,n?($=q.alternate,$!==null?($=$.index,$<H?(q.flags|=2,H):$):(q.flags|=2,H)):(q.flags|=1048576,H)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function I(q,H,$,Ee){return H===null||H.tag!==6?(H=Zc($,q.mode,Ee),H.return=q,H):(H=p(H,$),H.return=q,H)}function F(q,H,$,Ee){var Xe=$.type;return Xe===U?_e(q,H,$.props.children,Ee,$.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&rp(Xe)===H.type)?(Ee=p(H,$.props),Ee.ref=jo(q,H,$),Ee.return=q,Ee):(Ee=Rl($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=jo(q,H,$),Ee.return=q,Ee)}function ee(q,H,$,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=Qc($,q.mode,Ee),H.return=q,H):(H=p(H,$.children||[]),H.return=q,H)}function _e(q,H,$,Ee,Xe){return H===null||H.tag!==7?(H=ts($,q.mode,Ee,Xe),H.return=q,H):(H=p(H,$),H.return=q,H)}function xe(q,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Zc(""+H,q.mode,$),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case V:return $=Rl(H.type,H.key,H.props,null,q.mode,$),$.ref=jo(q,null,H),$.return=q,$;case O:return H=Qc(H,q.mode,$),H.return=q,H;case se:var Ee=H._init;return xe(q,Ee(H._payload),$)}if(Ge(H)||ae(H))return H=ts(H,q.mode,$,null),H.return=q,H;il(q,H)}return null}function me(q,H,$,Ee){var Xe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:I(q,H,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case V:return $.key===Xe?F(q,H,$,Ee):null;case O:return $.key===Xe?ee(q,H,$,Ee):null;case se:return Xe=$._init,me(q,H,Xe($._payload),Ee)}if(Ge($)||ae($))return Xe!==null?null:_e(q,H,$,Ee,null);il(q,$)}return null}function Ie(q,H,$,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get($)||null,I(H,q,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return q=q.get(Ee.key===null?$:Ee.key)||null,F(H,q,Ee,Xe);case O:return q=q.get(Ee.key===null?$:Ee.key)||null,ee(H,q,Ee,Xe);case se:var Ke=Ee._init;return Ie(q,H,$,Ke(Ee._payload),Xe)}if(Ge(Ee)||ae(Ee))return q=q.get($)||null,_e(H,q,Ee,Xe,null);il(H,Ee)}return null}function ze(q,H,$,Ee){for(var Xe=null,Ke=null,$e=H,tt=H=0,an=null;$e!==null&&tt<$.length;tt++){$e.index>tt?(an=$e,$e=null):an=$e.sibling;var At=me(q,$e,$[tt],Ee);if(At===null){$e===null&&($e=an);break}n&&$e&&At.alternate===null&&r(q,$e),H=v(At,H,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At,$e=an}if(tt===$.length)return l(q,$e),Ht&&Yr(q,tt),Xe;if($e===null){for(;tt<$.length;tt++)$e=xe(q,$[tt],Ee),$e!==null&&(H=v($e,H,tt),Ke===null?Xe=$e:Ke.sibling=$e,Ke=$e);return Ht&&Yr(q,tt),Xe}for($e=f(q,$e);tt<$.length;tt++)an=Ie($e,q,tt,$[tt],Ee),an!==null&&(n&&an.alternate!==null&&$e.delete(an.key===null?tt:an.key),H=v(an,H,tt),Ke===null?Xe=an:Ke.sibling=an,Ke=an);return n&&$e.forEach(function(Rr){return r(q,Rr)}),Ht&&Yr(q,tt),Xe}function Ve(q,H,$,Ee){var Xe=ae($);if(typeof Xe!="function")throw Error(t(150));if($=Xe.call($),$==null)throw Error(t(151));for(var Ke=Xe=null,$e=H,tt=H=0,an=null,At=$.next();$e!==null&&!At.done;tt++,At=$.next()){$e.index>tt?(an=$e,$e=null):an=$e.sibling;var Rr=me(q,$e,At.value,Ee);if(Rr===null){$e===null&&($e=an);break}n&&$e&&Rr.alternate===null&&r(q,$e),H=v(Rr,H,tt),Ke===null?Xe=Rr:Ke.sibling=Rr,Ke=Rr,$e=an}if(At.done)return l(q,$e),Ht&&Yr(q,tt),Xe;if($e===null){for(;!At.done;tt++,At=$.next())At=xe(q,At.value,Ee),At!==null&&(H=v(At,H,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At);return Ht&&Yr(q,tt),Xe}for($e=f(q,$e);!At.done;tt++,At=$.next())At=Ie($e,q,tt,At.value,Ee),At!==null&&(n&&At.alternate!==null&&$e.delete(At.key===null?tt:At.key),H=v(At,H,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At);return n&&$e.forEach(function(M0){return r(q,M0)}),Ht&&Yr(q,tt),Xe}function qt(q,H,$,Ee){if(typeof $=="object"&&$!==null&&$.type===U&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case V:e:{for(var Xe=$.key,Ke=H;Ke!==null;){if(Ke.key===Xe){if(Xe=$.type,Xe===U){if(Ke.tag===7){l(q,Ke.sibling),H=p(Ke,$.props.children),H.return=q,q=H;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&rp(Xe)===Ke.type){l(q,Ke.sibling),H=p(Ke,$.props),H.ref=jo(q,Ke,$),H.return=q,q=H;break e}l(q,Ke);break}else r(q,Ke);Ke=Ke.sibling}$.type===U?(H=ts($.props.children,q.mode,Ee,$.key),H.return=q,q=H):(Ee=Rl($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=jo(q,H,$),Ee.return=q,q=Ee)}return E(q);case O:e:{for(Ke=$.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){l(q,H.sibling),H=p(H,$.children||[]),H.return=q,q=H;break e}else{l(q,H);break}else r(q,H);H=H.sibling}H=Qc($,q.mode,Ee),H.return=q,q=H}return E(q);case se:return Ke=$._init,qt(q,H,Ke($._payload),Ee)}if(Ge($))return ze(q,H,$,Ee);if(ae($))return Ve(q,H,$,Ee);il(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(l(q,H.sibling),H=p(H,$),H.return=q,q=H):(l(q,H),H=Zc($,q.mode,Ee),H.return=q,q=H),E(q)):l(q,H)}return qt}var Is=sp(!0),op=sp(!1),rl=gr(null),sl=null,Ds=null,ac=null;function lc(){ac=Ds=sl=null}function uc(n){var r=rl.current;Bt(rl),n._currentValue=r}function cc(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Ns(n,r){sl=n,ac=Ds=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(On=!0),n.firstContext=null)}function Zn(n){var r=n._currentValue;if(ac!==n)if(n={context:n,memoizedValue:r,next:null},Ds===null){if(sl===null)throw Error(t(308));Ds=n,sl.dependencies={lanes:0,firstContext:n}}else Ds=Ds.next=n;return r}var qr=null;function fc(n){qr===null?qr=[n]:qr.push(n)}function ap(n,r,l,f){var p=r.interleaved;return p===null?(l.next=l,fc(r)):(l.next=p.next,p.next=l),r.interleaved=l,Bi(n,f)}function Bi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var xr=!1;function dc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function yr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,Tt&2){var p=f.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),f.pending=r,Bi(n,l)}return p=f.interleaved,p===null?(r.next=r,fc(f)):(r.next=p.next,p.next=r),f.interleaved=r,Bi(n,l)}function ol(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,rn(n,l)}}function up(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=E:v=v.next=E,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function al(n,r,l,f){var p=n.updateQueue;xr=!1;var v=p.firstBaseUpdate,E=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var F=I,ee=F.next;F.next=null,E===null?v=ee:E.next=ee,E=F;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==E&&(I===null?_e.firstBaseUpdate=ee:I.next=ee,_e.lastBaseUpdate=F))}if(v!==null){var xe=p.baseState;E=0,_e=ee=F=null,I=v;do{var me=I.lane,Ie=I.eventTime;if((f&me)===me){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,Ve=I;switch(me=r,Ie=l,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){xe=ze.call(Ie,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(Ie,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:xr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,me=p.effects,me===null?p.effects=[I]:me.push(I))}else Ie={eventTime:Ie,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ee=_e=Ie,F=xe):_e=_e.next=Ie,E|=me;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;me=I,I=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(_e===null&&(F=xe),p.baseState=F,p.firstBaseUpdate=ee,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do E|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);Zr|=E,n.lanes=E,n.memoizedState=xe}}function cp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],p=f.callback;if(p!==null){if(f.callback=null,f=l,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var Yo={},Ei=gr(Yo),qo=gr(Yo),Ko=gr(Yo);function Kr(n){if(n===Yo)throw Error(t(174));return n}function hc(n,r){switch(Ft(Ko,r),Ft(qo,n),Ft(Ei,Yo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:We(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=We(r,n)}Bt(Ei),Ft(Ei,r)}function Us(){Bt(Ei),Bt(qo),Bt(Ko)}function fp(n){Kr(Ko.current);var r=Kr(Ei.current),l=We(r,n.type);r!==l&&(Ft(qo,n),Ft(Ei,l))}function pc(n){qo.current===n&&(Bt(Ei),Bt(qo))}var Vt=gr(0);function ll(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var mc=[];function gc(){for(var n=0;n<mc.length;n++)mc[n]._workInProgressVersionPrimary=null;mc.length=0}var ul=C.ReactCurrentDispatcher,_c=C.ReactCurrentBatchConfig,$r=0,Gt=null,Qt=null,sn=null,cl=!1,$o=!1,Zo=0,Xv=0;function _n(){throw Error(t(321))}function vc(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!ri(n[l],r[l]))return!1;return!0}function xc(n,r,l,f,p,v){if($r=v,Gt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ul.current=n===null||n.memoizedState===null?Kv:$v,n=l(f,p),$o){v=0;do{if($o=!1,Zo=0,25<=v)throw Error(t(301));v+=1,sn=Qt=null,r.updateQueue=null,ul.current=Zv,n=l(f,p)}while($o)}if(ul.current=hl,r=Qt!==null&&Qt.next!==null,$r=0,sn=Qt=Gt=null,cl=!1,r)throw Error(t(300));return n}function yc(){var n=Zo!==0;return Zo=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Gt.memoizedState=sn=n:sn=sn.next=n,sn}function Qn(){if(Qt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var r=sn===null?Gt.memoizedState:sn.next;if(r!==null)sn=r,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},sn===null?Gt.memoizedState=sn=n:sn=sn.next=n}return sn}function Qo(n,r){return typeof r=="function"?r(n):r}function Sc(n){var r=Qn(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=Qt,p=f.baseQueue,v=l.pending;if(v!==null){if(p!==null){var E=p.next;p.next=v.next,v.next=E}f.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,f=f.baseState;var I=E=null,F=null,ee=v;do{var _e=ee.lane;if(($r&_e)===_e)F!==null&&(F=F.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),f=ee.hasEagerState?ee.eagerState:n(f,ee.action);else{var xe={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};F===null?(I=F=xe,E=f):F=F.next=xe,Gt.lanes|=_e,Zr|=_e}ee=ee.next}while(ee!==null&&ee!==v);F===null?E=f:F.next=I,ri(f,r.memoizedState)||(On=!0),r.memoizedState=f,r.baseState=E,r.baseQueue=F,l.lastRenderedState=f}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Gt.lanes|=v,Zr|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Mc(n){var r=Qn(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do v=n(v,E.action),E=E.next;while(E!==p);ri(v,r.memoizedState)||(On=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,f]}function dp(){}function hp(n,r){var l=Gt,f=Qn(),p=r(),v=!ri(f.memoizedState,p);if(v&&(f.memoizedState=p,On=!0),f=f.queue,Ec(gp.bind(null,l,f,n),[n]),f.getSnapshot!==r||v||sn!==null&&sn.memoizedState.tag&1){if(l.flags|=2048,Jo(9,mp.bind(null,l,f,p,r),void 0,null),on===null)throw Error(t(349));$r&30||pp(l,r,p)}return p}function pp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Gt.updateQueue,r===null?(r={lastEffect:null,stores:null},Gt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function mp(n,r,l,f){r.value=l,r.getSnapshot=f,_p(r)&&vp(n)}function gp(n,r,l){return l(function(){_p(r)&&vp(n)})}function _p(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!ri(n,l)}catch{return!0}}function vp(n){var r=Bi(n,1);r!==null&&ui(r,n,1,-1)}function xp(n){var r=Ti();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:n},r.queue=n,n=n.dispatch=qv.bind(null,Gt,n),[r.memoizedState,n]}function Jo(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Gt.updateQueue,r===null?(r={lastEffect:null,stores:null},Gt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function yp(){return Qn().memoizedState}function fl(n,r,l,f){var p=Ti();Gt.flags|=n,p.memoizedState=Jo(1|r,l,void 0,f===void 0?null:f)}function dl(n,r,l,f){var p=Qn();f=f===void 0?null:f;var v=void 0;if(Qt!==null){var E=Qt.memoizedState;if(v=E.destroy,f!==null&&vc(f,E.deps)){p.memoizedState=Jo(r,l,v,f);return}}Gt.flags|=n,p.memoizedState=Jo(1|r,l,v,f)}function Sp(n,r){return fl(8390656,8,n,r)}function Ec(n,r){return dl(2048,8,n,r)}function Mp(n,r){return dl(4,2,n,r)}function Ep(n,r){return dl(4,4,n,r)}function Tp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ap(n,r,l){return l=l!=null?l.concat([n]):null,dl(4,4,Tp.bind(null,r,n),l)}function Tc(){}function wp(n,r){var l=Qn();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&vc(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function Rp(n,r){var l=Qn();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&vc(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function Cp(n,r,l){return $r&21?(ri(l,r)||(l=Nt(),Gt.lanes|=l,Zr|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=l)}function jv(n,r){var l=Et;Et=l!==0&&4>l?l:4,n(!0);var f=_c.transition;_c.transition={};try{n(!1),r()}finally{Et=l,_c.transition=f}}function bp(){return Qn().memoizedState}function Yv(n,r,l){var f=Tr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Pp(n))Lp(r,l);else if(l=ap(n,r,l,f),l!==null){var p=wn();ui(l,n,f,p),Ip(l,r,f)}}function qv(n,r,l){var f=Tr(n),p={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Pp(n))Lp(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var E=r.lastRenderedState,I=v(E,l);if(p.hasEagerState=!0,p.eagerState=I,ri(I,E)){var F=r.interleaved;F===null?(p.next=p,fc(r)):(p.next=F.next,F.next=p),r.interleaved=p;return}}catch{}finally{}l=ap(n,r,p,f),l!==null&&(p=wn(),ui(l,n,f,p),Ip(l,r,f))}}function Pp(n){var r=n.alternate;return n===Gt||r!==null&&r===Gt}function Lp(n,r){$o=cl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Ip(n,r,l){if(l&4194240){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,rn(n,l)}}var hl={readContext:Zn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},Kv={readContext:Zn,useCallback:function(n,r){return Ti().memoizedState=[n,r===void 0?null:r],n},useContext:Zn,useEffect:Sp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,fl(4194308,4,Tp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return fl(4194308,4,n,r)},useInsertionEffect:function(n,r){return fl(4,2,n,r)},useMemo:function(n,r){var l=Ti();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Ti();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=Yv.bind(null,Gt,n),[f.memoizedState,n]},useRef:function(n){var r=Ti();return n={current:n},r.memoizedState=n},useState:xp,useDebugValue:Tc,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=xp(!1),r=n[0];return n=jv.bind(null,n[1]),Ti().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Gt,p=Ti();if(Ht){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),on===null)throw Error(t(349));$r&30||pp(f,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,Sp(gp.bind(null,f,v,n),[n]),f.flags|=2048,Jo(9,mp.bind(null,f,v,l,r),void 0,null),l},useId:function(){var n=Ti(),r=on.identifierPrefix;if(Ht){var l=ki,f=Oi;l=(f&~(1<<32-st(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Zo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Xv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},$v={readContext:Zn,useCallback:wp,useContext:Zn,useEffect:Ec,useImperativeHandle:Ap,useInsertionEffect:Mp,useLayoutEffect:Ep,useMemo:Rp,useReducer:Sc,useRef:yp,useState:function(){return Sc(Qo)},useDebugValue:Tc,useDeferredValue:function(n){var r=Qn();return Cp(r,Qt.memoizedState,n)},useTransition:function(){var n=Sc(Qo)[0],r=Qn().memoizedState;return[n,r]},useMutableSource:dp,useSyncExternalStore:hp,useId:bp,unstable_isNewReconciler:!1},Zv={readContext:Zn,useCallback:wp,useContext:Zn,useEffect:Ec,useImperativeHandle:Ap,useInsertionEffect:Mp,useLayoutEffect:Ep,useMemo:Rp,useReducer:Mc,useRef:yp,useState:function(){return Mc(Qo)},useDebugValue:Tc,useDeferredValue:function(n){var r=Qn();return Qt===null?r.memoizedState=n:Cp(r,Qt.memoizedState,n)},useTransition:function(){var n=Mc(Qo)[0],r=Qn().memoizedState;return[n,r]},useMutableSource:dp,useSyncExternalStore:hp,useId:bp,unstable_isNewReconciler:!1};function oi(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ac(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:re({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var pl={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=wn(),p=Tr(n),v=zi(f,p);v.payload=r,l!=null&&(v.callback=l),r=yr(n,v,p),r!==null&&(ui(r,n,p,f),ol(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=wn(),p=Tr(n),v=zi(f,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=yr(n,v,p),r!==null&&(ui(r,n,p,f),ol(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=wn(),f=Tr(n),p=zi(l,f);p.tag=2,r!=null&&(p.callback=r),r=yr(n,p,f),r!==null&&(ui(r,n,f,l),ol(r,n,f))}};function Dp(n,r,l,f,p,v,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,v,E):r.prototype&&r.prototype.isPureReactComponent?!Bo(l,f)||!Bo(p,v):!0}function Np(n,r,l){var f=!1,p=_r,v=r.contextType;return typeof v=="object"&&v!==null?v=Zn(v):(p=Fn(r)?Xr:gn.current,f=r.contextTypes,v=(f=f!=null)?Cs(n,p):_r),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=pl,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Up(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&pl.enqueueReplaceState(r,r.state,null)}function wc(n,r,l,f){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},dc(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=Zn(v):(v=Fn(r)?Xr:gn.current,p.context=Cs(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Ac(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&pl.enqueueReplaceState(p,p.state,null),al(n,l,p,f),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,r){try{var l="",f=r;do l+=de(f),f=f.return;while(f);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function Rc(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Cc(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Qv=typeof WeakMap=="function"?WeakMap:Map;function Fp(n,r,l){l=zi(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){Sl||(Sl=!0,Gc=f),Cc(n,r)},l}function Op(n,r,l){l=zi(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var p=r.value;l.payload=function(){return f(p)},l.callback=function(){Cc(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Cc(n,r),typeof f!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),l}function kp(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new Qv;var p=new Set;f.set(r,p)}else p=f.get(r),p===void 0&&(p=new Set,f.set(r,p));p.has(l)||(p.add(l),n=d0.bind(null,n,r,l),r.then(n,n))}function Bp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function zp(n,r,l,f,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=zi(-1,1),r.tag=2,yr(l,r,1))),l.lanes|=1),n)}var Jv=C.ReactCurrentOwner,On=!1;function An(n,r,l,f){r.child=n===null?op(r,null,l,f):Is(r,n.child,l,f)}function Hp(n,r,l,f,p){l=l.render;var v=r.ref;return Ns(r,p),f=xc(n,r,l,f,v,p),l=yc(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Hi(n,r,p)):(Ht&&l&&nc(r),r.flags|=1,An(n,r,f,p),r.child)}function Vp(n,r,l,f,p){if(n===null){var v=l.type;return typeof v=="function"&&!$c(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Gp(n,r,v,f,p)):(n=Rl(l.type,null,f,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,!(n.lanes&p)){var E=v.memoizedProps;if(l=l.compare,l=l!==null?l:Bo,l(E,f)&&n.ref===r.ref)return Hi(n,r,p)}return r.flags|=1,n=wr(v,f),n.ref=r.ref,n.return=r,r.child=n}function Gp(n,r,l,f,p){if(n!==null){var v=n.memoizedProps;if(Bo(v,f)&&n.ref===r.ref)if(On=!1,r.pendingProps=f=v,(n.lanes&p)!==0)n.flags&131072&&(On=!0);else return r.lanes=n.lanes,Hi(n,r,p)}return bc(n,r,l,f,p)}function Wp(n,r,l){var f=r.pendingProps,p=f.children,v=n!==null?n.memoizedState:null;if(f.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(ks,Xn),Xn|=l;else{if(!(l&1073741824))return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ft(ks,Xn),Xn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:l,Ft(ks,Xn),Xn|=f}else v!==null?(f=v.baseLanes|l,r.memoizedState=null):f=l,Ft(ks,Xn),Xn|=f;return An(n,r,p,l),r.child}function Xp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function bc(n,r,l,f,p){var v=Fn(l)?Xr:gn.current;return v=Cs(r,v),Ns(r,p),l=xc(n,r,l,f,v,p),f=yc(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Hi(n,r,p)):(Ht&&f&&nc(r),r.flags|=1,An(n,r,l,p),r.child)}function jp(n,r,l,f,p){if(Fn(l)){var v=!0;Qa(r)}else v=!1;if(Ns(r,p),r.stateNode===null)gl(n,r),Np(r,l,f),wc(r,l,f,p),f=!0;else if(n===null){var E=r.stateNode,I=r.memoizedProps;E.props=I;var F=E.context,ee=l.contextType;typeof ee=="object"&&ee!==null?ee=Zn(ee):(ee=Fn(l)?Xr:gn.current,ee=Cs(r,ee));var _e=l.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==f||F!==ee)&&Up(r,E,f,ee),xr=!1;var me=r.memoizedState;E.state=me,al(r,f,E,p),F=r.memoizedState,I!==f||me!==F||Un.current||xr?(typeof _e=="function"&&(Ac(r,l,_e,f),F=r.memoizedState),(I=xr||Dp(r,l,I,f,me,F,ee))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=F),E.props=f,E.state=F,E.context=ee,f=I):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{E=r.stateNode,lp(n,r),I=r.memoizedProps,ee=r.type===r.elementType?I:oi(r.type,I),E.props=ee,xe=r.pendingProps,me=E.context,F=l.contextType,typeof F=="object"&&F!==null?F=Zn(F):(F=Fn(l)?Xr:gn.current,F=Cs(r,F));var Ie=l.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==xe||me!==F)&&Up(r,E,f,F),xr=!1,me=r.memoizedState,E.state=me,al(r,f,E,p);var ze=r.memoizedState;I!==xe||me!==ze||Un.current||xr?(typeof Ie=="function"&&(Ac(r,l,Ie,f),ze=r.memoizedState),(ee=xr||Dp(r,l,ee,f,me,ze,F)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(f,ze,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(f,ze,F)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=ze),E.props=f,E.state=ze,E.context=F,f=ee):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),f=!1)}return Pc(n,r,l,f,v,p)}function Pc(n,r,l,f,p,v){Xp(n,r);var E=(r.flags&128)!==0;if(!f&&!E)return p&&Zh(r,l,!1),Hi(n,r,v);f=r.stateNode,Jv.current=r;var I=E&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&E?(r.child=Is(r,n.child,null,v),r.child=Is(r,null,I,v)):An(n,r,I,v),r.memoizedState=f.state,p&&Zh(r,l,!0),r.child}function Yp(n){var r=n.stateNode;r.pendingContext?Kh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Kh(n,r.context,!1),hc(n,r.containerInfo)}function qp(n,r,l,f,p){return Ls(),oc(p),r.flags|=256,An(n,r,l,f),r.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Ic(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kp(n,r,l){var f=r.pendingProps,p=Vt.current,v=!1,E=(r.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(p&2)!==0),I?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ft(Vt,p&1),n===null)return sc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(E=f.children,n=f.fallback,v?(f=r.mode,v=r.child,E={mode:"hidden",children:E},!(f&1)&&v!==null?(v.childLanes=0,v.pendingProps=E):v=Cl(E,f,0,null),n=ts(n,f,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Ic(l),r.memoizedState=Lc,n):Dc(r,E));if(p=n.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return e0(n,r,E,f,I,p,l);if(v){v=f.fallback,E=r.mode,p=n.child,I=p.sibling;var F={mode:"hidden",children:f.children};return!(E&1)&&r.child!==p?(f=r.child,f.childLanes=0,f.pendingProps=F,r.deletions=null):(f=wr(p,F),f.subtreeFlags=p.subtreeFlags&14680064),I!==null?v=wr(I,v):(v=ts(v,E,l,null),v.flags|=2),v.return=r,f.return=r,f.sibling=v,r.child=f,f=v,v=r.child,E=n.child.memoizedState,E=E===null?Ic(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},v.memoizedState=E,v.childLanes=n.childLanes&~l,r.memoizedState=Lc,f}return v=n.child,n=v.sibling,f=wr(v,{mode:"visible",children:f.children}),!(r.mode&1)&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Dc(n,r){return r=Cl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ml(n,r,l,f){return f!==null&&oc(f),Is(r,n.child,null,l),n=Dc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function e0(n,r,l,f,p,v,E){if(l)return r.flags&256?(r.flags&=-257,f=Rc(Error(t(422))),ml(n,r,E,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=f.fallback,p=r.mode,f=Cl({mode:"visible",children:f.children},p,0,null),v=ts(v,p,E,null),v.flags|=2,f.return=r,v.return=r,f.sibling=v,r.child=f,r.mode&1&&Is(r,n.child,null,E),r.child.memoizedState=Ic(E),r.memoizedState=Lc,v);if(!(r.mode&1))return ml(n,r,E,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var I=f.dgst;return f=I,v=Error(t(419)),f=Rc(v,f,void 0),ml(n,r,E,f)}if(I=(E&n.childLanes)!==0,On||I){if(f=on,f!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(f.suspendedLanes|E)?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Bi(n,p),ui(f,n,p,-1))}return Kc(),f=Rc(Error(t(421))),ml(n,r,E,f)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=h0.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Wn=mr(p.nextSibling),Gn=r,Ht=!0,si=null,n!==null&&(Kn[$n++]=Oi,Kn[$n++]=ki,Kn[$n++]=jr,Oi=n.id,ki=n.overflow,jr=r),r=Dc(r,f.children),r.flags|=4096,r)}function $p(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),cc(n.return,r,l)}function Nc(n,r,l,f,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=l,v.tailMode=p)}function Zp(n,r,l){var f=r.pendingProps,p=f.revealOrder,v=f.tail;if(An(n,r,f.children,l),f=Vt.current,f&2)f=f&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,l,r);else if(n.tag===19)$p(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Ft(Vt,f),!(r.mode&1))r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&ll(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Nc(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&ll(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Nc(r,!0,l,null,v);break;case"together":Nc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function gl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Hi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Zr|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=wr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=wr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function t0(n,r,l){switch(r.tag){case 3:Yp(r),Ls();break;case 5:fp(r);break;case 1:Fn(r.type)&&Qa(r);break;case 4:hc(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,p=r.memoizedProps.value;Ft(rl,f._currentValue),f._currentValue=p;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Ft(Vt,Vt.current&1),r.flags|=128,null):l&r.child.childLanes?Kp(n,r,l):(Ft(Vt,Vt.current&1),n=Hi(n,r,l),n!==null?n.sibling:null);Ft(Vt,Vt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,n.flags&128){if(f)return Zp(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ft(Vt,Vt.current),f)break;return null;case 22:case 23:return r.lanes=0,Wp(n,r,l)}return Hi(n,r,l)}var Qp,Uc,Jp,em;Qp=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Uc=function(){},Jp=function(n,r,l,f){var p=n.memoizedProps;if(p!==f){n=r.stateNode,Kr(Ei.current);var v=null;switch(l){case"input":p=k(n,p),f=k(n,f),v=[];break;case"select":p=re({},p,{value:void 0}),f=re({},f,{value:void 0}),v=[];break;case"textarea":p=A(n,p),f=A(n,f),v=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Ka)}ft(l,f);var E;l=null;for(ee in p)if(!f.hasOwnProperty(ee)&&p.hasOwnProperty(ee)&&p[ee]!=null)if(ee==="style"){var I=p[ee];for(E in I)I.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(s.hasOwnProperty(ee)?v||(v=[]):(v=v||[]).push(ee,null));for(ee in f){var F=f[ee];if(I=p!=null?p[ee]:void 0,f.hasOwnProperty(ee)&&F!==I&&(F!=null||I!=null))if(ee==="style")if(I){for(E in I)!I.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in F)F.hasOwnProperty(E)&&I[E]!==F[E]&&(l||(l={}),l[E]=F[E])}else l||(v||(v=[]),v.push(ee,l)),l=F;else ee==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,I=I?I.__html:void 0,F!=null&&I!==F&&(v=v||[]).push(ee,F)):ee==="children"?typeof F!="string"&&typeof F!="number"||(v=v||[]).push(ee,""+F):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(s.hasOwnProperty(ee)?(F!=null&&ee==="onScroll"&&kt("scroll",n),v||I===F||(v=[])):(v=v||[]).push(ee,F))}l&&(v=v||[]).push("style",l);var ee=v;(r.updateQueue=ee)&&(r.flags|=4)}},em=function(n,r,l,f){l!==f&&(r.flags|=4)};function ea(n,r){if(!Ht)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function vn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function n0(n,r,l){var f=r.pendingProps;switch(ic(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(r),null;case 1:return Fn(r.type)&&Za(),vn(r),null;case 3:return f=r.stateNode,Us(),Bt(Un),Bt(gn),gc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(nl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,si!==null&&(jc(si),si=null))),Uc(n,r),vn(r),null;case 5:pc(r);var p=Kr(Ko.current);if(l=r.type,n!==null&&r.stateNode!=null)Jp(n,r,l,f,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return vn(r),null}if(n=Kr(Ei.current),nl(r)){f=r.stateNode,l=r.type;var v=r.memoizedProps;switch(f[Mi]=r,f[Wo]=v,n=(r.mode&1)!==0,l){case"dialog":kt("cancel",f),kt("close",f);break;case"iframe":case"object":case"embed":kt("load",f);break;case"video":case"audio":for(p=0;p<Ho.length;p++)kt(Ho[p],f);break;case"source":kt("error",f);break;case"img":case"image":case"link":kt("error",f),kt("load",f);break;case"details":kt("toggle",f);break;case"input":Mn(f,v),kt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},kt("invalid",f);break;case"textarea":Z(f,v),kt("invalid",f)}ft(l,v),p=null;for(var E in v)if(v.hasOwnProperty(E)){var I=v[E];E==="children"?typeof I=="string"?f.textContent!==I&&(v.suppressHydrationWarning!==!0&&qa(f.textContent,I,n),p=["children",I]):typeof I=="number"&&f.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&qa(f.textContent,I,n),p=["children",""+I]):s.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&kt("scroll",f)}switch(l){case"input":It(f),je(f,v,!0);break;case"textarea":It(f),ge(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=Ka)}f=p,r.updateQueue=f,f!==null&&(r.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=E.createElement(l,{is:f.is}):(n=E.createElement(l),l==="select"&&(E=n,f.multiple?E.multiple=!0:f.size&&(E.size=f.size))):n=E.createElementNS(n,l),n[Mi]=r,n[Wo]=f,Qp(n,r,!1,!1),r.stateNode=n;e:{switch(E=nt(l,f),l){case"dialog":kt("cancel",n),kt("close",n),p=f;break;case"iframe":case"object":case"embed":kt("load",n),p=f;break;case"video":case"audio":for(p=0;p<Ho.length;p++)kt(Ho[p],n);p=f;break;case"source":kt("error",n),p=f;break;case"img":case"image":case"link":kt("error",n),kt("load",n),p=f;break;case"details":kt("toggle",n),p=f;break;case"input":Mn(n,f),p=k(n,f),kt("invalid",n);break;case"option":p=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},p=re({},f,{value:void 0}),kt("invalid",n);break;case"textarea":Z(n,f),p=A(n,f),kt("invalid",n);break;default:p=f}ft(l,p),I=p;for(v in I)if(I.hasOwnProperty(v)){var F=I[v];v==="style"?Je(n,F):v==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ue(n,F)):v==="children"?typeof F=="string"?(l!=="textarea"||F!=="")&&ut(n,F):typeof F=="number"&&ut(n,""+F):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?F!=null&&v==="onScroll"&&kt("scroll",n):F!=null&&L(n,v,F,E))}switch(l){case"input":It(n),je(n,f,!1);break;case"textarea":It(n),ge(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Te(f.value));break;case"select":n.multiple=!!f.multiple,v=f.value,v!=null?P(n,!!f.multiple,v,!1):f.defaultValue!=null&&P(n,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Ka)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return vn(r),null;case 6:if(n&&r.stateNode!=null)em(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Kr(Ko.current),Kr(Ei.current),nl(r)){if(f=r.stateNode,l=r.memoizedProps,f[Mi]=r,(v=f.nodeValue!==l)&&(n=Gn,n!==null))switch(n.tag){case 3:qa(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&qa(f.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Mi]=r,r.stateNode=f}return vn(r),null;case 13:if(Bt(Vt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&Wn!==null&&r.mode&1&&!(r.flags&128))ip(),Ls(),r.flags|=98560,v=!1;else if(v=nl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Mi]=r}else Ls(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;vn(r),v=!1}else si!==null&&(jc(si),si=null),v=!0;if(!v)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,r.mode&1&&(n===null||Vt.current&1?Jt===0&&(Jt=3):Kc())),r.updateQueue!==null&&(r.flags|=4),vn(r),null);case 4:return Us(),Uc(n,r),n===null&&Vo(r.stateNode.containerInfo),vn(r),null;case 10:return uc(r.type._context),vn(r),null;case 17:return Fn(r.type)&&Za(),vn(r),null;case 19:if(Bt(Vt),v=r.memoizedState,v===null)return vn(r),null;if(f=(r.flags&128)!==0,E=v.rendering,E===null)if(f)ea(v,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(E=ll(n),E!==null){for(r.flags|=128,ea(v,!1),f=E.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)v=l,n=f,v.flags&=14680066,E=v.alternate,E===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=E.childLanes,v.lanes=E.lanes,v.child=E.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=E.memoizedProps,v.memoizedState=E.memoizedState,v.updateQueue=E.updateQueue,v.type=E.type,n=E.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ft(Vt,Vt.current&1|2),r.child}n=n.sibling}v.tail!==null&&K()>Bs&&(r.flags|=128,f=!0,ea(v,!1),r.lanes=4194304)}else{if(!f)if(n=ll(E),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ea(v,!0),v.tail===null&&v.tailMode==="hidden"&&!E.alternate&&!Ht)return vn(r),null}else 2*K()-v.renderingStartTime>Bs&&l!==1073741824&&(r.flags|=128,f=!0,ea(v,!1),r.lanes=4194304);v.isBackwards?(E.sibling=r.child,r.child=E):(l=v.last,l!==null?l.sibling=E:r.child=E,v.last=E)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=K(),r.sibling=null,l=Vt.current,Ft(Vt,f?l&1|2:l&1),r):(vn(r),null);case 22:case 23:return qc(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&r.mode&1?Xn&1073741824&&(vn(r),r.subtreeFlags&6&&(r.flags|=8192)):vn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function i0(n,r){switch(ic(r),r.tag){case 1:return Fn(r.type)&&Za(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Us(),Bt(Un),Bt(gn),gc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return pc(r),null;case 13:if(Bt(Vt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ls()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Bt(Vt),null;case 4:return Us(),null;case 10:return uc(r.type._context),null;case 22:case 23:return qc(),null;case 24:return null;default:return null}}var _l=!1,xn=!1,r0=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Os(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Yt(n,r,f)}else l.current=null}function Fc(n,r,l){try{l()}catch(f){Yt(n,r,f)}}var tm=!1;function s0(n,r){if(qu=Oa,n=Dh(),zu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var p=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var E=0,I=-1,F=-1,ee=0,_e=0,xe=n,me=null;t:for(;;){for(var Ie;xe!==l||p!==0&&xe.nodeType!==3||(I=E+p),xe!==v||f!==0&&xe.nodeType!==3||(F=E+f),xe.nodeType===3&&(E+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)me=xe,xe=Ie;for(;;){if(xe===n)break t;if(me===l&&++ee===p&&(I=E),me===v&&++_e===f&&(F=E),(Ie=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Ie}l=I===-1||F===-1?null:{start:I,end:F}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ku={focusedElem:n,selectionRange:l},Oa=!1,Fe=r;Fe!==null;)if(r=Fe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Fe=n;else for(;Fe!==null;){r=Fe;try{var ze=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,qt=ze.memoizedState,q=r.stateNode,H=q.getSnapshotBeforeUpdate(r.elementType===r.type?Ve:oi(r.type,Ve),qt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=r.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Yt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Fe=n;break}Fe=r.return}return ze=tm,tm=!1,ze}function ta(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Fc(r,l,v)}p=p.next}while(p!==f)}}function vl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Oc(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function nm(n){var r=n.alternate;r!==null&&(n.alternate=null,nm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Mi],delete r[Wo],delete r[Ju],delete r[Hv],delete r[Vv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kc(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Ka));else if(f!==4&&(n=n.child,n!==null))for(kc(n,r,l),n=n.sibling;n!==null;)kc(n,r,l),n=n.sibling}function Bc(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Bc(n,r,l),n=n.sibling;n!==null;)Bc(n,r,l),n=n.sibling}var dn=null,ai=!1;function Sr(n,r,l){for(l=l.child;l!==null;)sm(n,r,l),l=l.sibling}function sm(n,r,l){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,l)}catch{}switch(l.tag){case 5:xn||Os(l,r);case 6:var f=dn,p=ai;dn=null,Sr(n,r,l),dn=f,ai=p,dn!==null&&(ai?(n=dn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):dn.removeChild(l.stateNode));break;case 18:dn!==null&&(ai?(n=dn,l=l.stateNode,n.nodeType===8?Qu(n.parentNode,l):n.nodeType===1&&Qu(n,l),Do(n)):Qu(dn,l.stateNode));break;case 4:f=dn,p=ai,dn=l.stateNode.containerInfo,ai=!0,Sr(n,r,l),dn=f,ai=p;break;case 0:case 11:case 14:case 15:if(!xn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var v=p,E=v.destroy;v=v.tag,E!==void 0&&(v&2||v&4)&&Fc(l,r,E),p=p.next}while(p!==f)}Sr(n,r,l);break;case 1:if(!xn&&(Os(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(I){Yt(l,r,I)}Sr(n,r,l);break;case 21:Sr(n,r,l);break;case 22:l.mode&1?(xn=(f=xn)||l.memoizedState!==null,Sr(n,r,l),xn=f):Sr(n,r,l);break;default:Sr(n,r,l)}}function om(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new r0),r.forEach(function(f){var p=p0.bind(null,n,f);l.has(f)||(l.add(f),f.then(p,p))})}}function li(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var p=l[f];try{var v=n,E=r,I=E;e:for(;I!==null;){switch(I.tag){case 5:dn=I.stateNode,ai=!1;break e;case 3:dn=I.stateNode.containerInfo,ai=!0;break e;case 4:dn=I.stateNode.containerInfo,ai=!0;break e}I=I.return}if(dn===null)throw Error(t(160));sm(v,E,p),dn=null,ai=!1;var F=p.alternate;F!==null&&(F.return=null),p.return=null}catch(ee){Yt(p,r,ee)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)am(r,n),r=r.sibling}function am(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(r,n),Ai(n),f&4){try{ta(3,n,n.return),vl(3,n)}catch(Ve){Yt(n,n.return,Ve)}try{ta(5,n,n.return)}catch(Ve){Yt(n,n.return,Ve)}}break;case 1:li(r,n),Ai(n),f&512&&l!==null&&Os(l,l.return);break;case 5:if(li(r,n),Ai(n),f&512&&l!==null&&Os(l,l.return),n.flags&32){var p=n.stateNode;try{ut(p,"")}catch(Ve){Yt(n,n.return,Ve)}}if(f&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,E=l!==null?l.memoizedProps:v,I=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&ht(p,v),nt(I,E);var ee=nt(I,v);for(E=0;E<F.length;E+=2){var _e=F[E],xe=F[E+1];_e==="style"?Je(p,xe):_e==="dangerouslySetInnerHTML"?Ue(p,xe):_e==="children"?ut(p,xe):L(p,_e,xe,ee)}switch(I){case"input":ct(p,v);break;case"textarea":pe(p,v);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Ie=v.value;Ie!=null?P(p,!!v.multiple,Ie,!1):me!==!!v.multiple&&(v.defaultValue!=null?P(p,!!v.multiple,v.defaultValue,!0):P(p,!!v.multiple,v.multiple?[]:"",!1))}p[Wo]=v}catch(Ve){Yt(n,n.return,Ve)}}break;case 6:if(li(r,n),Ai(n),f&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ve){Yt(n,n.return,Ve)}}break;case 3:if(li(r,n),Ai(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Do(r.containerInfo)}catch(Ve){Yt(n,n.return,Ve)}break;case 4:li(r,n),Ai(n);break;case 13:li(r,n),Ai(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Vc=K())),f&4&&om(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(xn=(ee=xn)||_e,li(r,n),xn=ee):li(r,n),Ai(n),f&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&n.mode&1)for(Fe=n,_e=n.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:ta(4,me,me.return);break;case 1:Os(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){f=me,l=me.return;try{r=f,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(Ve){Yt(f,l,Ve)}}break;case 5:Os(me,me.return);break;case 22:if(me.memoizedState!==null){cm(xe);continue}}Ie!==null?(Ie.return=me,Fe=Ie):cm(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{p=xe.stateNode,ee?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=xe.stateNode,F=xe.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,I.style.display=qe("display",E))}catch(Ve){Yt(n,n.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(Ve){Yt(n,n.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:li(r,n),Ai(n),f&4&&om(n);break;case 21:break;default:li(r,n),Ai(n)}}function Ai(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(im(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(ut(p,""),f.flags&=-33);var v=rm(n);Bc(n,v,p);break;case 3:case 4:var E=f.stateNode.containerInfo,I=rm(n);kc(n,I,E);break;default:throw Error(t(161))}}catch(F){Yt(n,n.return,F)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function o0(n,r,l){Fe=n,lm(n)}function lm(n,r,l){for(var f=(n.mode&1)!==0;Fe!==null;){var p=Fe,v=p.child;if(p.tag===22&&f){var E=p.memoizedState!==null||_l;if(!E){var I=p.alternate,F=I!==null&&I.memoizedState!==null||xn;I=_l;var ee=xn;if(_l=E,(xn=F)&&!ee)for(Fe=p;Fe!==null;)E=Fe,F=E.child,E.tag===22&&E.memoizedState!==null?fm(p):F!==null?(F.return=E,Fe=F):fm(p);for(;v!==null;)Fe=v,lm(v),v=v.sibling;Fe=p,_l=I,xn=ee}um(n)}else p.subtreeFlags&8772&&v!==null?(v.return=p,Fe=v):um(n)}}function um(n){for(;Fe!==null;){var r=Fe;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:xn||vl(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!xn)if(l===null)f.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:oi(r.type,l.memoizedProps);f.componentDidUpdate(p,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&cp(r,v,f);break;case 3:var E=r.updateQueue;if(E!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}cp(r,E,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var F=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&l.focus();break;case"img":F.src&&(l.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ee=r.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Do(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||r.flags&512&&Oc(r)}catch(me){Yt(r,r.return,me)}}if(r===n){Fe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Fe=l;break}Fe=r.return}}function cm(n){for(;Fe!==null;){var r=Fe;if(r===n){Fe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Fe=l;break}Fe=r.return}}function fm(n){for(;Fe!==null;){var r=Fe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{vl(4,r)}catch(F){Yt(r,l,F)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var p=r.return;try{f.componentDidMount()}catch(F){Yt(r,p,F)}}var v=r.return;try{Oc(r)}catch(F){Yt(r,v,F)}break;case 5:var E=r.return;try{Oc(r)}catch(F){Yt(r,E,F)}}}catch(F){Yt(r,r.return,F)}if(r===n){Fe=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Fe=I;break}Fe=r.return}}var a0=Math.ceil,xl=C.ReactCurrentDispatcher,zc=C.ReactCurrentOwner,Jn=C.ReactCurrentBatchConfig,Tt=0,on=null,Kt=null,hn=0,Xn=0,ks=gr(0),Jt=0,na=null,Zr=0,yl=0,Hc=0,ia=null,kn=null,Vc=0,Bs=1/0,Vi=null,Sl=!1,Gc=null,Mr=null,Ml=!1,Er=null,El=0,ra=0,Wc=null,Tl=-1,Al=0;function wn(){return Tt&6?K():Tl!==-1?Tl:Tl=K()}function Tr(n){return n.mode&1?Tt&2&&hn!==0?hn&-hn:Wv.transition!==null?(Al===0&&(Al=Nt()),Al):(n=Et,n!==0||(n=window.event,n=n===void 0?16:hh(n.type)),n):1}function ui(n,r,l,f){if(50<ra)throw ra=0,Wc=null,Error(t(185));nn(n,l,f),(!(Tt&2)||n!==on)&&(n===on&&(!(Tt&2)&&(yl|=l),Jt===4&&Ar(n,hn)),Bn(n,f),l===1&&Tt===0&&!(r.mode&1)&&(Bs=K()+500,Ja&&vr()))}function Bn(n,r){var l=n.callbackNode;Tn(n,r);var f=pn(n,n===on?hn:0);if(f===0)l!==null&&w(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&w(l),r===1)n.tag===0?Gv(hm.bind(null,n)):Qh(hm.bind(null,n)),Bv(function(){!(Tt&6)&&vr()}),l=null;else{switch(Si(f)){case 1:l=ye;break;case 4:l=Re;break;case 16:l=Le;break;case 536870912:l=et;break;default:l=Le}l=Sm(l,dm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function dm(n,r){if(Tl=-1,Al=0,Tt&6)throw Error(t(327));var l=n.callbackNode;if(zs()&&n.callbackNode!==l)return null;var f=pn(n,n===on?hn:0);if(f===0)return null;if(f&30||f&n.expiredLanes||r)r=wl(n,f);else{r=f;var p=Tt;Tt|=2;var v=mm();(on!==n||hn!==r)&&(Vi=null,Bs=K()+500,Jr(n,r));do try{c0();break}catch(I){pm(n,I)}while(!0);lc(),xl.current=v,Tt=p,Kt!==null?r=0:(on=null,hn=0,r=Jt)}if(r!==0){if(r===2&&(p=Ni(n),p!==0&&(f=p,r=Xc(n,p))),r===1)throw l=na,Jr(n,0),Ar(n,f),Bn(n,K()),l;if(r===6)Ar(n,f);else{if(p=n.current.alternate,!(f&30)&&!l0(p)&&(r=wl(n,f),r===2&&(v=Ni(n),v!==0&&(f=v,r=Xc(n,v))),r===1))throw l=na,Jr(n,0),Ar(n,f),Bn(n,K()),l;switch(n.finishedWork=p,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:es(n,kn,Vi);break;case 3:if(Ar(n,f),(f&130023424)===f&&(r=Vc+500-K(),10<r)){if(pn(n,0)!==0)break;if(p=n.suspendedLanes,(p&f)!==f){wn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Zu(es.bind(null,n,kn,Vi),r);break}es(n,kn,Vi);break;case 4:if(Ar(n,f),(f&4194240)===f)break;for(r=n.eventTimes,p=-1;0<f;){var E=31-st(f);v=1<<E,E=r[E],E>p&&(p=E),f&=~v}if(f=p,f=K()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*a0(f/1960))-f,10<f){n.timeoutHandle=Zu(es.bind(null,n,kn,Vi),f);break}es(n,kn,Vi);break;case 5:es(n,kn,Vi);break;default:throw Error(t(329))}}}return Bn(n,K()),n.callbackNode===l?dm.bind(null,n):null}function Xc(n,r){var l=ia;return n.current.memoizedState.isDehydrated&&(Jr(n,r).flags|=256),n=wl(n,r),n!==2&&(r=kn,kn=l,r!==null&&jc(r)),n}function jc(n){kn===null?kn=n:kn.push.apply(kn,n)}function l0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var p=l[f],v=p.getSnapshot;p=p.value;try{if(!ri(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ar(n,r){for(r&=~Hc,r&=~yl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-st(r),f=1<<l;n[l]=-1,r&=~f}}function hm(n){if(Tt&6)throw Error(t(327));zs();var r=pn(n,0);if(!(r&1))return Bn(n,K()),null;var l=wl(n,r);if(n.tag!==0&&l===2){var f=Ni(n);f!==0&&(r=f,l=Xc(n,f))}if(l===1)throw l=na,Jr(n,0),Ar(n,r),Bn(n,K()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,kn,Vi),Bn(n,K()),null}function Yc(n,r){var l=Tt;Tt|=1;try{return n(r)}finally{Tt=l,Tt===0&&(Bs=K()+500,Ja&&vr())}}function Qr(n){Er!==null&&Er.tag===0&&!(Tt&6)&&zs();var r=Tt;Tt|=1;var l=Jn.transition,f=Et;try{if(Jn.transition=null,Et=1,n)return n()}finally{Et=f,Jn.transition=l,Tt=r,!(Tt&6)&&vr()}}function qc(){Xn=ks.current,Bt(ks)}function Jr(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,kv(l)),Kt!==null)for(l=Kt.return;l!==null;){var f=l;switch(ic(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Za();break;case 3:Us(),Bt(Un),Bt(gn),gc();break;case 5:pc(f);break;case 4:Us();break;case 13:Bt(Vt);break;case 19:Bt(Vt);break;case 10:uc(f.type._context);break;case 22:case 23:qc()}l=l.return}if(on=n,Kt=n=wr(n.current,null),hn=Xn=r,Jt=0,na=null,Hc=yl=Zr=0,kn=ia=null,qr!==null){for(r=0;r<qr.length;r++)if(l=qr[r],f=l.interleaved,f!==null){l.interleaved=null;var p=f.next,v=l.pending;if(v!==null){var E=v.next;v.next=p,f.next=E}l.pending=f}qr=null}return n}function pm(n,r){do{var l=Kt;try{if(lc(),ul.current=hl,cl){for(var f=Gt.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}cl=!1}if($r=0,sn=Qt=Gt=null,$o=!1,Zo=0,zc.current=null,l===null||l.return===null){Jt=1,na=r,Kt=null;break}e:{var v=n,E=l.return,I=l,F=r;if(r=hn,I.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var ee=F,_e=I,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=Bp(E);if(Ie!==null){Ie.flags&=-257,zp(Ie,E,I,v,r),Ie.mode&1&&kp(v,ee,r),r=Ie,F=ee;var ze=r.updateQueue;if(ze===null){var Ve=new Set;Ve.add(F),r.updateQueue=Ve}else ze.add(F);break e}else{if(!(r&1)){kp(v,ee,r),Kc();break e}F=Error(t(426))}}else if(Ht&&I.mode&1){var qt=Bp(E);if(qt!==null){!(qt.flags&65536)&&(qt.flags|=256),zp(qt,E,I,v,r),oc(Fs(F,I));break e}}v=F=Fs(F,I),Jt!==4&&(Jt=2),ia===null?ia=[v]:ia.push(v),v=E;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var q=Fp(v,F,r);up(v,q);break e;case 1:I=F;var H=v.type,$=v.stateNode;if(!(v.flags&128)&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Mr===null||!Mr.has($)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=Op(v,I,r);up(v,Ee);break e}}v=v.return}while(v!==null)}_m(l)}catch(Xe){r=Xe,Kt===l&&l!==null&&(Kt=l=l.return);continue}break}while(!0)}function mm(){var n=xl.current;return xl.current=hl,n===null?hl:n}function Kc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),on===null||!(Zr&268435455)&&!(yl&268435455)||Ar(on,hn)}function wl(n,r){var l=Tt;Tt|=2;var f=mm();(on!==n||hn!==r)&&(Vi=null,Jr(n,r));do try{u0();break}catch(p){pm(n,p)}while(!0);if(lc(),Tt=l,xl.current=f,Kt!==null)throw Error(t(261));return on=null,hn=0,Jt}function u0(){for(;Kt!==null;)gm(Kt)}function c0(){for(;Kt!==null&&!W();)gm(Kt)}function gm(n){var r=ym(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,r===null?_m(n):Kt=r,zc.current=null}function _m(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=i0(l,r),l!==null){l.flags&=32767,Kt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,Kt=null;return}}else if(l=n0(l,r,Xn),l!==null){Kt=l;return}if(r=r.sibling,r!==null){Kt=r;return}Kt=r=n}while(r!==null);Jt===0&&(Jt=5)}function es(n,r,l){var f=Et,p=Jn.transition;try{Jn.transition=null,Et=1,f0(n,r,l,f)}finally{Jn.transition=p,Et=f}return null}function f0(n,r,l,f){do zs();while(Er!==null);if(Tt&6)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(fn(n,v),n===on&&(Kt=on=null,hn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Ml||(Ml=!0,Sm(Le,function(){return zs(),null})),v=(l.flags&15990)!==0,l.subtreeFlags&15990||v){v=Jn.transition,Jn.transition=null;var E=Et;Et=1;var I=Tt;Tt|=4,zc.current=null,s0(n,l),am(l,n),Lv(Ku),Oa=!!qu,Ku=qu=null,n.current=l,o0(l),J(),Tt=I,Et=E,Jn.transition=v}else n.current=l;if(Ml&&(Ml=!1,Er=n,El=p),v=n.pendingLanes,v===0&&(Mr=null),vt(l.stateNode),Bn(n,K()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],f(p.value,{componentStack:p.stack,digest:p.digest});if(Sl)throw Sl=!1,n=Gc,Gc=null,n;return El&1&&n.tag!==0&&zs(),v=n.pendingLanes,v&1?n===Wc?ra++:(ra=0,Wc=n):ra=0,vr(),null}function zs(){if(Er!==null){var n=Si(El),r=Jn.transition,l=Et;try{if(Jn.transition=null,Et=16>n?16:n,Er===null)var f=!1;else{if(n=Er,Er=null,El=0,Tt&6)throw Error(t(331));var p=Tt;for(Tt|=4,Fe=n.current;Fe!==null;){var v=Fe,E=v.child;if(Fe.flags&16){var I=v.deletions;if(I!==null){for(var F=0;F<I.length;F++){var ee=I[F];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:ta(8,_e,v)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,Ie=_e.return;if(nm(_e),_e===ee){Fe=null;break}if(me!==null){me.return=Ie,Fe=me;break}Fe=Ie}}}var ze=v.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var qt=Ve.sibling;Ve.sibling=null,Ve=qt}while(Ve!==null)}}Fe=v}}if(v.subtreeFlags&2064&&E!==null)E.return=v,Fe=E;else e:for(;Fe!==null;){if(v=Fe,v.flags&2048)switch(v.tag){case 0:case 11:case 15:ta(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,Fe=q;break e}Fe=v.return}}var H=n.current;for(Fe=H;Fe!==null;){E=Fe;var $=E.child;if(E.subtreeFlags&2064&&$!==null)$.return=E,Fe=$;else e:for(E=H;Fe!==null;){if(I=Fe,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:vl(9,I)}}catch(Xe){Yt(I,I.return,Xe)}if(I===E){Fe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Fe=Ee;break e}Fe=I.return}}if(Tt=p,vr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,n)}catch{}f=!0}return f}finally{Et=l,Jn.transition=r}}return!1}function vm(n,r,l){r=Fs(l,r),r=Fp(n,r,1),n=yr(n,r,1),r=wn(),n!==null&&(nn(n,1,r),Bn(n,r))}function Yt(n,r,l){if(n.tag===3)vm(n,n,l);else for(;r!==null;){if(r.tag===3){vm(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Mr===null||!Mr.has(f))){n=Fs(l,n),n=Op(r,n,1),r=yr(r,n,1),n=wn(),r!==null&&(nn(r,1,n),Bn(r,n));break}}r=r.return}}function d0(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=wn(),n.pingedLanes|=n.suspendedLanes&l,on===n&&(hn&l)===l&&(Jt===4||Jt===3&&(hn&130023424)===hn&&500>K()-Vc?Jr(n,0):Hc|=l),Bn(n,r)}function xm(n,r){r===0&&(n.mode&1?(r=jt,jt<<=1,!(jt&130023424)&&(jt=4194304)):r=1);var l=wn();n=Bi(n,r),n!==null&&(nn(n,r,l),Bn(n,l))}function h0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),xm(n,l)}function p0(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),xm(n,l)}var ym;ym=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Un.current)On=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return On=!1,t0(n,r,l);On=!!(n.flags&131072)}else On=!1,Ht&&r.flags&1048576&&Jh(r,tl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;gl(n,r),n=r.pendingProps;var p=Cs(r,gn.current);Ns(r,l),p=xc(null,r,f,n,p,l);var v=yc();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Fn(f)?(v=!0,Qa(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,dc(r),p.updater=pl,r.stateNode=p,p._reactInternals=r,wc(r,f,n,l),r=Pc(null,r,f,!0,v,l)):(r.tag=0,Ht&&v&&nc(r),An(null,r,p,l),r=r.child),r;case 16:f=r.elementType;e:{switch(gl(n,r),n=r.pendingProps,p=f._init,f=p(f._payload),r.type=f,p=r.tag=g0(f),n=oi(f,n),p){case 0:r=bc(null,r,f,n,l);break e;case 1:r=jp(null,r,f,n,l);break e;case 11:r=Hp(null,r,f,n,l);break e;case 14:r=Vp(null,r,f,oi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:oi(f,p),bc(n,r,f,p,l);case 1:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:oi(f,p),jp(n,r,f,p,l);case 3:e:{if(Yp(r),n===null)throw Error(t(387));f=r.pendingProps,v=r.memoizedState,p=v.element,lp(n,r),al(r,f,null,l);var E=r.memoizedState;if(f=E.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Fs(Error(t(423)),r),r=qp(n,r,f,l,p);break e}else if(f!==p){p=Fs(Error(t(424)),r),r=qp(n,r,f,l,p);break e}else for(Wn=mr(r.stateNode.containerInfo.firstChild),Gn=r,Ht=!0,si=null,l=op(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ls(),f===p){r=Hi(n,r,l);break e}An(n,r,f,l)}r=r.child}return r;case 5:return fp(r),n===null&&sc(r),f=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,E=p.children,$u(f,p)?E=null:v!==null&&$u(f,v)&&(r.flags|=32),Xp(n,r),An(n,r,E,l),r.child;case 6:return n===null&&sc(r),null;case 13:return Kp(n,r,l);case 4:return hc(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Is(r,null,f,l):An(n,r,f,l),r.child;case 11:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:oi(f,p),Hp(n,r,f,p,l);case 7:return An(n,r,r.pendingProps,l),r.child;case 8:return An(n,r,r.pendingProps.children,l),r.child;case 12:return An(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,p=r.pendingProps,v=r.memoizedProps,E=p.value,Ft(rl,f._currentValue),f._currentValue=E,v!==null)if(ri(v.value,E)){if(v.children===p.children&&!Un.current){r=Hi(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var I=v.dependencies;if(I!==null){E=v.child;for(var F=I.firstContext;F!==null;){if(F.context===f){if(v.tag===1){F=zi(-1,l&-l),F.tag=2;var ee=v.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),ee.pending=F}}v.lanes|=l,F=v.alternate,F!==null&&(F.lanes|=l),cc(v.return,l,r),I.lanes|=l;break}F=F.next}}else if(v.tag===10)E=v.type===r.type?null:v.child;else if(v.tag===18){if(E=v.return,E===null)throw Error(t(341));E.lanes|=l,I=E.alternate,I!==null&&(I.lanes|=l),cc(E,l,r),E=v.sibling}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===r){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}An(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,f=r.pendingProps.children,Ns(r,l),p=Zn(p),f=f(p),r.flags|=1,An(n,r,f,l),r.child;case 14:return f=r.type,p=oi(f,r.pendingProps),p=oi(f.type,p),Vp(n,r,f,p,l);case 15:return Gp(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:oi(f,p),gl(n,r),r.tag=1,Fn(f)?(n=!0,Qa(r)):n=!1,Ns(r,l),Np(r,f,p),wc(r,f,p,l),Pc(null,r,f,!0,n,l);case 19:return Zp(n,r,l);case 22:return Wp(n,r,l)}throw Error(t(156,r.tag))};function Sm(n,r){return Na(n,r)}function m0(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,r,l,f){return new m0(n,r,l,f)}function $c(n){return n=n.prototype,!(!n||!n.isReactComponent)}function g0(n){if(typeof n=="function")return $c(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===he)return 14}return 2}function wr(n,r){var l=n.alternate;return l===null?(l=ei(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Rl(n,r,l,f,p,v){var E=2;if(f=n,typeof n=="function")$c(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return ts(l.children,p,v,r);case j:E=8,p|=8;break;case b:return n=ei(12,l,r,p|2),n.elementType=b,n.lanes=v,n;case te:return n=ei(13,l,r,p),n.elementType=te,n.lanes=v,n;case ce:return n=ei(19,l,r,p),n.elementType=ce,n.lanes=v,n;case le:return Cl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case oe:E=11;break e;case he:E=14;break e;case se:E=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ei(E,l,r,p),r.elementType=n,r.type=f,r.lanes=v,r}function ts(n,r,l,f){return n=ei(7,n,f,r),n.lanes=l,n}function Cl(n,r,l,f){return n=ei(22,n,f,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function Zc(n,r,l){return n=ei(6,n,null,r),n.lanes=l,n}function Qc(n,r,l){return r=ei(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function _0(n,r,l,f,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Jc(n,r,l,f,p,v,E,I,F){return n=new _0(n,r,l,I,F),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ei(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},dc(v),n}function v0(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function Mm(n){if(!n)return _r;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Fn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Fn(l))return $h(n,l,r)}return r}function Em(n,r,l,f,p,v,E,I,F){return n=Jc(l,f,!0,n,p,v,E,I,F),n.context=Mm(null),l=n.current,f=wn(),p=Tr(l),v=zi(f,p),v.callback=r??null,yr(l,v,p),n.current.lanes=p,nn(n,p,f),Bn(n,f),n}function bl(n,r,l,f){var p=r.current,v=wn(),E=Tr(p);return l=Mm(l),r.context===null?r.context=l:r.pendingContext=l,r=zi(v,E),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=yr(p,r,E),n!==null&&(ui(n,p,E,v),ol(n,p,E)),E}function Pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function ef(n,r){Tm(n,r),(n=n.alternate)&&Tm(n,r)}var Am=typeof reportError=="function"?reportError:function(n){console.error(n)};function tf(n){this._internalRoot=n}Ll.prototype.render=tf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));bl(n,r,null,null)},Ll.prototype.unmount=tf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qr(function(){bl(null,n,null,null)}),r[Ui]=null}};function Ll(n){this._internalRoot=n}Ll.prototype.unstable_scheduleHydration=function(n){if(n){var r=lh();n={blockedOn:null,target:n,priority:r};for(var l=0;l<dr.length&&r!==0&&r<dr[l].priority;l++);dr.splice(l,0,n),l===0&&fh(n)}};function nf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function wm(){}function x0(n,r,l,f,p){if(p){if(typeof f=="function"){var v=f;f=function(){var ee=Pl(E);v.call(ee)}}var E=Em(r,f,n,0,null,!1,!1,"",wm);return n._reactRootContainer=E,n[Ui]=E.current,Vo(n.nodeType===8?n.parentNode:n),Qr(),E}for(;p=n.lastChild;)n.removeChild(p);if(typeof f=="function"){var I=f;f=function(){var ee=Pl(F);I.call(ee)}}var F=Jc(n,0,!1,null,null,!1,!1,"",wm);return n._reactRootContainer=F,n[Ui]=F.current,Vo(n.nodeType===8?n.parentNode:n),Qr(function(){bl(r,F,l,f)}),F}function Dl(n,r,l,f,p){var v=l._reactRootContainer;if(v){var E=v;if(typeof p=="function"){var I=p;p=function(){var F=Pl(E);I.call(F)}}bl(r,E,n,p)}else E=x0(l,r,n,p,f);return Pl(E)}oh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=_t(r.pendingLanes);l!==0&&(rn(r,l|1),Bn(r,K()),!(Tt&6)&&(Bs=K()+500,vr()))}break;case 13:Qr(function(){var f=Bi(n,1);if(f!==null){var p=wn();ui(f,n,1,p)}}),ef(n,1)}},Ru=function(n){if(n.tag===13){var r=Bi(n,134217728);if(r!==null){var l=wn();ui(r,n,134217728,l)}ef(n,134217728)}},ah=function(n){if(n.tag===13){var r=Tr(n),l=Bi(n,r);if(l!==null){var f=wn();ui(l,n,r,f)}ef(n,r)}},lh=function(){return Et},uh=function(n,r){var l=Et;try{return Et=n,r()}finally{Et=l}},we=function(n,r,l){switch(r){case"input":if(ct(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var p=$a(f);if(!p)throw Error(t(90));gt(f),ct(f,p)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&P(n,!!l.multiple,r,!1)}},Ot=Yc,Zt=Qr;var y0={usingClientEntryPoint:!1,Events:[Xo,ws,$a,be,it,Yc]},sa={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S0={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ia(n),n===null?null:n.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Qe=Nl.inject(S0),He=Nl}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0,zn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(r))throw Error(t(200));return v0(n,r,null,l)},zn.createRoot=function(n,r){if(!nf(n))throw Error(t(299));var l=!1,f="",p=Am;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Jc(n,1,!1,null,null,l,!1,f,p),n[Ui]=r.current,Vo(n.nodeType===8?n.parentNode:n),new tf(r)},zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ia(r),n=n===null?null:n.stateNode,n},zn.flushSync=function(n){return Qr(n)},zn.hydrate=function(n,r,l){if(!Il(r))throw Error(t(200));return Dl(null,n,r,!0,l)},zn.hydrateRoot=function(n,r,l){if(!nf(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,p=!1,v="",E=Am;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),r=Em(r,null,n,1,l??null,p,!1,v,E),n[Ui]=r.current,Vo(n),f)for(n=0;n<f.length;n++)l=f[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Ll(r)},zn.render=function(n,r,l){if(!Il(r))throw Error(t(200));return Dl(null,n,r,!1,l)},zn.unmountComponentAtNode=function(n){if(!Il(n))throw Error(t(40));return n._reactRootContainer?(Qr(function(){Dl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1},zn.unstable_batchedUpdates=Yc,zn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Il(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Dl(n,r,l,!1,f)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var Nm;function L0(){if(Nm)return of.exports;Nm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),of.exports=P0(),of.exports}var Um;function I0(){if(Um)return Ul;Um=1;var o=L0();return Ul.createRoot=o.createRoot,Ul.hydrateRoot=o.hydrateRoot,Ul}var D0=I0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="172",N0=0,Fm=1,U0=2,i_=1,F0=2,Ki=3,ir=0,Hn=1,hi=2,kr=0,uo=1,Om=2,km=3,Bm=4,O0=5,fs=100,k0=101,B0=102,z0=103,H0=104,V0=200,G0=201,W0=202,X0=203,Xf=204,jf=205,j0=206,Y0=207,q0=208,K0=209,$0=210,Z0=211,Q0=212,J0=213,ex=214,Yf=0,qf=1,Kf=2,po=3,$f=4,Zf=5,Qf=6,Jf=7,r_=0,tx=1,nx=2,Br=0,ix=1,rx=2,sx=3,ox=4,ax=5,lx=6,ux=7,zm="attached",cx="detached",s_=300,mo=301,go=302,ed=303,td=304,Eu=306,_o=1e3,Fr=1001,_u=1002,Ln=1003,o_=1004,ga=1005,qn=1006,cu=1007,Qi=1008,rr=1009,a_=1010,l_=1011,Sa=1012,Bd=1013,ps=1014,gi=1015,Aa=1016,zd=1017,Hd=1018,vo=1020,u_=35902,c_=1021,f_=1022,ii=1023,d_=1024,h_=1025,co=1026,xo=1027,Vd=1028,Gd=1029,p_=1030,Wd=1031,Xd=1033,fu=33776,du=33777,hu=33778,pu=33779,nd=35840,id=35841,rd=35842,sd=35843,od=36196,ad=37492,ld=37496,ud=37808,cd=37809,fd=37810,dd=37811,hd=37812,pd=37813,md=37814,gd=37815,_d=37816,vd=37817,xd=37818,yd=37819,Sd=37820,Md=37821,mu=36492,Ed=36494,Td=36495,m_=36283,Ad=36284,wd=36285,Rd=36286,fx=2200,dx=2201,hx=2202,Ma=2300,Ea=2301,uf=2302,so=2400,oo=2401,vu=2402,jd=2500,px=2501,mx=0,g_=1,Cd=2,gx=3200,_x=3201,__=0,vx=1,Ur="",un="srgb",Dn="srgb-linear",xu="linear",Dt="srgb",Hs=7680,Hm=519,xx=512,yx=513,Sx=514,v_=515,Mx=516,Ex=517,Tx=518,Ax=519,bd=35044,Vm="300 es",Ji=2e3,yu=2001;class Hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gm=1234567;const va=Math.PI/180,yo=180/Math.PI;function _i(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function pt(o,e,t){return Math.max(e,Math.min(t,o))}function Yd(o,e){return(o%e+e)%e}function wx(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function Rx(o,e,t){return o!==e?(t-o)/(e-o):0}function xa(o,e,t){return(1-t)*o+t*e}function Cx(o,e,t,i){return xa(o,e,1-Math.exp(-t*i))}function bx(o,e=1){return e-Math.abs(Yd(o,e*2)-e)}function Px(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Lx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Ix(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Dx(o,e){return o+Math.random()*(e-o)}function Nx(o){return o*(.5-Math.random())}function Ux(o){o!==void 0&&(Gm=o);let e=Gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fx(o){return o*va}function Ox(o){return o*yo}function kx(o){return(o&o-1)===0&&o!==0}function Bx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function zx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Hx(o,e,t,i,s){const a=Math.cos,u=Math.sin,c=a(t/2),d=u(t/2),h=a((e+i)/2),m=u((e+i)/2),g=a((e-i)/2),_=u((e-i)/2),y=a((i-e)/2),M=u((i-e)/2);switch(s){case"XYX":o.set(c*m,d*g,d*_,c*h);break;case"YZY":o.set(d*_,c*m,d*g,c*h);break;case"ZXZ":o.set(d*g,d*_,c*m,c*h);break;case"XZX":o.set(c*m,d*M,d*y,c*h);break;case"YXY":o.set(d*y,c*m,d*M,c*h);break;case"ZYZ":o.set(d*M,d*y,c*m,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Lt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Vx={DEG2RAD:va,RAD2DEG:yo,generateUUID:_i,clamp:pt,euclideanModulo:Yd,mapLinear:wx,inverseLerp:Rx,lerp:xa,damp:Cx,pingpong:bx,smoothstep:Px,smootherstep:Lx,randInt:Ix,randFloat:Dx,randFloatSpread:Nx,seededRandom:Ux,degToRad:Fx,radToDeg:Ox,isPowerOfTwo:kx,ceilPowerOfTwo:Bx,floorPowerOfTwo:zx,setQuaternionFromProperEuler:Hx,normalize:Lt,denormalize:pi};class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*s+e.x,this.y=a*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,s,a,u,c,d,h){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,h)}set(e,t,i,s,a,u,c,d,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=c,m[3]=t,m[4]=a,m[5]=d,m[6]=i,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],m=i[4],g=i[7],_=i[2],y=i[5],M=i[8],T=s[0],S=s[3],x=s[6],D=s[1],L=s[4],C=s[7],V=s[2],O=s[5],U=s[8];return a[0]=u*T+c*D+d*V,a[3]=u*S+c*L+d*O,a[6]=u*x+c*C+d*U,a[1]=h*T+m*D+g*V,a[4]=h*S+m*L+g*O,a[7]=h*x+m*C+g*U,a[2]=_*T+y*D+M*V,a[5]=_*S+y*L+M*O,a[8]=_*x+y*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*c*h-i*a*m+i*c*d+s*a*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=m*u-c*h,_=c*d-m*a,y=h*a-u*d,M=t*g+i*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(s*h-m*i)*T,e[2]=(c*i-s*u)*T,e[3]=_*T,e[4]=(m*t-s*d)*T,e[5]=(s*a-c*t)*T,e[6]=y*T,e[7]=(i*d-h*t)*T,e[8]=(u*t-i*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-s*h,s*d,-s*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(cf.makeScale(e,t)),this}rotate(e){return this.premultiply(cf.makeRotation(-e)),this}translate(e,t){return this.premultiply(cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cf=new ot;function x_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ta(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Gx(){const o=Ta("canvas");return o.style.display="block",o}const Wm={};function ro(o){o in Wm||(Wm[o]=!0,console.warn(o))}function Wx(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Xx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xm=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jm=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yx(){const o={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(s,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Dt&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(s.r=fo(s.r),s.g=fo(s.g),s.b=fo(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ur?xu:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,u){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Dn]:{primaries:e,whitePoint:i,transfer:xu,toXYZ:Xm,fromXYZ:jm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Xm,fromXYZ:jm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),o}const yt=Yx();function tr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Vs;class qx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=Ta("canvas")),Vs.width=e.width,Vs.height=e.height;const i=Vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=tr(a[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tr(t[i]/255)*255):t[i]=tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kx=0;class y_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(ff(s[u].image)):a.push(ff(s[u]))}else a=ff(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function ff(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?qx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $x=0;class cn extends Hr{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Fr,s=Fr,a=qn,u=Qi,c=ii,d=rr,h=cn.DEFAULT_ANISOTROPY,m=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=_i(),this.name="",this.source=new y_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _o:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case _u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _o:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case _u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=s_;cn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],m=d[4],g=d[8],_=d[1],y=d[5],M=d[9],T=d[2],S=d[6],x=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,C=(y+1)/2,V=(x+1)/2,O=(m+_)/4,U=(g+T)/4,j=(M+S)/4;return L>C&&L>V?L<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(L),s=O/i,a=U/i):C>V?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=O/s,a=j/s):V<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(V),i=U/a,s=j/a),this.set(i,s,a,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(_-m)*(_-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-T)/D,this.z=(_-m)/D,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zx extends Hr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new y_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends Zx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class S_ extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qx extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,u,c){let d=i[s+0],h=i[s+1],m=i[s+2],g=i[s+3];const _=a[u+0],y=a[u+1],M=a[u+2],T=a[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=T;return}if(g!==T||d!==_||h!==y||m!==M){let S=1-c;const x=d*_+h*y+m*M+g*T,D=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const V=Math.sqrt(L),O=Math.atan2(V,x*D);S=Math.sin(S*O)/V,c=Math.sin(c*O)/V}const C=c*D;if(d=d*S+_*C,h=h*S+y*C,m=m*S+M*C,g=g*S+T*C,S===1-c){const V=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=V,h*=V,m*=V,g*=V}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,u){const c=i[s],d=i[s+1],h=i[s+2],m=i[s+3],g=a[u],_=a[u+1],y=a[u+2],M=a[u+3];return e[t]=c*M+m*g+d*y-h*_,e[t+1]=d*M+m*_+h*g-c*y,e[t+2]=h*M+m*y+c*_-d*g,e[t+3]=m*M-c*g-d*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),m=c(s/2),g=c(a/2),_=d(i/2),y=d(s/2),M=d(a/2);switch(u){case"XYZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"YXZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"ZXY":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"ZYX":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"YZX":this._x=_*m*g+h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g-_*y*M;break;case"XZY":this._x=_*m*g-h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],m=t[6],g=t[10],_=i+c+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-d)*y,this._y=(a-h)*y,this._z=(u-s)*y}else if(i>c&&i>g){const y=2*Math.sqrt(1+i-c-g);this._w=(m-d)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(a+h)/y}else if(c>g){const y=2*Math.sqrt(1+c-i-g);this._w=(a-h)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+g-i-c);this._w=(u-s)/y,this._x=(a+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=i*m+u*c+s*h-a*d,this._y=s*m+u*d+a*c-i*h,this._z=a*m+u*h+i*d-s*c,this._w=u*m-i*c-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=u*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*s-c*i),m=2*(c*t-a*s),g=2*(a*i-u*t);return this.x=t+d*h+u*g-c*m,this.y=i+d*m+c*h-a*g,this.z=s+d*g+a*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-a*c,this.y=a*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const df=new X,Ym=new vi;class sr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,ci):ci.fromBufferAttribute(a,u),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fl.copy(i.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Ol.subVectors(this.max,aa),Gs.subVectors(e.a,aa),Ws.subVectors(e.b,aa),Xs.subVectors(e.c,aa),Cr.subVectors(Ws,Gs),br.subVectors(Xs,Ws),ns.subVectors(Gs,Xs);let t=[0,-Cr.z,Cr.y,0,-br.z,br.y,0,-ns.z,ns.y,Cr.z,0,-Cr.x,br.z,0,-br.x,ns.z,0,-ns.x,-Cr.y,Cr.x,0,-br.y,br.x,0,-ns.y,ns.x,0];return!hf(t,Gs,Ws,Xs,Ol)||(t=[1,0,0,0,1,0,0,0,1],!hf(t,Gs,Ws,Xs,Ol))?!1:(kl.crossVectors(Cr,br),t=[kl.x,kl.y,kl.z],hf(t,Gs,Ws,Xs,Ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new X,new X,new X,new X,new X,new X,new X,new X],ci=new X,Fl=new sr,Gs=new X,Ws=new X,Xs=new X,Cr=new X,br=new X,ns=new X,aa=new X,Ol=new X,kl=new X,is=new X;function hf(o,e,t,i,s){for(let a=0,u=o.length-3;a<=u;a+=3){is.fromArray(o,a);const c=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),d=e.dot(is),h=t.dot(is),m=i.dot(is);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const Jx=new sr,la=new X,pf=new X;class Ci{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jx.setFromPoints(e).getCenter(i);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(la,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(pf)),this.expandByPoint(la.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new X,mf=new X,Bl=new X,Pr=new X,gf=new X,zl=new X,_f=new X;class Tu{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){mf.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(mf);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Bl),c=Pr.dot(this.direction),d=-Pr.dot(Bl),h=Pr.lengthSq(),m=Math.abs(1-u*u);let g,_,y,M;if(m>0)if(g=u*d-c,_=u*c-d,M=a*m,g>=0)if(_>=-M)if(_<=M){const T=1/m;g*=T,_*=T,y=g*(g+u*_+2*c)+_*(u*g+_+2*d)+h}else _=a,g=Math.max(0,-(u*_+c)),y=-g*g+_*(_+2*d)+h;else _=-a,g=Math.max(0,-(u*_+c)),y=-g*g+_*(_+2*d)+h;else _<=-M?(g=Math.max(0,-(-u*a+c)),_=g>0?-a:Math.min(Math.max(-a,-d),a),y=-g*g+_*(_+2*d)+h):_<=M?(g=0,_=Math.min(Math.max(-a,-d),a),y=_*(_+2*d)+h):(g=Math.max(0,-(u*a+c)),_=g>0?a:Math.min(Math.max(-a,-d),a),y=-g*g+_*(_+2*d)+h);else _=u>0?-a:a,g=Math.max(0,-(u*_+c)),y=-g*g+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(mf).addScaledVector(Bl,_),y}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);const i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,u,c,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),m>=0?(a=(e.min.y-_.y)*m,u=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,u=(e.min.y-_.y)*m),i>u||a>s||((a>i||isNaN(i))&&(i=a),(u<s||isNaN(s))&&(s=u),g>=0?(c=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,i,s,a){gf.subVectors(t,e),zl.subVectors(i,e),_f.crossVectors(gf,zl);let u=this.direction.dot(_f),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Pr.subVectors(this.origin,e);const d=c*this.direction.dot(zl.crossVectors(Pr,zl));if(d<0)return null;const h=c*this.direction.dot(gf.cross(Pr));if(h<0||d+h>u)return null;const m=-c*Pr.dot(_f);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,s,a,u,c,d,h,m,g,_,y,M,T,S){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,h,m,g,_,y,M,T,S)}set(e,t,i,s,a,u,c,d,h,m,g,_,y,M,T,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=u,x[9]=c,x[13]=d,x[2]=h,x[6]=m,x[10]=g,x[14]=_,x[3]=y,x[7]=M,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/js.setFromMatrixColumn(e,0).length(),a=1/js.setFromMatrixColumn(e,1).length(),u=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=u*m,y=u*g,M=c*m,T=c*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=y+M*h,t[5]=_-T*h,t[9]=-c*d,t[2]=T-_*h,t[6]=M+y*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*m,y=d*g,M=h*m,T=h*g;t[0]=_+T*c,t[4]=M*c-y,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=y*c-M,t[6]=T+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*m,y=d*g,M=h*m,T=h*g;t[0]=_-T*c,t[4]=-u*g,t[8]=M+y*c,t[1]=y+M*c,t[5]=u*m,t[9]=T-_*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*m,y=u*g,M=c*m,T=c*g;t[0]=d*m,t[4]=M*h-y,t[8]=_*h+T,t[1]=d*g,t[5]=T*h+_,t[9]=y*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,y=u*h,M=c*d,T=c*h;t[0]=d*m,t[4]=T-_*g,t[8]=M*g+y,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-h*m,t[6]=y*g+M,t[10]=_-T*g}else if(e.order==="XZY"){const _=u*d,y=u*h,M=c*d,T=c*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=_*g+T,t[5]=u*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=c*m,t[10]=T*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ey,e,ty)}lookAt(e,t,i){const s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Lr.crossVectors(i,jn),Lr.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Lr.crossVectors(i,jn)),Lr.normalize(),Hl.crossVectors(jn,Lr),s[0]=Lr.x,s[4]=Hl.x,s[8]=jn.x,s[1]=Lr.y,s[5]=Hl.y,s[9]=jn.y,s[2]=Lr.z,s[6]=Hl.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],m=i[1],g=i[5],_=i[9],y=i[13],M=i[2],T=i[6],S=i[10],x=i[14],D=i[3],L=i[7],C=i[11],V=i[15],O=s[0],U=s[4],j=s[8],b=s[12],R=s[1],z=s[5],oe=s[9],te=s[13],ce=s[2],he=s[6],se=s[10],le=s[14],B=s[3],ae=s[7],re=s[11],N=s[15];return a[0]=u*O+c*R+d*ce+h*B,a[4]=u*U+c*z+d*he+h*ae,a[8]=u*j+c*oe+d*se+h*re,a[12]=u*b+c*te+d*le+h*N,a[1]=m*O+g*R+_*ce+y*B,a[5]=m*U+g*z+_*he+y*ae,a[9]=m*j+g*oe+_*se+y*re,a[13]=m*b+g*te+_*le+y*N,a[2]=M*O+T*R+S*ce+x*B,a[6]=M*U+T*z+S*he+x*ae,a[10]=M*j+T*oe+S*se+x*re,a[14]=M*b+T*te+S*le+x*N,a[3]=D*O+L*R+C*ce+V*B,a[7]=D*U+L*z+C*he+V*ae,a[11]=D*j+L*oe+C*se+V*re,a[15]=D*b+L*te+C*le+V*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],m=e[2],g=e[6],_=e[10],y=e[14],M=e[3],T=e[7],S=e[11],x=e[15];return M*(+a*d*g-s*h*g-a*c*_+i*h*_+s*c*y-i*d*y)+T*(+t*d*y-t*h*_+a*u*_-s*u*y+s*h*m-a*d*m)+S*(+t*h*g-t*c*y-a*u*g+i*u*y+a*c*m-i*h*m)+x*(-s*c*m-t*d*g+t*c*_+s*u*g-i*u*_+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=e[9],_=e[10],y=e[11],M=e[12],T=e[13],S=e[14],x=e[15],D=g*S*h-T*_*h+T*d*y-c*S*y-g*d*x+c*_*x,L=M*_*h-m*S*h-M*d*y+u*S*y+m*d*x-u*_*x,C=m*T*h-M*g*h+M*c*y-u*T*y-m*c*x+u*g*x,V=M*g*d-m*T*d-M*c*_+u*T*_+m*c*S-u*g*S,O=t*D+i*L+s*C+a*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=D*U,e[1]=(T*_*a-g*S*a-T*s*y+i*S*y+g*s*x-i*_*x)*U,e[2]=(c*S*a-T*d*a+T*s*h-i*S*h-c*s*x+i*d*x)*U,e[3]=(g*d*a-c*_*a-g*s*h+i*_*h+c*s*y-i*d*y)*U,e[4]=L*U,e[5]=(m*S*a-M*_*a+M*s*y-t*S*y-m*s*x+t*_*x)*U,e[6]=(M*d*a-u*S*a-M*s*h+t*S*h+u*s*x-t*d*x)*U,e[7]=(u*_*a-m*d*a+m*s*h-t*_*h-u*s*y+t*d*y)*U,e[8]=C*U,e[9]=(M*g*a-m*T*a-M*i*y+t*T*y+m*i*x-t*g*x)*U,e[10]=(u*T*a-M*c*a+M*i*h-t*T*h-u*i*x+t*c*x)*U,e[11]=(m*c*a-u*g*a-m*i*h+t*g*h+u*i*y-t*c*y)*U,e[12]=V*U,e[13]=(m*T*s-M*g*s+M*i*_-t*T*_-m*i*S+t*g*S)*U,e[14]=(M*c*s-u*T*s-M*i*d+t*T*d+u*i*S-t*c*S)*U,e[15]=(u*g*s-m*c*s+m*i*d-t*g*d-u*i*_+t*c*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,u=e.x,c=e.y,d=e.z,h=a*u,m=a*c;return this.set(h*u+i,h*c-s*d,h*d+s*c,0,h*c+s*d,m*c+i,m*d-s*u,0,h*d-s*c,m*d+s*u,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,u){return this.set(1,i,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,m=u+u,g=c+c,_=a*h,y=a*m,M=a*g,T=u*m,S=u*g,x=c*g,D=d*h,L=d*m,C=d*g,V=i.x,O=i.y,U=i.z;return s[0]=(1-(T+x))*V,s[1]=(y+C)*V,s[2]=(M-L)*V,s[3]=0,s[4]=(y-C)*O,s[5]=(1-(_+x))*O,s[6]=(S+D)*O,s[7]=0,s[8]=(M+L)*U,s[9]=(S-D)*U,s[10]=(1-(_+T))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=js.set(s[0],s[1],s[2]).length();const u=js.set(s[4],s[5],s[6]).length(),c=js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],fi.copy(this);const h=1/a,m=1/u,g=1/c;return fi.elements[0]*=h,fi.elements[1]*=h,fi.elements[2]*=h,fi.elements[4]*=m,fi.elements[5]*=m,fi.elements[6]*=m,fi.elements[8]*=g,fi.elements[9]*=g,fi.elements[10]*=g,t.setFromRotationMatrix(fi),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,s,a,u,c=Ji){const d=this.elements,h=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let y,M;if(c===Ji)y=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===yu)y=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,u,c=Ji){const d=this.elements,h=1/(t-e),m=1/(i-s),g=1/(u-a),_=(t+e)*h,y=(i+s)*m;let M,T;if(c===Ji)M=(u+a)*g,T=-2*g;else if(c===yu)M=a*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=T,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const js=new X,fi=new at,ey=new X(0,0,0),ty=new X(1,1,1),Lr=new X,Hl=new X,jn=new X,qm=new at,Km=new vi;class xi{constructor(e=0,t=0,i=0,s=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],d=s[1],h=s[5],m=s[9],g=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-pt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class M_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ny=0;const $m=new X,Ys=new vi,Xi=new at,Vl=new X,ua=new X,iy=new X,ry=new vi,Zm=new X(1,0,0),Qm=new X(0,1,0),Jm=new X(0,0,1),eg={type:"added"},sy={type:"removed"},qs={type:"childadded",child:null},vf={type:"childremoved",child:null};class Wt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new X,t=new xi,i=new vi,s=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new ot}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(Jm,e)}translateOnAxis(e,t){return $m.copy(e).applyQuaternion(this.quaternion),this.position.add($m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(Jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vl.copy(e):Vl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ua,Vl,this.up):Xi.lookAt(Vl,ua,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Xi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eg),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sy),vf.child=e,this.dispatchEvent(vf),vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eg),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function u(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new X(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new X,ji=new X,xf=new X,Yi=new X,Ks=new X,$s=new X,tg=new X,yf=new X,Sf=new X,Mf=new X,Ef=new wt,Tf=new wt,Af=new wt;class mi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),di.subVectors(e,t),s.cross(di);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){di.subVectors(s,t),ji.subVectors(i,t),xf.subVectors(e,t);const u=di.dot(di),c=di.dot(ji),d=di.dot(xf),h=ji.dot(ji),m=ji.dot(xf),g=u*h-c*c;if(g===0)return a.set(0,0,0),null;const _=1/g,y=(h*d-c*m)*_,M=(u*m-c*d)*_;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,s,a,u,c,d){return this.getBarycoord(e,t,i,s,Yi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Yi.x),d.addScaledVector(u,Yi.y),d.addScaledVector(c,Yi.z),d)}static getInterpolatedAttribute(e,t,i,s,a,u){return Ef.setScalar(0),Tf.setScalar(0),Af.setScalar(0),Ef.fromBufferAttribute(e,t),Tf.fromBufferAttribute(e,i),Af.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Ef,a.x),u.addScaledVector(Tf,a.y),u.addScaledVector(Af,a.z),u}static isFrontFacing(e,t,i,s){return di.subVectors(i,t),ji.subVectors(e,t),di.cross(ji).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),di.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return mi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let u,c;Ks.subVectors(s,i),$s.subVectors(a,i),yf.subVectors(e,i);const d=Ks.dot(yf),h=$s.dot(yf);if(d<=0&&h<=0)return t.copy(i);Sf.subVectors(e,s);const m=Ks.dot(Sf),g=$s.dot(Sf);if(m>=0&&g<=m)return t.copy(s);const _=d*g-m*h;if(_<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(i).addScaledVector(Ks,u);Mf.subVectors(e,a);const y=Ks.dot(Mf),M=$s.dot(Mf);if(M>=0&&y<=M)return t.copy(a);const T=y*h-d*M;if(T<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(i).addScaledVector($s,c);const S=m*M-y*g;if(S<=0&&g-m>=0&&y-M>=0)return tg.subVectors(a,s),c=(g-m)/(g-m+(y-M)),t.copy(s).addScaledVector(tg,c);const x=1/(S+T+_);return u=T*x,c=_*x,t.copy(i).addScaledVector(Ks,u).addScaledVector($s,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function wf(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=Yd(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=wf(u,a,e+1/3),this.g=wf(u,a,e),this.b=wf(u,a,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=un){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=E_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return yt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(pt(Sn.r*255,0,255))*65536+Math.round(pt(Sn.g*255,0,255))*256+Math.round(pt(Sn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Sn.copy(this),t);const i=Sn.r,s=Sn.g,a=Sn.b,u=Math.max(i,s,a),c=Math.min(i,s,a);let d,h;const m=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=m<=.5?g/(u+c):g/(2-u-c),u){case i:d=(s-a)/g+(s<a?6:0);break;case s:d=(a-i)/g+2;break;case a:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=un){yt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,i=Sn.g,s=Sn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(Gl);const i=xa(Ir.h,Gl.h,t),s=xa(Ir.s,Gl.s,t),a=xa(Ir.l,Gl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new rt;rt.NAMES=E_;let oy=0;class Ri extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=uo,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xf,this.blendDst=jf,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xf&&(i.blendSrc=this.blendSrc),this.blendDst!==jf&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class er extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new X,Wl=new St;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bd,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bd&&(e.usage=this.usage),e}}class T_ extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class A_ extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nr extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ay=0;const ti=new at,Rf=new Wt,Zs=new X,Yn=new sr,ca=new sr,ln=new X;class bi extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x_(e)?A_:T_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ot().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return Rf.lookAt(e),Rf.updateMatrix(),this.applyMatrix4(Rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new nr(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Yn.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];ca.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(Yn.min,ca.min),Yn.expandByPoint(ln),ln.addVectors(Yn.max,ca.max),Yn.expandByPoint(ln)):(Yn.expandByPoint(ca.min),Yn.expandByPoint(ca.max))}Yn.getCenter(i);let s=0;for(let a=0,u=e.count;a<u;a++)ln.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)ln.fromBufferAttribute(c,h),d&&(Zs.fromBufferAttribute(e,h),ln.add(Zs)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let j=0;j<i.count;j++)c[j]=new X,d[j]=new X;const h=new X,m=new X,g=new X,_=new St,y=new St,M=new St,T=new X,S=new X;function x(j,b,R){h.fromBufferAttribute(i,j),m.fromBufferAttribute(i,b),g.fromBufferAttribute(i,R),_.fromBufferAttribute(a,j),y.fromBufferAttribute(a,b),M.fromBufferAttribute(a,R),m.sub(h),g.sub(h),y.sub(_),M.sub(_);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(z),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(z),c[j].add(T),c[b].add(T),c[R].add(T),d[j].add(S),d[b].add(S),d[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let j=0,b=D.length;j<b;++j){const R=D[j],z=R.start,oe=R.count;for(let te=z,ce=z+oe;te<ce;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new X,C=new X,V=new X,O=new X;function U(j){V.fromBufferAttribute(s,j),O.copy(V);const b=c[j];L.copy(b),L.sub(V.multiplyScalar(V.dot(b))).normalize(),C.crossVectors(O,b);const z=C.dot(d[j])<0?-1:1;u.setXYZW(j,L.x,L.y,L.z,z)}for(let j=0,b=D.length;j<b;++j){const R=D[j],z=R.start,oe=R.count;for(let te=z,ce=z+oe;te<ce;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new X,a=new X,u=new X,c=new X,d=new X,h=new X,m=new X,g=new X;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),T=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),m.subVectors(u,a),g.subVectors(s,a),m.cross(g),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),c.add(m),d.add(m),h.add(m),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(T,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),m.subVectors(u,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,g=c.normalized,_=new h.constructor(d.length*m);let y=0,M=0;for(let T=0,S=d.length;T<S;T++){c.isInterleavedBufferAttribute?y=d[T]*c.data.stride+c.offset:y=d[T]*m;for(let x=0;x<m;x++)_[M++]=h[y++]}return new In(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,i);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let m=0,g=h.length;m<g;m++){const _=h[m],y=e(_,i);d.push(y)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,_=h.length;g<_;g++){const y=h[g];m.push(y.toJSON(e.data))}m.length>0&&(s[d]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],g=a[h];for(let _=0,y=g.length;_<y;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ng=new at,rs=new Tu,Xl=new Ci,ig=new X,jl=new X,Yl=new X,ql=new X,Cf=new X,Kl=new X,rg=new X,$l=new X;class Pn extends Wt{constructor(e=new bi,t=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){Kl.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const m=c[d],g=a[d];m!==0&&(Cf.fromBufferAttribute(g,e),u?Kl.addScaledVector(Cf,m):Kl.addScaledVector(Cf.sub(t),m))}t.add(Kl)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(a),rs.copy(e.ray).recast(e.near),!(Xl.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Xl,ig)===null||rs.origin.distanceToSquared(ig)>(e.far-e.near)**2))&&(ng.copy(a).invert(),rs.copy(e.ray).applyMatrix4(ng),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,y=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const S=_[M],x=u[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let C=D,V=L;C<V;C+=3){const O=c.getX(C),U=c.getX(C+1),j=c.getX(C+2);s=Zl(this,x,e,i,h,m,g,O,U,j),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),T=Math.min(c.count,y.start+y.count);for(let S=M,x=T;S<x;S+=3){const D=c.getX(S),L=c.getX(S+1),C=c.getX(S+2);s=Zl(this,u,e,i,h,m,g,D,L,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const S=_[M],x=u[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=D,V=L;C<V;C+=3){const O=C,U=C+1,j=C+2;s=Zl(this,x,e,i,h,m,g,O,U,j),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let S=M,x=T;S<x;S+=3){const D=S,L=S+1,C=S+2;s=Zl(this,u,e,i,h,m,g,D,L,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function ly(o,e,t,i,s,a,u,c){let d;if(e.side===Hn?d=i.intersectTriangle(u,a,s,!0,c):d=i.intersectTriangle(s,a,u,e.side===ir,c),d===null)return null;$l.copy(c),$l.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo($l);return h<t.near||h>t.far?null:{distance:h,point:$l.clone(),object:o}}function Zl(o,e,t,i,s,a,u,c,d,h){o.getVertexPosition(c,jl),o.getVertexPosition(d,Yl),o.getVertexPosition(h,ql);const m=ly(o,e,t,i,jl,Yl,ql,rg);if(m){const g=new X;mi.getBarycoord(rg,jl,Yl,ql,g),s&&(m.uv=mi.getInterpolatedAttribute(s,c,d,h,g,new St)),a&&(m.uv1=mi.getInterpolatedAttribute(a,c,d,h,g,new St)),u&&(m.normal=mi.getInterpolatedAttribute(u,c,d,h,g,new X),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:c,b:d,c:h,normal:new X,materialIndex:0};mi.getNormal(jl,Yl,ql,_.normal),m.face=_,m.barycoord=g}return m}class Ao extends bi{constructor(e=1,t=1,i=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],m=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,i,t,e,u,a,0),M("z","y","x",1,-1,i,t,-e,u,a,1),M("x","z","y",1,1,e,i,t,s,u,2),M("x","z","y",1,-1,e,i,-t,s,u,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new nr(h,3)),this.setAttribute("normal",new nr(m,3)),this.setAttribute("uv",new nr(g,2));function M(T,S,x,D,L,C,V,O,U,j,b){const R=C/U,z=V/j,oe=C/2,te=V/2,ce=O/2,he=U+1,se=j+1;let le=0,B=0;const ae=new X;for(let re=0;re<se;re++){const N=re*z-te;for(let ne=0;ne<he;ne++){const Ne=ne*R-oe;ae[T]=Ne*D,ae[S]=N*L,ae[x]=ce,h.push(ae.x,ae.y,ae.z),ae[T]=0,ae[S]=0,ae[x]=O>0?1:-1,m.push(ae.x,ae.y,ae.z),g.push(ne/U),g.push(1-re/j),le+=1}}for(let re=0;re<j;re++)for(let N=0;N<U;N++){const ne=_+N+he*re,Ne=_+N+he*(re+1),Q=_+(N+1)+he*(re+1),de=_+(N+1)+he*re;d.push(ne,Ne,de),d.push(Ne,Q,de),B+=6}c.addGroup(y,B,b),y+=B,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Cn(o){const e={};for(let t=0;t<o.length;t++){const i=So(o[t]);for(const s in i)e[s]=i[s]}return e}function uy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function w_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const cy={clone:So,merge:Cn};var fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class R_ extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new X,sg=new St,og=new St;class bn extends R_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,sg,og),t.subVectors(og,sg)}setViewOffset(e,t,i,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,Js=1;class hy extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(Qs,Js,e,t);s.layers=this.layers,this.add(s);const a=new bn(Qs,Js,e,t);a.layers=this.layers,this.add(a);const u=new bn(Qs,Js,e,t);u.layers=this.layers,this.add(u);const c=new bn(Qs,Js,e,t);c.layers=this.layers,this.add(c);const d=new bn(Qs,Js,e,t);d.layers=this.layers,this.add(d);const h=new bn(Qs,Js,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===yu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class qd extends cn{constructor(e,t,i,s,a,u,c,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:mo,super(e,t,i,s,a,u,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class py extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ao(5,5,5),a=new zr({name:"CubemapFromEquirect",uniforms:So(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:kr});a.uniforms.tEquirect.value=t;const u=new Pn(s,a),c=t.minFilter;return t.minFilter===Qi&&(t.minFilter=qn),new hy(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(a)}}class my extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bd,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new X;class Kd{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ag=new X,lg=new wt,ug=new wt,_y=new X,cg=new at,Ql=new X,bf=new Ci,fg=new at,Pf=new Tu;class vy extends Pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zm,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ql),this.boundingBox.expandByPoint(Ql)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ql),this.boundingSphere.expandByPoint(Ql)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bf.copy(this.boundingSphere),bf.applyMatrix4(s),e.ray.intersectsSphere(bf)!==!1&&(fg.copy(s).invert(),Pf.copy(e.ray).applyMatrix4(fg),!(this.boundingBox!==null&&Pf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;lg.fromBufferAttribute(s.attributes.skinIndex,e),ug.fromBufferAttribute(s.attributes.skinWeight,e),ag.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const u=ug.getComponent(a);if(u!==0){const c=lg.getComponent(a);cg.multiplyMatrices(i.bones[c].matrixWorld,i.boneInverses[c]),t.addScaledVector(_y.copy(ag).applyMatrix4(cg),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class C_ extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class b_ extends cn{constructor(e=null,t=1,i=1,s,a,u,c,d,h=Ln,m=Ln,g,_){super(null,u,c,d,h,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dg=new at,xy=new at;class $d{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,u=e.length;a<u;a++){const c=e[a]?e[a].matrixWorld:xy;dg.multiplyMatrices(c,t[a]),dg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new $d(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new b_(t,e,e,ii,gi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let u=t[a];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),u=new C_),this.bones.push(u),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const u=t[s];e.bones.push(u.uuid);const c=i[s];e.boneInverses.push(c.toArray())}return e}}class Pd extends In{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const eo=new at,hg=new at,Jl=[],pg=new sr,yy=new at,fa=new Pn,da=new Ci;class Sy extends Pn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,eo),pg.copy(e.boundingBox).applyMatrix4(eo),this.boundingBox.union(pg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,eo),da.copy(e.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=s[u+c]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,eo),hg.multiplyMatrices(i,eo),fa.matrixWorld=hg,fa.raycast(e,Jl);for(let u=0,c=Jl.length;u<c;u++){const d=Jl[u];d.instanceId=a,d.object=this,t.push(d)}Jl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new b_(new Float32Array(s*this.count),s,this.count,Vd,gi));const a=this.morphTexture.source.data.data;let u=0;for(let h=0;h<i.length;h++)u+=i[h];const c=this.geometry.morphTargetsRelative?1:1-u,d=s*e;a[d]=c,a.set(i,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Lf=new X,My=new X,Ey=new ot;let us=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Lf.subVectors(i,t).cross(My.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ey.getNormalMatrix(e),s=this.coplanarPoint(Lf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ss=new Ci,eu=new X;class Zd{constructor(e=new us,t=new us,i=new us,s=new us,a=new us,u=new us){this.planes=[e,t,i,s,a,u]}set(e,t,i,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ji){const i=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],d=s[3],h=s[4],m=s[5],g=s[6],_=s[7],y=s[8],M=s[9],T=s[10],S=s[11],x=s[12],D=s[13],L=s[14],C=s[15];if(i[0].setComponents(d-a,_-h,S-y,C-x).normalize(),i[1].setComponents(d+a,_+h,S+y,C+x).normalize(),i[2].setComponents(d+u,_+m,S+M,C+D).normalize(),i[3].setComponents(d-u,_-m,S-M,C-D).normalize(),i[4].setComponents(d-c,_-g,S-T,C-L).normalize(),t===Ji)i[5].setComponents(d+c,_+g,S+T,C+L).normalize();else if(t===yu)i[5].setComponents(c,g,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(eu.x=s.normal.x>0?e.max.x:e.min.x,eu.y=s.normal.y>0?e.max.y:e.min.y,eu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class P_ extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Su=new X,Mu=new X,mg=new at,ha=new Tu,tu=new Ci,If=new X,gg=new X;class Qd extends Wt{constructor(e=new bi,t=new P_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Su.fromBufferAttribute(t,s-1),Mu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Su.distanceTo(Mu);e.setAttribute("lineDistance",new nr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tu.copy(i.boundingSphere),tu.applyMatrix4(s),tu.radius+=a,e.ray.intersectsSphere(tu)===!1)return;mg.copy(s).invert(),ha.copy(e.ray).applyMatrix4(mg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let T=y,S=M-1;T<S;T+=h){const x=m.getX(T),D=m.getX(T+1),L=nu(this,e,ha,d,x,D);L&&t.push(L)}if(this.isLineLoop){const T=m.getX(M-1),S=m.getX(y),x=nu(this,e,ha,d,T,S);x&&t.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let T=y,S=M-1;T<S;T+=h){const x=nu(this,e,ha,d,T,T+1);x&&t.push(x)}if(this.isLineLoop){const T=nu(this,e,ha,d,M-1,y);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function nu(o,e,t,i,s,a){const u=o.geometry.attributes.position;if(Su.fromBufferAttribute(u,s),Mu.fromBufferAttribute(u,a),t.distanceSqToSegment(Su,Mu,If,gg)>i)return;If.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(If);if(!(d<e.near||d>e.far))return{distance:d,point:gg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const _g=new X,vg=new X;class Ty extends Qd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)_g.fromBufferAttribute(t,s),vg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_g.distanceTo(vg);e.setAttribute("lineDistance",new nr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ay extends Qd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class L_ extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xg=new at,Ld=new Tu,iu=new Ci,ru=new X;class wy extends Wt{constructor(e=new bi,t=new L_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),iu.copy(i.boundingSphere),iu.applyMatrix4(s),iu.radius+=a,e.ray.intersectsSphere(iu)===!1)return;xg.copy(s).invert(),Ld.copy(e.ray).applyMatrix4(xg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=i.index,g=i.attributes.position;if(h!==null){const _=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let M=_,T=y;M<T;M++){const S=h.getX(M);ru.fromBufferAttribute(g,S),yg(ru,S,d,s,e,t,this)}}else{const _=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let M=_,T=y;M<T;M++)ru.fromBufferAttribute(g,M),yg(ru,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function yg(o,e,t,i,s,a,u){const c=Ld.distanceSqToPoint(o);if(c<t){const d=new X;Ld.closestPointToPoint(o,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class hs extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class I_ extends cn{constructor(e,t,i,s,a,u,c,d,h,m=co){if(m!==co&&m!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===co&&(i=ps),i===void 0&&m===xo&&(i=vo),super(null,s,a,u,c,d,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ln,this.minFilter=d!==void 0?d:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wa extends bi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),h=c+1,m=d+1,g=e/c,_=t/d,y=[],M=[],T=[],S=[];for(let x=0;x<m;x++){const D=x*_-u;for(let L=0;L<h;L++){const C=L*g-a;M.push(C,-D,0),T.push(0,0,1),S.push(L/c),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let D=0;D<c;D++){const L=D+h*x,C=D+h*(x+1),V=D+1+h*(x+1),O=D+1+h*x;y.push(L,C,O),y.push(C,V,O)}this.setIndex(y),this.setAttribute("position",new nr(M,3)),this.setAttribute("normal",new nr(T,3)),this.setAttribute("uv",new nr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jd extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=__,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends Jd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ry extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function su(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function by(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Py(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Sg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,u=0;u!==i;++a){const c=t[a]*e;for(let d=0;d!==e;++d)s[u++]=o[c+d]}return s}function D_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let u=a[i];if(u!==void 0)if(Array.isArray(u))do u=a[i],u!==void 0&&(e.push(a.time),t.push.apply(t,u)),a=o[s++];while(a!==void 0);else if(u.toArray!==void 0)do u=a[i],u!==void 0&&(e.push(a.time),u.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do u=a[i],u!==void 0&&(e.push(a.time),t.push(u)),a=o[s++];while(a!==void 0)}class Ra{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let u;n:{i:if(!(e<s)){for(let c=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(a=s,s=t[++i],e<s)break t}u=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(i=2,a=c);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}u=i,i=0;break n}break e}for(;i<u;){const c=i+u>>>1;e<t[c]?u=c:i=c+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let u=0;u!==s;++u)t[u]=i[a+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ly extends Ra{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:so,endingEnd:so}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,u=e+1,c=s[a],d=s[u];if(c===void 0)switch(this.getSettings_().endingStart){case oo:a=e,c=2*t-i;break;case vu:a=s.length-2,c=t+s[a]-s[a+1];break;default:a=e,c=i}if(d===void 0)switch(this.getSettings_().endingEnd){case oo:u=e,d=2*i-t;break;case vu:u=1,d=i+s[1]-s[0];break;default:u=e-1,d=t}const h=(i-t)*.5,m=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(d-i),this._offsetPrev=a*m,this._offsetNext=u*m}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),T=M*M,S=T*M,x=-_*S+2*_*T-_*M,D=(1+_)*S+(-1.5-2*_)*T+(-.5+_)*M+1,L=(-1-y)*S+(1.5+y)*T+.5*M,C=y*S-y*T;for(let V=0;V!==c;++V)a[V]=x*u[m+V]+D*u[h+V]+L*u[d+V]+C*u[g+V];return a}}class N_ extends Ra{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==c;++_)a[_]=u[h+_]*g+u[d+_]*m;return a}}class Iy extends Ra{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Li{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=su(t,this.TimeBufferType),this.values=su(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:su(e.times,Array),values:su(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Iy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new N_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ly(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ma:t=this.InterpolantFactoryMethodDiscrete;break;case Ea:t=this.InterpolantFactoryMethodLinear;break;case uf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return uf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,u=s-1;for(;a!==s&&i[a]<e;)++a;for(;u!==-1&&i[u]>t;)--u;if(++u,a!==0||u!==s){a>=u&&(u=Math.max(u,1),a=u-1);const c=this.getValueSize();this.times=i.slice(a,u),this.values=this.values.slice(a*c,u*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let c=0;c!==a;c++){const d=i[c];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,d,u),e=!1;break}u=d}if(s!==void 0&&by(s))for(let c=0,d=s.length;c!==d;++c){const h=s[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===uf,a=e.length-1;let u=1;for(let c=1;c<a;++c){let d=!1;const h=e[c],m=e[c+1];if(h!==m&&(c!==1||h!==e[0]))if(s)d=!0;else{const g=c*i,_=g-i,y=g+i;for(let M=0;M!==i;++M){const T=t[g+M];if(T!==t[_+M]||T!==t[y+M]){d=!0;break}}}if(d){if(c!==u){e[u]=e[c];const g=c*i,_=u*i;for(let y=0;y!==i;++y)t[_+y]=t[g+y]}++u}}if(a>0){e[u]=e[a];for(let c=a*i,d=u*i,h=0;h!==i;++h)t[d+h]=t[c+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=Ea;class wo extends Li{constructor(e,t,i){super(e,t,i)}}wo.prototype.ValueTypeName="bool";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=Ma;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class U_ extends Li{}U_.prototype.ValueTypeName="color";class Mo extends Li{}Mo.prototype.ValueTypeName="number";class Dy extends Ra{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=(i-t)/(s-t);let h=e*c;for(let m=h+c;h!==m;h+=4)vi.slerpFlat(a,0,u,h-c,u,h,d);return a}}class Eo extends Li{InterpolantFactoryMethodLinear(e){return new Dy(this.times,this.values,this.getValueSize(),e)}}Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Li{constructor(e,t,i){super(e,t,i)}}Ro.prototype.ValueTypeName="string";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=Ma;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends Li{}To.prototype.ValueTypeName="vector";class Id{constructor(e="",t=-1,i=[],s=jd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let u=0,c=i.length;u!==c;++u)t.push(Uy(i[u]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,u=i.length;a!==u;++a)t.push(Li.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,u=[];for(let c=0;c<a;c++){let d=[],h=[];d.push((c+a-1)%a,c,(c+1)%a),h.push(0,1,0);const m=Py(d);d=Sg(d,1,m),h=Sg(h,1,m),!s&&d[0]===0&&(d.push(a),h.push(h[0])),u.push(new Mo(".morphTargetInfluences["+t[c].name+"]",d,h).scale(1/i))}return new this(e,-1,u)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,d=e.length;c<d;c++){const h=e[c],m=h.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(h)}}const u=[];for(const c in s)u.push(this.CreateFromMorphTargetSequence(c,s[c],t,i));return u}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,y,M,T){if(y.length!==0){const S=[],x=[];D_(y,S,x,M),S.length!==0&&T.push(new g(_,S,x))}},s=[],a=e.name||"default",u=e.fps||30,c=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const _=h[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let T=0;T<_[M].morphTargets.length;T++)y[_[M].morphTargets[T]]=-1;for(const T in y){const S=[],x=[];for(let D=0;D!==_[M].morphTargets.length;++D){const L=_[M];S.push(L.time),x.push(L.morphTarget===T?1:0)}s.push(new Mo(".morphTargetInfluence["+T+"]",S,x))}d=y.length*u}else{const y=".bones["+t[g].name+"]";i(To,y+".position",_,"pos",s),i(Eo,y+".quaternion",_,"rot",s),i(To,y+".scale",_,"scl",s)}}return s.length===0?null:new this(a,d,s,c)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ny(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return To;case"color":return U_;case"quaternion":return Eo;case"bool":case"boolean":return wo;case"string":return Ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Uy(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ny(o.type);if(o.times===void 0){const t=[],i=[];D_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Or={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Fy{constructor(e,t,i){const s=this;let a=!1,u=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){c++,a===!1&&s.onStart!==void 0&&s.onStart(m,u,c),a=!0},this.itemEnd=function(m){u++,s.onProgress!==void 0&&s.onProgress(m,u,c),u===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=h.length;g<_;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null}}}const Oy=new Fy;class gs{constructor(e){this.manager=e!==void 0?e:Oy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gs.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class ky extends Error{constructor(e,t){super(e),this.response=t}}class F_ extends gs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Or.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:i,onError:s});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:i,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,d=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=qi[e],g=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let T=0;const S=new ReadableStream({start(x){D();function D(){g.read().then(({done:L,value:C})=>{if(L)x.close();else{T+=C.byteLength;const V=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:y});for(let O=0,U=m.length;O<U;O++){const j=m[O];j.onProgress&&j.onProgress(V)}x.enqueue(C),D()}},L=>{x.error(L)})}}});return new Response(S)}else throw new ky(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,c));case"json":return h.json();default:if(c===void 0)return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(c),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{Or.add(e,h);const m=qi[e];delete qi[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onLoad&&y.onLoad(h)}}).catch(h=>{const m=qi[e];if(m===void 0)throw this.manager.itemError(e),h;delete qi[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class O_ extends gs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Or.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=Ta("img");function d(){m(),Or.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class By extends gs{constructor(e){super(e)}load(e,t,i,s){const a=new qd;a.colorSpace=un;const u=new O_(this.manager);u.setCrossOrigin(this.crossOrigin),u.setPath(this.path);let c=0;function d(h){u.load(e[h],function(m){a.images[h]=m,c++,c===6&&(a.needsUpdate=!0,t&&t(a))},void 0,s)}for(let h=0;h<e.length;++h)d(h);return a}}class zy extends gs{constructor(e){super(e)}load(e,t,i,s){const a=new cn,u=new O_(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class eh extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Df=new at,Mg=new X,Eg=new X;class th{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Mg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mg),Eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eg),t.updateMatrixWorld(),Df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hy extends th{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=yo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vy extends eh{constructor(e,t,i=0,s=Math.PI/3,a=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=u,this.map=null,this.shadow=new Hy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Tg=new at,pa=new X,Nf=new X;class Gy extends th{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),pa.setFromMatrixPosition(e.matrixWorld),i.position.copy(pa),Nf.copy(i.position),Nf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Nf),i.updateMatrixWorld(),s.makeTranslation(-pa.x,-pa.y,-pa.z),Tg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tg)}}class Wy extends eh{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Gy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nh extends R_{constructor(e=-1,t=1,i=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xy extends th{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jy extends eh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Xy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ya{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Yy extends gs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Or.get(e);if(u!==void 0){if(a.manager.itemStart(e),u.then){u.then(h=>{t&&t(h),a.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const d=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return Or.add(e,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Or.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Or.add(e,d),a.manager.itemStart(e)}}class qy extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ky{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ag(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ag();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ag(){return performance.now()}class $y{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,a,u;switch(t){case"quaternion":s=this._slerp,a=this._slerpAdditive,u=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,a=this._select,u=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,a=this._lerpAdditive,u=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=a,this._setIdentity=u,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,a=e*s+s;let u=this.cumulativeWeight;if(u===0){for(let c=0;c!==s;++c)i[a+c]=i[c];u=t}else{u+=t;const c=t/u;this._mixBufferRegion(i,a,0,c,s)}this.cumulativeWeight=u}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,a=this.cumulativeWeight,u=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const d=t*this._origIndex;this._mixBufferRegion(i,s,d,1-a,t)}u>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let d=t,h=t+t;d!==h;++d)if(i[d]!==i[d+t]){c.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let a=i,u=s;a!==u;++a)t[a]=t[s+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,a){if(s>=.5)for(let u=0;u!==a;++u)e[t+u]=e[i+u]}_slerp(e,t,i,s){vi.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,a){const u=this._workIndex*a;vi.multiplyQuaternionsFlat(e,u,e,t,e,i),vi.slerpFlat(e,t,e,t,e,u,s)}_lerp(e,t,i,s,a){const u=1-s;for(let c=0;c!==a;++c){const d=t+c;e[d]=e[d]*u+e[i+c]*s}}_lerpAdditive(e,t,i,s,a){for(let u=0;u!==a;++u){const c=t+u;e[c]=e[c]+e[i+u]*s}}}const ih="\\[\\]\\.:\\/",Zy=new RegExp("["+ih+"]","g"),rh="[^"+ih+"]",Qy="[^"+ih.replace("\\.","")+"]",Jy=/((?:WC+[\/:])*)/.source.replace("WC",rh),eS=/(WCOD+)?/.source.replace("WCOD",Qy),tS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),nS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),iS=new RegExp("^"+Jy+eS+tS+nS+"$"),rS=["material","materials","bones","map"];class sS{constructor(e,t,i){const s=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class bt{constructor(e,t,i){this.path=t,this.parsedPath=i||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,i):new bt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zy,"")}static parseTrackName(e){const t=iS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);rS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let u=0;u<a.length;u++){const c=a[u];if(c.name===t||c.uuid===t)return c;const d=i(c.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[s];if(u===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=a}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=sS;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class oS{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const a=t.tracks,u=a.length,c=new Array(u),d={endingStart:so,endingEnd:so};for(let h=0;h!==u;++h){const m=a[h].createInterpolant(null);c[h]=m,m.settings=d}this._interpolantSettings=d,this._interpolants=c,this._propertyBindings=new Array(u),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=dx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,a=e._clip.duration,u=a/s,c=s/a;e.warp(1,u,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,a=s.time,u=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=s._lendControlInterpolant(),this._timeScaleInterpolant=c);const d=c.parameterPositions,h=c.sampleValues;return d[0]=a,d[1]=a+i,h[0]=e/u,h[1]=t/u,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const d=(e-a)*i;d<0||i===0?t=0:(this._startTime=null,t=i*d)}t*=this._updateTimeScale(e);const u=this._updateTime(t),c=this._updateWeight(e);if(c>0){const d=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case px:for(let m=0,g=d.length;m!==g;++m)d[m].evaluate(u),h[m].accumulateAdditive(c);break;case jd:default:for(let m=0,g=d.length;m!==g;++m)d[m].evaluate(u),h[m].accumulate(s,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,a=this._loopCount;const u=i===hx;if(e===0)return a===-1?s:u&&(a&1)===1?t-s:s;if(i===fx){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,u)):this._setEndings(this.repetitions===0,!0,u)),s>=t||s<0){const c=Math.floor(s/t);s-=t*c,a+=Math.abs(c);const d=this.repetitions-a;if(d<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(d===1){const h=e<0;this._setEndings(h,!h,u)}else this._setEndings(!1,!1,u);this._loopCount=a,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=s;if(u&&(a&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=oo,s.endingEnd=oo):(e?s.endingStart=this.zeroSlopeAtStart?oo:so:s.endingStart=vu,t?s.endingEnd=this.zeroSlopeAtEnd?oo:so:s.endingEnd=vu)}_scheduleFading(e,t,i){const s=this._mixer,a=s.time;let u=this._weightInterpolant;u===null&&(u=s._lendControlInterpolant(),this._weightInterpolant=u);const c=u.parameterPositions,d=u.sampleValues;return c[0]=a,d[0]=t,c[1]=a+e,d[1]=i,this}}const aS=new Float32Array(1);class lS extends Hr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,a=s.length,u=e._propertyBindings,c=e._interpolants,d=i.uuid,h=this._bindingsByRootAndName;let m=h[d];m===void 0&&(m={},h[d]=m);for(let g=0;g!==a;++g){const _=s[g],y=_.name;let M=m[y];if(M!==void 0)++M.referenceCount,u[g]=M;else{if(M=u[g],M!==void 0){M._cacheIndex===null&&(++M.referenceCount,this._addInactiveBinding(M,d,y));continue}const T=t&&t._propertyBindings[g].binding.parsedPath;M=new $y(bt.create(i,y,T),_.ValueTypeName,_.getValueSize()),++M.referenceCount,this._addInactiveBinding(M,d,y),u[g]=M}c[g].resultBuffer=M.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,a=this._actionsByClip[s];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,a=this._actionsByClip;let u=a[t];if(u===void 0)u={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=u;else{const c=u.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=s.length,s.push(e),u.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,u=this._actionsByClip,c=u[a],d=c.knownActions,h=d[d.length-1],m=e._byClipCacheIndex;h._byClipCacheIndex=m,d[m]=h,d.pop(),e._byClipCacheIndex=null;const g=c.actionByRoot,_=(e._localRoot||this._root).uuid;delete g[_],d.length===0&&delete u[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,a=this._bindings;let u=s[t];u===void 0&&(u={},s[t]=u),u[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,a=i.path,u=this._bindingsByRootAndName,c=u[s],d=t[t.length-1],h=e._cacheIndex;d._cacheIndex=h,t[h]=d,t.pop(),delete c[a],Object.keys(c).length===0&&delete u[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new N_(new Float32Array(2),new Float32Array(2),1,aS),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,a=t[s];e.__cacheIndex=s,t[s]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){const s=t||this._root,a=s.uuid;let u=typeof e=="string"?Id.findByName(s,e):e;const c=u!==null?u.uuid:e,d=this._actionsByClip[c];let h=null;if(i===void 0&&(u!==null?i=u.blendMode:i=jd),d!==void 0){const g=d.actionByRoot[a];if(g!==void 0&&g.blendMode===i)return g;h=d.knownActions[0],u===null&&(u=h._clip)}if(u===null)return null;const m=new oS(this,u,t,i);return this._bindAction(m,h),this._addInactiveAction(m,c,a),m}existingAction(e,t){const i=t||this._root,s=i.uuid,a=typeof e=="string"?Id.findByName(i,e):e,u=a?a.uuid:e,c=this._actionsByClip[u];return c!==void 0&&c.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,a=Math.sign(e),u=this._accuIndex^=1;for(let h=0;h!==i;++h)t[h]._update(s,e,a,u);const c=this._bindings,d=this._nActiveBindings;for(let h=0;h!==d;++h)c[h].apply(u);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,a=s[i];if(a!==void 0){const u=a.knownActions;for(let c=0,d=u.length;c!==d;++c){const h=u[c];this._deactivateAction(h);const m=h._cacheIndex,g=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,g._cacheIndex=m,t[m]=g,t.pop(),this._removeInactiveBindingsForAction(h)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const u in i){const c=i[u].actionByRoot,d=c[t];d!==void 0&&(this._deactivateAction(d),this._removeInactiveAction(d))}const s=this._bindingsByRootAndName,a=s[t];if(a!==void 0)for(const u in a){const c=a[u];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class uS extends Hr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function wg(o,e,t,i){const s=cS(i);switch(t){case c_:return o*e;case d_:return o*e;case h_:return o*e*2;case Vd:return o*e/s.components*s.byteLength;case Gd:return o*e/s.components*s.byteLength;case p_:return o*e*2/s.components*s.byteLength;case Wd:return o*e*2/s.components*s.byteLength;case f_:return o*e*3/s.components*s.byteLength;case ii:return o*e*4/s.components*s.byteLength;case Xd:return o*e*4/s.components*s.byteLength;case fu:case du:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hu:case pu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case id:case sd:return Math.max(o,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(o,8)*Math.max(e,8)/2;case od:case ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ld:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case yd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case mu:case Ed:case Td:return Math.ceil(o/4)*Math.ceil(e/4)*16;case m_:case Ad:return Math.ceil(o/4)*Math.ceil(e/4)*8;case wd:case Rd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cS(o){switch(o){case rr:case a_:return{byteLength:1,components:1};case Sa:case l_:case Aa:return{byteLength:2,components:1};case zd:case Hd:return{byteLength:2,components:4};case ps:case Bd:case gi:return{byteLength:4,components:1};case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function k_(){let o=null,e=!1,t=null,i=null;function s(a,u){t(a,u),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function fS(o){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,g=h.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,h,m),c.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function i(c,d,h){const m=d.array,g=d.updateRanges;if(o.bindBuffer(h,c),g.length===0)o.bufferSubData(h,0,m);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],T=g[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,g[_]=T)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const T=g[y];o.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(o.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,d),h.version=c.version}}return{get:s,remove:a,update:u}}var dS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,SS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ES=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,US=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VS="gl_FragColor = linearToOutputTexel( gl_FragColor );",GS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$S=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$M=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ME=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:dS,alphahash_pars_fragment:hS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:_S,aomap_fragment:vS,aomap_pars_fragment:xS,batching_pars_vertex:yS,batching_vertex:SS,begin_vertex:MS,beginnormal_vertex:ES,bsdfs:TS,iridescence_fragment:AS,bumpmap_pars_fragment:wS,clipping_planes_fragment:RS,clipping_planes_pars_fragment:CS,clipping_planes_pars_vertex:bS,clipping_planes_vertex:PS,color_fragment:LS,color_pars_fragment:IS,color_pars_vertex:DS,color_vertex:NS,common:US,cube_uv_reflection_fragment:FS,defaultnormal_vertex:OS,displacementmap_pars_vertex:kS,displacementmap_vertex:BS,emissivemap_fragment:zS,emissivemap_pars_fragment:HS,colorspace_fragment:VS,colorspace_pars_fragment:GS,envmap_fragment:WS,envmap_common_pars_fragment:XS,envmap_pars_fragment:jS,envmap_pars_vertex:YS,envmap_physical_pars_fragment:rM,envmap_vertex:qS,fog_vertex:KS,fog_pars_vertex:$S,fog_fragment:ZS,fog_pars_fragment:QS,gradientmap_pars_fragment:JS,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:oM,lights_phong_fragment:aM,lights_phong_pars_fragment:lM,lights_physical_fragment:uM,lights_physical_pars_fragment:cM,lights_fragment_begin:fM,lights_fragment_maps:dM,lights_fragment_end:hM,logdepthbuf_fragment:pM,logdepthbuf_pars_fragment:mM,logdepthbuf_pars_vertex:gM,logdepthbuf_vertex:_M,map_fragment:vM,map_pars_fragment:xM,map_particle_fragment:yM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:EM,morphinstance_vertex:TM,morphcolor_vertex:AM,morphnormal_vertex:wM,morphtarget_pars_vertex:RM,morphtarget_vertex:CM,normal_fragment_begin:bM,normal_fragment_maps:PM,normal_pars_fragment:LM,normal_pars_vertex:IM,normal_vertex:DM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:UM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:OM,iridescence_pars_fragment:kM,opaque_fragment:BM,packing:zM,premultiplied_alpha_fragment:HM,project_vertex:VM,dithering_fragment:GM,dithering_pars_fragment:WM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:qM,shadowmap_vertex:KM,shadowmask_pars_fragment:$M,skinbase_vertex:ZM,skinning_pars_vertex:QM,skinning_vertex:JM,skinnormal_vertex:eE,specularmap_fragment:tE,specularmap_pars_fragment:nE,tonemapping_fragment:iE,tonemapping_pars_fragment:rE,transmission_fragment:sE,transmission_pars_fragment:oE,uv_pars_fragment:aE,uv_pars_vertex:lE,uv_vertex:uE,worldpos_vertex:cE,background_vert:fE,background_frag:dE,backgroundCube_vert:hE,backgroundCube_frag:pE,cube_vert:mE,cube_frag:gE,depth_vert:_E,depth_frag:vE,distanceRGBA_vert:xE,distanceRGBA_frag:yE,equirect_vert:SE,equirect_frag:ME,linedashed_vert:EE,linedashed_frag:TE,meshbasic_vert:AE,meshbasic_frag:wE,meshlambert_vert:RE,meshlambert_frag:CE,meshmatcap_vert:bE,meshmatcap_frag:PE,meshnormal_vert:LE,meshnormal_frag:IE,meshphong_vert:DE,meshphong_frag:NE,meshphysical_vert:UE,meshphysical_frag:FE,meshtoon_vert:OE,meshtoon_frag:kE,points_vert:BE,points_frag:zE,shadow_vert:HE,shadow_frag:VE,sprite_vert:GE,sprite_frag:WE},Ce={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},wi={basic:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Cn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Cn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Cn([Ce.points,Ce.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Cn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Cn([Ce.common,Ce.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Cn([Ce.sprite,Ce.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Cn([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Cn([Ce.lights,Ce.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};wi.physical={uniforms:Cn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const ou={r:0,b:0,g:0},os=new xi,XE=new at;function jE(o,e,t,i,s,a,u){const c=new rt(0);let d=a===!0?0:1,h,m,g=null,_=0,y=null;function M(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?t:e).get(C)),C}function T(L){let C=!1;const V=M(L);V===null?x(c,d):V&&V.isColor&&(x(V,1),C=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,C){const V=M(C);V&&(V.isCubeTexture||V.mapping===Eu)?(m===void 0&&(m=new Pn(new Ao(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:So(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,U,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),os.copy(C.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.material.uniforms.envMap.value=V,m.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(XE.makeRotationFromEuler(os)),m.material.toneMapped=yt.getTransfer(V.colorSpace)!==Dt,(g!==V||_!==V.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,g=V,_=V.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):V&&V.isTexture&&(h===void 0&&(h=new Pn(new wa(2,2),new zr({name:"BackgroundMaterial",uniforms:So(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=V,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=yt.getTransfer(V.colorSpace)!==Dt,V.matrixAutoUpdate===!0&&V.updateMatrix(),h.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||_!==V.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,g=V,_=V.version,y=o.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function x(L,C){L.getRGB(ou,w_(o)),i.buffers.color.setClear(ou.r,ou.g,ou.b,C,u)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(L,C=1){c.set(L),d=C,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,x(c,d)},render:T,addToRenderList:S,dispose:D}}function YE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,u=!1;function c(R,z,oe,te,ce){let he=!1;const se=g(te,oe,z);a!==se&&(a=se,h(a.object)),he=y(R,te,oe,ce),he&&M(R,te,oe,ce),ce!==null&&e.update(ce,o.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,C(R,z,oe,te),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return o.createVertexArray()}function h(R){return o.bindVertexArray(R)}function m(R){return o.deleteVertexArray(R)}function g(R,z,oe){const te=oe.wireframe===!0;let ce=i[R.id];ce===void 0&&(ce={},i[R.id]=ce);let he=ce[z.id];he===void 0&&(he={},ce[z.id]=he);let se=he[te];return se===void 0&&(se=_(d()),he[te]=se),se}function _(R){const z=[],oe=[],te=[];for(let ce=0;ce<t;ce++)z[ce]=0,oe[ce]=0,te[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:te,object:R,attributes:{},index:null}}function y(R,z,oe,te){const ce=a.attributes,he=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){const re=ce[B];let N=he[B];if(N===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;se++}return a.attributesNum!==se||a.index!==te}function M(R,z,oe,te){const ce={},he=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){let re=he[B];re===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),ce[B]=N,se++}a.attributes=ce,a.attributesNum=se,a.index=te}function T(){const R=a.newAttributes;for(let z=0,oe=R.length;z<oe;z++)R[z]=0}function S(R){x(R,0)}function x(R,z){const oe=a.newAttributes,te=a.enabledAttributes,ce=a.attributeDivisors;oe[R]=1,te[R]===0&&(o.enableVertexAttribArray(R),te[R]=1),ce[R]!==z&&(o.vertexAttribDivisor(R,z),ce[R]=z)}function D(){const R=a.newAttributes,z=a.enabledAttributes;for(let oe=0,te=z.length;oe<te;oe++)z[oe]!==R[oe]&&(o.disableVertexAttribArray(oe),z[oe]=0)}function L(R,z,oe,te,ce,he,se){se===!0?o.vertexAttribIPointer(R,z,oe,ce,he):o.vertexAttribPointer(R,z,oe,te,ce,he)}function C(R,z,oe,te){T();const ce=te.attributes,he=oe.getAttributes(),se=z.defaultAttributeValues;for(const le in he){const B=he[le];if(B.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ne=ne.buffer,Q=ne.type,de=ne.bytesPerElement,Se=Q===o.INT||Q===o.UNSIGNED_INT||ae.gpuType===Bd;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,De=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)x(B.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let Ze=0;Ze<B.locationSize;Ze++)L(B.location+Ze,N/B.locationSize,Q,re,Te*de,(De+N/B.locationSize*Ze)*de,Se)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)x(B.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let ve=0;ve<B.locationSize;ve++)L(B.location+ve,N/B.locationSize,Q,re,N*de,N/B.locationSize*ve*de,Se)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(B.location,re);break;case 3:o.vertexAttrib3fv(B.location,re);break;case 4:o.vertexAttrib4fv(B.location,re);break;default:o.vertexAttrib1fv(B.location,re)}}}}D()}function V(){j();for(const R in i){const z=i[R];for(const oe in z){const te=z[oe];for(const ce in te)m(te[ce].object),delete te[ce];delete z[oe]}delete i[R]}}function O(R){if(i[R.id]===void 0)return;const z=i[R.id];for(const oe in z){const te=z[oe];for(const ce in te)m(te[ce].object),delete te[ce];delete z[oe]}delete i[R.id]}function U(R){for(const z in i){const oe=i[z];if(oe[R.id]===void 0)continue;const te=oe[R.id];for(const ce in te)m(te[ce].object),delete te[ce];delete oe[R.id]}}function j(){b(),u=!0,a!==s&&(a=s,h(a.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:j,resetDefaultState:b,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function qE(o,e,t){let i;function s(h){i=h}function a(h,m){o.drawArrays(i,h,m),t.update(m,i,1)}function u(h,m,g){g!==0&&(o.drawArraysInstanced(i,h,m,g),t.update(m,i,g))}function c(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];t.update(y,i,1)}function d(h,m,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)u(h[M],m[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,m,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=m[T]*_[T];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function KE(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(U){return!(U!==ii&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const j=U===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==rr&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==gi&&!j)}function d(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:V,maxSamples:O}}function $E(o){const e=this;let t=null,i=0,s=!1,a=!1;const u=new us,c=new ot,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||i!==0||s;return s=_,i=g.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?m(null):h();else{const D=a?0:i,L=D*4;let C=x.clippingState||null;d.value=C,C=m(M,_,L,y);for(let V=0;V!==L;++V)C[V]=t[V];x.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,y,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=d.value,M!==!0||S===null){const x=y+T*4,D=_.matrixWorldInverse;c.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,C=y;L!==T;++L,C+=4)u.copy(g[L]).applyMatrix4(D,c),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function ZE(o){let e=new WeakMap;function t(u,c){return c===ed?u.mapping=mo:c===td&&(u.mapping=go),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===ed||c===td)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new py(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const ao=4,Rg=[.125,.215,.35,.446,.526,.582],ds=20,Uf=new nh,Cg=new rt;let Ff=null,Of=0,kf=0,Bf=!1;const cs=(1+Math.sqrt(5))/2,to=1/cs,bg=[new X(-cs,to,0),new X(cs,to,0),new X(-to,0,cs),new X(to,0,cs),new X(0,cs,-to),new X(0,cs,to),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ff=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ff,Of,kf),this._renderer.xr.enabled=Bf,e.scissorTest=!1,au(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ff=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Aa,format:ii,colorSpace:Dn,depthBuffer:!1},s=Lg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QE(a)),this._blurMaterial=JE(a,e,t)}return s}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,Uf)}_sceneToCubeUV(e,t,i,s){const c=new bn(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Cg),m.toneMapping=Br,m.autoClear=!1;const y=new er({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),M=new Pn(new Ao,y);let T=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,T=!0):(y.color.copy(Cg),T=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(c.up.set(0,d[x],0),c.lookAt(h[x],0,0)):D===1?(c.up.set(0,0,d[x]),c.lookAt(0,h[x],0)):(c.up.set(0,d[x],0),c.lookAt(0,0,h[x]));const L=this._cubeSize;au(s,D*L,x>2?L:0,L,L),m.setRenderTarget(s),T&&m.render(M,c),m.render(e,c)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===mo||e.mapping===go;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new Pn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;au(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Uf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=bg[(s-a-1)%bg.length];this._blur(e,a-1,a,u,c)}t.autoClear=i}_blur(e,t,i,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",a),this._halfBlur(u,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Pn(this._lodPlanes[s],h),_=h.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ds-1),T=a/M,S=isFinite(a)?1+Math.floor(m*T):ds;S>ds&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ds}`);const x=[];let D=0;for(let U=0;U<ds;++U){const j=U/T,b=Math.exp(-j*j/2);x.push(b),U===0?D+=b:U<S&&(D+=2*b)}for(let U=0;U<x.length;U++)x[U]=x[U]/D;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:L}=this;_.dTheta.value=M,_.mipInt.value=L-i;const C=this._sizeLods[s],V=3*C*(s>L-ao?s-L+ao:0),O=4*(this._cubeSize-C);au(t,V,O,3*C,2*C),d.setRenderTarget(t),d.render(g,Uf)}}function QE(o){const e=[],t=[],i=[];let s=o;const a=o-ao+1+Rg.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let d=1/c;u>o-ao?d=Rg[u-o+ao-1]:u===0&&(d=0),i.push(d);const h=1/(c-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,T=3,S=2,x=1,D=new Float32Array(T*M*y),L=new Float32Array(S*M*y),C=new Float32Array(x*M*y);for(let O=0;O<y;O++){const U=O%3*2/3-1,j=O>2?0:-1,b=[U,j,0,U+2/3,j,0,U+2/3,j+1,0,U,j,0,U+2/3,j+1,0,U,j+1,0];D.set(b,T*M*O),L.set(_,S*M*O);const R=[O,O,O,O,O,O];C.set(R,x*M*O)}const V=new bi;V.setAttribute("position",new In(D,T)),V.setAttribute("uv",new In(L,S)),V.setAttribute("faceIndex",new In(C,x)),e.push(V),s>ao&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lg(o,e,t){const i=new ms(o,e,t);return i.texture.mapping=Eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function au(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function JE(o,e,t){const i=new Float32Array(ds),s=new X(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Ig(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Dg(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eT(o){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,h=d===ed||d===td,m=d===mo||d===go;if(h||m){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new Pg(o)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const y=c.image;return h&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new Pg(o)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function s(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function tT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ro("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function nT(o,e,t,i){const s={},a=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const y in _)e.update(_[y],o.ARRAY_BUFFER)}function h(g){const _=[],y=g.index,M=g.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let L=0,C=D.length;L<C;L+=3){const V=D[L+0],O=D[L+1],U=D[L+2];_.push(V,O,O,U,U,V)}}else if(M!==void 0){const D=M.array;T=M.version;for(let L=0,C=D.length/3-1;L<C;L+=3){const V=L+0,O=L+1,U=L+2;_.push(V,O,O,U,U,V)}}else return;const S=new(x_(_)?A_:T_)(_,1);S.version=T;const x=a.get(g);x&&e.remove(x),a.set(g,S)}function m(g){const _=a.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:d,getWireframeAttribute:m}}function iT(o,e,t){let i;function s(_){i=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function d(_,y){o.drawElements(i,y,a,_*u),t.update(y,i,1)}function h(_,y,M){M!==0&&(o.drawElementsInstanced(i,y,a,_*u,M),t.update(y,i,M))}function m(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,i,1)}function g(_,y,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)h(_[x]/u,y[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,_,0,T,0,M);let x=0;for(let D=0;D<M;D++)x+=y[D]*T[D];t.update(x,i,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function rT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function sT(o,e,t){const i=new WeakMap,s=new wt;function a(u,c,d){const h=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(c);if(_===void 0||_.count!==g){let R=function(){j.dispose(),i.delete(c),c.removeEventListener("dispose",R)};var y=R;_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],D=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let V=c.attributes.position.count*C,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*O*4*g),j=new S_(U,V,O,g);j.type=gi,j.needsUpdate=!0;const b=C*4;for(let z=0;z<g;z++){const oe=x[z],te=D[z],ce=L[z],he=V*O*4*z;for(let se=0;se<oe.count;se++){const le=se*b;M===!0&&(s.fromBufferAttribute(oe,se),U[he+le+0]=s.x,U[he+le+1]=s.y,U[he+le+2]=s.z,U[he+le+3]=0),T===!0&&(s.fromBufferAttribute(te,se),U[he+le+4]=s.x,U[he+le+5]=s.y,U[he+le+6]=s.z,U[he+le+7]=0),S===!0&&(s.fromBufferAttribute(ce,se),U[he+le+8]=s.x,U[he+le+9]=s.y,U[he+le+10]=s.z,U[he+le+11]=ce.itemSize===4?s.w:1)}}_={count:g,texture:j,size:new St(V,O)},i.set(c,_),c.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",T),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function oT(o,e,t,i){let s=new WeakMap;function a(d){const h=i.render.frame,m=d.geometry,g=e.get(d,m);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return g}function u(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const B_=new cn,Ng=new I_(1,1),z_=new S_,H_=new Qx,V_=new qd,Ug=[],Fg=[],Og=new Float32Array(16),kg=new Float32Array(9),Bg=new Float32Array(4);function Co(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=Ug[s];if(a===void 0&&(a=new Float32Array(s),Ug[s]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function en(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function tn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Au(o,e){let t=Fg[e];t===void 0&&(t=new Int32Array(e),Fg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function aT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function lT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;o.uniform2fv(this.addr,e),tn(t,e)}}function uT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;o.uniform3fv(this.addr,e),tn(t,e)}}function cT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;o.uniform4fv(this.addr,e),tn(t,e)}}function fT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Bg.set(i),o.uniformMatrix2fv(this.addr,!1,Bg),tn(t,i)}}function dT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;kg.set(i),o.uniformMatrix3fv(this.addr,!1,kg),tn(t,i)}}function hT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Og.set(i),o.uniformMatrix4fv(this.addr,!1,Og),tn(t,i)}}function pT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function mT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;o.uniform2iv(this.addr,e),tn(t,e)}}function gT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;o.uniform3iv(this.addr,e),tn(t,e)}}function _T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;o.uniform4iv(this.addr,e),tn(t,e)}}function vT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function xT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;o.uniform2uiv(this.addr,e),tn(t,e)}}function yT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;o.uniform3uiv(this.addr,e),tn(t,e)}}function ST(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;o.uniform4uiv(this.addr,e),tn(t,e)}}function MT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Ng.compareFunction=v_,a=Ng):a=B_,t.setTexture2D(e||a,s)}function ET(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||H_,s)}function TT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||V_,s)}function AT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||z_,s)}function wT(o){switch(o){case 5126:return aT;case 35664:return lT;case 35665:return uT;case 35666:return cT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}function RT(o,e){o.uniform1fv(this.addr,e)}function CT(o,e){const t=Co(e,this.size,2);o.uniform2fv(this.addr,t)}function bT(o,e){const t=Co(e,this.size,3);o.uniform3fv(this.addr,t)}function PT(o,e){const t=Co(e,this.size,4);o.uniform4fv(this.addr,t)}function LT(o,e){const t=Co(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function IT(o,e){const t=Co(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function DT(o,e){const t=Co(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function NT(o,e){o.uniform1iv(this.addr,e)}function UT(o,e){o.uniform2iv(this.addr,e)}function FT(o,e){o.uniform3iv(this.addr,e)}function OT(o,e){o.uniform4iv(this.addr,e)}function kT(o,e){o.uniform1uiv(this.addr,e)}function BT(o,e){o.uniform2uiv(this.addr,e)}function zT(o,e){o.uniform3uiv(this.addr,e)}function HT(o,e){o.uniform4uiv(this.addr,e)}function VT(o,e,t){const i=this.cache,s=e.length,a=Au(t,s);en(i,a)||(o.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||B_,a[u])}function GT(o,e,t){const i=this.cache,s=e.length,a=Au(t,s);en(i,a)||(o.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||H_,a[u])}function WT(o,e,t){const i=this.cache,s=e.length,a=Au(t,s);en(i,a)||(o.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||V_,a[u])}function XT(o,e,t){const i=this.cache,s=e.length,a=Au(t,s);en(i,a)||(o.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||z_,a[u])}function jT(o){switch(o){case 5126:return RT;case 35664:return CT;case 35665:return bT;case 35666:return PT;case 35674:return LT;case 35675:return IT;case 35676:return DT;case 5124:case 35670:return NT;case 35667:case 35671:return UT;case 35668:case 35672:return FT;case 35669:case 35673:return OT;case 5125:return kT;case 36294:return BT;case 36295:return zT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class YT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wT(t.type)}}class qT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jT(t.type)}}class KT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],i)}}}const zf=/(\w+)(\])?(\[|\.)?/g;function zg(o,e){o.seq.push(e),o.map[e.id]=e}function $T(o,e,t){const i=o.name,s=i.length;for(zf.lastIndex=0;;){const a=zf.exec(i),u=zf.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===s){zg(t,h===void 0?new YT(c,o,e):new qT(c,o,e));break}else{let g=t.map[c];g===void 0&&(g=new KT(c),zg(t,g)),t=g}}}class gu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);$T(a,u,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function Hg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const ZT=37297;let QT=0;function JT(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const Vg=new ot;function eA(o){yt._getMatrix(Vg,yt.workingColorSpace,o);const e=`mat3( ${Vg.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(o)){case xu:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Gg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+JT(o.getShaderSource(e),u)}else return s}function tA(o,e){const t=eA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nA(o,e){let t;switch(e){case ix:t="Linear";break;case rx:t="Reinhard";break;case sx:t="Cineon";break;case ox:t="ACESFilmic";break;case lx:t="AgX";break;case ux:t="Neutral";break;case ax:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lu=new X;function iA(){yt.getLuminanceCoefficients(lu);const o=lu.x.toFixed(4),e=lu.y.toFixed(4),t=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function sA(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oA(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function _a(o){return o!==""}function Wg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(o){return o.replace(aA,uA)}const lA=new Map;function uA(o,e){let t=lt[e];if(t===void 0){const i=lA.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dd(t)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jg(o){return o.replace(cA,fA)}function fA(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Yg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===F0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function hA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function mA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case tx:e="ENVMAP_BLENDING_MIX";break;case nx:e="ENVMAP_BLENDING_ADD";break}return e}function gA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _A(o,e,t,i){const s=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=dA(t),h=hA(t),m=pA(t),g=mA(t),_=gA(t),y=rA(t),M=sA(a),T=s.createProgram();let S,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(_a).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(_a).join(`
`),x.length>0&&(x+=`
`)):(S=[Yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),x=[Yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Br?"#define TONE_MAPPING":"",t.toneMapping!==Br?lt.tonemapping_pars_fragment:"",t.toneMapping!==Br?nA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,tA("linearToOutputTexel",t.outputColorSpace),iA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),u=Dd(u),u=Wg(u,t),u=Xg(u,t),c=Dd(c),c=Wg(c,t),c=Xg(c,t),u=jg(u),c=jg(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=D+S+u,C=D+x+c,V=Hg(s,s.VERTEX_SHADER,L),O=Hg(s,s.FRAGMENT_SHADER,C);s.attachShader(T,V),s.attachShader(T,O),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function U(z){if(o.debug.checkShaderErrors){const oe=s.getProgramInfoLog(T).trim(),te=s.getShaderInfoLog(V).trim(),ce=s.getShaderInfoLog(O).trim();let he=!0,se=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,T,V,O);else{const le=Gg(s,V,"vertex"),B=Gg(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+B)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||ce==="")&&(se=!1);se&&(z.diagnostics={runnable:he,programLog:oe,vertexShader:{log:te,prefix:S},fragmentShader:{log:ce,prefix:x}})}s.deleteShader(V),s.deleteShader(O),j=new gu(s,T),b=oA(s,T)}let j;this.getUniforms=function(){return j===void 0&&U(this),j};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,ZT)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=O,this}let vA=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yA(e),t.set(e,i)),i}}class yA{constructor(e){this.id=vA++,this.code=e,this.usedTimes=0}}function SA(o,e,t,i,s,a,u){const c=new M_,d=new xA,h=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return h.add(b),b===0?"uv":`uv${b}`}function S(b,R,z,oe,te){const ce=oe.fog,he=te.geometry,se=b.isMeshStandardMaterial?oe.environment:null,le=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),B=le&&le.mapping===Eu?le.image.height:null,ae=M[b.type];b.precision!==null&&(y=s.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ne,Q,de,Se;if(ae){const Mt=wi[ae];Ne=Mt.vertexShader,Q=Mt.fragmentShader}else Ne=b.vertexShader,Q=b.fragmentShader,d.update(b),de=d.getVertexShaderID(b),Se=d.getFragmentShaderID(b);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),De=te.isInstancedMesh===!0,Ze=te.isBatchedMesh===!0,It=!!b.map,gt=!!b.matcap,Ut=!!le,k=!!b.aoMap,Mn=!!b.lightMap,ht=!!b.bumpMap,ct=!!b.normalMap,je=!!b.displacementMap,Pt=!!b.emissiveMap,Ge=!!b.metalnessMap,P=!!b.roughnessMap,A=b.anisotropy>0,Z=b.clearcoat>0,pe=b.dispersion>0,ge=b.iridescence>0,ue=b.sheen>0,We=b.transmission>0,Ae=A&&!!b.anisotropyMap,Ue=Z&&!!b.clearcoatMap,ut=Z&&!!b.clearcoatNormalMap,Me=Z&&!!b.clearcoatRoughnessMap,Oe=ge&&!!b.iridescenceMap,qe=ge&&!!b.iridescenceThicknessMap,Je=ue&&!!b.sheenColorMap,ke=ue&&!!b.sheenRoughnessMap,ft=!!b.specularMap,nt=!!b.specularColorMap,Rt=!!b.specularIntensityMap,G=We&&!!b.transmissionMap,we=We&&!!b.thicknessMap,ie=!!b.gradientMap,fe=!!b.alphaMap,Pe=b.alphaTest>0,be=!!b.alphaHash,it=!!b.extensions;let Ot=Br;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ot=o.toneMapping);const Zt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:Q,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&te._colorsTexture!==null,instancing:De,instancingColor:De&&te.instanceColor!==null,instancingMorph:De&&te.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Dn,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:gt,envMap:Ut,envMapMode:Ut&&le.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:Mn,bumpMap:ht,normalMap:ct,displacementMap:_&&je,emissiveMap:Pt,normalMapObjectSpace:ct&&b.normalMapType===vx,normalMapTangentSpace:ct&&b.normalMapType===__,metalnessMap:Ge,roughnessMap:P,anisotropy:A,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:qe,sheen:ue,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ft,specularColorMap:nt,specularIntensityMap:Rt,transmission:We,transmissionMap:G,thicknessMap:we,gradientMap:ie,opaque:b.transparent===!1&&b.blending===uo&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Pe,alphaHash:be,combine:b.combine,mapUv:It&&T(b.map.channel),aoMapUv:k&&T(b.aoMap.channel),lightMapUv:Mn&&T(b.lightMap.channel),bumpMapUv:ht&&T(b.bumpMap.channel),normalMapUv:ct&&T(b.normalMap.channel),displacementMapUv:je&&T(b.displacementMap.channel),emissiveMapUv:Pt&&T(b.emissiveMap.channel),metalnessMapUv:Ge&&T(b.metalnessMap.channel),roughnessMapUv:P&&T(b.roughnessMap.channel),anisotropyMapUv:Ae&&T(b.anisotropyMap.channel),clearcoatMapUv:Ue&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(b.sheenRoughnessMap.channel),specularMapUv:ft&&T(b.specularMap.channel),specularColorMapUv:nt&&T(b.specularColorMap.channel),specularIntensityMapUv:Rt&&T(b.specularIntensityMap.channel),transmissionMapUv:G&&T(b.transmissionMap.channel),thicknessMapUv:we&&T(b.thicknessMap.channel),alphaMapUv:fe&&T(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ct||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(It||fe),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ot,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:Pt&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===hi,flipSided:b.side===Hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:it&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&b.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=h.has(1),Zt.vertexUv2s=h.has(2),Zt.vertexUv3s=h.has(3),h.clear(),Zt}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)R.push(z),R.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(D(R,b),L(R,b),R.push(o.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function D(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function L(b,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reverseDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),b.push(c.mask)}function C(b){const R=M[b.type];let z;if(R){const oe=wi[R];z=cy.clone(oe.uniforms)}else z=b.uniforms;return z}function V(b,R){let z;for(let oe=0,te=m.length;oe<te;oe++){const ce=m[oe];if(ce.cacheKey===R){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new _A(o,R,b,a),m.push(z)),z}function O(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function U(b){d.remove(b)}function j(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:V,releaseProgram:O,releaseShaderCache:U,programs:m,dispose:j}}function MA(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function i(u){o.delete(u)}function s(u,c,d){o.get(u)[c]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function EA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function qg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Kg(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function u(g,_,y,M,T,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:T,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=T,x.group=S),e++,x}function c(g,_,y,M,T,S){const x=u(g,_,y,M,T,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function d(g,_,y,M,T,S){const x=u(g,_,y,M,T,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(g,_){t.length>1&&t.sort(g||EA),i.length>1&&i.sort(_||qg),s.length>1&&s.sort(_||qg)}function m(){for(let g=e,_=o.length;g<_;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:d,finish:m,sort:h}}function TA(){let o=new WeakMap;function e(i,s){const a=o.get(i);let u;return a===void 0?(u=new Kg,o.set(i,[u])):s>=a.length?(u=new Kg,a.push(u)):u=a[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function AA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new rt};break;case"SpotLight":t={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return o[e.id]=t,t}}}function wA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let RA=0;function CA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function bA(o){const e=new AA,t=wA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new X);const s=new X,a=new at,u=new at;function c(h){let m=0,g=0,_=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let y=0,M=0,T=0,S=0,x=0,D=0,L=0,C=0,V=0,O=0,U=0;h.sort(CA);for(let b=0,R=h.length;b<R;b++){const z=h[b],oe=z.color,te=z.intensity,ce=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=oe.r*te,g+=oe.g*te,_+=oe.b*te;else if(z.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(z.sh.coefficients[se],te);U++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,i.directionalShadow[y]=B,i.directionalShadowMap[y]=he,i.directionalShadowMatrix[y]=z.shadow.matrix,D++}i.directional[y]=se,y++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(oe).multiplyScalar(te),se.distance=ce,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,i.spot[T]=se;const le=z.shadow;if(z.map&&(i.spotLightMap[V]=z.map,V++,le.updateMatrices(z),z.castShadow&&O++),i.spotLightMatrix[T]=le.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,i.spotShadow[T]=B,i.spotShadowMap[T]=he,C++}T++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(oe).multiplyScalar(te),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=se,S++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,i.pointShadow[M]=B,i.pointShadowMap[M]=he,i.pointShadowMatrix[M]=z.shadow.matrix,L++}i.point[M]=se,M++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(te),se.groundColor.copy(z.groundColor).multiplyScalar(te),i.hemi[x]=se,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const j=i.hash;(j.directionalLength!==y||j.pointLength!==M||j.spotLength!==T||j.rectAreaLength!==S||j.hemiLength!==x||j.numDirectionalShadows!==D||j.numPointShadows!==L||j.numSpotShadows!==C||j.numSpotMaps!==V||j.numLightProbes!==U)&&(i.directional.length=y,i.spot.length=T,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+V-O,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=U,j.directionalLength=y,j.pointLength=M,j.spotLength=T,j.rectAreaLength=S,j.hemiLength=x,j.numDirectionalShadows=D,j.numPointShadows=L,j.numSpotShadows=C,j.numSpotMaps=V,j.numLightProbes=U,i.version=RA++)}function d(h,m){let g=0,_=0,y=0,M=0,T=0;const S=m.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const L=h[x];if(L.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),g++}else if(L.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),u.identity(),a.copy(L.matrixWorld),a.premultiply(S),u.extractRotation(a),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(L.isPointLight){const C=i.point[_];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),_++}else if(L.isHemisphereLight){const C=i.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:c,setupView:d,state:i}}function $g(o){const e=new bA(o),t=[],i=[];function s(m){h.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function u(m){i.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function PA(o){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new $g(o),e.set(s,[c])):a>=u.length?(c=new $g(o),u.push(c)):c=u[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DA(o,e,t){let i=new Zd;const s=new St,a=new St,u=new wt,c=new Ry({depthPacking:_x}),d=new Cy,h={},m=t.maxTextureSize,g={[ir]:Hn,[Hn]:ir,[hi]:hi},_=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:LA,fragmentShader:IA}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new bi;M.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Pn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i_;let x=this.type;this.render=function(O,U,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const b=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(kr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=x!==Ki&&this.type===Ki,ce=x===Ki&&this.type!==Ki;for(let he=0,se=O.length;he<se;he++){const le=O[he],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ae=B.getFrameExtents();if(s.multiply(ae),a.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/ae.x),s.x=a.x*ae.x,B.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/ae.y),s.y=a.y*ae.y,B.mapSize.y=a.y)),B.map===null||te===!0||ce===!0){const N=this.type!==Ki?{minFilter:Ln,magFilter:Ln}:{};B.map!==null&&B.map.dispose(),B.map=new ms(s.x,s.y,N),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const re=B.getViewportCount();for(let N=0;N<re;N++){const ne=B.getViewport(N);u.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),oe.viewport(u),B.updateMatrices(le,N),i=B.getFrustum(),C(U,j,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Ki&&D(B,j),B.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(b,R,z)};function D(O,U){const j=e.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ms(s.x,s.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(U,null,j,_,T,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(U,null,j,y,T,null)}function L(O,U,j,b){let R=null;const z=j.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?d:c,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=R.uuid,te=U.uuid;let ce=h[oe];ce===void 0&&(ce={},h[oe]=ce);let he=ce[te];he===void 0&&(he=R.clone(),ce[te]=he,U.addEventListener("dispose",V)),R=he}if(R.visible=U.visible,R.wireframe=U.wireframe,b===Ki?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=o.properties.get(R);oe.light=j}return R}function C(O,U,j,b,R){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Ki)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,O.matrixWorld);const te=e.update(O),ce=O.material;if(Array.isArray(ce)){const he=te.groups;for(let se=0,le=he.length;se<le;se++){const B=he[se],ae=ce[B.materialIndex];if(ae&&ae.visible){const re=L(O,ae,b,R);O.onBeforeShadow(o,O,U,j,te,re,B),o.renderBufferDirect(j,null,te,re,O,B),O.onAfterShadow(o,O,U,j,te,re,B)}}}else if(ce.visible){const he=L(O,ce,b,R);O.onBeforeShadow(o,O,U,j,te,he,null),o.renderBufferDirect(j,null,te,he,O,null),O.onAfterShadow(o,O,U,j,te,he,null)}}const oe=O.children;for(let te=0,ce=oe.length;te<ce;te++)C(oe[te],U,j,b,R)}function V(O){O.target.removeEventListener("dispose",V);for(const j in h){const b=h[j],R=O.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const NA={[Yf]:qf,[Kf]:Qf,[$f]:Jf,[po]:Zf,[qf]:Yf,[Qf]:Kf,[Jf]:$f,[Zf]:po};function UA(o,e){function t(){let G=!1;const we=new wt;let ie=null;const fe=new wt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!G&&(o.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,be,it,Ot,Zt){Zt===!0&&(Pe*=Ot,be*=Ot,it*=Ot),we.set(Pe,be,it,Ot),fe.equals(we)===!1&&(o.clearColor(Pe,be,it,Ot),fe.copy(we))},reset:function(){G=!1,ie=null,fe.set(-1,0,0,0)}}}function i(){let G=!1,we=!1,ie=null,fe=null,Pe=null;return{setReversed:function(be){if(we!==be){const it=e.get("EXT_clip_control");we?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Ot=Pe;Pe=null,this.setClear(Ot)}we=be},getReversed:function(){return we},setTest:function(be){be?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(be){ie!==be&&!G&&(o.depthMask(be),ie=be)},setFunc:function(be){if(we&&(be=NA[be]),fe!==be){switch(be){case Yf:o.depthFunc(o.NEVER);break;case qf:o.depthFunc(o.ALWAYS);break;case Kf:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case $f:o.depthFunc(o.EQUAL);break;case Zf:o.depthFunc(o.GEQUAL);break;case Qf:o.depthFunc(o.GREATER);break;case Jf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}fe=be}},setLocked:function(be){G=be},setClear:function(be){Pe!==be&&(we&&(be=1-be),o.clearDepth(be),Pe=be)},reset:function(){G=!1,ie=null,fe=null,Pe=null,we=!1}}}function s(){let G=!1,we=null,ie=null,fe=null,Pe=null,be=null,it=null,Ot=null,Zt=null;return{setTest:function(Mt){G||(Mt?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Mt){we!==Mt&&!G&&(o.stencilMask(Mt),we=Mt)},setFunc:function(Mt,Nn,En){(ie!==Mt||fe!==Nn||Pe!==En)&&(o.stencilFunc(Mt,Nn,En),ie=Mt,fe=Nn,Pe=En)},setOp:function(Mt,Nn,En){(be!==Mt||it!==Nn||Ot!==En)&&(o.stencilOp(Mt,Nn,En),be=Mt,it=Nn,Ot=En)},setLocked:function(Mt){G=Mt},setClear:function(Mt){Zt!==Mt&&(o.clearStencil(Mt),Zt=Mt)},reset:function(){G=!1,we=null,ie=null,fe=null,Pe=null,be=null,it=null,Ot=null,Zt=null}}}const a=new t,u=new i,c=new s,d=new WeakMap,h=new WeakMap;let m={},g={},_=new WeakMap,y=[],M=null,T=!1,S=null,x=null,D=null,L=null,C=null,V=null,O=null,U=new rt(0,0,0),j=0,b=!1,R=null,z=null,oe=null,te=null,ce=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=le>=2);let ae=null,re={};const N=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ne=new wt().fromArray(N),Q=new wt().fromArray(ne);function de(G,we,ie,fe){const Pe=new Uint8Array(4),be=o.createTexture();o.bindTexture(G,be),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<ie;it++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,fe,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(we+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return be}const Se={};Se[o.TEXTURE_2D]=de(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=de(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=de(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=de(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ve(o.DEPTH_TEST),u.setFunc(po),ht(!1),ct(Fm),ve(o.CULL_FACE),k(kr);function ve(G){m[G]!==!0&&(o.enable(G),m[G]=!0)}function Te(G){m[G]!==!1&&(o.disable(G),m[G]=!1)}function De(G,we){return g[G]!==we?(o.bindFramebuffer(G,we),g[G]=we,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=we),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=we),!0):!1}function Ze(G,we){let ie=y,fe=!1;if(G){ie=_.get(we),ie===void 0&&(ie=[],_.set(we,ie));const Pe=G.textures;if(ie.length!==Pe.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let be=0,it=Pe.length;be<it;be++)ie[be]=o.COLOR_ATTACHMENT0+be;ie.length=Pe.length,fe=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,fe=!0);fe&&o.drawBuffers(ie)}function It(G){return M!==G?(o.useProgram(G),M=G,!0):!1}const gt={[fs]:o.FUNC_ADD,[k0]:o.FUNC_SUBTRACT,[B0]:o.FUNC_REVERSE_SUBTRACT};gt[z0]=o.MIN,gt[H0]=o.MAX;const Ut={[V0]:o.ZERO,[G0]:o.ONE,[W0]:o.SRC_COLOR,[Xf]:o.SRC_ALPHA,[$0]:o.SRC_ALPHA_SATURATE,[q0]:o.DST_COLOR,[j0]:o.DST_ALPHA,[X0]:o.ONE_MINUS_SRC_COLOR,[jf]:o.ONE_MINUS_SRC_ALPHA,[K0]:o.ONE_MINUS_DST_COLOR,[Y0]:o.ONE_MINUS_DST_ALPHA,[Z0]:o.CONSTANT_COLOR,[Q0]:o.ONE_MINUS_CONSTANT_COLOR,[J0]:o.CONSTANT_ALPHA,[ex]:o.ONE_MINUS_CONSTANT_ALPHA};function k(G,we,ie,fe,Pe,be,it,Ot,Zt,Mt){if(G===kr){T===!0&&(Te(o.BLEND),T=!1);return}if(T===!1&&(ve(o.BLEND),T=!0),G!==O0){if(G!==S||Mt!==b){if((x!==fs||C!==fs)&&(o.blendEquation(o.FUNC_ADD),x=fs,C=fs),Mt)switch(G){case uo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Om:o.blendFunc(o.ONE,o.ONE);break;case km:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Bm:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case uo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Om:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case km:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Bm:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,L=null,V=null,O=null,U.set(0,0,0),j=0,S=G,b=Mt}return}Pe=Pe||we,be=be||ie,it=it||fe,(we!==x||Pe!==C)&&(o.blendEquationSeparate(gt[we],gt[Pe]),x=we,C=Pe),(ie!==D||fe!==L||be!==V||it!==O)&&(o.blendFuncSeparate(Ut[ie],Ut[fe],Ut[be],Ut[it]),D=ie,L=fe,V=be,O=it),(Ot.equals(U)===!1||Zt!==j)&&(o.blendColor(Ot.r,Ot.g,Ot.b,Zt),U.copy(Ot),j=Zt),S=G,b=!1}function Mn(G,we){G.side===hi?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=G.side===Hn;we&&(ie=!ie),ht(ie),G.blending===uo&&G.transparent===!1?k(kr):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const fe=G.stencilWrite;c.setTest(fe),fe&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Pt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function ct(G){G!==N0?(ve(o.CULL_FACE),G!==z&&(G===Fm?o.cullFace(o.BACK):G===U0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=G}function je(G){G!==oe&&(se&&o.lineWidth(G),oe=G)}function Pt(G,we,ie){G?(ve(o.POLYGON_OFFSET_FILL),(te!==we||ce!==ie)&&(o.polygonOffset(we,ie),te=we,ce=ie)):Te(o.POLYGON_OFFSET_FILL)}function Ge(G){G?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function P(G){G===void 0&&(G=o.TEXTURE0+he-1),ae!==G&&(o.activeTexture(G),ae=G)}function A(G,we,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+he-1:ie=ae);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==G||fe.texture!==we)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(G,we||Se[G]),fe.type=G,fe.texture=we)}function Z(){const G=re[ae];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){Ne.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function ke(G){Q.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function ft(G,we){let ie=h.get(we);ie===void 0&&(ie=new WeakMap,h.set(we,ie));let fe=ie.get(G);fe===void 0&&(fe=o.getUniformBlockIndex(we,G.name),ie.set(G,fe))}function nt(G,we){const fe=h.get(we).get(G);d.get(we)!==fe&&(o.uniformBlockBinding(we,fe,G.__bindingPointIndex),d.set(we,fe))}function Rt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ae=null,re={},g={},_=new WeakMap,y=[],M=null,T=!1,S=null,x=null,D=null,L=null,C=null,V=null,O=null,U=new rt(0,0,0),j=0,b=!1,R=null,z=null,oe=null,te=null,ce=null,Ne.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ve,disable:Te,bindFramebuffer:De,drawBuffers:Ze,useProgram:It,setBlending:k,setMaterial:Mn,setFlipSided:ht,setCullFace:ct,setLineWidth:je,setPolygonOffset:Pt,setScissorTest:Ge,activeTexture:P,bindTexture:A,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:qe,updateUBOMapping:ft,uniformBlockBinding:nt,texStorage2D:ut,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:We,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ue,scissor:Je,viewport:ke,reset:Rt}}function FA(o,e,t,i,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new St,m=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,A){return y?new OffscreenCanvas(P,A):Ta("canvas")}function T(P,A,Z){let pe=1;const ge=Ge(P);if((ge.width>Z||ge.height>Z)&&(pe=Z/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);g===void 0&&(g=M(ue,We));const Ae=A?M(ue,We):g;return Ae.width=ue,Ae.height=We,Ae.getContext("2d").drawImage(P,0,0,ue,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+We+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function S(P){return P.generateMipmaps}function x(P){o.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(P,A,Z,pe,ge=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=A;if(A===o.RED&&(Z===o.FLOAT&&(ue=o.R32F),Z===o.HALF_FLOAT&&(ue=o.R16F),Z===o.UNSIGNED_BYTE&&(ue=o.R8)),A===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.R8UI),Z===o.UNSIGNED_SHORT&&(ue=o.R16UI),Z===o.UNSIGNED_INT&&(ue=o.R32UI),Z===o.BYTE&&(ue=o.R8I),Z===o.SHORT&&(ue=o.R16I),Z===o.INT&&(ue=o.R32I)),A===o.RG&&(Z===o.FLOAT&&(ue=o.RG32F),Z===o.HALF_FLOAT&&(ue=o.RG16F),Z===o.UNSIGNED_BYTE&&(ue=o.RG8)),A===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RG8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RG16UI),Z===o.UNSIGNED_INT&&(ue=o.RG32UI),Z===o.BYTE&&(ue=o.RG8I),Z===o.SHORT&&(ue=o.RG16I),Z===o.INT&&(ue=o.RG32I)),A===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),Z===o.UNSIGNED_INT&&(ue=o.RGB32UI),Z===o.BYTE&&(ue=o.RGB8I),Z===o.SHORT&&(ue=o.RGB16I),Z===o.INT&&(ue=o.RGB32I)),A===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),Z===o.UNSIGNED_INT&&(ue=o.RGBA32UI),Z===o.BYTE&&(ue=o.RGBA8I),Z===o.SHORT&&(ue=o.RGBA16I),Z===o.INT&&(ue=o.RGBA32I)),A===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),A===o.RGBA){const We=ge?xu:yt.getTransfer(pe);Z===o.FLOAT&&(ue=o.RGBA32F),Z===o.HALF_FLOAT&&(ue=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(ue=We===Dt?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(P,A){let Z;return P?A===null||A===ps||A===vo?Z=o.DEPTH24_STENCIL8:A===gi?Z=o.DEPTH32F_STENCIL8:A===Sa&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ps||A===vo?Z=o.DEPTH_COMPONENT24:A===gi?Z=o.DEPTH_COMPONENT32F:A===Sa&&(Z=o.DEPTH_COMPONENT16),Z}function V(P,A){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==qn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function O(P){const A=P.target;A.removeEventListener("dispose",O),j(A),A.isVideoTexture&&m.delete(A)}function U(P){const A=P.target;A.removeEventListener("dispose",U),R(A)}function j(P){const A=i.get(P);if(A.__webglInit===void 0)return;const Z=P.source,pe=_.get(Z);if(pe){const ge=pe[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(P),Object.keys(pe).length===0&&_.delete(Z)}i.remove(P)}function b(P){const A=i.get(P);o.deleteTexture(A.__webglTexture);const Z=P.source,pe=_.get(Z);delete pe[A.__cacheKey],u.memory.textures--}function R(P){const A=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let ge=0;ge<A.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(A.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)o.deleteFramebuffer(A.__webglFramebuffer[pe]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=P.textures;for(let pe=0,ge=Z.length;pe<ge;pe++){const ue=i.get(Z[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),u.memory.textures--),i.remove(Z[pe])}i.remove(P)}let z=0;function oe(){z=0}function te(){const P=z;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function ce(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function he(P,A){const Z=i.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,P,A);return}}t.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+A)}function se(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,A);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+A)}function le(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,A);return}t.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+A)}function B(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){de(Z,P,A);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+A)}const ae={[_o]:o.REPEAT,[Fr]:o.CLAMP_TO_EDGE,[_u]:o.MIRRORED_REPEAT},re={[Ln]:o.NEAREST,[o_]:o.NEAREST_MIPMAP_NEAREST,[ga]:o.NEAREST_MIPMAP_LINEAR,[qn]:o.LINEAR,[cu]:o.LINEAR_MIPMAP_NEAREST,[Qi]:o.LINEAR_MIPMAP_LINEAR},N={[xx]:o.NEVER,[Ax]:o.ALWAYS,[yx]:o.LESS,[v_]:o.LEQUAL,[Sx]:o.EQUAL,[Tx]:o.GEQUAL,[Mx]:o.GREATER,[Ex]:o.NOTEQUAL};function ne(P,A){if(A.type===gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===qn||A.magFilter===cu||A.magFilter===ga||A.magFilter===Qi||A.minFilter===qn||A.minFilter===cu||A.minFilter===ga||A.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,ae[A.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,ae[A.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,ae[A.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,re[A.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ln||A.minFilter!==ga&&A.minFilter!==Qi||A.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ne(P,A){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",O));const pe=A.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const ue=ce(A);if(ue!==P.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ge[ue].usedTimes++;const We=ge[P.__cacheKey];We!==void 0&&(ge[P.__cacheKey].usedTimes--,We.usedTimes===0&&b(A)),P.__cacheKey=ue,P.__webglTexture=ge[ue].texture}return Z}function Q(P,A,Z){let pe=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ne(P,A),ue=A.source;t.bindTexture(pe,P.__webglTexture,o.TEXTURE0+Z);const We=i.get(ue);if(ue.version!==We.__version||ge===!0){t.activeTexture(o.TEXTURE0+Z);const Ae=yt.getPrimaries(yt.workingColorSpace),Ue=A.colorSpace===Ur?null:yt.getPrimaries(A.colorSpace),ut=A.colorSpace===Ur||Ae===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=T(A.image,!1,s.maxTextureSize);Me=Pt(A,Me);const Oe=a.convert(A.format,A.colorSpace),qe=a.convert(A.type);let Je=L(A.internalFormat,Oe,qe,A.colorSpace,A.isVideoTexture);ne(pe,A);let ke;const ft=A.mipmaps,nt=A.isVideoTexture!==!0,Rt=We.__version===void 0||ge===!0,G=ue.dataReady,we=V(A,Me);if(A.isDepthTexture)Je=C(A.format===xo,A.type),Rt&&(nt?t.texStorage2D(o.TEXTURE_2D,1,Je,Me.width,Me.height):t.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,null));else if(A.isDataTexture)if(ft.length>0){nt&&Rt&&t.texStorage2D(o.TEXTURE_2D,we,Je,ft[0].width,ft[0].height);for(let ie=0,fe=ft.length;ie<fe;ie++)ke=ft[ie],nt?G&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,qe,ke.data):t.texImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,Oe,qe,ke.data);A.generateMipmaps=!1}else nt?(Rt&&t.texStorage2D(o.TEXTURE_2D,we,Je,Me.width,Me.height),G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,qe,Me.data)):t.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,Me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){nt&&Rt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,Je,ft[0].width,ft[0].height,Me.depth);for(let ie=0,fe=ft.length;ie<fe;ie++)if(ke=ft[ie],A.format!==ii)if(Oe!==null)if(nt){if(G)if(A.layerUpdates.size>0){const Pe=wg(ke.width,ke.height,A.format,A.type);for(const be of A.layerUpdates){const it=ke.data.subarray(be*Pe/ke.data.BYTES_PER_ELEMENT,(be+1)*Pe/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,be,ke.width,ke.height,1,Oe,it)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Je,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?G&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,qe,ke.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ie,Je,ke.width,ke.height,Me.depth,0,Oe,qe,ke.data)}else{nt&&Rt&&t.texStorage2D(o.TEXTURE_2D,we,Je,ft[0].width,ft[0].height);for(let ie=0,fe=ft.length;ie<fe;ie++)ke=ft[ie],A.format!==ii?Oe!==null?nt?G&&t.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?G&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,qe,ke.data):t.texImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,Oe,qe,ke.data)}else if(A.isDataArrayTexture)if(nt){if(Rt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,Je,Me.width,Me.height,Me.depth),G)if(A.layerUpdates.size>0){const ie=wg(Me.width,Me.height,A.format,A.type);for(const fe of A.layerUpdates){const Pe=Me.data.subarray(fe*ie/Me.data.BYTES_PER_ELEMENT,(fe+1)*ie/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Oe,qe,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(A.isData3DTexture)nt?(Rt&&t.texStorage3D(o.TEXTURE_3D,we,Je,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)):t.texImage3D(o.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(A.isFramebufferTexture){if(Rt)if(nt)t.texStorage2D(o.TEXTURE_2D,we,Je,Me.width,Me.height);else{let ie=Me.width,fe=Me.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(o.TEXTURE_2D,Pe,Je,ie,fe,0,Oe,qe,null),ie>>=1,fe>>=1}}else if(ft.length>0){if(nt&&Rt){const ie=Ge(ft[0]);t.texStorage2D(o.TEXTURE_2D,we,Je,ie.width,ie.height)}for(let ie=0,fe=ft.length;ie<fe;ie++)ke=ft[ie],nt?G&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,Oe,qe,ke):t.texImage2D(o.TEXTURE_2D,ie,Je,Oe,qe,ke);A.generateMipmaps=!1}else if(nt){if(Rt){const ie=Ge(Me);t.texStorage2D(o.TEXTURE_2D,we,Je,ie.width,ie.height)}G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,qe,Me)}else t.texImage2D(o.TEXTURE_2D,0,Je,Oe,qe,Me);S(A)&&x(pe),We.__version=ue.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function de(P,A,Z){if(A.image.length!==6)return;const pe=Ne(P,A),ge=A.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+Z);const ue=i.get(ge);if(ge.version!==ue.__version||pe===!0){t.activeTexture(o.TEXTURE0+Z);const We=yt.getPrimaries(yt.workingColorSpace),Ae=A.colorSpace===Ur?null:yt.getPrimaries(A.colorSpace),Ue=A.colorSpace===Ur||We===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=A.isCompressedTexture||A.image[0].isCompressedTexture,Me=A.image[0]&&A.image[0].isDataTexture,Oe=[];for(let fe=0;fe<6;fe++)!ut&&!Me?Oe[fe]=T(A.image[fe],!0,s.maxCubemapSize):Oe[fe]=Me?A.image[fe].image:A.image[fe],Oe[fe]=Pt(A,Oe[fe]);const qe=Oe[0],Je=a.convert(A.format,A.colorSpace),ke=a.convert(A.type),ft=L(A.internalFormat,Je,ke,A.colorSpace),nt=A.isVideoTexture!==!0,Rt=ue.__version===void 0||pe===!0,G=ge.dataReady;let we=V(A,qe);ne(o.TEXTURE_CUBE_MAP,A);let ie;if(ut){nt&&Rt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,we,ft,qe.width,qe.height);for(let fe=0;fe<6;fe++){ie=Oe[fe].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){const be=ie[Pe];A.format!==ii?Je!==null?nt?G&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,0,0,be.width,be.height,Je,be.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,0,0,be.width,be.height,Je,ke,be.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,ft,be.width,be.height,0,Je,ke,be.data)}}}else{if(ie=A.mipmaps,nt&&Rt){ie.length>0&&we++;const fe=Ge(Oe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,we,ft,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){nt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe[fe].width,Oe[fe].height,Je,ke,Oe[fe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Oe[fe].width,Oe[fe].height,0,Je,ke,Oe[fe].data);for(let Pe=0;Pe<ie.length;Pe++){const it=ie[Pe].image[fe].image;nt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,0,0,it.width,it.height,Je,ke,it.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,ft,it.width,it.height,0,Je,ke,it.data)}}else{nt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,ke,Oe[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Je,ke,Oe[fe]);for(let Pe=0;Pe<ie.length;Pe++){const be=ie[Pe];nt?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,0,0,Je,ke,be.image[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,ft,Je,ke,be.image[fe])}}}S(A)&&x(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Se(P,A,Z,pe,ge,ue){const We=a.convert(Z.format,Z.colorSpace),Ae=a.convert(Z.type),Ue=L(Z.internalFormat,We,Ae,Z.colorSpace),ut=i.get(A),Me=i.get(Z);if(Me.__renderTarget=A,!ut.__hasExternalTextures){const Oe=Math.max(1,A.width>>ue),qe=Math.max(1,A.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,Ue,Oe,qe,A.depth,0,We,Ae,null):t.texImage2D(ge,ue,Ue,Oe,qe,0,We,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),ct(A)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,ht(A)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(P,A,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,P),A.depthBuffer){const pe=A.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=C(A.stencilBuffer,ge),We=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=ht(A);ct(A)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,ue,A.width,A.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ue,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,P)}else{const pe=A.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],We=a.convert(ue.format,ue.colorSpace),Ae=a.convert(ue.type),Ue=L(ue.internalFormat,We,Ae,ue.colorSpace),ut=ht(A);Z&&ct(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,Ue,A.width,A.height):ct(A)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,Ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(A.depthTexture);pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),he(A.depthTexture,0);const ge=pe.__webglTexture,ue=ht(A);if(A.depthTexture.format===co)ct(A)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(A.depthTexture.format===xo)ct(A)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function De(P){const A=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=pe}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Te(A.__webglFramebuffer,P)}else if(Z){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(A.__webglDepthbuffer[pe],P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),ve(A.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(P,A,Z){const pe=i.get(P);A!==void 0&&Se(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&De(P)}function It(P){const A=P.texture,Z=i.get(P),pe=i.get(A);P.addEventListener("dispose",U);const ge=P.textures,ue=P.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=A.version,u.memory.textures++),ue){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)Z.__webglFramebuffer[Ae][Ue]=o.createFramebuffer()}else Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(We)for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const ut=i.get(ge[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),u.memory.textures++)}if(P.samples>0&&ct(P)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ue=ge[Ae];Z.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const ut=a.convert(Ue.format,Ue.colorSpace),Me=a.convert(Ue.type),Oe=L(Ue.internalFormat,ut,Me,Ue.colorSpace,P.isXRRenderTarget===!0),qe=ht(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Oe,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Se(Z.__webglFramebuffer[Ae][Ue],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Se(Z.__webglFramebuffer[Ae],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(A)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const ut=ge[Ae],Me=i.get(ut);t.bindTexture(o.TEXTURE_2D,Me.__webglTexture),ne(o.TEXTURE_2D,ut),Se(Z.__webglFramebuffer,P,ut,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),S(ut)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),ne(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Se(Z.__webglFramebuffer[Ue],P,A,o.COLOR_ATTACHMENT0,Ae,Ue);else Se(Z.__webglFramebuffer,P,A,o.COLOR_ATTACHMENT0,Ae,0);S(A)&&x(Ae),t.unbindTexture()}P.depthBuffer&&De(P)}function gt(P){const A=P.textures;for(let Z=0,pe=A.length;Z<pe;Z++){const ge=A[Z];if(S(ge)){const ue=D(P),We=i.get(ge).__webglTexture;t.bindTexture(ue,We),x(ue),t.unbindTexture()}}}const Ut=[],k=[];function Mn(P){if(P.samples>0){if(ct(P)===!1){const A=P.textures,Z=P.width,pe=P.height;let ge=o.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=i.get(P),Ae=A.length>1;if(Ae)for(let Ue=0;Ue<A.length;Ue++)t.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ut=i.get(A[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ut,0)}o.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ge,o.NEAREST),d===!0&&(Ut.length=0,k.length=0,Ut.push(o.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ut.push(ue),k.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<A.length;Ue++){t.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ut=i.get(A[Ue]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,ut,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const A=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function ht(P){return Math.min(s.maxSamples,P.samples)}function ct(P){const A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(P){const A=u.render.frame;m.get(P)!==A&&(m.set(P,A),P.update())}function Pt(P,A){const Z=P.colorSpace,pe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Dn&&Z!==Ur&&(yt.getTransfer(Z)===Dt?(pe!==ii||ge!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=It,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ct}function OA(o,e){function t(i,s=Ur){let a;const u=yt.getTransfer(s);if(i===rr)return o.UNSIGNED_BYTE;if(i===zd)return o.UNSIGNED_SHORT_4_4_4_4;if(i===Hd)return o.UNSIGNED_SHORT_5_5_5_1;if(i===u_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===a_)return o.BYTE;if(i===l_)return o.SHORT;if(i===Sa)return o.UNSIGNED_SHORT;if(i===Bd)return o.INT;if(i===ps)return o.UNSIGNED_INT;if(i===gi)return o.FLOAT;if(i===Aa)return o.HALF_FLOAT;if(i===c_)return o.ALPHA;if(i===f_)return o.RGB;if(i===ii)return o.RGBA;if(i===d_)return o.LUMINANCE;if(i===h_)return o.LUMINANCE_ALPHA;if(i===co)return o.DEPTH_COMPONENT;if(i===xo)return o.DEPTH_STENCIL;if(i===Vd)return o.RED;if(i===Gd)return o.RED_INTEGER;if(i===p_)return o.RG;if(i===Wd)return o.RG_INTEGER;if(i===Xd)return o.RGBA_INTEGER;if(i===fu||i===du||i===hu||i===pu)if(u===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===fu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===fu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===du)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nd||i===id||i===rd||i===sd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===nd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===id)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===od||i===ad||i===ld)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===od||i===ad)return u===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ld)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ud||i===cd||i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===_d||i===vd||i===xd||i===yd||i===Sd||i===Md)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ud)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_d)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sd)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Md)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mu||i===Ed||i===Td)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===mu)return u===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ed)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Td)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===m_||i===Ad||i===wd||i===Rd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===mu)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ad)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const kA={type:"move"};class Hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,i),x=this._getHandJoint(h,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(kA)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const BA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new cn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zr({vertexShader:BA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VA extends Hr{constructor(e,t){super();const i=this;let s=null,a=1,u=null,c="local-floor",d=1,h=null,m=null,g=null,_=null,y=null,M=null;const T=new HA,S=t.getContextAttributes();let x=null,D=null;const L=[],C=[],V=new St;let O=null;const U=new bn;U.viewport=new wt;const j=new bn;j.viewport=new wt;const b=[U,j],R=new qy;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=L[Q];return de===void 0&&(de=new Hf,L[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=L[Q];return de===void 0&&(de=new Hf,L[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=L[Q];return de===void 0&&(de=new Hf,L[Q]=de),de.getHandSpace()};function te(Q){const de=C.indexOf(Q.inputSource);if(de===-1)return;const Se=L[de];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,h||u),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ce),s.removeEventListener("inputsourceschange",he);for(let Q=0;Q<L.length;Q++){const de=C[Q];de!==null&&(C[Q]=null,L[Q].disconnect(de))}z=null,oe=null,T.reset(),e.setRenderTarget(x),y=null,_=null,g=null,s=null,D=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ce),s.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(V),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Se=null,ve=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=S.stencil?xo:co,ve=S.stencil?vo:ps);const De={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(De),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new ms(_.textureWidth,_.textureHeight,{format:ii,type:rr,depthTexture:new I_(_.textureWidth,_.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new ms(y.framebufferWidth,y.framebufferHeight,{format:ii,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(c),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(Q){for(let de=0;de<Q.removed.length;de++){const Se=Q.removed[de],ve=C.indexOf(Se);ve>=0&&(C[ve]=null,L[ve].disconnect(Se))}for(let de=0;de<Q.added.length;de++){const Se=Q.added[de];let ve=C.indexOf(Se);if(ve===-1){for(let De=0;De<L.length;De++)if(De>=C.length){C.push(Se),ve=De;break}else if(C[De]===null){C[De]=Se,ve=De;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(Se)}}const se=new X,le=new X;function B(Q,de,Se){se.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const ve=se.distanceTo(le),Te=de.projectionMatrix.elements,De=Se.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),It=Te[14]/(Te[10]+1),gt=(Te[9]+1)/Te[5],Ut=(Te[9]-1)/Te[5],k=(Te[8]-1)/Te[0],Mn=(De[8]+1)/De[0],ht=Ze*k,ct=Ze*Mn,je=ve/(-k+Mn),Pt=je*-k;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Pt),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ge=Ze+je,P=It+je,A=ht-Pt,Z=ct+(ve-Pt),pe=gt*It/P*Ge,ge=Ut*It/P*Ge;Q.projectionMatrix.makePerspective(A,Z,pe,ge,Ge,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let de=Q.near,Se=Q.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(Se=T.depthFar)),R.near=j.near=U.near=de,R.far=j.far=U.far=Se,(z!==R.near||oe!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,oe=R.far),U.layers.mask=Q.layers.mask|2,j.layers.mask=Q.layers.mask|4,R.layers.mask=U.layers.mask|j.layers.mask;const ve=Q.parent,Te=R.cameras;ae(R,ve);for(let De=0;De<Te.length;De++)ae(Te[De],ve);Te.length===2?B(R,U,j):R.projectionMatrix.copy(U.projectionMatrix),re(Q,R,ve)};function re(Q,de,Se){Se===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=yo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function(Q){d=Q,_!==null&&(_.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let N=null;function ne(Q,de){if(m=de.getViewerPose(h||u),M=de,m!==null){const Se=m.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let ve=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let De=0;De<Se.length;De++){const Ze=Se[De];let It=null;if(y!==null)It=y.getViewport(Ze);else{const Ut=g.getViewSubImage(_,Ze);It=Ut.viewport,De===0&&(e.setRenderTargetTextures(D,Ut.colorTexture,_.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(D))}let gt=b[De];gt===void 0&&(gt=new bn,gt.layers.enable(De),gt.viewport=new wt,b[De]=gt),gt.matrix.fromArray(Ze.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Ze.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(It.x,It.y,It.width,It.height),De===0&&(R.matrix.copy(gt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(gt)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const De=g.getDepthInformation(Se[0]);De&&De.isValid&&De.texture&&T.init(e,De,s.renderState)}}for(let Se=0;Se<L.length;Se++){const ve=C[Se],Te=L[Se];ve!==null&&Te!==void 0&&Te.update(ve,de,h||u)}N&&N(Q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ne=new k_;Ne.setAnimationLoop(ne),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const as=new xi,GA=new at;function WA(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,w_(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,D,L,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),g(S,x)):x.isMeshPhongMaterial?(a(S,x),m(S,x)):x.isMeshStandardMaterial?(a(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),T(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&c(S,x)):x.isPointsMaterial?d(S,x,D,L):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Hn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Hn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=e.get(x),L=D.envMap,C=D.envMapRotation;L&&(S.envMap.value=L,as.copy(C),as.x*=-1,as.y*=-1,as.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),S.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(as)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function c(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,D,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=L*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const D=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function XA(o,e,t,i){let s={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,L){const C=L.program;i.uniformBlockBinding(D,C)}function h(D,L){let C=s[D.id];C===void 0&&(M(D),C=m(D),s[D.id]=C,D.addEventListener("dispose",S));const V=L.program;i.updateUBOMapping(D,V);const O=e.render.frame;a[D.id]!==O&&(_(D),a[D.id]=O)}function m(D){const L=g();D.__bindingPointIndex=L;const C=o.createBuffer(),V=D.__size,O=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,V,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function g(){for(let D=0;D<c;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const L=s[D.id],C=D.uniforms,V=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,U=C.length;O<U;O++){const j=Array.isArray(C[O])?C[O]:[C[O]];for(let b=0,R=j.length;b<R;b++){const z=j[b];if(y(z,O,b,V)===!0){const oe=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let he=0;he<te.length;he++){const se=te[he],le=T(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+ce,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,L,C,V){const O=D.value,U=L+"_"+C;if(V[U]===void 0)return typeof O=="number"||typeof O=="boolean"?V[U]=O:V[U]=O.clone(),!0;{const j=V[U];if(typeof O=="number"||typeof O=="boolean"){if(j!==O)return V[U]=O,!0}else if(j.equals(O)===!1)return j.copy(O),!0}return!1}function M(D){const L=D.uniforms;let C=0;const V=16;for(let U=0,j=L.length;U<j;U++){const b=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,z=b.length;R<z;R++){const oe=b[R],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,he=te.length;ce<he;ce++){const se=te[ce],le=T(se),B=C%V,ae=B%le.boundary,re=B+ae;C+=ae,re!==0&&V-re<le.storage&&(C+=V-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const O=C%V;return O>0&&(C+=V-O),D.__size=C,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const C=u.indexOf(L.__bindingPointIndex);u.splice(C,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete a[L.id]}function x(){for(const D in s)o.deleteBuffer(s[D]);u=[],s={},a={}}return{bind:d,update:h,dispose:x}}class jA{constructor(e={}){const{canvas:t=Gx(),context:i=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,x=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Br,this.toneMappingExposure=1;const C=this;let V=!1,O=0,U=0,j=null,b=-1,R=null;const z=new wt,oe=new wt;let te=null;const ce=new rt(0);let he=0,se=t.width,le=t.height,B=1,ae=null,re=null;const N=new wt(0,0,se,le),ne=new wt(0,0,se,le);let Ne=!1;const Q=new Zd;let de=!1,Se=!1;this.transmissionResolutionScale=1;const ve=new at,Te=new at,De=new X,Ze=new wt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Ut(){return j===null?B:1}let k=i;function Mn(w,W){return t.getContext(w,W)}try{const w={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kd}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",be,!1),k===null){const W="webgl2";if(k=Mn(W,w),k===null)throw Mn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,ct,je,Pt,Ge,P,A,Z,pe,ge,ue,We,Ae,Ue,ut,Me,Oe,qe,Je,ke,ft,nt,Rt,G;function we(){ht=new tT(k),ht.init(),nt=new OA(k,ht),ct=new KE(k,ht,e,nt),je=new UA(k,ht),ct.reverseDepthBuffer&&_&&je.buffers.depth.setReversed(!0),Pt=new rT(k),Ge=new MA,P=new FA(k,ht,je,Ge,ct,nt,Pt),A=new ZE(C),Z=new eT(C),pe=new fS(k),Rt=new YE(k,pe),ge=new nT(k,pe,Pt,Rt),ue=new oT(k,ge,pe,Pt),Je=new sT(k,ct,P),Me=new $E(Ge),We=new SA(C,A,Z,ht,ct,Rt,Me),Ae=new WA(C,Ge),Ue=new TA,ut=new PA(ht),qe=new jE(C,A,Z,je,ue,y,d),Oe=new DA(C,ue,ct),G=new XA(k,Pt,ct,je),ke=new qE(k,ht,Pt),ft=new iT(k,ht,Pt),Pt.programs=We.programs,C.capabilities=ct,C.extensions=ht,C.properties=Ge,C.renderLists=Ue,C.shadowMap=Oe,C.state=je,C.info=Pt}we();const ie=new VA(C,k);this.xr=ie,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(se,le,!1))},this.getSize=function(w){return w.set(se,le)},this.setSize=function(w,W,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,le=W,t.width=Math.floor(w*B),t.height=Math.floor(W*B),J===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(se*B,le*B).floor()},this.setDrawingBufferSize=function(w,W,J){se=w,le=W,B=J,t.width=Math.floor(w*J),t.height=Math.floor(W*J),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,W,J,K){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,W,J,K),je.viewport(z.copy(N).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,W,J,K){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,W,J,K),je.scissor(oe.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){je.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(w=!0,W=!0,J=!0){let K=0;if(w){let Y=!1;if(j!==null){const ye=j.texture.format;Y=ye===Xd||ye===Wd||ye===Gd}if(Y){const ye=j.texture.type,Re=ye===rr||ye===ps||ye===Sa||ye===vo||ye===zd||ye===Hd,Le=qe.getClearColor(),Be=qe.getClearAlpha(),et=Le.r,Qe=Le.g,He=Le.b;Re?(M[0]=et,M[1]=Qe,M[2]=He,M[3]=Be,k.clearBufferuiv(k.COLOR,0,M)):(T[0]=et,T[1]=Qe,T[2]=He,T[3]=Be,k.clearBufferiv(k.COLOR,0,T))}else K|=k.COLOR_BUFFER_BIT}W&&(K|=k.DEPTH_BUFFER_BIT),J&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),qe.dispose(),Ue.dispose(),ut.dispose(),Ge.dispose(),A.dispose(),Z.dispose(),ue.dispose(),Rt.dispose(),G.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",_s),ie.removeEventListener("sessionend",or),Ii.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const w=Pt.autoReset,W=Oe.enabled,J=Oe.autoUpdate,K=Oe.needsUpdate,Y=Oe.type;we(),Pt.autoReset=w,Oe.enabled=W,Oe.autoUpdate=J,Oe.needsUpdate=K,Oe.type=Y}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function it(w){const W=w.target;W.removeEventListener("dispose",it),Ot(W)}function Ot(w){Zt(w),Ge.remove(w)}function Zt(w){const W=Ge.get(w).programs;W!==void 0&&(W.forEach(function(J){We.releaseProgram(J)}),w.isShaderMaterial&&We.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,J,K,Y,ye){W===null&&(W=It);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,Le=Pa(w,W,J,K,Y);je.setMaterial(K,Re);let Be=J.index,et=1;if(K.wireframe===!0){if(Be=ge.getWireframeAttribute(J),Be===void 0)return;et=2}const Qe=J.drawRange,He=J.attributes.position;let vt=Qe.start*et,st=(Qe.start+Qe.count)*et;ye!==null&&(vt=Math.max(vt,ye.start*et),st=Math.min(st,(ye.start+ye.count)*et)),Be!==null?(vt=Math.max(vt,0),st=Math.min(st,Be.count)):He!=null&&(vt=Math.max(vt,0),st=Math.min(st,He.count));const Xt=st-vt;if(Xt<0||Xt===1/0)return;Rt.setup(Y,K,Le,J,Be);let zt,xt=ke;if(Be!==null&&(zt=pe.get(Be),xt=ft,xt.setIndex(zt)),Y.isMesh)K.wireframe===!0?(je.setLineWidth(K.wireframeLinewidth*Ut()),xt.setMode(k.LINES)):xt.setMode(k.TRIANGLES);else if(Y.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Ut()),Y.isLineSegments?xt.setMode(k.LINES):Y.isLineLoop?xt.setMode(k.LINE_LOOP):xt.setMode(k.LINE_STRIP)}else Y.isPoints?xt.setMode(k.POINTS):Y.isSprite&&xt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)xt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ye=Y._multiDrawStarts,jt=Y._multiDrawCounts,_t=Y._multiDrawCount,pn=Be?pe.get(Be).bytesPerElement:1,lr=Ge.get(K).currentProgram.getUniforms();for(let Tn=0;Tn<_t;Tn++)lr.setValue(k,"_gl_DrawID",Tn),xt.render(Ye[Tn]/pn,jt[Tn])}else if(Y.isInstancedMesh)xt.renderInstances(vt,Xt,Y.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,jt=Math.min(J.instanceCount,Ye);xt.renderInstances(vt,Xt,jt)}else xt.render(vt,Xt)};function Mt(w,W,J){w.transparent===!0&&w.side===hi&&w.forceSinglePass===!1?(w.side=Hn,w.needsUpdate=!0,vs(w,W,J),w.side=ir,w.needsUpdate=!0,vs(w,W,J),w.side=hi):vs(w,W,J)}this.compile=function(w,W,J=null){J===null&&(J=w),x=ut.get(J),x.init(W),L.push(x),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),w!==J&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const K=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Le=ye[Re];Mt(Le,J,Y),K.add(Le)}else Mt(ye,J,Y),K.add(ye)}),L.pop(),x=null,K},this.compileAsync=function(w,W,J=null){const K=this.compile(w,W,J);return new Promise(Y=>{function ye(){if(K.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&K.delete(Re)}),K.size===0){Y(w);return}setTimeout(ye,10)}ht.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Nn=null;function En(w){Nn&&Nn(w)}function _s(){Ii.stop()}function or(){Ii.start()}const Ii=new k_;Ii.setAnimationLoop(En),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(w){Nn=w,ie.setAnimationLoop(w),w===null?Ii.stop():Ii.start()},ie.addEventListener("sessionstart",_s),ie.addEventListener("sessionend",or),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,W,j),x=ut.get(w,L.length),x.init(W),L.push(x),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,de=Me.init(this.clippingPlanes,Se),S=Ue.get(w,D.length),S.init(),D.push(S),ie.enabled===!0&&ie.isPresenting===!0){const ye=C.xr.getDepthSensingMesh();ye!==null&&Di(ye,W,-1/0,C.sortObjects)}Di(w,W,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ae,re),gt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,gt&&qe.addToRenderList(S,w),this.info.render.frame++,de===!0&&Me.beginShadows();const J=x.state.shadowsArray;Oe.render(J,w,W),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=S.opaque,Y=S.transmissive;if(x.setupLights(),W.isArrayCamera){const ye=W.cameras;if(Y.length>0)for(let Re=0,Le=ye.length;Re<Le;Re++){const Be=ye[Re];Gr(K,Y,w,Be)}gt&&qe.render(w);for(let Re=0,Le=ye.length;Re<Le;Re++){const Be=ye[Re];Vr(S,w,Be,Be.viewport)}}else Y.length>0&&Gr(K,Y,w,W),gt&&qe.render(w),Vr(S,w,W);j!==null&&U===0&&(P.updateMultisampleRenderTarget(j),P.updateRenderTargetMipmap(j)),w.isScene===!0&&w.onAfterRender(C,w,W),Rt.resetDefaultState(),b=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],de===!0&&Me.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Di(w,W,J,K){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){K&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Re=ue.update(w),Le=w.material;Le.visible&&S.push(w,Re,Le,J,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Re=ue.update(w),Le=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const Be=Re.groups;for(let et=0,Qe=Be.length;et<Qe;et++){const He=Be[et],vt=Le[He.materialIndex];vt&&vt.visible&&S.push(w,Re,vt,J,Ze.z,He)}}else Le.visible&&S.push(w,Re,Le,J,Ze.z,null)}}const ye=w.children;for(let Re=0,Le=ye.length;Re<Le;Re++)Di(ye[Re],W,J,K)}function Vr(w,W,J,K){const Y=w.opaque,ye=w.transmissive,Re=w.transparent;x.setupLightsView(J),de===!0&&Me.setGlobalState(C.clippingPlanes,J),K&&je.viewport(z.copy(K)),Y.length>0&&ar(Y,W,J),ye.length>0&&ar(ye,W,J),Re.length>0&&ar(Re,W,J),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Gr(w,W,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[K.id]===void 0&&(x.state.transmissionRenderTarget[K.id]=new ms(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Aa:rr,minFilter:Qi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const ye=x.state.transmissionRenderTarget[K.id],Re=K.viewport||z;ye.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const Le=C.getRenderTarget();C.setRenderTarget(ye),C.getClearColor(ce),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),gt&&qe.render(J);const Be=C.toneMapping;C.toneMapping=Br;const et=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),x.setupLightsView(K),de===!0&&Me.setGlobalState(C.clippingPlanes,K),ar(w,J,K),P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,vt=W.length;He<vt;He++){const st=W[He],Xt=st.object,zt=st.geometry,xt=st.material,Ye=st.group;if(xt.side===hi&&Xt.layers.test(K.layers)){const jt=xt.side;xt.side=Hn,xt.needsUpdate=!0,Ca(Xt,J,K,zt,xt,Ye),xt.side=jt,xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye))}C.setRenderTarget(Le),C.setClearColor(ce,he),et!==void 0&&(K.viewport=et),C.toneMapping=Be}function ar(w,W,J){const K=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,ye=w.length;Y<ye;Y++){const Re=w[Y],Le=Re.object,Be=Re.geometry,et=K===null?Re.material:K,Qe=Re.group;Le.layers.test(J.layers)&&Ca(Le,W,J,Be,et,Qe)}}function Ca(w,W,J,K,Y,ye){w.onBeforeRender(C,W,J,K,Y,ye),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(C,W,J,K,w,ye),Y.transparent===!0&&Y.side===hi&&Y.forceSinglePass===!1?(Y.side=Hn,Y.needsUpdate=!0,C.renderBufferDirect(J,W,K,Y,w,ye),Y.side=ir,Y.needsUpdate=!0,C.renderBufferDirect(J,W,K,Y,w,ye),Y.side=hi):C.renderBufferDirect(J,W,K,Y,w,ye),w.onAfterRender(C,W,J,K,Y,ye)}function vs(w,W,J){W.isScene!==!0&&(W=It);const K=Ge.get(w),Y=x.state.lights,ye=x.state.shadowsArray,Re=Y.state.version,Le=We.getParameters(w,Y.state,ye,W,J),Be=We.getProgramCacheKey(Le);let et=K.programs;K.environment=w.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(w.isMeshStandardMaterial?Z:A).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",it),et=new Map,K.programs=et);let Qe=et.get(Be);if(Qe!==void 0){if(K.currentProgram===Qe&&K.lightsStateVersion===Re)return yi(w,Le),Qe}else Le.uniforms=We.getUniforms(w),w.onBeforeCompile(Le,C),Qe=We.acquireProgram(Le,Be),et.set(Be,Qe),K.uniforms=Le.uniforms;const He=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Me.uniform),yi(w,Le),K.needsLights=wu(w),K.lightsStateVersion=Re,K.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=Qe,K.uniformsList=null,Qe}function ba(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=gu.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function yi(w,W){const J=Ge.get(w);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Pa(w,W,J,K,Y){W.isScene!==!0&&(W=It),P.resetTextureUnits();const ye=W.fog,Re=K.isMeshStandardMaterial?W.environment:null,Le=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Dn,Be=(K.isMeshStandardMaterial?Z:A).get(K.envMap||Re),et=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!J.morphAttributes.position,vt=!!J.morphAttributes.normal,st=!!J.morphAttributes.color;let Xt=Br;K.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xt=C.toneMapping);const zt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=zt!==void 0?zt.length:0,Ye=Ge.get(K),jt=x.state.lights;if(de===!0&&(Se===!0||w!==R)){const fn=w===R&&K.id===b;Me.setState(K,w,fn)}let _t=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==jt.state.version||Ye.outputColorSpace!==Le||Y.isBatchedMesh&&Ye.batching===!1||!Y.isBatchedMesh&&Ye.batching===!0||Y.isBatchedMesh&&Ye.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ye.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ye.instancing===!1||!Y.isInstancedMesh&&Ye.instancing===!0||Y.isSkinnedMesh&&Ye.skinning===!1||!Y.isSkinnedMesh&&Ye.skinning===!0||Y.isInstancedMesh&&Ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ye.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ye.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ye.instancingMorph===!1&&Y.morphTexture!==null||Ye.envMap!==Be||K.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==Qe||Ye.morphTargets!==He||Ye.morphNormals!==vt||Ye.morphColors!==st||Ye.toneMapping!==Xt||Ye.morphTargetsCount!==xt)&&(_t=!0):(_t=!0,Ye.__version=K.version);let pn=Ye.currentProgram;_t===!0&&(pn=vs(K,W,Y));let lr=!1,Tn=!1,Ni=!1;const Nt=pn.getUniforms(),mn=Ye.uniforms;if(je.useProgram(pn.program)&&(lr=!0,Tn=!0,Ni=!0),K.id!==b&&(b=K.id,Tn=!0),lr||R!==w){je.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),Xx(ve),jx(ve),Nt.setValue(k,"projectionMatrix",ve)):Nt.setValue(k,"projectionMatrix",w.projectionMatrix),Nt.setValue(k,"viewMatrix",w.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(k,De.setFromMatrixPosition(w.matrixWorld)),ct.logarithmicDepthBuffer&&Nt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Nt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Tn=!0,Ni=!0)}if(Y.isSkinnedMesh){Nt.setOptional(k,Y,"bindMatrix"),Nt.setOptional(k,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Nt.setValue(k,"boneTexture",fn.boneTexture,P))}Y.isBatchedMesh&&(Nt.setOptional(k,Y,"batchingTexture"),Nt.setValue(k,"batchingTexture",Y._matricesTexture,P),Nt.setOptional(k,Y,"batchingIdTexture"),Nt.setValue(k,"batchingIdTexture",Y._indirectTexture,P),Nt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(k,"batchingColorTexture",Y._colorsTexture,P));const nn=J.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Je.update(Y,J,pn),(Tn||Ye.receiveShadow!==Y.receiveShadow)&&(Ye.receiveShadow=Y.receiveShadow,Nt.setValue(k,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(mn.envMap.value=Be,mn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(mn.envMapIntensity.value=W.environmentIntensity),Tn&&(Nt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&La(mn,Ni),ye&&K.fog===!0&&Ae.refreshFogUniforms(mn,ye),Ae.refreshMaterialUniforms(mn,K,B,le,x.state.transmissionRenderTarget[w.id]),gu.upload(k,ba(Ye),mn,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(gu.upload(k,ba(Ye),mn,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Nt.setValue(k,"center",Y.center),Nt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(k,"normalMatrix",Y.normalMatrix),Nt.setValue(k,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const fn=K.uniformsGroups;for(let rn=0,Et=fn.length;rn<Et;rn++){const Si=fn[rn];G.update(Si,pn),G.bind(Si,pn)}}return pn}function La(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function wu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,W,J){Ge.get(w.texture).__webglTexture=W,Ge.get(w.depthTexture).__webglTexture=J;const K=Ge.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const J=Ge.get(w);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};const Ia=k.createFramebuffer();this.setRenderTarget=function(w,W=0,J=0){j=w,O=W,U=J;let K=!0,Y=null,ye=!1,Re=!1;if(w){const Be=Ge.get(w);if(Be.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(k.FRAMEBUFFER,null),K=!1;else if(Be.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Be.__hasExternalTextures)P.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?Y=Qe[W][J]:Y=Qe[W],ye=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?Y=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[J]:Y=Qe,z.copy(w.viewport),oe.copy(w.scissor),te=w.scissorTest}else z.copy(N).multiplyScalar(B).floor(),oe.copy(ne).multiplyScalar(B).floor(),te=Ne;if(J!==0&&(Y=Ia),je.bindFramebuffer(k.FRAMEBUFFER,Y)&&K&&je.drawBuffers(w,Y),je.viewport(z),je.scissor(oe),je.setScissorTest(te),ye){const Be=Ge.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,J)}else if(Re){const Be=Ge.get(w.texture),et=W;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,J,et)}else if(w!==null&&J!==0){const Be=Ge.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,J)}b=-1},this.readRenderTargetPixels=function(w,W,J,K,Y,ye,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){je.bindFramebuffer(k.FRAMEBUFFER,Le);try{const Be=w.texture,et=Be.format,Qe=Be.type;if(!ct.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-K&&J>=0&&J<=w.height-Y&&k.readPixels(W,J,K,Y,nt.convert(et),nt.convert(Qe),ye)}finally{const Be=j!==null?Ge.get(j).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,W,J,K,Y,ye,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const Be=w.texture,et=Be.format,Qe=Be.type;if(!ct.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=w.width-K&&J>=0&&J<=w.height-Y){je.bindFramebuffer(k.FRAMEBUFFER,Le);const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(W,J,K,Y,nt.convert(et),nt.convert(Qe),0);const vt=j!==null?Ge.get(j).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,vt);const st=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Wx(k,st,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.deleteBuffer(He),k.deleteSync(st),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,W=null,J=0){w.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-J),Y=Math.floor(w.image.width*K),ye=Math.floor(w.image.height*K),Re=W!==null?W.x:0,Le=W!==null?W.y:0;P.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Re,Le,Y,ye),je.unbindTexture()};const Da=k.createFramebuffer(),Na=k.createFramebuffer();this.copyTextureToTexture=function(w,W,J=null,K=null,Y=0,ye=null){w.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],W=arguments[2],ye=arguments[3]||0,J=null),ye===null&&(Y!==0?(ro("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=Y,Y=0):ye=0);let Re,Le,Be,et,Qe,He,vt,st,Xt;const zt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(J!==null)Re=J.max.x-J.min.x,Le=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,et=J.min.x,Qe=J.min.y,He=J.isBox3?J.min.z:0;else{const nn=Math.pow(2,-Y);Re=Math.floor(zt.width*nn),Le=Math.floor(zt.height*nn),w.isDataArrayTexture?Be=zt.depth:w.isData3DTexture?Be=Math.floor(zt.depth*nn):Be=1,et=0,Qe=0,He=0}K!==null?(vt=K.x,st=K.y,Xt=K.z):(vt=0,st=0,Xt=0);const xt=nt.convert(W.format),Ye=nt.convert(W.type);let jt;W.isData3DTexture?(P.setTexture3D(W,0),jt=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),jt=k.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),jt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const _t=k.getParameter(k.UNPACK_ROW_LENGTH),pn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),lr=k.getParameter(k.UNPACK_SKIP_PIXELS),Tn=k.getParameter(k.UNPACK_SKIP_ROWS),Ni=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,zt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,zt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,et),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const Nt=w.isDataArrayTexture||w.isData3DTexture,mn=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const nn=Ge.get(w),fn=Ge.get(W),rn=Ge.get(nn.__renderTarget),Et=Ge.get(fn.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,rn.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Si=0;Si<Be;Si++)Nt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,Y,He+Si),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(W).__webglTexture,ye,Xt+Si)),k.blitFramebuffer(et,Qe,Re,Le,vt,st,Re,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Ge.has(w)){const nn=Ge.get(w),fn=Ge.get(W);je.bindFramebuffer(k.READ_FRAMEBUFFER,Da),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Na);for(let rn=0;rn<Be;rn++)Nt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,Y,He+rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,Y),mn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,fn.__webglTexture,ye,Xt+rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fn.__webglTexture,ye),Y!==0?k.blitFramebuffer(et,Qe,Re,Le,vt,st,Re,Le,k.COLOR_BUFFER_BIT,k.NEAREST):mn?k.copyTexSubImage3D(jt,ye,vt,st,Xt+rn,et,Qe,Re,Le):k.copyTexSubImage2D(jt,ye,vt,st,et,Qe,Re,Le);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else mn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(jt,ye,vt,st,Xt,Re,Le,Be,xt,Ye,zt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(jt,ye,vt,st,Xt,Re,Le,Be,xt,zt.data):k.texSubImage3D(jt,ye,vt,st,Xt,Re,Le,Be,xt,Ye,zt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,vt,st,Re,Le,xt,Ye,zt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,vt,st,zt.width,zt.height,xt,zt.data):k.texSubImage2D(k.TEXTURE_2D,ye,vt,st,Re,Le,xt,Ye,zt);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,lr),k.pixelStorei(k.UNPACK_SKIP_ROWS,Tn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ni),ye===0&&W.generateMipmaps&&k.generateMipmap(jt),je.unbindTexture()},this.copyTextureToTexture3D=function(w,W,J=null,K=null,Y=0){return w.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,w=arguments[2],W=arguments[3],Y=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,J,K,Y)},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){O=0,U=0,j=null,je.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}class YA{constructor(e){const i=new By().load(["assets/skybox/px.jpg","assets/skybox/nx.jpg","assets/skybox/py.jpg","assets/skybox/ny.jpg","assets/skybox/pz.jpg","assets/skybox/nz.jpg"]);e.background=i}}class qA{constructor(e){Ct(this,"mesh");Ct(this,"update",()=>{this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.01});const t=new Ao(24,24,24),i=new er({color:65280,wireframe:!0});this.mesh=new Pn(t,i),e.add(this.mesh)}}function Zg(o,e){if(e===mx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Cd||e===g_){let t=o.getIndex();if(t===null){const u=[],c=o.getAttribute("position");if(c!==void 0){for(let d=0;d<c.count;d++)u.push(d);o.setIndex(u),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Cd)for(let u=1;u<=i;u++)s.push(t.getX(0)),s.push(t.getX(u)),s.push(t.getX(u+1));else for(let u=0;u<i;u++)u%2===0?(s.push(t.getX(u)),s.push(t.getX(u+1)),s.push(t.getX(u+2))):(s.push(t.getX(u+2)),s.push(t.getX(u+1)),s.push(t.getX(u)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class KA extends gs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ew(t)}),this.register(function(t){return new tw(t)}),this.register(function(t){return new cw(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new iw(t)}),this.register(function(t){return new rw(t)}),this.register(function(t){return new sw(t)}),this.register(function(t){return new ow(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new aw(t)}),this.register(function(t){return new nw(t)}),this.register(function(t){return new uw(t)}),this.register(function(t){return new lw(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new pw(t)})}load(e,t,i,s){const a=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const h=ya.extractUrlBase(e);u=ya.resolveURL(h,this.path)}else u=ya.extractUrlBase(e);this.manager.itemStart(e);const c=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},d=new F_(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{a.parse(h,u,function(m){t(m),a.manager.itemEnd(e)},c)}catch(m){c(m)}},i,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const u={},c={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===G_){try{u[mt.KHR_BINARY_GLTF]=new mw(e)}catch(g){s&&s(g);return}a=JSON.parse(u[mt.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Cw(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[g.name]=g,u[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case mt.KHR_MATERIALS_UNLIT:u[g]=new QA;break;case mt.KHR_DRACO_MESH_COMPRESSION:u[g]=new gw(a,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:u[g]=new _w;break;case mt.KHR_MESH_QUANTIZATION:u[g]=new vw;break;default:_.indexOf(g)>=0&&c[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(u),h.setPlugins(c),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function $A(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ZA{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const m=new rt(16777215);d.color!==void 0&&m.setRGB(d.color[0],d.color[1],d.color[2],Dn);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new jy(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Wy(m),h.distance=g;break;case"spot":h=new Vy(m),h.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),h.decay=2,$i(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(d){return i._getNodeRef(t.cache,c,d)})}}class QA{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return er}extendParams(e,t,i){const s=[];e.color=new rt(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const u=a.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Dn),e.opacity=u[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,un))}return Promise.all(s)}}class JA{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class ew{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const c=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new St(c,c)}return Promise.all(a)}}class tw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class nw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(a)}}class iw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=s.extensions[this.name];if(u.sheenColorFactor!==void 0){const c=u.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Dn)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",u.sheenColorTexture,un)),u.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(a)}}class rw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(a)}}class sw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const c=u.attenuationColor||[1,1,1];return t.attenuationColor=new rt().setRGB(c[0],c[1],c[2],Dn),Promise.all(a)}}class ow{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class aw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",u.specularTexture));const c=u.specularColorFactor||[1,1,1];return t.specularColor=new rt().setRGB(c[0],c[1],c[2],Dn),u.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",u.specularColorTexture,un)),Promise.all(a)}}class lw{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(a)}}class uw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],u=s.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(a)}}class cw{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,u)}}class fw{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const u=a.extensions[t],c=s.images[u.source];let d=i.textureLoader;if(c.uri){const h=i.options.manager.getHandler(c.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,u.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dw{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const u=a.extensions[t],c=s.images[u.source];let d=i.textureLoader;if(c.uri){const h=i.options.manager.getHandler(c.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,u.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hw{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const d=s.byteOffset||0,h=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(c,d,h);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(m*g);return u.decodeGltfBuffer(new Uint8Array(y),m,g,_,s.mode,s.filter),y})})}else return null}}class pw{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==ni.TRIANGLES&&h.mode!==ni.TRIANGLE_STRIP&&h.mode!==ni.TRIANGLE_FAN&&h.mode!==void 0)return null;const u=i.extensions[this.name].attributes,c=[],d={};for(const h in u)c.push(this.parser.getDependency("accessor",u[h]).then(m=>(d[h]=m,d[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const m=h.pop(),g=m.isGroup?m.children:[m],_=h[0].count,y=[];for(const M of g){const T=new at,S=new X,x=new vi,D=new X(1,1,1),L=new Sy(M.geometry,M.material,_);for(let C=0;C<_;C++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,C),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,C),d.SCALE&&D.fromBufferAttribute(d.SCALE,C),L.setMatrixAt(C,T.compose(S,x,D));for(const C in d)if(C==="_COLOR_0"){const V=d[C];L.instanceColor=new Pd(V.array,V.itemSize,V.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,d[C]);Wt.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),y.push(L)}return m.isGroup?(m.clear(),m.add(...y),m):y[0]}))}}const G_="glTF",ma=12,Qg={JSON:1313821514,BIN:5130562};class mw{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ma),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==G_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ma,a=new DataView(e,ma);let u=0;for(;u<s;){const c=a.getUint32(u,!0);u+=4;const d=a.getUint32(u,!0);if(u+=4,d===Qg.JSON){const h=new Uint8Array(e,ma+u,c);this.content=i.decode(h)}else if(d===Qg.BIN){const h=ma+u;this.body=e.slice(h,h+c)}u+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,c={},d={},h={};for(const m in u){const g=Nd[m]||m.toLowerCase();c[g]=u[m]}for(const m in e.attributes){const g=Nd[m]||m.toLowerCase();if(u[m]!==void 0){const _=i.accessors[e.attributes[m]],y=ho[_.componentType];h[g]=y.name,d[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(y){for(const M in y.attributes){const T=y.attributes[M],S=d[M];S!==void 0&&(T.normalized=S)}g(y)},c,h,Dn,_)})})}}class _w{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vw{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class W_ extends Ra{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let u=0;u!==s;u++)t[u]=i[a+u];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=c*2,h=c*3,m=s-t,g=(i-t)/m,_=g*g,y=_*g,M=e*h,T=M-h,S=-2*y+3*_,x=y-_,D=1-S,L=x-_+g;for(let C=0;C!==c;C++){const V=u[T+C+c],O=u[T+C+d]*m,U=u[M+C+c],j=u[M+C]*m;a[C]=D*V+L*O+S*U+x*j}return a}}const xw=new vi;class yw extends W_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return xw.fromArray(a).normalize().toArray(a),a}}const ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ho={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jg={9728:Ln,9729:qn,9984:o_,9985:cu,9986:ga,9987:Qi},e_={33071:Fr,33648:_u,10497:_o},Vf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Sw={CUBICSPLINE:void 0,LINEAR:Ea,STEP:Ma},Gf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Mw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Jd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ir})),o.DefaultMaterial}function ls(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function $i(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ew(o,e,t){let i=!1,s=!1,a=!1;for(let h=0,m=e.length;h<m;h++){const g=e[h];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const u=[],c=[],d=[];for(let h=0,m=e.length;h<m;h++){const g=e[h];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;u.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;c.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;d.push(_)}}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(d)]).then(function(h){const m=h[0],g=h[1],_=h[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function Tw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Aw(o){let e;const t=o.extensions&&o.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wf(t.attributes):e=o.indices+":"+Wf(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+Wf(o.targets[i]);return e}function Wf(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function Ud(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ww(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Rw=new at;class Cw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $A,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,u=-1;if(typeof navigator<"u"){const c=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(c)===!0;const d=c.match(/Version\/(\d+)/);s=i&&d?parseInt(d[1],10):-1,a=c.indexOf("Firefox")>-1,u=a?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&u<98?this.textureLoader=new zy(this.options.manager):this.textureLoader=new Yy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new F_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(u){const c={scene:u[0][s.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:s.asset,parser:i,userData:{}};return ls(a,c,s),$i(c,s),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(c)})).then(function(){for(const d of c.scenes)d.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const u=t[s].joints;for(let c=0,d=u.length;c<d;c++)e[u[c]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const u=e[s];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(i[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(u,c)=>{const d=this.associations.get(u);d!=null&&this.associations.set(c,d);for(const[h,m]of u.children.entries())a(m,c.children[h])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,u){return i.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,u){i.load(ya.resolveURL(t.uri,s.path),a,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const u=Vf[s.type],c=ho[s.componentType],d=s.normalized===!0,h=new c(s.count*u);return Promise.resolve(new In(h,u,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(u){const c=u[0],d=Vf[s.type],h=ho[s.componentType],m=h.BYTES_PER_ELEMENT,g=m*d,_=s.byteOffset||0,y=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let T,S;if(y&&y!==g){const x=Math.floor(_/y),D="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let L=t.cache.get(D);L||(T=new h(c,x*y,s.count*y/m),L=new gy(T,y/m),t.cache.add(D,L)),S=new Kd(L,d,_%y/m,M)}else c===null?T=new h(s.count*d):T=new h(c,_,s.count*d),S=new In(T,d,M);if(s.sparse!==void 0){const x=Vf.SCALAR,D=ho[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,V=new D(u[1],L,s.sparse.count*x),O=new h(u[2],C,s.sparse.count*d);c!==null&&(S=new In(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,j=V.length;U<j;U++){const b=V[U];if(S.setX(b,O[U*d]),d>=2&&S.setY(b,O[U*d+1]),d>=3&&S.setZ(b,O[U*d+2]),d>=4&&S.setW(b,O[U*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,u=t.images[a];let c=this.textureLoader;if(u.uri){const d=i.manager.getHandler(u.uri);d!==null&&(c=d)}return this.loadTextureImage(e,a,c)}loadTextureImage(e,t,i){const s=this,a=this.json,u=a.textures[e],c=a.images[t],d=(c.uri||c.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=u.name||c.name||"",m.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(m.name=c.uri);const _=(a.samplers||{})[u.sampler]||{};return m.magFilter=Jg[_.magFilter]||qn,m.minFilter=Jg[_.minFilter]||Qi,m.wrapS=e_[_.wrapS]||_o,m.wrapT=e_[_.wrapT]||_o,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==Ln&&m.minFilter!==qn,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const u=s.images[e],c=self.URL||self.webkitURL;let d=u.uri||"",h=!1;if(u.bufferView!==void 0)d=i.getDependency("bufferView",u.bufferView).then(function(g){h=!0;const _=new Blob([g],{type:u.mimeType});return d=c.createObjectURL(_),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(d).then(function(g){return new Promise(function(_,y){let M=_;t.isImageBitmapLoader===!0&&(M=function(T){const S=new cn(T);S.needsUpdate=!0,_(S)}),t.load(ya.resolveURL(g,a.path),M,void 0,y)})}).then(function(g){return h===!0&&c.revokeObjectURL(d),$i(g,u),g.userData.mimeType=u.mimeType||ww(u.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(u){if(!u)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(u=u.clone(),u.channel=i.texCoord),a.extensions[mt.KHR_TEXTURE_TRANSFORM]){const c=i.extensions!==void 0?i.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const d=a.associations.get(u);u=a.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(u,c),a.associations.set(u,d)}}return s!==void 0&&(u.colorSpace=s),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+i.uuid;let d=this.cache.get(c);d||(d=new L_,Ri.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(c,d)),i=d}else if(e.isLine){const c="LineBasicMaterial:"+i.uuid;let d=this.cache.get(c);d||(d=new P_,Ri.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(c,d)),i=d}if(s||a||u){let c="ClonedMaterial:"+i.uuid+":";s&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),u&&(c+="flat-shading:");let d=this.cache.get(c);d||(d=i.clone(),a&&(d.vertexColors=!0),u&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(c,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return Jd}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let u;const c={},d=a.extensions||{},h=[];if(d[mt.KHR_MATERIALS_UNLIT]){const g=s[mt.KHR_MATERIALS_UNLIT];u=g.getMaterialType(),h.push(g.extendParams(c,a,t))}else{const g=a.pbrMetallicRoughness||{};if(c.color=new rt(1,1,1),c.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;c.color.setRGB(_[0],_[1],_[2],Dn),c.opacity=_[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",g.baseColorTexture,un)),c.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,c.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",g.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,c)})))}a.doubleSided===!0&&(c.side=hi);const m=a.alphaMode||Gf.OPAQUE;if(m===Gf.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,m===Gf.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&u!==er&&(h.push(t.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new St(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;c.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&u!==er&&(h.push(t.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&u!==er){const g=a.emissiveFactor;c.emissive=new rt().setRGB(g[0],g[1],g[2],Dn)}return a.emissiveTexture!==void 0&&u!==er&&h.push(t.assignTexture(c,"emissiveMap",a.emissiveTexture,un)),Promise.all(h).then(function(){const g=new u(c);return a.name&&(g.name=a.name),$i(g,a),t.associations.set(g,{materials:e}),a.extensions&&ls(s,g,a),g})}createUniqueName(e){const t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(c){return i[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(d){return t_(d,c,t)})}const u=[];for(let c=0,d=e.length;c<d;c++){const h=e[c],m=Aw(h),g=s[m];if(g)u.push(g.promise);else{let _;h.extensions&&h.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?_=a(h):_=t_(new bi,h,t),s[m]={primitive:h,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],u=a.primitives,c=[];for(let d=0,h=u.length;d<h;d++){const m=u[d].material===void 0?Mw(this.cache):this.getDependency("material",u[d].material);c.push(m)}return c.push(t.loadGeometries(u)),Promise.all(c).then(function(d){const h=d.slice(0,d.length-1),m=d[d.length-1],g=[];for(let y=0,M=m.length;y<M;y++){const T=m[y],S=u[y];let x;const D=h[y];if(S.mode===ni.TRIANGLES||S.mode===ni.TRIANGLE_STRIP||S.mode===ni.TRIANGLE_FAN||S.mode===void 0)x=a.isSkinnedMesh===!0?new vy(T,D):new Pn(T,D),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===ni.TRIANGLE_STRIP?x.geometry=Zg(x.geometry,g_):S.mode===ni.TRIANGLE_FAN&&(x.geometry=Zg(x.geometry,Cd));else if(S.mode===ni.LINES)x=new Ty(T,D);else if(S.mode===ni.LINE_STRIP)x=new Qd(T,D);else if(S.mode===ni.LINE_LOOP)x=new Ay(T,D);else if(S.mode===ni.POINTS)x=new wy(T,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&Tw(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),$i(x,a),S.extensions&&ls(s,x,S),t.assignFinalMaterial(x),g.push(x)}for(let y=0,M=g.length;y<M;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return a.extensions&&ls(s,g[0],a),g[0];const _=new hs;a.extensions&&ls(s,_,a),t.associations.set(_,{meshes:e});for(let y=0,M=g.length;y<M;y++)_.add(g[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new bn(Vx.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new nh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),$i(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),u=s,c=[],d=[];for(let h=0,m=u.length;h<m;h++){const g=u[h];if(g){c.push(g);const _=new at;a!==null&&_.fromArray(a.array,h*16),d.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new $d(c,d)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,u=[],c=[],d=[],h=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const y=s.channels[g],M=s.samplers[y.sampler],T=y.target,S=T.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,D=s.parameters!==void 0?s.parameters[M.output]:M.output;T.node!==void 0&&(u.push(this.getDependency("node",S)),c.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",D)),h.push(M),m.push(T))}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(d),Promise.all(h),Promise.all(m)]).then(function(g){const _=g[0],y=g[1],M=g[2],T=g[3],S=g[4],x=[];for(let D=0,L=_.length;D<L;D++){const C=_[D],V=y[D],O=M[D],U=T[D],j=S[D];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const b=i._createAnimationTracks(C,V,O,U,j);if(b)for(let R=0;R<b.length;R++)x.push(b[R])}return new Id(a,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const u=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&u.traverse(function(c){if(c.isMesh)for(let d=0,h=s.weights.length;d<h;d++)c.morphTargetInfluences[d]=s.weights[d]}),u})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),u=[],c=s.children||[];for(let h=0,m=c.length;h<m;h++)u.push(i.getDependency("node",c[h]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(u),d]).then(function(h){const m=h[0],g=h[1],_=h[2];_!==null&&m.traverse(function(y){y.isSkinnedMesh&&y.bind(_,Rw)});for(let y=0,M=g.length;y<M;y++)m.add(g[y]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],u=a.name?s.createUniqueName(a.name):"",c=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&c.push(d),a.camera!==void 0&&c.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let m;if(a.isBone===!0?m=new C_:h.length>1?m=new hs:h.length===1?m=h[0]:m=new Wt,m!==h[0])for(let g=0,_=h.length;g<_;g++)m.add(h[g]);if(a.name&&(m.userData.name=a.name,m.name=u),$i(m,a),a.extensions&&ls(i,m,a),a.matrix!==void 0){const g=new at;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new hs;i.name&&(a.name=s.createUniqueName(i.name)),$i(a,i),i.extensions&&ls(t,a,i);const u=i.nodes||[],c=[];for(let d=0,h=u.length;d<h;d++)c.push(s.getDependency("node",u[d]));return Promise.all(c).then(function(d){for(let m=0,g=d.length;m<g;m++)a.add(d[m]);const h=m=>{const g=new Map;for(const[_,y]of s.associations)(_ instanceof Ri||_ instanceof cn)&&g.set(_,y);return m.traverse(_=>{const y=s.associations.get(_);y!=null&&g.set(_,y)}),g};return s.associations=h(a),a})}_createAnimationTracks(e,t,i,s,a){const u=[],c=e.name?e.name:e.uuid,d=[];Nr[a.path]===Nr.weights?e.traverse(function(_){_.morphTargetInfluences&&d.push(_.name?_.name:_.uuid)}):d.push(c);let h;switch(Nr[a.path]){case Nr.weights:h=Mo;break;case Nr.rotation:h=Eo;break;case Nr.position:case Nr.scale:h=To;break;default:switch(i.itemSize){case 1:h=Mo;break;case 2:case 3:default:h=To;break}break}const m=s.interpolation!==void 0?Sw[s.interpolation]:Ea,g=this._getArrayFromAccessor(i);for(let _=0,y=d.length;_<y;_++){const M=new h(d[_]+"."+Nr[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ud(t.constructor),s=new Float32Array(t.length);for(let a=0,u=t.length;a<u;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Eo?yw:W_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bw(o,e,t){const i=e.attributes,s=new sr;if(i.POSITION!==void 0){const c=t.json.accessors[i.POSITION],d=c.min,h=c.max;if(d!==void 0&&h!==void 0){if(s.set(new X(d[0],d[1],d[2]),new X(h[0],h[1],h[2])),c.normalized){const m=Ud(ho[c.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const c=new X,d=new X;for(let h=0,m=a.length;h<m;h++){const g=a[h];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const T=Ud(ho[_.componentType]);d.multiplyScalar(T)}c.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}o.boundingBox=s;const u=new Ci;s.getCenter(u.center),u.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=u}function t_(o,e,t){const i=e.attributes,s=[];function a(u,c){return t.getDependency("accessor",u).then(function(d){o.setAttribute(c,d)})}for(const u in i){const c=Nd[u]||u.toLowerCase();c in o.attributes||s.push(a(i[u],c))}if(e.indices!==void 0&&!o.index){const u=t.getDependency("accessor",e.indices).then(function(c){o.setIndex(c)});s.push(u)}return yt.workingColorSpace!==Dn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),$i(o,e),bw(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ew(o,e.targets,t):o})}class Pw{constructor(e){Ct(this,"mixer");Ct(this,"model");Ct(this,"animations",{});new KA().load("./assets/models/stickman.glb",i=>{this.model=i.scene,e.add(this.model),this.mixer=new lS(this.model),i.animations.forEach(s=>{this.animations[s.name]=s,this.mixer.clipAction(s).play()})},void 0,i=>{console.error(i)})}update(e){this.mixer&&this.mixer.update(e)}switchAnimation(e){if(this.mixer&&this.animations[e]){this.mixer.stopAllAction();const t=this.animations[e];this.mixer.clipAction(t).play()}}getPosition(){return this.model?this.model.position:new X}move(e){this.model&&this.model.position.add(e)}}class Lw{constructor(e){Ct(this,"mesh");Ct(this,"size");const t=new wa,i=new er({color:16776960,side:hi});this.mesh=new Pn(t,i),this.mesh.rotation.x=Math.PI/2,this.size=10,this.mesh.scale.set(this.size,this.size,this.size),e.add(this.mesh)}}const no=new xi(0,0,0,"YXZ"),io=new X,Iw={type:"change"},Dw={type:"lock"},Nw={type:"unlock"},n_=Math.PI/2;class Uw extends uS{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Fw.bind(this),this._onPointerlockChange=Ow.bind(this),this._onPointerlockError=kw.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;io.setFromMatrixColumn(t.matrix,0),io.crossVectors(t.up,io),t.position.addScaledVector(io,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;io.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(io,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Fw(o){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;no.setFromQuaternion(e.quaternion),no.y-=o.movementX*.002*this.pointerSpeed,no.x-=o.movementY*.002*this.pointerSpeed,no.x=Math.max(n_-this.maxPolarAngle,Math.min(n_-this.minPolarAngle,no.x)),e.quaternion.setFromEuler(no),this.dispatchEvent(Iw)}function Ow(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Dw),this.isLocked=!0):(this.dispatchEvent(Nw),this.isLocked=!1)}function kw(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class Bw extends Uw{constructor(t,i){super(t,i);Ct(this,"velocity",new X);Ct(this,"isMovingForward",!1);Ct(this,"isMovingBackward",!1);Ct(this,"isMovingLeft",!1);Ct(this,"isMovingRight",!1);Ct(this,"canJump",!1);Ct(this,"boostMultiplier",1);Ct(this,"speed",5);Ct(this,"jumpStrength",5);Ct(this,"gravity",9.8);Ct(this,"onKeyDown",t=>{switch(t.code){case"KeyW":this.isMovingForward=!0;break;case"KeyS":this.isMovingBackward=!0;break;case"KeyA":this.isMovingLeft=!0;break;case"KeyD":this.isMovingRight=!0;break;case"Space":this.canJump&&(this.velocity.y=this.jumpStrength,this.canJump=!1);break;case"ShiftLeft":this.boostMultiplier=2;break}});Ct(this,"onKeyUp",t=>{switch(t.code){case"KeyW":this.isMovingForward=!1;break;case"KeyS":this.isMovingBackward=!1;break;case"KeyA":this.isMovingLeft=!1;break;case"KeyD":this.isMovingRight=!1;break;case"ShiftLeft":this.boostMultiplier=1;break}});this.camera=t,i.addEventListener("click",()=>this.lock()),this.addEventListeners()}addEventListeners(){document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp)}update(t){const i=new X,s=new X,a=new X;this.camera.getWorldDirection(s),s.y=0,s.normalize(),a.crossVectors(s,new X(0,1,0)).normalize(),this.isMovingForward&&i.add(s),this.isMovingBackward&&i.sub(s),this.isMovingRight&&i.add(a),this.isMovingLeft&&i.sub(a),i.normalize();const u=this.speed*this.boostMultiplier;this.velocity.x=i.x*u,this.velocity.z=i.z*u,this.velocity.y-=this.gravity*t,this.camera.position.addScaledVector(this.velocity,t),this.camera.position.y<1&&(this.velocity.y=0,this.camera.position.y=1,this.canJump=!0)}}function zw(o){const{container:e}=o;o.scene=new my,o.camera=new bn(75,e.clientWidth/e.clientHeight,.1,1e3),o.camera.position.set(0,1,2),o.renderer=new jA({antialias:!0}),o.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(o.renderer.domElement),new YA(o.scene),o.controls=new Bw(o.camera,o.renderer.domElement),o.box=new qA(o.scene),o.plane=new Lw(o.scene),o.player=new Pw(o.scene)}const Hw=new Ky;function X_(o){o.animationFrameId=requestAnimationFrame(()=>X_(o));const e=Hw.getDelta();o.box.update(),o.player.update(e),o.controls&&o.controls.update(e),o.renderer.render(o.scene,o.camera)}function Vw(o){window.addEventListener("keydown",e=>{e.key==="1"?o.player.switchAnimation("Idle"):e.key==="2"&&o.player.switchAnimation("Run")}),window.addEventListener("resize",()=>Gw(o))}function Gw(o){const{container:e,camera:t,renderer:i}=o;t.aspect=e.clientWidth/e.clientHeight,t.updateProjectionMatrix(),i.setSize(e.clientWidth,e.clientHeight)}const Zi=class Zi{constructor(e){Ct(this,"scene");Ct(this,"camera");Ct(this,"renderer");Ct(this,"animationFrameId",null);Ct(this,"box");Ct(this,"player");Ct(this,"plane");Ct(this,"controls");Ct(this,"animate",()=>X_(this));this.container=e}static getInstance(e){return Zi.instance||(Zi.instance=new Zi(e),Zi.instance.init()),Zi.instance}init(){zw(this),Vw(this),this.animate()}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),this.renderer.dispose(),this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement),Zi.instance=void 0}};Ct(Zi,"instance");let Fd=Zi;const Ww=()=>{const o=uu.useRef(null),e=uu.useRef(null);return uu.useEffect(()=>{const t=o.current;return t&&(e.current=Fd.getInstance(t)),()=>{var i;(i=e.current)==null||i.dispose()}},[]),lo.jsx("div",{ref:o,style:{width:"100vw",height:"100vh"}})};function Xw(){return lo.jsx(lo.Fragment,{children:lo.jsx(Ww,{})})}D0.createRoot(document.getElementById("root")).render(lo.jsx(uu.StrictMode,{children:lo.jsx(Xw,{})}));
