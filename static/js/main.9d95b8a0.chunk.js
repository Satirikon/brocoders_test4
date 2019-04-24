(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{365:function(e,t,a){e.exports=a(702)},370:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},513:function(e,t,a){},514:function(e,t,a){},693:function(e,t,a){},694:function(e,t,a){},700:function(e,t,a){},701:function(e,t,a){},702:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),i=a.n(c),o=(a(370),a(25)),l=a(26),s=a(28),u=a(27),m=a(29),d=a(40),p=a(32),b=a(273),f=a(86),E="timers",h="ADD_TIMER",O="DELETE_TIMER",j="GEN_TIMERS",v="SET_TIMERS",g="brocoders:test4:",y=function(e,t){return localStorage.setItem("".concat(g).concat(e),t)},k=function(e){return localStorage.getItem("".concat(g).concat(e))},T=function(e){return localStorage.removeItem("".concat(g).concat(e))},w=(localStorage.clear,k(E)),S=w?JSON.parse(w):[],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return[].concat(Object(f.a)(e),[t.payload]);case O:var a=Object(f.a)(e);return a.splice(t.payload,1),a;case v:return t.payload;default:return e}},C=Object(p.c)({timers:N}),D=a(41),x=a.n(D),I=a(42),M=a(111),A=a.n(M),F=function(e){return{type:h,payload:e}},_=function(e){return{type:O,payload:e}},R=function(){return{type:j}},G=function(e){return{type:v,payload:e}},H=function(e,t){return Math.round(Math.random()*(t-e)+e)},J=x.a.mark(K),L=x.a.mark(P),B=x.a.mark(W);function K(){var e;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(I.c)(function(e){return e.timers});case 2:e=t.sent,y(E,JSON.stringify(e));case 4:case"end":return t.stop()}},J)}function P(){var e,t,a,n,r;return x.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:for(e=H(10,15),(t=new Date).setHours(0,0,0,0),(a=new Date).setHours(23,59,59,999),n=[],r=0;r<e;r++)n.push({id:A()(),name:"task ".concat(r+1,"_").concat((new Date).getTime()),start:H(t.getTime(),a.getTime()),duration:60*H(10,90)*1e3});return c.next=9,Object(I.b)(G(n));case 9:case"end":return c.stop()}},L)}function W(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([Object(I.d)(h,K),Object(I.d)(O,K),Object(I.d)(v,K),Object(I.d)(j,P)]);case 2:case"end":return e.stop()}},B)}var Y=x.a.mark($);function $(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([W()]);case 2:case"end":return e.stop()}},Y)}var q=a(56),z=a(57),Q=(a(379),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"error-message"},"Page is not found.")}}]),t}(n.PureComponent)),U=a(8),V=(a(380),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isOpened,a=e.onClose;return r.a.createElement(U.d,{open:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:"alert-modal"},r.a.createElement(U.h,{className:"alert-dialog-title"},"Empty task name"),r.a.createElement(U.f,null,r.a.createElement(U.g,{className:"alert-dialog-description"},"You are trying to close your task without a name, enter the title and try again!")),r.a.createElement(U.e,null,r.a.createElement(U.c,{className:"alert-dialog-button",onClick:a,color:"primary",autoFocus:!0},"Close")))}}]),t}(n.PureComponent)),X="timerStartTime",Z=function(e,t){var a=new Date(e);return t?a.toISOString().substr(11,8):a.toLocaleTimeString()},ee=(a(513),function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onStart=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).getTime();a.setState({start:e,duration:(new Date).getTime()-e}),y(X,e),a.timer=setInterval(function(){a.setState({duration:(new Date).getTime()-a.state.start})},1e3)},a.onStop=function(){if(!a.state.name)return a.setState({isModalOpened:!0});clearInterval(a.timer),a.props.addTimer({id:A()(),start:a.state.start,duration:a.state.duration,name:a.state.name}),T(X),a.setState({name:"",start:0,duration:0})},a.onTaskNameChange=function(e){return a.setState({name:e.target.value.trim()})},a.timer=null;var n=k(X);return a.state={name:"",duration:0,start:n?Number(n):0,isModalOpened:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.state.start&&this.onStart(this.state.start)}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.start,c=t.duration,i=t.isModalOpened;return r.a.createElement("div",{className:"Timer"},r.a.createElement(U.p,{id:"standard-bare",placeholder:"Name of your task",value:a,margin:"normal",className:"text-field",onChange:this.onTaskNameChange}),r.a.createElement(U.b,{className:"timer-circle"},Z(c,!0)),!!n&&r.a.createElement(U.c,{variant:"contained",color:"primary",className:"action-button",onClick:this.onStop},"Stop"),!n&&r.a.createElement(U.c,{variant:"contained",color:"primary",className:"action-button",onClick:function(){return e.onStart()}},"Start"),r.a.createElement(V,{isOpened:i,onClose:function(){return e.setState({isModalOpened:!1})}}))}}]),t}(n.Component)),te=Object(d.b)(null,function(e){return Object(p.b)({addTimer:F},e)})(ee),ae=(a(514),a(49)),ne=function(e){return e.getSeconds()+60*e.getMinutes()},re=function(e){var t=Object(f.a)(new Array(24)).map(function(){return{minutes:0}});return e.forEach(function(e){(function(e,t){for(var a=new Date(+e+ +t),n=[],r=e=new Date(e);r<a;){var c=3600-ne(r),i=new Date(+r+1e3*c),o=i>a?ne(a)-ne(r):c;n.push({hour:r.getHours(),minutes:Math.round(o/60*100)/100}),r=i}return n})(e.start,e.duration).forEach(function(e){t[e.hour].minutes=e.minutes})}),t},ce=(a(693),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.timers,a=e.generateTimers,n=re(t);return r.a.createElement("div",{className:"tasks-chart"},r.a.createElement(ae.e,{height:500},r.a.createElement(ae.b,{className:"bar-chart",data:n},r.a.createElement(ae.c,{strokeDasharray:"3 3"}),r.a.createElement(ae.g,null),r.a.createElement(ae.h,null),r.a.createElement(ae.f,null),r.a.createElement(ae.d,null),r.a.createElement(ae.a,{dataKey:"minutes",fill:"#8884d8"}))),r.a.createElement(U.c,{variant:"contained",color:"primary",className:"action-button right",onClick:function(){return a()}},"Generate"))}}]),t}(n.Component)),ie=Object(d.b)(function(e){return{timers:e.timers}},function(e){return Object(p.b)({generateTimers:R},e)})(ce),oe=(a(694),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.timers,a=e.deleteTimer;return r.a.createElement("div",{className:"tasks-log"},r.a.createElement(U.j,null,r.a.createElement(U.m,null,r.a.createElement(U.n,null,r.a.createElement(U.l,null,"\u2116"),r.a.createElement(U.l,{align:"center"},"Task"),r.a.createElement(U.l,{align:"center"},"Time Start"),r.a.createElement(U.l,{align:"center"},"Time end"),r.a.createElement(U.l,{align:"center"},"Time Spend"),r.a.createElement(U.l,{align:"center"},"Info"),r.a.createElement(U.l,{align:"center"},"Delete"))),r.a.createElement(U.k,null,t.map(function(e,t){return r.a.createElement(U.n,{key:t},r.a.createElement(U.l,{component:"th",scope:"row"},t+1),r.a.createElement(U.l,{align:"center"},e.name),r.a.createElement(U.l,{align:"center"},Z(e.start)),r.a.createElement(U.l,{align:"center"},Z(e.start+e.duration)),r.a.createElement(U.l,{align:"center"},Z(e.duration,!0)),r.a.createElement(U.l,{align:"center",className:"wrapper"},r.a.createElement(q.b,{to:"/tasks/".concat(e.id),className:"link"},r.a.createElement(U.c,{className:"action-button",variant:"contained",color:"primary"},"INFO"))),r.a.createElement(U.l,{align:"center",className:"wrapper"},r.a.createElement(U.c,{className:"action-button",variant:"contained",color:"primary",onClick:function(){return a(t)}},"DELETE")))}))))}}]),t}(n.Component)),le=Object(d.b)(function(e){return{timers:e.timers}},function(e){return Object(p.b)({deleteTimer:_},e)})(oe),se=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).setActiveTab=function(e,t){if(a.state.activeTab!==t){a.setState({activeTab:t});var n=0===t?"/":"/chart";a.props.history.push(n)}},a.state={activeTab:"/chart"===a.props.location.pathname?1:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.activeTab;return r.a.createElement("div",{className:"tabs-menu"},r.a.createElement(U.a,{position:"static"},r.a.createElement(U.o,{className:"header-menu",value:e,onChange:this.setActiveTab},r.a.createElement(U.i,{className:"tasks-menu",label:"TASKS LOG"}),r.a.createElement(U.i,{className:"tasks-menu",label:"TASKS CHART"}))),r.a.createElement(z.b,{exact:!0,path:"/",component:le}),r.a.createElement(z.b,{exact:!0,path:"/chart",component:ie}))}}]),t}(n.Component),ue=Object(z.f)(se),me=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(te,null),r.a.createElement(ue,null))}}]),t}(n.Component),de=(a(700),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.timer;return r.a.createElement("div",null,r.a.createElement(U.j,null,r.a.createElement(U.m,null,r.a.createElement(U.n,null,r.a.createElement(U.l,null,"Id"),r.a.createElement(U.l,{align:"center"},"Task"),r.a.createElement(U.l,{align:"center"},"Time Start"),r.a.createElement(U.l,{align:"center"},"Time end"),r.a.createElement(U.l,{align:"center"},"Time Spend"))),r.a.createElement(U.k,null,r.a.createElement(U.n,null,r.a.createElement(U.l,{component:"th",scope:"row"},e.id),r.a.createElement(U.l,{align:"center"},e.name),r.a.createElement(U.l,{align:"center"},Z(e.start)),r.a.createElement(U.l,{align:"center"},Z(e.start+e.duration)),r.a.createElement(U.l,{align:"center"},Z(e.duration,!0))))),r.a.createElement("div",{className:"wrapper"},r.a.createElement(q.b,{to:"/",className:"link"},r.a.createElement(U.c,{variant:"contained",color:"primary",className:"action-button right"},"Go Back"))))}}]),t}(n.Component)),pe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.timers;return r.a.createElement(q.a,{basename:"/brocoders_test4"},r.a.createElement(z.d,null,r.a.createElement(z.b,{exact:!0,path:"/notFound",component:Q}),r.a.createElement(z.b,{exact:!0,path:"/tasks/:id",render:function(t){var a=e.find(function(e){return e.id===t.match.params.id});return a?r.a.createElement(de,{timer:a}):r.a.createElement(z.a,{to:"/notFound"})}}),r.a.createElement(z.b,{exact:!0,path:["/","/chart"],component:me}),r.a.createElement(z.b,{path:"*",render:function(){return r.a.createElement(z.a,{to:"/notFound"})}})))}}]),t}(n.Component),be=Object(d.b)(function(e){return{timers:e.timers}})(pe),fe=(a(701),Object(b.a)()),Ee=Object(p.e)(C,Object(p.a)(fe));fe.run($);var he=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:Ee},r.a.createElement("div",{className:"App"},r.a.createElement(be,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[365,1,2]]]);
//# sourceMappingURL=main.9d95b8a0.chunk.js.map