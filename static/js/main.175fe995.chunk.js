(this["webpackJsonpapp-timers"]=this["webpackJsonpapp-timers"]||[]).push([[0],{105:function(e,t,a){e.exports=a(203)},110:function(e,t,a){},111:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),l=a(205),s=a(17),u=a(18),m=a(20),o=a(21),h=a(207);a(110),a(111);function p(e){var t=e.currentTime;return r.a.createElement("div",{className:"timerDisplayWrapper"},r.a.createElement("div",{className:"class1"},r.a.createElement("h1",null,"\u0421\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440"),r.a.createElement("h1",null,t)))}var v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hour:0,minute:0,second:0,millisecond:0,isPaused:!0},e.handleStart=function(){e.state.isPaused?(e.timerID=setInterval((function(){return e.tick()}),4),e.setState({isPaused:!1})):(clearInterval(e.timerID),e.setState({isPaused:!0}))},e.handleReset=function(){e.setState({hour:0,minute:0,second:0,millisecond:0})},e}return Object(u.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({millisecond:this.state.millisecond+4}),this.state.millisecond>=1e3&&this.setState({second:this.state.second+1,millisecond:0}),60===this.state.second&&this.setState({minute:this.state.minute+1,second:0}),60===this.state.minute&&this.setState({hour:this.state.hour+1,minute:0})}},{key:"render",value:function(){var e=this.state,t=e.hour,a=e.minute,n=e.second,c=e.millisecond,i=("0"+t).split("").slice(-2).join("")+":"+("0"+a).split("").slice(-2).join("")+":"+("0"+n).split("").slice(-2).join("")+":"+("00"+c).split("").slice(-3).join("");return r.a.createElement("div",{className:"timer-container"},r.a.createElement(p,{currentTime:i}),r.a.createElement("div",{className:"btn-container"},r.a.createElement("div",{className:"btn"},r.a.createElement(h.a,{type:"primary",onClick:this.handleStart},"\u041f\u0443\u0441\u043a/\u043f\u0430\u0443\u0437\u0430")),r.a.createElement("div",{className:"btn"},r.a.createElement(h.a,{type:"primary",onClick:this.handleReset},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"))))}}]),a}(r.a.Component);a(131),a(132);function d(e){var t=e.min,a=e.sec;return r.a.createElement("div",{className:"countdownDisplayWrapper"},r.a.createElement("div",{className:"class1"},r.a.createElement("h1",null,"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"),r.a.createElement("h1",null,t,":",a)))}a(133);var E=a(209),f=a(210),y=a(204),b=a(208);function g(e){var t=e.funcMin,a=e.funcSec,n=e.min,c=e.sec;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{func:t,min:n}),r.a.createElement(N,{func:a,sec:c}))}var j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){isNaN(t)||(0,e.props.func)(t)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(f.a,{span:12},r.a.createElement(y.a,{min:0,max:60,onChange:this.onChange,value:this.props.min})),r.a.createElement(f.a,{span:4},r.a.createElement(b.a,{min:0,max:60,style:{margin:"0 16px"},value:this.props.min,onChange:this.onChange,step:1})))}}]),a}(r.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){isNaN(t)||(0,e.props.func)(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.sec;return r.a.createElement(E.a,null,r.a.createElement(f.a,{span:12},r.a.createElement(y.a,{min:0,max:60,onChange:this.onChange,value:e,step:1})),r.a.createElement(f.a,{span:4},r.a.createElement(b.a,{min:0,max:60,style:{margin:"0 16px"},step:1,value:e,onChange:this.onChange})))}}]),a}(r.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={minutes:0,seconds:0},e.displayValue=function(e){return("0"+e.toString()).split("").slice(-2).join("")},e.changeValueMin=function(t){e.setState({minutes:t})},e.changeValueSec=function(t){e.setState({seconds:t})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.displayValue(this.state.minutes),t=this.displayValue(this.state.seconds);return r.a.createElement("div",{className:"Countdown-container"},r.a.createElement(d,{min:e,sec:t}),r.a.createElement(g,{funcMin:this.changeValueMin,min:e,sec:t,funcSec:this.changeValueSec}),r.a.createElement("div",{className:"btn-container"},r.a.createElement("div",{className:"btn"},r.a.createElement(h.a,{type:"primary"},"\u041f\u0443\u0441\u043a/\u043f\u0430\u0443\u0437\u0430")),r.a.createElement("div",{className:"btn"},r.a.createElement(h.a,{type:"primary"},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"))))}}]),a}(r.a.Component);a(184),a(185);function O(e){var t=e.currentTime,a=e.currentMs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f"),r.a.createElement("div",{className:"timerDisplayWrapper"},r.a.createElement("div",{className:"class1"},r.a.createElement("h1",null,t,":")),r.a.createElement("div",{className:"class2"},r.a.createElement("h1",null,a))))}var S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentTime:new Date},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),10)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=new Date;this.setState({currentTime:e})}},{key:"render",value:function(){var e=("00"+this.state.currentTime.getMilliseconds().toString()).split("").slice(-3).join("");return r.a.createElement("div",{className:"timer-container"},r.a.createElement(O,{currentTime:this.state.currentTime.toLocaleTimeString(),currentMs:e}))}}]),a}(r.a.Component);a(186);var C=function(){var e=l.a.TabPane;return r.a.createElement("div",{className:"app-container"},r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,"\u0422\u0430\u0439\u043c\u0435\u0440\u044b")),r.a.createElement("div",{className:"app"},r.a.createElement(l.a,{type:"card"},r.a.createElement(e,{tab:"\u0427\u0430\u0441\u044b",key:"1"},r.a.createElement(S,null)),r.a.createElement(e,{tab:"\u0421\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440",key:"2"},r.a.createElement(v,null)),r.a.createElement(e,{tab:"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438",key:"3"},r.a.createElement(k,null)))))};i.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.175fe995.chunk.js.map