var I0=Object.defineProperty;var D0=(o,e,t)=>e in o?I0(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var Sn=(o,e,t)=>D0(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var ah={exports:{}},ca={},lh={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function N0(){if(Dm)return pt;Dm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(N,ne,Ne){this.props=N,this.context=ne,this.refs=T,this.updater=Ne||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(N,ne,Ne){this.props=N,this.context=ne,this.refs=T,this.updater=Ne||x}var L=D.prototype=new y;L.constructor=D,M(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,V=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function j(N,ne,Ne){var Q,fe={},Se=null,ve=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Se=""+ne.key),ne)V.call(ne,Q)&&!U.hasOwnProperty(Q)&&(fe[Q]=ne[Q]);var Te=arguments.length-2;if(Te===1)fe.children=Ne;else if(1<Te){for(var De=Array(Te),Ze=0;Ze<Te;Ze++)De[Ze]=arguments[Ze+2];fe.children=De}if(N&&N.defaultProps)for(Q in Te=N.defaultProps,Te)fe[Q]===void 0&&(fe[Q]=Te[Q]);return{$$typeof:o,type:N,key:Se,ref:ve,props:fe,_owner:O.current}}function b(N,ne){return{$$typeof:o,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function z(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ne){return ne[Ne]})}var oe=/\/+/g;function te(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):ne.toString(36)}function ue(N,ne,Ne,Q,fe){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case o:case e:ve=!0}}if(ve)return ve=N,fe=fe(ve),N=Q===""?"."+te(ve,0):Q,C(fe)?(Ne="",N!=null&&(Ne=N.replace(oe,"$&/")+"/"),ue(fe,ne,Ne,"",function(Ze){return Ze})):fe!=null&&(R(fe)&&(fe=b(fe,Ne+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(oe,"$&/")+"/")+N)),ne.push(fe)),1;if(ve=0,Q=Q===""?".":Q+":",C(N))for(var Te=0;Te<N.length;Te++){Se=N[Te];var De=Q+te(Se,Te);ve+=ue(Se,ne,Ne,De,fe)}else if(De=_(N),typeof De=="function")for(N=De.call(N),Te=0;!(Se=N.next()).done;)Se=Se.value,De=Q+te(Se,Te++),ve+=ue(Se,ne,Ne,De,fe);else if(Se==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function de(N,ne,Ne){if(N==null)return N;var Q=[],fe=0;return ue(N,Q,"","",function(Se){return ne.call(Ne,Se,fe++)}),Q}function se(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Ne){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ne)},function(Ne){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ne)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:de,forEach:function(N,ne,Ne){de(N,function(){ne.apply(this,arguments)},Ne)},count:function(N){var ne=0;return de(N,function(){ne++}),ne},toArray:function(N){return de(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pt.Component=S,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=D,pt.StrictMode=i,pt.Suspense=f,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,pt.act=re,pt.cloneElement=function(N,ne,Ne){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=M({},N.props),fe=N.key,Se=N.ref,ve=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Se=ne.ref,ve=O.current),ne.key!==void 0&&(fe=""+ne.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(De in ne)V.call(ne,De)&&!U.hasOwnProperty(De)&&(Q[De]=ne[De]===void 0&&Te!==void 0?Te[De]:ne[De])}var De=arguments.length-2;if(De===1)Q.children=Ne;else if(1<De){Te=Array(De);for(var Ze=0;Ze<De;Ze++)Te[Ze]=arguments[Ze+2];Q.children=Te}return{$$typeof:o,type:N.type,key:fe,ref:Se,props:Q,_owner:ve}},pt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},pt.createElement=j,pt.createFactory=function(N){var ne=j.bind(null,N);return ne.type=N,ne},pt.createRef=function(){return{current:null}},pt.forwardRef=function(N){return{$$typeof:u,render:N}},pt.isValidElement=R,pt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:se}},pt.memo=function(N,ne){return{$$typeof:d,type:N,compare:ne===void 0?null:ne}},pt.startTransition=function(N){var ne=B.transition;B.transition={};try{N()}finally{B.transition=ne}},pt.unstable_act=re,pt.useCallback=function(N,ne){return le.current.useCallback(N,ne)},pt.useContext=function(N){return le.current.useContext(N)},pt.useDebugValue=function(){},pt.useDeferredValue=function(N){return le.current.useDeferredValue(N)},pt.useEffect=function(N,ne){return le.current.useEffect(N,ne)},pt.useId=function(){return le.current.useId()},pt.useImperativeHandle=function(N,ne,Ne){return le.current.useImperativeHandle(N,ne,Ne)},pt.useInsertionEffect=function(N,ne){return le.current.useInsertionEffect(N,ne)},pt.useLayoutEffect=function(N,ne){return le.current.useLayoutEffect(N,ne)},pt.useMemo=function(N,ne){return le.current.useMemo(N,ne)},pt.useReducer=function(N,ne,Ne){return le.current.useReducer(N,ne,Ne)},pt.useRef=function(N){return le.current.useRef(N)},pt.useState=function(N){return le.current.useState(N)},pt.useSyncExternalStore=function(N,ne,Ne){return le.current.useSyncExternalStore(N,ne,Ne)},pt.useTransition=function(){return le.current.useTransition()},pt.version="18.3.1",pt}var Nm;function Vf(){return Nm||(Nm=1,lh.exports=N0()),lh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function U0(){if(Um)return ca;Um=1;var o=Vf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,d){var m,g={},_=null,x=null;d!==void 0&&(_=""+d),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(x=f.ref);for(m in f)i.call(f,m)&&!a.hasOwnProperty(m)&&(g[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:u,key:_,ref:x,props:g,_owner:s.current}}return ca.Fragment=t,ca.jsx=c,ca.jsxs=c,ca}var Fm;function F0(){return Fm||(Fm=1,ah.exports=U0()),ah.exports}var uo=F0(),dc=Vf(),kl={},ch={exports:{}},Hn={},uh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function O0(){return Om||(Om=1,function(o){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var N=re-1>>>1,ne=B[N];if(0<s(ne,ae))B[N]=ae,B[re]=ne,re=N;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var N=0,ne=B.length,Ne=ne>>>1;N<Ne;){var Q=2*(N+1)-1,fe=B[Q],Se=Q+1,ve=B[Se];if(0>s(fe,re))Se<ne&&0>s(ve,fe)?(B[N]=ve,B[Se]=re,N=Se):(B[N]=fe,B[Q]=re,N=Q);else if(Se<ne&&0>s(ve,re))B[N]=ve,B[Se]=re,N=Se;else break e}}return ae}function s(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var f=[],d=[],m=1,g=null,_=3,x=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ae=t(d);ae!==null;){if(ae.callback===null)i(d);else if(ae.startTime<=B)i(d),ae.sortIndex=ae.expirationTime,e(f,ae);else break;ae=t(d)}}function C(B){if(T=!1,L(B),!M)if(t(f)!==null)M=!0,se(V);else{var ae=t(d);ae!==null&&le(C,ae.startTime-B)}}function V(B,ae){M=!1,T&&(T=!1,y(j),j=-1),x=!0;var re=_;try{for(L(ae),g=t(f);g!==null&&(!(g.expirationTime>ae)||B&&!z());){var N=g.callback;if(typeof N=="function"){g.callback=null,_=g.priorityLevel;var ne=N(g.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(f)&&i(f),L(ae)}else i(f);g=t(f)}if(g!==null)var Ne=!0;else{var Q=t(d);Q!==null&&le(C,Q.startTime-ae),Ne=!1}return Ne}finally{g=null,_=re,x=!1}}var O=!1,U=null,j=-1,b=5,R=-1;function z(){return!(o.unstable_now()-R<b)}function oe(){if(U!==null){var B=o.unstable_now();R=B;var ae=!0;try{ae=U(!0,B)}finally{ae?te():(O=!1,U=null)}}else O=!1}var te;if(typeof D=="function")te=function(){D(oe)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=oe,te=function(){de.postMessage(null)}}else te=function(){S(oe,0)};function se(B){U=B,O||(O=!0,te())}function le(B,ae){j=S(function(){B(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,se(V))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var re=_;_=ae;try{return B()}finally{_=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=_;_=B;try{return ae()}finally{_=re}},o.unstable_scheduleCallback=function(B,ae,re){var N=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:m++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>N?(B.sortIndex=re,e(d,B),t(f)===null&&B===t(d)&&(T?(y(j),j=-1):T=!0,le(C,re-N))):(B.sortIndex=ne,e(f,B),M||x||(M=!0,se(V))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var ae=_;return function(){var re=_;_=ae;try{return B.apply(this,arguments)}finally{_=re}}}}(hh)),hh}var km;function k0(){return km||(km=1,uh.exports=O0()),uh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function B0(){if(Bm)return Hn;Bm=1;var o=Vf(),e=k0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return f.call(g,n)?!0:f.call(m,n)?!1:d.test(n)?g[n]=!0:(m[n]=!0,!1)}function x(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,h){if(r===null||typeof r>"u"||x(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,l,h,p,v,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,D);S[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,D);S[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,D);S[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,h){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,h)&&(l=null),h||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,h=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Ne=!1;function Q(n,r){if(!n||Ne)return"";Ne=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ee){var h=ee}Reflect.construct(n,[],r)}else{try{r.call()}catch(ee){h=ee}n.call(r.prototype)}else{try{throw Error()}catch(ee){h=ee}n()}}catch(ee){if(ee&&h&&typeof ee.stack=="string"){for(var p=ee.stack.split(`
`),v=h.stack.split(`
`),E=p.length-1,I=v.length-1;1<=E&&0<=I&&p[E]!==v[I];)I--;for(;1<=E&&0<=I;E--,I--)if(p[E]!==v[I]){if(E!==1||I!==1)do if(E--,I--,0>I||p[E]!==v[I]){var F=`
`+p[E].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=E&&0<=I);break}}}finally{Ne=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function fe(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case O:return"Portal";case b:return"Profiler";case j:return"StrictMode";case te:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case oe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return r=n.displayName||null,r!==null?r:Se(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return Se(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=De(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,v.call(this,E)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Lt(n){n._valueTracker||(n._valueTracker=Ze(n))}function _t(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=De(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function Ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,r){var l=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Tn(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=Te(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mt(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function ft(n,r){mt(n,r);var l=Te(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?bt(n,r.type,l):r.hasOwnProperty("defaultValue")&&bt(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function je(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function bt(n,r,l){(r!=="number"||Ut(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ge=Array.isArray;function P(n,r,l,h){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&h&&(n[l].defaultSelected=!0)}else{for(l=""+Te(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,h&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function A(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Ge(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Te(l)}}function pe(n,r){var l=Te(r.value),h=Te(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Ue=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ut(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function qe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function Je(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=qe(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,p):n[l]=p}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,r){if(r){if(ke[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function it(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,ie=null,he=null;function Pe(n){if(n=qo(n)){if(typeof we!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ja(r),we(n.stateNode,n.type,r))}}function be(n){ie?he?he.push(n):he=[n]:ie=n}function rt(){if(ie){var n=ie,r=he;if(he=ie=null,Pe(n),r)for(n=0;n<r.length;n++)Pe(r[n])}}function Ot(n,r){return n(r)}function Zt(){}var Mt=!1;function Un(n,r,l){if(Mt)return n(r,l);Mt=!0;try{return Ot(n,r,l)}finally{Mt=!1,(ie!==null||he!==null)&&(Zt(),rt())}}function An(n,r){var l=n.stateNode;if(l===null)return null;var h=Ja(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var xs=!1;if(u)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){xs=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{xs=!1}function Ui(n,r,l,h,p,v,E,I,F){var ee=Array.prototype.slice.call(arguments,3);try{r.apply(l,ee)}catch(_e){this.onError(_e)}}var Fi=!1,jr=null,Yr=!1,cr=null,La={onError:function(n){Fi=!0,jr=n}};function Ss(n,r,l,h,p,v,E,I,F){Fi=!1,jr=null,Ui.apply(La,arguments)}function Ia(n,r,l,h,p,v,E,I,F){if(Ss.apply(this,arguments),Fi){if(Fi){var ee=jr;Fi=!1,jr=null}else throw Error(t(198));Yr||(Yr=!0,cr=ee)}}function Si(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Da(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Na(n){if(Si(n)!==n)throw Error(t(188))}function Pc(n){var r=n.alternate;if(!r){if(r=Si(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Na(p),n;if(v===h)return Na(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=v;else{for(var E=!1,I=p.child;I;){if(I===l){E=!0,l=p,h=v;break}if(I===h){E=!0,h=p,l=v;break}I=I.sibling}if(!E){for(I=v.child;I;){if(I===l){E=!0,l=v,h=p;break}if(I===h){E=!0,h=v,l=p;break}I=I.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ua(n){return n=Pc(n),n!==null?Fa(n):null}function Fa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Fa(n);if(r!==null)return r;n=n.sibling}return null}var Oa=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,X=e.unstable_shouldYield,J=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,xe=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Be=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function yt(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:xt,Xt=Math.log,zt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Xt(n)/zt|0)|0}var Ye=64,jt=4194304;function vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mn(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,p=n.suspendedLanes,v=n.pingedLanes,E=l&268435455;if(E!==0){var I=E&~p;I!==0?h=vt(I):(v&=E,v!==0&&(h=vt(v)))}else E=l&~p,E!==0?h=vt(E):v!==0&&(h=vt(v));if(h===0)return 0;if(r!==0&&r!==h&&!(r&p)&&(p=h&-h,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if(h&4&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-ot(r),p=1<<l,h|=n[l],r&=~p;return h}function ur(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wn(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var E=31-ot(v),I=1<<E,F=p[E];F===-1?(!(I&l)||I&h)&&(p[E]=ur(I,r)):F<=r&&(n.expiredLanes|=I),v&=~I}}function Oi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nt(){var n=Ye;return Ye<<=1,!(Ye&4194240)&&(Ye=64),n}function gn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function rn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ot(r),n[r]=l}function fn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-ot(l),v=1<<p;r[p]=0,h[p]=-1,n[p]=-1,l&=~v}}function sn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-ot(l),p=1<<h;p&r|n[h]&r&&(n[h]|=r),l&=~p}}var Et=0;function Mi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var fd,Lc,dd,pd,md,Ic=!1,ka=[],hr=null,fr=null,dr=null,Io=new Map,Do=new Map,pr=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gd(n,r){switch(n){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Io.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(r.pointerId)}}function No(n,r,l,h,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[p]},r!==null&&(r=qo(r),r!==null&&Lc(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function nv(n,r,l,h,p){switch(r){case"focusin":return hr=No(hr,n,r,l,h,p),!0;case"dragenter":return fr=No(fr,n,r,l,h,p),!0;case"mouseover":return dr=No(dr,n,r,l,h,p),!0;case"pointerover":var v=p.pointerId;return Io.set(v,No(Io.get(v)||null,n,r,l,h,p)),!0;case"gotpointercapture":return v=p.pointerId,Do.set(v,No(Do.get(v)||null,n,r,l,h,p)),!0}return!1}function _d(n){var r=qr(n.target);if(r!==null){var l=Si(r);if(l!==null){if(r=l.tag,r===13){if(r=Da(l),r!==null){n.blockedOn=r,md(n.priority,function(){dd(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ba(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Nc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);Rt=h,l.target.dispatchEvent(h),Rt=null}else return r=qo(l),r!==null&&Lc(r),n.blockedOn=l,!1;r.shift()}return!0}function vd(n,r,l){Ba(n)&&l.delete(r)}function iv(){Ic=!1,hr!==null&&Ba(hr)&&(hr=null),fr!==null&&Ba(fr)&&(fr=null),dr!==null&&Ba(dr)&&(dr=null),Io.forEach(vd),Do.forEach(vd)}function Uo(n,r){n.blockedOn===r&&(n.blockedOn=null,Ic||(Ic=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,iv)))}function Fo(n){function r(p){return Uo(p,n)}if(0<ka.length){Uo(ka[0],n);for(var l=1;l<ka.length;l++){var h=ka[l];h.blockedOn===n&&(h.blockedOn=null)}}for(hr!==null&&Uo(hr,n),fr!==null&&Uo(fr,n),dr!==null&&Uo(dr,n),Io.forEach(r),Do.forEach(r),l=0;l<pr.length;l++)h=pr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<pr.length&&(l=pr[0],l.blockedOn===null);)_d(l),l.blockedOn===null&&pr.shift()}var Ms=C.ReactCurrentBatchConfig,za=!0;function rv(n,r,l,h){var p=Et,v=Ms.transition;Ms.transition=null;try{Et=1,Dc(n,r,l,h)}finally{Et=p,Ms.transition=v}}function sv(n,r,l,h){var p=Et,v=Ms.transition;Ms.transition=null;try{Et=4,Dc(n,r,l,h)}finally{Et=p,Ms.transition=v}}function Dc(n,r,l,h){if(za){var p=Nc(n,r,l,h);if(p===null)Zc(n,r,h,Ha,l),gd(n,h);else if(nv(p,n,r,l,h))h.stopPropagation();else if(gd(n,h),r&4&&-1<tv.indexOf(n)){for(;p!==null;){var v=qo(p);if(v!==null&&fd(v),v=Nc(n,r,l,h),v===null&&Zc(n,r,h,Ha,l),v===p)break;p=v}p!==null&&h.stopPropagation()}else Zc(n,r,h,null,l)}}var Ha=null;function Nc(n,r,l,h){if(Ha=null,n=G(h),n=qr(n),n!==null)if(r=Si(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Da(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ha=n,null}function yd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case xe:return 1;case Re:return 4;case Le:case Be:return 16;case et:return 536870912;default:return 16}default:return 16}}var mr=null,Uc=null,Va=null;function xd(){if(Va)return Va;var n,r=Uc,l=r.length,h,p="value"in mr?mr.value:mr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var E=l-n;for(h=1;h<=E&&r[l-h]===p[v-h];h++);return Va=p.slice(n,1<h?1-h:void 0)}function Ga(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Wa(){return!0}function Sd(){return!1}function Xn(n){function r(l,h,p,v,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Wa:Sd,this.isPropagationStopped=Sd,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),r}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Xn(Es),Oo=re({},Es,{view:0,detail:0}),ov=Xn(Oo),Oc,kc,ko,Xa=re({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ko&&(ko&&n.type==="mousemove"?(Oc=n.screenX-ko.screenX,kc=n.screenY-ko.screenY):kc=Oc=0,ko=n),Oc)},movementY:function(n){return"movementY"in n?n.movementY:kc}}),Md=Xn(Xa),av=re({},Xa,{dataTransfer:0}),lv=Xn(av),cv=re({},Oo,{relatedTarget:0}),Bc=Xn(cv),uv=re({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=Xn(uv),fv=re({},Es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dv=Xn(fv),pv=re({},Es,{data:0}),Ed=Xn(pv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=_v[n])?!!r[n]:!1}function zc(){return vv}var yv=re({},Oo,{key:function(n){if(n.key){var r=mv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ga(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(n){return n.type==="keypress"?Ga(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ga(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xv=Xn(yv),Sv=re({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=Xn(Sv),Mv=re({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),Ev=Xn(Mv),Tv=re({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Av=Xn(Tv),wv=re({},Xa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=Xn(wv),Cv=[9,13,27,32],Hc=u&&"CompositionEvent"in window,Bo=null;u&&"documentMode"in document&&(Bo=document.documentMode);var bv=u&&"TextEvent"in window&&!Bo,Ad=u&&(!Hc||Bo&&8<Bo&&11>=Bo),wd=" ",Rd=!1;function Cd(n,r){switch(n){case"keyup":return Cv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ts=!1;function Pv(n,r){switch(n){case"compositionend":return bd(r);case"keypress":return r.which!==32?null:(Rd=!0,wd);case"textInput":return n=r.data,n===wd&&Rd?null:n;default:return null}}function Lv(n,r){if(Ts)return n==="compositionend"||!Hc&&Cd(n,r)?(n=xd(),Va=Uc=mr=null,Ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ad&&r.locale!=="ko"?null:r.data;default:return null}}var Iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Iv[n.type]:r==="textarea"}function Ld(n,r,l,h){be(h),r=$a(r,"onChange"),0<r.length&&(l=new Fc("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var zo=null,Ho=null;function Dv(n){Kd(n,0)}function ja(n){var r=bs(n);if(_t(r))return n}function Nv(n,r){if(n==="change")return r}var Id=!1;if(u){var Vc;if(u){var Gc="oninput"in document;if(!Gc){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Gc=typeof Dd.oninput=="function"}Vc=Gc}else Vc=!1;Id=Vc&&(!document.documentMode||9<document.documentMode)}function Nd(){zo&&(zo.detachEvent("onpropertychange",Ud),Ho=zo=null)}function Ud(n){if(n.propertyName==="value"&&ja(Ho)){var r=[];Ld(r,Ho,n,G(n)),Un(Dv,r)}}function Uv(n,r,l){n==="focusin"?(Nd(),zo=r,Ho=l,zo.attachEvent("onpropertychange",Ud)):n==="focusout"&&Nd()}function Fv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ja(Ho)}function Ov(n,r){if(n==="click")return ja(r)}function kv(n,r){if(n==="input"||n==="change")return ja(r)}function Bv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var li=typeof Object.is=="function"?Object.is:Bv;function Vo(n,r){if(li(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(r,p)||!li(n[p],r[p]))return!1}return!0}function Fd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Od(n,r){var l=Fd(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Fd(l)}}function kd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?kd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Bd(){for(var n=window,r=Ut();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ut(n.document)}return r}function Wc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function zv(n){var r=Bd(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&kd(l.ownerDocument.documentElement,l)){if(h!==null&&Wc(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(h.start,p);h=h.end===void 0?v:Math.min(h.end,p),!n.extend&&v>h&&(p=h,h=v,v=p),p=Od(l,v);var E=Od(l,h);p&&E&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>h?(n.addRange(r),n.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Hv=u&&"documentMode"in document&&11>=document.documentMode,As=null,Xc=null,Go=null,jc=!1;function zd(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;jc||As==null||As!==Ut(h)||(h=As,"selectionStart"in h&&Wc(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Go&&Vo(Go,h)||(Go=h,h=$a(Xc,"onSelect"),0<h.length&&(r=new Fc("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=As)))}function Ya(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var ws={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Yc={},Hd={};u&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function qa(n){if(Yc[n])return Yc[n];if(!ws[n])return n;var r=ws[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Hd)return Yc[n]=r[l];return n}var Vd=qa("animationend"),Gd=qa("animationiteration"),Wd=qa("animationstart"),Xd=qa("transitionend"),jd=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(n,r){jd.set(n,r),a(r,[n])}for(var qc=0;qc<Yd.length;qc++){var Kc=Yd[qc],Vv=Kc.toLowerCase(),Gv=Kc[0].toUpperCase()+Kc.slice(1);gr(Vv,"on"+Gv)}gr(Vd,"onAnimationEnd"),gr(Gd,"onAnimationIteration"),gr(Wd,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(Xd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function qd(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,Ia(h,r,void 0,n),n.currentTarget=null}function Kd(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],p=h.event;h=h.listeners;e:{var v=void 0;if(r)for(var E=h.length-1;0<=E;E--){var I=h[E],F=I.instance,ee=I.currentTarget;if(I=I.listener,F!==v&&p.isPropagationStopped())break e;qd(p,I,ee),v=F}else for(E=0;E<h.length;E++){if(I=h[E],F=I.instance,ee=I.currentTarget,I=I.listener,F!==v&&p.isPropagationStopped())break e;qd(p,I,ee),v=F}}}if(Yr)throw n=cr,Yr=!1,cr=null,n}function kt(n,r){var l=r[iu];l===void 0&&(l=r[iu]=new Set);var h=n+"__bubble";l.has(h)||($d(r,n,2,!1),l.add(h))}function $c(n,r,l){var h=0;r&&(h|=4),$d(l,n,h,r)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function Xo(n){if(!n[Ka]){n[Ka]=!0,i.forEach(function(l){l!=="selectionchange"&&(Wv.has(l)||$c(l,!1,n),$c(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ka]||(r[Ka]=!0,$c("selectionchange",!1,r))}}function $d(n,r,l,h){switch(yd(r)){case 1:var p=rv;break;case 4:p=sv;break;default:p=Dc}l=p.bind(null,r,l,n),p=void 0,!xs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),h?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Zc(n,r,l,h,p){var v=h;if(!(r&1)&&!(r&2)&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var I=h.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===p||F.nodeType===8&&F.parentNode===p))return;E=E.return}for(;I!==null;){if(E=qr(I),E===null)return;if(F=E.tag,F===5||F===6){h=v=E;continue e}I=I.parentNode}}h=h.return}Un(function(){var ee=v,_e=G(l),ye=[];e:{var me=jd.get(n);if(me!==void 0){var Ie=Fc,ze=n;switch(n){case"keypress":if(Ga(l)===0)break e;case"keydown":case"keyup":Ie=xv;break;case"focusin":ze="focus",Ie=Bc;break;case"focusout":ze="blur",Ie=Bc;break;case"beforeblur":case"afterblur":Ie=Bc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Ev;break;case Vd:case Gd:case Wd:Ie=hv;break;case Xd:Ie=Av;break;case"scroll":Ie=ov;break;case"wheel":Ie=Rv;break;case"copy":case"cut":case"paste":Ie=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Td}var Ve=(r&4)!==0,qt=!Ve&&n==="scroll",q=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var H=ee,$;H!==null;){$=H;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,q!==null&&(Ee=An(H,q),Ee!=null&&Ve.push(jo(H,Ee,$)))),qt)break;H=H.return}0<Ve.length&&(me=new Ie(me,ze,null,l,_e),ye.push({event:me,listeners:Ve}))}}if(!(r&7)){e:{if(me=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",me&&l!==Rt&&(ze=l.relatedTarget||l.fromElement)&&(qr(ze)||ze[ki]))break e;if((Ie||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ze=l.relatedTarget||l.toElement,Ie=ee,ze=ze?qr(ze):null,ze!==null&&(qt=Si(ze),ze!==qt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=ee),Ie!==ze)){if(Ve=Md,Ee="onMouseLeave",q="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=Td,Ee="onPointerLeave",q="onPointerEnter",H="pointer"),qt=Ie==null?me:bs(Ie),$=ze==null?me:bs(ze),me=new Ve(Ee,H+"leave",Ie,l,_e),me.target=qt,me.relatedTarget=$,Ee=null,qr(_e)===ee&&(Ve=new Ve(q,H+"enter",ze,l,_e),Ve.target=$,Ve.relatedTarget=qt,Ee=Ve),qt=Ee,Ie&&ze)t:{for(Ve=Ie,q=ze,H=0,$=Ve;$;$=Rs($))H++;for($=0,Ee=q;Ee;Ee=Rs(Ee))$++;for(;0<H-$;)Ve=Rs(Ve),H--;for(;0<$-H;)q=Rs(q),$--;for(;H--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=Rs(Ve),q=Rs(q)}Ve=null}else Ve=null;Ie!==null&&Zd(ye,me,Ie,Ve,!1),ze!==null&&qt!==null&&Zd(ye,qt,ze,Ve,!0)}}e:{if(me=ee?bs(ee):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var Xe=Nv;else if(Pd(me))if(Id)Xe=kv;else{Xe=Fv;var Ke=Uv}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Ov);if(Xe&&(Xe=Xe(n,ee))){Ld(ye,Xe,l,_e);break e}Ke&&Ke(n,me,ee),n==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&bt(me,"number",me.value)}switch(Ke=ee?bs(ee):window,n){case"focusin":(Pd(Ke)||Ke.contentEditable==="true")&&(As=Ke,Xc=ee,Go=null);break;case"focusout":Go=Xc=As=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,zd(ye,l,_e);break;case"selectionchange":if(Hv)break;case"keydown":case"keyup":zd(ye,l,_e)}var $e;if(Hc)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Ts?Cd(n,l)&&(tt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(tt="onCompositionStart");tt&&(Ad&&l.locale!=="ko"&&(Ts||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Ts&&($e=xd()):(mr=_e,Uc="value"in mr?mr.value:mr.textContent,Ts=!0)),Ke=$a(ee,tt),0<Ke.length&&(tt=new Ed(tt,n,null,l,_e),ye.push({event:tt,listeners:Ke}),$e?tt.data=$e:($e=bd(l),$e!==null&&(tt.data=$e)))),($e=bv?Pv(n,l):Lv(n,l))&&(ee=$a(ee,"onBeforeInput"),0<ee.length&&(_e=new Ed("onBeforeInput","beforeinput",null,l,_e),ye.push({event:_e,listeners:ee}),_e.data=$e))}Kd(ye,r)})}function jo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function $a(n,r){for(var l=r+"Capture",h=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=An(n,l),v!=null&&h.unshift(jo(n,v,p)),v=An(n,r),v!=null&&h.push(jo(n,v,p))),n=n.return}return h}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Zd(n,r,l,h,p){for(var v=r._reactName,E=[];l!==null&&l!==h;){var I=l,F=I.alternate,ee=I.stateNode;if(F!==null&&F===h)break;I.tag===5&&ee!==null&&(I=ee,p?(F=An(l,v),F!=null&&E.unshift(jo(l,F,I))):p||(F=An(l,v),F!=null&&E.push(jo(l,F,I)))),l=l.return}E.length!==0&&n.push({event:r,listeners:E})}var Xv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function Qd(n){return(typeof n=="string"?n:""+n).replace(Xv,`
`).replace(jv,"")}function Za(n,r,l){if(r=Qd(r),Qd(n)!==r&&l)throw Error(t(425))}function Qa(){}var Qc=null,Jc=null;function eu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(n){return Jd.resolve(null).then(n).catch(Kv)}:tu;function Kv(n){setTimeout(function(){throw n})}function nu(n,r){var l=r,h=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){n.removeChild(p),Fo(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Fo(r)}function _r(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function ep(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Cs,Yo="__reactProps$"+Cs,ki="__reactContainer$"+Cs,iu="__reactEvents$"+Cs,$v="__reactListeners$"+Cs,Zv="__reactHandles$"+Cs;function qr(n){var r=n[Ei];if(r)return r;for(var l=n.parentNode;l;){if(r=l[ki]||l[Ei]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=ep(n);n!==null;){if(l=n[Ei])return l;n=ep(n)}return r}n=l,l=n.parentNode}return null}function qo(n){return n=n[Ei]||n[ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ja(n){return n[Yo]||null}var ru=[],Ps=-1;function vr(n){return{current:n}}function Bt(n){0>Ps||(n.current=ru[Ps],ru[Ps]=null,Ps--)}function Ft(n,r){Ps++,ru[Ps]=n.current,n.current=r}var yr={},_n=vr(yr),Fn=vr(!1),Kr=yr;function Ls(n,r){var l=n.type.contextTypes;if(!l)return yr;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function On(n){return n=n.childContextTypes,n!=null}function el(){Bt(Fn),Bt(_n)}function tp(n,r,l){if(_n.current!==yr)throw Error(t(168));Ft(_n,r),Ft(Fn,l)}function np(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in r))throw Error(t(108,ve(n)||"Unknown",p));return re({},l,h)}function tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||yr,Kr=_n.current,Ft(_n,n),Ft(Fn,Fn.current),!0}function ip(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=np(n,r,Kr),h.__reactInternalMemoizedMergedChildContext=n,Bt(Fn),Bt(_n),Ft(_n,n)):Bt(Fn),Ft(Fn,l)}var Bi=null,nl=!1,su=!1;function rp(n){Bi===null?Bi=[n]:Bi.push(n)}function Qv(n){nl=!0,rp(n)}function xr(){if(!su&&Bi!==null){su=!0;var n=0,r=Et;try{var l=Bi;for(Et=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Bi=null,nl=!1}catch(p){throw Bi!==null&&(Bi=Bi.slice(n+1)),Oa(xe,xr),p}finally{Et=r,su=!1}}return null}var Is=[],Ds=0,il=null,rl=0,Jn=[],ei=0,$r=null,zi=1,Hi="";function Zr(n,r){Is[Ds++]=rl,Is[Ds++]=il,il=n,rl=r}function sp(n,r,l){Jn[ei++]=zi,Jn[ei++]=Hi,Jn[ei++]=$r,$r=n;var h=zi;n=Hi;var p=32-ot(h)-1;h&=~(1<<p),l+=1;var v=32-ot(r)+p;if(30<v){var E=p-p%5;v=(h&(1<<E)-1).toString(32),h>>=E,p-=E,zi=1<<32-ot(r)+p|l<<p|h,Hi=v+n}else zi=1<<v|l<<p|h,Hi=n}function ou(n){n.return!==null&&(Zr(n,1),sp(n,1,0))}function au(n){for(;n===il;)il=Is[--Ds],Is[Ds]=null,rl=Is[--Ds],Is[Ds]=null;for(;n===$r;)$r=Jn[--ei],Jn[ei]=null,Hi=Jn[--ei],Jn[ei]=null,zi=Jn[--ei],Jn[ei]=null}var jn=null,Yn=null,Ht=!1,ci=null;function op(n,r){var l=ri(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function ap(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,jn=n,Yn=_r(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,jn=n,Yn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=$r!==null?{id:zi,overflow:Hi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ri(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,jn=n,Yn=null,!0):!1;default:return!1}}function lu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function cu(n){if(Ht){var r=Yn;if(r){var l=r;if(!ap(n,r)){if(lu(n))throw Error(t(418));r=_r(l.nextSibling);var h=jn;r&&ap(n,r)?op(h,l):(n.flags=n.flags&-4097|2,Ht=!1,jn=n)}}else{if(lu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,jn=n}}}function lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function sl(n){if(n!==jn)return!1;if(!Ht)return lp(n),Ht=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!eu(n.type,n.memoizedProps)),r&&(r=Yn)){if(lu(n))throw cp(),Error(t(418));for(;r;)op(n,r),r=_r(r.nextSibling)}if(lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Yn=_r(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Yn=null}}else Yn=jn?_r(n.stateNode.nextSibling):null;return!0}function cp(){for(var n=Yn;n;)n=_r(n.nextSibling)}function Ns(){Yn=jn=null,Ht=!1}function uu(n){ci===null?ci=[n]:ci.push(n)}var Jv=C.ReactCurrentBatchConfig;function Ko(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var p=h,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(E){var I=p.refs;E===null?delete I[v]:I[v]=E},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function ol(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function up(n){var r=n._init;return r(n._payload)}function hp(n){function r(q,H){if(n){var $=q.deletions;$===null?(q.deletions=[H],q.flags|=16):$.push(H)}}function l(q,H){if(!n)return null;for(;H!==null;)r(q,H),H=H.sibling;return null}function h(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function p(q,H){return q=Cr(q,H),q.index=0,q.sibling=null,q}function v(q,H,$){return q.index=$,n?($=q.alternate,$!==null?($=$.index,$<H?(q.flags|=2,H):$):(q.flags|=2,H)):(q.flags|=1048576,H)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function I(q,H,$,Ee){return H===null||H.tag!==6?(H=th($,q.mode,Ee),H.return=q,H):(H=p(H,$),H.return=q,H)}function F(q,H,$,Ee){var Xe=$.type;return Xe===U?_e(q,H,$.props.children,Ee,$.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&up(Xe)===H.type)?(Ee=p(H,$.props),Ee.ref=Ko(q,H,$),Ee.return=q,Ee):(Ee=Pl($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=Ko(q,H,$),Ee.return=q,Ee)}function ee(q,H,$,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=nh($,q.mode,Ee),H.return=q,H):(H=p(H,$.children||[]),H.return=q,H)}function _e(q,H,$,Ee,Xe){return H===null||H.tag!==7?(H=ss($,q.mode,Ee,Xe),H.return=q,H):(H=p(H,$),H.return=q,H)}function ye(q,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=th(""+H,q.mode,$),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case V:return $=Pl(H.type,H.key,H.props,null,q.mode,$),$.ref=Ko(q,null,H),$.return=q,$;case O:return H=nh(H,q.mode,$),H.return=q,H;case se:var Ee=H._init;return ye(q,Ee(H._payload),$)}if(Ge(H)||ae(H))return H=ss(H,q.mode,$,null),H.return=q,H;ol(q,H)}return null}function me(q,H,$,Ee){var Xe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:I(q,H,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case V:return $.key===Xe?F(q,H,$,Ee):null;case O:return $.key===Xe?ee(q,H,$,Ee):null;case se:return Xe=$._init,me(q,H,Xe($._payload),Ee)}if(Ge($)||ae($))return Xe!==null?null:_e(q,H,$,Ee,null);ol(q,$)}return null}function Ie(q,H,$,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get($)||null,I(H,q,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return q=q.get(Ee.key===null?$:Ee.key)||null,F(H,q,Ee,Xe);case O:return q=q.get(Ee.key===null?$:Ee.key)||null,ee(H,q,Ee,Xe);case se:var Ke=Ee._init;return Ie(q,H,$,Ke(Ee._payload),Xe)}if(Ge(Ee)||ae(Ee))return q=q.get($)||null,_e(H,q,Ee,Xe,null);ol(H,Ee)}return null}function ze(q,H,$,Ee){for(var Xe=null,Ke=null,$e=H,tt=H=0,ln=null;$e!==null&&tt<$.length;tt++){$e.index>tt?(ln=$e,$e=null):ln=$e.sibling;var At=me(q,$e,$[tt],Ee);if(At===null){$e===null&&($e=ln);break}n&&$e&&At.alternate===null&&r(q,$e),H=v(At,H,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At,$e=ln}if(tt===$.length)return l(q,$e),Ht&&Zr(q,tt),Xe;if($e===null){for(;tt<$.length;tt++)$e=ye(q,$[tt],Ee),$e!==null&&(H=v($e,H,tt),Ke===null?Xe=$e:Ke.sibling=$e,Ke=$e);return Ht&&Zr(q,tt),Xe}for($e=h(q,$e);tt<$.length;tt++)ln=Ie($e,q,tt,$[tt],Ee),ln!==null&&(n&&ln.alternate!==null&&$e.delete(ln.key===null?tt:ln.key),H=v(ln,H,tt),Ke===null?Xe=ln:Ke.sibling=ln,Ke=ln);return n&&$e.forEach(function(br){return r(q,br)}),Ht&&Zr(q,tt),Xe}function Ve(q,H,$,Ee){var Xe=ae($);if(typeof Xe!="function")throw Error(t(150));if($=Xe.call($),$==null)throw Error(t(151));for(var Ke=Xe=null,$e=H,tt=H=0,ln=null,At=$.next();$e!==null&&!At.done;tt++,At=$.next()){$e.index>tt?(ln=$e,$e=null):ln=$e.sibling;var br=me(q,$e,At.value,Ee);if(br===null){$e===null&&($e=ln);break}n&&$e&&br.alternate===null&&r(q,$e),H=v(br,H,tt),Ke===null?Xe=br:Ke.sibling=br,Ke=br,$e=ln}if(At.done)return l(q,$e),Ht&&Zr(q,tt),Xe;if($e===null){for(;!At.done;tt++,At=$.next())At=ye(q,At.value,Ee),At!==null&&(H=v(At,H,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At);return Ht&&Zr(q,tt),Xe}for($e=h(q,$e);!At.done;tt++,At=$.next())At=Ie($e,q,tt,At.value,Ee),At!==null&&(n&&At.alternate!==null&&$e.delete(At.key===null?tt:At.key),H=v(At,H,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At);return n&&$e.forEach(function(L0){return r(q,L0)}),Ht&&Zr(q,tt),Xe}function qt(q,H,$,Ee){if(typeof $=="object"&&$!==null&&$.type===U&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case V:e:{for(var Xe=$.key,Ke=H;Ke!==null;){if(Ke.key===Xe){if(Xe=$.type,Xe===U){if(Ke.tag===7){l(q,Ke.sibling),H=p(Ke,$.props.children),H.return=q,q=H;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&up(Xe)===Ke.type){l(q,Ke.sibling),H=p(Ke,$.props),H.ref=Ko(q,Ke,$),H.return=q,q=H;break e}l(q,Ke);break}else r(q,Ke);Ke=Ke.sibling}$.type===U?(H=ss($.props.children,q.mode,Ee,$.key),H.return=q,q=H):(Ee=Pl($.type,$.key,$.props,null,q.mode,Ee),Ee.ref=Ko(q,H,$),Ee.return=q,q=Ee)}return E(q);case O:e:{for(Ke=$.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){l(q,H.sibling),H=p(H,$.children||[]),H.return=q,q=H;break e}else{l(q,H);break}else r(q,H);H=H.sibling}H=nh($,q.mode,Ee),H.return=q,q=H}return E(q);case se:return Ke=$._init,qt(q,H,Ke($._payload),Ee)}if(Ge($))return ze(q,H,$,Ee);if(ae($))return Ve(q,H,$,Ee);ol(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(l(q,H.sibling),H=p(H,$),H.return=q,q=H):(l(q,H),H=th($,q.mode,Ee),H.return=q,q=H),E(q)):l(q,H)}return qt}var Us=hp(!0),fp=hp(!1),al=vr(null),ll=null,Fs=null,hu=null;function fu(){hu=Fs=ll=null}function du(n){var r=al.current;Bt(al),n._currentValue=r}function pu(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function Os(n,r){ll=n,hu=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(kn=!0),n.firstContext=null)}function ti(n){var r=n._currentValue;if(hu!==n)if(n={context:n,memoizedValue:r,next:null},Fs===null){if(ll===null)throw Error(t(308));Fs=n,ll.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return r}var Qr=null;function mu(n){Qr===null?Qr=[n]:Qr.push(n)}function dp(n,r,l,h){var p=r.interleaved;return p===null?(l.next=l,mu(r)):(l.next=p.next,p.next=l),r.interleaved=l,Vi(n,h)}function Vi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Sr=!1;function gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Mr(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,Tt&2){var p=h.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),h.pending=r,Vi(n,l)}return p=h.interleaved,p===null?(r.next=r,mu(h)):(r.next=p.next,p.next=r),h.interleaved=r,Vi(n,l)}function cl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,sn(n,l)}}function mp(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=E:v=v.next=E,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function ul(n,r,l,h){var p=n.updateQueue;Sr=!1;var v=p.firstBaseUpdate,E=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var F=I,ee=F.next;F.next=null,E===null?v=ee:E.next=ee,E=F;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==E&&(I===null?_e.firstBaseUpdate=ee:I.next=ee,_e.lastBaseUpdate=F))}if(v!==null){var ye=p.baseState;E=0,_e=ee=F=null,I=v;do{var me=I.lane,Ie=I.eventTime;if((h&me)===me){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,Ve=I;switch(me=r,Ie=l,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){ye=ze.call(Ie,ye,me);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(Ie,ye,me):ze,me==null)break e;ye=re({},ye,me);break e;case 2:Sr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,me=p.effects,me===null?p.effects=[I]:me.push(I))}else Ie={eventTime:Ie,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ee=_e=Ie,F=ye):_e=_e.next=Ie,E|=me;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;me=I,I=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(_e===null&&(F=ye),p.baseState=F,p.firstBaseUpdate=ee,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do E|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);ts|=E,n.lanes=E,n.memoizedState=ye}}function gp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var $o={},Ti=vr($o),Zo=vr($o),Qo=vr($o);function Jr(n){if(n===$o)throw Error(t(174));return n}function _u(n,r){switch(Ft(Qo,r),Ft(Zo,n),Ft(Ti,$o),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:We(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=We(r,n)}Bt(Ti),Ft(Ti,r)}function ks(){Bt(Ti),Bt(Zo),Bt(Qo)}function _p(n){Jr(Qo.current);var r=Jr(Ti.current),l=We(r,n.type);r!==l&&(Ft(Zo,n),Ft(Ti,l))}function vu(n){Zo.current===n&&(Bt(Ti),Bt(Zo))}var Vt=vr(0);function hl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var yu=[];function xu(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var fl=C.ReactCurrentDispatcher,Su=C.ReactCurrentBatchConfig,es=0,Gt=null,Qt=null,on=null,dl=!1,Jo=!1,ea=0,e0=0;function vn(){throw Error(t(321))}function Mu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!li(n[l],r[l]))return!1;return!0}function Eu(n,r,l,h,p,v){if(es=v,Gt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,fl.current=n===null||n.memoizedState===null?r0:s0,n=l(h,p),Jo){v=0;do{if(Jo=!1,ea=0,25<=v)throw Error(t(301));v+=1,on=Qt=null,r.updateQueue=null,fl.current=o0,n=l(h,p)}while(Jo)}if(fl.current=gl,r=Qt!==null&&Qt.next!==null,es=0,on=Qt=Gt=null,dl=!1,r)throw Error(t(300));return n}function Tu(){var n=ea!==0;return ea=0,n}function Ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Gt.memoizedState=on=n:on=on.next=n,on}function ni(){if(Qt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var r=on===null?Gt.memoizedState:on.next;if(r!==null)on=r,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},on===null?Gt.memoizedState=on=n:on=on.next=n}return on}function ta(n,r){return typeof r=="function"?r(n):r}function Au(n){var r=ni(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=Qt,p=h.baseQueue,v=l.pending;if(v!==null){if(p!==null){var E=p.next;p.next=v.next,v.next=E}h.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,h=h.baseState;var I=E=null,F=null,ee=v;do{var _e=ee.lane;if((es&_e)===_e)F!==null&&(F=F.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),h=ee.hasEagerState?ee.eagerState:n(h,ee.action);else{var ye={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};F===null?(I=F=ye,E=h):F=F.next=ye,Gt.lanes|=_e,ts|=_e}ee=ee.next}while(ee!==null&&ee!==v);F===null?E=h:F.next=I,li(h,r.memoizedState)||(kn=!0),r.memoizedState=h,r.baseState=E,r.baseQueue=F,l.lastRenderedState=h}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Gt.lanes|=v,ts|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function wu(n){var r=ni(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do v=n(v,E.action),E=E.next;while(E!==p);li(v,r.memoizedState)||(kn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,h]}function vp(){}function yp(n,r){var l=Gt,h=ni(),p=r(),v=!li(h.memoizedState,p);if(v&&(h.memoizedState=p,kn=!0),h=h.queue,Ru(Mp.bind(null,l,h,n),[n]),h.getSnapshot!==r||v||on!==null&&on.memoizedState.tag&1){if(l.flags|=2048,na(9,Sp.bind(null,l,h,p,r),void 0,null),an===null)throw Error(t(349));es&30||xp(l,r,p)}return p}function xp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Gt.updateQueue,r===null?(r={lastEffect:null,stores:null},Gt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Sp(n,r,l,h){r.value=l,r.getSnapshot=h,Ep(r)&&Tp(n)}function Mp(n,r,l){return l(function(){Ep(r)&&Tp(n)})}function Ep(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!li(n,l)}catch{return!0}}function Tp(n){var r=Vi(n,1);r!==null&&di(r,n,1,-1)}function Ap(n){var r=Ai();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},r.queue=n,n=n.dispatch=i0.bind(null,Gt,n),[r.memoizedState,n]}function na(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=Gt.updateQueue,r===null?(r={lastEffect:null,stores:null},Gt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function wp(){return ni().memoizedState}function pl(n,r,l,h){var p=Ai();Gt.flags|=n,p.memoizedState=na(1|r,l,void 0,h===void 0?null:h)}function ml(n,r,l,h){var p=ni();h=h===void 0?null:h;var v=void 0;if(Qt!==null){var E=Qt.memoizedState;if(v=E.destroy,h!==null&&Mu(h,E.deps)){p.memoizedState=na(r,l,v,h);return}}Gt.flags|=n,p.memoizedState=na(1|r,l,v,h)}function Rp(n,r){return pl(8390656,8,n,r)}function Ru(n,r){return ml(2048,8,n,r)}function Cp(n,r){return ml(4,2,n,r)}function bp(n,r){return ml(4,4,n,r)}function Pp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Lp(n,r,l){return l=l!=null?l.concat([n]):null,ml(4,4,Pp.bind(null,r,n),l)}function Cu(){}function Ip(n,r){var l=ni();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Mu(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function Dp(n,r){var l=ni();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Mu(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function Np(n,r,l){return es&21?(li(l,r)||(l=Nt(),Gt.lanes|=l,ts|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,kn=!0),n.memoizedState=l)}function t0(n,r){var l=Et;Et=l!==0&&4>l?l:4,n(!0);var h=Su.transition;Su.transition={};try{n(!1),r()}finally{Et=l,Su.transition=h}}function Up(){return ni().memoizedState}function n0(n,r,l){var h=wr(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Fp(n))Op(r,l);else if(l=dp(n,r,l,h),l!==null){var p=Cn();di(l,n,h,p),kp(l,r,h)}}function i0(n,r,l){var h=wr(n),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Fp(n))Op(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var E=r.lastRenderedState,I=v(E,l);if(p.hasEagerState=!0,p.eagerState=I,li(I,E)){var F=r.interleaved;F===null?(p.next=p,mu(r)):(p.next=F.next,F.next=p),r.interleaved=p;return}}catch{}finally{}l=dp(n,r,p,h),l!==null&&(p=Cn(),di(l,n,h,p),kp(l,r,h))}}function Fp(n){var r=n.alternate;return n===Gt||r!==null&&r===Gt}function Op(n,r){Jo=dl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function kp(n,r,l){if(l&4194240){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,sn(n,l)}}var gl={readContext:ti,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},r0={readContext:ti,useCallback:function(n,r){return Ai().memoizedState=[n,r===void 0?null:r],n},useContext:ti,useEffect:Rp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,pl(4194308,4,Pp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return pl(4194308,4,n,r)},useInsertionEffect:function(n,r){return pl(4,2,n,r)},useMemo:function(n,r){var l=Ai();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Ai();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=n0.bind(null,Gt,n),[h.memoizedState,n]},useRef:function(n){var r=Ai();return n={current:n},r.memoizedState=n},useState:Ap,useDebugValue:Cu,useDeferredValue:function(n){return Ai().memoizedState=n},useTransition:function(){var n=Ap(!1),r=n[0];return n=t0.bind(null,n[1]),Ai().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=Gt,p=Ai();if(Ht){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),an===null)throw Error(t(349));es&30||xp(h,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,Rp(Mp.bind(null,h,v,n),[n]),h.flags|=2048,na(9,Sp.bind(null,h,v,l,r),void 0,null),l},useId:function(){var n=Ai(),r=an.identifierPrefix;if(Ht){var l=Hi,h=zi;l=(h&~(1<<32-ot(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=ea++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=e0++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},s0={readContext:ti,useCallback:Ip,useContext:ti,useEffect:Ru,useImperativeHandle:Lp,useInsertionEffect:Cp,useLayoutEffect:bp,useMemo:Dp,useReducer:Au,useRef:wp,useState:function(){return Au(ta)},useDebugValue:Cu,useDeferredValue:function(n){var r=ni();return Np(r,Qt.memoizedState,n)},useTransition:function(){var n=Au(ta)[0],r=ni().memoizedState;return[n,r]},useMutableSource:vp,useSyncExternalStore:yp,useId:Up,unstable_isNewReconciler:!1},o0={readContext:ti,useCallback:Ip,useContext:ti,useEffect:Ru,useImperativeHandle:Lp,useInsertionEffect:Cp,useLayoutEffect:bp,useMemo:Dp,useReducer:wu,useRef:wp,useState:function(){return wu(ta)},useDebugValue:Cu,useDeferredValue:function(n){var r=ni();return Qt===null?r.memoizedState=n:Np(r,Qt.memoizedState,n)},useTransition:function(){var n=wu(ta)[0],r=ni().memoizedState;return[n,r]},useMutableSource:vp,useSyncExternalStore:yp,useId:Up,unstable_isNewReconciler:!1};function ui(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function bu(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:re({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var _l={isMounted:function(n){return(n=n._reactInternals)?Si(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=Cn(),p=wr(n),v=Gi(h,p);v.payload=r,l!=null&&(v.callback=l),r=Mr(n,v,p),r!==null&&(di(r,n,p,h),cl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=Cn(),p=wr(n),v=Gi(h,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Mr(n,v,p),r!==null&&(di(r,n,p,h),cl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Cn(),h=wr(n),p=Gi(l,h);p.tag=2,r!=null&&(p.callback=r),r=Mr(n,p,h),r!==null&&(di(r,n,h,l),cl(r,n,h))}};function Bp(n,r,l,h,p,v,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,v,E):r.prototype&&r.prototype.isPureReactComponent?!Vo(l,h)||!Vo(p,v):!0}function zp(n,r,l){var h=!1,p=yr,v=r.contextType;return typeof v=="object"&&v!==null?v=ti(v):(p=On(r)?Kr:_n.current,h=r.contextTypes,v=(h=h!=null)?Ls(n,p):yr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=_l,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Hp(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&_l.enqueueReplaceState(r,r.state,null)}function Pu(n,r,l,h){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},gu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=ti(v):(v=On(r)?Kr:_n.current,p.context=Ls(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(bu(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&_l.enqueueReplaceState(p,p.state,null),ul(n,l,p,h),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,r){try{var l="",h=r;do l+=fe(h),h=h.return;while(h);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function Lu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Iu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var a0=typeof WeakMap=="function"?WeakMap:Map;function Vp(n,r,l){l=Gi(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){Tl||(Tl=!0,Yu=h),Iu(n,r)},l}function Gp(n,r,l){l=Gi(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var p=r.value;l.payload=function(){return h(p)},l.callback=function(){Iu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Iu(n,r),typeof h!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),l}function Wp(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new a0;var p=new Set;h.set(r,p)}else p=h.get(r),p===void 0&&(p=new Set,h.set(r,p));p.has(l)||(p.add(l),n=S0.bind(null,n,r,l),r.then(n,n))}function Xp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function jp(n,r,l,h,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Gi(-1,1),r.tag=2,Mr(l,r,1))),l.lanes|=1),n)}var l0=C.ReactCurrentOwner,kn=!1;function Rn(n,r,l,h){r.child=n===null?fp(r,null,l,h):Us(r,n.child,l,h)}function Yp(n,r,l,h,p){l=l.render;var v=r.ref;return Os(r,p),h=Eu(n,r,l,h,v,p),l=Tu(),n!==null&&!kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Wi(n,r,p)):(Ht&&l&&ou(r),r.flags|=1,Rn(n,r,h,p),r.child)}function qp(n,r,l,h,p){if(n===null){var v=l.type;return typeof v=="function"&&!eh(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Kp(n,r,v,h,p)):(n=Pl(l.type,null,h,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,!(n.lanes&p)){var E=v.memoizedProps;if(l=l.compare,l=l!==null?l:Vo,l(E,h)&&n.ref===r.ref)return Wi(n,r,p)}return r.flags|=1,n=Cr(v,h),n.ref=r.ref,n.return=r,r.child=n}function Kp(n,r,l,h,p){if(n!==null){var v=n.memoizedProps;if(Vo(v,h)&&n.ref===r.ref)if(kn=!1,r.pendingProps=h=v,(n.lanes&p)!==0)n.flags&131072&&(kn=!0);else return r.lanes=n.lanes,Wi(n,r,p)}return Du(n,r,l,h,p)}function $p(n,r,l){var h=r.pendingProps,p=h.children,v=n!==null?n.memoizedState:null;if(h.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Hs,qn),qn|=l;else{if(!(l&1073741824))return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ft(Hs,qn),qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,Ft(Hs,qn),qn|=h}else v!==null?(h=v.baseLanes|l,r.memoizedState=null):h=l,Ft(Hs,qn),qn|=h;return Rn(n,r,p,l),r.child}function Zp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Du(n,r,l,h,p){var v=On(l)?Kr:_n.current;return v=Ls(r,v),Os(r,p),l=Eu(n,r,l,h,v,p),h=Tu(),n!==null&&!kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Wi(n,r,p)):(Ht&&h&&ou(r),r.flags|=1,Rn(n,r,l,p),r.child)}function Qp(n,r,l,h,p){if(On(l)){var v=!0;tl(r)}else v=!1;if(Os(r,p),r.stateNode===null)yl(n,r),zp(r,l,h),Pu(r,l,h,p),h=!0;else if(n===null){var E=r.stateNode,I=r.memoizedProps;E.props=I;var F=E.context,ee=l.contextType;typeof ee=="object"&&ee!==null?ee=ti(ee):(ee=On(l)?Kr:_n.current,ee=Ls(r,ee));var _e=l.getDerivedStateFromProps,ye=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==h||F!==ee)&&Hp(r,E,h,ee),Sr=!1;var me=r.memoizedState;E.state=me,ul(r,h,E,p),F=r.memoizedState,I!==h||me!==F||Fn.current||Sr?(typeof _e=="function"&&(bu(r,l,_e,h),F=r.memoizedState),(I=Sr||Bp(r,l,I,h,me,F,ee))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=F),E.props=h,E.state=F,E.context=ee,h=I):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{E=r.stateNode,pp(n,r),I=r.memoizedProps,ee=r.type===r.elementType?I:ui(r.type,I),E.props=ee,ye=r.pendingProps,me=E.context,F=l.contextType,typeof F=="object"&&F!==null?F=ti(F):(F=On(l)?Kr:_n.current,F=Ls(r,F));var Ie=l.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==ye||me!==F)&&Hp(r,E,h,F),Sr=!1,me=r.memoizedState,E.state=me,ul(r,h,E,p);var ze=r.memoizedState;I!==ye||me!==ze||Fn.current||Sr?(typeof Ie=="function"&&(bu(r,l,Ie,h),ze=r.memoizedState),(ee=Sr||Bp(r,l,ee,h,me,ze,F)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,ze,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,ze,F)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=ze),E.props=h,E.state=ze,E.context=F,h=ee):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),h=!1)}return Nu(n,r,l,h,v,p)}function Nu(n,r,l,h,p,v){Zp(n,r);var E=(r.flags&128)!==0;if(!h&&!E)return p&&ip(r,l,!1),Wi(n,r,v);h=r.stateNode,l0.current=r;var I=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&E?(r.child=Us(r,n.child,null,v),r.child=Us(r,null,I,v)):Rn(n,r,I,v),r.memoizedState=h.state,p&&ip(r,l,!0),r.child}function Jp(n){var r=n.stateNode;r.pendingContext?tp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&tp(n,r.context,!1),_u(n,r.containerInfo)}function em(n,r,l,h,p){return Ns(),uu(p),r.flags|=256,Rn(n,r,l,h),r.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function tm(n,r,l){var h=r.pendingProps,p=Vt.current,v=!1,E=(r.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(p&2)!==0),I?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ft(Vt,p&1),n===null)return cu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(E=h.children,n=h.fallback,v?(h=r.mode,v=r.child,E={mode:"hidden",children:E},!(h&1)&&v!==null?(v.childLanes=0,v.pendingProps=E):v=Ll(E,h,0,null),n=ss(n,h,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Fu(l),r.memoizedState=Uu,n):Ou(r,E));if(p=n.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return c0(n,r,E,h,I,p,l);if(v){v=h.fallback,E=r.mode,p=n.child,I=p.sibling;var F={mode:"hidden",children:h.children};return!(E&1)&&r.child!==p?(h=r.child,h.childLanes=0,h.pendingProps=F,r.deletions=null):(h=Cr(p,F),h.subtreeFlags=p.subtreeFlags&14680064),I!==null?v=Cr(I,v):(v=ss(v,E,l,null),v.flags|=2),v.return=r,h.return=r,h.sibling=v,r.child=h,h=v,v=r.child,E=n.child.memoizedState,E=E===null?Fu(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},v.memoizedState=E,v.childLanes=n.childLanes&~l,r.memoizedState=Uu,h}return v=n.child,n=v.sibling,h=Cr(v,{mode:"visible",children:h.children}),!(r.mode&1)&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function Ou(n,r){return r=Ll({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function vl(n,r,l,h){return h!==null&&uu(h),Us(r,n.child,null,l),n=Ou(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function c0(n,r,l,h,p,v,E){if(l)return r.flags&256?(r.flags&=-257,h=Lu(Error(t(422))),vl(n,r,E,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=h.fallback,p=r.mode,h=Ll({mode:"visible",children:h.children},p,0,null),v=ss(v,p,E,null),v.flags|=2,h.return=r,v.return=r,h.sibling=v,r.child=h,r.mode&1&&Us(r,n.child,null,E),r.child.memoizedState=Fu(E),r.memoizedState=Uu,v);if(!(r.mode&1))return vl(n,r,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var I=h.dgst;return h=I,v=Error(t(419)),h=Lu(v,h,void 0),vl(n,r,E,h)}if(I=(E&n.childLanes)!==0,kn||I){if(h=an,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|E)?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Vi(n,p),di(h,n,p,-1))}return Ju(),h=Lu(Error(t(421))),vl(n,r,E,h)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=M0.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Yn=_r(p.nextSibling),jn=r,Ht=!0,ci=null,n!==null&&(Jn[ei++]=zi,Jn[ei++]=Hi,Jn[ei++]=$r,zi=n.id,Hi=n.overflow,$r=r),r=Ou(r,h.children),r.flags|=4096,r)}function nm(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),pu(n.return,r,l)}function ku(n,r,l,h,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=p)}function im(n,r,l){var h=r.pendingProps,p=h.revealOrder,v=h.tail;if(Rn(n,r,h.children,l),h=Vt.current,h&2)h=h&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&nm(n,l,r);else if(n.tag===19)nm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(Ft(Vt,h),!(r.mode&1))r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&hl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),ku(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&hl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}ku(r,!0,l,null,v);break;case"together":ku(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function yl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Wi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ts|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Cr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Cr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function u0(n,r,l){switch(r.tag){case 3:Jp(r),Ns();break;case 5:_p(r);break;case 1:On(r.type)&&tl(r);break;case 4:_u(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,p=r.memoizedProps.value;Ft(al,h._currentValue),h._currentValue=p;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(Ft(Vt,Vt.current&1),r.flags|=128,null):l&r.child.childLanes?tm(n,r,l):(Ft(Vt,Vt.current&1),n=Wi(n,r,l),n!==null?n.sibling:null);Ft(Vt,Vt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,n.flags&128){if(h)return im(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ft(Vt,Vt.current),h)break;return null;case 22:case 23:return r.lanes=0,$p(n,r,l)}return Wi(n,r,l)}var rm,Bu,sm,om;rm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Bu=function(){},sm=function(n,r,l,h){var p=n.memoizedProps;if(p!==h){n=r.stateNode,Jr(Ti.current);var v=null;switch(l){case"input":p=k(n,p),h=k(n,h),v=[];break;case"select":p=re({},p,{value:void 0}),h=re({},h,{value:void 0}),v=[];break;case"textarea":p=A(n,p),h=A(n,h),v=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=Qa)}dt(l,h);var E;l=null;for(ee in p)if(!h.hasOwnProperty(ee)&&p.hasOwnProperty(ee)&&p[ee]!=null)if(ee==="style"){var I=p[ee];for(E in I)I.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(s.hasOwnProperty(ee)?v||(v=[]):(v=v||[]).push(ee,null));for(ee in h){var F=h[ee];if(I=p!=null?p[ee]:void 0,h.hasOwnProperty(ee)&&F!==I&&(F!=null||I!=null))if(ee==="style")if(I){for(E in I)!I.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in F)F.hasOwnProperty(E)&&I[E]!==F[E]&&(l||(l={}),l[E]=F[E])}else l||(v||(v=[]),v.push(ee,l)),l=F;else ee==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,I=I?I.__html:void 0,F!=null&&I!==F&&(v=v||[]).push(ee,F)):ee==="children"?typeof F!="string"&&typeof F!="number"||(v=v||[]).push(ee,""+F):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(s.hasOwnProperty(ee)?(F!=null&&ee==="onScroll"&&kt("scroll",n),v||I===F||(v=[])):(v=v||[]).push(ee,F))}l&&(v=v||[]).push("style",l);var ee=v;(r.updateQueue=ee)&&(r.flags|=4)}},om=function(n,r,l,h){l!==h&&(r.flags|=4)};function ia(n,r){if(!Ht)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function yn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function h0(n,r,l){var h=r.pendingProps;switch(au(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(r),null;case 1:return On(r.type)&&el(),yn(r),null;case 3:return h=r.stateNode,ks(),Bt(Fn),Bt(_n),xu(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(sl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ci!==null&&($u(ci),ci=null))),Bu(n,r),yn(r),null;case 5:vu(r);var p=Jr(Qo.current);if(l=r.type,n!==null&&r.stateNode!=null)sm(n,r,l,h,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return yn(r),null}if(n=Jr(Ti.current),sl(r)){h=r.stateNode,l=r.type;var v=r.memoizedProps;switch(h[Ei]=r,h[Yo]=v,n=(r.mode&1)!==0,l){case"dialog":kt("cancel",h),kt("close",h);break;case"iframe":case"object":case"embed":kt("load",h);break;case"video":case"audio":for(p=0;p<Wo.length;p++)kt(Wo[p],h);break;case"source":kt("error",h);break;case"img":case"image":case"link":kt("error",h),kt("load",h);break;case"details":kt("toggle",h);break;case"input":Tn(h,v),kt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},kt("invalid",h);break;case"textarea":Z(h,v),kt("invalid",h)}dt(l,v),p=null;for(var E in v)if(v.hasOwnProperty(E)){var I=v[E];E==="children"?typeof I=="string"?h.textContent!==I&&(v.suppressHydrationWarning!==!0&&Za(h.textContent,I,n),p=["children",I]):typeof I=="number"&&h.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&Za(h.textContent,I,n),p=["children",""+I]):s.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&kt("scroll",h)}switch(l){case"input":Lt(h),je(h,v,!0);break;case"textarea":Lt(h),ge(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=Qa)}h=p,r.updateQueue=h,h!==null&&(r.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=E.createElement(l,{is:h.is}):(n=E.createElement(l),l==="select"&&(E=n,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):n=E.createElementNS(n,l),n[Ei]=r,n[Yo]=h,rm(n,r,!1,!1),r.stateNode=n;e:{switch(E=it(l,h),l){case"dialog":kt("cancel",n),kt("close",n),p=h;break;case"iframe":case"object":case"embed":kt("load",n),p=h;break;case"video":case"audio":for(p=0;p<Wo.length;p++)kt(Wo[p],n);p=h;break;case"source":kt("error",n),p=h;break;case"img":case"image":case"link":kt("error",n),kt("load",n),p=h;break;case"details":kt("toggle",n),p=h;break;case"input":Tn(n,h),p=k(n,h),kt("invalid",n);break;case"option":p=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},p=re({},h,{value:void 0}),kt("invalid",n);break;case"textarea":Z(n,h),p=A(n,h),kt("invalid",n);break;default:p=h}dt(l,p),I=p;for(v in I)if(I.hasOwnProperty(v)){var F=I[v];v==="style"?Je(n,F):v==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ue(n,F)):v==="children"?typeof F=="string"?(l!=="textarea"||F!=="")&&ut(n,F):typeof F=="number"&&ut(n,""+F):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?F!=null&&v==="onScroll"&&kt("scroll",n):F!=null&&L(n,v,F,E))}switch(l){case"input":Lt(n),je(n,h,!1);break;case"textarea":Lt(n),ge(n);break;case"option":h.value!=null&&n.setAttribute("value",""+Te(h.value));break;case"select":n.multiple=!!h.multiple,v=h.value,v!=null?P(n,!!h.multiple,v,!1):h.defaultValue!=null&&P(n,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Qa)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return yn(r),null;case 6:if(n&&r.stateNode!=null)om(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=Jr(Qo.current),Jr(Ti.current),sl(r)){if(h=r.stateNode,l=r.memoizedProps,h[Ei]=r,(v=h.nodeValue!==l)&&(n=jn,n!==null))switch(n.tag){case 3:Za(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Za(h.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Ei]=r,r.stateNode=h}return yn(r),null;case 13:if(Bt(Vt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&Yn!==null&&r.mode&1&&!(r.flags&128))cp(),Ns(),r.flags|=98560,v=!1;else if(v=sl(r),h!==null&&h.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Ei]=r}else Ns(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;yn(r),v=!1}else ci!==null&&($u(ci),ci=null),v=!0;if(!v)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,r.mode&1&&(n===null||Vt.current&1?Jt===0&&(Jt=3):Ju())),r.updateQueue!==null&&(r.flags|=4),yn(r),null);case 4:return ks(),Bu(n,r),n===null&&Xo(r.stateNode.containerInfo),yn(r),null;case 10:return du(r.type._context),yn(r),null;case 17:return On(r.type)&&el(),yn(r),null;case 19:if(Bt(Vt),v=r.memoizedState,v===null)return yn(r),null;if(h=(r.flags&128)!==0,E=v.rendering,E===null)if(h)ia(v,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(E=hl(n),E!==null){for(r.flags|=128,ia(v,!1),h=E.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)v=l,n=h,v.flags&=14680066,E=v.alternate,E===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=E.childLanes,v.lanes=E.lanes,v.child=E.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=E.memoizedProps,v.memoizedState=E.memoizedState,v.updateQueue=E.updateQueue,v.type=E.type,n=E.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ft(Vt,Vt.current&1|2),r.child}n=n.sibling}v.tail!==null&&K()>Vs&&(r.flags|=128,h=!0,ia(v,!1),r.lanes=4194304)}else{if(!h)if(n=hl(E),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ia(v,!0),v.tail===null&&v.tailMode==="hidden"&&!E.alternate&&!Ht)return yn(r),null}else 2*K()-v.renderingStartTime>Vs&&l!==1073741824&&(r.flags|=128,h=!0,ia(v,!1),r.lanes=4194304);v.isBackwards?(E.sibling=r.child,r.child=E):(l=v.last,l!==null?l.sibling=E:r.child=E,v.last=E)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=K(),r.sibling=null,l=Vt.current,Ft(Vt,h?l&1|2:l&1),r):(yn(r),null);case 22:case 23:return Qu(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&r.mode&1?qn&1073741824&&(yn(r),r.subtreeFlags&6&&(r.flags|=8192)):yn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function f0(n,r){switch(au(r),r.tag){case 1:return On(r.type)&&el(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ks(),Bt(Fn),Bt(_n),xu(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return vu(r),null;case 13:if(Bt(Vt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ns()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Bt(Vt),null;case 4:return ks(),null;case 10:return du(r.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var xl=!1,xn=!1,d0=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function zs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Yt(n,r,h)}else l.current=null}function zu(n,r,l){try{l()}catch(h){Yt(n,r,h)}}var am=!1;function p0(n,r){if(Qc=za,n=Bd(),Wc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var E=0,I=-1,F=-1,ee=0,_e=0,ye=n,me=null;t:for(;;){for(var Ie;ye!==l||p!==0&&ye.nodeType!==3||(I=E+p),ye!==v||h!==0&&ye.nodeType!==3||(F=E+h),ye.nodeType===3&&(E+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)me=ye,ye=Ie;for(;;){if(ye===n)break t;if(me===l&&++ee===p&&(I=E),me===v&&++_e===h&&(F=E),(Ie=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Ie}l=I===-1||F===-1?null:{start:I,end:F}}else l=null}l=l||{start:0,end:0}}else l=null;for(Jc={focusedElem:n,selectionRange:l},za=!1,Fe=r;Fe!==null;)if(r=Fe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Fe=n;else for(;Fe!==null;){r=Fe;try{var ze=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,qt=ze.memoizedState,q=r.stateNode,H=q.getSnapshotBeforeUpdate(r.elementType===r.type?Ve:ui(r.type,Ve),qt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=r.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Yt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Fe=n;break}Fe=r.return}return ze=am,am=!1,ze}function ra(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&zu(r,l,v)}p=p.next}while(p!==h)}}function Sl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function Hu(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function lm(n){var r=n.alternate;r!==null&&(n.alternate=null,lm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ei],delete r[Yo],delete r[iu],delete r[$v],delete r[Zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cm(n){return n.tag===5||n.tag===3||n.tag===4}function um(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vu(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Qa));else if(h!==4&&(n=n.child,n!==null))for(Vu(n,r,l),n=n.sibling;n!==null;)Vu(n,r,l),n=n.sibling}function Gu(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(Gu(n,r,l),n=n.sibling;n!==null;)Gu(n,r,l),n=n.sibling}var dn=null,hi=!1;function Er(n,r,l){for(l=l.child;l!==null;)hm(n,r,l),l=l.sibling}function hm(n,r,l){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,l)}catch{}switch(l.tag){case 5:xn||zs(l,r);case 6:var h=dn,p=hi;dn=null,Er(n,r,l),dn=h,hi=p,dn!==null&&(hi?(n=dn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):dn.removeChild(l.stateNode));break;case 18:dn!==null&&(hi?(n=dn,l=l.stateNode,n.nodeType===8?nu(n.parentNode,l):n.nodeType===1&&nu(n,l),Fo(n)):nu(dn,l.stateNode));break;case 4:h=dn,p=hi,dn=l.stateNode.containerInfo,hi=!0,Er(n,r,l),dn=h,hi=p;break;case 0:case 11:case 14:case 15:if(!xn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var v=p,E=v.destroy;v=v.tag,E!==void 0&&(v&2||v&4)&&zu(l,r,E),p=p.next}while(p!==h)}Er(n,r,l);break;case 1:if(!xn&&(zs(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(I){Yt(l,r,I)}Er(n,r,l);break;case 21:Er(n,r,l);break;case 22:l.mode&1?(xn=(h=xn)||l.memoizedState!==null,Er(n,r,l),xn=h):Er(n,r,l);break;default:Er(n,r,l)}}function fm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new d0),r.forEach(function(h){var p=E0.bind(null,n,h);l.has(h)||(l.add(h),h.then(p,p))})}}function fi(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var v=n,E=r,I=E;e:for(;I!==null;){switch(I.tag){case 5:dn=I.stateNode,hi=!1;break e;case 3:dn=I.stateNode.containerInfo,hi=!0;break e;case 4:dn=I.stateNode.containerInfo,hi=!0;break e}I=I.return}if(dn===null)throw Error(t(160));hm(v,E,p),dn=null,hi=!1;var F=p.alternate;F!==null&&(F.return=null),p.return=null}catch(ee){Yt(p,r,ee)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)dm(r,n),r=r.sibling}function dm(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(r,n),wi(n),h&4){try{ra(3,n,n.return),Sl(3,n)}catch(Ve){Yt(n,n.return,Ve)}try{ra(5,n,n.return)}catch(Ve){Yt(n,n.return,Ve)}}break;case 1:fi(r,n),wi(n),h&512&&l!==null&&zs(l,l.return);break;case 5:if(fi(r,n),wi(n),h&512&&l!==null&&zs(l,l.return),n.flags&32){var p=n.stateNode;try{ut(p,"")}catch(Ve){Yt(n,n.return,Ve)}}if(h&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,E=l!==null?l.memoizedProps:v,I=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&mt(p,v),it(I,E);var ee=it(I,v);for(E=0;E<F.length;E+=2){var _e=F[E],ye=F[E+1];_e==="style"?Je(p,ye):_e==="dangerouslySetInnerHTML"?Ue(p,ye):_e==="children"?ut(p,ye):L(p,_e,ye,ee)}switch(I){case"input":ft(p,v);break;case"textarea":pe(p,v);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Ie=v.value;Ie!=null?P(p,!!v.multiple,Ie,!1):me!==!!v.multiple&&(v.defaultValue!=null?P(p,!!v.multiple,v.defaultValue,!0):P(p,!!v.multiple,v.multiple?[]:"",!1))}p[Yo]=v}catch(Ve){Yt(n,n.return,Ve)}}break;case 6:if(fi(r,n),wi(n),h&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ve){Yt(n,n.return,Ve)}}break;case 3:if(fi(r,n),wi(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Fo(r.containerInfo)}catch(Ve){Yt(n,n.return,Ve)}break;case 4:fi(r,n),wi(n);break;case 13:fi(r,n),wi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(ju=K())),h&4&&fm(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(xn=(ee=xn)||_e,fi(r,n),xn=ee):fi(r,n),wi(n),h&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&n.mode&1)for(Fe=n,_e=n.child;_e!==null;){for(ye=Fe=_e;Fe!==null;){switch(me=Fe,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:ra(4,me,me.return);break;case 1:zs(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){h=me,l=me.return;try{r=h,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(Ve){Yt(h,l,Ve)}}break;case 5:zs(me,me.return);break;case 22:if(me.memoizedState!==null){gm(ye);continue}}Ie!==null?(Ie.return=me,Fe=Ie):gm(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{p=ye.stateNode,ee?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=ye.stateNode,F=ye.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,I.style.display=qe("display",E))}catch(Ve){Yt(n,n.return,Ve)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(Ve){Yt(n,n.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:fi(r,n),wi(n),h&4&&fm(n);break;case 21:break;default:fi(r,n),wi(n)}}function wi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(cm(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ut(p,""),h.flags&=-33);var v=um(n);Gu(n,v,p);break;case 3:case 4:var E=h.stateNode.containerInfo,I=um(n);Vu(n,I,E);break;default:throw Error(t(161))}}catch(F){Yt(n,n.return,F)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function m0(n,r,l){Fe=n,pm(n)}function pm(n,r,l){for(var h=(n.mode&1)!==0;Fe!==null;){var p=Fe,v=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||xl;if(!E){var I=p.alternate,F=I!==null&&I.memoizedState!==null||xn;I=xl;var ee=xn;if(xl=E,(xn=F)&&!ee)for(Fe=p;Fe!==null;)E=Fe,F=E.child,E.tag===22&&E.memoizedState!==null?_m(p):F!==null?(F.return=E,Fe=F):_m(p);for(;v!==null;)Fe=v,pm(v),v=v.sibling;Fe=p,xl=I,xn=ee}mm(n)}else p.subtreeFlags&8772&&v!==null?(v.return=p,Fe=v):mm(n)}}function mm(n){for(;Fe!==null;){var r=Fe;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:xn||Sl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!xn)if(l===null)h.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:ui(r.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&gp(r,v,h);break;case 3:var E=r.updateQueue;if(E!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}gp(r,E,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var F=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&l.focus();break;case"img":F.src&&(l.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ee=r.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Fo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||r.flags&512&&Hu(r)}catch(me){Yt(r,r.return,me)}}if(r===n){Fe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Fe=l;break}Fe=r.return}}function gm(n){for(;Fe!==null;){var r=Fe;if(r===n){Fe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Fe=l;break}Fe=r.return}}function _m(n){for(;Fe!==null;){var r=Fe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Sl(4,r)}catch(F){Yt(r,l,F)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var p=r.return;try{h.componentDidMount()}catch(F){Yt(r,p,F)}}var v=r.return;try{Hu(r)}catch(F){Yt(r,v,F)}break;case 5:var E=r.return;try{Hu(r)}catch(F){Yt(r,E,F)}}}catch(F){Yt(r,r.return,F)}if(r===n){Fe=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Fe=I;break}Fe=r.return}}var g0=Math.ceil,Ml=C.ReactCurrentDispatcher,Wu=C.ReactCurrentOwner,ii=C.ReactCurrentBatchConfig,Tt=0,an=null,Kt=null,pn=0,qn=0,Hs=vr(0),Jt=0,sa=null,ts=0,El=0,Xu=0,oa=null,Bn=null,ju=0,Vs=1/0,Xi=null,Tl=!1,Yu=null,Tr=null,Al=!1,Ar=null,wl=0,aa=0,qu=null,Rl=-1,Cl=0;function Cn(){return Tt&6?K():Rl!==-1?Rl:Rl=K()}function wr(n){return n.mode&1?Tt&2&&pn!==0?pn&-pn:Jv.transition!==null?(Cl===0&&(Cl=Nt()),Cl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:yd(n.type)),n):1}function di(n,r,l,h){if(50<aa)throw aa=0,qu=null,Error(t(185));rn(n,l,h),(!(Tt&2)||n!==an)&&(n===an&&(!(Tt&2)&&(El|=l),Jt===4&&Rr(n,pn)),zn(n,h),l===1&&Tt===0&&!(r.mode&1)&&(Vs=K()+500,nl&&xr()))}function zn(n,r){var l=n.callbackNode;wn(n,r);var h=mn(n,n===an?pn:0);if(h===0)l!==null&&w(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&w(l),r===1)n.tag===0?Qv(ym.bind(null,n)):rp(ym.bind(null,n)),qv(function(){!(Tt&6)&&xr()}),l=null;else{switch(Mi(h)){case 1:l=xe;break;case 4:l=Re;break;case 16:l=Le;break;case 536870912:l=et;break;default:l=Le}l=Rm(l,vm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function vm(n,r){if(Rl=-1,Cl=0,Tt&6)throw Error(t(327));var l=n.callbackNode;if(Gs()&&n.callbackNode!==l)return null;var h=mn(n,n===an?pn:0);if(h===0)return null;if(h&30||h&n.expiredLanes||r)r=bl(n,h);else{r=h;var p=Tt;Tt|=2;var v=Sm();(an!==n||pn!==r)&&(Xi=null,Vs=K()+500,is(n,r));do try{y0();break}catch(I){xm(n,I)}while(!0);fu(),Ml.current=v,Tt=p,Kt!==null?r=0:(an=null,pn=0,r=Jt)}if(r!==0){if(r===2&&(p=Oi(n),p!==0&&(h=p,r=Ku(n,p))),r===1)throw l=sa,is(n,0),Rr(n,h),zn(n,K()),l;if(r===6)Rr(n,h);else{if(p=n.current.alternate,!(h&30)&&!_0(p)&&(r=bl(n,h),r===2&&(v=Oi(n),v!==0&&(h=v,r=Ku(n,v))),r===1))throw l=sa,is(n,0),Rr(n,h),zn(n,K()),l;switch(n.finishedWork=p,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:rs(n,Bn,Xi);break;case 3:if(Rr(n,h),(h&130023424)===h&&(r=ju+500-K(),10<r)){if(mn(n,0)!==0)break;if(p=n.suspendedLanes,(p&h)!==h){Cn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=tu(rs.bind(null,n,Bn,Xi),r);break}rs(n,Bn,Xi);break;case 4:if(Rr(n,h),(h&4194240)===h)break;for(r=n.eventTimes,p=-1;0<h;){var E=31-ot(h);v=1<<E,E=r[E],E>p&&(p=E),h&=~v}if(h=p,h=K()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*g0(h/1960))-h,10<h){n.timeoutHandle=tu(rs.bind(null,n,Bn,Xi),h);break}rs(n,Bn,Xi);break;case 5:rs(n,Bn,Xi);break;default:throw Error(t(329))}}}return zn(n,K()),n.callbackNode===l?vm.bind(null,n):null}function Ku(n,r){var l=oa;return n.current.memoizedState.isDehydrated&&(is(n,r).flags|=256),n=bl(n,r),n!==2&&(r=Bn,Bn=l,r!==null&&$u(r)),n}function $u(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function _0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],v=p.getSnapshot;p=p.value;try{if(!li(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Rr(n,r){for(r&=~Xu,r&=~El,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ot(r),h=1<<l;n[l]=-1,r&=~h}}function ym(n){if(Tt&6)throw Error(t(327));Gs();var r=mn(n,0);if(!(r&1))return zn(n,K()),null;var l=bl(n,r);if(n.tag!==0&&l===2){var h=Oi(n);h!==0&&(r=h,l=Ku(n,h))}if(l===1)throw l=sa,is(n,0),Rr(n,r),zn(n,K()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,rs(n,Bn,Xi),zn(n,K()),null}function Zu(n,r){var l=Tt;Tt|=1;try{return n(r)}finally{Tt=l,Tt===0&&(Vs=K()+500,nl&&xr())}}function ns(n){Ar!==null&&Ar.tag===0&&!(Tt&6)&&Gs();var r=Tt;Tt|=1;var l=ii.transition,h=Et;try{if(ii.transition=null,Et=1,n)return n()}finally{Et=h,ii.transition=l,Tt=r,!(Tt&6)&&xr()}}function Qu(){qn=Hs.current,Bt(Hs)}function is(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Yv(l)),Kt!==null)for(l=Kt.return;l!==null;){var h=l;switch(au(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&el();break;case 3:ks(),Bt(Fn),Bt(_n),xu();break;case 5:vu(h);break;case 4:ks();break;case 13:Bt(Vt);break;case 19:Bt(Vt);break;case 10:du(h.type._context);break;case 22:case 23:Qu()}l=l.return}if(an=n,Kt=n=Cr(n.current,null),pn=qn=r,Jt=0,sa=null,Xu=El=ts=0,Bn=oa=null,Qr!==null){for(r=0;r<Qr.length;r++)if(l=Qr[r],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,v=l.pending;if(v!==null){var E=v.next;v.next=p,h.next=E}l.pending=h}Qr=null}return n}function xm(n,r){do{var l=Kt;try{if(fu(),fl.current=gl,dl){for(var h=Gt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}dl=!1}if(es=0,on=Qt=Gt=null,Jo=!1,ea=0,Wu.current=null,l===null||l.return===null){Jt=1,sa=r,Kt=null;break}e:{var v=n,E=l.return,I=l,F=r;if(r=pn,I.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var ee=F,_e=I,ye=_e.tag;if(!(_e.mode&1)&&(ye===0||ye===11||ye===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=Xp(E);if(Ie!==null){Ie.flags&=-257,jp(Ie,E,I,v,r),Ie.mode&1&&Wp(v,ee,r),r=Ie,F=ee;var ze=r.updateQueue;if(ze===null){var Ve=new Set;Ve.add(F),r.updateQueue=Ve}else ze.add(F);break e}else{if(!(r&1)){Wp(v,ee,r),Ju();break e}F=Error(t(426))}}else if(Ht&&I.mode&1){var qt=Xp(E);if(qt!==null){!(qt.flags&65536)&&(qt.flags|=256),jp(qt,E,I,v,r),uu(Bs(F,I));break e}}v=F=Bs(F,I),Jt!==4&&(Jt=2),oa===null?oa=[v]:oa.push(v),v=E;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var q=Vp(v,F,r);mp(v,q);break e;case 1:I=F;var H=v.type,$=v.stateNode;if(!(v.flags&128)&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Tr===null||!Tr.has($)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=Gp(v,I,r);mp(v,Ee);break e}}v=v.return}while(v!==null)}Em(l)}catch(Xe){r=Xe,Kt===l&&l!==null&&(Kt=l=l.return);continue}break}while(!0)}function Sm(){var n=Ml.current;return Ml.current=gl,n===null?gl:n}function Ju(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),an===null||!(ts&268435455)&&!(El&268435455)||Rr(an,pn)}function bl(n,r){var l=Tt;Tt|=2;var h=Sm();(an!==n||pn!==r)&&(Xi=null,is(n,r));do try{v0();break}catch(p){xm(n,p)}while(!0);if(fu(),Tt=l,Ml.current=h,Kt!==null)throw Error(t(261));return an=null,pn=0,Jt}function v0(){for(;Kt!==null;)Mm(Kt)}function y0(){for(;Kt!==null&&!X();)Mm(Kt)}function Mm(n){var r=wm(n.alternate,n,qn);n.memoizedProps=n.pendingProps,r===null?Em(n):Kt=r,Wu.current=null}function Em(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=f0(l,r),l!==null){l.flags&=32767,Kt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,Kt=null;return}}else if(l=h0(l,r,qn),l!==null){Kt=l;return}if(r=r.sibling,r!==null){Kt=r;return}Kt=r=n}while(r!==null);Jt===0&&(Jt=5)}function rs(n,r,l){var h=Et,p=ii.transition;try{ii.transition=null,Et=1,x0(n,r,l,h)}finally{ii.transition=p,Et=h}return null}function x0(n,r,l,h){do Gs();while(Ar!==null);if(Tt&6)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(fn(n,v),n===an&&(Kt=an=null,pn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Al||(Al=!0,Rm(Le,function(){return Gs(),null})),v=(l.flags&15990)!==0,l.subtreeFlags&15990||v){v=ii.transition,ii.transition=null;var E=Et;Et=1;var I=Tt;Tt|=4,Wu.current=null,p0(n,l),dm(l,n),zv(Jc),za=!!Qc,Jc=Qc=null,n.current=l,m0(l),J(),Tt=I,Et=E,ii.transition=v}else n.current=l;if(Al&&(Al=!1,Ar=n,wl=p),v=n.pendingLanes,v===0&&(Tr=null),yt(l.stateNode),zn(n,K()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Tl)throw Tl=!1,n=Yu,Yu=null,n;return wl&1&&n.tag!==0&&Gs(),v=n.pendingLanes,v&1?n===qu?aa++:(aa=0,qu=n):aa=0,xr(),null}function Gs(){if(Ar!==null){var n=Mi(wl),r=ii.transition,l=Et;try{if(ii.transition=null,Et=16>n?16:n,Ar===null)var h=!1;else{if(n=Ar,Ar=null,wl=0,Tt&6)throw Error(t(331));var p=Tt;for(Tt|=4,Fe=n.current;Fe!==null;){var v=Fe,E=v.child;if(Fe.flags&16){var I=v.deletions;if(I!==null){for(var F=0;F<I.length;F++){var ee=I[F];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:ra(8,_e,v)}var ye=_e.child;if(ye!==null)ye.return=_e,Fe=ye;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,Ie=_e.return;if(lm(_e),_e===ee){Fe=null;break}if(me!==null){me.return=Ie,Fe=me;break}Fe=Ie}}}var ze=v.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var qt=Ve.sibling;Ve.sibling=null,Ve=qt}while(Ve!==null)}}Fe=v}}if(v.subtreeFlags&2064&&E!==null)E.return=v,Fe=E;else e:for(;Fe!==null;){if(v=Fe,v.flags&2048)switch(v.tag){case 0:case 11:case 15:ra(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,Fe=q;break e}Fe=v.return}}var H=n.current;for(Fe=H;Fe!==null;){E=Fe;var $=E.child;if(E.subtreeFlags&2064&&$!==null)$.return=E,Fe=$;else e:for(E=H;Fe!==null;){if(I=Fe,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:Sl(9,I)}}catch(Xe){Yt(I,I.return,Xe)}if(I===E){Fe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Fe=Ee;break e}Fe=I.return}}if(Tt=p,xr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,n)}catch{}h=!0}return h}finally{Et=l,ii.transition=r}}return!1}function Tm(n,r,l){r=Bs(l,r),r=Vp(n,r,1),n=Mr(n,r,1),r=Cn(),n!==null&&(rn(n,1,r),zn(n,r))}function Yt(n,r,l){if(n.tag===3)Tm(n,n,l);else for(;r!==null;){if(r.tag===3){Tm(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Tr===null||!Tr.has(h))){n=Bs(l,n),n=Gp(r,n,1),r=Mr(r,n,1),n=Cn(),r!==null&&(rn(r,1,n),zn(r,n));break}}r=r.return}}function S0(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=Cn(),n.pingedLanes|=n.suspendedLanes&l,an===n&&(pn&l)===l&&(Jt===4||Jt===3&&(pn&130023424)===pn&&500>K()-ju?is(n,0):Xu|=l),zn(n,r)}function Am(n,r){r===0&&(n.mode&1?(r=jt,jt<<=1,!(jt&130023424)&&(jt=4194304)):r=1);var l=Cn();n=Vi(n,r),n!==null&&(rn(n,r,l),zn(n,l))}function M0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Am(n,l)}function E0(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Am(n,l)}var wm;wm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Fn.current)kn=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return kn=!1,u0(n,r,l);kn=!!(n.flags&131072)}else kn=!1,Ht&&r.flags&1048576&&sp(r,rl,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;yl(n,r),n=r.pendingProps;var p=Ls(r,_n.current);Os(r,l),p=Eu(null,r,h,n,p,l);var v=Tu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,On(h)?(v=!0,tl(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,gu(r),p.updater=_l,r.stateNode=p,p._reactInternals=r,Pu(r,h,n,l),r=Nu(null,r,h,!0,v,l)):(r.tag=0,Ht&&v&&ou(r),Rn(null,r,p,l),r=r.child),r;case 16:h=r.elementType;e:{switch(yl(n,r),n=r.pendingProps,p=h._init,h=p(h._payload),r.type=h,p=r.tag=A0(h),n=ui(h,n),p){case 0:r=Du(null,r,h,n,l);break e;case 1:r=Qp(null,r,h,n,l);break e;case 11:r=Yp(null,r,h,n,l);break e;case 14:r=qp(null,r,h,ui(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:ui(h,p),Du(n,r,h,p,l);case 1:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:ui(h,p),Qp(n,r,h,p,l);case 3:e:{if(Jp(r),n===null)throw Error(t(387));h=r.pendingProps,v=r.memoizedState,p=v.element,pp(n,r),ul(r,h,null,l);var E=r.memoizedState;if(h=E.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Bs(Error(t(423)),r),r=em(n,r,h,l,p);break e}else if(h!==p){p=Bs(Error(t(424)),r),r=em(n,r,h,l,p);break e}else for(Yn=_r(r.stateNode.containerInfo.firstChild),jn=r,Ht=!0,ci=null,l=fp(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ns(),h===p){r=Wi(n,r,l);break e}Rn(n,r,h,l)}r=r.child}return r;case 5:return _p(r),n===null&&cu(r),h=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,E=p.children,eu(h,p)?E=null:v!==null&&eu(h,v)&&(r.flags|=32),Zp(n,r),Rn(n,r,E,l),r.child;case 6:return n===null&&cu(r),null;case 13:return tm(n,r,l);case 4:return _u(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=Us(r,null,h,l):Rn(n,r,h,l),r.child;case 11:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:ui(h,p),Yp(n,r,h,p,l);case 7:return Rn(n,r,r.pendingProps,l),r.child;case 8:return Rn(n,r,r.pendingProps.children,l),r.child;case 12:return Rn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,p=r.pendingProps,v=r.memoizedProps,E=p.value,Ft(al,h._currentValue),h._currentValue=E,v!==null)if(li(v.value,E)){if(v.children===p.children&&!Fn.current){r=Wi(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var I=v.dependencies;if(I!==null){E=v.child;for(var F=I.firstContext;F!==null;){if(F.context===h){if(v.tag===1){F=Gi(-1,l&-l),F.tag=2;var ee=v.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),ee.pending=F}}v.lanes|=l,F=v.alternate,F!==null&&(F.lanes|=l),pu(v.return,l,r),I.lanes|=l;break}F=F.next}}else if(v.tag===10)E=v.type===r.type?null:v.child;else if(v.tag===18){if(E=v.return,E===null)throw Error(t(341));E.lanes|=l,I=E.alternate,I!==null&&(I.lanes|=l),pu(E,l,r),E=v.sibling}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===r){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}Rn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,h=r.pendingProps.children,Os(r,l),p=ti(p),h=h(p),r.flags|=1,Rn(n,r,h,l),r.child;case 14:return h=r.type,p=ui(h,r.pendingProps),p=ui(h.type,p),qp(n,r,h,p,l);case 15:return Kp(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:ui(h,p),yl(n,r),r.tag=1,On(h)?(n=!0,tl(r)):n=!1,Os(r,l),zp(r,h,p),Pu(r,h,p,l),Nu(null,r,h,!0,n,l);case 19:return im(n,r,l);case 22:return $p(n,r,l)}throw Error(t(156,r.tag))};function Rm(n,r){return Oa(n,r)}function T0(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(n,r,l,h){return new T0(n,r,l,h)}function eh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function A0(n){if(typeof n=="function")return eh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===de)return 14}return 2}function Cr(n,r){var l=n.alternate;return l===null?(l=ri(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Pl(n,r,l,h,p,v){var E=2;if(h=n,typeof n=="function")eh(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return ss(l.children,p,v,r);case j:E=8,p|=8;break;case b:return n=ri(12,l,r,p|2),n.elementType=b,n.lanes=v,n;case te:return n=ri(13,l,r,p),n.elementType=te,n.lanes=v,n;case ue:return n=ri(19,l,r,p),n.elementType=ue,n.lanes=v,n;case le:return Ll(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case oe:E=11;break e;case de:E=14;break e;case se:E=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ri(E,l,r,p),r.elementType=n,r.type=h,r.lanes=v,r}function ss(n,r,l,h){return n=ri(7,n,h,r),n.lanes=l,n}function Ll(n,r,l,h){return n=ri(22,n,h,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function th(n,r,l){return n=ri(6,n,null,r),n.lanes=l,n}function nh(n,r,l){return r=ri(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function w0(n,r,l,h,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function ih(n,r,l,h,p,v,E,I,F){return n=new w0(n,r,l,I,F),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ri(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(v),n}function R0(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function Cm(n){if(!n)return yr;n=n._reactInternals;e:{if(Si(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(On(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(On(l))return np(n,l,r)}return r}function bm(n,r,l,h,p,v,E,I,F){return n=ih(l,h,!0,n,p,v,E,I,F),n.context=Cm(null),l=n.current,h=Cn(),p=wr(l),v=Gi(h,p),v.callback=r??null,Mr(l,v,p),n.current.lanes=p,rn(n,p,h),zn(n,h),n}function Il(n,r,l,h){var p=r.current,v=Cn(),E=wr(p);return l=Cm(l),r.context===null?r.context=l:r.pendingContext=l,r=Gi(v,E),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=Mr(p,r,E),n!==null&&(di(n,p,E,v),cl(n,p,E)),E}function Dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function rh(n,r){Pm(n,r),(n=n.alternate)&&Pm(n,r)}var Lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function sh(n){this._internalRoot=n}Nl.prototype.render=sh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Il(n,r,null,null)},Nl.prototype.unmount=sh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ns(function(){Il(null,n,null,null)}),r[ki]=null}};function Nl(n){this._internalRoot=n}Nl.prototype.unstable_scheduleHydration=function(n){if(n){var r=pd();n={blockedOn:null,target:n,priority:r};for(var l=0;l<pr.length&&r!==0&&r<pr[l].priority;l++);pr.splice(l,0,n),l===0&&_d(n)}};function oh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Im(){}function C0(n,r,l,h,p){if(p){if(typeof h=="function"){var v=h;h=function(){var ee=Dl(E);v.call(ee)}}var E=bm(r,h,n,0,null,!1,!1,"",Im);return n._reactRootContainer=E,n[ki]=E.current,Xo(n.nodeType===8?n.parentNode:n),ns(),E}for(;p=n.lastChild;)n.removeChild(p);if(typeof h=="function"){var I=h;h=function(){var ee=Dl(F);I.call(ee)}}var F=ih(n,0,!1,null,null,!1,!1,"",Im);return n._reactRootContainer=F,n[ki]=F.current,Xo(n.nodeType===8?n.parentNode:n),ns(function(){Il(r,F,l,h)}),F}function Fl(n,r,l,h,p){var v=l._reactRootContainer;if(v){var E=v;if(typeof p=="function"){var I=p;p=function(){var F=Dl(E);I.call(F)}}Il(r,E,n,p)}else E=C0(l,r,n,p,h);return Dl(E)}fd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=vt(r.pendingLanes);l!==0&&(sn(r,l|1),zn(r,K()),!(Tt&6)&&(Vs=K()+500,xr()))}break;case 13:ns(function(){var h=Vi(n,1);if(h!==null){var p=Cn();di(h,n,1,p)}}),rh(n,1)}},Lc=function(n){if(n.tag===13){var r=Vi(n,134217728);if(r!==null){var l=Cn();di(r,n,134217728,l)}rh(n,134217728)}},dd=function(n){if(n.tag===13){var r=wr(n),l=Vi(n,r);if(l!==null){var h=Cn();di(l,n,r,h)}rh(n,r)}},pd=function(){return Et},md=function(n,r){var l=Et;try{return Et=n,r()}finally{Et=l}},we=function(n,r,l){switch(r){case"input":if(ft(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var p=Ja(h);if(!p)throw Error(t(90));_t(h),ft(h,p)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&P(n,!!l.multiple,r,!1)}},Ot=Zu,Zt=ns;var b0={usingClientEntryPoint:!1,Events:[qo,bs,Ja,be,rt,Zu]},la={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P0={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ua(n),n===null?null:n.stateNode},findFiberByHostInstance:la.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Qe=Ol.inject(P0),He=Ol}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0,Hn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oh(r))throw Error(t(200));return R0(n,r,null,l)},Hn.createRoot=function(n,r){if(!oh(n))throw Error(t(299));var l=!1,h="",p=Lm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=ih(n,1,!1,null,null,l,!1,h,p),n[ki]=r.current,Xo(n.nodeType===8?n.parentNode:n),new sh(r)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ua(r),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return ns(n)},Hn.hydrate=function(n,r,l){if(!Ul(r))throw Error(t(200));return Fl(null,n,r,!0,l)},Hn.hydrateRoot=function(n,r,l){if(!oh(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,v="",E=Lm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),r=bm(r,null,n,1,l??null,p,!1,v,E),n[ki]=r.current,Xo(n),h)for(n=0;n<h.length;n++)l=h[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Nl(r)},Hn.render=function(n,r,l){if(!Ul(r))throw Error(t(200));return Fl(null,n,r,!1,l)},Hn.unmountComponentAtNode=function(n){if(!Ul(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){Fl(null,null,n,!1,function(){n._reactRootContainer=null,n[ki]=null})}),!0):!1},Hn.unstable_batchedUpdates=Zu,Hn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!Ul(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Fl(n,r,l,!1,h)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var zm;function z0(){if(zm)return ch.exports;zm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ch.exports=B0(),ch.exports}var Hm;function H0(){if(Hm)return kl;Hm=1;var o=z0();return kl.createRoot=o.createRoot,kl.hydrateRoot=o.hydrateRoot,kl}var V0=H0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="172",ho={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G0=0,Vm=1,W0=2,h_=1,X0=2,Qi=3,sr=0,Wn=1,Ci=2,Vr=0,fo=1,Gm=2,Wm=3,Xm=4,j0=5,ps=100,Y0=101,q0=102,K0=103,$0=104,Z0=200,Q0=201,J0=202,ey=203,Kh=204,$h=205,ty=206,ny=207,iy=208,ry=209,sy=210,oy=211,ay=212,ly=213,cy=214,Zh=0,Qh=1,Jh=2,_o=3,ef=4,tf=5,nf=6,rf=7,f_=0,uy=1,hy=2,Gr=0,fy=1,dy=2,py=3,my=4,gy=5,_y=6,vy=7,jm="attached",yy="detached",d_=300,vo=301,yo=302,sf=303,of=304,Rc=306,xo=1e3,Br=1001,Sc=1002,In=1003,p_=1004,ya=1005,Zn=1006,pc=1007,tr=1008,or=1009,m_=1010,g_=1011,Ta=1012,Wf=1013,_s=1014,yi=1015,Ca=1016,Xf=1017,jf=1018,So=1020,__=35902,v_=1021,y_=1022,ai=1023,x_=1024,S_=1025,po=1026,Mo=1027,Yf=1028,qf=1029,M_=1030,Kf=1031,$f=1033,mc=33776,gc=33777,_c=33778,vc=33779,af=35840,lf=35841,cf=35842,uf=35843,hf=36196,ff=37492,df=37496,pf=37808,mf=37809,gf=37810,_f=37811,vf=37812,yf=37813,xf=37814,Sf=37815,Mf=37816,Ef=37817,Tf=37818,Af=37819,wf=37820,Rf=37821,yc=36492,Cf=36494,bf=36495,E_=36283,Pf=36284,Lf=36285,If=36286,xy=2200,Sy=2201,My=2202,Aa=2300,wa=2301,fh=2302,ao=2400,lo=2401,Mc=2402,Zf=2500,Ey=2501,Ty=0,T_=1,Df=2,Ay=3200,wy=3201,A_=0,Ry=1,kr="",un="srgb",Nn="srgb-linear",Ec="linear",It="srgb",Ws=7680,Ym=519,Cy=512,by=513,Py=514,w_=515,Ly=516,Iy=517,Dy=518,Ny=519,Nf=35044,qm="300 es",nr=2e3,Tc=2001;class Xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Km=1234567;const Sa=Math.PI/180,Eo=180/Math.PI;function xi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[o&255]+Mn[o>>8&255]+Mn[o>>16&255]+Mn[o>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function ht(o,e,t){return Math.max(e,Math.min(t,o))}function Qf(o,e){return(o%e+e)%e}function Uy(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function Fy(o,e,t){return o!==e?(t-o)/(e-o):0}function Ma(o,e,t){return(1-t)*o+t*e}function Oy(o,e,t,i){return Ma(o,e,1-Math.exp(-t*i))}function ky(o,e=1){return e-Math.abs(Qf(o,e*2)-e)}function By(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function zy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Hy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Vy(o,e){return o+Math.random()*(e-o)}function Gy(o){return o*(.5-Math.random())}function Wy(o){o!==void 0&&(Km=o);let e=Km+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xy(o){return o*Sa}function jy(o){return o*Eo}function Yy(o){return(o&o-1)===0&&o!==0}function qy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ky(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function $y(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),d=a((e+i)/2),m=c((e+i)/2),g=a((e-i)/2),_=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*m,f*g,f*_,u*d);break;case"YZY":o.set(f*_,u*m,f*g,u*d);break;case"ZXZ":o.set(f*g,f*_,u*m,u*d);break;case"XZX":o.set(u*m,f*M,f*x,u*d);break;case"YXY":o.set(f*x,u*m,f*M,u*d);break;case"ZYZ":o.set(f*M,f*x,u*m,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const R_={DEG2RAD:Sa,RAD2DEG:Eo,generateUUID:xi,clamp:ht,euclideanModulo:Qf,mapLinear:Uy,inverseLerp:Fy,lerp:Ma,damp:Oy,pingpong:ky,smoothstep:By,smootherstep:zy,randInt:Hy,randFloat:Vy,randFloatSpread:Gy,seededRandom:Wy,degToRad:Xy,radToDeg:jy,isPowerOfTwo:Yy,ceilPowerOfTwo:qy,floorPowerOfTwo:Ky,setQuaternionFromProperEuler:$y,normalize:Pt,denormalize:_i};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,s,a,c,u,f,d){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,d)}set(e,t,i,s,a,c,u,f,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=a,m[5]=f,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],m=i[4],g=i[7],_=i[2],x=i[5],M=i[8],T=s[0],S=s[3],y=s[6],D=s[1],L=s[4],C=s[7],V=s[2],O=s[5],U=s[8];return a[0]=c*T+u*D+f*V,a[3]=c*S+u*L+f*O,a[6]=c*y+u*C+f*U,a[1]=d*T+m*D+g*V,a[4]=d*S+m*L+g*O,a[7]=d*y+m*C+g*U,a[2]=_*T+x*D+M*V,a[5]=_*S+x*L+M*O,a[8]=_*y+x*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],m=e[8];return t*c*m-t*u*d-i*a*m+i*u*f+s*a*d-s*c*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],m=e[8],g=m*c-u*d,_=u*f-m*a,x=d*a-c*f,M=t*g+i*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(s*d-m*i)*T,e[2]=(u*i-s*c)*T,e[3]=_*T,e[4]=(m*t-s*f)*T,e[5]=(s*a-u*t)*T,e[6]=x*T,e[7]=(i*f-d*t)*T,e[8]=(c*t-i*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*c+d*u)+c+e,-s*d,s*f,-s*(-d*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(dh.makeScale(e,t)),this}rotate(e){return this.premultiply(dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new at;function C_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ra(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zy(){const o=Ra("canvas");return o.style.display="block",o}const $m={};function so(o){o in $m||($m[o]=!0,console.warn(o))}function Qy(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Jy(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ex(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zm=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qm=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tx(){const o={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===It&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(s.r=mo(s.r),s.g=mo(s.g),s.b=mo(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kr?Ec:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Nn]:{primaries:e,whitePoint:i,transfer:Ec,toXYZ:Zm,fromXYZ:Qm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:It,toXYZ:Zm,fromXYZ:Qm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),o}const St=tx();function ir(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Xs;class nx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=Ra("canvas")),Xs.width=e.width,Xs.height=e.height;const i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=ir(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ir(t[i]/255)*255):t[i]=ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ix=0;class b_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(ph(s[c].image)):a.push(ph(s[c]))}else a=ph(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function ph(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?nx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rx=0;class hn extends Xr{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=Br,s=Br,a=Zn,c=tr,u=ai,f=or,d=hn.DEFAULT_ANISOTROPY,m=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=xi(),this.name="",this.source=new b_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=d_;hn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,d=f[0],m=f[4],g=f[8],_=f[1],x=f[5],M=f[9],T=f[2],S=f[6],y=f[10];if(Math.abs(m-_)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(d+1)/2,C=(x+1)/2,V=(y+1)/2,O=(m+_)/4,U=(g+T)/4,j=(M+S)/4;return L>C&&L>V?L<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(L),s=O/i,a=U/i):C>V?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=O/s,a=j/s):V<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(V),i=U/a,s=j/a),this.set(i,s,a,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(_-m)*(_-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-T)/D,this.z=(_-m)/D,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sx extends Xr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new b_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends sx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class P_ extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ox extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let f=i[s+0],d=i[s+1],m=i[s+2],g=i[s+3];const _=a[c+0],x=a[c+1],M=a[c+2],T=a[c+3];if(u===0){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=T;return}if(g!==T||f!==_||d!==x||m!==M){let S=1-u;const y=f*_+d*x+m*M+g*T,D=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const V=Math.sqrt(L),O=Math.atan2(V,y*D);S=Math.sin(S*O)/V,u=Math.sin(u*O)/V}const C=u*D;if(f=f*S+_*C,d=d*S+x*C,m=m*S+M*C,g=g*S+T*C,S===1-u){const V=1/Math.sqrt(f*f+d*d+m*m+g*g);f*=V,d*=V,m*=V,g*=V}}e[t]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],f=i[s+1],d=i[s+2],m=i[s+3],g=a[c],_=a[c+1],x=a[c+2],M=a[c+3];return e[t]=u*M+m*g+f*x-d*_,e[t+1]=f*M+m*_+d*g-u*x,e[t+2]=d*M+m*x+u*_-f*g,e[t+3]=m*M-u*g-f*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,d=u(i/2),m=u(s/2),g=u(a/2),_=f(i/2),x=f(s/2),M=f(a/2);switch(c){case"XYZ":this._x=_*m*g+d*x*M,this._y=d*x*g-_*m*M,this._z=d*m*M+_*x*g,this._w=d*m*g-_*x*M;break;case"YXZ":this._x=_*m*g+d*x*M,this._y=d*x*g-_*m*M,this._z=d*m*M-_*x*g,this._w=d*m*g+_*x*M;break;case"ZXY":this._x=_*m*g-d*x*M,this._y=d*x*g+_*m*M,this._z=d*m*M+_*x*g,this._w=d*m*g-_*x*M;break;case"ZYX":this._x=_*m*g-d*x*M,this._y=d*x*g+_*m*M,this._z=d*m*M-_*x*g,this._w=d*m*g+_*x*M;break;case"YZX":this._x=_*m*g+d*x*M,this._y=d*x*g+_*m*M,this._z=d*m*M-_*x*g,this._w=d*m*g-_*x*M;break;case"XZY":this._x=_*m*g-d*x*M,this._y=d*x*g-_*m*M,this._z=d*m*M+_*x*g,this._w=d*m*g+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],f=t[9],d=t[2],m=t[6],g=t[10],_=i+u+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-f)*x,this._y=(a-d)*x,this._z=(c-s)*x}else if(i>u&&i>g){const x=2*Math.sqrt(1+i-u-g);this._w=(m-f)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+d)/x}else if(u>g){const x=2*Math.sqrt(1+u-i-g);this._w=(a-d)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(f+m)/x}else{const x=2*Math.sqrt(1+g-i-u);this._w=(c-s)/x,this._x=(a+d)/x,this._y=(f+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,f=t._y,d=t._z,m=t._w;return this._x=i*m+c*u+s*d-a*f,this._y=s*m+c*f+a*u-i*d,this._z=a*m+c*d+i*f-s*u,this._w=c*m-i*u-s*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),m=Math.atan2(d,u),g=Math.sin((1-t)*m)/d,_=Math.sin(t*m)/d;return this._w=c*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,f=e.w,d=2*(c*s-u*i),m=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+f*d+c*g-u*m,this.y=i+f*m+u*d-a*g,this.z=s+f*g+a*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*c-i*f,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new W,Jm=new Qn;class ar{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,pi):pi.fromBufferAttribute(a,c),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bl.copy(i.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),zl.subVectors(this.max,ua),js.subVectors(e.a,ua),Ys.subVectors(e.b,ua),qs.subVectors(e.c,ua),Pr.subVectors(Ys,js),Lr.subVectors(qs,Ys),os.subVectors(js,qs);let t=[0,-Pr.z,Pr.y,0,-Lr.z,Lr.y,0,-os.z,os.y,Pr.z,0,-Pr.x,Lr.z,0,-Lr.x,os.z,0,-os.x,-Pr.y,Pr.x,0,-Lr.y,Lr.x,0,-os.y,os.x,0];return!gh(t,js,Ys,qs,zl)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,js,Ys,qs,zl))?!1:(Hl.crossVectors(Pr,Lr),t=[Hl.x,Hl.y,Hl.z],gh(t,js,Ys,qs,zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ji=[new W,new W,new W,new W,new W,new W,new W,new W],pi=new W,Bl=new ar,js=new W,Ys=new W,qs=new W,Pr=new W,Lr=new W,os=new W,ua=new W,zl=new W,Hl=new W,as=new W;function gh(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){as.fromArray(o,a);const u=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),f=e.dot(as),d=t.dot(as),m=i.dot(as);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>u)return!1}return!0}const ax=new ar,ha=new W,_h=new W;class Li{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ax.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ha,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(_h)),this.expandByPoint(ha.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new W,vh=new W,Vl=new W,Ir=new W,yh=new W,Gl=new W,xh=new W;class ba{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vh.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(vh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Vl),u=Ir.dot(this.direction),f=-Ir.dot(Vl),d=Ir.lengthSq(),m=Math.abs(1-c*c);let g,_,x,M;if(m>0)if(g=c*f-u,_=c*u-f,M=a*m,g>=0)if(_>=-M)if(_<=M){const T=1/m;g*=T,_*=T,x=g*(g+c*_+2*u)+_*(c*g+_+2*f)+d}else _=a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*f)+d;else _=-a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*f)+d;else _<=-M?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-f),a),x=-g*g+_*(_+2*f)+d):_<=M?(g=0,_=Math.min(Math.max(-a,-f),a),x=_*(_+2*f)+d):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-f),a),x=-g*g+_*(_+2*f)+d);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(vh).addScaledVector(Vl,_),x}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),s=Yi.dot(Yi)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,f;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,s,a){yh.subVectors(t,e),Gl.subVectors(i,e),xh.crossVectors(yh,Gl);let c=this.direction.dot(xh),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Ir.subVectors(this.origin,e);const f=u*this.direction.dot(Gl.crossVectors(Ir,Gl));if(f<0)return null;const d=u*this.direction.dot(yh.cross(Ir));if(d<0||f+d>c)return null;const m=-u*Ir.dot(xh);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,a,c,u,f,d,m,g,_,x,M,T,S){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,d,m,g,_,x,M,T,S)}set(e,t,i,s,a,c,u,f,d,m,g,_,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=s,y[1]=a,y[5]=c,y[9]=u,y[13]=f,y[2]=d,y[6]=m,y[10]=g,y[14]=_,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),a=1/Ks.setFromMatrixColumn(e,1).length(),c=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,x=c*g,M=u*m,T=u*g;t[0]=f*m,t[4]=-f*g,t[8]=d,t[1]=x+M*d,t[5]=_-T*d,t[9]=-u*f,t[2]=T-_*d,t[6]=M+x*d,t[10]=c*f}else if(e.order==="YXZ"){const _=f*m,x=f*g,M=d*m,T=d*g;t[0]=_+T*u,t[4]=M*u-x,t[8]=c*d,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=x*u-M,t[6]=T+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*m,x=f*g,M=d*m,T=d*g;t[0]=_-T*u,t[4]=-c*g,t[8]=M+x*u,t[1]=x+M*u,t[5]=c*m,t[9]=T-_*u,t[2]=-c*d,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*m,x=c*g,M=u*m,T=u*g;t[0]=f*m,t[4]=M*d-x,t[8]=_*d+T,t[1]=f*g,t[5]=T*d+_,t[9]=x*d-M,t[2]=-d,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,x=c*d,M=u*f,T=u*d;t[0]=f*m,t[4]=T-_*g,t[8]=M*g+x,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-d*m,t[6]=x*g+M,t[10]=_-T*g}else if(e.order==="XZY"){const _=c*f,x=c*d,M=u*f,T=u*d;t[0]=f*m,t[4]=-g,t[8]=d*m,t[1]=_*g+T,t[5]=c*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=u*m,t[10]=T*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lx,e,cx)}lookAt(e,t,i){const s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Dr.crossVectors(i,Kn),Dr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Dr.crossVectors(i,Kn)),Dr.normalize(),Wl.crossVectors(Kn,Dr),s[0]=Dr.x,s[4]=Wl.x,s[8]=Kn.x,s[1]=Dr.y,s[5]=Wl.y,s[9]=Kn.y,s[2]=Dr.z,s[6]=Wl.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],m=i[1],g=i[5],_=i[9],x=i[13],M=i[2],T=i[6],S=i[10],y=i[14],D=i[3],L=i[7],C=i[11],V=i[15],O=s[0],U=s[4],j=s[8],b=s[12],R=s[1],z=s[5],oe=s[9],te=s[13],ue=s[2],de=s[6],se=s[10],le=s[14],B=s[3],ae=s[7],re=s[11],N=s[15];return a[0]=c*O+u*R+f*ue+d*B,a[4]=c*U+u*z+f*de+d*ae,a[8]=c*j+u*oe+f*se+d*re,a[12]=c*b+u*te+f*le+d*N,a[1]=m*O+g*R+_*ue+x*B,a[5]=m*U+g*z+_*de+x*ae,a[9]=m*j+g*oe+_*se+x*re,a[13]=m*b+g*te+_*le+x*N,a[2]=M*O+T*R+S*ue+y*B,a[6]=M*U+T*z+S*de+y*ae,a[10]=M*j+T*oe+S*se+y*re,a[14]=M*b+T*te+S*le+y*N,a[3]=D*O+L*R+C*ue+V*B,a[7]=D*U+L*z+C*de+V*ae,a[11]=D*j+L*oe+C*se+V*re,a[15]=D*b+L*te+C*le+V*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],f=e[9],d=e[13],m=e[2],g=e[6],_=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15];return M*(+a*f*g-s*d*g-a*u*_+i*d*_+s*u*x-i*f*x)+T*(+t*f*x-t*d*_+a*c*_-s*c*x+s*d*m-a*f*m)+S*(+t*d*g-t*u*x-a*c*g+i*c*x+a*u*m-i*d*m)+y*(-s*u*m-t*f*g+t*u*_+s*c*g-i*c*_+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],m=e[8],g=e[9],_=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],D=g*S*d-T*_*d+T*f*x-u*S*x-g*f*y+u*_*y,L=M*_*d-m*S*d-M*f*x+c*S*x+m*f*y-c*_*y,C=m*T*d-M*g*d+M*u*x-c*T*x-m*u*y+c*g*y,V=M*g*f-m*T*f-M*u*_+c*T*_+m*u*S-c*g*S,O=t*D+i*L+s*C+a*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=D*U,e[1]=(T*_*a-g*S*a-T*s*x+i*S*x+g*s*y-i*_*y)*U,e[2]=(u*S*a-T*f*a+T*s*d-i*S*d-u*s*y+i*f*y)*U,e[3]=(g*f*a-u*_*a-g*s*d+i*_*d+u*s*x-i*f*x)*U,e[4]=L*U,e[5]=(m*S*a-M*_*a+M*s*x-t*S*x-m*s*y+t*_*y)*U,e[6]=(M*f*a-c*S*a-M*s*d+t*S*d+c*s*y-t*f*y)*U,e[7]=(c*_*a-m*f*a+m*s*d-t*_*d-c*s*x+t*f*x)*U,e[8]=C*U,e[9]=(M*g*a-m*T*a-M*i*x+t*T*x+m*i*y-t*g*y)*U,e[10]=(c*T*a-M*u*a+M*i*d-t*T*d-c*i*y+t*u*y)*U,e[11]=(m*u*a-c*g*a-m*i*d+t*g*d+c*i*x-t*u*x)*U,e[12]=V*U,e[13]=(m*T*s-M*g*s+M*i*_-t*T*_-m*i*S+t*g*S)*U,e[14]=(M*u*s-c*T*s-M*i*f+t*T*f+c*i*S-t*u*S)*U,e[15]=(c*g*s-m*u*s+m*i*f-t*g*f-c*i*_+t*u*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,d=a*c,m=a*u;return this.set(d*c+i,d*u-s*f,d*f+s*u,0,d*u+s*f,m*u+i,m*f-s*c,0,d*f-s*u,m*f+s*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,d=a+a,m=c+c,g=u+u,_=a*d,x=a*m,M=a*g,T=c*m,S=c*g,y=u*g,D=f*d,L=f*m,C=f*g,V=i.x,O=i.y,U=i.z;return s[0]=(1-(T+y))*V,s[1]=(x+C)*V,s[2]=(M-L)*V,s[3]=0,s[4]=(x-C)*O,s[5]=(1-(_+y))*O,s[6]=(S+D)*O,s[7]=0,s[8]=(M+L)*U,s[9]=(S-D)*U,s[10]=(1-(_+T))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Ks.set(s[0],s[1],s[2]).length();const c=Ks.set(s[4],s[5],s[6]).length(),u=Ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);const d=1/a,m=1/c,g=1/u;return mi.elements[0]*=d,mi.elements[1]*=d,mi.elements[2]*=d,mi.elements[4]*=m,mi.elements[5]*=m,mi.elements[6]*=m,mi.elements[8]*=g,mi.elements[9]*=g,mi.elements[10]*=g,t.setFromRotationMatrix(mi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=nr){const f=this.elements,d=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let x,M;if(u===nr)x=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Tc)x=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=nr){const f=this.elements,d=1/(t-e),m=1/(i-s),g=1/(c-a),_=(t+e)*d,x=(i+s)*m;let M,T;if(u===nr)M=(c+a)*g,T=-2*g;else if(u===Tc)M=a*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=T,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ks=new W,mi=new lt,lx=new W(0,0,0),cx=new W(1,1,1),Dr=new W,Wl=new W,Kn=new W,eg=new lt,tg=new Qn;class Pi{constructor(e=0,t=0,i=0,s=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],f=s[1],d=s[5],m=s[9],g=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(ht(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-ht(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tg.setFromEuler(this),this.setFromQuaternion(tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class L_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ux=0;const ng=new W,$s=new Qn,qi=new lt,Xl=new W,fa=new W,hx=new W,fx=new Qn,ig=new W(1,0,0),rg=new W(0,1,0),sg=new W(0,0,1),og={type:"added"},dx={type:"removed"},Zs={type:"childadded",child:null},Sh={type:"childremoved",child:null};class Wt extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new W,t=new Pi,i=new Qn,s=new W(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new at}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(ig,e)}rotateY(e){return this.rotateOnAxis(rg,e)}rotateZ(e){return this.rotateOnAxis(sg,e)}translateOnAxis(e,t){return ng.copy(e).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ig,e)}translateY(e){return this.translateOnAxis(rg,e)}translateZ(e){return this.translateOnAxis(sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xl.copy(e):Xl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(fa,Xl,this.up):qi.lookAt(Xl,fa,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(qi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(og),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dx),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(og),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const g=f[d];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),d=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),x=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new W(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new W,Ki=new W,Mh=new W,$i=new W,Qs=new W,Js=new W,ag=new W,Eh=new W,Th=new W,Ah=new W,wh=new wt,Rh=new wt,Ch=new wt;class vi{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gi.subVectors(e,t),s.cross(gi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){gi.subVectors(s,t),Ki.subVectors(i,t),Mh.subVectors(e,t);const c=gi.dot(gi),u=gi.dot(Ki),f=gi.dot(Mh),d=Ki.dot(Ki),m=Ki.dot(Mh),g=c*d-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,x=(d*f-u*m)*_,M=(c*m-u*f)*_;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,i,s,a,c,u,f){return this.getBarycoord(e,t,i,s,$i)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,$i.x),f.addScaledVector(c,$i.y),f.addScaledVector(u,$i.z),f)}static getInterpolatedAttribute(e,t,i,s,a,c){return wh.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),wh.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,i),Ch.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(wh,a.x),c.addScaledVector(Rh,a.y),c.addScaledVector(Ch,a.z),c}static isFrontFacing(e,t,i,s){return gi.subVectors(i,t),Ki.subVectors(e,t),gi.cross(Ki).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),gi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;Qs.subVectors(s,i),Js.subVectors(a,i),Eh.subVectors(e,i);const f=Qs.dot(Eh),d=Js.dot(Eh);if(f<=0&&d<=0)return t.copy(i);Th.subVectors(e,s);const m=Qs.dot(Th),g=Js.dot(Th);if(m>=0&&g<=m)return t.copy(s);const _=f*g-m*d;if(_<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(i).addScaledVector(Qs,c);Ah.subVectors(e,a);const x=Qs.dot(Ah),M=Js.dot(Ah);if(M>=0&&x<=M)return t.copy(a);const T=x*d-f*M;if(T<=0&&d>=0&&M<=0)return u=d/(d-M),t.copy(i).addScaledVector(Js,u);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return ag.subVectors(a,s),u=(g-m)/(g-m+(x-M)),t.copy(s).addScaledVector(ag,u);const y=1/(S+T+_);return c=T*y,u=_*y,t.copy(i).addScaledVector(Qs,c).addScaledVector(Js,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},jl={h:0,s:0,l:0};function bh(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=Qf(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=bh(c,a,e+1/3),this.g=bh(c,a,e),this.b=bh(c,a,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=un){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=I_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return St.fromWorkingColorSpace(En.copy(this),e),Math.round(ht(En.r*255,0,255))*65536+Math.round(ht(En.g*255,0,255))*256+Math.round(ht(En.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(En.copy(this),t);const i=En.r,s=En.g,a=En.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let f,d;const m=(u+c)/2;if(u===c)f=0,d=0;else{const g=c-u;switch(d=m<=.5?g/(c+u):g/(2-c-u),c){case i:f=(s-a)/g+(s<a?6:0);break;case s:f=(a-i)/g+2;break;case a:f=(i-s)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=m,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=un){St.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,s=En.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(jl);const i=Ma(Nr.h,jl.h,t),s=Ma(Nr.s,jl.s,t),a=Ma(Nr.l,jl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new st;st.NAMES=I_;let px=0;class bi extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=fo,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=$h,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kh&&(i.blendSrc=this.blendSrc),this.blendDst!==$h&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zr extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=f_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new W,Yl=new nt;class Dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nf,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yl.fromBufferAttribute(this,t),Yl.applyMatrix3(e),this.setXY(t,Yl.x,Yl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nf&&(e.usage=this.usage),e}}class D_ extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class N_ extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rr extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mx=0;const si=new lt,Ph=new Wt,eo=new W,$n=new ar,da=new ar,cn=new W;class Ii extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?N_:D_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new at().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new rr(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];$n.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];da.setFromBufferAttribute(u),this.morphTargetsRelative?(cn.addVectors($n.min,da.min),$n.expandByPoint(cn),cn.addVectors($n.max,da.max),$n.expandByPoint(cn)):($n.expandByPoint(da.min),$n.expandByPoint(da.max))}$n.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)cn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(cn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let d=0,m=u.count;d<m;d++)cn.fromBufferAttribute(u,d),f&&(eo.fromBufferAttribute(e,d),cn.add(eo)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let j=0;j<i.count;j++)u[j]=new W,f[j]=new W;const d=new W,m=new W,g=new W,_=new nt,x=new nt,M=new nt,T=new W,S=new W;function y(j,b,R){d.fromBufferAttribute(i,j),m.fromBufferAttribute(i,b),g.fromBufferAttribute(i,R),_.fromBufferAttribute(a,j),x.fromBufferAttribute(a,b),M.fromBufferAttribute(a,R),m.sub(d),g.sub(d),x.sub(_),M.sub(_);const z=1/(x.x*M.y-M.x*x.y);isFinite(z)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(z),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(z),u[j].add(T),u[b].add(T),u[R].add(T),f[j].add(S),f[b].add(S),f[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let j=0,b=D.length;j<b;++j){const R=D[j],z=R.start,oe=R.count;for(let te=z,ue=z+oe;te<ue;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new W,C=new W,V=new W,O=new W;function U(j){V.fromBufferAttribute(s,j),O.copy(V);const b=u[j];L.copy(b),L.sub(V.multiplyScalar(V.dot(b))).normalize(),C.crossVectors(O,b);const z=C.dot(f[j])<0?-1:1;c.setXYZW(j,L.x,L.y,L.z,z)}for(let j=0,b=D.length;j<b;++j){const R=D[j],z=R.start,oe=R.count;for(let te=z,ue=z+oe;te<ue;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new W,a=new W,c=new W,u=new W,f=new W,d=new W,m=new W,g=new W;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),T=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),u.add(m),f.add(m),d.add(m),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(u,f){const d=u.array,m=u.itemSize,g=u.normalized,_=new d.constructor(f.length*m);let x=0,M=0;for(let T=0,S=f.length;T<S;T++){u.isInterleavedBufferAttribute?x=f[T]*u.data.stride+u.offset:x=f[T]*m;for(let y=0;y<m;y++)_[M++]=d[x++]}return new Dn(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ii,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const f=[],d=a[u];for(let m=0,g=d.length;m<g;m++){const _=d[m],x=e(_,i);f.push(x)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let g=0,_=d.length;g<_;g++){const x=d[g];m.push(x.toJSON(e.data))}m.length>0&&(s[f]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(t))}const a=e.morphAttributes;for(const d in a){const m=[],g=a[d];for(let _=0,x=g.length;_<x;_++)m.push(g[_].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lg=new lt,ls=new ba,ql=new Li,cg=new W,Kl=new W,$l=new W,Zl=new W,Lh=new W,Ql=new W,ug=new W,Jl=new W;class Gn extends Wt{constructor(e=new Ii,t=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Ql.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const m=u[f],g=a[f];m!==0&&(Lh.fromBufferAttribute(g,e),c?Ql.addScaledVector(Lh,m):Ql.addScaledVector(Lh.sub(t),m))}t.add(Ql)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(a),ls.copy(e.ray).recast(e.near),!(ql.containsPoint(ls.origin)===!1&&(ls.intersectSphere(ql,cg)===null||ls.origin.distanceToSquared(cg)>(e.far-e.near)**2))&&(lg.copy(a).invert(),ls.copy(e.ray).applyMatrix4(lg),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,T=_.length;M<T;M++){const S=_[M],y=c[S.materialIndex],D=Math.max(S.start,x.start),L=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let C=D,V=L;C<V;C+=3){const O=u.getX(C),U=u.getX(C+1),j=u.getX(C+2);s=ec(this,y,e,i,d,m,g,O,U,j),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),T=Math.min(u.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const D=u.getX(S),L=u.getX(S+1),C=u.getX(S+2);s=ec(this,c,e,i,d,m,g,D,L,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,T=_.length;M<T;M++){const S=_[M],y=c[S.materialIndex],D=Math.max(S.start,x.start),L=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=D,V=L;C<V;C+=3){const O=C,U=C+1,j=C+2;s=ec(this,y,e,i,d,m,g,O,U,j),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const D=S,L=S+1,C=S+2;s=ec(this,c,e,i,d,m,g,D,L,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function gx(o,e,t,i,s,a,c,u){let f;if(e.side===Wn?f=i.intersectTriangle(c,a,s,!0,u):f=i.intersectTriangle(s,a,c,e.side===sr,u),f===null)return null;Jl.copy(u),Jl.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Jl);return d<t.near||d>t.far?null:{distance:d,point:Jl.clone(),object:o}}function ec(o,e,t,i,s,a,c,u,f,d){o.getVertexPosition(u,Kl),o.getVertexPosition(f,$l),o.getVertexPosition(d,Zl);const m=gx(o,e,t,i,Kl,$l,Zl,ug);if(m){const g=new W;vi.getBarycoord(ug,Kl,$l,Zl,g),s&&(m.uv=vi.getInterpolatedAttribute(s,u,f,d,g,new nt)),a&&(m.uv1=vi.getInterpolatedAttribute(a,u,f,d,g,new nt)),c&&(m.normal=vi.getInterpolatedAttribute(c,u,f,d,g,new W),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:f,c:d,normal:new W,materialIndex:0};vi.getNormal(Kl,$l,Zl,_.normal),m.face=_,m.barycoord=g}return m}class Co extends Ii{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],d=[],m=[],g=[];let _=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new rr(d,3)),this.setAttribute("normal",new rr(m,3)),this.setAttribute("uv",new rr(g,2));function M(T,S,y,D,L,C,V,O,U,j,b){const R=C/U,z=V/j,oe=C/2,te=V/2,ue=O/2,de=U+1,se=j+1;let le=0,B=0;const ae=new W;for(let re=0;re<se;re++){const N=re*z-te;for(let ne=0;ne<de;ne++){const Ne=ne*R-oe;ae[T]=Ne*D,ae[S]=N*L,ae[y]=ue,d.push(ae.x,ae.y,ae.z),ae[T]=0,ae[S]=0,ae[y]=O>0?1:-1,m.push(ae.x,ae.y,ae.z),g.push(ne/U),g.push(1-re/j),le+=1}}for(let re=0;re<j;re++)for(let N=0;N<U;N++){const ne=_+N+de*re,Ne=_+N+de*(re+1),Q=_+(N+1)+de*(re+1),fe=_+(N+1)+de*re;f.push(ne,Ne,fe),f.push(Ne,Q,fe),B+=6}u.addGroup(x,B,b),x+=B,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pn(o){const e={};for(let t=0;t<o.length;t++){const i=To(o[t]);for(const s in i)e[s]=i[s]}return e}function _x(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function U_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const vx={clone:To,merge:Pn};var yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=_x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class F_ extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new W,hg=new nt,fg=new nt;class Ln extends F_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,hg,fg),t.subVectors(fg,hg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*i/d,s*=c.width/f,i*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class Sx extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(to,no,e,t);s.layers=this.layers,this.add(s);const a=new Ln(to,no,e,t);a.layers=this.layers,this.add(a);const c=new Ln(to,no,e,t);c.layers=this.layers,this.add(c);const u=new Ln(to,no,e,t);u.layers=this.layers,this.add(u);const f=new Ln(to,no,e,t);f.layers=this.layers,this.add(f);const d=new Ln(to,no,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,f]=t;for(const d of t)this.remove(d);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,d,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Jf extends hn{constructor(e,t,i,s,a,c,u,f,d,m){e=e!==void 0?e:[],t=t!==void 0?t:vo,super(e,t,i,s,a,c,u,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mx extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Jf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Co(5,5,5),a=new Wr({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wn,blending:Vr});a.uniforms.tEquirect.value=t;const c=new Gn(s,a),u=t.minFilter;return t.minFilter===tr&&(t.minFilter=Zn),new Sx(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class Ex extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nf,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new W;class ed{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),a=Pt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ed(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dg=new W,pg=new wt,mg=new wt,Ax=new W,gg=new lt,tc=new W,Ih=new Li,_g=new lt,Dh=new ba;class wx extends Gn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jm,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ar),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,tc),this.boundingBox.expandByPoint(tc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,tc),this.boundingSphere.expandByPoint(tc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ih.copy(this.boundingSphere),Ih.applyMatrix4(s),e.ray.intersectsSphere(Ih)!==!1&&(_g.copy(s).invert(),Dh.copy(e.ray).applyMatrix4(_g),!(this.boundingBox!==null&&Dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;pg.fromBufferAttribute(s.attributes.skinIndex,e),mg.fromBufferAttribute(s.attributes.skinWeight,e),dg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=mg.getComponent(a);if(c!==0){const u=pg.getComponent(a);gg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(Ax.copy(dg).applyMatrix4(gg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class O_ extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class k_ extends hn{constructor(e=null,t=1,i=1,s,a,c,u,f,d=In,m=In,g,_){super(null,c,u,f,d,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vg=new lt,Rx=new lt;class td{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:Rx;vg.multiplyMatrices(u,t[a]),vg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new td(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new k_(t,e,e,ai,yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new O_),this.bones.push(c),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class Uf extends Dn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const io=new lt,yg=new lt,nc=[],xg=new ar,Cx=new lt,pa=new Gn,ma=new Li;class bx extends Gn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Cx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,io),xg.copy(e.boundingBox).applyMatrix4(io),this.boundingBox.union(xg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,io),ma.copy(e.boundingSphere).applyMatrix4(io),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),e.ray.intersectsSphere(ma)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,io),yg.multiplyMatrices(i,io),pa.matrixWorld=yg,pa.raycast(e,nc);for(let c=0,u=nc.length;c<u;c++){const f=nc[c];f.instanceId=a,f.object=this,t.push(f)}nc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Uf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new k_(new Float32Array(s*this.count),s,this.count,Yf,yi));const a=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const u=this.geometry.morphTargetsRelative?1:1-c,f=s*e;a[f]=u,a.set(i,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Nh=new W,Px=new W,Lx=new at;class Or{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Nh.subVectors(i,t).cross(Px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lx.getNormalMatrix(e),s=this.coplanarPoint(Nh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Li,ic=new W;class nd{constructor(e=new Or,t=new Or,i=new Or,s=new Or,a=new Or,c=new Or){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],f=s[3],d=s[4],m=s[5],g=s[6],_=s[7],x=s[8],M=s[9],T=s[10],S=s[11],y=s[12],D=s[13],L=s[14],C=s[15];if(i[0].setComponents(f-a,_-d,S-x,C-y).normalize(),i[1].setComponents(f+a,_+d,S+x,C+y).normalize(),i[2].setComponents(f+c,_+m,S+M,C+D).normalize(),i[3].setComponents(f-c,_-m,S-M,C-D).normalize(),i[4].setComponents(f-u,_-g,S-T,C-L).normalize(),t===nr)i[5].setComponents(f+u,_+g,S+T,C+L).normalize();else if(t===Tc)i[5].setComponents(u,g,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ic.x=s.normal.x>0?e.max.x:e.min.x,ic.y=s.normal.y>0?e.max.y:e.min.y,ic.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class B_ extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ac=new W,wc=new W,Sg=new lt,ga=new ba,rc=new Li,Uh=new W,Mg=new W;class id extends Wt{constructor(e=new Ii,t=new B_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Ac.fromBufferAttribute(t,s-1),wc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ac.distanceTo(wc);e.setAttribute("lineDistance",new rr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),rc.radius+=a,e.ray.intersectsSphere(rc)===!1)return;Sg.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Sg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let T=x,S=M-1;T<S;T+=d){const y=m.getX(T),D=m.getX(T+1),L=sc(this,e,ga,f,y,D);L&&t.push(L)}if(this.isLineLoop){const T=m.getX(M-1),S=m.getX(x),y=sc(this,e,ga,f,T,S);y&&t.push(y)}}else{const x=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let T=x,S=M-1;T<S;T+=d){const y=sc(this,e,ga,f,T,T+1);y&&t.push(y)}if(this.isLineLoop){const T=sc(this,e,ga,f,M-1,x);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function sc(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(Ac.fromBufferAttribute(c,s),wc.fromBufferAttribute(c,a),t.distanceSqToSegment(Ac,wc,Uh,Mg)>i)return;Uh.applyMatrix4(o.matrixWorld);const f=e.ray.origin.distanceTo(Uh);if(!(f<e.near||f>e.far))return{distance:f,point:Mg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const Eg=new W,Tg=new W;class Ix extends id{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Eg.fromBufferAttribute(t,s),Tg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Eg.distanceTo(Tg);e.setAttribute("lineDistance",new rr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dx extends id{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class z_ extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ag=new lt,Ff=new ba,oc=new Li,ac=new W;class Nx extends Wt{constructor(e=new Ii,t=new z_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(s),oc.radius+=a,e.ray.intersectsSphere(oc)===!1)return;Ag.copy(s).invert(),Ff.copy(e.ray).applyMatrix4(Ag);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=i.index,g=i.attributes.position;if(d!==null){const _=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let M=_,T=x;M<T;M++){const S=d.getX(M);ac.fromBufferAttribute(g,S),wg(ac,S,f,s,e,t,this)}}else{const _=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let M=_,T=x;M<T;M++)ac.fromBufferAttribute(g,M),wg(ac,M,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function wg(o,e,t,i,s,a,c){const u=Ff.distanceSqToPoint(o);if(u<t){const f=new W;Ff.closestPointToPoint(o,f),f.applyMatrix4(i);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class gs extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class H_ extends hn{constructor(e,t,i,s,a,c,u,f,d,m=po){if(m!==po&&m!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===po&&(i=_s),i===void 0&&m===Mo&&(i=So),super(null,s,a,c,u,f,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:In,this.minFilter=f!==void 0?f:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cc extends Ii{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(s),d=u+1,m=f+1,g=e/u,_=t/f,x=[],M=[],T=[],S=[];for(let y=0;y<m;y++){const D=y*_-c;for(let L=0;L<d;L++){const C=L*g-a;M.push(C,-D,0),T.push(0,0,1),S.push(L/u),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let D=0;D<u;D++){const L=D+d*y,C=D+d*(y+1),V=D+1+d*(y+1),O=D+1+d*y;x.push(L,C,O),x.push(C,V,O)}this.setIndex(x),this.setAttribute("position",new rr(M,3)),this.setAttribute("normal",new rr(T,3)),this.setAttribute("uv",new rr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.width,e.height,e.widthSegments,e.heightSegments)}}class rd extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A_,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Di extends rd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ux extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fx extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function lc(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Ox(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function kx(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Rg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let f=0;f!==e;++f)s[c++]=o[u+f]}return s}function V_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Pa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bx extends Pa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ao,endingEnd:ao}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case lo:a=e,u=2*t-i;break;case Mc:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case lo:c=e,f=2*i-t;break;case Mc:c=1,f=i+s[1]-s[0];break;default:c=e-1,f=t}const d=(i-t)*.5,m=this.valueSize;this._weightPrev=d/(t-u),this._weightNext=d/(f-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,d=f-u,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(i-t)/(s-t),T=M*M,S=T*M,y=-_*S+2*_*T-_*M,D=(1+_)*S+(-1.5-2*_)*T+(-.5+_)*M+1,L=(-1-x)*S+(1.5+x)*T+.5*M,C=x*S-x*T;for(let V=0;V!==u;++V)a[V]=y*c[m+V]+D*c[d+V]+L*c[f+V]+C*c[g+V];return a}}class G_ extends Pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,d=f-u,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==u;++_)a[_]=c[d+_]*g+c[f+_]*m;return a}}class zx extends Pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ni{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lc(t,this.TimeBufferType),this.values=lc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:lc(e.times,Array),values:lc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new zx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new G_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Aa:t=this.InterpolantFactoryMethodDiscrete;break;case wa:t=this.InterpolantFactoryMethodLinear;break;case fh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const f=i[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,c),e=!1;break}c=f}if(s!==void 0&&Ox(s))for(let u=0,f=s.length;u!==f;++u){const d=s[u];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fh,a=e.length-1;let c=1;for(let u=1;u<a;++u){let f=!1;const d=e[u],m=e[u+1];if(d!==m&&(u!==1||d!==e[0]))if(s)f=!0;else{const g=u*i,_=g-i,x=g+i;for(let M=0;M!==i;++M){const T=t[g+M];if(T!==t[_+M]||T!==t[x+M]){f=!0;break}}}if(f){if(u!==c){e[c]=e[u];const g=u*i,_=c*i;for(let x=0;x!==i;++x)t[_+x]=t[g+x]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,f=c*i,d=0;d!==i;++d)t[f+d]=t[u+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=wa;class bo extends Ni{constructor(e,t,i){super(e,t,i)}}bo.prototype.ValueTypeName="bool";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=Aa;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class W_ extends Ni{}W_.prototype.ValueTypeName="color";class Ao extends Ni{}Ao.prototype.ValueTypeName="number";class Hx extends Pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-t)/(s-t);let d=e*u;for(let m=d+u;d!==m;d+=4)Qn.slerpFlat(a,0,c,d-u,c,d,f);return a}}class wo extends Ni{InterpolantFactoryMethodLinear(e){return new Hx(this.times,this.values,this.getValueSize(),e)}}wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;class Po extends Ni{constructor(e,t,i){super(e,t,i)}}Po.prototype.ValueTypeName="string";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=Aa;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Ni{}Ro.prototype.ValueTypeName="vector";class Of{constructor(e="",t=-1,i=[],s=Zf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(Gx(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Ni.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let f=[],d=[];f.push((u+a-1)%a,u,(u+1)%a),d.push(0,1,0);const m=kx(f);f=Rg(f,1,m),d=Rg(d,1,m),!s&&f[0]===0&&(f.push(a),d.push(d[0])),c.push(new Ao(".morphTargetInfluences["+t[u].name+"]",f,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const d=e[u],m=d.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(d)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,x,M,T){if(x.length!==0){const S=[],y=[];V_(x,S,y,M),S.length!==0&&T.push(new g(_,S,y))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let g=0;g<d.length;g++){const _=d[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let T=0;T<_[M].morphTargets.length;T++)x[_[M].morphTargets[T]]=-1;for(const T in x){const S=[],y=[];for(let D=0;D!==_[M].morphTargets.length;++D){const L=_[M];S.push(L.time),y.push(L.morphTarget===T?1:0)}s.push(new Ao(".morphTargetInfluence["+T+"]",S,y))}f=x.length*c}else{const x=".bones["+t[g].name+"]";i(Ro,x+".position",_,"pos",s),i(wo,x+".quaternion",_,"rot",s),i(Ro,x+".scale",_,"scl",s)}}return s.length===0?null:new this(a,f,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Vx(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ao;case"vector":case"vector2":case"vector3":case"vector4":return Ro;case"color":return W_;case"quaternion":return wo;case"bool":case"boolean":return bo;case"string":return Po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Gx(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vx(o.type);if(o.times===void 0){const t=[],i=[];V_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Hr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Wx{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){u++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,u),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return d.push(m,g),this},this.removeHandler=function(m){const g=d.indexOf(m);return g!==-1&&d.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=d.length;g<_;g+=2){const x=d[g],M=d[g+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null}}}const Xx=new Wx;class ys{constructor(e){this.manager=e!==void 0?e:Xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi={};class jx extends Error{constructor(e,t){super(e),this.response=t}}class X_ extends ys{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Hr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:i,onError:s});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const m=Zi[e],g=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=_?parseInt(_):0,M=x!==0;let T=0;const S=new ReadableStream({start(y){D();function D(){g.read().then(({done:L,value:C})=>{if(L)y.close();else{T+=C.byteLength;const V=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:x});for(let O=0,U=m.length;O<U;O++){const j=m[O];j.onProgress&&j.onProgress(V)}y.enqueue(C),D()}},L=>{y.error(L)})}}});return new Response(S)}else throw new jx(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return d.json();default:if(u===void 0)return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{Hr.add(e,d);const m=Zi[e];delete Zi[e];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onLoad&&x.onLoad(d)}}).catch(d=>{const m=Zi[e];if(m===void 0)throw this.manager.itemError(e),d;delete Zi[e];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class j_ extends ys{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Hr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Ra("img");function f(){m(),Hr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",f,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class Yx extends ys{constructor(e){super(e)}load(e,t,i,s){const a=new Jf;a.colorSpace=un;const c=new j_(this.manager);c.setCrossOrigin(this.crossOrigin),c.setPath(this.path);let u=0;function f(d){c.load(e[d],function(m){a.images[d]=m,u++,u===6&&(a.needsUpdate=!0,t&&t(a))},void 0,s)}for(let d=0;d<e.length;++d)f(d);return a}}class qx extends ys{constructor(e){super(e)}load(e,t,i,s){const a=new hn,c=new j_(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class sd extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Fh=new lt,Cg=new W,bg=new W;class od{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nd,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Cg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cg),bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bg),t.updateMatrixWorld(),Fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kx extends od{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Eo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $x extends sd{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new Kx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pg=new lt,_a=new W,Oh=new W;class Zx extends od{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),i.position.copy(_a),Oh.copy(i.position),Oh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Oh),i.updateMatrixWorld(),s.makeTranslation(-_a.x,-_a.y,-_a.z),Pg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pg)}}class Qx extends sd{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ad extends F_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jx extends od{constructor(){super(new ad(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eS extends sd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Jx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ea{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tS extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Hr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),a.manager.itemEnd(e)}).catch(d=>{s&&s(d)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const f=fetch(e,u).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return Hr.add(e,d),t&&t(d),a.manager.itemEnd(e),d}).catch(function(d){s&&s(d),Hr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Hr.add(e,f),a.manager.itemStart(e)}}class nS extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class iS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Lg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Lg(){return performance.now()}class rS{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,a,c;switch(t){case"quaternion":s=this._slerp,a=this._slerpAdditive,c=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,a=this._select,c=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,a=this._lerpAdditive,c=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=a,this._setIdentity=c,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,a=e*s+s;let c=this.cumulativeWeight;if(c===0){for(let u=0;u!==s;++u)i[a+u]=i[u];c=t}else{c+=t;const u=t/c;this._mixBufferRegion(i,a,0,u,s)}this.cumulativeWeight=c}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,a=this.cumulativeWeight,c=this.cumulativeWeightAdditive,u=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const f=t*this._origIndex;this._mixBufferRegion(i,s,f,1-a,t)}c>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let f=t,d=t+t;f!==d;++f)if(i[f]!==i[f+t]){u.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let a=i,c=s;a!==c;++a)t[a]=t[s+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,a){if(s>=.5)for(let c=0;c!==a;++c)e[t+c]=e[i+c]}_slerp(e,t,i,s){Qn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,a){const c=this._workIndex*a;Qn.multiplyQuaternionsFlat(e,c,e,t,e,i),Qn.slerpFlat(e,t,e,t,e,c,s)}_lerp(e,t,i,s,a){const c=1-s;for(let u=0;u!==a;++u){const f=t+u;e[f]=e[f]*c+e[i+u]*s}}_lerpAdditive(e,t,i,s,a){for(let c=0;c!==a;++c){const u=t+c;e[u]=e[u]+e[i+c]*s}}}const ld="\\[\\]\\.:\\/",sS=new RegExp("["+ld+"]","g"),cd="[^"+ld+"]",oS="[^"+ld.replace("\\.","")+"]",aS=/((?:WC+[\/:])*)/.source.replace("WC",cd),lS=/(WCOD+)?/.source.replace("WCOD",oS),cS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cd),uS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cd),hS=new RegExp("^"+aS+lS+cS+uS+"$"),fS=["material","materials","bones","map"];class dS{constructor(e,t,i){const s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ct{constructor(e,t,i){this.path=t,this.parsedPath=i||Ct.parseTrackName(t),this.node=Ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ct.Composite(e,t,i):new Ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sS,"")}static parseTrackName(e){const t=hS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);fS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===d){d=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[s];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?u=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ct.Composite=dS;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class pS{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const a=t.tracks,c=a.length,u=new Array(c),f={endingStart:ao,endingEnd:ao};for(let d=0;d!==c;++d){const m=a[d].createInterpolant(null);u[d]=m,m.settings=f}this._interpolantSettings=f,this._interpolants=u,this._propertyBindings=new Array(c),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Sy,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,a=e._clip.duration,c=a/s,u=s/a;e.warp(1,c,t),this.warp(u,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,a=s.time,c=this.timeScale;let u=this._timeScaleInterpolant;u===null&&(u=s._lendControlInterpolant(),this._timeScaleInterpolant=u);const f=u.parameterPositions,d=u.sampleValues;return f[0]=a,f[1]=a+i,d[0]=e/c,d[1]=t/c,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const f=(e-a)*i;f<0||i===0?t=0:(this._startTime=null,t=i*f)}t*=this._updateTimeScale(e);const c=this._updateTime(t),u=this._updateWeight(e);if(u>0){const f=this._interpolants,d=this._propertyBindings;switch(this.blendMode){case Ey:for(let m=0,g=f.length;m!==g;++m)f[m].evaluate(c),d[m].accumulateAdditive(u);break;case Zf:default:for(let m=0,g=f.length;m!==g;++m)f[m].evaluate(c),d[m].accumulate(s,u)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,a=this._loopCount;const c=i===My;if(e===0)return a===-1?s:c&&(a&1)===1?t-s:s;if(i===xy){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,c)):this._setEndings(this.repetitions===0,!0,c)),s>=t||s<0){const u=Math.floor(s/t);s-=t*u,a+=Math.abs(u);const f=this.repetitions-a;if(f<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(f===1){const d=e<0;this._setEndings(d,!d,c)}else this._setEndings(!1,!1,c);this._loopCount=a,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:u})}}else this.time=s;if(c&&(a&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=lo,s.endingEnd=lo):(e?s.endingStart=this.zeroSlopeAtStart?lo:ao:s.endingStart=Mc,t?s.endingEnd=this.zeroSlopeAtEnd?lo:ao:s.endingEnd=Mc)}_scheduleFading(e,t,i){const s=this._mixer,a=s.time;let c=this._weightInterpolant;c===null&&(c=s._lendControlInterpolant(),this._weightInterpolant=c);const u=c.parameterPositions,f=c.sampleValues;return u[0]=a,f[0]=t,u[1]=a+e,f[1]=i,this}}const mS=new Float32Array(1);class gS extends Xr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,a=s.length,c=e._propertyBindings,u=e._interpolants,f=i.uuid,d=this._bindingsByRootAndName;let m=d[f];m===void 0&&(m={},d[f]=m);for(let g=0;g!==a;++g){const _=s[g],x=_.name;let M=m[x];if(M!==void 0)++M.referenceCount,c[g]=M;else{if(M=c[g],M!==void 0){M._cacheIndex===null&&(++M.referenceCount,this._addInactiveBinding(M,f,x));continue}const T=t&&t._propertyBindings[g].binding.parsedPath;M=new rS(Ct.create(i,x,T),_.ValueTypeName,_.getValueSize()),++M.referenceCount,this._addInactiveBinding(M,f,x),c[g]=M}u[g].resultBuffer=M.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,a=this._actionsByClip[s];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,a=this._actionsByClip;let c=a[t];if(c===void 0)c={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=c;else{const u=c.knownActions;e._byClipCacheIndex=u.length,u.push(e)}e._cacheIndex=s.length,s.push(e),c.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,c=this._actionsByClip,u=c[a],f=u.knownActions,d=f[f.length-1],m=e._byClipCacheIndex;d._byClipCacheIndex=m,f[m]=d,f.pop(),e._byClipCacheIndex=null;const g=u.actionByRoot,_=(e._localRoot||this._root).uuid;delete g[_],f.length===0&&delete c[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,a=this._bindings;let c=s[t];c===void 0&&(c={},s[t]=c),c[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,a=i.path,c=this._bindingsByRootAndName,u=c[s],f=t[t.length-1],d=e._cacheIndex;f._cacheIndex=d,t[d]=f,t.pop(),delete u[a],Object.keys(u).length===0&&delete c[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new G_(new Float32Array(2),new Float32Array(2),1,mS),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,a=t[s];e.__cacheIndex=s,t[s]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){const s=t||this._root,a=s.uuid;let c=typeof e=="string"?Of.findByName(s,e):e;const u=c!==null?c.uuid:e,f=this._actionsByClip[u];let d=null;if(i===void 0&&(c!==null?i=c.blendMode:i=Zf),f!==void 0){const g=f.actionByRoot[a];if(g!==void 0&&g.blendMode===i)return g;d=f.knownActions[0],c===null&&(c=d._clip)}if(c===null)return null;const m=new pS(this,c,t,i);return this._bindAction(m,d),this._addInactiveAction(m,u,a),m}existingAction(e,t){const i=t||this._root,s=i.uuid,a=typeof e=="string"?Of.findByName(i,e):e,c=a?a.uuid:e,u=this._actionsByClip[c];return u!==void 0&&u.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,a=Math.sign(e),c=this._accuIndex^=1;for(let d=0;d!==i;++d)t[d]._update(s,e,a,c);const u=this._bindings,f=this._nActiveBindings;for(let d=0;d!==f;++d)u[d].apply(c);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,a=s[i];if(a!==void 0){const c=a.knownActions;for(let u=0,f=c.length;u!==f;++u){const d=c[u];this._deactivateAction(d);const m=d._cacheIndex,g=t[t.length-1];d._cacheIndex=null,d._byClipCacheIndex=null,g._cacheIndex=m,t[m]=g,t.pop(),this._removeInactiveBindingsForAction(d)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const c in i){const u=i[c].actionByRoot,f=u[t];f!==void 0&&(this._deactivateAction(f),this._removeInactiveAction(f))}const s=this._bindingsByRootAndName,a=s[t];if(a!==void 0)for(const c in a){const u=a[c];u.restoreOriginalState(),this._removeInactiveBinding(u)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Ig{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}let _S=class extends Xr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function Dg(o,e,t,i){const s=vS(i);switch(t){case v_:return o*e;case x_:return o*e;case S_:return o*e*2;case Yf:return o*e/s.components*s.byteLength;case qf:return o*e/s.components*s.byteLength;case M_:return o*e*2/s.components*s.byteLength;case Kf:return o*e*2/s.components*s.byteLength;case y_:return o*e*3/s.components*s.byteLength;case ai:return o*e*4/s.components*s.byteLength;case $f:return o*e*4/s.components*s.byteLength;case mc:case gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _c:case vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case lf:case uf:return Math.max(o,16)*Math.max(e,8)/4;case af:case cf:return Math.max(o,8)*Math.max(e,8)/2;case hf:case ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case df:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case gf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case _f:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case vf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case xf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Af:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case yc:case Cf:case bf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case E_:case Pf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Lf:case If:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vS(o){switch(o){case or:case m_:return{byteLength:1,components:1};case Ta:case g_:case Ca:return{byteLength:2,components:1};case Xf:case jf:return{byteLength:2,components:4};case _s:case Wf:case yi:return{byteLength:4,components:1};case __:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Y_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function yS(o){const e=new WeakMap;function t(u,f){const d=u.array,m=u.usage,g=d.byteLength,_=o.createBuffer();o.bindBuffer(f,_),o.bufferData(f,d,m),u.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,f,d){const m=f.array,g=f.updateRanges;if(o.bindBuffer(d,u),g.length===0)o.bufferSubData(d,0,m);else{g.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<g.length;x++){const M=g[_],T=g[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,g[_]=T)}g.length=_+1;for(let x=0,M=g.length;x<M;x++){const T=g[x];o.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(o.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:s,remove:a,update:c}}var xS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SS=`#ifdef USE_ALPHAHASH
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
#endif`,MS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ES=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wS=`#ifdef USE_AOMAP
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
#endif`,RS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`#ifdef USE_BATCHING
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
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DS=`#ifdef USE_IRIDESCENCE
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
#endif`,NS=`#ifdef USE_BUMPMAP
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
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GS=`#define PI 3.141592653589793
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
} // validated`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XS=`vec3 transformedNormal = objectNormal;
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
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$S="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QS=`#ifdef USE_ENVMAP
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
#endif`,JS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aM=`#ifdef USE_GRADIENTMAP
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
}`,lM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
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
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,dM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
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
#endif`,vM=`struct PhysicalMaterial {
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
}`,yM=`
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
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
#endif`,FM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VM=`#ifdef USE_NORMALMAP
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
#endif`,GM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dE=`#ifdef USE_TRANSMISSION
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
#endif`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xE=`uniform sampler2D t2D;
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
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
}`,wE=`#if DEPTH_PACKING == 3200
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
}`,RE=`#define DISTANCE
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
}`,CE=`#define DISTANCE
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
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
}`,IE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,NE=`uniform vec3 diffuse;
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
}`,UE=`#define LAMBERT
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
}`,FE=`#define LAMBERT
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
}`,OE=`#define MATCAP
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
}`,kE=`#define MATCAP
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
}`,BE=`#define NORMAL
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
}`,zE=`#define NORMAL
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
}`,HE=`#define PHONG
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
}`,VE=`#define PHONG
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
}`,GE=`#define STANDARD
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
}`,WE=`#define STANDARD
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
}`,XE=`#define TOON
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
}`,jE=`#define TOON
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
}`,YE=`uniform float size;
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
}`,qE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,$E=`uniform vec3 color;
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
}`,ZE=`uniform float rotation;
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
}`,QE=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:xS,alphahash_pars_fragment:SS,alphamap_fragment:MS,alphamap_pars_fragment:ES,alphatest_fragment:TS,alphatest_pars_fragment:AS,aomap_fragment:wS,aomap_pars_fragment:RS,batching_pars_vertex:CS,batching_vertex:bS,begin_vertex:PS,beginnormal_vertex:LS,bsdfs:IS,iridescence_fragment:DS,bumpmap_pars_fragment:NS,clipping_planes_fragment:US,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:OS,clipping_planes_vertex:kS,color_fragment:BS,color_pars_fragment:zS,color_pars_vertex:HS,color_vertex:VS,common:GS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:XS,displacementmap_pars_vertex:jS,displacementmap_vertex:YS,emissivemap_fragment:qS,emissivemap_pars_fragment:KS,colorspace_fragment:$S,colorspace_pars_fragment:ZS,envmap_fragment:QS,envmap_common_pars_fragment:JS,envmap_pars_fragment:eM,envmap_pars_vertex:tM,envmap_physical_pars_fragment:fM,envmap_vertex:nM,fog_vertex:iM,fog_pars_vertex:rM,fog_fragment:sM,fog_pars_fragment:oM,gradientmap_pars_fragment:aM,lightmap_pars_fragment:lM,lights_lambert_fragment:cM,lights_lambert_pars_fragment:uM,lights_pars_begin:hM,lights_toon_fragment:dM,lights_toon_pars_fragment:pM,lights_phong_fragment:mM,lights_phong_pars_fragment:gM,lights_physical_fragment:_M,lights_physical_pars_fragment:vM,lights_fragment_begin:yM,lights_fragment_maps:xM,lights_fragment_end:SM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:EM,logdepthbuf_pars_vertex:TM,logdepthbuf_vertex:AM,map_fragment:wM,map_pars_fragment:RM,map_particle_fragment:CM,map_particle_pars_fragment:bM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:LM,morphinstance_vertex:IM,morphcolor_vertex:DM,morphnormal_vertex:NM,morphtarget_pars_vertex:UM,morphtarget_vertex:FM,normal_fragment_begin:OM,normal_fragment_maps:kM,normal_pars_fragment:BM,normal_pars_vertex:zM,normal_vertex:HM,normalmap_pars_fragment:VM,clearcoat_normal_fragment_begin:GM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:XM,iridescence_pars_fragment:jM,opaque_fragment:YM,packing:qM,premultiplied_alpha_fragment:KM,project_vertex:$M,dithering_fragment:ZM,dithering_pars_fragment:QM,roughnessmap_fragment:JM,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:oE,skinning_vertex:aE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:hE,tonemapping_pars_fragment:fE,transmission_fragment:dE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:_E,worldpos_vertex:vE,background_vert:yE,background_frag:xE,backgroundCube_vert:SE,backgroundCube_frag:ME,cube_vert:EE,cube_frag:TE,depth_vert:AE,depth_frag:wE,distanceRGBA_vert:RE,distanceRGBA_frag:CE,equirect_vert:bE,equirect_frag:PE,linedashed_vert:LE,linedashed_frag:IE,meshbasic_vert:DE,meshbasic_frag:NE,meshlambert_vert:UE,meshlambert_frag:FE,meshmatcap_vert:OE,meshmatcap_frag:kE,meshnormal_vert:BE,meshnormal_frag:zE,meshphong_vert:HE,meshphong_frag:VE,meshphysical_vert:GE,meshphysical_frag:WE,meshtoon_vert:XE,meshtoon_frag:jE,points_vert:YE,points_frag:qE,shadow_vert:KE,shadow_frag:$E,sprite_vert:ZE,sprite_frag:QE},Ce={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ri={basic:{uniforms:Pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Pn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Pn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Pn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Pn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Pn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Pn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Pn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Pn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Pn([Ce.common,Ce.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Pn([Ce.lights,Ce.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ri.physical={uniforms:Pn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const cc={r:0,b:0,g:0},us=new Pi,JE=new lt;function eT(o,e,t,i,s,a,c){const u=new st(0);let f=a===!0?0:1,d,m,g=null,_=0,x=null;function M(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?t:e).get(C)),C}function T(L){let C=!1;const V=M(L);V===null?y(u,f):V&&V.isColor&&(y(V,1),C=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,C){const V=M(C);V&&(V.isCubeTexture||V.mapping===Rc)?(m===void 0&&(m=new Gn(new Co(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:To(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,U,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),us.copy(C.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.material.uniforms.envMap.value=V,m.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(JE.makeRotationFromEuler(us)),m.material.toneMapped=St.getTransfer(V.colorSpace)!==It,(g!==V||_!==V.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=V,_=V.version,x=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):V&&V.isTexture&&(d===void 0&&(d=new Gn(new Cc(2,2),new Wr({name:"BackgroundMaterial",uniforms:To(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=V,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=St.getTransfer(V.colorSpace)!==It,V.matrixAutoUpdate===!0&&V.updateMatrix(),d.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||_!==V.version||x!==o.toneMapping)&&(d.material.needsUpdate=!0,g=V,_=V.version,x=o.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function y(L,C){L.getRGB(cc,U_(o)),i.buffers.color.setClear(cc.r,cc.g,cc.b,C,c)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(L,C=1){u.set(L),f=C,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,y(u,f)},render:T,addToRenderList:S,dispose:D}}function tT(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,c=!1;function u(R,z,oe,te,ue){let de=!1;const se=g(te,oe,z);a!==se&&(a=se,d(a.object)),de=x(R,te,oe,ue),de&&M(R,te,oe,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,C(R,z,oe,te),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function f(){return o.createVertexArray()}function d(R){return o.bindVertexArray(R)}function m(R){return o.deleteVertexArray(R)}function g(R,z,oe){const te=oe.wireframe===!0;let ue=i[R.id];ue===void 0&&(ue={},i[R.id]=ue);let de=ue[z.id];de===void 0&&(de={},ue[z.id]=de);let se=de[te];return se===void 0&&(se=_(f()),de[te]=se),se}function _(R){const z=[],oe=[],te=[];for(let ue=0;ue<t;ue++)z[ue]=0,oe[ue]=0,te[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:te,object:R,attributes:{},index:null}}function x(R,z,oe,te){const ue=a.attributes,de=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){const re=ue[B];let N=de[B];if(N===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;se++}return a.attributesNum!==se||a.index!==te}function M(R,z,oe,te){const ue={},de=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){let re=de[B];re===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),ue[B]=N,se++}a.attributes=ue,a.attributesNum=se,a.index=te}function T(){const R=a.newAttributes;for(let z=0,oe=R.length;z<oe;z++)R[z]=0}function S(R){y(R,0)}function y(R,z){const oe=a.newAttributes,te=a.enabledAttributes,ue=a.attributeDivisors;oe[R]=1,te[R]===0&&(o.enableVertexAttribArray(R),te[R]=1),ue[R]!==z&&(o.vertexAttribDivisor(R,z),ue[R]=z)}function D(){const R=a.newAttributes,z=a.enabledAttributes;for(let oe=0,te=z.length;oe<te;oe++)z[oe]!==R[oe]&&(o.disableVertexAttribArray(oe),z[oe]=0)}function L(R,z,oe,te,ue,de,se){se===!0?o.vertexAttribIPointer(R,z,oe,ue,de):o.vertexAttribPointer(R,z,oe,te,ue,de)}function C(R,z,oe,te){T();const ue=te.attributes,de=oe.getAttributes(),se=z.defaultAttributeValues;for(const le in de){const B=de[le];if(B.location>=0){let ae=ue[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ne=ne.buffer,Q=ne.type,fe=ne.bytesPerElement,Se=Q===o.INT||Q===o.UNSIGNED_INT||ae.gpuType===Wf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,De=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)y(B.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let Ze=0;Ze<B.locationSize;Ze++)L(B.location+Ze,N/B.locationSize,Q,re,Te*fe,(De+N/B.locationSize*Ze)*fe,Se)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let ve=0;ve<B.locationSize;ve++)L(B.location+ve,N/B.locationSize,Q,re,N*fe,N/B.locationSize*ve*fe,Se)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(B.location,re);break;case 3:o.vertexAttrib3fv(B.location,re);break;case 4:o.vertexAttrib4fv(B.location,re);break;default:o.vertexAttrib1fv(B.location,re)}}}}D()}function V(){j();for(const R in i){const z=i[R];for(const oe in z){const te=z[oe];for(const ue in te)m(te[ue].object),delete te[ue];delete z[oe]}delete i[R]}}function O(R){if(i[R.id]===void 0)return;const z=i[R.id];for(const oe in z){const te=z[oe];for(const ue in te)m(te[ue].object),delete te[ue];delete z[oe]}delete i[R.id]}function U(R){for(const z in i){const oe=i[z];if(oe[R.id]===void 0)continue;const te=oe[R.id];for(const ue in te)m(te[ue].object),delete te[ue];delete oe[R.id]}}function j(){b(),c=!0,a!==s&&(a=s,d(a.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:j,resetDefaultState:b,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function nT(o,e,t){let i;function s(d){i=d}function a(d,m){o.drawArrays(i,d,m),t.update(m,i,1)}function c(d,m,g){g!==0&&(o.drawArraysInstanced(i,d,m,g),t.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,i,1)}function f(d,m,g,_){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)c(d[M],m[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,m,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=m[T]*_[T];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function iT(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==ai&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const j=U===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==or&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==yi&&!j)}function f(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=f(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:V,maxSamples:O}}function rT(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Or,u=new at,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||s;return s=_,i=g.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,x){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?m(null):d();else{const D=a?0:i,L=D*4;let C=y.clippingState||null;f.value=C,C=m(M,_,L,x);for(let V=0;V!==L;++V)C[V]=t[V];y.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,x,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=f.value,M!==!0||S===null){const y=x+T*4,D=_.matrixWorldInverse;u.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,C=x;L!==T;++L,C+=4)c.copy(g[L]).applyMatrix4(D,u),c.normal.toArray(S,C),S[C+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function sT(o){let e=new WeakMap;function t(c,u){return u===sf?c.mapping=vo:u===of&&(c.mapping=yo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===sf||u===of)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new Mx(f.height);return d.fromEquirectangularTexture(o,c),e.set(c,d),c.addEventListener("dispose",s),t(d.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const co=4,Ng=[.125,.215,.35,.446,.526,.582],ms=20,kh=new ad,Ug=new st;let Bh=null,zh=0,Hh=0,Vh=!1;const ds=(1+Math.sqrt(5))/2,ro=1/ds,Fg=[new W(-ds,ro,0),new W(ds,ro,0),new W(-ro,0,ds),new W(ro,0,ds),new W(0,ds,-ro),new W(0,ds,ro),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,zh,Hh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vo||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Ca,format:ai,colorSpace:Nn,depthBuffer:!1},s=kg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(a)),this._blurMaterial=aT(a,e,t)}return s}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,kh)}_sceneToCubeUV(e,t,i,s){const u=new Ln(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Ug),m.toneMapping=Gr,m.autoClear=!1;const x=new zr({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),M=new Gn(new Co,x);let T=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,T=!0):(x.color.copy(Ug),T=!0);for(let y=0;y<6;y++){const D=y%3;D===0?(u.up.set(0,f[y],0),u.lookAt(d[y],0,0)):D===1?(u.up.set(0,0,f[y]),u.lookAt(0,d[y],0)):(u.up.set(0,f[y],0),u.lookAt(0,0,d[y]));const L=this._cubeSize;uc(s,D*L,y>2?L:0,L,L),m.setRenderTarget(s),T&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===vo||e.mapping===yo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Gn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;uc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,kh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Fg[(s-a-1)%Fg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Gn(this._lodPlanes[s],d),_=d.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*ms-1),T=a/M,S=isFinite(a)?1+Math.floor(m*T):ms;S>ms&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ms}`);const y=[];let D=0;for(let U=0;U<ms;++U){const j=U/T,b=Math.exp(-j*j/2);y.push(b),U===0?D+=b:U<S&&(D+=2*b)}for(let U=0;U<y.length;U++)y[U]=y[U]/D;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:L}=this;_.dTheta.value=M,_.mipInt.value=L-i;const C=this._sizeLods[s],V=3*C*(s>L-co?s-L+co:0),O=4*(this._cubeSize-C);uc(t,V,O,3*C,2*C),f.setRenderTarget(t),f.render(g,kh)}}function oT(o){const e=[],t=[],i=[];let s=o;const a=o-co+1+Ng.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let f=1/u;c>o-co?f=Ng[c-o+co-1]:c===0&&(f=0),i.push(f);const d=1/(u-2),m=-d,g=1+d,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,T=3,S=2,y=1,D=new Float32Array(T*M*x),L=new Float32Array(S*M*x),C=new Float32Array(y*M*x);for(let O=0;O<x;O++){const U=O%3*2/3-1,j=O>2?0:-1,b=[U,j,0,U+2/3,j,0,U+2/3,j+1,0,U,j,0,U+2/3,j+1,0,U,j+1,0];D.set(b,T*M*O),L.set(_,S*M*O);const R=[O,O,O,O,O,O];C.set(R,y*M*O)}const V=new Ii;V.setAttribute("position",new Dn(D,T)),V.setAttribute("uv",new Dn(L,S)),V.setAttribute("faceIndex",new Dn(C,y)),e.push(V),s>co&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kg(o,e,t){const i=new vs(o,e,t);return i.texture.mapping=Rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uc(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function aT(o,e,t){const i=new Float32Array(ms),s=new W(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ud(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Bg(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function zg(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function ud(){return`

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
	`}function lT(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===sf||f===of,m=f===vo||f===yo;if(d||m){let g=e.get(u);const _=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new Og(o)),g=d?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return d&&x&&x.height>0||m&&x&&s(x)?(t===null&&(t=new Og(o)),g=d?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let f=0;const d=6;for(let m=0;m<d;m++)u[m]!==void 0&&f++;return f===d}function a(u){const f=u.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function cT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&so("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function uT(o,e,t,i){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete s[_.id];const x=a.get(_);x&&(e.remove(x),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const x in _)e.update(_[x],o.ARRAY_BUFFER)}function d(g){const _=[],x=g.index,M=g.attributes.position;let T=0;if(x!==null){const D=x.array;T=x.version;for(let L=0,C=D.length;L<C;L+=3){const V=D[L+0],O=D[L+1],U=D[L+2];_.push(V,O,O,U,U,V)}}else if(M!==void 0){const D=M.array;T=M.version;for(let L=0,C=D.length/3-1;L<C;L+=3){const V=L+0,O=L+1,U=L+2;_.push(V,O,O,U,U,V)}}else return;const S=new(C_(_)?N_:D_)(_,1);S.version=T;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function m(g){const _=a.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&d(g)}else d(g);return a.get(g)}return{get:u,update:f,getWireframeAttribute:m}}function hT(o,e,t){let i;function s(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function f(_,x){o.drawElements(i,x,a,_*c),t.update(x,i,1)}function d(_,x,M){M!==0&&(o.drawElementsInstanced(i,x,a,_*c,M),t.update(x,i,M))}function m(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,i,1)}function g(_,x,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)d(_[y]/c,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,a,_,0,T,0,M);let y=0;for(let D=0;D<M;D++)y+=x[D]*T[D];t.update(y,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function fT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function dT(o,e,t){const i=new WeakMap,s=new wt;function a(c,u,f){const d=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(u);if(_===void 0||_.count!==g){let R=function(){j.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var x=R;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let V=u.attributes.position.count*C,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*O*4*g),j=new P_(U,V,O,g);j.type=yi,j.needsUpdate=!0;const b=C*4;for(let z=0;z<g;z++){const oe=y[z],te=D[z],ue=L[z],de=V*O*4*z;for(let se=0;se<oe.count;se++){const le=se*b;M===!0&&(s.fromBufferAttribute(oe,se),U[de+le+0]=s.x,U[de+le+1]=s.y,U[de+le+2]=s.z,U[de+le+3]=0),T===!0&&(s.fromBufferAttribute(te,se),U[de+le+4]=s.x,U[de+le+5]=s.y,U[de+le+6]=s.z,U[de+le+7]=0),S===!0&&(s.fromBufferAttribute(ue,se),U[de+le+8]=s.x,U[de+le+9]=s.y,U[de+le+10]=s.z,U[de+le+11]=ue.itemSize===4?s.w:1)}}_={count:g,texture:j,size:new nt(V,O)},i.set(u,_),u.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const T=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",T),f.getUniforms().setValue(o,"morphTargetInfluences",d)}f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function pT(o,e,t,i){let s=new WeakMap;function a(f){const d=i.render.frame,m=f.geometry,g=e.get(f,m);if(s.get(g)!==d&&(e.update(g),s.set(g,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==d&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return g}function c(){s=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const q_=new hn,Hg=new H_(1,1),K_=new P_,$_=new ox,Z_=new Jf,Vg=[],Gg=[],Wg=new Float32Array(16),Xg=new Float32Array(9),jg=new Float32Array(4);function Lo(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=Vg[s];if(a===void 0&&(a=new Float32Array(s),Vg[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function tn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function nn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function bc(o,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function mT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function gT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;o.uniform2fv(this.addr,e),nn(t,e)}}function _T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;o.uniform3fv(this.addr,e),nn(t,e)}}function vT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;o.uniform4fv(this.addr,e),nn(t,e)}}function yT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;jg.set(i),o.uniformMatrix2fv(this.addr,!1,jg),nn(t,i)}}function xT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Xg.set(i),o.uniformMatrix3fv(this.addr,!1,Xg),nn(t,i)}}function ST(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Wg.set(i),o.uniformMatrix4fv(this.addr,!1,Wg),nn(t,i)}}function MT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function ET(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;o.uniform2iv(this.addr,e),nn(t,e)}}function TT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;o.uniform3iv(this.addr,e),nn(t,e)}}function AT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;o.uniform4iv(this.addr,e),nn(t,e)}}function wT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function RT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;o.uniform2uiv(this.addr,e),nn(t,e)}}function CT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;o.uniform3uiv(this.addr,e),nn(t,e)}}function bT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;o.uniform4uiv(this.addr,e),nn(t,e)}}function PT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Hg.compareFunction=w_,a=Hg):a=q_,t.setTexture2D(e||a,s)}function LT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$_,s)}function IT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Z_,s)}function DT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||K_,s)}function NT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return yT;case 35675:return xT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return wT;case 36294:return RT;case 36295:return CT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return DT}}function UT(o,e){o.uniform1fv(this.addr,e)}function FT(o,e){const t=Lo(e,this.size,2);o.uniform2fv(this.addr,t)}function OT(o,e){const t=Lo(e,this.size,3);o.uniform3fv(this.addr,t)}function kT(o,e){const t=Lo(e,this.size,4);o.uniform4fv(this.addr,t)}function BT(o,e){const t=Lo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function zT(o,e){const t=Lo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function HT(o,e){const t=Lo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function VT(o,e){o.uniform1iv(this.addr,e)}function GT(o,e){o.uniform2iv(this.addr,e)}function WT(o,e){o.uniform3iv(this.addr,e)}function XT(o,e){o.uniform4iv(this.addr,e)}function jT(o,e){o.uniform1uiv(this.addr,e)}function YT(o,e){o.uniform2uiv(this.addr,e)}function qT(o,e){o.uniform3uiv(this.addr,e)}function KT(o,e){o.uniform4uiv(this.addr,e)}function $T(o,e,t){const i=this.cache,s=e.length,a=bc(t,s);tn(i,a)||(o.uniform1iv(this.addr,a),nn(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||q_,a[c])}function ZT(o,e,t){const i=this.cache,s=e.length,a=bc(t,s);tn(i,a)||(o.uniform1iv(this.addr,a),nn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||$_,a[c])}function QT(o,e,t){const i=this.cache,s=e.length,a=bc(t,s);tn(i,a)||(o.uniform1iv(this.addr,a),nn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Z_,a[c])}function JT(o,e,t){const i=this.cache,s=e.length,a=bc(t,s);tn(i,a)||(o.uniform1iv(this.addr,a),nn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||K_,a[c])}function eA(o){switch(o){case 5126:return UT;case 35664:return FT;case 35665:return OT;case 35666:return kT;case 35674:return BT;case 35675:return zT;case 35676:return HT;case 5124:case 35670:return VT;case 35667:case 35671:return GT;case 35668:case 35672:return WT;case 35669:case 35673:return XT;case 5125:return jT;case 36294:return YT;case 36295:return qT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}class tA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NT(t.type)}}class nA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eA(t.type)}}class iA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function Yg(o,e){o.seq.push(e),o.map[e.id]=e}function rA(o,e,t){const i=o.name,s=i.length;for(Gh.lastIndex=0;;){const a=Gh.exec(i),c=Gh.lastIndex;let u=a[1];const f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===s){Yg(t,d===void 0?new tA(u,o,e):new nA(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new iA(u),Yg(t,g)),t=g}}}class xc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);rA(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function qg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const sA=37297;let oA=0;function aA(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Kg=new at;function lA(o){St._getMatrix(Kg,St.workingColorSpace,o);const e=`mat3( ${Kg.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(o)){case Ec:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function $g(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+aA(o.getShaderSource(e),c)}else return s}function cA(o,e){const t=lA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uA(o,e){let t;switch(e){case fy:t="Linear";break;case dy:t="Reinhard";break;case py:t="Cineon";break;case my:t="ACESFilmic";break;case _y:t="AgX";break;case vy:t="Neutral";break;case gy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hc=new W;function hA(){St.getLuminanceCoefficients(hc);const o=hc.x.toFixed(4),e=hc.y.toFixed(4),t=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function dA(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pA(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function xa(o){return o!==""}function Zg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mA=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(o){return o.replace(mA,_A)}const gA=new Map;function _A(o,e){let t=ct[e];if(t===void 0){const i=gA.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kf(t)}const vA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jg(o){return o.replace(vA,yA)}function yA(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function e_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function xA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===h_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===X0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vo:case yo:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function EA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case f_:e="ENVMAP_BLENDING_MULTIPLY";break;case uy:e="ENVMAP_BLENDING_MIX";break;case hy:e="ENVMAP_BLENDING_ADD";break}return e}function TA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function AA(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=xA(t),d=SA(t),m=MA(t),g=EA(t),_=TA(t),x=fA(t),M=dA(a),T=s.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(xa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(xa).join(`
`),y.length>0&&(y+=`
`)):(S=[e_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),y=[e_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gr?"#define TONE_MAPPING":"",t.toneMapping!==Gr?ct.tonemapping_pars_fragment:"",t.toneMapping!==Gr?uA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,cA("linearToOutputTexel",t.outputColorSpace),hA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),c=kf(c),c=Zg(c,t),c=Qg(c,t),u=kf(u),u=Zg(u,t),u=Qg(u,t),c=Jg(c),u=Jg(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=D+S+c,C=D+y+u,V=qg(s,s.VERTEX_SHADER,L),O=qg(s,s.FRAGMENT_SHADER,C);s.attachShader(T,V),s.attachShader(T,O),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function U(z){if(o.debug.checkShaderErrors){const oe=s.getProgramInfoLog(T).trim(),te=s.getShaderInfoLog(V).trim(),ue=s.getShaderInfoLog(O).trim();let de=!0,se=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(de=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,T,V,O);else{const le=$g(s,V,"vertex"),B=$g(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+B)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||ue==="")&&(se=!1);se&&(z.diagnostics={runnable:de,programLog:oe,vertexShader:{log:te,prefix:S},fragmentShader:{log:ue,prefix:y}})}s.deleteShader(V),s.deleteShader(O),j=new xc(s,T),b=pA(s,T)}let j;this.getUniforms=function(){return j===void 0&&U(this),j};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,sA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=O,this}let wA=0;class RA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CA(e),t.set(e,i)),i}}class CA{constructor(e){this.id=wA++,this.code=e,this.usedTimes=0}}function bA(o,e,t,i,s,a,c){const u=new L_,f=new RA,d=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return d.add(b),b===0?"uv":`uv${b}`}function S(b,R,z,oe,te){const ue=oe.fog,de=te.geometry,se=b.isMeshStandardMaterial?oe.environment:null,le=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),B=le&&le.mapping===Rc?le.image.height:null,ae=M[b.type];b.precision!==null&&(x=s.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const re=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,N=re!==void 0?re.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let Ne,Q,fe,Se;if(ae){const Mt=Ri[ae];Ne=Mt.vertexShader,Q=Mt.fragmentShader}else Ne=b.vertexShader,Q=b.fragmentShader,f.update(b),fe=f.getVertexShaderID(b),Se=f.getFragmentShaderID(b);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),De=te.isInstancedMesh===!0,Ze=te.isBatchedMesh===!0,Lt=!!b.map,_t=!!b.matcap,Ut=!!le,k=!!b.aoMap,Tn=!!b.lightMap,mt=!!b.bumpMap,ft=!!b.normalMap,je=!!b.displacementMap,bt=!!b.emissiveMap,Ge=!!b.metalnessMap,P=!!b.roughnessMap,A=b.anisotropy>0,Z=b.clearcoat>0,pe=b.dispersion>0,ge=b.iridescence>0,ce=b.sheen>0,We=b.transmission>0,Ae=A&&!!b.anisotropyMap,Ue=Z&&!!b.clearcoatMap,ut=Z&&!!b.clearcoatNormalMap,Me=Z&&!!b.clearcoatRoughnessMap,Oe=ge&&!!b.iridescenceMap,qe=ge&&!!b.iridescenceThicknessMap,Je=ce&&!!b.sheenColorMap,ke=ce&&!!b.sheenRoughnessMap,dt=!!b.specularMap,it=!!b.specularColorMap,Rt=!!b.specularIntensityMap,G=We&&!!b.transmissionMap,we=We&&!!b.thicknessMap,ie=!!b.gradientMap,he=!!b.alphaMap,Pe=b.alphaTest>0,be=!!b.alphaHash,rt=!!b.extensions;let Ot=Gr;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ot=o.toneMapping);const Zt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:Q,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Ze,batchingColor:Ze&&te._colorsTexture!==null,instancing:De,instancingColor:De&&te.instanceColor!==null,instancingMorph:De&&te.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Nn,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:_t,envMap:Ut,envMapMode:Ut&&le.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:Tn,bumpMap:mt,normalMap:ft,displacementMap:_&&je,emissiveMap:bt,normalMapObjectSpace:ft&&b.normalMapType===Ry,normalMapTangentSpace:ft&&b.normalMapType===A_,metalnessMap:Ge,roughnessMap:P,anisotropy:A,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:qe,sheen:ce,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:dt,specularColorMap:it,specularIntensityMap:Rt,transmission:We,transmissionMap:G,thicknessMap:we,gradientMap:ie,opaque:b.transparent===!1&&b.blending===fo&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:Pe,alphaHash:be,combine:b.combine,mapUv:Lt&&T(b.map.channel),aoMapUv:k&&T(b.aoMap.channel),lightMapUv:Tn&&T(b.lightMap.channel),bumpMapUv:mt&&T(b.bumpMap.channel),normalMapUv:ft&&T(b.normalMap.channel),displacementMapUv:je&&T(b.displacementMap.channel),emissiveMapUv:bt&&T(b.emissiveMap.channel),metalnessMapUv:Ge&&T(b.metalnessMap.channel),roughnessMapUv:P&&T(b.roughnessMap.channel),anisotropyMapUv:Ae&&T(b.anisotropyMap.channel),clearcoatMapUv:Ue&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(b.sheenRoughnessMap.channel),specularMapUv:dt&&T(b.specularMap.channel),specularColorMapUv:it&&T(b.specularColorMap.channel),specularIntensityMapUv:Rt&&T(b.specularIntensityMap.channel),transmissionMapUv:G&&T(b.transmissionMap.channel),thicknessMapUv:we&&T(b.thicknessMap.channel),alphaMapUv:he&&T(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ft||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!de.attributes.uv&&(Lt||he),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&St.getTransfer(b.map.colorSpace)===It,decodeVideoTextureEmissive:bt&&b.emissiveMap.isVideoTexture===!0&&St.getTransfer(b.emissiveMap.colorSpace)===It,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ci,flipSided:b.side===Wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:rt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&b.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=d.has(1),Zt.vertexUv2s=d.has(2),Zt.vertexUv3s=d.has(3),d.clear(),Zt}function y(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)R.push(z),R.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(D(R,b),L(R,b),R.push(o.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function D(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function L(b,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),b.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),b.push(u.mask)}function C(b){const R=M[b.type];let z;if(R){const oe=Ri[R];z=vx.clone(oe.uniforms)}else z=b.uniforms;return z}function V(b,R){let z;for(let oe=0,te=m.length;oe<te;oe++){const ue=m[oe];if(ue.cacheKey===R){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new AA(o,R,b,a),m.push(z)),z}function O(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function U(b){f.remove(b)}function j(){f.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:C,acquireProgram:V,releaseProgram:O,releaseShaderCache:U,programs:m,dispose:j}}function PA(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,f){o.get(c)[u]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function LA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function t_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function n_(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,_,x,M,T,S){let y=o[e];return y===void 0?(y={id:g.id,object:g,geometry:_,material:x,groupOrder:M,renderOrder:g.renderOrder,z:T,group:S},o[e]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=T,y.group=S),e++,y}function u(g,_,x,M,T,S){const y=c(g,_,x,M,T,S);x.transmission>0?i.push(y):x.transparent===!0?s.push(y):t.push(y)}function f(g,_,x,M,T,S){const y=c(g,_,x,M,T,S);x.transmission>0?i.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function d(g,_){t.length>1&&t.sort(g||LA),i.length>1&&i.sort(_||t_),s.length>1&&s.sort(_||t_)}function m(){for(let g=e,_=o.length;g<_;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:f,finish:m,sort:d}}function IA(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new n_,o.set(i,[c])):s>=a.length?(c=new n_,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function DA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new st};break;case"SpotLight":t={position:new W,direction:new W,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new W,halfWidth:new W,halfHeight:new W};break}return o[e.id]=t,t}}}function NA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let UA=0;function FA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function OA(o){const e=new DA,t=NA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new W);const s=new W,a=new lt,c=new lt;function u(d){let m=0,g=0,_=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,D=0,L=0,C=0,V=0,O=0,U=0;d.sort(FA);for(let b=0,R=d.length;b<R;b++){const z=d[b],oe=z.color,te=z.intensity,ue=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=oe.r*te,g+=oe.g*te,_+=oe.b*te;else if(z.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(z.sh.coefficients[se],te);U++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,i.directionalShadow[x]=B,i.directionalShadowMap[x]=de,i.directionalShadowMatrix[x]=z.shadow.matrix,D++}i.directional[x]=se,x++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(oe).multiplyScalar(te),se.distance=ue,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,i.spot[T]=se;const le=z.shadow;if(z.map&&(i.spotLightMap[V]=z.map,V++,le.updateMatrices(z),z.castShadow&&O++),i.spotLightMatrix[T]=le.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,i.spotShadow[T]=B,i.spotShadowMap[T]=de,C++}T++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(oe).multiplyScalar(te),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=se,S++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,i.pointShadow[M]=B,i.pointShadowMap[M]=de,i.pointShadowMatrix[M]=z.shadow.matrix,L++}i.point[M]=se,M++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(te),se.groundColor.copy(z.groundColor).multiplyScalar(te),i.hemi[y]=se,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const j=i.hash;(j.directionalLength!==x||j.pointLength!==M||j.spotLength!==T||j.rectAreaLength!==S||j.hemiLength!==y||j.numDirectionalShadows!==D||j.numPointShadows!==L||j.numSpotShadows!==C||j.numSpotMaps!==V||j.numLightProbes!==U)&&(i.directional.length=x,i.spot.length=T,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+V-O,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=U,j.directionalLength=x,j.pointLength=M,j.spotLength=T,j.rectAreaLength=S,j.hemiLength=y,j.numDirectionalShadows=D,j.numPointShadows=L,j.numSpotShadows=C,j.numSpotMaps=V,j.numLightProbes=U,i.version=UA++)}function f(d,m){let g=0,_=0,x=0,M=0,T=0;const S=m.matrixWorldInverse;for(let y=0,D=d.length;y<D;y++){const L=d[y];if(L.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),g++}else if(L.isSpotLight){const C=i.spot[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),c.identity(),a.copy(L.matrixWorld),a.premultiply(S),c.extractRotation(a),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const C=i.point[_];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),_++}else if(L.isHemisphereLight){const C=i.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:u,setupView:f,state:i}}function i_(o){const e=new OA(o),t=[],i=[];function s(m){d.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function u(){e.setup(t)}function f(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function kA(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new i_(o),e.set(s,[u])):a>=c.length?(u=new i_(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const BA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
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
}`;function HA(o,e,t){let i=new nd;const s=new nt,a=new nt,c=new wt,u=new Ux({depthPacking:wy}),f=new Fx,d={},m=t.maxTextureSize,g={[sr]:Wn,[Wn]:sr,[Ci]:Ci},_=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:BA,fragmentShader:zA}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new Ii;M.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Gn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h_;let y=this.type;this.render=function(O,U,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const b=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(Vr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=y!==Qi&&this.type===Qi,ue=y===Qi&&this.type!==Qi;for(let de=0,se=O.length;de<se;de++){const le=O[de],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ae=B.getFrameExtents();if(s.multiply(ae),a.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/ae.x),s.x=a.x*ae.x,B.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/ae.y),s.y=a.y*ae.y,B.mapSize.y=a.y)),B.map===null||te===!0||ue===!0){const N=this.type!==Qi?{minFilter:In,magFilter:In}:{};B.map!==null&&B.map.dispose(),B.map=new vs(s.x,s.y,N),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const re=B.getViewportCount();for(let N=0;N<re;N++){const ne=B.getViewport(N);c.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),oe.viewport(c),B.updateMatrices(le,N),i=B.getFrustum(),C(U,j,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Qi&&D(B,j),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(b,R,z)};function D(O,U){const j=e.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new vs(s.x,s.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(U,null,j,_,T,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(U,null,j,x,T,null)}function L(O,U,j,b){let R=null;const z=j.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?f:u,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=R.uuid,te=U.uuid;let ue=d[oe];ue===void 0&&(ue={},d[oe]=ue);let de=ue[te];de===void 0&&(de=R.clone(),ue[te]=de,U.addEventListener("dispose",V)),R=de}if(R.visible=U.visible,R.wireframe=U.wireframe,b===Qi?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=o.properties.get(R);oe.light=j}return R}function C(O,U,j,b,R){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Qi)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,O.matrixWorld);const te=e.update(O),ue=O.material;if(Array.isArray(ue)){const de=te.groups;for(let se=0,le=de.length;se<le;se++){const B=de[se],ae=ue[B.materialIndex];if(ae&&ae.visible){const re=L(O,ae,b,R);O.onBeforeShadow(o,O,U,j,te,re,B),o.renderBufferDirect(j,null,te,re,O,B),O.onAfterShadow(o,O,U,j,te,re,B)}}}else if(ue.visible){const de=L(O,ue,b,R);O.onBeforeShadow(o,O,U,j,te,de,null),o.renderBufferDirect(j,null,te,de,O,null),O.onAfterShadow(o,O,U,j,te,de,null)}}const oe=O.children;for(let te=0,ue=oe.length;te<ue;te++)C(oe[te],U,j,b,R)}function V(O){O.target.removeEventListener("dispose",V);for(const j in d){const b=d[j],R=O.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const VA={[Zh]:Qh,[Jh]:nf,[ef]:rf,[_o]:tf,[Qh]:Zh,[nf]:Jh,[rf]:ef,[tf]:_o};function GA(o,e){function t(){let G=!1;const we=new wt;let ie=null;const he=new wt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!G&&(o.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,be,rt,Ot,Zt){Zt===!0&&(Pe*=Ot,be*=Ot,rt*=Ot),we.set(Pe,be,rt,Ot),he.equals(we)===!1&&(o.clearColor(Pe,be,rt,Ot),he.copy(we))},reset:function(){G=!1,ie=null,he.set(-1,0,0,0)}}}function i(){let G=!1,we=!1,ie=null,he=null,Pe=null;return{setReversed:function(be){if(we!==be){const rt=e.get("EXT_clip_control");we?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ot=Pe;Pe=null,this.setClear(Ot)}we=be},getReversed:function(){return we},setTest:function(be){be?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(be){ie!==be&&!G&&(o.depthMask(be),ie=be)},setFunc:function(be){if(we&&(be=VA[be]),he!==be){switch(be){case Zh:o.depthFunc(o.NEVER);break;case Qh:o.depthFunc(o.ALWAYS);break;case Jh:o.depthFunc(o.LESS);break;case _o:o.depthFunc(o.LEQUAL);break;case ef:o.depthFunc(o.EQUAL);break;case tf:o.depthFunc(o.GEQUAL);break;case nf:o.depthFunc(o.GREATER);break;case rf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}he=be}},setLocked:function(be){G=be},setClear:function(be){Pe!==be&&(we&&(be=1-be),o.clearDepth(be),Pe=be)},reset:function(){G=!1,ie=null,he=null,Pe=null,we=!1}}}function s(){let G=!1,we=null,ie=null,he=null,Pe=null,be=null,rt=null,Ot=null,Zt=null;return{setTest:function(Mt){G||(Mt?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Mt){we!==Mt&&!G&&(o.stencilMask(Mt),we=Mt)},setFunc:function(Mt,Un,An){(ie!==Mt||he!==Un||Pe!==An)&&(o.stencilFunc(Mt,Un,An),ie=Mt,he=Un,Pe=An)},setOp:function(Mt,Un,An){(be!==Mt||rt!==Un||Ot!==An)&&(o.stencilOp(Mt,Un,An),be=Mt,rt=Un,Ot=An)},setLocked:function(Mt){G=Mt},setClear:function(Mt){Zt!==Mt&&(o.clearStencil(Mt),Zt=Mt)},reset:function(){G=!1,we=null,ie=null,he=null,Pe=null,be=null,rt=null,Ot=null,Zt=null}}}const a=new t,c=new i,u=new s,f=new WeakMap,d=new WeakMap;let m={},g={},_=new WeakMap,x=[],M=null,T=!1,S=null,y=null,D=null,L=null,C=null,V=null,O=null,U=new st(0,0,0),j=0,b=!1,R=null,z=null,oe=null,te=null,ue=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=le>=2);let ae=null,re={};const N=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ne=new wt().fromArray(N),Q=new wt().fromArray(ne);function fe(G,we,ie,he){const Pe=new Uint8Array(4),be=o.createTexture();o.bindTexture(G,be),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let rt=0;rt<ie;rt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,he,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(we+rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return be}const Se={};Se[o.TEXTURE_2D]=fe(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ve(o.DEPTH_TEST),c.setFunc(_o),mt(!1),ft(Vm),ve(o.CULL_FACE),k(Vr);function ve(G){m[G]!==!0&&(o.enable(G),m[G]=!0)}function Te(G){m[G]!==!1&&(o.disable(G),m[G]=!1)}function De(G,we){return g[G]!==we?(o.bindFramebuffer(G,we),g[G]=we,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=we),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=we),!0):!1}function Ze(G,we){let ie=x,he=!1;if(G){ie=_.get(we),ie===void 0&&(ie=[],_.set(we,ie));const Pe=G.textures;if(ie.length!==Pe.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let be=0,rt=Pe.length;be<rt;be++)ie[be]=o.COLOR_ATTACHMENT0+be;ie.length=Pe.length,he=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,he=!0);he&&o.drawBuffers(ie)}function Lt(G){return M!==G?(o.useProgram(G),M=G,!0):!1}const _t={[ps]:o.FUNC_ADD,[Y0]:o.FUNC_SUBTRACT,[q0]:o.FUNC_REVERSE_SUBTRACT};_t[K0]=o.MIN,_t[$0]=o.MAX;const Ut={[Z0]:o.ZERO,[Q0]:o.ONE,[J0]:o.SRC_COLOR,[Kh]:o.SRC_ALPHA,[sy]:o.SRC_ALPHA_SATURATE,[iy]:o.DST_COLOR,[ty]:o.DST_ALPHA,[ey]:o.ONE_MINUS_SRC_COLOR,[$h]:o.ONE_MINUS_SRC_ALPHA,[ry]:o.ONE_MINUS_DST_COLOR,[ny]:o.ONE_MINUS_DST_ALPHA,[oy]:o.CONSTANT_COLOR,[ay]:o.ONE_MINUS_CONSTANT_COLOR,[ly]:o.CONSTANT_ALPHA,[cy]:o.ONE_MINUS_CONSTANT_ALPHA};function k(G,we,ie,he,Pe,be,rt,Ot,Zt,Mt){if(G===Vr){T===!0&&(Te(o.BLEND),T=!1);return}if(T===!1&&(ve(o.BLEND),T=!0),G!==j0){if(G!==S||Mt!==b){if((y!==ps||C!==ps)&&(o.blendEquation(o.FUNC_ADD),y=ps,C=ps),Mt)switch(G){case fo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gm:o.blendFunc(o.ONE,o.ONE);break;case Wm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Xm:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case fo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gm:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Wm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Xm:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,L=null,V=null,O=null,U.set(0,0,0),j=0,S=G,b=Mt}return}Pe=Pe||we,be=be||ie,rt=rt||he,(we!==y||Pe!==C)&&(o.blendEquationSeparate(_t[we],_t[Pe]),y=we,C=Pe),(ie!==D||he!==L||be!==V||rt!==O)&&(o.blendFuncSeparate(Ut[ie],Ut[he],Ut[be],Ut[rt]),D=ie,L=he,V=be,O=rt),(Ot.equals(U)===!1||Zt!==j)&&(o.blendColor(Ot.r,Ot.g,Ot.b,Zt),U.copy(Ot),j=Zt),S=G,b=!1}function Tn(G,we){G.side===Ci?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=G.side===Wn;we&&(ie=!ie),mt(ie),G.blending===fo&&G.transparent===!1?k(Vr):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const he=G.stencilWrite;u.setTest(he),he&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function mt(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function ft(G){G!==G0?(ve(o.CULL_FACE),G!==z&&(G===Vm?o.cullFace(o.BACK):G===W0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=G}function je(G){G!==oe&&(se&&o.lineWidth(G),oe=G)}function bt(G,we,ie){G?(ve(o.POLYGON_OFFSET_FILL),(te!==we||ue!==ie)&&(o.polygonOffset(we,ie),te=we,ue=ie)):Te(o.POLYGON_OFFSET_FILL)}function Ge(G){G?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function P(G){G===void 0&&(G=o.TEXTURE0+de-1),ae!==G&&(o.activeTexture(G),ae=G)}function A(G,we,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+de-1:ie=ae);let he=re[ie];he===void 0&&(he={type:void 0,texture:void 0},re[ie]=he),(he.type!==G||he.texture!==we)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(G,we||Se[G]),he.type=G,he.texture=we)}function Z(){const G=re[ae];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){Ne.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function ke(G){Q.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function dt(G,we){let ie=d.get(we);ie===void 0&&(ie=new WeakMap,d.set(we,ie));let he=ie.get(G);he===void 0&&(he=o.getUniformBlockIndex(we,G.name),ie.set(G,he))}function it(G,we){const he=d.get(we).get(G);f.get(we)!==he&&(o.uniformBlockBinding(we,he,G.__bindingPointIndex),f.set(we,he))}function Rt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ae=null,re={},g={},_=new WeakMap,x=[],M=null,T=!1,S=null,y=null,D=null,L=null,C=null,V=null,O=null,U=new st(0,0,0),j=0,b=!1,R=null,z=null,oe=null,te=null,ue=null,Ne.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ve,disable:Te,bindFramebuffer:De,drawBuffers:Ze,useProgram:Lt,setBlending:k,setMaterial:Tn,setFlipSided:mt,setCullFace:ft,setLineWidth:je,setPolygonOffset:bt,setScissorTest:Ge,activeTexture:P,bindTexture:A,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:qe,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:Me,texSubImage2D:ce,texSubImage3D:We,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ue,scissor:Je,viewport:ke,reset:Rt}}function WA(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new nt,m=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,A){return x?new OffscreenCanvas(P,A):Ra("canvas")}function T(P,A,Z){let pe=1;const ge=Ge(P);if((ge.width>Z||ge.height>Z)&&(pe=Z/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ce=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);g===void 0&&(g=M(ce,We));const Ae=A?M(ce,We):g;return Ae.width=ce,Ae.height=We,Ae.getContext("2d").drawImage(P,0,0,ce,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+We+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function S(P){return P.generateMipmaps}function y(P){o.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(P,A,Z,pe,ge=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce=A;if(A===o.RED&&(Z===o.FLOAT&&(ce=o.R32F),Z===o.HALF_FLOAT&&(ce=o.R16F),Z===o.UNSIGNED_BYTE&&(ce=o.R8)),A===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ce=o.R8UI),Z===o.UNSIGNED_SHORT&&(ce=o.R16UI),Z===o.UNSIGNED_INT&&(ce=o.R32UI),Z===o.BYTE&&(ce=o.R8I),Z===o.SHORT&&(ce=o.R16I),Z===o.INT&&(ce=o.R32I)),A===o.RG&&(Z===o.FLOAT&&(ce=o.RG32F),Z===o.HALF_FLOAT&&(ce=o.RG16F),Z===o.UNSIGNED_BYTE&&(ce=o.RG8)),A===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ce=o.RG8UI),Z===o.UNSIGNED_SHORT&&(ce=o.RG16UI),Z===o.UNSIGNED_INT&&(ce=o.RG32UI),Z===o.BYTE&&(ce=o.RG8I),Z===o.SHORT&&(ce=o.RG16I),Z===o.INT&&(ce=o.RG32I)),A===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),Z===o.UNSIGNED_INT&&(ce=o.RGB32UI),Z===o.BYTE&&(ce=o.RGB8I),Z===o.SHORT&&(ce=o.RGB16I),Z===o.INT&&(ce=o.RGB32I)),A===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),Z===o.UNSIGNED_INT&&(ce=o.RGBA32UI),Z===o.BYTE&&(ce=o.RGBA8I),Z===o.SHORT&&(ce=o.RGBA16I),Z===o.INT&&(ce=o.RGBA32I)),A===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),A===o.RGBA){const We=ge?Ec:St.getTransfer(pe);Z===o.FLOAT&&(ce=o.RGBA32F),Z===o.HALF_FLOAT&&(ce=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(ce=We===It?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(P,A){let Z;return P?A===null||A===_s||A===So?Z=o.DEPTH24_STENCIL8:A===yi?Z=o.DEPTH32F_STENCIL8:A===Ta&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===_s||A===So?Z=o.DEPTH_COMPONENT24:A===yi?Z=o.DEPTH_COMPONENT32F:A===Ta&&(Z=o.DEPTH_COMPONENT16),Z}function V(P,A){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==Zn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function O(P){const A=P.target;A.removeEventListener("dispose",O),j(A),A.isVideoTexture&&m.delete(A)}function U(P){const A=P.target;A.removeEventListener("dispose",U),R(A)}function j(P){const A=i.get(P);if(A.__webglInit===void 0)return;const Z=P.source,pe=_.get(Z);if(pe){const ge=pe[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(P),Object.keys(pe).length===0&&_.delete(Z)}i.remove(P)}function b(P){const A=i.get(P);o.deleteTexture(A.__webglTexture);const Z=P.source,pe=_.get(Z);delete pe[A.__cacheKey],c.memory.textures--}function R(P){const A=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let ge=0;ge<A.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(A.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)o.deleteFramebuffer(A.__webglFramebuffer[pe]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=P.textures;for(let pe=0,ge=Z.length;pe<ge;pe++){const ce=i.get(Z[pe]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),c.memory.textures--),i.remove(Z[pe])}i.remove(P)}let z=0;function oe(){z=0}function te(){const P=z;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function ue(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function de(P,A){const Z=i.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,P,A);return}}t.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+A)}function se(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,A);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+A)}function le(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,A);return}t.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+A)}function B(P,A){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){fe(Z,P,A);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+A)}const ae={[xo]:o.REPEAT,[Br]:o.CLAMP_TO_EDGE,[Sc]:o.MIRRORED_REPEAT},re={[In]:o.NEAREST,[p_]:o.NEAREST_MIPMAP_NEAREST,[ya]:o.NEAREST_MIPMAP_LINEAR,[Zn]:o.LINEAR,[pc]:o.LINEAR_MIPMAP_NEAREST,[tr]:o.LINEAR_MIPMAP_LINEAR},N={[Cy]:o.NEVER,[Ny]:o.ALWAYS,[by]:o.LESS,[w_]:o.LEQUAL,[Py]:o.EQUAL,[Dy]:o.GEQUAL,[Ly]:o.GREATER,[Iy]:o.NOTEQUAL};function ne(P,A){if(A.type===yi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Zn||A.magFilter===pc||A.magFilter===ya||A.magFilter===tr||A.minFilter===Zn||A.minFilter===pc||A.minFilter===ya||A.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,ae[A.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,ae[A.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,ae[A.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,re[A.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===In||A.minFilter!==ya&&A.minFilter!==tr||A.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ne(P,A){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",O));const pe=A.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const ce=ue(A);if(ce!==P.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),ge[ce].usedTimes++;const We=ge[P.__cacheKey];We!==void 0&&(ge[P.__cacheKey].usedTimes--,We.usedTimes===0&&b(A)),P.__cacheKey=ce,P.__webglTexture=ge[ce].texture}return Z}function Q(P,A,Z){let pe=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ne(P,A),ce=A.source;t.bindTexture(pe,P.__webglTexture,o.TEXTURE0+Z);const We=i.get(ce);if(ce.version!==We.__version||ge===!0){t.activeTexture(o.TEXTURE0+Z);const Ae=St.getPrimaries(St.workingColorSpace),Ue=A.colorSpace===kr?null:St.getPrimaries(A.colorSpace),ut=A.colorSpace===kr||Ae===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=T(A.image,!1,s.maxTextureSize);Me=bt(A,Me);const Oe=a.convert(A.format,A.colorSpace),qe=a.convert(A.type);let Je=L(A.internalFormat,Oe,qe,A.colorSpace,A.isVideoTexture);ne(pe,A);let ke;const dt=A.mipmaps,it=A.isVideoTexture!==!0,Rt=We.__version===void 0||ge===!0,G=ce.dataReady,we=V(A,Me);if(A.isDepthTexture)Je=C(A.format===Mo,A.type),Rt&&(it?t.texStorage2D(o.TEXTURE_2D,1,Je,Me.width,Me.height):t.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,null));else if(A.isDataTexture)if(dt.length>0){it&&Rt&&t.texStorage2D(o.TEXTURE_2D,we,Je,dt[0].width,dt[0].height);for(let ie=0,he=dt.length;ie<he;ie++)ke=dt[ie],it?G&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,qe,ke.data):t.texImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,Oe,qe,ke.data);A.generateMipmaps=!1}else it?(Rt&&t.texStorage2D(o.TEXTURE_2D,we,Je,Me.width,Me.height),G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,qe,Me.data)):t.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,Me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){it&&Rt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,Je,dt[0].width,dt[0].height,Me.depth);for(let ie=0,he=dt.length;ie<he;ie++)if(ke=dt[ie],A.format!==ai)if(Oe!==null)if(it){if(G)if(A.layerUpdates.size>0){const Pe=Dg(ke.width,ke.height,A.format,A.type);for(const be of A.layerUpdates){const rt=ke.data.subarray(be*Pe/ke.data.BYTES_PER_ELEMENT,(be+1)*Pe/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,be,ke.width,ke.height,1,Oe,rt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Je,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,qe,ke.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ie,Je,ke.width,ke.height,Me.depth,0,Oe,qe,ke.data)}else{it&&Rt&&t.texStorage2D(o.TEXTURE_2D,we,Je,dt[0].width,dt[0].height);for(let ie=0,he=dt.length;ie<he;ie++)ke=dt[ie],A.format!==ai?Oe!==null?it?G&&t.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,qe,ke.data):t.texImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,Oe,qe,ke.data)}else if(A.isDataArrayTexture)if(it){if(Rt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,Je,Me.width,Me.height,Me.depth),G)if(A.layerUpdates.size>0){const ie=Dg(Me.width,Me.height,A.format,A.type);for(const he of A.layerUpdates){const Pe=Me.data.subarray(he*ie/Me.data.BYTES_PER_ELEMENT,(he+1)*ie/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Oe,qe,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(A.isData3DTexture)it?(Rt&&t.texStorage3D(o.TEXTURE_3D,we,Je,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)):t.texImage3D(o.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(A.isFramebufferTexture){if(Rt)if(it)t.texStorage2D(o.TEXTURE_2D,we,Je,Me.width,Me.height);else{let ie=Me.width,he=Me.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(o.TEXTURE_2D,Pe,Je,ie,he,0,Oe,qe,null),ie>>=1,he>>=1}}else if(dt.length>0){if(it&&Rt){const ie=Ge(dt[0]);t.texStorage2D(o.TEXTURE_2D,we,Je,ie.width,ie.height)}for(let ie=0,he=dt.length;ie<he;ie++)ke=dt[ie],it?G&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,Oe,qe,ke):t.texImage2D(o.TEXTURE_2D,ie,Je,Oe,qe,ke);A.generateMipmaps=!1}else if(it){if(Rt){const ie=Ge(Me);t.texStorage2D(o.TEXTURE_2D,we,Je,ie.width,ie.height)}G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,qe,Me)}else t.texImage2D(o.TEXTURE_2D,0,Je,Oe,qe,Me);S(A)&&y(pe),We.__version=ce.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function fe(P,A,Z){if(A.image.length!==6)return;const pe=Ne(P,A),ge=A.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+Z);const ce=i.get(ge);if(ge.version!==ce.__version||pe===!0){t.activeTexture(o.TEXTURE0+Z);const We=St.getPrimaries(St.workingColorSpace),Ae=A.colorSpace===kr?null:St.getPrimaries(A.colorSpace),Ue=A.colorSpace===kr||We===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=A.isCompressedTexture||A.image[0].isCompressedTexture,Me=A.image[0]&&A.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!ut&&!Me?Oe[he]=T(A.image[he],!0,s.maxCubemapSize):Oe[he]=Me?A.image[he].image:A.image[he],Oe[he]=bt(A,Oe[he]);const qe=Oe[0],Je=a.convert(A.format,A.colorSpace),ke=a.convert(A.type),dt=L(A.internalFormat,Je,ke,A.colorSpace),it=A.isVideoTexture!==!0,Rt=ce.__version===void 0||pe===!0,G=ge.dataReady;let we=V(A,qe);ne(o.TEXTURE_CUBE_MAP,A);let ie;if(ut){it&&Rt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,we,dt,qe.width,qe.height);for(let he=0;he<6;he++){ie=Oe[he].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){const be=ie[Pe];A.format!==ai?Je!==null?it?G&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,be.width,be.height,Je,be.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,dt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,be.width,be.height,Je,ke,be.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,dt,be.width,be.height,0,Je,ke,be.data)}}}else{if(ie=A.mipmaps,it&&Rt){ie.length>0&&we++;const he=Ge(Oe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,we,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Me){it?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,Je,ke,Oe[he].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Oe[he].width,Oe[he].height,0,Je,ke,Oe[he].data);for(let Pe=0;Pe<ie.length;Pe++){const rt=ie[Pe].image[he].image;it?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,rt.width,rt.height,Je,ke,rt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,dt,rt.width,rt.height,0,Je,ke,rt.data)}}else{it?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,ke,Oe[he]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Je,ke,Oe[he]);for(let Pe=0;Pe<ie.length;Pe++){const be=ie[Pe];it?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,Je,ke,be.image[he]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,dt,Je,ke,be.image[he])}}}S(A)&&y(o.TEXTURE_CUBE_MAP),ce.__version=ge.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Se(P,A,Z,pe,ge,ce){const We=a.convert(Z.format,Z.colorSpace),Ae=a.convert(Z.type),Ue=L(Z.internalFormat,We,Ae,Z.colorSpace),ut=i.get(A),Me=i.get(Z);if(Me.__renderTarget=A,!ut.__hasExternalTextures){const Oe=Math.max(1,A.width>>ce),qe=Math.max(1,A.height>>ce);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,ce,Ue,Oe,qe,A.depth,0,We,Ae,null):t.texImage2D(ge,ce,Ue,Oe,qe,0,We,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),ft(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,mt(A)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,ce),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(P,A,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,P),A.depthBuffer){const pe=A.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=C(A.stencilBuffer,ge),We=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=mt(A);ft(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,ce,A.width,A.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,ce,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ce,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,P)}else{const pe=A.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],We=a.convert(ce.format,ce.colorSpace),Ae=a.convert(ce.type),Ue=L(ce.internalFormat,We,Ae,ce.colorSpace),ut=mt(A);Z&&ft(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,Ue,A.width,A.height):ft(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,Ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(A.depthTexture);pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),de(A.depthTexture,0);const ge=pe.__webglTexture,ce=mt(A);if(A.depthTexture.format===po)ft(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(A.depthTexture.format===Mo)ft(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function De(P){const A=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=pe}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Te(A.__webglFramebuffer,P)}else if(Z){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(A.__webglDepthbuffer[pe],P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),ve(A.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(P,A,Z){const pe=i.get(P);A!==void 0&&Se(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&De(P)}function Lt(P){const A=P.texture,Z=i.get(P),pe=i.get(A);P.addEventListener("dispose",U);const ge=P.textures,ce=P.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=A.version,c.memory.textures++),ce){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)Z.__webglFramebuffer[Ae][Ue]=o.createFramebuffer()}else Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(We)for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const ut=i.get(ge[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),c.memory.textures++)}if(P.samples>0&&ft(P)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ue=ge[Ae];Z.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const ut=a.convert(Ue.format,Ue.colorSpace),Me=a.convert(Ue.type),Oe=L(Ue.internalFormat,ut,Me,Ue.colorSpace,P.isXRRenderTarget===!0),qe=mt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Oe,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Se(Z.__webglFramebuffer[Ae][Ue],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Se(Z.__webglFramebuffer[Ae],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(A)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const ut=ge[Ae],Me=i.get(ut);t.bindTexture(o.TEXTURE_2D,Me.__webglTexture),ne(o.TEXTURE_2D,ut),Se(Z.__webglFramebuffer,P,ut,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),S(ut)&&y(o.TEXTURE_2D)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),ne(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Se(Z.__webglFramebuffer[Ue],P,A,o.COLOR_ATTACHMENT0,Ae,Ue);else Se(Z.__webglFramebuffer,P,A,o.COLOR_ATTACHMENT0,Ae,0);S(A)&&y(Ae),t.unbindTexture()}P.depthBuffer&&De(P)}function _t(P){const A=P.textures;for(let Z=0,pe=A.length;Z<pe;Z++){const ge=A[Z];if(S(ge)){const ce=D(P),We=i.get(ge).__webglTexture;t.bindTexture(ce,We),y(ce),t.unbindTexture()}}}const Ut=[],k=[];function Tn(P){if(P.samples>0){if(ft(P)===!1){const A=P.textures,Z=P.width,pe=P.height;let ge=o.COLOR_BUFFER_BIT;const ce=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=i.get(P),Ae=A.length>1;if(Ae)for(let Ue=0;Ue<A.length;Ue++)t.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ut=i.get(A[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ut,0)}o.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ge,o.NEAREST),f===!0&&(Ut.length=0,k.length=0,Ut.push(o.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ut.push(ce),k.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<A.length;Ue++){t.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ut=i.get(A[Ue]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,ut,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const A=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function mt(P){return Math.min(s.maxSamples,P.samples)}function ft(P){const A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(P){const A=c.render.frame;m.get(P)!==A&&(m.set(P,A),P.update())}function bt(P,A){const Z=P.colorSpace,pe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Nn&&Z!==kr&&(St.getTransfer(Z)===It?(pe!==ai||ge!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=de,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ft}function XA(o,e){function t(i,s=kr){let a;const c=St.getTransfer(s);if(i===or)return o.UNSIGNED_BYTE;if(i===Xf)return o.UNSIGNED_SHORT_4_4_4_4;if(i===jf)return o.UNSIGNED_SHORT_5_5_5_1;if(i===__)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===m_)return o.BYTE;if(i===g_)return o.SHORT;if(i===Ta)return o.UNSIGNED_SHORT;if(i===Wf)return o.INT;if(i===_s)return o.UNSIGNED_INT;if(i===yi)return o.FLOAT;if(i===Ca)return o.HALF_FLOAT;if(i===v_)return o.ALPHA;if(i===y_)return o.RGB;if(i===ai)return o.RGBA;if(i===x_)return o.LUMINANCE;if(i===S_)return o.LUMINANCE_ALPHA;if(i===po)return o.DEPTH_COMPONENT;if(i===Mo)return o.DEPTH_STENCIL;if(i===Yf)return o.RED;if(i===qf)return o.RED_INTEGER;if(i===M_)return o.RG;if(i===Kf)return o.RG_INTEGER;if(i===$f)return o.RGBA_INTEGER;if(i===mc||i===gc||i===_c||i===vc)if(c===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===mc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===mc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_c)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===af||i===lf||i===cf||i===uf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===af)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hf||i===ff||i===df)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===hf||i===ff)return c===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===df)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pf||i===mf||i===gf||i===_f||i===vf||i===yf||i===xf||i===Sf||i===Mf||i===Ef||i===Tf||i===Af||i===wf||i===Rf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===pf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_f)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ef)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Af)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rf)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===Cf||i===bf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===yc)return c===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===E_||i===Pf||i===Lf||i===If)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===yc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Pf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===If)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const jA={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,i),y=this._getHandJoint(d,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=m.position.distanceTo(g.position),x=.02,M=.005;d.inputState.pinching&&_>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(jA)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const YA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
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

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new hn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wr({vertexShader:YA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new Cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $A extends Xr{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",f=1,d=null,m=null,g=null,_=null,x=null,M=null;const T=new KA,S=t.getContextAttributes();let y=null,D=null;const L=[],C=[],V=new nt;let O=null;const U=new Ln;U.viewport=new wt;const j=new Ln;j.viewport=new wt;const b=[U,j],R=new nS;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=L[Q];return fe===void 0&&(fe=new Wh,L[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=L[Q];return fe===void 0&&(fe=new Wh,L[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=L[Q];return fe===void 0&&(fe=new Wh,L[Q]=fe),fe.getHandSpace()};function te(Q){const fe=C.indexOf(Q.inputSource);if(fe===-1)return;const Se=L[fe];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,d||c),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",de);for(let Q=0;Q<L.length;Q++){const fe=C[Q];fe!==null&&(C[Q]=null,L[Q].disconnect(fe))}z=null,oe=null,T.reset(),e.setRenderTarget(y),x=null,_=null,g=null,s=null,D=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(V),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Se=null,ve=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=S.stencil?Mo:po,ve=S.stencil?So:_s);const De={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(De),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new vs(_.textureWidth,_.textureHeight,{format:ai,type:or,depthTexture:new H_(_.textureWidth,_.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new vs(x.framebufferWidth,x.framebufferHeight,{format:ai,type:or,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}D.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await s.requestReferenceSpace(u),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function de(Q){for(let fe=0;fe<Q.removed.length;fe++){const Se=Q.removed[fe],ve=C.indexOf(Se);ve>=0&&(C[ve]=null,L[ve].disconnect(Se))}for(let fe=0;fe<Q.added.length;fe++){const Se=Q.added[fe];let ve=C.indexOf(Se);if(ve===-1){for(let De=0;De<L.length;De++)if(De>=C.length){C.push(Se),ve=De;break}else if(C[De]===null){C[De]=Se,ve=De;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(Se)}}const se=new W,le=new W;function B(Q,fe,Se){se.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const ve=se.distanceTo(le),Te=fe.projectionMatrix.elements,De=Se.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Lt=Te[14]/(Te[10]+1),_t=(Te[9]+1)/Te[5],Ut=(Te[9]-1)/Te[5],k=(Te[8]-1)/Te[0],Tn=(De[8]+1)/De[0],mt=Ze*k,ft=Ze*Tn,je=ve/(-k+Tn),bt=je*-k;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(bt),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ge=Ze+je,P=Lt+je,A=mt-bt,Z=ft+(ve-bt),pe=_t*Lt/P*Ge,ge=Ut*Lt/P*Ge;Q.projectionMatrix.makePerspective(A,Z,pe,ge,Ge,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let fe=Q.near,Se=Q.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(Se=T.depthFar)),R.near=j.near=U.near=fe,R.far=j.far=U.far=Se,(z!==R.near||oe!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,oe=R.far),U.layers.mask=Q.layers.mask|2,j.layers.mask=Q.layers.mask|4,R.layers.mask=U.layers.mask|j.layers.mask;const ve=Q.parent,Te=R.cameras;ae(R,ve);for(let De=0;De<Te.length;De++)ae(Te[De],ve);Te.length===2?B(R,U,j):R.projectionMatrix.copy(U.projectionMatrix),re(Q,R,ve)};function re(Q,fe,Se){Se===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Eo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&x===null))return f},this.setFoveation=function(Q){f=Q,_!==null&&(_.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let N=null;function ne(Q,fe){if(m=fe.getViewerPose(d||c),M=fe,m!==null){const Se=m.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let ve=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let De=0;De<Se.length;De++){const Ze=Se[De];let Lt=null;if(x!==null)Lt=x.getViewport(Ze);else{const Ut=g.getViewSubImage(_,Ze);Lt=Ut.viewport,De===0&&(e.setRenderTargetTextures(D,Ut.colorTexture,_.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(D))}let _t=b[De];_t===void 0&&(_t=new Ln,_t.layers.enable(De),_t.viewport=new wt,b[De]=_t),_t.matrix.fromArray(Ze.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Ze.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),De===0&&(R.matrix.copy(_t.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(_t)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const De=g.getDepthInformation(Se[0]);De&&De.isValid&&De.texture&&T.init(e,De,s.renderState)}}for(let Se=0;Se<L.length;Se++){const ve=C[Se],Te=L[Se];ve!==null&&Te!==void 0&&Te.update(ve,fe,d||c)}N&&N(Q,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Ne=new Y_;Ne.setAnimationLoop(ne),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const hs=new Pi,ZA=new lt;function QA(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,U_(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,D,L,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),m(S,y)):y.isMeshStandardMaterial?(a(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),T(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?f(S,y,D,L):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Wn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Wn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),L=D.envMap,C=D.envMapRotation;L&&(S.envMap.value=L,hs.copy(C),hs.x*=-1,hs.y*=-1,hs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),S.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(hs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,D,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Wn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JA(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,L){const C=L.program;i.uniformBlockBinding(D,C)}function d(D,L){let C=s[D.id];C===void 0&&(M(D),C=m(D),s[D.id]=C,D.addEventListener("dispose",S));const V=L.program;i.updateUBOMapping(D,V);const O=e.render.frame;a[D.id]!==O&&(_(D),a[D.id]=O)}function m(D){const L=g();D.__bindingPointIndex=L;const C=o.createBuffer(),V=D.__size,O=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,V,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function g(){for(let D=0;D<u;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const L=s[D.id],C=D.uniforms,V=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,U=C.length;O<U;O++){const j=Array.isArray(C[O])?C[O]:[C[O]];for(let b=0,R=j.length;b<R;b++){const z=j[b];if(x(z,O,b,V)===!0){const oe=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let de=0;de<te.length;de++){const se=te[de],le=T(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+ue,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,ue),ue+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(D,L,C,V){const O=D.value,U=L+"_"+C;if(V[U]===void 0)return typeof O=="number"||typeof O=="boolean"?V[U]=O:V[U]=O.clone(),!0;{const j=V[U];if(typeof O=="number"||typeof O=="boolean"){if(j!==O)return V[U]=O,!0}else if(j.equals(O)===!1)return j.copy(O),!0}return!1}function M(D){const L=D.uniforms;let C=0;const V=16;for(let U=0,j=L.length;U<j;U++){const b=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,z=b.length;R<z;R++){const oe=b[R],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let ue=0,de=te.length;ue<de;ue++){const se=te[ue],le=T(se),B=C%V,ae=B%le.boundary,re=B+ae;C+=ae,re!==0&&V-re<le.storage&&(C+=V-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const O=C%V;return O>0&&(C+=V-O),D.__size=C,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete a[L.id]}function y(){for(const D in s)o.deleteBuffer(s[D]);c=[],s={},a={}}return{bind:f,update:d,dispose:y}}class ew{constructor(e={}){const{canvas:t=Zy(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Gr,this.toneMappingExposure=1;const C=this;let V=!1,O=0,U=0,j=null,b=-1,R=null;const z=new wt,oe=new wt;let te=null;const ue=new st(0);let de=0,se=t.width,le=t.height,B=1,ae=null,re=null;const N=new wt(0,0,se,le),ne=new wt(0,0,se,le);let Ne=!1;const Q=new nd;let fe=!1,Se=!1;this.transmissionResolutionScale=1;const ve=new lt,Te=new lt,De=new W,Ze=new wt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Ut(){return j===null?B:1}let k=i;function Tn(w,X){return t.getContext(w,X)}try{const w={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gf}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",be,!1),k===null){const X="webgl2";if(k=Tn(X,w),k===null)throw Tn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let mt,ft,je,bt,Ge,P,A,Z,pe,ge,ce,We,Ae,Ue,ut,Me,Oe,qe,Je,ke,dt,it,Rt,G;function we(){mt=new cT(k),mt.init(),it=new XA(k,mt),ft=new iT(k,mt,e,it),je=new GA(k,mt),ft.reverseDepthBuffer&&_&&je.buffers.depth.setReversed(!0),bt=new fT(k),Ge=new PA,P=new WA(k,mt,je,Ge,ft,it,bt),A=new sT(C),Z=new lT(C),pe=new yS(k),Rt=new tT(k,pe),ge=new uT(k,pe,bt,Rt),ce=new pT(k,ge,pe,bt),Je=new dT(k,ft,P),Me=new rT(Ge),We=new bA(C,A,Z,mt,ft,Rt,Me),Ae=new QA(C,Ge),Ue=new IA,ut=new kA(mt),qe=new eT(C,A,Z,je,ce,x,f),Oe=new HA(C,ce,ft),G=new JA(k,bt,ft,je),ke=new nT(k,mt,bt),dt=new hT(k,mt,bt),bt.programs=We.programs,C.capabilities=ft,C.extensions=mt,C.properties=Ge,C.renderLists=Ue,C.shadowMap=Oe,C.state=je,C.info=bt}we();const ie=new $A(C,k);this.xr=ie,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(se,le,!1))},this.getSize=function(w){return w.set(se,le)},this.setSize=function(w,X,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,le=X,t.width=Math.floor(w*B),t.height=Math.floor(X*B),J===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(se*B,le*B).floor()},this.setDrawingBufferSize=function(w,X,J){se=w,le=X,B=J,t.width=Math.floor(w*J),t.height=Math.floor(X*J),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,X,J,K){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,X,J,K),je.viewport(z.copy(N).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,X,J,K){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,X,J,K),je.scissor(oe.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){je.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(w=!0,X=!0,J=!0){let K=0;if(w){let Y=!1;if(j!==null){const xe=j.texture.format;Y=xe===$f||xe===Kf||xe===qf}if(Y){const xe=j.texture.type,Re=xe===or||xe===_s||xe===Ta||xe===So||xe===Xf||xe===jf,Le=qe.getClearColor(),Be=qe.getClearAlpha(),et=Le.r,Qe=Le.g,He=Le.b;Re?(M[0]=et,M[1]=Qe,M[2]=He,M[3]=Be,k.clearBufferuiv(k.COLOR,0,M)):(T[0]=et,T[1]=Qe,T[2]=He,T[3]=Be,k.clearBufferiv(k.COLOR,0,T))}else K|=k.COLOR_BUFFER_BIT}X&&(K|=k.DEPTH_BUFFER_BIT),J&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),qe.dispose(),Ue.dispose(),ut.dispose(),Ge.dispose(),A.dispose(),Z.dispose(),ce.dispose(),Rt.dispose(),G.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",xs),ie.removeEventListener("sessionend",lr),Ui.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const w=bt.autoReset,X=Oe.enabled,J=Oe.autoUpdate,K=Oe.needsUpdate,Y=Oe.type;we(),bt.autoReset=w,Oe.enabled=X,Oe.autoUpdate=J,Oe.needsUpdate=K,Oe.type=Y}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const X=w.target;X.removeEventListener("dispose",rt),Ot(X)}function Ot(w){Zt(w),Ge.remove(w)}function Zt(w){const X=Ge.get(w).programs;X!==void 0&&(X.forEach(function(J){We.releaseProgram(J)}),w.isShaderMaterial&&We.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,J,K,Y,xe){X===null&&(X=Lt);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,Le=Da(w,X,J,K,Y);je.setMaterial(K,Re);let Be=J.index,et=1;if(K.wireframe===!0){if(Be=ge.getWireframeAttribute(J),Be===void 0)return;et=2}const Qe=J.drawRange,He=J.attributes.position;let yt=Qe.start*et,ot=(Qe.start+Qe.count)*et;xe!==null&&(yt=Math.max(yt,xe.start*et),ot=Math.min(ot,(xe.start+xe.count)*et)),Be!==null?(yt=Math.max(yt,0),ot=Math.min(ot,Be.count)):He!=null&&(yt=Math.max(yt,0),ot=Math.min(ot,He.count));const Xt=ot-yt;if(Xt<0||Xt===1/0)return;Rt.setup(Y,K,Le,J,Be);let zt,xt=ke;if(Be!==null&&(zt=pe.get(Be),xt=dt,xt.setIndex(zt)),Y.isMesh)K.wireframe===!0?(je.setLineWidth(K.wireframeLinewidth*Ut()),xt.setMode(k.LINES)):xt.setMode(k.TRIANGLES);else if(Y.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Ut()),Y.isLineSegments?xt.setMode(k.LINES):Y.isLineLoop?xt.setMode(k.LINE_LOOP):xt.setMode(k.LINE_STRIP)}else Y.isPoints?xt.setMode(k.POINTS):Y.isSprite&&xt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)xt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ye=Y._multiDrawStarts,jt=Y._multiDrawCounts,vt=Y._multiDrawCount,mn=Be?pe.get(Be).bytesPerElement:1,ur=Ge.get(K).currentProgram.getUniforms();for(let wn=0;wn<vt;wn++)ur.setValue(k,"_gl_DrawID",wn),xt.render(Ye[wn]/mn,jt[wn])}else if(Y.isInstancedMesh)xt.renderInstances(yt,Xt,Y.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,jt=Math.min(J.instanceCount,Ye);xt.renderInstances(yt,Xt,jt)}else xt.render(yt,Xt)};function Mt(w,X,J){w.transparent===!0&&w.side===Ci&&w.forceSinglePass===!1?(w.side=Wn,w.needsUpdate=!0,Ss(w,X,J),w.side=sr,w.needsUpdate=!0,Ss(w,X,J),w.side=Ci):Ss(w,X,J)}this.compile=function(w,X,J=null){J===null&&(J=w),y=ut.get(J),y.init(X),L.push(y),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),w!==J&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const K=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const xe=Y.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const Le=xe[Re];Mt(Le,J,Y),K.add(Le)}else Mt(xe,J,Y),K.add(xe)}),L.pop(),y=null,K},this.compileAsync=function(w,X,J=null){const K=this.compile(w,X,J);return new Promise(Y=>{function xe(){if(K.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&K.delete(Re)}),K.size===0){Y(w);return}setTimeout(xe,10)}mt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Un=null;function An(w){Un&&Un(w)}function xs(){Ui.stop()}function lr(){Ui.start()}const Ui=new Y_;Ui.setAnimationLoop(An),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(w){Un=w,ie.setAnimationLoop(w),w===null?Ui.stop():Ui.start()},ie.addEventListener("sessionstart",xs),ie.addEventListener("sessionend",lr),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,X,j),y=ut.get(w,L.length),y.init(X),L.push(y),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,Se),S=Ue.get(w,D.length),S.init(),D.push(S),ie.enabled===!0&&ie.isPresenting===!0){const xe=C.xr.getDepthSensingMesh();xe!==null&&Fi(xe,X,-1/0,C.sortObjects)}Fi(w,X,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ae,re),_t=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,_t&&qe.addToRenderList(S,w),this.info.render.frame++,fe===!0&&Me.beginShadows();const J=y.state.shadowsArray;Oe.render(J,w,X),fe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=S.opaque,Y=S.transmissive;if(y.setupLights(),X.isArrayCamera){const xe=X.cameras;if(Y.length>0)for(let Re=0,Le=xe.length;Re<Le;Re++){const Be=xe[Re];Yr(K,Y,w,Be)}_t&&qe.render(w);for(let Re=0,Le=xe.length;Re<Le;Re++){const Be=xe[Re];jr(S,w,Be,Be.viewport)}}else Y.length>0&&Yr(K,Y,w,X),_t&&qe.render(w),jr(S,w,X);j!==null&&U===0&&(P.updateMultisampleRenderTarget(j),P.updateRenderTargetMipmap(j)),w.isScene===!0&&w.onAfterRender(C,w,X),Rt.resetDefaultState(),b=-1,R=null,L.pop(),L.length>0?(y=L[L.length-1],fe===!0&&Me.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Fi(w,X,J,K){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){K&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Re=ce.update(w),Le=w.material;Le.visible&&S.push(w,Re,Le,J,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Re=ce.update(w),Le=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const Be=Re.groups;for(let et=0,Qe=Be.length;et<Qe;et++){const He=Be[et],yt=Le[He.materialIndex];yt&&yt.visible&&S.push(w,Re,yt,J,Ze.z,He)}}else Le.visible&&S.push(w,Re,Le,J,Ze.z,null)}}const xe=w.children;for(let Re=0,Le=xe.length;Re<Le;Re++)Fi(xe[Re],X,J,K)}function jr(w,X,J,K){const Y=w.opaque,xe=w.transmissive,Re=w.transparent;y.setupLightsView(J),fe===!0&&Me.setGlobalState(C.clippingPlanes,J),K&&je.viewport(z.copy(K)),Y.length>0&&cr(Y,X,J),xe.length>0&&cr(xe,X,J),Re.length>0&&cr(Re,X,J),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Yr(w,X,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[K.id]===void 0&&(y.state.transmissionRenderTarget[K.id]=new vs(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Ca:or,minFilter:tr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const xe=y.state.transmissionRenderTarget[K.id],Re=K.viewport||z;xe.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const Le=C.getRenderTarget();C.setRenderTarget(xe),C.getClearColor(ue),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),_t&&qe.render(J);const Be=C.toneMapping;C.toneMapping=Gr;const et=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),y.setupLightsView(K),fe===!0&&Me.setGlobalState(C.clippingPlanes,K),cr(w,J,K),P.updateMultisampleRenderTarget(xe),P.updateRenderTargetMipmap(xe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,yt=X.length;He<yt;He++){const ot=X[He],Xt=ot.object,zt=ot.geometry,xt=ot.material,Ye=ot.group;if(xt.side===Ci&&Xt.layers.test(K.layers)){const jt=xt.side;xt.side=Wn,xt.needsUpdate=!0,La(Xt,J,K,zt,xt,Ye),xt.side=jt,xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(P.updateMultisampleRenderTarget(xe),P.updateRenderTargetMipmap(xe))}C.setRenderTarget(Le),C.setClearColor(ue,de),et!==void 0&&(K.viewport=et),C.toneMapping=Be}function cr(w,X,J){const K=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,xe=w.length;Y<xe;Y++){const Re=w[Y],Le=Re.object,Be=Re.geometry,et=K===null?Re.material:K,Qe=Re.group;Le.layers.test(J.layers)&&La(Le,X,J,Be,et,Qe)}}function La(w,X,J,K,Y,xe){w.onBeforeRender(C,X,J,K,Y,xe),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(C,X,J,K,w,xe),Y.transparent===!0&&Y.side===Ci&&Y.forceSinglePass===!1?(Y.side=Wn,Y.needsUpdate=!0,C.renderBufferDirect(J,X,K,Y,w,xe),Y.side=sr,Y.needsUpdate=!0,C.renderBufferDirect(J,X,K,Y,w,xe),Y.side=Ci):C.renderBufferDirect(J,X,K,Y,w,xe),w.onAfterRender(C,X,J,K,Y,xe)}function Ss(w,X,J){X.isScene!==!0&&(X=Lt);const K=Ge.get(w),Y=y.state.lights,xe=y.state.shadowsArray,Re=Y.state.version,Le=We.getParameters(w,Y.state,xe,X,J),Be=We.getProgramCacheKey(Le);let et=K.programs;K.environment=w.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(w.isMeshStandardMaterial?Z:A).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",rt),et=new Map,K.programs=et);let Qe=et.get(Be);if(Qe!==void 0){if(K.currentProgram===Qe&&K.lightsStateVersion===Re)return Si(w,Le),Qe}else Le.uniforms=We.getUniforms(w),w.onBeforeCompile(Le,C),Qe=We.acquireProgram(Le,Be),et.set(Be,Qe),K.uniforms=Le.uniforms;const He=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Me.uniform),Si(w,Le),K.needsLights=Pc(w),K.lightsStateVersion=Re,K.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=Qe,K.uniformsList=null,Qe}function Ia(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=xc.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Si(w,X){const J=Ge.get(w);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Da(w,X,J,K,Y){X.isScene!==!0&&(X=Lt),P.resetTextureUnits();const xe=X.fog,Re=K.isMeshStandardMaterial?X.environment:null,Le=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Nn,Be=(K.isMeshStandardMaterial?Z:A).get(K.envMap||Re),et=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!J.morphAttributes.position,yt=!!J.morphAttributes.normal,ot=!!J.morphAttributes.color;let Xt=Gr;K.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xt=C.toneMapping);const zt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=zt!==void 0?zt.length:0,Ye=Ge.get(K),jt=y.state.lights;if(fe===!0&&(Se===!0||w!==R)){const fn=w===R&&K.id===b;Me.setState(K,w,fn)}let vt=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==jt.state.version||Ye.outputColorSpace!==Le||Y.isBatchedMesh&&Ye.batching===!1||!Y.isBatchedMesh&&Ye.batching===!0||Y.isBatchedMesh&&Ye.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ye.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ye.instancing===!1||!Y.isInstancedMesh&&Ye.instancing===!0||Y.isSkinnedMesh&&Ye.skinning===!1||!Y.isSkinnedMesh&&Ye.skinning===!0||Y.isInstancedMesh&&Ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ye.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ye.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ye.instancingMorph===!1&&Y.morphTexture!==null||Ye.envMap!==Be||K.fog===!0&&Ye.fog!==xe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==Qe||Ye.morphTargets!==He||Ye.morphNormals!==yt||Ye.morphColors!==ot||Ye.toneMapping!==Xt||Ye.morphTargetsCount!==xt)&&(vt=!0):(vt=!0,Ye.__version=K.version);let mn=Ye.currentProgram;vt===!0&&(mn=Ss(K,X,Y));let ur=!1,wn=!1,Oi=!1;const Nt=mn.getUniforms(),gn=Ye.uniforms;if(je.useProgram(mn.program)&&(ur=!0,wn=!0,Oi=!0),K.id!==b&&(b=K.id,wn=!0),ur||R!==w){je.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),Jy(ve),ex(ve),Nt.setValue(k,"projectionMatrix",ve)):Nt.setValue(k,"projectionMatrix",w.projectionMatrix),Nt.setValue(k,"viewMatrix",w.matrixWorldInverse);const sn=Nt.map.cameraPosition;sn!==void 0&&sn.setValue(k,De.setFromMatrixPosition(w.matrixWorld)),ft.logarithmicDepthBuffer&&Nt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Nt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,wn=!0,Oi=!0)}if(Y.isSkinnedMesh){Nt.setOptional(k,Y,"bindMatrix"),Nt.setOptional(k,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Nt.setValue(k,"boneTexture",fn.boneTexture,P))}Y.isBatchedMesh&&(Nt.setOptional(k,Y,"batchingTexture"),Nt.setValue(k,"batchingTexture",Y._matricesTexture,P),Nt.setOptional(k,Y,"batchingIdTexture"),Nt.setValue(k,"batchingIdTexture",Y._indirectTexture,P),Nt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(k,"batchingColorTexture",Y._colorsTexture,P));const rn=J.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Je.update(Y,J,mn),(wn||Ye.receiveShadow!==Y.receiveShadow)&&(Ye.receiveShadow=Y.receiveShadow,Nt.setValue(k,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(gn.envMap.value=Be,gn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(gn.envMapIntensity.value=X.environmentIntensity),wn&&(Nt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&Na(gn,Oi),xe&&K.fog===!0&&Ae.refreshFogUniforms(gn,xe),Ae.refreshMaterialUniforms(gn,K,B,le,y.state.transmissionRenderTarget[w.id]),xc.upload(k,Ia(Ye),gn,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(xc.upload(k,Ia(Ye),gn,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Nt.setValue(k,"center",Y.center),Nt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(k,"normalMatrix",Y.normalMatrix),Nt.setValue(k,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const fn=K.uniformsGroups;for(let sn=0,Et=fn.length;sn<Et;sn++){const Mi=fn[sn];G.update(Mi,mn),G.bind(Mi,mn)}}return mn}function Na(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Pc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,X,J){Ge.get(w.texture).__webglTexture=X,Ge.get(w.depthTexture).__webglTexture=J;const K=Ge.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,X){const J=Ge.get(w);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const Ua=k.createFramebuffer();this.setRenderTarget=function(w,X=0,J=0){j=w,O=X,U=J;let K=!0,Y=null,xe=!1,Re=!1;if(w){const Be=Ge.get(w);if(Be.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(k.FRAMEBUFFER,null),K=!1;else if(Be.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Be.__hasExternalTextures)P.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?Y=Qe[X][J]:Y=Qe[X],xe=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?Y=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[J]:Y=Qe,z.copy(w.viewport),oe.copy(w.scissor),te=w.scissorTest}else z.copy(N).multiplyScalar(B).floor(),oe.copy(ne).multiplyScalar(B).floor(),te=Ne;if(J!==0&&(Y=Ua),je.bindFramebuffer(k.FRAMEBUFFER,Y)&&K&&je.drawBuffers(w,Y),je.viewport(z),je.scissor(oe),je.setScissorTest(te),xe){const Be=Ge.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,J)}else if(Re){const Be=Ge.get(w.texture),et=X;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,J,et)}else if(w!==null&&J!==0){const Be=Ge.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,J)}b=-1},this.readRenderTargetPixels=function(w,X,J,K,Y,xe,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){je.bindFramebuffer(k.FRAMEBUFFER,Le);try{const Be=w.texture,et=Be.format,Qe=Be.type;if(!ft.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-K&&J>=0&&J<=w.height-Y&&k.readPixels(X,J,K,Y,it.convert(et),it.convert(Qe),xe)}finally{const Be=j!==null?Ge.get(j).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,X,J,K,Y,xe,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const Be=w.texture,et=Be.format,Qe=Be.type;if(!ft.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=w.width-K&&J>=0&&J<=w.height-Y){je.bindFramebuffer(k.FRAMEBUFFER,Le);const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(X,J,K,Y,it.convert(et),it.convert(Qe),0);const yt=j!==null?Ge.get(j).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,yt);const ot=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Qy(k,ot,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.deleteBuffer(He),k.deleteSync(ot),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,X=null,J=0){w.isTexture!==!0&&(so("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-J),Y=Math.floor(w.image.width*K),xe=Math.floor(w.image.height*K),Re=X!==null?X.x:0,Le=X!==null?X.y:0;P.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Re,Le,Y,xe),je.unbindTexture()};const Fa=k.createFramebuffer(),Oa=k.createFramebuffer();this.copyTextureToTexture=function(w,X,J=null,K=null,Y=0,xe=null){w.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],X=arguments[2],xe=arguments[3]||0,J=null),xe===null&&(Y!==0?(so("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=Y,Y=0):xe=0);let Re,Le,Be,et,Qe,He,yt,ot,Xt;const zt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(J!==null)Re=J.max.x-J.min.x,Le=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,et=J.min.x,Qe=J.min.y,He=J.isBox3?J.min.z:0;else{const rn=Math.pow(2,-Y);Re=Math.floor(zt.width*rn),Le=Math.floor(zt.height*rn),w.isDataArrayTexture?Be=zt.depth:w.isData3DTexture?Be=Math.floor(zt.depth*rn):Be=1,et=0,Qe=0,He=0}K!==null?(yt=K.x,ot=K.y,Xt=K.z):(yt=0,ot=0,Xt=0);const xt=it.convert(X.format),Ye=it.convert(X.type);let jt;X.isData3DTexture?(P.setTexture3D(X,0),jt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),jt=k.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),jt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const vt=k.getParameter(k.UNPACK_ROW_LENGTH),mn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ur=k.getParameter(k.UNPACK_SKIP_PIXELS),wn=k.getParameter(k.UNPACK_SKIP_ROWS),Oi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,zt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,zt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,et),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const Nt=w.isDataArrayTexture||w.isData3DTexture,gn=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const rn=Ge.get(w),fn=Ge.get(X),sn=Ge.get(rn.__renderTarget),Et=Ge.get(fn.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,sn.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Mi=0;Mi<Be;Mi++)Nt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,Y,He+Mi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,xe,Xt+Mi)),k.blitFramebuffer(et,Qe,Re,Le,yt,ot,Re,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Ge.has(w)){const rn=Ge.get(w),fn=Ge.get(X);je.bindFramebuffer(k.READ_FRAMEBUFFER,Fa),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Oa);for(let sn=0;sn<Be;sn++)Nt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rn.__webglTexture,Y,He+sn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,rn.__webglTexture,Y),gn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,fn.__webglTexture,xe,Xt+sn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fn.__webglTexture,xe),Y!==0?k.blitFramebuffer(et,Qe,Re,Le,yt,ot,Re,Le,k.COLOR_BUFFER_BIT,k.NEAREST):gn?k.copyTexSubImage3D(jt,xe,yt,ot,Xt+sn,et,Qe,Re,Le):k.copyTexSubImage2D(jt,xe,yt,ot,et,Qe,Re,Le);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else gn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(jt,xe,yt,ot,Xt,Re,Le,Be,xt,Ye,zt.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(jt,xe,yt,ot,Xt,Re,Le,Be,xt,zt.data):k.texSubImage3D(jt,xe,yt,ot,Xt,Re,Le,Be,xt,Ye,zt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,yt,ot,Re,Le,xt,Ye,zt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,yt,ot,zt.width,zt.height,xt,zt.data):k.texSubImage2D(k.TEXTURE_2D,xe,yt,ot,Re,Le,xt,Ye,zt);k.pixelStorei(k.UNPACK_ROW_LENGTH,vt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ur),k.pixelStorei(k.UNPACK_SKIP_ROWS,wn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Oi),xe===0&&X.generateMipmaps&&k.generateMipmap(jt),je.unbindTexture()},this.copyTextureToTexture3D=function(w,X,J=null,K=null,Y=0){return w.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,w=arguments[2],X=arguments[3],Y=arguments[4]||0),so('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,J,K,Y)},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){O=0,U=0,j=null,je.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class tw{constructor(e){const i=new Yx().load(["assets/skybox/px.jpg","assets/skybox/nx.jpg","assets/skybox/py.jpg","assets/skybox/ny.jpg","assets/skybox/pz.jpg","assets/skybox/nz.jpg"]);e.background=i}}const r_={type:"change"},hd={type:"start"},Q_={type:"end"},fc=new ba,s_=new Or,nw=Math.cos(70*R_.DEG2RAD),en=new W,Vn=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xh=1e-6;class iw extends _S{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:oo.ROTATE,TWO:oo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Qn,this._lastTargetPosition=new W,this._quat=new Qn().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ig,this._sphericalDelta=new Ig,this._scale=1,this._panOffset=new W,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new W,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sw.bind(this),this._onPointerDown=rw.bind(this),this._onPointerUp=ow.bind(this),this._onContextMenu=dw.bind(this),this._onMouseWheel=cw.bind(this),this._onKeyDown=uw.bind(this),this._onTouchStart=hw.bind(this),this._onTouchMove=fw.bind(this),this._onMouseDown=aw.bind(this),this._onMouseMove=lw.bind(this),this._interceptControlDown=pw.bind(this),this._interceptControlUp=mw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(r_),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;en.copy(t).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Vn:i>Math.PI&&(i-=Vn),s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),t.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=en.length();c=this._clampDistance(u*this._scale);const f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const u=new W(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const d=new W(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(fc.origin.copy(this.object.position),fc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fc.direction))<nw?this.object.lookAt(this.target):(s_.setFromNormalAndCoplanarPoint(this.object.up,this.target),fc.intersectPlane(s_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Xh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xh||this._lastTargetPosition.distanceToSquared(this.target)>Xh?(this.dispatchEvent(r_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vn/60*this.autoRotateSpeed*e:Vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){en.setFromMatrixColumn(t,0),en.multiplyScalar(-e),this._panOffset.add(en)}_panUp(e,t){this.screenSpacePanning===!0?en.setFromMatrixColumn(t,1):(en.setFromMatrixColumn(t,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(e),this._panOffset.add(en)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;en.copy(s).sub(this.target);let a=en.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function rw(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function sw(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function ow(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q_),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function aw(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Dt.DOLLY;break;case ho.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Dt.ROTATE}break;case ho.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(hd)}function lw(o){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function cw(o){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(o.preventDefault(),this.dispatchEvent(hd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Q_))}function uw(o){this.enabled!==!1&&this._handleKeyDown(o)}function hw(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case oo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Dt.TOUCH_ROTATE;break;case oo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case oo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Dt.TOUCH_DOLLY_PAN;break;case oo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(hd)}function fw(o){switch(this._trackPointer(o),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Dt.NONE}}function dw(o){this.enabled!==!1&&o.preventDefault()}function pw(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mw(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class gw extends iw{constructor(e,t){super(e,t),this.enableDamping=!0,this.dampingFactor=.2}}class _w{constructor(e){Sn(this,"mesh");Sn(this,"update",()=>{this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.01});const t=new Co(24,24,24),i=new zr({color:65280,wireframe:!0});this.mesh=new Gn(t,i),e.add(this.mesh)}}function o_(o,e){if(e===Ty)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Df||e===T_){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)c.push(f);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Df)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class vw extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ew(t)}),this.register(function(t){return new Tw(t)}),this.register(function(t){return new Dw(t)}),this.register(function(t){return new Nw(t)}),this.register(function(t){return new Uw(t)}),this.register(function(t){return new ww(t)}),this.register(function(t){return new Rw(t)}),this.register(function(t){return new Cw(t)}),this.register(function(t){return new bw(t)}),this.register(function(t){return new Mw(t)}),this.register(function(t){return new Pw(t)}),this.register(function(t){return new Aw(t)}),this.register(function(t){return new Iw(t)}),this.register(function(t){return new Lw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new Fw(t)}),this.register(function(t){return new Ow(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const d=Ea.extractUrlBase(e);c=Ea.resolveURL(d,this.path)}else c=Ea.extractUrlBase(e);this.manager.itemStart(e);const u=function(d){s?s(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},f=new X_(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(d){try{a.parse(d,c,function(m){t(m),a.manager.itemEnd(e)},u)}catch(m){u(m)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===J_){try{c[gt.KHR_BINARY_GLTF]=new kw(e)}catch(g){s&&s(g);return}a=JSON.parse(c[gt.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new Zw(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](d);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case gt.KHR_MATERIALS_UNLIT:c[g]=new Sw;break;case gt.KHR_DRACO_MESH_COMPRESSION:c[g]=new Bw(a,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:c[g]=new zw;break;case gt.KHR_MESH_QUANTIZATION:c[g]=new Hw;break;default:_.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}d.setExtensions(c),d.setPlugins(u),d.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function yw(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xw{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const m=new st(16777215);f.color!==void 0&&m.setRGB(f.color[0],f.color[1],f.color[2],Nn);const g=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new eS(m),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new Qx(m),d.distance=g;break;case"spot":d=new $x(m),d.distance=g,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),d.decay=2,Ji(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(d),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return i._getNodeRef(t.cache,u,f)})}}class Sw{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return zr}extendParams(e,t,i){const s=[];e.color=new st(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Nn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,un))}return Promise.all(s)}}class Mw{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class Ew{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(u,u)}return Promise.all(a)}}class Tw{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Di}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class Aw{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class ww{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new st(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Nn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,un)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class Rw{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class Cw{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new st().setRGB(u[0],u[1],u[2],Nn),Promise.all(a)}}class bw{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Di}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Pw{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new st().setRGB(u[0],u[1],u[2],Nn),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,un)),Promise.all(a)}}class Lw{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class Iw{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class Dw{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class Nw{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(f=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Uw{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(f=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Fw{constructor(e){this.name=gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const f=s.byteOffset||0,d=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(u,f,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(m*g);return c.decodeGltfBuffer(new Uint8Array(x),m,g,_,s.mode,s.filter),x})})}else return null}}class Ow{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const d of s.primitives)if(d.mode!==oi.TRIANGLES&&d.mode!==oi.TRIANGLE_STRIP&&d.mode!==oi.TRIANGLE_FAN&&d.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],f={};for(const d in c)u.push(this.parser.getDependency("accessor",c[d]).then(m=>(f[d]=m,f[d])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(d=>{const m=d.pop(),g=m.isGroup?m.children:[m],_=d[0].count,x=[];for(const M of g){const T=new lt,S=new W,y=new Qn,D=new W(1,1,1),L=new bx(M.geometry,M.material,_);for(let C=0;C<_;C++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,C),f.ROTATION&&y.fromBufferAttribute(f.ROTATION,C),f.SCALE&&D.fromBufferAttribute(f.SCALE,C),L.setMatrixAt(C,T.compose(S,y,D));for(const C in f)if(C==="_COLOR_0"){const V=f[C];L.instanceColor=new Uf(V.array,V.itemSize,V.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,f[C]);Wt.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),x.push(L)}return m.isGroup?(m.clear(),m.add(...x),m):x[0]}))}}const J_="glTF",va=12,a_={JSON:1313821514,BIN:5130562};class kw{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,va),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==J_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-va,a=new DataView(e,va);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===a_.JSON){const d=new Uint8Array(e,va+c,u);this.content=i.decode(d)}else if(f===a_.BIN){const d=va+c;this.body=e.slice(d,d+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Bw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},f={},d={};for(const m in c){const g=Bf[m]||m.toLowerCase();u[g]=c[m]}for(const m in e.attributes){const g=Bf[m]||m.toLowerCase();if(c[m]!==void 0){const _=i.accessors[e.attributes[m]],x=go[_.componentType];d[g]=x.name,f[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(x){for(const M in x.attributes){const T=x.attributes[M],S=f[M];S!==void 0&&(T.normalized=S)}g(x)},u,d,Nn,_)})})}}class zw{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Hw{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}}class ev extends Pa{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=u*2,d=u*3,m=s-t,g=(i-t)/m,_=g*g,x=_*g,M=e*d,T=M-d,S=-2*x+3*_,y=x-_,D=1-S,L=y-_+g;for(let C=0;C!==u;C++){const V=c[T+C+u],O=c[T+C+f]*m,U=c[M+C+u],j=c[M+C]*m;a[C]=D*V+L*O+S*U+y*j}return a}}const Vw=new Qn;class Gw extends ev{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return Vw.fromArray(a).normalize().toArray(a),a}}const oi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},go={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},l_={9728:In,9729:Zn,9984:p_,9985:pc,9986:ya,9987:tr},c_={33071:Br,33648:Sc,10497:xo},jh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ww={CUBICSPLINE:void 0,LINEAR:wa,STEP:Aa},Yh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new rd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sr})),o.DefaultMaterial}function fs(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ji(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jw(o,e,t){let i=!1,s=!1,a=!1;for(let d=0,m=e.length;d<m;d++){const g=e[d];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],f=[];for(let d=0,m=e.length;d<m;d++){const g=e[d];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;f.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(d){const m=d[0],g=d[1],_=d[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function Yw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qw(o){let e;const t=o.extensions&&o.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qh(t.attributes):e=o.indices+":"+qh(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+qh(o.targets[i]);return e}function qh(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function zf(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const $w=new lt;class Zw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const f=u.match(/Version\/(\d+)/);s=i&&f?parseInt(f[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new qx(this.options.manager):this.textureLoader=new tS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new X_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return fs(a,u,s),Ji(u,s),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){for(const f of u.scenes)f.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,f=c.length;u<f;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const f=this.associations.get(c);f!=null&&this.associations.set(u,f);for(const[d,m]of c.children.entries())a(m,u.children[d])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(Ea.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=jh[s.type],u=go[s.componentType],f=s.normalized===!0,d=new u(s.count*c);return Promise.resolve(new Dn(d,c,f))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],f=jh[s.type],d=go[s.componentType],m=d.BYTES_PER_ELEMENT,g=m*f,_=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let T,S;if(x&&x!==g){const y=Math.floor(_/x),D="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let L=t.cache.get(D);L||(T=new d(u,y*x,s.count*x/m),L=new Tx(T,x/m),t.cache.add(D,L)),S=new ed(L,f,_%x/m,M)}else u===null?T=new d(s.count*f):T=new d(u,_,s.count*f),S=new Dn(T,f,M);if(s.sparse!==void 0){const y=jh.SCALAR,D=go[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,V=new D(c[1],L,s.sparse.count*y),O=new d(c[2],C,s.sparse.count*f);u!==null&&(S=new Dn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,j=V.length;U<j;U++){const b=V[U];if(S.setX(b,O[U*f]),f>=2&&S.setY(b,O[U*f+1]),f>=3&&S.setZ(b,O[U*f+2]),f>=4&&S.setW(b,O[U*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(u=f)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],f=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||u.name||"",m.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(m.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return m.magFilter=l_[_.magFilter]||Zn,m.minFilter=l_[_.minFilter]||tr,m.wrapS=c_[_.wrapS]||xo,m.wrapT=c_[_.wrapT]||xo,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==In&&m.minFilter!==Zn,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let f=c.uri||"",d=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(g){d=!0;const _=new Blob([g],{type:c.mimeType});return f=u.createObjectURL(_),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(f).then(function(g){return new Promise(function(_,x){let M=_;t.isImageBitmapLoader===!0&&(M=function(T){const S=new hn(T);S.needsUpdate=!0,_(S)}),t.load(Ea.resolveURL(g,a.path),M,void 0,x)})}).then(function(g){return d===!0&&u.revokeObjectURL(f),Ji(g,c),g.userData.mimeType=c.mimeType||Kw(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[gt.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=a.associations.get(c);c=a.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,f)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new z_,bi.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(u,f)),i=f}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new B_,bi.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(u,f)),i=f}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return rd}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},f=a.extensions||{},d=[];if(f[gt.KHR_MATERIALS_UNLIT]){const g=s[gt.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),d.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new st(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],Nn),u.opacity=_[3]}g.baseColorTexture!==void 0&&d.push(t.assignTexture(u,"map",g.baseColorTexture,un)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),d.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=Ci);const m=a.alphaMode||Yh.OPAQUE;if(m===Yh.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===Yh.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==zr&&(d.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new nt(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==zr&&(d.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==zr){const g=a.emissiveFactor;u.emissive=new st().setRGB(g[0],g[1],g[2],Nn)}return a.emissiveTexture!==void 0&&c!==zr&&d.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,un)),Promise.all(d).then(function(){const g=new c(u);return a.name&&(g.name=a.name),Ji(g,a),t.associations.set(g,{materials:e}),a.extensions&&fs(s,g,a),g})}createUniqueName(e){const t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return u_(f,u,t)})}const c=[];for(let u=0,f=e.length;u<f;u++){const d=e[u],m=qw(d),g=s[m];if(g)c.push(g.promise);else{let _;d.extensions&&d.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?_=a(d):_=u_(new Ii,d,t),s[m]={primitive:d,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f].material===void 0?Xw(this.cache):this.getDependency("material",c[f].material);u.push(m)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(f){const d=f.slice(0,f.length-1),m=f[f.length-1],g=[];for(let x=0,M=m.length;x<M;x++){const T=m[x],S=c[x];let y;const D=d[x];if(S.mode===oi.TRIANGLES||S.mode===oi.TRIANGLE_STRIP||S.mode===oi.TRIANGLE_FAN||S.mode===void 0)y=a.isSkinnedMesh===!0?new wx(T,D):new Gn(T,D),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===oi.TRIANGLE_STRIP?y.geometry=o_(y.geometry,T_):S.mode===oi.TRIANGLE_FAN&&(y.geometry=o_(y.geometry,Df));else if(S.mode===oi.LINES)y=new Ix(T,D);else if(S.mode===oi.LINE_STRIP)y=new id(T,D);else if(S.mode===oi.LINE_LOOP)y=new Dx(T,D);else if(S.mode===oi.POINTS)y=new Nx(T,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&Yw(y,a),y.name=t.createUniqueName(a.name||"mesh_"+e),Ji(y,a),S.extensions&&fs(s,y,S),t.assignFinalMaterial(y),g.push(y)}for(let x=0,M=g.length;x<M;x++)t.associations.set(g[x],{meshes:e,primitives:x});if(g.length===1)return a.extensions&&fs(s,g[0],a),g[0];const _=new gs;a.extensions&&fs(s,_,a),t.associations.set(_,{meshes:e});for(let x=0,M=g.length;x<M;x++)_.add(g[x]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ln(R_.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ad(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ji(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],f=[];for(let d=0,m=c.length;d<m;d++){const g=c[d];if(g){u.push(g);const _=new lt;a!==null&&_.fromArray(a.array,d*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new td(u,f)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],f=[],d=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const x=s.channels[g],M=s.samplers[x.sampler],T=x.target,S=T.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,D=s.parameters!==void 0?s.parameters[M.output]:M.output;T.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",y)),f.push(this.getDependency("accessor",D)),d.push(M),m.push(T))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(d),Promise.all(m)]).then(function(g){const _=g[0],x=g[1],M=g[2],T=g[3],S=g[4],y=[];for(let D=0,L=_.length;D<L;D++){const C=_[D],V=x[D],O=M[D],U=T[D],j=S[D];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const b=i._createAnimationTracks(C,V,O,U,j);if(b)for(let R=0;R<b.length;R++)y.push(b[R])}return new Of(a,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let f=0,d=s.weights.length;f<d;f++)u.morphTargetInfluences[f]=s.weights[f]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let d=0,m=u.length;d<m;d++)c.push(i.getDependency("node",u[d]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),f]).then(function(d){const m=d[0],g=d[1],_=d[2];_!==null&&m.traverse(function(x){x.isSkinnedMesh&&x.bind(_,$w)});for(let x=0,M=g.length;x<M;x++)m.add(g[x]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],f=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return f&&u.push(f),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(d){return s._getNodeRef(s.cameraCache,a.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){u.push(d)}),this.nodeCache[e]=Promise.all(u).then(function(d){let m;if(a.isBone===!0?m=new O_:d.length>1?m=new gs:d.length===1?m=d[0]:m=new Wt,m!==d[0])for(let g=0,_=d.length;g<_;g++)m.add(d[g]);if(a.name&&(m.userData.name=a.name,m.name=c),Ji(m,a),a.extensions&&fs(i,m,a),a.matrix!==void 0){const g=new lt;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new gs;i.name&&(a.name=s.createUniqueName(i.name)),Ji(a,i),i.extensions&&fs(t,a,i);const c=i.nodes||[],u=[];for(let f=0,d=c.length;f<d;f++)u.push(s.getDependency("node",c[f]));return Promise.all(u).then(function(f){for(let m=0,g=f.length;m<g;m++)a.add(f[m]);const d=m=>{const g=new Map;for(const[_,x]of s.associations)(_ instanceof bi||_ instanceof hn)&&g.set(_,x);return m.traverse(_=>{const x=s.associations.get(_);x!=null&&g.set(_,x)}),g};return s.associations=d(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,f=[];Fr[a.path]===Fr.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(u);let d;switch(Fr[a.path]){case Fr.weights:d=Ao;break;case Fr.rotation:d=wo;break;case Fr.position:case Fr.scale:d=Ro;break;default:switch(i.itemSize){case 1:d=Ao;break;case 2:case 3:default:d=Ro;break}break}const m=s.interpolation!==void 0?Ww[s.interpolation]:wa,g=this._getArrayFromAccessor(i);for(let _=0,x=f.length;_<x;_++){const M=new d(f[_]+"."+Fr[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=zf(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof wo?Gw:ev;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Qw(o,e,t){const i=e.attributes,s=new ar;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],f=u.min,d=u.max;if(f!==void 0&&d!==void 0){if(s.set(new W(f[0],f[1],f[2]),new W(d[0],d[1],d[2])),u.normalized){const m=zf(go[u.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new W,f=new W;for(let d=0,m=a.length;d<m;d++){const g=a[d];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],x=_.min,M=_.max;if(x!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),_.normalized){const T=zf(go[_.componentType]);f.multiplyScalar(T)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Li;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function u_(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(f){o.setAttribute(u,f)})}for(const c in i){const u=Bf[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return St.workingColorSpace!==Nn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),Ji(o,e),Qw(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?jw(o,e.targets,t):o})}class Jw{constructor(e){Sn(this,"mixer");Sn(this,"model");Sn(this,"animations",{});new vw().load("./assets/models/stickman.glb",i=>{this.model=i.scene,e.add(this.model),this.mixer=new gS(this.model),i.animations.forEach(s=>{this.animations[s.name]=s,this.mixer.clipAction(s).play()})},void 0,i=>{console.error(i)})}update(e){this.mixer&&this.mixer.update(e)}switchAnimation(e){if(this.mixer&&this.animations[e]){this.mixer.stopAllAction();const t=this.animations[e];this.mixer.clipAction(t).play()}}}const e1=new iS,er=class er{constructor(e){Sn(this,"scene");Sn(this,"camera");Sn(this,"renderer");Sn(this,"controls");Sn(this,"animationFrameId",null);Sn(this,"box");Sn(this,"player");Sn(this,"animate",()=>{this.animationFrameId=requestAnimationFrame(this.animate);const e=e1.getDelta();this.controls.update(),this.box.update(),this.player.update(e),this.renderer.render(this.scene,this.camera)});Sn(this,"onResize",()=>{const{clientWidth:e,clientHeight:t}=this.container;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)});this.container=e}static getInstance(e){return er.instance||(er.instance=new er(e),er.instance.init()),er.instance}init(){this.scene=new Ex,this.camera=new Ln(75,this.container.clientWidth/this.container.clientHeight,.1,1e3),this.camera.position.set(0,1,2),this.renderer=new ew({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.container.appendChild(this.renderer.domElement),new tw(this.scene),this.box=new _w(this.scene),this.player=new Jw(this.scene),window.addEventListener("keydown",e=>{e.key==="1"?this.player.switchAnimation("Idle"):e.key==="2"&&this.player.switchAnimation("Run")}),this.controls=new gw(this.camera,this.renderer.domElement),window.addEventListener("resize",this.onResize),this.animate()}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),window.removeEventListener("resize",this.onResize),this.renderer.dispose(),this.controls.dispose(),this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement),er.instance=void 0}};Sn(er,"instance");let Hf=er;const t1=()=>{const o=dc.useRef(null),e=dc.useRef(null);return dc.useEffect(()=>{const t=o.current;return t&&(e.current=Hf.getInstance(t)),()=>{var i;(i=e.current)==null||i.dispose()}},[]),uo.jsx("div",{ref:o,style:{width:"100vw",height:"100vh"}})};function n1(){return uo.jsx(uo.Fragment,{children:uo.jsx(t1,{})})}V0.createRoot(document.getElementById("root")).render(uo.jsx(dc.StrictMode,{children:uo.jsx(n1,{})}));
