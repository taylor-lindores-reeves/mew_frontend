(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"8ORE":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return e("BY9Y")}])},BY9Y:function(n,t,e){"use strict";e.r(t);var r=e("0iUn"),a=e("sLSF"),i=e("MI3g"),s=e("a7VT"),o=e("Tit0"),l=e("q1tI"),c=e.n(l),u=e("rt45"),p=e("UXZV"),d=e.n(p);function f(){return(f=d.a||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var h=e("vbcS"),m=e("lTCR"),x=e.n(m),v=c.a.createElement;function E(){var n=Object(u.a)(["\n  query {\n    user {\n      id\n      email\n      permissions\n    }\n  }\n"]);return E=function(){return n},n}var g=x()(E()),b=function(n){return v(h.b,f({},n,{query:g}),(function(t){return n.children(t)}))},C=e("vOnD"),N=(e("YFqc"),e("nOHt")),y=e.n(N),O=c.a.createElement;function k(){var n=Object(u.a)(["\n  mutation LOG_OUT_MUTATION {\n    logout {\n      message\n    }\n  }\n"]);return k=function(){return n},n}var w=x()(k()),_=function(n){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){return O(h.a,{mutation:w,refetchQueries:[{query:g}]},(function(n,t){var e=t.error,r=t.loading;t.data;return e?O("p",null,"error"):r?O("p",null,"loading"):O("a",{onClick:function(t){t.preventDefault(),n(),y.a.push({pathname:"/"})}},"Log Out Button")}))}}]),t}(l.Component);function j(){return(j=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function S(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}function T(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}e("17x9");function U(n,t){return n.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var P=e("i8i4"),L=e.n(P),D=!1,V=c.a.createContext(null),X="unmounted",I="exited",M="entering",A="entered",R=function(n){function t(t,e){var r;r=n.call(this,t,e)||this;var a,i=e&&!e.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a=I,r.appearStatus=M):a=A:a=t.unmountOnExit||t.mountOnEnter?X:I,r.state={status:a},r.nextCallback=null,r}T(t,n),t.getDerivedStateFromProps=function(n,t){return n.in&&t.status===X?{status:I}:null};var e=t.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(n){var t=null;if(n!==this.props){var e=this.state.status;this.props.in?e!==M&&e!==A&&(t=M):e!==M&&e!==A||(t="exiting")}this.updateStatus(!1,t)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var n,t,e,r=this.props.timeout;return n=t=e=r,null!=r&&"number"!==typeof r&&(n=r.exit,t=r.enter,e=void 0!==r.appear?r.appear:t),{exit:n,enter:t,appear:e}},e.updateStatus=function(n,t){if(void 0===n&&(n=!1),null!==t){this.cancelNextCallback();var e=L.a.findDOMNode(this);t===M?this.performEnter(e,n):this.performExit(e)}else this.props.unmountOnExit&&this.state.status===I&&this.setState({status:X})},e.performEnter=function(n,t){var e=this,r=this.props.enter,a=this.context?this.context.isMounting:t,i=this.getTimeouts(),s=a?i.appear:i.enter;!t&&!r||D?this.safeSetState({status:A},(function(){e.props.onEntered(n)})):(this.props.onEnter(n,a),this.safeSetState({status:M},(function(){e.props.onEntering(n,a),e.onTransitionEnd(n,s,(function(){e.safeSetState({status:A},(function(){e.props.onEntered(n,a)}))}))})))},e.performExit=function(n){var t=this,e=this.props.exit,r=this.getTimeouts();e&&!D?(this.props.onExit(n),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(n),t.onTransitionEnd(n,r.exit,(function(){t.safeSetState({status:I},(function(){t.props.onExited(n)}))}))}))):this.safeSetState({status:I},(function(){t.props.onExited(n)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},e.setNextCallback=function(n){var t=this,e=!0;return this.nextCallback=function(r){e&&(e=!1,t.nextCallback=null,n(r))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(n,t,e){this.setNextCallback(e);var r=null==t&&!this.props.addEndListener;n&&!r?(this.props.addEndListener&&this.props.addEndListener(n,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},e.render=function(){var n=this.state.status;if(n===X)return null;var t=this.props,e=t.children,r=S(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"===typeof e)return c.a.createElement(V.Provider,{value:null},e(n,r));var a=c.a.Children.only(e);return c.a.createElement(V.Provider,{value:null},c.a.cloneElement(a,r))},t}(c.a.Component);function Y(){}R.contextType=V,R.propTypes={},R.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Y,onEntering:Y,onEntered:Y,onExit:Y,onExiting:Y,onExited:Y},R.UNMOUNTED=0,R.EXITED=1,R.ENTERING=2,R.ENTERED=3,R.EXITING=4;var q=R,F=function(n,t){return n&&t&&t.split(" ").forEach((function(t){return r=t,void((e=n).classList?e.classList.remove(r):"string"===typeof e.className?e.className=U(e.className,r):e.setAttribute("class",U(e.className&&e.className.baseVal||"",r)));var e,r}))},H=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(n,e){t.removeClasses(n,"exit"),t.addClass(n,e?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(n,e)},t.onEntering=function(n,e){var r=e?"appear":"enter";t.addClass(n,r,"active"),t.props.onEntering&&t.props.onEntering(n,e)},t.onEntered=function(n,e){var r=e?"appear":"enter";t.removeClasses(n,r),t.addClass(n,r,"done"),t.props.onEntered&&t.props.onEntered(n,e)},t.onExit=function(n){t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(n)},t.onExiting=function(n){t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(n)},t.onExited=function(n){t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(n)},t.getClassNames=function(n){var e=t.props.classNames,r="string"===typeof e,a=r?""+(r&&e?e+"-":"")+n:e[n];return{baseClassName:a,activeClassName:r?a+"-active":e[n+"Active"],doneClassName:r?a+"-done":e[n+"Done"]}},t}T(t,n);var e=t.prototype;return e.addClass=function(n,t,e){var r=this.getClassNames(t)[e+"ClassName"];"appear"===t&&"done"===e&&(r+=" "+this.getClassNames("enter").doneClassName),"active"===e&&n&&n.scrollTop,this.appliedClasses[t][e]=r,function(n,t){n&&t&&t.split(" ").forEach((function(t){return r=t,void((e=n).classList?e.classList.add(r):function(n,t){return n.classList?!!t&&n.classList.contains(t):-1!==(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+t+" ")}(e,r)||("string"===typeof e.className?e.className=e.className+" "+r:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+r)));var e,r}))}(n,r)},e.removeClasses=function(n,t){var e=this.appliedClasses[t],r=e.base,a=e.active,i=e.done;this.appliedClasses[t]={},r&&F(n,r),a&&F(n,a),i&&F(n,i)},e.render=function(){var n=this.props,t=(n.classNames,S(n,["classNames"]));return c.a.createElement(q,j({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(c.a.Component);H.defaultProps={classNames:""},H.propTypes={};var Z=H,z=c.a.createElement;function B(){var n=Object(u.a)(["\n  position: fixed;\n  z-index: 5;\n  background-color: rgba(255, 255, 255, 0.3);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .inner {\n    position: absolute;\n    width: 250px;\n    border: 1px solid black;\n    background-color: rgba(255, 255, 255, 1);\n  }\n\n  .description {\n    text-align: center;\n    font-size: 1.3rem;\n    font-weight: 300;\n    line-height: 1.65;\n  }\n\n  .close {\n    position: absolute;\n    top: 15px;\n    right: 15px;\n    font-size: 2rem;\n    transform: scaleX(1.2);\n    transform-origin: 100% 0%;\n    color: ",";\n    cursor: pointer;\n  }\n\n  &:hover {\n    color: ",";\n  }\n\n  .alert-enter {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  .alert-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: opacity 300ms, transform 300ms;\n  }\n  .alert-exit {\n    opacity: 1;\n  }\n  .alert-exit-active {\n    opacity: 0;\n    transform: scale(0.9);\n    transition: opacity 300ms, transform 300ms;\n  }\n"]);return B=function(){return n},n}var G=C.default.div(B(),(function(n){return n.theme.dark}),(function(n){return n.theme.red})),$=function(n){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){var n=this;return z(G,null,z(Z,{in:this.props.isVisible,timeout:300,classNames:"alert",unmountOnExit:!0,onEnter:function(){return n.props.togglePopUp},onExited:function(){return n.props.togglePopUp}},z("div",{className:"inner"},z("h2",{className:"section-title section-title--blue section-title--less-margin"},"Are you sure you want to log out?"),z("div",{className:"wrapper wrapper--narrow"},z(_,null),z("div",{onClick:this.props.togglePopUp,className:"close"},z("button",null,"Cancel"))))))}}]),t}(l.Component),J=c.a.createElement;function W(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-rows: 2fr 11fr 1fr;\n  align-items: center;\n  justify-items: center;\n  height: 100vh;\n\n  .user-header {\n    width: 80%;\n\n    &__inner {\n      position: relative;\n      height: 60px;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      box-shadow: 0 2px 1px ",";\n      background-color: ",";\n      border-radius: 5px;\n      overflow: hidden;\n    }\n\n    &__nav {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    &__col {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    &__item {\n      margin: 10px 20px;\n\n      a {\n        color: ",";\n        text-decoration: none;\n        cursor: pointer;\n      }\n    }\n  }\n\n  .user-content {\n    background-color: white;\n    width: 80%;\n    height: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    box-shadow: 0 2px 1px ",";\n    background-color: ",";\n    border-radius: 5px;\n\n    &__inner {\n      padding: 10px 20px;\n    }\n  }\n"]);return W=function(){return n},n}var Q=C.default.div(W(),(function(n){return n.theme.grey}),(function(n){return n.theme.white}),(function(n){return n.theme.dark}),(function(n){return n.theme.grey}),(function(n){return n.theme.white})),K=function(n){function t(n){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this,n))).state={popUp:!1},e}return Object(o.a)(t,n),Object(a.a)(t,[{key:"togglePopUp",value:function(){this.setState({popUp:!this.state.popUp})}},{key:"render",value:function(){var n=this;return J(b,null,(function(t){var e=t.data;return e?J(Q,null,J("div",{className:"user-header"},J("div",{className:"user-header__inner"},J("div",{className:"user-header__nav"},J("ul",{className:"user-header__col"},J("li",{className:"user-header__item"},J("h3",null,e.user.email))),J("ul",{className:"user-header__col"},J("li",{className:"user-header__item"},J("button",{onClick:n.togglePopUp.bind(n)},"Click To Launch Popup"),n.state.popUp&&J($,{isVisible:n.state.popUp,togglePopUp:n.togglePopUp.bind(n)})))))),J("div",{className:"user-content"},J("div",{className:"user-content__inner"},J("p",null,"Thanks for signing up!")))):J("p",null,"Hey no user")}))}}]),t}(l.Component),nn=c.a.createElement,tn=function(n){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){return nn(K,null)}}]),t}(l.Component);t.default=tn},UXZV:function(n,t,e){n.exports=e("UbbE")},UbbE:function(n,t,e){e("o8NH"),n.exports=e("WEpk").Object.assign},o8NH:function(n,t,e){var r=e("Y7ZC");r(r.S+r.F,"Object",{assign:e("kwZ1")})}},[["8ORE",1,2,0,13,14,15]]]);