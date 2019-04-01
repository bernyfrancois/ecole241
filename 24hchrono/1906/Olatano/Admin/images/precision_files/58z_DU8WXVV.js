if (self.CavalryLogger) { CavalryLogger.start_js(["XMTPb"]); }

__d("ChatTypeaheadConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({USER_TYPE:"user",THREAD_TYPE:"thread",FRIEND_TYPE:"friend",NON_FRIEND_TYPE:"non_friend",FB4C_TYPE:"fb4c",PAGE_TYPE:"page",MEETING_ROOM_PAGE_TYPE:"meeting_room_page",COMMERCE_PAGE_TYPE:"commerce_page",HEADER_TYPE:"header",INTERNAL_BOT_PAGE_TYPE:"internal_bot_page",GAME_TYPE:"game"});e.exports=a}),null);
__d("MessengerParticipantPickerWrapper.react",["cx","Link.react","React","emptyFunction","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.$1=function(a){var c=this.props.ParticipantRow,d=this.props.selectedEntries.has(a.getUniqueID()),e=a.getTitle();return b("React").createElement(c,{key:a.getUniqueID(),entry:a,selected:d,onClick:this.props.onClickEntry,onVisible:this.props.onVisibleEntry||b("emptyFunction"),onHidden:this.props.onHiddenEntry||b("emptyFunction"),children:this.$2(d,e)})};a.prototype.$2=function(a,c){return b("React").createElement(b("Link.react"),{"aria-checked":a,"aria-label":c,className:"_2elu"+(a?" _2elv":""),href:"#",label:"",role:"checkbox",tabIndex:"0"})};a.prototype.render=function(){var a=[];this.props.entries.forEach(function(b){return a.push(this.$1(b))}.bind(this));var c=this.props.ParticipantList;return b("React").createElement(c,{loading:this.props.loading,formattedEntries:a,role:this.props.role,config:this.props.config})};function a(){h.apply(this,arguments)}a.defaultProps={role:"listbox"};e.exports=a}),null);
__d("MessengerSearchFunnelLoggerConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={NAME:"WWW_MESSENGER_SEARCH_SESSION_FUNNEL",FETCHED_STATE_IMPRESSION_LIST:"fetched_state_impression_list",LOADING_STATE_IMPRESSION_LIST:"loading_state_impression_list",SEND_SERVER_REQUEST:"send_server_request",WWW_SIDEBAR_TAG:"www",MESSENGER_DOT_COM:"messenger_dot_com",UNIVERSAL_SEARCH:"universal_search",USER_CONTACT:"user_contact",USER_NON_CONTACT:"user_non_contact",GROUP:"group",PAGE:"page",GAME:"game",TINCAN:"tincan",SMS:"sms",SMS_GROUP:"sms_group",COWORKER:"coworker",OTHER:"other"}}),null);
__d("MessengerBootloadedSecondarySearchLogger",["Bootloader","MessengerSecondarySearchFunnelConstants","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h="",i={ORDERED_GCF_FRIENDLIST:[],SHORT_PROFILES:[],SUGGESTED_RECIPIENTS:[]},j=!1;c=b("MessengerSecondarySearchFunnelConstants").EVENTS;var k=c.END,l=c.IMPRESSIONS,m=c.START,n=c.QUERY_CHANGED,o=c.RESULT_SELECTED,p=c.SOURCE_ENDED,q=c.SOURCE_STARTED;d=b("MessengerSecondarySearchFunnelConstants").END_ACTIONS;var r=d.ABANDON,s=d.SINGLE_RESULT_SELECTED;f=b("MessengerSecondarySearchFunnelConstants").SOURCES;var t=f.SERVER,u=f.SHORT_PROFILES,v=f.SUGGESTED_RECIPIENTS,w=f.LOCAL_AND_SERVER,x=f.ORDERED_GCF_FRIENDLIST;function y(a){if(i.SUGGESTED_RECIPIENTS.includes(a))return v;else if(i.ORDERED_GCF_FRIENDLIST.includes(a))return x;else if(i.SHORT_PROFILES.includes(a))return u;else return t}function a(a){__p&&__p();if(!b("gkx")("678592"))return;b("Bootloader").loadModules(["MessengerSecondarySearchFunnelLogger"],function(c){__p&&__p();switch(a.name){case m:j=!1;i={ORDERED_GCF_FRIENDLIST:[],SHORT_PROFILES:[],SUGGESTED_RECIPIENTS:[]};c.startFunnel(b("MessengerSecondarySearchFunnelConstants").CLIENTS.WWW,a.surface,a.surface,null,a.loggingID);break;case k:var d=a.end_reason;a.surface===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&(d=j?s:r);c.endFunnel(b("MessengerSecondarySearchFunnelConstants").END_REASONS.ACTION,d,a.loggingID,null,a.isNewThread);break;case l:d=a.entries.map(function(a){a.data_source=[y(a.result_fbid)];return a});g=a.entries.map(function(a){return a.result_fbid});c.impressions(a.query,d,w,a.loggingID);break;case n:h=a.query;c.queryChanged(a.query,a.loggingID);break;case o:j=!0;d=y(a.id);var e=g.indexOf(a.id);c.resultSelected(a.id,e,a.type,a.query,d,a.surface,a.loggingID,a.selectionType);break;case p:e=!a.query||a.query===h;switch(a.source){case v:i.SUGGESTED_RECIPIENTS=a.ids?a.ids:[];break;case u:i.SHORT_PROFILES=a.ids?a.ids:[];e=!0;break;case x:i.ORDERED_GCF_FRIENDLIST=a.ids?a.ids:[];e=!0;break;default:break}c.sourceEnded(a.query,a.numResults,a.source,a.status,e,a.loggingID);break;case q:c.sourceStarted(a.query,a.source,a.loggingID);break}},"MessengerBootloadedSecondarySearchLogger")}e.exports={logSearchEvent:a}}),null);
__d("ChatSearchSource",["AbstractSearchSource","AsyncRequest","Bootloader","CurrentUser","MercuryParticipantTypes","MessengerBootloadedSecondarySearchLogger","MessengerSearchFunnelLoggerConstants","MessengerSecondarySearchFunnelConstants","promiseDone","requireWeak","SearchableEntry","SearchSourceCallbackManager","ShortProfiles","TokenizeUtil","debounce","emptyFunction","isValidUniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=null;b("requireWeak")("OrderedFriendsList",function(a){h=a});c=babelHelpers.inherits(a,b("AbstractSearchSource"));g=c&&c.prototype;function a(a){g.constructor.call(this),this.$ChatSearchSource1=new(b("SearchSourceCallbackManager"))({parseFn:b("TokenizeUtil").parse,matchFn:b("TokenizeUtil").isQueryMatch,indexFn:a.indexFn,searchType:a.searchType||""}),this.$ChatSearchSource2=a.queryRequests||[],this.$ChatSearchSource3=a.searchType||"",this.$ChatSearchSource4=!1,this.$ChatSearchSource5=b("debounce")(this.$ChatSearchSource5,100,this),this.$ChatSearchSource6=a.excludeMemorializedUsers||!1,this.$ChatSearchSource7=""}a.prototype.bootstrapImpl=function(a){b("promiseDone")(b("ShortProfiles").fetchAll(),function(){this.$ChatSearchSource4=!0,this.$ChatSearchSource8(),a()}.bind(this))};a.prototype.searchImpl=function(a,b,c){__p&&__p();var d=null,e={},f=c&&c.onQueryFinished,g=c&&c.onQueryStarted;g&&g(a);g=this.$ChatSearchSource1.search(a,function(c){!d?(d=c,d.forEach(function(a){return e[a.getUniqueID()]=!0})):c.forEach(function(a){var b=a.getUniqueID();e[b]||(d.push(a),e[b]=!0)}),b(d,a),a.length===1&&this.$ChatSearchSource4&&(f&&f(a))}.bind(this),c);if(!g||!this.$ChatSearchSource2||!this.$ChatSearchSource2.length||a.length===0){f&&f(a);return}if(a.length===1){this.$ChatSearchSource4&&(f&&f(a));return}var h={value:a,existing_ids:d&&d.map(function(a){return a.getUniqueID()}).join(","),limit:c&&c.threadLimit,exclude_memorialized_users:this.$ChatSearchSource6,logging_id:c&&c.loggingID},i=this.$ChatSearchSource2.length;this.$ChatSearchSource2.forEach(function(b){var c=Date.now();this.$ChatSearchSource5(h,b,function(b){b=this.$ChatSearchSource9(this.$ChatSearchSource10(b)).filter(function(a){return!!a});this.$ChatSearchSource11(a,b.length,c);this.$ChatSearchSource12(b,a);i--;i===0&&(this.$ChatSearchSource1.setQueryStringAsExhausted(a),f&&f(a))}.bind(this))}.bind(this),this)};a.prototype.getAllEntriesMap=function(){return this.$ChatSearchSource1.getAllEntries()};a.prototype.$ChatSearchSource11=function(a,c,d){if(this.$ChatSearchSource3===b("MessengerSearchFunnelLoggerConstants").WWW_SIDEBAR_TAG){var e=Date.now();b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger","MessengerUniversalSearchFunnelLoggerConstants"],function(b,f){b.logSourceEnded(a,f.SOURCES.SERVER,c,f.QUERY_PROGRESS.FINISHED),this.$ChatSearchSource13(b.getCurrentFunnelID(),d,e,a,c,"universal")}.bind(this),"ChatSearchSource")}else this.$ChatSearchSource3===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.SOURCE_ENDED,source:b("MessengerSecondarySearchFunnelConstants").SOURCES.SERVER,query:a,numResults:c,status:b("MessengerSecondarySearchFunnelConstants").SOURCE_STATUSES.FINISHED,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST})};a.prototype.$ChatSearchSource13=function(a,c,d,e,f,g){b("Bootloader").loadModules(["MessengerSearchDataSourceLoadedEventTypedLogger","MessengerUniversalSearchFunnelLoggerConstants"],function(b,h){new b().setSearchFunnelID(a).setStartTimeMs(c).setEndTimeMs(d).setQueryString(e).setDataSource(h.SOURCES.SERVER).setResultsCount(f).setLoadStatus(h.QUERY_PROGRESS.FINISHED).setIsResultUsed(this.$ChatSearchSource7===e).setSearchSurface(g).log()}.bind(this),"ChatSearchSource")};a.prototype.$ChatSearchSource8=function(){var a=b("ShortProfiles").getCachedProfileIDs();a=a.filter(function(a){var c=b("ShortProfiles").getNow(a);return a==b("CurrentUser").getID()||c.type===b("MercuryParticipantTypes").FRIEND||c.type===b("MercuryParticipantTypes").FB4C});var c=a.map(this.$ChatSearchSource14);c.length&&(this.$ChatSearchSource3===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.SOURCE_ENDED,source:b("MessengerSecondarySearchFunnelConstants").SOURCES.SHORT_PROFILES,query:"",ids:a,numResults:c.length,status:b("MessengerSecondarySearchFunnelConstants").SOURCE_STATUSES.FINISHED,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST}),this.$ChatSearchSource1.addLocalEntries(c))};a.prototype.$ChatSearchSource9=function(a){return a.map(this.$ChatSearchSource15,this)};a.prototype.$ChatSearchSource15=function(a,c){if(a.mercury_thread)return!h?null:h.normalizeThreadEntry(a,c);var d=a.text,e=a.uid;if(!d||!b("isValidUniqueID")(e))return null;var f=h?h.getActiveRank(e):0;h&&!h.contains(e)&&(f+=c);return new(b("SearchableEntry"))({uniqueID:e,title:d,order:f,subtitle:a.subtext,type:a.render_type||a.type,photo:a.photo,uri:a.path,auxiliaryData:{isVerified:a.is_verified,isMessengerUser:a.is_messenger_user,alias:a.alias,workForeignEntityInfo:a.work_foreign_entity_info}})};a.prototype.$ChatSearchSource10=function(a){a=a.getPayload();if(Array.isArray(a))return a;else if(a&&a.entries)return a.entries;else return[]};a.prototype.$ChatSearchSource14=function(a){var c=b("ShortProfiles").getNow(a),d=a==b("CurrentUser").getID()?b("MercuryParticipantTypes").FRIEND:c.type,e=[c.additionalName,c.alternateName].concat(c.searchTokens||[]).join(" "),f=c.name,g=null;return new(b("SearchableEntry"))({uniqueID:a,title:f,order:h?h.getActiveRank(a):0,subtitle:g,keywordString:e,type:d,photo:c.thumbSrc,uri:c.uri,auxiliaryData:{isMessengerUser:c.is_messenger_user,alias:c.alias}})};a.prototype.$ChatSearchSource5=function(a,c,d,e){this.$ChatSearchSource3===b("MessengerSearchFunnelLoggerConstants").WWW_SIDEBAR_TAG&&a.value!==this.$ChatSearchSource7&&(b("Bootloader").loadModules(["MessengerSearchFunnelLogger","MessengerUniversalSearchFunnelLogger","MessengerUniversalSearchFunnelLoggerConstants"],function(c,d,e){c.logStartQuery(b("MessengerSearchFunnelLoggerConstants").NAME,a.value),d.logSourceStarted(a.value,e.SOURCES.SERVER)},"ChatSearchSource"),this.$ChatSearchSource7=a.value),new(b("AsyncRequest"))(c.uri).setData(babelHelpers["extends"]({},a,c.data)).setMethod("GET").setReadOnly(!0).setHandler(d).setErrorHandler(e||b("emptyFunction")).setAllowCrossPageTransition(!0).send()};a.prototype.$ChatSearchSource12=function(a,b){a.length&&this.$ChatSearchSource1.addQueryEntries(a,b)};a.prototype.addLocalEntries=function(a){this.$ChatSearchSource1.addLocalEntries(a)};a.prototype.refreshData=function(){b("ShortProfiles").fetchAll()};e.exports=a}),null);
__d("MessengerDestinationPickerParticipantItem.react",["cx","Badge.react","Keys","MercuryTypeaheadConstants","OnVisible.react","React","SplitImage.react","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=36;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$4=function(a){this.props.onClick(this.props.entry)}.bind(this),this.$5=function(a){(a.keyCode===b("Keys").SPACE||a.keyCode===b("Keys").RETURN)&&(a.preventDefault(),this.$4(a))}.bind(this),this.onVisible=function(){this.props.onVisible(this.props.entry)}.bind(this),this.willUnmount=function(){this.props.onHidden(this.props.entry)}.bind(this),c}a.prototype.$1=function(){var a=this.props.entry,c=a.getPhoto();a=a.getAuxiliaryData();var d=[];!c&&a&&typeof a==="object"&&a.participantsToRender&&Array.isArray(a.participantsToRender)&&(d=a.participantsToRender.map(function(a){return a&&typeof a==="object"&&typeof a.image_src==="string"?a.image_src:""}));return c||d.length?b("React").createElement(b("SplitImage.react"),{srcs:c?[String(c)]:d,size:i,className:"_6c12"}):b("React").createElement("div",{className:"_3-w4"})};a.prototype.$2=function(){return this.props.entry.getTitle()};a.prototype.$3=function(){return this.props.entry.getSubtitle()};a.prototype.$6=function(){var a=this.props.entry.getType();return a===b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE?b("React").createElement(b("Badge.react"),{type:"bot",size:"medium"}):null};a.prototype.componentWillUnmount=function(){this.willUnmount()};a.prototype.render=function(){var a=b("joinClasses")("_599m _1sex _5mne"+(this.props.selected?" _1sfg":"")+" _6c13",this.props.className);return b("React").createElement(b("OnVisible.react"),{onVisible:this.onVisible,onHidden:this.willUnmount},b("React").createElement("li",{tabIndex:0,key:"messengerList","aria-checked":this.props.selected,className:a,onMouseDown:this.$4,onKeyDown:this.$5,role:"checkbox"},b("React").createElement("div",{className:"_1sez",key:"messengerListItem"},b("React").createElement("div",{className:"_1se-"},b("React").createElement("div",{className:"_1se_"})),this.$1(),b("React").createElement("div",{className:"_6c14"},b("React").createElement(b("XUIText.react"),{className:"_3qpq _3qps",size:"header3"},this.$2()),b("React").createElement(b("XUIText.react"),{size:"meta1",className:"_3-wf"},this.$3())))))};e.exports=a}),null);
__d("MessengerDestinationPickerParticipantPicker.react",["cx","fbt","CenteredContainer.react","DOMContainer.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(a){i.constructor.call(this,a),this.$1=null}a.prototype.render=function(){return this.props.formattedEntries.length===0&&!this.props.loading?b("React").createElement(b("CenteredContainer.react"),{className:"_2pi1"},h._("Aucun r\u00e9sultat")):b("React").createElement("ol",{className:"_159h"},this.props.formattedEntries,this.props.loading?this.$2():null)};a.prototype.$2=function(){var a=this.props.config&&this.props.config.shimmer;if(a)return b("React").createElement("li",{className:"_6c0s"},this.props.formattedEntries.length>0?b("React").createElement(b("DOMContainer.react"),null,a):new Array(4).fill(0).map(function(c,d){return b("React").createElement(b("DOMContainer.react"),{key:d},a)}));else return b("React").createElement("div",null)};e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorMessengerSearch.react",["ix","cx","fbt","ChatSearchSource","Image.react","MessengerSecondarySearchFunnelConstants","React","SearchableTextInput.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(a){j.constructor.call(this,a),this.$1=new(b("ChatSearchSource"))({queryRequests:[{uri:"/ajax/mercury/composer_query.php"}],excludeMemorializedUsers:!0,searchType:b("MessengerSecondarySearchFunnelConstants").ENTRY_SURFACES.COMPOSER})}a.prototype.componentDidMount=function(){this.$2&&this.$2.focusInput()};a.prototype.render=function(){var a=i._("Rechercher des amis et des groupes");return b("React").createElement("div",{className:"_6a8z"},b("React").createElement(b("Image.react"),{src:g("492644")}),b("React").createElement(b("SearchableTextInput.react"),{className:"_1-tt",ref:function(a){this.$2=a}.bind(this),onChange:this.props.onSearchChange,onEntriesFound:this.props.onSearchEntriesFound,placeholder:a,queryString:this.props.query,searchSource:this.$1,searchSourceOptions:{onQueryFinished:this.props.onSearchFinished}}))};e.exports=a}),null);
__d("MessengerGroupCreationEntryPoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHAT_TAB:"chat_tab_add_people",JEWEL:"jewel_new_message",CHAT_SIDEBAR:"chat_sidebar_new_message",GCF_JEWEL:"jewel_new_group",GCF_CHAT_SIDEBAR:"chat_sidebar_new_group",GCF_SHARE_FLOW:"chat_share_message_to_messenger",CHAT_POLL:"chat_poll_button",WORK_CHAT_HEADER_NEW_GROUP_BUTTON:"work_chat_header_new_group_button"})}),null);
__d("ReactComposerSharingSpacesSelectorMessengerSectionHeader.react",["cx","fbt","JSResource","LeftRight.react","MessengerGroupCreationEntryPoint","React","ReactComposerSharingSpacesSelectorMessengerSearch.react","SharingSpacesStrings","XUIText.react","isKeyActivation","lazyLoadComponent"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("lazyLoadComponent")(b("JSResource")("MessengerGroupCreateDialogImpl.react").__setRef("ReactComposerSharingSpacesSelectorMessengerSectionHeader.react")),k=422,l=477;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a=b("React").createElement(b("XUIText.react"),{tabIndex:0,role:"button",onKeyDown:function(a){return b("isKeyActivation")(a)?this.props.onClickCreateGroup():null}.bind(this),onClick:this.props.onClickCreateGroup,className:"_1-tr"},h._("Cr\u00e9er un groupe"));return b("React").createElement("div",{className:"_1shc _6c0r"},b("React").createElement(b("LeftRight.react"),null,b("React").createElement(b("XUIText.react"),{size:"body3",weight:"bold",className:"_1shd"},b("SharingSpacesStrings").SHARING_SPACES_SELECTOR_DESTINATION_MESSENGER),b("React").createElement("div",null,this.props.showSearch?null:b("React").createElement(b("XUIText.react"),{tabIndex:0,role:"button",onKeyDown:function(a){return b("isKeyActivation")(a)?this.props.onClickSearch():null}.bind(this),onClick:this.props.onClickSearch,className:"_1-tr"},h._("Recherche")," \xb7 "),a,b("React").createElement(b("React").Suspense,{fallback:b("React").createElement("div",null)},this.props.showCreateGroupDialog?b("React").createElement(j,{entryPoint:b("MessengerGroupCreationEntryPoint").GCF_SHARE_FLOW,dialogTitle:h._("Cr\u00e9er un groupe"),pickerScrollAreaHeight:k,selectedSectionHeight:l,isShown:!0,onClose:this.props.onCreateGroupDialogClose,doNotCreateGroup:!0}):b("React").createElement("div",null)))),this.props.children)};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorMessengerSection.react",["cx","ChatTypeaheadConstants","ComposerDestinationsLoggingUtils","Focus","MessengerDestinationPickerParticipantItem.react","MessengerDestinationPickerParticipantPicker.react","MessengerParticipantPickerWrapper.react","React","ReactComposerAudienceActions","ReactComposerAudienceMessengerTypes","ReactComposerLoggingStore","ReactComposerSharingSpacesSelectorMessengerSearch.react","ReactComposerSharingSpacesSelectorMessengerSectionHeader.react","ReactDOM","SharingSpacesStrings","Tooltip","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=20;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={loadingQuery:!1,query:"",searchResults:[],isMessengerListLoading:!0,messengerRecipientEntries:[],showSearch:!1,showCreateGroupDialog:!1},this.$8=function(a){var c=this.state.query?this.state.searchResults:this.state.messengerRecipientEntries;c=c.map(function(a){return a.getUniqueID()}).indexOf(a.getUniqueID());b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerThreadToggled(this.props.composerID,b("ReactComposerLoggingStore").getSessionID(this.props.composerID),!this.props.selectedEntries.flatten().has(a.getUniqueID()),a.getUniqueID(),this.$9(a),c);b("ReactComposerAudienceActions").toggleMessengerEntry(this.props.composerID,a.getUniqueID(),this.$9(a))}.bind(this),this.$3=function(a){if(a&&this.props.selectedEntries.isDuplicateNewGroup(a.getUniqueID())){this.setState({showCreateGroupDialog:!1});return}b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerGroupCreationFinished(this.props.composerID);a&&(b("ReactComposerAudienceActions").addNewGroup(this.props.composerID,a),this.$8(a));this.setState({showCreateGroupDialog:!1})}.bind(this),this.$1=function(){b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerSearchOpened(this.props.composerID),this.setState(function(a){return{showSearch:!a.showSearch}})}.bind(this),this.$2=function(){b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerGroupCreationOpened(this.props.composerID),this.setState(function(a){return{showCreateGroupDialog:!0}})}.bind(this),this.$7=function(a){a===this.state.query&&this.setState({loadingQuery:!1})}.bind(this),this.$5=function(a){if(a.target instanceof HTMLInputElement){a=a.target.value;this.setState({loadingQuery:!0,query:a})}}.bind(this),this.$6=function(a){a=a.filter(function(a){return a.getType()===b("ChatTypeaheadConstants").THREAD_TYPE||a.getType()===b("ChatTypeaheadConstants").FRIEND_TYPE});this.setState({searchResults:a})}.bind(this),this.$4=function(a){this.messengerSection=a}.bind(this),c}a.prototype.render=function(){return b("React").createElement("li",babelHelpers["extends"]({className:"_1pek"+(this.props.isDisabled?" _3560":"")+(this.props.isDisabled?" _vlk":"")},this.props.isDisabled?b("Tooltip").propsFor(b("SharingSpacesStrings").MESSENGER_DISABLED_TOOLTIP):{}),b("React").createElement("div",null,b("React").createElement(b("ReactComposerSharingSpacesSelectorMessengerSectionHeader.react"),{showSearch:this.state.showSearch,onClickSearch:this.$1,onClickCreateGroup:this.$2,showCreateGroupDialog:this.state.showCreateGroupDialog,onCreateGroupDialogClose:this.$3,ref:this.$4},this.state.showSearch?b("React").createElement(b("ReactComposerSharingSpacesSelectorMessengerSearch.react"),{onSearchChange:this.$5,onSearchEntriesFound:this.$6,query:this.state.query,onSearchFinished:this.$7}):null),b("React").createElement(b("MessengerParticipantPickerWrapper.react"),{ParticipantRow:b("MessengerDestinationPickerParticipantItem.react"),ParticipantList:b("MessengerDestinationPickerParticipantPicker.react"),onClickEntry:this.$8,loading:this.state.isMessengerListLoading||this.state.loadingQuery,entries:this.state.query?this.state.searchResults:Array.from(this.props.selectedEntries[b("ReactComposerAudienceMessengerTypes").ALL_NEW_GROUPS]).concat(this.state.messengerRecipientEntries),selectedEntries:this.props.selectedEntries.flatten(),config:this.props.config})))};a.prototype.$9=function(a){if(a.getType()===b("ChatTypeaheadConstants").THREAD_TYPE){a=a.getAuxiliaryData();return typeof a==="object"&&a!==null&&a.new_thread===!0?b("ReactComposerAudienceMessengerTypes").NEW_GROUP:b("ReactComposerAudienceMessengerTypes").EXISTING_GROUP}return b("ReactComposerAudienceMessengerTypes").INDIVIDUAL};a.prototype.componentDidMount=function(){this.$10(),b("ComposerDestinationsLoggingUtils").logComposerDestinationsBottomSheetOpened(this.context.composerID),b("requireWeak")("OrderedFriendsList",function(a){return a.getSearchableEntries(i,!0,function(a){this.setState({messengerRecipientEntries:a,isMessengerListLoading:!1})}.bind(this))}.bind(this))};a.prototype.$10=function(){if(this.messengerSection){var a=b("ReactDOM").findDOMNode(this.messengerSection);a instanceof HTMLElement&&b("Focus").set(a)}};e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorMessengerContainer.react",["FluxContainer","React","ReactComposerAudienceActions","ReactComposerAudienceMessengerTypes","ReactComposerAudienceStore","ReactComposerMediaUploadStore","ReactComposerScrapedAttachmentStore","ReactComposerSharingSpacesSelectorMessengerSection.react","ReactComposerStatusStore","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={isDisabled:!1},b}a.getStores=function(){return[b("ReactComposerTaggerStore"),b("ReactComposerStatusStore"),b("ReactComposerMediaUploadStore"),b("ReactComposerScrapedAttachmentStore"),b("ReactComposerAudienceStore")]};a.calculateState=function(a,c){__p&&__p();a=b("ReactComposerTaggerStore").isDisabled(c.composerID,b("ReactComposerTaggerType").MESSENGER);var d=b("ReactComposerAudienceStore").getSelectedMessengerRecipientEntries(c.composerID);if(a&&!d.isEmpty())b("ReactComposerAudienceActions").storeSelectedMessengerEntries(c.composerID);else if(!a&&!b("ReactComposerAudienceStore").getStoredMessengerRecipientEntries(c.composerID).isEmpty()){d=b("ReactComposerAudienceStore").getStoredMessengerRecipientEntries(c.composerID);d.flatten().forEach(function(a){return b("ReactComposerAudienceActions").toggleMessengerEntry(c.composerID,a,b("ReactComposerAudienceMessengerTypes").INDIVIDUAL)});b("ReactComposerAudienceActions").clearStoredSelectedMessengerEntries(c.composerID)}return{isDisabled:a}};a.prototype.render=function(){return b("React").createElement(b("ReactComposerSharingSpacesSelectorMessengerSection.react"),babelHelpers["extends"]({},this.props,{isDisabled:this.state.isDisabled}))};e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);