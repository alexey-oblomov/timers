(this["webpackJsonpapp-timers"]=this["webpackJsonpapp-timers"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),c=a.n(i),l=a(166),s=a(33),m=a(34),u=a(36),o=a(37),h=a(168);a(89),a(90);function v(e){var t=e.currentTime;return r.a.createElement("div",{className:"timerDisplayWrapper"},r.a.createElement("div",{className:"class1"},r.a.createElement("h1",null,"\u0421\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440"),r.a.createElement("h1",null,t)))}var d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={hour:0,minute:0,second:0,millisecond:0,isPause:!0},e.handleStart=function(){e.state.isPause?(e.timerID=setInterval((function(){return e.tick()}),4),e.setState({isPause:!1})):(clearInterval(e.timerID),e.setState({isPause:!0}))},e.handleReset=function(){e.setState({hour:0,minute:0,second:0,millisecond:0})},e}return Object(m.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({millisecond:this.state.millisecond+4}),1e3===this.state.millisecond&&this.setState({second:this.state.second+1,millisecond:0}),60===this.state.second&&this.setState({minute:this.state.minute+1,second:0}),60===this.state.minute&&this.setState({hour:this.state.hour+1,minute:0})}},{key:"render",value:function(){var e=this.state,t=e.hour,a=e.minute,n=e.second,i=e.millisecond,c=("0"+t).split("").slice(-2).join("")+":"+("0"+a).split("").slice(-2).join("")+":"+("0"+n).split("").slice(-2).join("")+":"+("00"+i).split("").slice(-3).join("");return r.a.createElement("div",{className:"timer-container"},r.a.createElement(v,{currentTime:c}),r.a.createElement("div",{className:"btn-container"},r.a.createElement("div",{className:"btn"},r.a.createElement(h.a,{type:"primary",onClick:this.handleStart},"\u041f\u0443\u0441\u043a/\u043f\u0430\u0443\u0437\u0430")),r.a.createElement("div",{className:"btn"},r.a.createElement(h.a,{type:"primary",onClick:this.handleReset},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"))))}}]),a}(r.a.Component);function p(){return r.a.createElement("div",{className:"timer"},r.a.createElement("h1",null,"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"))}a(111),a(112);function E(e){var t=e.currentTime,a=e.currentMs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f"),r.a.createElement("div",{className:"timerDisplayWrapper"},r.a.createElement("div",{className:"class1"},r.a.createElement("h1",null,t,":")),r.a.createElement("div",{className:"class2"},r.a.createElement("h1",null,a))))}var f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={currentTime:new Date},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),10)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=new Date;this.setState({currentTime:e})}},{key:"render",value:function(){var e=("00"+this.state.currentTime.getMilliseconds().toString()).split("").slice(-3).join("");return r.a.createElement("div",{className:"timer-container"},r.a.createElement(E,{currentTime:this.state.currentTime.toLocaleTimeString(),currentMs:e}))}}]),a}(r.a.Component);a(113);var y=function(){var e=l.a.TabPane;return r.a.createElement("div",{className:"app-container"},r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,"\u0422\u0430\u0439\u043c\u0435\u0440\u044b")),r.a.createElement("div",{className:"app"},r.a.createElement(l.a,{type:"card"},r.a.createElement(e,{tab:"\u0427\u0430\u0441\u044b",key:"1"},r.a.createElement(f,null)),r.a.createElement(e,{tab:"\u0421\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440",key:"2"},r.a.createElement(d,null)),r.a.createElement(e,{tab:"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438",key:"3"},r.a.createElement(p,null)))))};c.a.render(r.a.createElement(y,null),document.getElementById("root"))},84:function(e,t,a){e.exports=a(165)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.d1c91665.chunk.js.map