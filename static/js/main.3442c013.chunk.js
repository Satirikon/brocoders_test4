(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{367:function(e,t,a){e.exports=a(704)},372:function(e,t,a){},381:function(e,t,a){},519:function(e,t,a){},520:function(e,t,a){},521:function(e,t,a){},700:function(e,t,a){},701:function(e,t,a){},702:function(e,t,a){},703:function(e,t,a){},704:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(34),o=a.n(c),i=(a(372),a(25)),l=a(26),s=a(28),u=a(27),m=a(29),p=a(42),d=a(33),b=a(275),f=a(87),E="tasks",h="ADD_TASKS",v="DELETE_TASKS",O="GEN_TASKS",j="RESET_TASKS",g=[],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return[].concat(Object(f.a)(e),[t.payload]);case v:var a=Object(f.a)(e);return a.splice(t.payload,1),a;case j:return t.payload?t.payload:g;default:return e}},y=a(71),T="activeTimer",w="ADD_ACTIVE_TIMER",S="DELETE_ACTIVE_TIMER",N="UPDATE_ACTIVE_TIMER",C={name:"",start:0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;case S:return{name:"",start:0};case N:return Object(y.a)({},e,t.payload);default:return e}},x=Object(d.combineReducers)({tasks:k,activeTimer:A}),D=a(30),I=a.n(D),M=a(31),_=a(112),J=a.n(_),K=function(e){return{type:h,payload:e}},R=function(e){return{type:v,payload:e}},G=function(){return{type:O}},L=function(e){return{type:j,payload:e}},B="brocoders:test4:",H=function(e,t){return localStorage.setItem("".concat(B).concat(e),t)},P=function(e){return localStorage.getItem("".concat(B).concat(e))},W=function(e){return localStorage.removeItem("".concat(B).concat(e))},F=(localStorage.clear,function(e,t){return Math.round(Math.random()*(t-e)+e)}),V=I.a.mark($),U=I.a.mark(q),Y=I.a.mark(z);function $(e){var t,a;return I.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(M.d)(function(e){return e.tasks});case 3:if(a=n.sent,t){n.next=6;break}return n.abrupt("return",W(E));case 6:H(E,JSON.stringify(a));case 7:case"end":return n.stop()}},V)}function q(){var e,t,a,n,r;return I.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:for(e=F(10,15),(t=new Date).setHours(0,0,0,0),(a=new Date).setHours(23,59,59,999),n=[],r=0;r<e;r++)n.push({id:J()(),name:"task ".concat(r+1,"_").concat(Date.now()),start:F(t.getTime(),a.getTime()),duration:60*F(10,90)*1e3});return c.next=9,Object(M.c)(L(n));case 9:case"end":return c.stop()}},U)}function z(){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([Object(M.e)(h,$),Object(M.e)(v,$),Object(M.e)(j,$),Object(M.e)(O,q)]);case 2:case"end":return e.stop()}},Y)}var Q=I.a.mark(te),X=I.a.mark(ae),Z=I.a.mark(ne),ee=I.a.mark(re);function te(e){var t;return I.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,H(T,JSON.stringify(t));case 3:case"end":return a.stop()}},Q)}function ae(){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(T);case 2:case"end":return e.stop()}},X)}function ne(e){var t,a;return I.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(M.b)(500);case 3:return n.next=5,Object(M.d)(function(e){return e[T]});case 5:return a=n.sent,n.next=8,H(T,JSON.stringify(Object(y.a)({},a,t)));case 8:case"end":return n.stop()}},Z)}function re(){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([Object(M.e)(w,te),Object(M.e)(S,ae),Object(M.e)(N,ne)]);case 2:case"end":return e.stop()}},ee)}var ce=I.a.mark(oe);function oe(){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([z(),re()]);case 2:case"end":return e.stop()}},ce)}var ie=a(262),le=a(47),se=a(57),ue=a(7),me=(a(381),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match.params.taskId;return r.a.createElement("div",{className:"error-page"},r.a.createElement("div",{className:"error-message"},!e&&"Page is not found.",!!e&&"Task ".concat(e," is not found.")),r.a.createElement("div",{className:"wrapper"},r.a.createElement(le.b,{to:"/",className:"link"},r.a.createElement(ue.c,{variant:"contained",color:"primary",className:"action-button right"},"Go Back"))))}}]),t}(n.PureComponent)),pe=(a(519),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isOpened,a=e.onClose;return r.a.createElement(ue.d,{open:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:"alert-modal"},r.a.createElement(ue.h,{className:"alert-dialog-title"},"Empty task name"),r.a.createElement(ue.f,null,r.a.createElement(ue.g,{className:"alert-dialog-description"},"You are trying to close your task without a name, enter the title and try again!")),r.a.createElement(ue.e,null,r.a.createElement(ue.c,{className:"alert-dialog-button",onClick:a,color:"primary",autoFocus:!0},"Close")))}}]),t}(n.PureComponent)),de=function(e,t){var a=new Date(e);return t?a.toISOString().substr(11,8):a.toLocaleTimeString()},be=function(e){return{type:w,payload:e}},fe=function(){return{type:S}},Ee=function(e){return{type:N,payload:e}},he=(a(520),function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleModal=function(){return a.setState(function(e){return{isModalOpened:!e.isModalOpened}})},a.onStart=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();a.props.addActiveTimer({start:e,name:a.props.activeTimer.name}),a.timer=setInterval(function(){a.setState({duration:Date.now()-a.props.activeTimer.start})},1e3)},a.onStop=function(){var e=a.props.activeTimer,t=e.name,n=e.start;if(!t)return a.toggleModal();clearInterval(a.timer),a.props.addTask({id:J()(),start:n,duration:a.state.duration,name:t}),a.props.deleteActiveTimer(),a.setState({duration:0})};var n=e.activeTimer.start;return a.timer=null,a.state={duration:0===n?0:Date.now()-n,isModalOpened:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.activeTimer.start&&this.onStart(this.props.activeTimer.start)}},{key:"render",value:function(){var e=this,t=this.state,a=t.duration,n=t.isModalOpened,c=this.props.activeTimer,o=c.start,i=c.name;return r.a.createElement("div",{className:"Timer"},r.a.createElement(ue.p,{id:"standard-bare",placeholder:"Name of your task",value:i,margin:"normal",className:"text-field",onChange:function(t){return e.props.updateActiveTimer({name:t.target.value.trim()})}}),r.a.createElement(ue.b,{className:"timer-circle"},de(a,!0)),!!o&&r.a.createElement(ue.c,{variant:"contained",color:"primary",className:"action-button",onClick:this.onStop},"Stop"),!o&&r.a.createElement(ue.c,{variant:"contained",color:"primary",className:"action-button",onClick:function(){return e.onStart()}},"Start"),r.a.createElement(pe,{isOpened:n,onClose:this.toggleModal}))}}]),t}(n.Component)),ve=Object(p.b)(function(e){return{activeTimer:e.activeTimer}},function(e){return Object(d.bindActionCreators)({addActiveTimer:be,deleteActiveTimer:fe,updateActiveTimer:Ee,addTask:K},e)})(he),Oe=(a(521),a(50)),je=function(e){return e.getSeconds()+60*e.getMinutes()},ge=function(e){var t=Object(f.a)(new Array(24)).map(function(){return{minutes:0}});return e.forEach(function(e){(function(e,t){for(var a=new Date(+e+ +t),n=[],r=e=new Date(e);r<a;){var c=3600-je(r),o=new Date(+r+1e3*c),i=o>a?je(a)-je(r):c;n.push({hour:r.getHours(),minutes:Math.round(i/60*100)/100}),r=o}return n})(e.start,e.duration).forEach(function(e){t[e.hour].minutes=e.minutes})}),t.map(function(e){return Object(y.a)({},e,{minutes:Math.round(2*e.minutes)/2})})},ke=(a(700),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.generateTasks,n=e.resetTasks,c=ge(t);return r.a.createElement("div",{className:"tasks-chart"},r.a.createElement(Oe.e,{height:500},r.a.createElement(Oe.b,{className:"bar-chart",data:c},r.a.createElement(Oe.c,{strokeDasharray:"3 3"}),r.a.createElement(Oe.g,null),r.a.createElement(Oe.h,null),r.a.createElement(Oe.f,null),r.a.createElement(Oe.d,null),r.a.createElement(Oe.a,{dataKey:"minutes",fill:"#8884d8"}))),r.a.createElement(ue.c,{variant:"contained",color:"primary",className:"action-button right",onClick:a},"Generate"),r.a.createElement(ue.c,{variant:"contained",color:"primary",className:"action-button right",onClick:function(){return n()}},"Reset All"))}}]),t}(n.Component)),ye=Object(p.b)(function(e){return{tasks:e.tasks}},function(e){return Object(d.bindActionCreators)({generateTasks:G,resetTasks:L},e)})(ke),Te=(a(701),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.deleteTask;return r.a.createElement("div",{className:"tasks-log"},r.a.createElement(ue.j,null,r.a.createElement(ue.m,null,r.a.createElement(ue.n,null,r.a.createElement(ue.l,null,"\u2116"),r.a.createElement(ue.l,{align:"center"},"Task"),r.a.createElement(ue.l,{align:"center"},"Time Start"),r.a.createElement(ue.l,{align:"center"},"Time end"),r.a.createElement(ue.l,{align:"center"},"Time Spend"),r.a.createElement(ue.l,{align:"center"},"Info"),r.a.createElement(ue.l,{align:"center"},"Delete"))),r.a.createElement(ue.k,null,t.map(function(e,t){return r.a.createElement(ue.n,{key:t},r.a.createElement(ue.l,{component:"th",scope:"row"},t+1),r.a.createElement(ue.l,{align:"center"},e.name),r.a.createElement(ue.l,{align:"center"},de(e.start)),r.a.createElement(ue.l,{align:"center"},de(e.start+e.duration)),r.a.createElement(ue.l,{align:"center"},de(e.duration,!0)),r.a.createElement(ue.l,{align:"center",className:"wrapper"},r.a.createElement(le.b,{to:"/tasks/".concat(e.id),className:"link"},r.a.createElement(ue.c,{className:"action-button",variant:"contained",color:"primary"},"INFO"))),r.a.createElement(ue.l,{align:"center",className:"wrapper"},r.a.createElement(ue.c,{className:"action-button",variant:"contained",color:"primary",onClick:function(){return a(t)}},"DELETE")))}))))}}]),t}(n.Component)),we=Object(p.b)(function(e){return{tasks:e.tasks}},function(e){return Object(d.bindActionCreators)({deleteTask:R},e)})(Te),Se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).setActiveTab=function(e,t){if(a.state.activeTab!==t){a.setState({activeTab:t});var n=0===t?"/":"/chart";a.props.history.push(n)}},a.state={activeTab:"/chart"===a.props.location.pathname?1:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.activeTab;return r.a.createElement("div",{className:"tabs-menu"},r.a.createElement(ue.a,{position:"static"},r.a.createElement(ue.o,{className:"header-menu",value:e,onChange:this.setActiveTab},r.a.createElement(ue.i,{className:"tasks-menu",label:"TASKS LOG"}),r.a.createElement(ue.i,{className:"tasks-menu",label:"TASKS CHART"}))),r.a.createElement(se.b,{exact:!0,path:"/",component:we}),r.a.createElement(se.b,{exact:!0,path:"/chart",component:ye}))}}]),t}(n.Component),Ne=Object(se.f)(Se),Ce=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(ve,null),r.a.createElement(Ne,null))}}]),t}(n.Component),Ae=(a(702),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id,t=this.props.tasks.find(function(t){return t.id===e});return t?r.a.createElement("div",null,r.a.createElement(ue.j,null,r.a.createElement(ue.m,null,r.a.createElement(ue.n,null,r.a.createElement(ue.l,null,"Id"),r.a.createElement(ue.l,{align:"center"},"Task"),r.a.createElement(ue.l,{align:"center"},"Time Start"),r.a.createElement(ue.l,{align:"center"},"Time end"),r.a.createElement(ue.l,{align:"center"},"Time Spend"))),r.a.createElement(ue.k,null,r.a.createElement(ue.n,null,r.a.createElement(ue.l,{component:"th",scope:"row"},t.id),r.a.createElement(ue.l,{align:"center"},t.name),r.a.createElement(ue.l,{align:"center"},de(t.start)),r.a.createElement(ue.l,{align:"center"},de(t.start+t.duration)),r.a.createElement(ue.l,{align:"center"},de(t.duration,!0))))),r.a.createElement("div",{className:"wrapper"},r.a.createElement(le.b,{to:"/",className:"link"},r.a.createElement(ue.c,{variant:"contained",color:"primary",className:"action-button right"},"Go Back")))):r.a.createElement(se.a,{to:"/404/".concat(e)})}}]),t}(n.Component)),xe=Object(p.b)(function(e){return{tasks:e.tasks}})(Ae),De=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(le.a,{basename:"/brocoders_test4"},r.a.createElement(se.d,null,r.a.createElement(se.b,{exact:!0,path:"/404/:taskId?",component:me}),r.a.createElement(se.b,{exact:!0,path:"/tasks/:id",component:xe}),r.a.createElement(se.b,{exact:!0,path:["/","/chart"],component:Ce}),r.a.createElement(se.a,{to:"/404"})))}}]),t}(n.Component),Ie=(a(703),Object(b.a)()),Me=Object(d.createStore)(x,function(e){var t=P(E),a=P(T),n={};return t&&(n.tasks=JSON.parse(t)),a&&(n.activeTimer=JSON.parse(a)),n}(),Object(ie.composeWithDevTools)(Object(d.applyMiddleware)(Ie)));Ie.run(oe);var _e=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:Me},r.a.createElement("div",{className:"App"},r.a.createElement(De,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[367,1,2]]]);
//# sourceMappingURL=main.3442c013.chunk.js.map