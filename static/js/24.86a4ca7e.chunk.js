(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[24],{520:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,i=n(20),c=n(524),o=n.n(c),a=n(21),u=Object(a.b)(o.a)(r||(r=Object(i.a)([""])))},552:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(6),i=n(32),c=n(0),o=n(562),a=n.n(o),u=n(146),s=n(1),l=function(e){var t=e.visible,n=e.onVisibilityChange,o=Object(i.a)(e,["visible","onVisibilityChange"]),l=Object(c.useCallback)((function(){n(!0)}),[n]),d=Object(c.useCallback)((function(){n(!1)}),[n]),b=Object(c.useCallback)((function(){if(t)return n(!1),!1}),[t,n]);return Object(u.a)(b),Object(s.jsx)(a.a,Object(r.a)(Object(r.a)({},o),{},{open:t,onShow:l,onClose:d}))}},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b}));var r=n(526),i=n.n(r),c=n(102),o=n.n(c),a=n(583),u=n.n(a),s=function(e){return e<10?"0".concat(e):e};function l(e){return o()(e,(function(e,t){var n,r,c,o,a,l,d;return{lang:e.lang,name:i()(["".concat(s(t+1),"."),(null===(n=e.type)||void 0===n?void 0:n.title)&&(null===(r=e.author)||void 0===r?void 0:r.title)?"".concat(null===(c=e.type)||void 0===c?void 0:c.title,"."):null===(o=e.type)||void 0===o?void 0:o.title,null===(a=e.author)||void 0===a?void 0:a.title,(null===(l=e.type)||void 0===l?void 0:l.title)||(null===(d=e.author)||void 0===d?void 0:d.title)?"(".concat(u()(e.lang),")"):u()(e.lang),"aac"!==e.codec&&u()(e.codec)]).join(" ")}}))}function d(e,t){return o()(e,(function(e){return{src:"string"===typeof e.url?e.url:e.url[t]||e.url.http,name:e.quality}}))}function b(e){return o()(e,(function(e,t){return{src:e.url,lang:e.lang,name:"".concat(u()(e.lang)," #").concat(s(t+1))}}))}},564:function(e,t,n){"use strict";n.d(t,"a",(function(){return ne}));var r=n(6),i=n(13),c=n.n(i),o=n(23),a=n(46),u=n(32),s=n(20),l=n(0),d=n(574),b=n.n(d),f=n(21),v=n(42),h=n(43),j=n(587),p=n(113),O=n(86),m=n(85),k=n(558),T=n.n(k),g=n(579),y=n.n(g),x=n(580),w=n.n(x),E=n(530),L=n.n(E),C=function(){function e(t){Object(v.a)(this,e),this.resource=void 0,this.objectURL=void 0,this.resource=t}return Object(h.a)(e,[{key:"blobToBuffer",value:function(){var e=this;return new Promise((function(t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(new Uint8Array(r))})),r.addEventListener("error",(function(){return n("Error while reading the Blob object")})),r.readAsArrayBuffer(e.resource)}))}},{key:"getURL",value:function(){var t=this;return new Promise((function(n,r){return t.resource instanceof Blob?FileReader?TextDecoder?e.blobToString(t.resource,(function(r){var i="WEBVTT FILE\r\n\r\n".concat(e.toVTT(r)),c=new Blob([i],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(c),n(t.objectURL)}),(function(){t.blobToBuffer().then((function(r){var i=new TextDecoder("utf-8").decode(r),c="WEBVTT FILE\r\n\r\n".concat(e.toVTT(i)),o=new Blob([c],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(o),n(t.objectURL)}))})):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(e,t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(r)})),r.addEventListener("error",(function(){return n()})),r.readAsText(e)}},{key:"toVTT",value:function(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(e){var t=[];return e.split("").forEach((function(e){t.push(parseInt("".concat(e.charCodeAt(0)),16))})),Uint8Array.from(t)}}]),e}();function R(){return(R=Object(o.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.blob();case 4:return n=e.sent,r=new C(n),e.abrupt("return",r.getURL());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S,U,A,B,V,I,D,N=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).hls=void 0,e.media=void 0,e.state=void 0,e.props=void 0,e}return Object(h.a)(n,[{key:"load",value:function(e){var t=this;this.destroy();var n=this.media;if(this.setState({src:e}),e.includes(".m3u8")&&y.a.isSupported()){var r=this.hls=new y.a;return r.attachMedia(n),void r.on(y.a.Events.MEDIA_ATTACHED,(function(){r.loadSource(e),r.on(y.a.Events.MANIFEST_PARSED,(function(){t.play()}))}))}n.src=e,n.addEventListener("loadedmetadata",(function(){t.play()}))}},{key:"audioTracks",get:function(){var e;return this.hls?w()(this.hls.audioTracks.map((function(e){return e.name}))):null===(e=this.props.audioTracks)||void 0===e?void 0:e.map((function(e){return e.name}))}},{key:"audioTrack",get:function(){var e,t,n,r=this;if(this.hls)return null===(n=this.hls.audioTracks.find((function(e){var t;return e.id===(null===(t=r.hls)||void 0===t?void 0:t.audioTrack)})))||void 0===n?void 0:n.name;var i=Array.from(this.media.audioTracks||[]).findIndex((function(e){return e.enabled}));return null===(e=this.props.audioTracks)||void 0===e||null===(t=e[i])||void 0===t?void 0:t.name},set:function(e){if(this.hls){var t=this.hls.audioTracks.find((function(t){return t.name===e}));t&&(this.hls.audioTrack=t.id)}else{var n,r=Array.from(this.media.audioTracks||[]),i=null===(n=this.props.audioTracks)||void 0===n?void 0:n.findIndex((function(t){return t.name===e}));(!i||i>r.length-1)&&(i=0),r.forEach((function(e,t){e.enabled=t===i}))}}},{key:"sourceTracks",get:function(){return L()(this.props.sourceTracks,"src").map((function(e){return e.name}))}},{key:"sourceTrack",get:function(){var e,t=this;return null===(e=this.props.sourceTracks.find((function(e){return e.src===t.state.src})))||void 0===e?void 0:e.name},set:function(e){var t=this.props.sourceTracks.find((function(t){return t.name===e}));t&&this.load(t.src)}},{key:"subtitleTracks",get:function(){var e;return this.hls?this.hls.subtitleTracks.map((function(e){return e.name})):null===(e=this.props.subtitleTracks)||void 0===e?void 0:e.map((function(e){return e.name}))}},{key:"subtitleTrack",get:function(){var e,t,n=this;return this.hls?null===(t=this.hls.subtitleTracks.find((function(e){var t;return e.id===(null===(t=n.hls)||void 0===t?void 0:t.subtitleTrack)})))||void 0===t?void 0:t.name:null===(e=Array.from(this.media.textTracks||[]).find((function(e){return"showing"===e.mode})))||void 0===e?void 0:e.label},set:function(e){if(this.hls){var t,n;this.hls.subtitleTrack=null!==(t=null===(n=this.hls.subtitleTracks.find((function(t){return t.name===e})))||void 0===n?void 0:n.id)&&void 0!==t?t:-1}else{var r=Array.from(this.media.textTracks||[]);r.forEach((function(e){e.mode="disabled"}));var i=r.find((function(t){return t.label===e}));if(i)i.mode="showing";else{var c,o=null===(c=this.props.subtitleTracks)||void 0===c?void 0:c.find((function(t){return t.name===e}));if(o){var a=document.createElement("track");a.kind="captions",a.id=o.name,a.srclang=o.lang,a.label=o.name;var u=function(e){a.src=e,a.track.mode="showing"};o.src.endsWith(".srt")?function(e){return R.apply(this,arguments)}(o.src).then(u):u(o.src),this.media.appendChild(a)}}}}},{key:"destroy",value:function(){this.hls?this.hls.destroy():this.media.src=""}},{key:"componentDidMount",value:function(){var e;this.load(this.props.sourceTracks[0].src),null===(e=Object(j.a)(Object(p.a)(n.prototype),"componentDidMount",this))||void 0===e||e.call(this)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){var e;this.destroy(),null===(e=Object(j.a)(Object(p.a)(n.prototype),"componentWillUnmount",this))||void 0===e||e.call(this)}}]),n}(T.a),P=n(520),F=n(146),M=n(555),$=n.n(M),W=n(102),z=n.n(W),J=n(552),_=n(155),q=n(1),H="NONE",G=f.b.div(S||(S=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),K=f.b.div(U||(U=Object(s.a)(["\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n"]))),Q=Object(f.b)(P.a)(A||(A=Object(s.a)(["\n  width: 5rem;\n"]))),X=f.b.div(B||(B=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),Y=f.b.div(V||(V=Object(s.a)(["\n  width: ",";\n  padding-right: 1rem;\n  box-sizing: border-box;\n"])),(function(e){return e.width})),Z=function(e){var t=e.player,n=Object(l.useState)(!1),r=Object(a.a)(n,2),i=r[0],c=r[1],o=Object(l.useState)([]),u=Object(a.a)(o,2),s=u[0],d=u[1],b=Object(l.useState)(null),f=Object(a.a)(b,2),v=f[0],h=f[1],j=Object(l.useState)([]),p=Object(a.a)(j,2),O=p[0],m=p[1],k=Object(l.useState)(null),T=Object(a.a)(k,2),g=T[0],y=T[1],x=Object(l.useState)([]),w=Object(a.a)(x,2),E=w[0],L=w[1],C=Object(l.useState)(null),R=Object(a.a)(C,2),S=R[0],U=R[1],A=Object(l.useCallback)((function(e,n){if(t.current){var r=t.current.getVideoNode(),i=r.currentTime;r[e]=n,setTimeout((function(){r.currentTime=i-1}),500)}}),[t]),B=Object(l.useCallback)((function(e){return function(){h(e),A("audioTrack",e)}}),[A]),V=Object(l.useCallback)((function(e){return function(){y(e),A("sourceTrack",e)}}),[A]),I=Object(l.useCallback)((function(e){return function(){U(e),A("subtitleTrack",e)}}),[A]),D=Object(l.useCallback)((function(e){c(e),t.current&&!e&&t.current.play()}),[t]);return Object(l.useEffect)((function(){var e=function(e){if(Object(_.a)(e)){if(t.current){var n=t.current.getVideoNode(),r=n.audioTracks,i=n.audioTrack,o=n.sourceTracks,a=n.sourceTrack,u=n.subtitleTracks,s=n.subtitleTrack;((null===r||void 0===r?void 0:r.length)>1||(null===o||void 0===o?void 0:o.length)>1||(null===u||void 0===u?void 0:u.length)>0)&&(d(r),h(i),m(o),y(a),L(u),U(s),t.current.pause(),c(!0))}}else Object(_.b)(e)&&c(!1)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[i,t]),Object(q.jsx)(J.a,{visible:i,onVisibilityChange:D,children:Object(q.jsxs)(G,{children:[(null===s||void 0===s?void 0:s.length)>1&&Object(q.jsxs)(K,{children:[Object(q.jsx)(Q,{children:"\u0417\u0432\u0443\u043a"}),Object(q.jsx)(X,{children:z()(s,(function(e){return Object(q.jsx)(Y,{width:"50%",children:Object(q.jsx)($.a,{selected:e===v,onToggle:B(e),children:e})},e)}))})]}),(null===O||void 0===O?void 0:O.length)>1&&Object(q.jsxs)(K,{children:[Object(q.jsx)(Q,{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(q.jsx)(X,{children:z()(O,(function(e){return Object(q.jsx)(Y,{width:"15%",children:Object(q.jsx)($.a,{selected:e===g,onToggle:V(e),children:e})},e)}))})]}),(null===E||void 0===E?void 0:E.length)>0&&Object(q.jsxs)(K,{children:[Object(q.jsx)(Q,{children:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"}),Object(q.jsxs)(X,{children:[Object(q.jsx)(Y,{width:"15%",children:Object(q.jsx)($.a,{selected:!S||S===H,onToggle:I(H),children:"\u041d\u0435\u0442"})}),z()(E,(function(e){return Object(q.jsx)(Y,{width:"15%",children:Object(q.jsx)($.a,{selected:e===S,onToggle:I(e),children:e})},e)}))]})]})]})})},ee=f.b.div(I||(I=Object(s.a)(["\n  video {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n"]))),te=Object(f.b)(P.a)(D||(D=Object(s.a)(["\n  position: absolute;\n  padding: 0 1rem;\n  z-index: 1;\n  visibility: ",";\n"])),(function(e){return e.visible?"visible":"hidden"})),ne=function(e){var t=e.title,n=e.description,i=e.poster,s=e.audios,d=e.sources,f=e.subtitles,v=e.startTime,h=e.timeSyncInterval,j=void 0===h?30:h,p=e.onPlay,O=e.onPause,m=e.onEnded,k=e.onTimeSync,T=Object(u.a)(e,["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","onPlay","onPause","onEnded","onTimeSync"]),g=Object(l.useRef)(),y=Object(l.useState)(!0),x=Object(a.a)(y,2),w=x[0],E=x[1],L=Object(l.useCallback)((function(){E(!1),null===p||void 0===p||p()}),[p]),C=Object(l.useCallback)((function(e){E(!0),null===O||void 0===O||O(e.currentTime)}),[O]),R=Object(l.useCallback)((function(e){null===m||void 0===m||m(e.target.currentTime)}),[m]),S=Object(l.useCallback)(Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.current||!k){e.next=5;break}return t=g.current.getVideoNode(),n=t.currentTime,e.next=5,k(n);case 5:case"end":return e.stop()}}),e)}))),[k,g]);return Object(l.useEffect)((function(){var e;return w&&(e=setTimeout((function(){E(!1)}),5e3)),function(){e&&clearTimeout(e)}}),[w]),Object(l.useEffect)((function(){var e;return k&&(e=setInterval(S,1e3*j)),function(){e&&clearInterval(e)}}),[j,k,S]),Object(l.useEffect)((function(){var e;return v&&(e=setTimeout((function(){if(g.current){var e=g.current.getVideoNode();1-v/e.duration>.01&&(e.currentTime=v)}}),500)),function(){e&&clearTimeout(e)}}),[v,g]),Object(F.a)(S),Object(q.jsxs)(ee,{children:[Object(q.jsx)(te,{visible:w,children:t}),Object(q.jsx)(Z,{player:g}),Object(q.jsx)(b.a,Object(r.a)(Object(r.a)({},T),{},{ref:g,title:n,poster:i,jumpBy:10,onPlay:L,onPause:C,onEnded:R,audioTracks:s,sourceTracks:d,subtitleTracks:f,videoComponent:N}))]})}},730:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(6),i=n(0),c=n(516),o=n(564),a=n(563),u=n(1),s=function(){var e=Object(c.e)(),t=Object(c.f)().state.channel,n=Object(i.useMemo)((function(){return{title:t.title,poster:t.logos.m,sources:Object(a.b)([{url:{http:t.stream,hls4:t.stream}}])}}),[t]),s=Object(i.useCallback)((function(){e.goBack()}),[e]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(o.a,Object(r.a)(Object(r.a)({},n),{},{onEnded:s}))})}}}]);
//# sourceMappingURL=24.86a4ca7e.chunk.js.map