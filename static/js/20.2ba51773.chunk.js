(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[20],{1053:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var c=t(64),r=t(1),a=t(945),o=t(94),u=t(175),i=t.n(u),l=t(27),s=t(42),d=t.n(s),b=t(891),j=t(7),f=t(2),O=function(e){var n=e.collection,t=e.className,c=Object(l.h)(),a=Object(r.useCallback)((function(){(null===n||void 0===n?void 0:n.id)&&c.push(Object(j.b)(j.a.Collection,{collectionId:n.id}))}),[null===n||void 0===n?void 0:n.id,c]);return Object(f.jsx)(b.a,{onClick:a,source:null===n||void 0===n?void 0:n.posters.medium,caption:null===n||void 0===n?void 0:n.title,className:d()("h-72",t)})},v=t(890),h=function(e){var n=e.collections,t=e.loading,c=e.onScrollToEnd,r=e.scrollable,a=void 0===r||r,u=Object(f.jsxs)("div",{className:"flex flex-wrap pr-2",children:[i()(n,(function(e){return Object(f.jsx)(O,{collection:e},e.id)})),t&&i()(Object(o.a)(new Array(15)),(function(e,n){return Object(f.jsx)(O,{},n)}))]});return a?Object(f.jsx)(v.a,{onScrollToEnd:c,children:u}):u},p=t(902),m=function(e){var n=e.queryResult,t=e.processItems,r=Object(p.a)(n,t),a=Object(c.a)(r,3),o=a[0],u=a[1],i=a[2];return Object(f.jsx)(h,{collections:o,loading:u,onScrollToEnd:i})},x=t(903),g=function(){var e=Object(r.useState)(""),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(x.a)("collections",[t,"watchers-"]),i=Object(r.useCallback)((function(e){o(e)}),[o]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"m-1 mb-3 mr-2",children:Object(f.jsx)(a.a,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0431\u043e\u0440\u043a\u0438...",value:t,onChange:i})}),Object(f.jsx)(m,{queryResult:u})]})}},890:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var c=t(13),r=t(49),a=t(1),o=t(42),u=t.n(o),i=t(64),l=t(72),s=function(e,n,t){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},r=n.onEnterViewport,o=n.onLeaveViewport,u=Object(a.useState)(),s=Object(i.a)(u,2),d=s[1],b=Object(a.useRef)(null),j=Object(a.useRef)(!1),f=Object(a.useRef)(!1),O=Object(a.useRef)(0),v=Object(a.useRef)(0),h=Object(a.useCallback)((function(){if(e.current&&b.current){var n=Object(l.findDOMNode)(e.current);n&&b.current.observe(n)}}),[e,b]),p=Object(a.useCallback)((function(){if(e.current&&b.current){var n=Object(l.findDOMNode)(e.current);n&&(b.current.unobserve(n),b.current.disconnect(),b.current=null)}}),[e,b]),m=Object(a.useCallback)((function(e){var n=e[0]||{},t=n.isIntersecting,a=n.intersectionRatio,u="undefined"!==typeof t?t:a>0;if(!f.current&&u)return f.current=!0,null===r||void 0===r||r(),O.current+=1,j.current=u,void d(u);f.current&&!u&&(f.current=!1,null===o||void 0===o||o(),c.disconnectOnLeave&&b.current&&b.current.disconnect(),v.current+=1,j.current=u,d(u))}),[b,c.disconnectOnLeave,r,o]),x=Object(a.useCallback)((function(){b.current||(b.current=new IntersectionObserver(m,t))}),[b,t,m]);return Object(a.useEffect)((function(){return x(),h(),function(){p()}}),[x,h,p]),{inViewport:j.current,enterCount:O.current,leaveCount:v.current}},d=t(2),b=["children","className","onScrollToEnd"],j=function(e){var n=e.children,t=e.className,o=e.onScrollToEnd,i=Object(r.a)(e,b),l=Object(a.useRef)(null);return s(l,{onEnterViewport:o}),Object(d.jsxs)("div",Object(c.a)(Object(c.a)({className:u()("overflow-y-auto h-full",t)},i),{},{children:[n,Object(d.jsx)("div",{className:"h-40",ref:l})]}))}},891:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var c=t(13),r=t(49),a=t(42),o=t.n(a),u=t(238),i=t(2),l=["className","wrapperClassName","source","caption","children"],s=function(e){var n=e.className,t=e.wrapperClassName,a=e.source,s=e.caption,d=e.children,b=Object(r.a)(e,l);return Object(i.jsx)(u.a,Object(c.a)(Object(c.a)({},b),{},{className:o()("rounded-xl w-1/5",t),children:Object(i.jsxs)("div",{className:o()("h-40 m-1 flex flex-col relative overflow-hidden cursor-pointer",n),children:[Object(i.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:a,alt:s}),Object(i.jsx)("div",{className:"px-2",children:Object(i.jsx)("p",{className:"text-primary text-sm text-center overflow-hidden whitespace-nowrap",children:s})}),d]})}))}},902:function(e,n,t){"use strict";var c=t(64),r=t(1),a=t(898),o=t.n(a),u=t(913),i=t.n(u),l=t(907),s=t.n(l);n.a=function(e,n){var t=e.data,a=e.isLoading,u=e.isFetchingNextPage,l=e.fetchNextPage,d=Object(r.useState)(!1),b=Object(c.a)(d,2),j=b[0],f=b[1],O=Object(r.useMemo)((function(){return s()(o()(i()(null===t||void 0===t?void 0:t.pages,(function(e){return e.items}))),"id")}),[null===t||void 0===t?void 0:t.pages]),v=Object(r.useMemo)((function(){return n?n(O):O}),[O,n]),h=Object(r.useCallback)((function(){j&&(l(),f(!1))}),[j,l]);return Object(r.useEffect)((function(){f(!0)}),[O.length]),[v,a||u,h]}},903:function(e,n,t){"use strict";var c=t(13),r=t(94),a=t(1),o=t(1070),u=t(239);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,i=Object(a.useMemo)((function(){return new u.c}),[]),l=Object(o.a)([e].concat(Object(r.a)(n)),(function(t){var c=t.pageParam;return i[e].apply(i,Object(r.a)(n).concat([c]))}),Object(c.a)({getNextPageParam:function(e){var n;return(null===e||void 0===e||null===(n=e.pagination)||void 0===n?void 0:n.current)+1||1}},t));return l}},945:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var c=t(13),r=t(49),a=t(1),o=t(42),u=t.n(o),i=t(238),l=t(2),s=["className","onChange"],d=function(e){var n=e.className,t=e.onChange,o=Object(r.a)(e,s),d=Object(a.useCallback)((function(e){null===t||void 0===t||t(e.target.value,e)}),[t]);return Object(l.jsx)(i.a,{className:u()("w-full rounded",n),children:Object(l.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{onChange:d,className:"w-full h-auto px-2 py-1 rounded text-gray-500"}))})}}}]);
//# sourceMappingURL=20.2ba51773.chunk.js.map