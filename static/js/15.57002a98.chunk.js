(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[15],{520:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r,i=n(20),u=n(524),o=n.n(u),c=n(21),s=Object(c.b)(o.a)(r||(r=Object(i.a)([""])))},522:function(t,e,n){"use strict";var r=n(54),i=n(0),u=n(549),o=n(142);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,c=Object(i.useMemo)((function(){return new o.c}),[]),s=Object(u.a)([t].concat(Object(r.a)(e)),(function(){return c[t].apply(c,Object(r.a)(e))}),n);return s}},523:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0),i=n.n(r),u=n(12);function o(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var c=i.a.createContext(o()),s=n(151);function a(t,e){var n=i.a.useRef(!1),r=i.a.useState(0)[1],o=Object(s.b)(),a=i.a.useContext(c),l=o.defaultQueryObserverOptions(t);l.optimisticResults=!0,l.onError&&(l.onError=u.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=u.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=u.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(a.isReset()||(l.retryOnMount=!1));var d=i.a.useRef();d.current||(d.current=new e(o,l));var h=d.current.getOptimisticResult(l);if(i.a.useEffect((function(){n.current=!0,a.clearReset();var t=d.current.subscribe(u.a.batchCalls((function(){n.current&&r((function(t){return t+1}))})));return d.current.updateResult(),function(){n.current=!1,t()}}),[a]),i.a.useEffect((function(){d.current.setOptions(l,{listeners:!1})}),[l]),l.suspense&&h.isLoading)throw d.current.fetchOptimistic(l).then((function(t){var e=t.data;null==l.onSuccess||l.onSuccess(e),null==l.onSettled||l.onSettled(e,null)})).catch((function(t){a.clearReset(),null==l.onError||l.onError(t),null==l.onSettled||l.onSettled(void 0,t)}));if((l.suspense||l.useErrorBoundary)&&h.isError)throw h.error;return"tracked"===l.notifyOnChangeProps&&(h=d.current.trackResult(h)),h}},549:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(554),i=n(2),u=n(523);function o(t,e,n){var o=Object(i.k)(t,e,n);return Object(u.a)(o,r.a)}},552:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(6),i=n(32),u=n(0),o=n(562),c=n.n(o),s=n(146),a=n(1),l=function(t){var e=t.visible,n=t.onVisibilityChange,o=Object(i.a)(t,["visible","onVisibilityChange"]),l=Object(u.useCallback)((function(){n(!0)}),[n]),d=Object(u.useCallback)((function(){n(!1)}),[n]),h=Object(u.useCallback)((function(){if(e)return n(!1),!1}),[e,n]);return Object(s.a)(h),Object(a.jsx)(c.a,Object(r.a)(Object(r.a)({},o),{},{open:e,onShow:l,onClose:d}))}},554:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(4),i=n(14),u=n(2),o=n(12),c=n(61),s=n(35),a=n(82),l=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.options=n,r.trackedProps=[],r.previousSelectError=null,r.bindMethods(),r.setOptions(n),r}Object(i.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),d(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&f(t,e));var t,e},n.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&f(t,e));var t,e},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(t,e){var n=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();var i=this.hasListeners();i&&h(this.currentQuery,r,this.options,n)&&this.executeFetch(),this.updateResult(e),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.staleTime===n.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.refetchInterval===n.refetchInterval||this.updateRefetchInterval()},n.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,e);return this.createResult(n,e)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(t){var e=this,n={};return Object.keys(t).forEach((function(r){Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:function(){var n=r;return e.trackedProps.includes(n)||e.trackedProps.push(n),t[n]}})})),n},n.getNextResult=function(t){var e=this;return new Promise((function(n,r){var i=e.subscribe((function(e){e.isFetching||(i(),e.isError&&(null==t?void 0:t.throwOnError)?r(e.error):n(e))}))}))},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(t){return this.fetch(t)},n.fetchOptimistic=function(t){var e=this,n=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.fetch().then((function(){return e.createResult(r,n)}))},n.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},n.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(u.h)),e},n.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!u.d&&!this.currentResult.isStale&&Object(u.e)(this.options.staleTime)){var e=Object(u.q)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},n.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!u.d&&!1!==this.options.enabled&&Object(u.e)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||c.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},n.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},n.createResult=function(t,e){var n,r,i=this.currentQuery,o=this.options,c=this.currentResult,s=this.currentResultState,l=this.currentResultOptions,b=t!==i,v=b?t.state:this.currentQueryInitialState,p=b?this.currentResult:this.previousQueryResult,O=t.state,j=O.dataUpdatedAt,m=O.error,y=O.errorUpdatedAt,T=O.isFetching,k=O.status,g=!1,R=!1;if(e.optimisticResults){var x=this.hasListeners(),w=!x&&d(t,e),S=x&&h(t,i,e,o);(w||S)&&(T=!0,j||(k="loading"))}if(e.keepPreviousData&&!O.dataUpdateCount&&(null==p?void 0:p.isSuccess)&&"error"!==k)n=p.data,j=p.dataUpdatedAt,k=p.status,g=!0;else if(e.select&&"undefined"!==typeof O.data)if(c&&O.data===(null==s?void 0:s.data)&&e.select===(null==l?void 0:l.select)&&!this.previousSelectError)n=c.data;else try{n=e.select(O.data),!1!==e.structuralSharing&&(n=Object(u.m)(null==c?void 0:c.data,n)),this.previousSelectError=null}catch(E){Object(a.a)().error(E),m=E,this.previousSelectError=E,y=Date.now(),k="error"}else n=O.data;"undefined"!==typeof e.placeholderData&&"undefined"===typeof n&&"loading"===k&&("undefined"!==typeof(r=(null==c?void 0:c.isPlaceholderData)&&e.placeholderData===(null==l?void 0:l.placeholderData)?c.data:"function"===typeof e.placeholderData?e.placeholderData():e.placeholderData)&&(k="success",n=r,R=!0));return{status:k,isLoading:"loading"===k,isSuccess:"success"===k,isError:"error"===k,isIdle:"idle"===k,data:n,dataUpdatedAt:j,error:m,errorUpdatedAt:y,failureCount:O.fetchFailureCount,isFetched:O.dataUpdateCount>0||O.errorUpdateCount>0,isFetchedAfterMount:O.dataUpdateCount>v.dataUpdateCount||O.errorUpdateCount>v.errorUpdateCount,isFetching:T,isLoadingError:"error"===k&&0===O.dataUpdatedAt,isPlaceholderData:R,isPreviousData:g,isRefetchError:"error"===k&&0!==O.dataUpdatedAt,isStale:f(t,e),refetch:this.refetch,remove:this.remove}},n.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var n=this.options,r=n.notifyOnChangeProps,i=n.notifyOnChangePropsExclusions;if(!r&&!i)return!0;if("tracked"===r&&!this.trackedProps.length)return!0;var u="tracked"===r?this.trackedProps:r;return Object.keys(t).some((function(n){var r=n,o=t[r]!==e[r],c=null==u?void 0:u.some((function(t){return t===n})),s=null==i?void 0:i.some((function(t){return t===n}));return o&&!s&&(!u||c)}))},n.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(u.o)(this.currentResult,e)){var n={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(n.listeners=!0),this.notify(Object(r.a)({},n,t))}},n.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},n.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},n.notify=function(t){var e=this;o.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(s.a);function d(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&f(t,e))}(t,e)}function h(t,e,n,r){return!1!==n.enabled&&(t!==e||!1===r.enabled)&&f(t,n)}function f(t,e){return t.isStaleByTime(e.staleTime)}},563:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h}));var r=n(526),i=n.n(r),u=n(102),o=n.n(u),c=n(583),s=n.n(c),a=function(t){return t<10?"0".concat(t):t};function l(t){return o()(t,(function(t,e){var n,r,u,o,c,l,d;return{lang:t.lang,name:i()(["".concat(a(e+1),"."),(null===(n=t.type)||void 0===n?void 0:n.title)&&(null===(r=t.author)||void 0===r?void 0:r.title)?"".concat(null===(u=t.type)||void 0===u?void 0:u.title,"."):null===(o=t.type)||void 0===o?void 0:o.title,null===(c=t.author)||void 0===c?void 0:c.title,(null===(l=t.type)||void 0===l?void 0:l.title)||(null===(d=t.author)||void 0===d?void 0:d.title)?"(".concat(s()(t.lang),")"):s()(t.lang),"aac"!==t.codec&&s()(t.codec)]).join(" ")}}))}function d(t,e){return o()(t,(function(t){return{src:"string"===typeof t.url?t.url:t.url[e]||t.url.http,name:t.quality}}))}function h(t){return o()(t,(function(t,e){return{src:t.url,lang:t.lang,name:"".concat(s()(t.lang)," #").concat(a(e+1))}}))}},564:function(t,e,n){"use strict";n.d(e,"a",(function(){return nt}));var r=n(6),i=n(13),u=n.n(i),o=n(23),c=n(46),s=n(32),a=n(20),l=n(0),d=n(574),h=n.n(d),f=n(21),b=n(42),v=n(43),p=n(587),O=n(113),j=n(86),m=n(85),y=n(558),T=n.n(y),k=n(579),g=n.n(k),R=n(580),x=n.n(R),w=n(530),S=n.n(w),E=function(){function t(e){Object(b.a)(this,t),this.resource=void 0,this.objectURL=void 0,this.resource=e}return Object(v.a)(t,[{key:"blobToBuffer",value:function(){var t=this;return new Promise((function(e,n){var r=new FileReader;r.addEventListener("loadend",(function(t){var n,r=null===(n=t.target)||void 0===n?void 0:n.result;e(new Uint8Array(r))})),r.addEventListener("error",(function(){return n("Error while reading the Blob object")})),r.readAsArrayBuffer(t.resource)}))}},{key:"getURL",value:function(){var e=this;return new Promise((function(n,r){return e.resource instanceof Blob?FileReader?TextDecoder?t.blobToString(e.resource,(function(r){var i="WEBVTT FILE\r\n\r\n".concat(t.toVTT(r)),u=new Blob([i],{type:"text/vtt"});return e.objectURL=URL.createObjectURL(u),n(e.objectURL)}),(function(){e.blobToBuffer().then((function(r){var i=new TextDecoder("utf-8").decode(r),u="WEBVTT FILE\r\n\r\n".concat(t.toVTT(i)),o=new Blob([u],{type:"text/vtt"});return e.objectURL=URL.createObjectURL(o),n(e.objectURL)}))})):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(t,e,n){var r=new FileReader;r.addEventListener("loadend",(function(t){var n,r=null===(n=t.target)||void 0===n?void 0:n.result;e(r)})),r.addEventListener("error",(function(){return n()})),r.readAsText(t)}},{key:"toVTT",value:function(t){return t.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(t){var e=[];return t.split("").forEach((function(t){e.push(parseInt("".concat(t.charCodeAt(0)),16))})),Uint8Array.from(e)}}]),t}();function C(){return(C=Object(o.a)(u.a.mark((function t(e){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return t.next=4,t.sent.blob();case 4:return n=t.sent,r=new E(n),t.abrupt("return",r.getURL());case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var U,I,Q,L,A,F,P,D=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(b.a)(this,n);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(t=e.call.apply(e,[this].concat(i))).hls=void 0,t.media=void 0,t.state=void 0,t.props=void 0,t}return Object(v.a)(n,[{key:"load",value:function(t){var e=this;this.destroy();var n=this.media;if(this.setState({src:t}),t.includes(".m3u8")&&g.a.isSupported()){var r=this.hls=new g.a;return r.attachMedia(n),void r.on(g.a.Events.MEDIA_ATTACHED,(function(){r.loadSource(t),r.on(g.a.Events.MANIFEST_PARSED,(function(){e.play()}))}))}n.src=t,n.addEventListener("loadedmetadata",(function(){e.play()}))}},{key:"audioTracks",get:function(){var t;return this.hls?x()(this.hls.audioTracks.map((function(t){return t.name}))):null===(t=this.props.audioTracks)||void 0===t?void 0:t.map((function(t){return t.name}))}},{key:"audioTrack",get:function(){var t,e,n,r=this;if(this.hls)return null===(n=this.hls.audioTracks.find((function(t){var e;return t.id===(null===(e=r.hls)||void 0===e?void 0:e.audioTrack)})))||void 0===n?void 0:n.name;var i=Array.from(this.media.audioTracks||[]).findIndex((function(t){return t.enabled}));return null===(t=this.props.audioTracks)||void 0===t||null===(e=t[i])||void 0===e?void 0:e.name},set:function(t){if(this.hls){var e=this.hls.audioTracks.find((function(e){return e.name===t}));e&&(this.hls.audioTrack=e.id)}else{var n,r=Array.from(this.media.audioTracks||[]),i=null===(n=this.props.audioTracks)||void 0===n?void 0:n.findIndex((function(e){return e.name===t}));(!i||i>r.length-1)&&(i=0),r.forEach((function(t,e){t.enabled=e===i}))}}},{key:"sourceTracks",get:function(){return S()(this.props.sourceTracks,"src").map((function(t){return t.name}))}},{key:"sourceTrack",get:function(){var t,e=this;return null===(t=this.props.sourceTracks.find((function(t){return t.src===e.state.src})))||void 0===t?void 0:t.name},set:function(t){var e=this.props.sourceTracks.find((function(e){return e.name===t}));e&&this.load(e.src)}},{key:"subtitleTracks",get:function(){var t;return this.hls?this.hls.subtitleTracks.map((function(t){return t.name})):null===(t=this.props.subtitleTracks)||void 0===t?void 0:t.map((function(t){return t.name}))}},{key:"subtitleTrack",get:function(){var t,e,n=this;return this.hls?null===(e=this.hls.subtitleTracks.find((function(t){var e;return t.id===(null===(e=n.hls)||void 0===e?void 0:e.subtitleTrack)})))||void 0===e?void 0:e.name:null===(t=Array.from(this.media.textTracks||[]).find((function(t){return"showing"===t.mode})))||void 0===t?void 0:t.label},set:function(t){if(this.hls){var e,n;this.hls.subtitleTrack=null!==(e=null===(n=this.hls.subtitleTracks.find((function(e){return e.name===t})))||void 0===n?void 0:n.id)&&void 0!==e?e:-1}else{var r=Array.from(this.media.textTracks||[]);r.forEach((function(t){t.mode="disabled"}));var i=r.find((function(e){return e.label===t}));if(i)i.mode="showing";else{var u,o=null===(u=this.props.subtitleTracks)||void 0===u?void 0:u.find((function(e){return e.name===t}));if(o){var c=document.createElement("track");c.kind="captions",c.id=o.name,c.srclang=o.lang,c.label=o.name;var s=function(t){c.src=t,c.track.mode="showing"};o.src.endsWith(".srt")?function(t){return C.apply(this,arguments)}(o.src).then(s):s(o.src),this.media.appendChild(c)}}}}},{key:"destroy",value:function(){this.hls?this.hls.destroy():this.media.src=""}},{key:"componentDidMount",value:function(){var t;this.load(this.props.sourceTracks[0].src),null===(t=Object(p.a)(Object(O.a)(n.prototype),"componentDidMount",this))||void 0===t||t.call(this)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){var t;this.destroy(),null===(t=Object(p.a)(Object(O.a)(n.prototype),"componentWillUnmount",this))||void 0===t||t.call(this)}}]),n}(T.a),M=n(520),B=n(146),N=n(555),V=n.n(N),W=n(102),q=n.n(W),$=n(552),J=n(155),K=n(1),_="NONE",z=f.b.div(U||(U=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),H=f.b.div(I||(I=Object(a.a)(["\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n"]))),G=Object(f.b)(M.a)(Q||(Q=Object(a.a)(["\n  width: 5rem;\n"]))),X=f.b.div(L||(L=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),Y=f.b.div(A||(A=Object(a.a)(["\n  width: ",";\n  padding-right: 1rem;\n  box-sizing: border-box;\n"])),(function(t){return t.width})),Z=function(t){var e=t.player,n=Object(l.useState)(!1),r=Object(c.a)(n,2),i=r[0],u=r[1],o=Object(l.useState)([]),s=Object(c.a)(o,2),a=s[0],d=s[1],h=Object(l.useState)(null),f=Object(c.a)(h,2),b=f[0],v=f[1],p=Object(l.useState)([]),O=Object(c.a)(p,2),j=O[0],m=O[1],y=Object(l.useState)(null),T=Object(c.a)(y,2),k=T[0],g=T[1],R=Object(l.useState)([]),x=Object(c.a)(R,2),w=x[0],S=x[1],E=Object(l.useState)(null),C=Object(c.a)(E,2),U=C[0],I=C[1],Q=Object(l.useCallback)((function(t,n){if(e.current){var r=e.current.getVideoNode(),i=r.currentTime;r[t]=n,setTimeout((function(){r.currentTime=i-1}),500)}}),[e]),L=Object(l.useCallback)((function(t){return function(){v(t),Q("audioTrack",t)}}),[Q]),A=Object(l.useCallback)((function(t){return function(){g(t),Q("sourceTrack",t)}}),[Q]),F=Object(l.useCallback)((function(t){return function(){I(t),Q("subtitleTrack",t)}}),[Q]),P=Object(l.useCallback)((function(t){u(t),e.current&&!t&&e.current.play()}),[e]);return Object(l.useEffect)((function(){var t=function(t){if(Object(J.a)(t)){if(e.current){var n=e.current.getVideoNode(),r=n.audioTracks,i=n.audioTrack,o=n.sourceTracks,c=n.sourceTrack,s=n.subtitleTracks,a=n.subtitleTrack;((null===r||void 0===r?void 0:r.length)>1||(null===o||void 0===o?void 0:o.length)>1||(null===s||void 0===s?void 0:s.length)>0)&&(d(r),v(i),m(o),g(c),S(s),I(a),e.current.pause(),u(!0))}}else Object(J.b)(t)&&u(!1)};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[i,e]),Object(K.jsx)($.a,{visible:i,onVisibilityChange:P,children:Object(K.jsxs)(z,{children:[(null===a||void 0===a?void 0:a.length)>1&&Object(K.jsxs)(H,{children:[Object(K.jsx)(G,{children:"\u0417\u0432\u0443\u043a"}),Object(K.jsx)(X,{children:q()(a,(function(t){return Object(K.jsx)(Y,{width:"50%",children:Object(K.jsx)(V.a,{selected:t===b,onToggle:L(t),children:t})},t)}))})]}),(null===j||void 0===j?void 0:j.length)>1&&Object(K.jsxs)(H,{children:[Object(K.jsx)(G,{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(K.jsx)(X,{children:q()(j,(function(t){return Object(K.jsx)(Y,{width:"15%",children:Object(K.jsx)(V.a,{selected:t===k,onToggle:A(t),children:t})},t)}))})]}),(null===w||void 0===w?void 0:w.length)>0&&Object(K.jsxs)(H,{children:[Object(K.jsx)(G,{children:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"}),Object(K.jsxs)(X,{children:[Object(K.jsx)(Y,{width:"15%",children:Object(K.jsx)(V.a,{selected:!U||U===_,onToggle:F(_),children:"\u041d\u0435\u0442"})}),q()(w,(function(t){return Object(K.jsx)(Y,{width:"15%",children:Object(K.jsx)(V.a,{selected:t===U,onToggle:F(t),children:t})},t)}))]})]})]})})},tt=f.b.div(F||(F=Object(a.a)(["\n  video {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n"]))),et=Object(f.b)(M.a)(P||(P=Object(a.a)(["\n  position: absolute;\n  padding: 0 1rem;\n  z-index: 1;\n  visibility: ",";\n"])),(function(t){return t.visible?"visible":"hidden"})),nt=function(t){var e=t.title,n=t.description,i=t.poster,a=t.audios,d=t.sources,f=t.subtitles,b=t.startTime,v=t.timeSyncInterval,p=void 0===v?30:v,O=t.onPlay,j=t.onPause,m=t.onEnded,y=t.onTimeSync,T=Object(s.a)(t,["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","onPlay","onPause","onEnded","onTimeSync"]),k=Object(l.useRef)(),g=Object(l.useState)(!0),R=Object(c.a)(g,2),x=R[0],w=R[1],S=Object(l.useCallback)((function(){w(!1),null===O||void 0===O||O()}),[O]),E=Object(l.useCallback)((function(t){w(!0),null===j||void 0===j||j(t.currentTime)}),[j]),C=Object(l.useCallback)((function(t){null===m||void 0===m||m(t.target.currentTime)}),[m]),U=Object(l.useCallback)(Object(o.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!k.current||!y){t.next=5;break}return e=k.current.getVideoNode(),n=e.currentTime,t.next=5,y(n);case 5:case"end":return t.stop()}}),t)}))),[y,k]);return Object(l.useEffect)((function(){var t;return x&&(t=setTimeout((function(){w(!1)}),5e3)),function(){t&&clearTimeout(t)}}),[x]),Object(l.useEffect)((function(){var t;return y&&(t=setInterval(U,1e3*p)),function(){t&&clearInterval(t)}}),[p,y,U]),Object(l.useEffect)((function(){var t;return b&&(t=setTimeout((function(){if(k.current){var t=k.current.getVideoNode();1-b/t.duration>.01&&(t.currentTime=b)}}),500)),function(){t&&clearTimeout(t)}}),[b,k]),Object(B.a)(U),Object(K.jsxs)(tt,{children:[Object(K.jsx)(et,{visible:x,children:e}),Object(K.jsx)(Z,{player:k}),Object(K.jsx)(h.a,Object(r.a)(Object(r.a)({},T),{},{ref:k,title:n,poster:i,jumpBy:10,onPlay:S,onPause:E,onEnded:C,audioTracks:a,sourceTracks:d,subtitleTracks:f,videoComponent:D}))]})}},585:function(t,e,n){"use strict";function r(t,e,n){return n?"".concat(null===t||void 0===t?void 0:t.title," (s").concat(n.number,"e").concat((null===e||void 0===e?void 0:e.number)||1,")"):null===t||void 0===t?void 0:t.title}n.d(e,"a",(function(){return r}))},739:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(6),i=n(13),u=n.n(i),o=n(23),c=n(46),s=n(0),a=n(516),l=n(142),d=n(564),h=n(522),f=n(112),b=n(163),v=n(585),p=n(563),O=n(1),j=function(t,e,n){var r=function(t,e,n){return Object(s.useMemo)((function(){var r,i,u=null===(r=t.videos||(null===e||void 0===e?void 0:e.episodes))||void 0===r?void 0:r.find((function(t){return t.number===n.number+1}));if(u)return u;var o=null===(i=t.seasons)||void 0===i?void 0:i.find((function(t){return t.number===e.number+1}));return o?o.episodes[0]:void 0}),[t,e,n])}(t,e,n);return[function(t,e,n){return Object(s.useMemo)((function(){var r,i,u=null===(r=t.videos||(null===e||void 0===e?void 0:e.episodes))||void 0===r?void 0:r.find((function(t){return t.number===n.number-1}));if(u)return u;var o=null===(i=t.seasons)||void 0===i?void 0:i.find((function(t){return t.number===e.number-1}));return o?o.episodes[o.episodes.length-1]:void 0}),[t,e,n])}(t,e,n),r]},m=function(){var t=Object(a.e)(),e=Object(a.f)(),n=Object(f.a)("watchingMarkTime").watchingMarkTimeAsync,i=Object(b.a)("streaming_type"),m=Object(c.a)(i,1)[0],y=e.state,T=y.item,k=y.video,g=y.season,R=Object(s.useState)(k),x=Object(c.a)(R,2),w=x[0],S=x[1],E=j(T,g,w),C=Object(c.a)(E,2),U=C[0],I=C[1],Q=Object(h.a)("itemMediaLinks",[w.id]),L=Object(s.useCallback)(function(){var t=Object(o.a)(u.a.mark((function t(e,r){var i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.number,t.next=3,n([T.id,r,i,null===g||void 0===g?void 0:g.number]);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),[n,T,g]),A=Object(s.useMemo)((function(){return(null===Q||void 0===Q?void 0:Q.data)?{title:Object(v.a)(T,w,g),description:w.title,poster:T.posters.wide||T.posters.big,audios:Object(p.a)(w.audios),sources:Object(p.b)(Q.data.files,m),subtitles:Object(p.c)(Q.data.subtitles),startTime:w.watching.status===l.b.Watching?w.watching.time:0}:null}),[T,g,w,null===Q||void 0===Q?void 0:Q.data,m]),F=Object(s.useCallback)((function(t){L(w,t)}),[L,w]),P=Object(s.useCallback)((function(e){L(w,e),I?S(I):t.goBack()}),[L,t,w,I]),D=Object(s.useCallback)((function(t){var e=t.currentTime;L(w,e),U&&S(U)}),[L,w,U]),M=Object(s.useCallback)((function(t){var e=t.currentTime;L(w,e),I&&S(I)}),[L,w,I]),B=Object(s.useCallback)(function(){var t=Object(o.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(w,e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[L,w]);return Object(O.jsx)(O.Fragment,{children:A&&Object(O.jsx)(d.a,Object(r.a)(Object(r.a)({},A),{},{onPause:F,onEnded:P,onJumpBackward:D,onJumpForward:M,onTimeSync:B}),w.id)})}}}]);
//# sourceMappingURL=15.57002a98.chunk.js.map