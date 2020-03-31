(this["webpackJsonpapp-timers"]=this["webpackJsonpapp-timers"]||[]).push([[0],{108:function(e,t,a){e.exports=a(212)},113:function(e,t,a){},114:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),c=a.n(s),i=a(214),l=a(19),m=a(20),u=a(22),o=a(23),p=a(217);a(113),a(114);function h(e){var t=e.currentTime;return r.a.createElement("div",{className:"timerDisplayWrapper"},r.a.createElement("div",{className:"class1"},r.a.createElement("h1",null,"\u0421\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440"),r.a.createElement("h1",null,t)))}var d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={hour:0,minute:0,second:0,millisecond:0,isPaused:!0},e.handleStart=function(){e.state.isPaused?(e.timerID=setInterval((function(){return e.tick()}),17),e.setState({isPaused:!1})):(clearInterval(e.timerID),e.setState({isPaused:!0}))},e.handleReset=function(){e.setState({hour:0,minute:0,second:0,millisecond:0})},e}return Object(m.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({millisecond:this.state.millisecond+17}),this.state.millisecond>=1e3&&this.setState({second:this.state.second+1,millisecond:0}),60===this.state.second&&this.setState({minute:this.state.minute+1,second:0}),60===this.state.minute&&this.setState({hour:this.state.hour+1,minute:0})}},{key:"render",value:function(){var e=this.state,t=e.hour,a=e.minute,n=e.second,s=e.millisecond,c=("0"+t).split("").slice(-2).join("")+":"+("0"+a).split("").slice(-2).join("")+":"+("0"+n).split("").slice(-2).join("")+":"+("00"+s).split("").slice(-3).join("");return r.a.createElement("div",{className:"timer-container"},r.a.createElement(h,{currentTime:c}),r.a.createElement("div",{className:"btn-container"},r.a.createElement("div",{className:"btn"},r.a.createElement(p.a,{type:"primary",onClick:this.handleStart},"\u041f\u0443\u0441\u043a/\u043f\u0430\u0443\u0437\u0430")),r.a.createElement("div",{className:"btn"},r.a.createElement(p.a,{type:"primary",onClick:this.handleReset},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"))))}}]),a}(r.a.Component);a(134),a(135);function v(e){var t=e.min,a=e.sec;return r.a.createElement("div",{className:"countdownDisplayWrapper"},r.a.createElement("div",{className:"class1"},r.a.createElement("h1",null,t,":",a)))}a(136);var f=a(219),E=a(220),y=a(213),b=a(218);function g(e){var t=e.funcMin,a=e.funcSec,n=e.min,s=e.sec;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{func:t,min:n}),r.a.createElement(N,{func:a,sec:s}))}var S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){isNaN(t)||(0,e.props.func)(t)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(E.a,{span:12},r.a.createElement(y.a,{min:0,max:59,onChange:this.onChange,value:this.props.min})),r.a.createElement(E.a,{span:4},r.a.createElement(b.a,{min:0,max:59,style:{margin:"0 16px"},value:this.props.min,onChange:this.onChange,step:1})))}}]),a}(r.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){isNaN(t)||(0,e.props.func)(t)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.sec;return r.a.createElement(f.a,null,r.a.createElement(E.a,{span:12},r.a.createElement(y.a,{min:0,max:59,onChange:this.onChange,value:e,step:1})),r.a.createElement(E.a,{span:4},r.a.createElement(b.a,{min:0,max:59,style:{margin:"0 16px"},step:1,value:e,onChange:this.onChange})))}}]),a}(r.a.Component),j=a(216),k=function(e){var t=e.percentTime;return r.a.createElement(j.a,{type:"circle",percent:t})},I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={minutes:0,seconds:0,totalTime:0,percentTime:0,isPaused:!0},e.displayValue=function(e){return("0"+e.toString()).split("").slice(-2).join("")},e.changeValueMin=function(t){e.setState({minutes:t})},e.changeValueSec=function(t){e.setState({seconds:t})},e.handleStart=function(){var t=60*e.state.minutes+e.state.seconds;e.setState({totalTime:t}),e.state.isPaused?(e.setState({isPaused:!1}),e.timerID=setInterval((function(){return e.tick()}),1e3)):(clearInterval(e.timerID),e.setState({isPaused:!0}))},e.handleReset=function(){e.timerID&&clearInterval(e.timerID),e.setState({minutes:0,seconds:0,totalTime:0,isPaused:!0})},e.tick=function(){var t=60*e.state.minutes+e.state.seconds,a=Math.floor(100*t/e.state.totalTime);if(e.setState({percentTime:a}),0===e.state.minutes&&0===e.state.seconds)return clearInterval(e.timerID),void e.setState({isPaused:!0});0===e.state.seconds&&e.setState({seconds:60,minutes:e.state.minutes-1}),e.setState({seconds:e.state.seconds-1})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.displayValue(this.state.minutes),t=this.displayValue(this.state.seconds),a=this.state.percentTime;return r.a.createElement("div",{className:"Countdown-container"},r.a.createElement("h1",null,"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"),r.a.createElement("div",{className:"display-progress-container"},r.a.createElement("div",{className:"diasplay-progress-flex-box"},r.a.createElement(v,{min:e,sec:t})),r.a.createElement("div",{className:"diasplay-progress-flex-box"},r.a.createElement(k,{percentTime:a}))),r.a.createElement("div",{className:"InputField-buttons-container"},r.a.createElement("div",{className:"InputField-container"},r.a.createElement(g,{funcMin:this.changeValueMin,min:e,sec:t,funcSec:this.changeValueSec})),r.a.createElement("div",{className:"btn-container"},r.a.createElement("div",{className:"btn"},r.a.createElement(p.a,{type:"primary",onClick:this.handleStart},"\u041f\u0443\u0441\u043a/\u043f\u0430\u0443\u0437\u0430")),r.a.createElement("div",{className:"btn"},r.a.createElement(p.a,{type:"primary",onClick:this.handleReset},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c")))))}}]),a}(r.a.Component);a(195),a(196);function C(e){var t=e.currentTime,a=e.currentMs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f"),r.a.createElement("div",{className:"timerDisplayWrapper"},r.a.createElement("div",{className:"class1"},r.a.createElement("h1",null,t,":")),r.a.createElement("div",{className:"class2"},r.a.createElement("h1",null,a))))}var O=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentTime:new Date},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),10)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=new Date;this.setState({currentTime:e})}},{key:"render",value:function(){var e=("00"+this.state.currentTime.getMilliseconds().toString()).split("").slice(-3).join("");return r.a.createElement("div",{className:"timer-container"},r.a.createElement(C,{currentTime:this.state.currentTime.toLocaleTimeString(),currentMs:e}))}}]),a}(r.a.Component);a(197);var T=function(){var e=i.a.TabPane;return r.a.createElement("div",{className:"app-container"},r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,"\u0422\u0430\u0439\u043c\u0435\u0440\u044b")),r.a.createElement("div",{className:"app"},r.a.createElement(i.a,{type:"card"},r.a.createElement(e,{tab:"\u0427\u0430\u0441\u044b",key:"1"},r.a.createElement(O,null)),r.a.createElement(e,{tab:"\u0421\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440",key:"2"},r.a.createElement(d,null)),r.a.createElement(e,{tab:"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438",key:"3"},r.a.createElement(I,null)))))};c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.fc0395be.chunk.js.map