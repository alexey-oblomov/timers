(this["webpackJsonpapp-timers"]=this["webpackJsonpapp-timers"]||[]).push([[0],{106:function(e,t,a){e.exports=a(210)},111:function(e,t,a){},112:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(10),r=a.n(s),c=a(213),l=a(18),u=a(19),o=a(20),m=a(21),d=a(216);a(111),a(112);function h(e){var t=e.currentTime;return i.a.createElement("div",{className:"timerDisplayWrapper"},i.a.createElement("div",{className:"class1"},i.a.createElement("h1",null,"\u0421\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440"),i.a.createElement("h1",null,t)))}var p=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={hour:0,minute:0,second:0,millisecond:0,isPaused:!0},e.handleStart=function(){e.state.isPaused?(e.setState({isPaused:!1}),e.timerID=setTimeout((function(){return e.tick()}),17)):(clearTimeout(e.timerID),e.setState({isPaused:!0}))},e.handleReset=function(){e.setState({hour:0,minute:0,second:0,millisecond:0})},e}return Object(u.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=this;this.state.isPaused?clearTimeout(this.timerID):(this.setState({millisecond:this.state.millisecond+17}),this.state.millisecond>=1e3&&this.setState({second:this.state.second+1,millisecond:0}),60===this.state.second&&this.setState({minute:this.state.minute+1,second:0}),60===this.state.minute&&this.setState({hour:this.state.hour+1,minute:0}),this.timerID=setTimeout((function(){return e.tick()}),17))}},{key:"render",value:function(){var e=this.state,t=e.hour,a=e.minute,n=e.second,s=e.millisecond,r=("0"+t).split("").slice(-2).join("")+":"+("0"+a).split("").slice(-2).join("")+":"+("0"+n).split("").slice(-2).join("")+":"+("00"+s).split("").slice(-3).join("");return i.a.createElement("div",{className:"timer-container"},i.a.createElement(h,{currentTime:r}),i.a.createElement("div",{className:"btn-container"},i.a.createElement("div",{className:"btn"},i.a.createElement(d.a,{type:"primary",onClick:this.handleStart},"\u041f\u0443\u0441\u043a/\u043f\u0430\u0443\u0437\u0430")),i.a.createElement("div",{className:"btn"},i.a.createElement(d.a,{type:"primary",onClick:this.handleReset},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"))))}}]),a}(i.a.Component);a(132),a(133);function v(e){var t=e.min,a=e.sec;return i.a.createElement("div",{className:"countdownDisplayWrapper"},i.a.createElement("div",{className:"class1"},i.a.createElement("h1",null,t,":",a)))}a(134);var f=a(212),E=a(218),b=a(217);function y(e){var t=e.changeMinutes,a=e.changeSeconds,n=e.changeValueFromSlider,s=e.valueInputMinutes,r=e.valueInputSeconds,c=e.isDisabled,l=e.valueSlider;return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{changeValueFromSlider:n,value:l,isDisabled:c}),i.a.createElement(S,{changeMinutes:t,value:s,isDisabled:c}),i.a.createElement(D,{changeSeconds:a,value:r,isDisabled:c}))}var g=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).onChange=function(t){(0,e.props.changeValueFromSlider)(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isDisabled,a=e.value;return i.a.createElement(f.a,{min:0,max:43200,step:15,value:a,onChange:this.onChange,disabled:t})}}]),a}(i.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).onChange=function(t){isNaN(t)||(0,e.props.changeMinutes)(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isDisabled,a=e.value;return i.a.createElement(E.a,null,i.a.createElement(b.a,{min:0,max:720,style:{margin:"0 16px"},value:a,onChange:this.onChange,step:1,disabled:t}))}}]),a}(i.a.Component),D=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).onChange=function(t){isNaN(t)||(0,e.props.changeSeconds)(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.isDisabled;return i.a.createElement(E.a,null,i.a.createElement(b.a,{min:0,max:60,style:{margin:"0 16px"},step:1,value:t,onChange:this.onChange,disabled:a}))}}]),a}(i.a.Component),j=a(215),k=function(e){var t=e.percentTime,a=100===t?99:t;return i.a.createElement(j.a,{type:"circle",percent:a})},T=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={minutes:0,seconds:0,totalTime:0,percentTime:0,isPaused:!0,isDisabled:!1,isFinish:!0},e.displayMinValue=function(e){return("00"+e.toString()).split("").slice(-3).join("")},e.displaySecValue=function(e){return("0"+e.toString()).split("").slice(-2).join("")},e.changeValueMin=function(t){e.setState({minutes:t})},e.changeValueSec=function(t){e.setState({seconds:t})},e.changeValueFromSlider=function(t){var a=Math.floor(t/60),n=t%60;e.setState({minutes:a,seconds:n})},e.handleStart=function(){if(e.state.isPaused){e.setState({isPaused:!1});var t=60*e.state.minutes+e.state.seconds;e.setState({totalTime:t,isDisabled:!0,isPaused:!1}),e.timerID=setTimeout((function(){return e.tick()}),1e3)}else clearTimeout(e.timerID),e.setState({isPaused:!0})},e.tick=function(){if(e.state.isPaused)clearTimeout(e.timerID);else{var t=60*e.state.minutes+e.state.seconds,a=Math.floor(100*t/e.state.totalTime);if(e.setState({percentTime:a}),0===e.state.minutes&&0===e.state.seconds)return clearTimeout(e.timerID),void e.setState({isPaused:!0,isDisabled:!1,isFinish:!0});0===e.state.seconds&&e.setState({seconds:60,minutes:e.state.minutes-1}),e.setState({seconds:e.state.seconds-1}),e.timerID=setTimeout(e.tick,1e3)}},e.handleReset=function(){e.setState({minutes:0,seconds:0,totalTime:0,percentTime:0,isPaused:!0,isDisabled:!1,isFinish:!0})},e}return Object(u.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID),console.log("componentWillUnmount, \u043e\u0447\u0438\u0449\u0430\u0435\u043c\u0441\u044f. this.timerID = ",this.timerID)}},{key:"render",value:function(){var e=this.state.minutes,t=this.state.seconds,a=60*e+t,n=this.displayMinValue(this.state.minutes),s=this.displaySecValue(this.state.seconds),r=this.state,c=r.percentTime,l=r.isDisabled;return i.a.createElement("div",{className:"Countdown-container"},i.a.createElement("h1",null,"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"),i.a.createElement("div",{className:"display-progress-container"},i.a.createElement("div",{className:"diasplay-progress-flex-box"},i.a.createElement(v,{min:n,sec:s})),i.a.createElement("div",{className:"diasplay-progress-flex-box"},i.a.createElement(k,{percentTime:c}))),i.a.createElement("div",{className:"InputField-buttons-container"},i.a.createElement("div",{className:"InputField-container"},i.a.createElement(y,{changeValueFromSlider:this.changeValueFromSlider,changeMinutes:this.changeValueMin,changeSeconds:this.changeValueSec,valueInputMinutes:e,valueInputSeconds:t,valueSlider:a,isDisabled:l})),i.a.createElement("div",{className:"btn-container"},i.a.createElement("div",{className:"btn"},i.a.createElement(d.a,{type:"primary",onClick:this.handleStart},"\u041f\u0443\u0441\u043a/\u043f\u0430\u0443\u0437\u0430")),i.a.createElement("div",{className:"btn"},i.a.createElement(d.a,{type:"primary",onClick:this.handleReset},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c")))))}}]),a}(i.a.Component);a(193),a(194);function N(e){var t=e.currentTime,a=e.currentMs;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f"),i.a.createElement("div",{className:"timerDisplayWrapper"},i.a.createElement("div",{className:"class1"},i.a.createElement("h1",null,t,":")),i.a.createElement("div",{className:"class2"},i.a.createElement("h1",null,a))))}var I=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={currentTime:new Date},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),10)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=new Date;this.setState({currentTime:e})}},{key:"render",value:function(){var e=("00"+this.state.currentTime.getMilliseconds().toString()).split("").slice(-3).join("");return i.a.createElement("div",{className:"timer-container"},i.a.createElement(N,{currentTime:this.state.currentTime.toLocaleTimeString(),currentMs:e}))}}]),a}(i.a.Component);a(195);var O=function(){var e=c.a.TabPane;return i.a.createElement("div",{className:"app-container"},i.a.createElement("header",{className:"app-header"},i.a.createElement("h1",null,"\u0422\u0430\u0439\u043c\u0435\u0440\u044b")),i.a.createElement("div",{className:"app"},i.a.createElement(c.a,{type:"card"},i.a.createElement(e,{tab:"\u0427\u0430\u0441\u044b",key:"1"},i.a.createElement(I,null)),i.a.createElement(e,{tab:"\u0421\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440",key:"2"},i.a.createElement(p,null)),i.a.createElement(e,{tab:"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438",key:"3"},i.a.createElement(T,null)))))};r.a.render(i.a.createElement(O,null),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.cccafde6.chunk.js.map