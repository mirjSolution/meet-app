(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{191:function(e,t,n){},192:function(e,t,n){},387:function(e,t,n){},388:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(1),o=n.n(r),i=n(58),c=n.n(i),s=(n(191),n(9)),u=n(13),l=n(11),h=n(10),d=(n(192),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showHideDetails:!1},e.handleShowHideButton=function(){!0===e.state.showHideDetails?e.setState({showHideDetails:!1}):e.setState({showHideDetails:!0})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(a.jsxs)("div",{className:"event-container",children:[Object(a.jsx)("h1",{className:"name",children:t.summary}),Object(a.jsx)("p",{children:t.start?t.start.dateTime:""}),Object(a.jsx)("p",{className:"locations",children:t.location}),this.state.showHideDetails&&Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsx)("h2",{children:"About event:"}),Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.htmlLink,children:"See Details on Google Calendar"}),Object(a.jsx)("p",{children:t.description})]}),Object(a.jsx)("button",{className:"show-hide-btn",onClick:function(){return e.handleShowHideButton()},children:this.state.showHideDetails?"Hide Details":"Show Details"})]})}}]),n}(r.Component)),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d,{event:e})},e.id)}))})}}]),n}(r.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(p),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(p),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t,0)},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,suggestions:[],infoText:"We can not find the city you are looking for. Please try another city"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),this.state.suggestions.length>=1?Object(a.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})})]}):Object(a.jsx)(v,{text:this.state.infoText})]})}}]),n}(r.Component),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventCount:e.props.eventCount},e.handleEventInputChanged=function(t){var n=t.target.value;return n<1||n>32?e.setState({eventCount:"",errorText:"Select number between 1 and 32"}):(e.setState({eventCount:n,errorText:""}),void e.props.updateEvents("",n))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"event-number",children:[Object(a.jsx)("label",{htmlFor:"numberOfEvent",children:"Number of Events"}),Object(a.jsx)("input",{type:"number",name:"numberOfEvent",className:"event-number-input",placeholder:"Enter Number of Events",value:this.state.eventCount,onChange:this.handleEventInputChanged}),Object(a.jsx)(m,{text:this.state.errorText})]})}}]),n}(r.Component),g=n(163),w=n(14),y=function(e){var t=e.events;Object(r.useEffect)((function(){c((function(){return s()}))}),[t]);var n=Object(r.useState)([]),o=Object(g.a)(n,2),i=o[0],c=o[1],s=function(){var e=t.map((function(e){return{eventSummary:e.summary}}));return["React","JavaScript","Node","jQuery","AngularJS"].map((function(t){var n=t,a=e.filter((function(e){return e.eventSummary.split(" ").includes(n)})).length;return{name:n,value:a}}))};return Object(a.jsx)(w.d,{height:300,children:Object(a.jsx)(w.c,{width:400,height:400,children:Object(a.jsx)(w.b,{data:i,cx:160,cy:130,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})})})},x=n(21),O=n.n(x),k=n(44),S=n(164),C=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],T=n(90),E=n.n(T),N=n(45),Z=n.n(N),D=(n(387),function(e){var t=e.map((function(e){return e.location}));return Object(S.a)(new Set(t))}),A=function(){var e=Object(k.a)(O.a.mark((function e(){var t,n,a,r,o,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://zqxux34dr8.execute-api.ca-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&J(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(k.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(k.a)(O.a.mark((function e(){var t,n,a,r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),navigator.onLine||window.location.href.startsWith("http://localhost")){e.next=5;break}return t=localStorage.getItem("lastEvents"),Z.a.done(),e.abrupt("return",JSON.parse(t).events);case 5:if(!window.location.href.startsWith("http://localhost")){e.next=8;break}return Z.a.done(),e.abrupt("return",C);case 8:return e.next=10,A();case 10:if(!(n=e.sent)){e.next=20;break}return q(),a="https://zqxux34dr8.execute-api.ca-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,E.a.get(a);case 16:return(r=e.sent).data&&(o=D(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),Z.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},J=function(){var e=Object(k.a)(O.a.mark((function e(t){var n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://zqxux34dr8.execute-api.ca-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],eventCount:5},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e.updateEvents=function(t,n){var a;I().then((function(r){a=r,"all"===t&&0===n?a=r:"all"!==t&&0===n?a=r.filter((function(e){return e.location===t})):""===t&&n>0&&(a=r.slice(0,n)),e.setState({events:a,eventCount:n})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,navigator.onLine?this.setState({infoAlert:""}):this.setState({infoAlert:"You are not connected from internet(data may not be up to date)"}),I().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.eventCount),locations:D(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Meet App"}),Object(a.jsx)("h4",{children:"Choose your nearest city"}),Object(a.jsx)(b,{locations:this.state.locations,updateEvents:this.updateEvents,eventCount:this.state.eventCount}),Object(a.jsx)(j,{eventCount:this.state.eventCount,updateEvents:this.updateEvents}),Object(a.jsx)(v,{text:this.state.infoAlert}),Object(a.jsxs)("div",{className:"data-vis-wrapper",children:[Object(a.jsx)(y,{events:this.state.events}),Object(a.jsx)(w.d,{height:400,children:Object(a.jsxs)(w.f,{margin:{top:20,right:20,bottom:20,left:0},children:[Object(a.jsx)(w.a,{}),Object(a.jsx)(w.h,{type:"category",dataKey:"city",name:"city"}),Object(a.jsx)(w.i,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(a.jsx)(w.g,{cursor:{strokeDasharray:"3 3"}}),Object(a.jsx)(w.e,{data:window.location.href.startsWith("http://localhost")?[{city:"Dubai",number:2},{city:"Toronto,",number:2},{city:"Santiago,",number:3},{city:"Tokyo,",number:2}]:this.getData(),fill:"#8884d8"})]})})]}),Object(a.jsx)(f,{events:this.state.events})]})}}]),n}(r.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,390)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=n(162);c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),M(),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(t,e)}))}}(),R.config("09c879730ef74076b38bef72a6b338f4").install()}},[[388,1,2]]]);
//# sourceMappingURL=main.993822a4.chunk.js.map