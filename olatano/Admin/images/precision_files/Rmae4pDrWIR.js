if (self.CavalryLogger) { CavalryLogger.start_js(["VMPf4"]); }

__d("SUIPopoverArrowBehavior",["csx","AbstractContextualDialogArrowBehavior","DOM"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("AbstractContextualDialogArrowBehavior"));h&&h.prototype;a.prototype.__getArrow=function(){"use strict";var a=this.__layer.getContentRoot();return b("DOM").find(a,"._4ii9")};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SUIPopoverKeepInViewportBehavior",["csx","AbstractContextualDialogKeepInViewportBehavior","DOM","Style"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("AbstractContextualDialogKeepInViewportBehavior"));h&&h.prototype;a.prototype.__adjustForScroll=function(a,c){"use strict";var d=a.getContentRoot();a=a.getContent();b("Style").set(a,"top",-c+"px");this._arrow||(this._arrow=b("DOM").find(d,"._4ii9"));b("Style").set(this._arrow,"top",c+"px")};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SUIPopoverLayer.react",["cx","AlignmentEnum","ContextualLayerAutoFlip","PositionEnum","React","ReactAbstractContextualDialog","ReactLayer","SUIComponent","SUIPopoverArrowBehavior","SUIPopoverKeepInViewportBehavior","SUITheme","joinClasses","suiMargin"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;var i=12;d=20;var j={ContextualLayerAutoFlip:b("ContextualLayerAutoFlip"),SUIPopoverKeepInViewportBehavior:b("SUIPopoverKeepInViewportBehavior")},k=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({arrowBehavior:b("SUIPopoverArrowBehavior"),displayName:"SUIPopoverLayerInternal",theme:{arrowDimensions:{offset:i,length:d},wrapperClassName:"_34q2"}}));f={alignment:b("AlignmentEnum").left,position:b("PositionEnum").right};h=babelHelpers.inherits(a,b("SUIComponent"));h&&h.prototype;a.prototype.render=function(){__p&&__p();var a=b("SUITheme").get(this).SUIPopover,c=0,d=0;switch(this.props.position){case"below":c=i;break;case"above":c=-i;break;case"right":d=i;break;case"left":d=-i;break;default:this.props.position}this.props.offsetX!==void 0&&this.props.offsetX!==null&&(d=this.props.offsetX);this.props.offsetY!==void 0&&this.props.offsetY!==null&&(c=this.props.offsetY);var e=this.props.margin||"_3-8k",f=this.props.behaviors!=null?babelHelpers["extends"]({},j,this.props.behaviors):j;return b("React").createElement(k,{alignment:this.props.alignment,autoFocus:!1,behaviors:f,contextRef:this.props.contextRef,focusContextOnHide:!1,keepInViewport:!1,offsetX:d,offsetY:c,position:this.props.position,shown:!0},b("React").createElement("div",{className:"_4ii7"+(this.props.contentWidthUseSparingly!==null&&this.props.contentWidthUseSparingly!==void 0?" _4vie":""),onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,style:babelHelpers["extends"]({backgroundColor:a.backgroundColor,border:a.border,boxShadow:a.boxShadow},a.typeStyle)},this.props.title?b("React").createElement("div",{className:e,style:a.title.typeStyle},this.props.title):null,b("React").createElement("div",{className:b("joinClasses")(e,"_4vif"),style:{width:this.props.contentWidthUseSparingly}},this.props.content),this.props.helpLink?b("React").createElement("div",{className:"_4ii8"},this.props.helpLink):null,this.props.footer,b("React").createElement("div",{className:"_4ii9"},b("React").createElement("div",{className:"_4iic",style:{backgroundColor:a.backgroundColor,border:a.border,boxShadow:a.boxShadow}}))))};function a(){h.apply(this,arguments)}a.propTypes={alignment:b("AlignmentEnum").propType,content:c.node.isRequired,contentWidthUseSparingly:c.number,contextRef:c.func.isRequired,footer:c.node,helpLink:c.node,margin:c.string,offsetX:c.number,offsetY:c.number,onMouseEnter:c.func,onMouseLeave:c.func,position:b("PositionEnum").propType,theme:c.instanceOf(b("SUITheme")),title:c.node};a.defaultProps=f;e.exports=a}),null);
__d("SUIPopover.react",["AlignmentEnum","Event","PositionEnum","React","ReactDOM","SUIComponent","SUIPopoverLayer.react","SUITheme","clearTimeout","setTimeout","uniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;d={alignment:b("AlignmentEnum").left,delay:0,linger:300,position:b("PositionEnum").right};f=babelHelpers.inherits(a,b("SUIComponent"));g=f&&f.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$SUIPopover4=b("uniqueID")(),this.state={isShown:!1},this.$SUIPopover8=function(){b("clearTimeout")(this.$SUIPopover5),b("clearTimeout")(this.$SUIPopover6),this.$SUIPopover5=b("setTimeout")(this.$SUIPopover9,this.props.linger)}.bind(this),this.$SUIPopover9=function(){this.setState({isShown:!1},this.$SUIPopover10)}.bind(this),this.$SUIPopover7=function(){b("clearTimeout")(this.$SUIPopover5),b("clearTimeout")(this.$SUIPopover6),this.$SUIPopover6=b("setTimeout")(this.$SUIPopover11,this.props.delay)}.bind(this),this.$SUIPopover11=function(){this.setState({isShown:!0},this.$SUIPopover10)}.bind(this),this.$SUIPopover10=function(){this.props.onToggle&&this.props.onToggle(this.state.isShown)}.bind(this),c}a.prototype.componentDidMount=function(){var a=this.props.hoverContextRef&&b("ReactDOM").findDOMNode(this.props.hoverContextRef());if(!a)return;this.$SUIPopover1=b("Event").listen(a,"mouseenter",this.$SUIPopover7);this.$SUIPopover2=b("Event").listen(a,"mouseleave",this.$SUIPopover8)};a.prototype.componentWillUnmount=function(){b("clearTimeout")(this.$SUIPopover5),b("clearTimeout")(this.$SUIPopover6),this.$SUIPopover1&&this.$SUIPopover1.remove(),this.$SUIPopover2&&this.$SUIPopover2.remove()};a.prototype.render=function(){if(!this.state.isShown)return null;var a=this.props,c=a.contextRef,d=a.hoverContextRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["contextRef","hoverContextRef"]);return b("React").createElement(b("SUIPopoverLayer.react"),babelHelpers["extends"]({contextRef:c||d,onMouseEnter:this.$SUIPopover7,onMouseLeave:this.$SUIPopover8},a))};a.propTypes={alignment:b("AlignmentEnum").propType,behaviors:c.object,children:c.node,content:c.node.isRequired,contentWidthUseSparingly:c.number,delay:c.number,footer:c.node,helpLink:c.node,linger:c.number,margin:c.string,offsetX:c.number,offsetY:c.number,position:b("PositionEnum").propType,theme:c.instanceOf(b("SUITheme")),title:c.node};a.defaultProps=d;e.exports=a}),null);
__d("StrSet",[],(function(a,b,c,d,e,f){__p&&__p();function g(a){"use strict";this.$2={},this.$1=0,a&&this.addAll(a)}g.prototype.add=function(a){"use strict";Object.prototype.hasOwnProperty.call(this.$2,a)||(this.$2[a]=!0,this.$1++);return this};g.prototype.addAll=function(a){"use strict";a.forEach(this.add,this);return this};g.prototype.remove=function(a){"use strict";Object.prototype.hasOwnProperty.call(this.$2,a)&&(delete this.$2[a],this.$1--);return this};g.prototype.removeAll=function(a){"use strict";a.forEach(this.remove,this);return this};g.prototype.toArray=function(){"use strict";return Object.keys(this.$2)};g.prototype.toMap=function(a){"use strict";var b={};Object.keys(this.$2).forEach(function(c){b[c]=typeof a==="function"?a(c):a||!0});return b};g.prototype.contains=function(a){"use strict";return Object.prototype.hasOwnProperty.call(this.$2,a)};g.prototype.count=function(){"use strict";return this.$1};g.prototype.clear=function(){"use strict";this.$2={};this.$1=0;return this};g.prototype.clone=function(){"use strict";return new g(this)};g.prototype.forEach=function(a,b){"use strict";Object.keys(this.$2).forEach(a,b)};g.prototype.map=function(a,b){"use strict";return Object.keys(this.$2).map(a,b)};g.prototype.some=function(a,b){"use strict";return Object.keys(this.$2).some(a,b)};g.prototype.every=function(a,b){"use strict";return Object.keys(this.$2).every(a,b)};g.prototype.filter=function(a,b){"use strict";return new g(Object.keys(this.$2).filter(a,b))};g.prototype.union=function(a){"use strict";return this.clone().addAll(a)};g.prototype.intersect=function(a){"use strict";return this.filter(function(b){return a.contains(b)})};g.prototype.difference=function(a){"use strict";return a.filter(function(a){return!this.contains(a)}.bind(this))};g.prototype.equals=function(a){"use strict";__p&&__p();var b=function(a,b){return a===b?0:a<b?-1:1},c=this.toArray();a=a.toArray();if(c.length!==a.length)return!1;var d=c.length;c=c.sort(b);a=a.sort(b);while(d--)if(c[d]!==a[d])return!1;return!0};e.exports=g}),null);
__d("whitelistObjectKeys",[],(function(a,b,c,d,e,f){function a(a,b){var c={};b=Array.isArray(b)?b:Object.keys(b);for(var d=0;d<b.length;d++)typeof a[b[d]]!=="undefined"&&(c[b[d]]=a[b[d]]);return c}e.exports=a}),null);
__d("Queue",[],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a){"use strict";this._timeout=null,this._interval=(a==null?void 0:a.interval)||0,this._processor=a==null?void 0:a.processor,this._queue=[],this._stopped=!0}h.prototype._dispatch=function(a){__p&&__p();a===void 0;if(this._stopped||this._queue.length===0)return;a=this._processor;if(a==null){this._stopped=!0;throw new Error("No processor available")}var b=this._interval;if(b!=null)a.call(this,this._queue.shift()),this._timeout=setTimeout(function(){return this._dispatch()}.bind(this),b);else while(this._queue.length)a.call(this,this._queue.shift())};h.prototype.enqueue=function(a){"use strict";this._processor&&!this._stopped?this._processor(a):this._queue.push(a);return this};h.prototype.start=function(a){"use strict";a&&(this._processor=a);this._stopped=!1;this._dispatch();return this};h.prototype.isStarted=function(){"use strict";return!this._stopped};h.prototype.dispatch=function(){"use strict";this._dispatch(!0)};h.prototype.stop=function(a){"use strict";this._stopped=!0;a&&this._timeout!=null&&clearTimeout(this._timeout);return this};h.prototype.merge=function(a,b){"use strict";if(b){(b=this._queue).unshift.apply(b,a._queue)}else{(b=this._queue).push.apply(b,a._queue)}a._queue=[];this._dispatch();return this};h.prototype.getLength=function(){"use strict";return this._queue.length};h.get=function(a,b){"use strict";var c;a in g?c=g[a]:c=g[a]=new h(b);return c};h.exists=function(a){"use strict";return a in g};h.remove=function(a){"use strict";return delete g[a]};e.exports=h}),null);