if (self.CavalryLogger) { CavalryLogger.start_js(["P2IaY"]); }

__d("ComposedEntityMutabilityToName",[],(function(a,b,c,d,e,f){e.exports={0:"MUTABLE",1:"IMMUTABLE",2:"SEGMENTED"}}),null);
__d("ComposedEntityTypeToName",[],(function(a,b,c,d,e,f){e.exports={0:"MENTION",1:"LINK",2:"IMAGE",3:"VIDEO",4:"EMOTICON",5:"TOKEN",6:"HASHTAG",7:"IMPLICIT_LINK",8:"EMBED",9:"EMOJI",10:"MATH",11:"HIGHLIGHT",12:"DELIGHT",13:"TEMPLATE_VARIABLE",14:"ASSISTANT_TYPEAHEAD"}}),null);
__d("ComposedEntityMutability",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MUTABLE:0,IMMUTABLE:1,SEGMENTED:2})}),null);
__d("MessengerConstants",[],(function(a,b,c,d,e,f){"use strict";a={NEW_THREAD_KEY:"new",BROWSER_EXTENSIONS_DIALOG_DIMENSIONS:{HEIGHT:604,WIDTH:405}};e.exports=a}),null);
__d("MessengerEditorStateManager",["CacheStorage","ComposedEntityMutability","ComposedEntityMutabilityToName","ComposedEntityTypeToName","DraftEntityInstance","EditorState","FBLogger","LogHistory","MessengerConstants","SelectionState","decodeBlocks","encodeBlocks","mapObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ComposedEntityMutability").IMMUTABLE,h=b("LogHistory").getInstance("messenger_editor_state_manager"),i=new(b("CacheStorage"))("localstorage"),j=new(b("CacheStorage"))("memory"),k=!1,l;a={get:function(a){__p&&__p();if(!a)return this._getEmptyEditorState();if(a===b("MessengerConstants").NEW_THREAD_KEY)return l||this._getEmptyEditorState();var c=i.get(a,!1);k&&(c?(j.set(a,c),i.remove(a)):c=j.get(a,!1));if(!c)return this._getEmptyEditorState();a=c.encodedBlocks;var d=b("mapObject")(a.entityMap,function(a,c){return new(b("DraftEntityInstance"))({type:b("ComposedEntityTypeToName")[a.type],mutability:b("ComposedEntityMutabilityToName")[g],data:a.data})});a=b("decodeBlocks")(a.blocks,d);d=b("EditorState").createWithContent(a);return b("EditorState").acceptSelection(d,new(b("SelectionState"))(c.selection))},set:function(a,c){if(a===b("MessengerConstants").NEW_THREAD_KEY){l=c;return}var d=b("encodeBlocks")(c.getCurrentContent());c=c.getSelection();var e=c.toJS(),f=k?j:i;f=f.set(a,{encodedBlocks:d,selection:e});f||(this._logWriteError(a),this._switchToMemoryStore(a,d,c))},_logWriteError:function(a){var c=i.getLastSetExceptionMessage(),d=i.getStorageKeyCount();b("FBLogger")("messenger_dot_com").warn("Fail to write to MessengerEditorState %s  %s",c,d);h.debug("set_editor_state_fail",JSON.stringify({threadID:a,error:c,keysCount:d}))},_switchToMemoryStore:function(a,c,d){if(!k){b("FBLogger")("messenger_dot_com").warn("Switching to MemoryStorage");h.debug("Switching to memoryStorage");k=!0;d=d.toJS();j.set(a,{encodedBlocks:c,selection:d})}},_getEmptyEditorState:function(){var a=b("EditorState").createEmpty();return b("EditorState").forceSelection(a,a.getSelection())}};e.exports=a}),null);
__d("MessengerComposerActions",["MessengerDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("keyMirror")({ADD_TOKEN:null,REMOVE_TOKEN:null,FOCUS_COMPOSER:null,FOCUS_TYPEAHEAD:null,EXIT_COMPOSE_STATE:null,MOVE_DRAFT:null});a={Types:g,addToken:function(a){b("MessengerDispatcher").dispatch({type:g.ADD_TOKEN,entry:a})},moveDraftToNextThread:function(a){b("MessengerDispatcher").dispatch({type:g.MOVE_DRAFT,threadID:a})},removeToken:function(a){b("MessengerDispatcher").dispatch({type:g.REMOVE_TOKEN,entry:a})},focusComposer:function(){b("MessengerDispatcher").dispatch({type:g.FOCUS_COMPOSER})},focusTypeahead:function(){b("MessengerDispatcher").dispatch({type:g.FOCUS_TYPEAHEAD})},exitComposeState:function(){b("MessengerDispatcher").dispatch({type:g.EXIT_COMPOSE_STATE})}};e.exports=a}),null);
__d("MessengerHotLikeSVGReact.bs",["cx","fbt","cssVar","React","uniqueID","bs_belt_Option","CurrentUser","ReasonReact.bs","joinClasses","MessengerEnvironment"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("ReasonReact.bs").reducerComponent("MessengerHotLikeSVGReact"),k="transparent",l=h._("Pouce vers le haut");function a(a,c,d){return[j[0],j[1],j[2],j[3],j[4],j[5],j[6],j[7],function(d){var e,f=0;!(c==null)&&c!==""?e=c:f=1;f===1&&(e=b("CurrentUser").isWorkUser()?"#373e4c":b("MessengerEnvironment").messengerui?"#0084ff":"#4080ff");return b("React").createElement("div",{className:b("joinClasses")(b("bs_belt_Option").getWithDefault(a,""),"_1i1j")},b("React").createElement("svg",{"aria-labelledby":d[1][0],role:"img",height:"100%",width:"100%",version:"1.1",viewBox:"0 0 256 256",x:"0px",y:"0px"},b("React").createElement("title",{id:d[1][0]},l),b("React").createElement("g",void 0,b("React").createElement("g",void 0,b("React").createElement("polyline",{fill:k,points:"256,0 258,256 2,258 "}),b("React").createElement("path",{d:"M254,147.1c0-12.7-4.4-16.4-9-20.1c2.6-4.2,5.1-10.2,5.1-18c0-15.8-12.3-25.7-32-25.7h-52c-0.5,0-1-0.5-0.9-1\n                 c1.4-8.6,3-24,3-31.7c0-16.7-4-37.5-19.3-45.7c-4.5-2.4-8.3-3.7-14.1-3.7c-8.8,0-14.6,3.6-16.7,5.9c-1.3,1.4-1.9,3.3-1.8,5.2\n                 l1.3,34.6c0.2,2.8-0.3,5.4-1.6,7.7l-24,47.8c-1.7,3.5-4.2,6.6-7.6,8.5c-3.5,2-6.5,5.9-6.5,9.5v94.8C78,230,94,238,112.3,238h86.1\n                 c13.5,0,22.4-4.5,27.2-13.5c4.4-8.2,3.2-15.8,1.4-21.5c7.4-2.3,14.8-8,16.9-18.3c1.3-6.6-0.7-12.1-2.9-16.2\n                 C247.5,165,254,159.8,254,147.1z",fill:e,stroke:k,strokeLinecap:"round",strokeWidth:"5%"}),b("React").createElement("path",{d:"M56.2,100H13.8C7.3,100,2,105.3,2,111.8v128.5c0,6.5,5.3,11.8,11.8,11.8h42.4c6.5,0,11.8-5.3,11.8-11.8V111.8\n                 C68,105.3,62.7,100,56.2,100z",fill:e})))))},function(){return[b("uniqueID")()]},j[10],function(a,b){return 0},j[12]]}f.component=j;f.cTRANSPARENT=k;f.label=l;f.make=a}),null);
__d("MessengerHotLikeSVGReact.re",["bs_curry","MessengerHotLikeSVGReact.bs","ReasonReact.bs"],(function(a,b,c,d,e,f){a=b("ReasonReact.bs").wrapReasonForJs(b("MessengerHotLikeSVGReact.bs").component,function(a){return b("bs_curry")._3(b("MessengerHotLikeSVGReact.bs").make,a.className,a.color,a.children)});f.component=a;f["default"]=a}),null);
__d("MessengerComposerState",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record({step:null,recipients:b("immutable").List()});a.__TCmeta={type:"MessengerComposerState"};e.exports=a}),null);
__d("MessengerComposerSteps",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({NULL:null,SELECT_RECIPIENTS:null,COMPOSE:null});e.exports=a}),null);
__d("MessengerComposerStore",["EditorState","MessengerActions","MessengerComposerActions","MessengerComposerState","MessengerComposerSteps","MessengerConstants","MessengerDispatcher","MessengerEditorStateManager","MessengerStore","MessengerURIStore","MessengerView","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=new(b("MessengerComposerState"))({step:b("MessengerComposerSteps").NULL,recipients:b("immutable").List()});c=babelHelpers.inherits(a,b("MessengerStore"));g=c&&c.prototype;function a(){g.constructor.call(this),this.$MessengerComposerStore1=h}a.prototype.getState=function(){return this.$MessengerComposerStore1};a.prototype.__onDispatch=function(a){__p&&__p();b("MessengerDispatcher").waitFor([b("MessengerURIStore").getDispatchToken()]);var c=b("MessengerURIStore").getState().detailView,d=this.$MessengerComposerStore1.recipients,e=this.$MessengerComposerStore1.step,f=null,g=null;switch(a.type){case b("MessengerComposerActions").Types.ADD_TOKEN:if(d.some(function(b){return b.getUniqueID()===a.entry.getUniqueID()}))break;f=d.push(a.entry);break;case b("MessengerComposerActions").Types.REMOVE_TOKEN:var h=a.entry.getUniqueID(),i=d.findIndex(function(a){return a.getUniqueID()===h});i!==-1&&(f=d["delete"](i));break;case b("MessengerComposerActions").Types.FOCUS_COMPOSER:e===b("MessengerComposerSteps").SELECT_RECIPIENTS&&(g=b("MessengerComposerSteps").COMPOSE);break;case b("MessengerComposerActions").Types.FOCUS_TYPEAHEAD:e===b("MessengerComposerSteps").COMPOSE&&(g=b("MessengerComposerSteps").SELECT_RECIPIENTS);break;case b("MessengerActions").Types.REPLACE_STATE:i=b("MessengerURIStore").getPrevState().detailView;i!==b("MessengerView").DETAIL.COMPOSE&&c===b("MessengerView").DETAIL.COMPOSE&&(g=b("MessengerComposerSteps").SELECT_RECIPIENTS);break;case b("MessengerComposerActions").Types.MOVE_DRAFT:b("MessengerEditorStateManager").set(a.threadID,b("MessengerEditorStateManager").get(b("MessengerConstants").NEW_THREAD_KEY));break;case b("MessengerComposerActions").Types.EXIT_COMPOSE_STATE:var j=b("EditorState").createEmpty();setTimeout(function(){b("MessengerEditorStateManager").set(b("MessengerConstants").NEW_THREAD_KEY,b("EditorState").forceSelection(j,j.getSelection()))},0);g=b("MessengerComposerSteps").NULL;f=b("immutable").List();break}(f||g)&&(this.$MessengerComposerStore1=new(b("MessengerComposerState"))({step:g||e,recipients:f||d}),this.emitChange())};e.exports=new a()}),null);
__d("PhotoUtils",["Event","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={getImagesFromData:function(a){var b=[];for(var c in a)c.indexOf("image")===0&&b.push(a[c]);return b},getFBIDFromData:function(a){return a&&a.id},getOriginalImageFromData:function(a){return a.original||a.download_image},getDownloadURLFromData:function(a){a=this.getOriginalImageFromData(a);if(!a)return null;a=new(b("URI"))(a.uri);a.addQueryData({dl:1});return a},getPermalinkFromData:function(a){return a.permalink},canViewerMakeCoverPhoto:function(a){return!!a.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function(a){return new(b("URI"))("/profile.php").addQueryData({preview_cover:g.getFBIDFromData(a)})},preload:function(a,c,d){var e=a.getDimensions();for(var f=0;f<c.length;++f){var g=e.getBestFitImageFromPhoto(c[f],e.getMaxStageDimensions()),h=new Image();d&&b("Event").listen(h,"load",d.bind(null,c[f]));a.getLogger().log(g.uri);h.src=g.uri}}};e.exports=g}),null);
__d("SpotlightViewer",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";if(!this.props.open)return null;var a="_n3";this.props.className&&(a+=" "+this.props.className);return b("React").createElement(b("Spotlight.react"),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:"photoLayer"},b("React").createElement("div",{className:a,onClick:this.props.onClick,role:"presentation"},this.props.children))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SpotlightViewerClose",["cx","fbt","React","TooltipLink.react","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=this.props.position=="left"?"_5wx3":"_5wx4",c=b("React").createElement("span",null,h._("Appuyez sur \u00c9chap pour fermer"));return b("React").createElement(b("TooltipLink.react"),{className:b("joinClasses")("_4-o9 _50-m _51an",a,this.props.isFixed?"_2chv":""),onClick:this.props.onClick,onKeyPress:this.props.onKeyPress,tooltip:c,tabIndex:"0"})};function a(){"use strict";i.apply(this,arguments)}a.propTypes={position:c.oneOf(["left","right"]),isFixed:c.bool,onKeyPress:c.func};a.defaultProps={position:"right",isFixed:!1,onKeyPress:b("emptyFunction")};e.exports=a}),null);
__d("SpotlightViewerImage",["cx","Image.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$3=function(){this.setState({loading:!1})}.bind(this),this.state={loading:!0}}a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";a.src!==this.props.src&&this.setState({loading:!0})};a.prototype.render=function(){"use strict";return b("React").createElement("div",{className:"_4-od"},this.$1(),this.$2())};a.prototype.$1=function(){"use strict";return!this.state.loading?null:b("React").createElement(b("XUISpinner.react"),{className:"_enh",size:"large"})};a.prototype.$2=function(){"use strict";return b("React").createElement("div",{className:this.state.loading?"_eni":""},b("React").createElement(b("Image.react"),{onLoad:this.$3,src:this.props.src,style:{width:this.props.dimensions.x||"",height:this.props.dimensions.y||""}}))};e.exports=a}),null);
__d("SpotlightViewport",["csx","cx","Locale","Parent","React","ReactDOM","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:a.object.isRequired,useWidth:a.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function(){return{currentActiveSection:this.sections.NONE,active:!0}},componentDidMount:function(){this._onMouseEnter()},componentWillUnmount:function(){this.props.fadeInNOut&&clearTimeout(this.timer)},_onMouseMove:function(a){var c=b("ReactDOM").findDOMNode(this);a=b("Vector").getEventPosition(a.nativeEvent);var d=b("Vector").getElementPosition(c);c=this.props.useWidth?this.props.stageDimensions.x:b("Vector").getElementDimensions(c).x;this.props.fadeInNOut&&(this._isMouseOverActionBars(a)?clearTimeout(this.timer):this._onMouseEnter());a=a.x-d.x;d=a/c;b("Locale").isRTL()?a=d>1-this.PAGE_TO_PREV_PERCENTAGE:a=d<this.PAGE_TO_PREV_PERCENTAGE;a?this.setState({currentActiveSection:this.sections.BACKWARD}):this.setState({currentActiveSection:this.sections.FORWARD})},_onClick:function(a){var c=this.state.currentActiveSection==this.sections.FORWARD,d=a.target;b("Parent").bySelector(d,"._51an")||this.props.onClick&&this.props.onClick(c,a)},_isMouseOverActionBars:function(a){return a.y<70||a.y>this.props.stageDimensions.y-70},_onMouseEnter:function(){this.setState({active:!0}),this.props.fadeInNOut&&(clearTimeout(this.timer),this.timer=setTimeout(this._onMouseLeave,1e3))},_onMouseLeave:function(){this.setState({active:!1})},makeActive:function(){this._onMouseEnter()},render:function(){var a="_4-of"+(!this.state.active&&!this.props.active?" _50-l":"")+(this.state.currentActiveSection===this.sections.BACKWARD?" _516a":"")+(this.state.currentActiveSection===this.sections.FORWARD?" _516b":"")+(this.props.showLoadingIndicator?" _51jp":"");this.props.className&&(a=b("joinClasses")(a,this.props.className));var c={};this.props.stageDimensions&&(c={height:this.props.stageDimensions.y},this.props.useWidth&&(c.width=this.props.stageDimensions.x));return b("React").createElement("div",{className:a,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:"presentation",style:c},this.props.children,b("React").createElement("div",{className:"_4-og"},b("React").createElement("span",{className:"_4-oh"}),this.props.media,b("React").createElement("div",{className:"_4-oi"})))}});e.exports=c}),null);
__d("Sticker.react",["cx","fbt","Arbiter","MessengerDotComAndInboxM4Check.bs","MessengerHotLikeIconSVGM4React.bs","MessengerHotLikeSVGReact.re","PaddedStickerConfig","React","ReactDOM","StickerConstants","clearInterval","emptyFunction","getElementPosition","getObjectValues","joinClasses","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("MessengerHotLikeSVGReact.re").component;a=b("React").PropTypes;var j=83,k=5e3,l=10,m={CLICK:"click",HOVER:"hover",LOAD_AND_HOVER:"load_and_hover",ANIMATE_FOREVER:"animate_forever"};c=b("React").createClass({displayName:"Sticker",propTypes:{accessibilityLabel:a.string,animationTime:a.number,animationTrigger:a.oneOf(b("getObjectValues")(m)),forceCursorPointer:a.bool,frameCount:a.number.isRequired,frameRate:a.number,framesPerCol:a.number.isRequired,framesPerRow:a.number.isRequired,onAttachmentLoad:a.func,onStickerClick:a.func,packID:a.string,packName:a.string,sourceURI:a.string.isRequired,sourceWidth:a.number.isRequired,sourceHeight:a.number.isRequired,spriteURI:a.string,stickerID:a.string,subscribedThreadID:a.string,testID:a.string},getInitialState:function(){return{index:0,hasAnimated:!1,unsubscribeID:null}},getDefaultProps:function(){return{animationTime:k,accessibilityLabel:"",forceCursorPointer:!1,frameRate:j,onStickerClick:b("emptyFunction"),packID:null,packName:""}},componentDidMount:function(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad();this._stopIntervalID=0;(this.props.animationTrigger===m.LOAD_AND_HOVER||this.props.animationTrigger===m.ANIMATE_FOREVER)&&this.props.frameCount>1&&this.props.spriteURI&&this.startAnimation();if(this.props.subscribedThreadID&&this.props.frameCount>1){var a=b("Arbiter").subscribe(this.props.subscribedThreadID,function(a,b){this.isScrolledIntoView(b.scrollTop,b.viewHeight,b.top)}.bind(this));this.setState({unsubscribeID:a})}},componentWillUnmount:function(){this.state.unsubscribeID&&b("Arbiter").unsubscribe(this.state.unsubscribeID),this.isAnimating()&&b("clearInterval")(this._stopIntervalID)},isAnimating:function(){return!!this._stopIntervalID},getWidth:function(){return Math.floor(this.props.sourceWidth)},getHeight:function(){return Math.floor(this.props.sourceHeight)},preloadSprite:function(){var a=new window.Image();a.onload=function(){this.isMounted()&&!this.state.hasAnimated&&(this.setState({hasAnimated:!0}),this._stopIntervalID=b("setIntervalAcrossTransitions")(this.incrementFrameIndex,this.props.frameRate))}.bind(this);b("PaddedStickerConfig").ChatPaddedAnimatedStickerGK&&this.props.paddedSpriteURI?a.src=this.props.paddedSpriteURI:a.src=this.props.spriteURI},isScrolledIntoView:function(a,c,d){var e=b("getElementPosition")(b("ReactDOM").findDOMNode(this));d=a+e.y-d;c=a+c;e=d+e.height;this.props.frameCount>1&&!this.state.hasAnimated&&e-l<=c&&d+l>=a&&this.startAnimation()},startAnimation:function(){!this.state.hasAnimated&&this.props.spriteURI?this.preloadSprite():this.isAnimating()||(this.setState({hasAnimated:!0}),this._stopIntervalID=b("setIntervalAcrossTransitions")(this.incrementFrameIndex,this.props.frameRate))},stopAnimation:function(){this.setState({index:0}),b("clearInterval")(this._stopIntervalID),this._stopIntervalID=0},toggleAnimation:function(){this.isAnimating()?this.stopAnimation():this.startAnimation()},shouldStopAnimating:function(){var a=this.state.index%this.props.frameCount;if(this.props.animationTrigger===m.ANIMATE_FOREVER)return!1;if(!(a===0&&this.state.index*this.props.frameRate>this.props.animationTime))return!1;return this.props.animationTrigger===m.CLICK?!0:!this.state.isHovered},incrementFrameIndex:function(){this.shouldStopAnimating()?this.stopAnimation():this.setState({index:this.state.index+1})},getStyle:function(){__p&&__p();var a=0,c=this.props.spriteURI;if(b("PaddedStickerConfig").ChatPaddedAnimatedStickerGK&&this.props.paddedSpriteURI){c=this.props.paddedSpriteURI;var d=240/Math.min(this.getHeight(),this.getWidth());a=Math.floor(b("StickerConstants").SPRITE_PADDING/d)}d=this.state.index%this.props.frameCount;var e=d%this.props.framesPerRow*(this.getWidth()+a*2)+a;d=Math.floor(d/this.props.framesPerRow)*(this.getHeight()+a*2)+a;var f=this.props.frameCount>1&&this.props.animationTrigger===m.CLICK||this._isStickerClickable(this.props.packID);f=this.props.forceCursorPointer||f?"pointer":"default";var g=this.getHeight(),h=this.getWidth();if(!this.state.hasAnimated||!this.props.spriteURI)return{backgroundImage:this._isHotLike()?null:"url("+this.props.sourceURI+")",backgroundRepeat:"no-repeat",backgroundSize:h+"px "+g+"px",cursor:f,height:g,width:h};else return{backgroundImage:"url("+c+")",backgroundPosition:-e+"px "+-d+"px",backgroundSize:(h+a*2)*this.props.framesPerRow+"px "+(g+a*2)*this.props.framesPerCol+"px",cursor:f,height:g,width:h,imageRendering:"-webkit-optimize-contrast"}},_isStickerClickable:function(a){return a&&a!=b("StickerConstants").MOBILE_LIKE_STICKER_PACK_ID&&a!=b("StickerConstants").GRAVEYARD_PACK_ID},onStickerClick:function(){if(!this._isStickerClickable(this.props.packID))return;this.props.onStickerClick&&this.props.onStickerClick(this.props.packID,this.props.stickerID)},mouseLeft:function(){this.setState({isHovered:!1})},mouseEntered:function(){this.setState({isHovered:!0}),this.isAnimating()||this.startAnimation()},tabFocusSelected:function(){this.setState({isHovered:!0}),this.isAnimating()||this.startAnimation()},tabFocusUnselected:function(){this.setState({isHovered:!1})},getAriaLabel:function(){return h._("Sticker {sticker name} {pack name}",[h._param("pack name",this.props.packName),h._param("sticker name",this.props.accessibilityLabel)])},render:function(){var a,c;this.props.animationTrigger===m.CLICK&&this.props.frameCount>1&&this.props.spriteURI?a=!0:(this.props.animationTrigger===m.HOVER||this.props.animationTrigger===m.LOAD_AND_HOVER)&&this.props.frameCount>1&&this.props.spriteURI&&(c=!0);var d=a?this.toggleAnimation:null;this.props.packID&&(d=this.onStickerClick);var e=this.props.className,f=null;this._isHotLike()&&(e=b("joinClasses")(e,"_576q"),b("MessengerDotComAndInboxM4Check.bs").yes?f=b("MessengerHotLikeIconSVGM4React.bs").makeWithGradient(this.props.thread):f=b("React").createElement(i,{color:this.props.customColor}));return b("React").createElement("div",{"aria-label":this.getAriaLabel(),className:e,"data-testid":this.props.testID,onBlur:this.tabFocusUnselected,onClick:d,onFocus:this.tabFocusSelected,onMouseEnter:c?this.mouseEntered:null,onMouseLeave:c?this.mouseLeft:null,role:"img",style:this.getStyle(),tabIndex:"0"},f)},_isHotLike:function(){return!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect?this.props.stickerID===b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID||this.props.stickerID===b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID||this.props.stickerID===b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID:!1}});e.exports=c}),null);
__d("StickerUtils",[],(function(a,b,c,d,e,f){__p&&__p();a={getScaledDimensions:function(a,b,c){var d,e,f;b>a?(f=c/b,d=a*f,e=b*f):(f=c/a,d=a*f,e=b*f);return{height:Math.round(d),width:Math.round(e)}},capitalizeWords:function(a){a=a.split(" ");for(var b=0;b<a.length;b++){var c=a[b].charAt(0).toUpperCase();a[b]=c+a[b].substr(1)}return a.join(" ")}};e.exports=a}),null);
__d("DialogFitHeight",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("AbstractDialogFitHeight"));g&&g.prototype;a.prototype.getHeightProperty=function(){"use strict";return"height"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("StickersStateStore",["FluxReduceStore","StickersActions","StickersConfig","StickersDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return b("immutable").Map({isAvatarStickersSelected:!1,recentStickers:[],recentStickersLoaded:!1,showFlyout:!1,storePackID:null,threadID:null,trayLoaded:!1,trayPackID:null})};a.prototype.reduce=function(a,c){__p&&__p();var d=c;c=b("StickersActions").Types;switch(d.type){case c.ADD_RECENT_STICKER:var e=[d.sticker];a.get("recentStickers").forEach(function(a){if(a.id===d.sticker.id)return;e.push(a)});return a.set("recentStickers",e.splice(0,b("StickersConfig").max_mru_stickers));case c.HIDE_FLYOUT:return a.set("showFlyout",!1);case c.LOAD_RECENT_STICKERS:return a.set("recentStickersLoaded",!0).set("recentStickers",d.stickers);case c.SELECT_AVATAR_STICKERS:return a.set("isAvatarStickersSelected",!0);case c.SELECT_STORE_PACK:return a.set("storePackID",d.packID);case c.SELECT_TRAY_PACK:return a.set("trayPackID",d.packID).set("trayLoaded",!0).set("isAvatarStickersSelected",!1);case c.SHOW_FLYOUT:return a.set("showFlyout",!0).set("threadID",d.threadID);case c.TRAY_LOADED:return a.set("trayLoaded",!0);default:return a}};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("StickersDispatcher"))}),null);
__d("StickersStoreController",["cx","Bootloader","DialogFitHeight","DOM","LayerAutoFocus","LayerFadeOnHide","LayerHideOnEscape","PureStoreBasedStateMixin","React","ReactDOM","StickersActions","StickersDispatcher","StickersStateStore","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","isSocialPlugin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=688,i=320,j=null,k=b("React").createClass({displayName:"StoreLayer",mixins:[b("PureStoreBasedStateMixin")(b("StickersStateStore"))],propTypes:{isComposer:a.bool,onToggle:a.func.isRequired,shown:a.bool.isRequired},getDefaultProps:function(){return{isComposer:!1}},statics:{calculateState:function(){return{packID:b("StickersStateStore").getState().get("storePackID")}}},getInitialState:function(){return{renderStore:function(){return b("React").createElement("div",{className:"_5r5e"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))}}},UNSAFE_componentWillMount:function(){b("StickersDispatcher").explicitlyRegisterStores([b("StickersStateStore")])},shouldComponentUpdate:function(a){return!!a.shown},componentDidMount:function(){b("Bootloader").loadModules(["StickersStore.react","react-relay/classic/container/RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(a,c,d,e){this.setState({renderStore:function(){var f=this.state.packID?new e({packID:this.state.packID}):new d();return b("React").createElement(c,{Component:a,route:f,renderFetched:function(c){return b("React").createElement(a,babelHelpers["extends"]({},c,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}))}.bind(this)})}.bind(this)})}.bind(this),"StickersStoreController")},_onToggle:function(a){b("requestAnimationFrame")(function(){return this.props.onToggle(a)}.bind(this))},render:function(){var a=b("isSocialPlugin")()&&document.body.offsetWidth<h?i:h;return b("React").createElement(b("XUIDialog.react"),{behaviors:{DialogFitHeight:b("DialogFitHeight"),LayerAutoFocus:b("LayerAutoFocus"),LayerFadeOnHide:b("LayerFadeOnHide"),LayerHideOnEscape:b("LayerHideOnEscape")},onToggle:this._onToggle,shown:this.props.shown,width:a},b("React").createElement(b("XUIDialogBody.react"),{className:"_5rq- autofocus"},this.state.renderStore()))}}),l=function(a){j||(j=b("DOM").create("div"),b("DOM").appendContent(document.body,j)),b("ReactDOM").render(b("React").createElement(k,{isComposer:a,onToggle:n,shown:!0}),j)},m=function(){if(!j)return;b("ReactDOM").render(b("React").createElement(k,{shown:!1,onToggle:n}),j)},n=function(a){a?l():m()};c={showStore:function(a,c){b("StickersActions").selectStorePack(a),l(!!c)}};e.exports=c}),null);
__d("PhotoProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EQUIRECTANGULAR:"equirectangular",CUBESTRIP:"cubestrip",CYLINDRICAL:"cylindrical",TILED_CUBEMAP:"tiled_cubemap",PERSPECTIVE:"perspective",TRANSVERSE_CYLINDRICAL:"transverse-cylindrical"})}),null);
__d("PhotoRendererProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PERSPECTIVE:"perspective",STEREOGRAPHIC:"stereographic",CYLINDRICAL:"cylindrical",EQUIRECTANGULAR:"equirectangular"})}),null);
__d("PhotosphereMetadata",["ImmutableRecordWithV4Types"],(function(a,b,c,d,e,f){"use strict";a=b("ImmutableRecordWithV4Types").Record;c=a({CroppedAreaImageHeightPixels:0,CroppedAreaImageWidthPixels:0,CroppedAreaLeftPixels:0,CroppedAreaTopPixels:0,FullPanoHeightPixels:0,FullPanoWidthPixels:0,InitialViewHeadingDegrees:0,InitialViewPitchDegrees:0,InitialViewRollDegrees:0,InitialViewVerticalFOVDegrees:0,PoseHeadingDegrees:0,PosePitchDegrees:0,PoseRollDegrees:0,PreProcessCropLeftPixels:0,PreProcessCropRightPixels:0,ProjectionType:"equirectangular",RendererProjectionType:"equirectangular"});e.exports={makePhotosphereMetadata:c}}),null);
__d("SphericalPhotoUtils",["PhotoRendererProjection","PhotosphereMetadata","SphericalPhotoPartialLimits"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PhotoRendererProjection").PERSPECTIVE,h=b("PhotosphereMetadata").makePhotosphereMetadata,i=b("SphericalPhotoPartialLimits").makePartialLimits,j={getMetadataFromGraphQLResult:function(a){return{CroppedAreaImageHeightPixels:a.cropped_area_image_height_pixels!=null?a.cropped_area_image_height_pixels.toString():null,CroppedAreaImageWidthPixels:a.cropped_area_image_width_pixels!=null?a.cropped_area_image_width_pixels.toString():null,CroppedAreaLeftPixels:a.cropped_area_left_pixels!=null?a.cropped_area_left_pixels.toString():null,CroppedAreaTopPixels:a.cropped_area_top_pixels!=null?a.cropped_area_top_pixels.toString():null,FullPanoHeightPixels:a.full_pano_height_pixels!=null?a.full_pano_height_pixels.toString():null,FullPanoWidthPixels:a.full_pano_width_pixels!=null?a.full_pano_width_pixels.toString():null,InitialViewHeadingDegrees:a.initial_view_heading_degrees!=null?a.initial_view_heading_degrees.toString():null,InitialViewPitchDegrees:a.initial_view_pitch_degrees!=null?a.initial_view_pitch_degrees.toString():null,InitialViewRollDegrees:a.initial_view_roll_degrees!=null?a.initial_view_roll_degrees.toString():null,InitialViewVerticalFOVDegrees:a.initial_view_vertical_fov_degrees!=null?a.initial_view_vertical_fov_degrees.toString():null,PoseHeadingDegrees:a.pose_heading_degrees!=null?a.pose_heading_degrees.toString():null,PosePitchDegrees:a.pose_pitch_degrees!=null?a.pose_pitch_degrees.toString():null,PoseRollDegrees:a.pose_roll_degrees!=null?a.pose_roll_degrees.toString():null,PreProcessCropLeftPixels:null,PreProcessCropRightPixels:null,ProjectionType:a.projection_type,RendererProjectionType:g}},calculatePartialLimits:function(a){__p&&__p();var b=a.FullPanoHeightPixels,c=a.FullPanoWidthPixels,d=a.CroppedAreaImageWidthPixels,e=a.CroppedAreaImageHeightPixels,f=a.CroppedAreaLeftPixels;a=a.CroppedAreaTopPixels;b=j.parseNumber(b);c=j.parseNumber(c);d=j.parseNumber(d);e=j.parseNumber(e);f=j.parseNumber(f);a=j.parseNumber(a);var g,h,k,l;if(d!==0&&d!==c){d=360*d/c;d<350&&(g=180*(1-2*f/c),h=d-g)}e!==0&&e!==b&&(a!==0&&(k=90*(1-2*a/b)),a+e!==b&&(l=180*(a+e-b/2)/b));f=null;c=null;d=null;a=null;k&&k<87.5&&(c=k);l&&l<87.5&&(f=l);g&&(d=g);h&&(a=h);return i({partialTopDegrees:c,partialBottomDegrees:f,partialLeftDegrees:d,partialRightDegrees:a})},parseNumber:function(a){return a?Number(a):0},getThumbnailsFromPhotoEncodings:function(a){a=a.find(function(a){return a.projection_type===g});var b=null,c=null;if(a&&a.thumbnails&&a.thumbnails.length>0){a=a.thumbnails;b=a[0]?a[0].uri:null;c=a[1]?a[1].uri:null}return{smallThumbnail:b,largeThumbnail:c}},photosphereMetadataStringToNumber:function(a){var b={};Object.keys(a).forEach(function(c){switch(c){case"ProjectionType":b.ProjectionType=a.ProjectionType;break;case"RendererProjectionType":b.RendererProjectionType=a.RendererProjectionType;break;default:b[c]=parseInt(a[c],10)}});return h(b)}};e.exports=j}),null);