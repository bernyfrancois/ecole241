if (self.CavalryLogger) { CavalryLogger.start_js(["V7oQW"]); }

__d("SendAPIDialogButton",["Button"],(function(a,b,c,d,e,f){e.exports={monitor:function(a){var c=document.getElementsByName("publish")[0],d="TypeaheadBehaviors";Object.assign(window[d]||(window[d]={}),{SendAPIDialogButtonActivate:function(d){d.subscribe("select",function(){b("Button").setEnabled(c,1)}),d.subscribe("blur",function(){var d=a.getTokenValues();b("Button").setEnabled(c,d&&d.length)})}})}}}),null);
__d("legacy:connect-xd",["XD"],(function(a,b,c,d,e,f){a.UnverifiedXD=b("XD").UnverifiedXD,a.XD=b("XD").XD}),3);
__d("LitestandLinkHider",["DataStore","DOMQuery","Event","Parent","UserAgent_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){var c=a.getTarget();c=b("Parent").byTag(c,"a");if(!(c instanceof HTMLAnchorElement))return;a.type==="mouseover"?(b("DataStore").set(c,"href",c.href),c.removeAttribute("href")):(c.href=b("DataStore").get(c,"href")||c.href,a.type==="mouseout"&&b("DataStore").remove(c,"href"))}var h={hideLinks:function(a){(b("UserAgent_DEPRECATED").chrome()||b("UserAgent_DEPRECATED").ie()>=9||b("UserAgent_DEPRECATED").opera())&&b("Event").listen(a,{mouseover:g,mouseout:g,mousedown:g})},removeAllHrefs:function(a,c){__p&&__p();c===void 0&&(c=null);a=b("DOMQuery").scry(a,"a");a.forEach(function(a){if(Array.isArray(c)&&a.classList&&a.classList instanceof DOMTokenList&&c.some(function(b){return Array.from(a.classList.values()).indexOf(b)!==-1}))return;a.removeAttribute("href");a.removeAttribute("ajaxify");a.removeAttribute("rel");a.setAttribute("tabindex",0)})},removeClickable:function(a,c,d){h.removeAllHrefs(a,d);d=b("DOMQuery").scry(a,"."+c+" a");d.forEach(function(a){a.removeAttribute("onclick"),a.removeAttribute("onmouseover")})}};e.exports=h}),null);
__d("PhotoAlbumPlacesTypeahead",["Arbiter"],(function(a,b,c,d,e,f){__p&&__p();function g(a){"use strict";__p&&__p();if(!a)return;if(a.getCore().getHiddenValue()){var c={uid:a.getCore().getHiddenValue(),text:a.getCore().getValue()};b("Arbiter").inform("PhotoAlbumPlacesTypeahead.EXIST_PLACE",c)}a.subscribe("select",function(c,a){b("Arbiter").inform("PhotoAlbumPlacesTypeahead.SELECTED_PLACE",a.selected)}.bind(this));a.subscribe("reset",function(){a.getCore().getHiddenValue()||b("Arbiter").inform("PhotoAlbumPlacesTypeahead.RESET_PLACE")}.bind(this));a.subscribe("focus",function(){b("Arbiter").inform("PhotoAlbumPlacesTypeahead.FOCUSED")}.bind(this));this._initialized=!0}g.prototype.init=function(a){"use strict";if(this._initialized)return;g.call(this,a)};e.exports=g}),null);
__d("XFamilyBulkTagAddAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/family/bulk_tag_save/",{subject:{type:"Int"},save_tags:{type:"String"}})}),null);
__d("PhotoTagStore",["ActorURI","AsyncRequest","XFamilyBulkTagAddAsyncController","isEmpty"],(function(a,b,c,d,e,f){__p&&__p();function g(){"use strict";this._tagList={},this._textTagList={},this._originalTagList={},this._dirtyPhotosByUid={},g.instance=this}g.prototype.getPhotoTags=function(a){"use strict";return this._tagList[a]||{}};g.prototype.photoHasTags=function(a){"use strict";return!b("isEmpty")(this.getPhotoTags(a))};g.prototype.clear=function(){"use strict";this._tagList={},this._textTagList={},this._originalTagList={},this._dirtyPhotosByUid={}};g.prototype.addTag=function(a,b,c,d){"use strict";a[b]=a[b]||{};var e=a[b][c]||[];e.push(d);a[b][c]=e};g.prototype.revert=function(a){"use strict";var c=this._tagList,d=this._originalTagList;for(var e in c)b("isEmpty")(d[e][a])?c[e][a]=[]:c[e][a]=d[e][a];this._dirtyPhotosByUid={}};g.prototype.hasNewTags=function(){"use strict";return!b("isEmpty")(this._tagList)||!b("isEmpty")(this._textTagList)};g.prototype.userHasDirtyTags=function(a){"use strict";return!b("isEmpty")(this._dirtyPhotosByUid[a])};g.prototype.userDirtyTagsCount=function(a){"use strict";return Object.keys(this._dirtyPhotosByUid[a]).length};g.prototype.handleTagFetch=function(a){"use strict";for(var b in a)this.loadTagInfo(b,a[b])};g.prototype.saveAlbumTagsForUser=function(a,c,d,e){__p&&__p();e===void 0&&(e=!1);var f={},g=[],h=this._dirtyPhotosByUid[a]||{};for(var i in h){h=this._tagList[i][a];if(b("isEmpty")(h)){g[g.length]=i;continue}h.forEach(function(a){f[i]={x:a.x,y:a.y}})}h={subject:a,action:"save",save_tags:f};g=b("ActorURI").create("/ajax/photos/album/tags.php",c);e&&(h={subject:a,save_tags:JSON.stringify(f)},g=b("XFamilyBulkTagAddAsyncController").getURIBuilder().getURI());new(b("AsyncRequest"))().setURI(g).setData(h).setHandler(function(a){d(a.payload)}).setAllowCrossPageTransition(!0).send();delete this._dirtyPhotosByUid[a]};g.prototype.getTagsFromList=function(a){"use strict";var b=[];for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c))for(var d in a[c])Object.prototype.hasOwnProperty.call(a[c],d)&&a[c][d].forEach(function(a){return b.push(a)});return b};g.prototype.getAllTags=function(){"use strict";var a=this.getTagsFromList(this._tagList),b=this.getTagsFromList(this._textTagList);return a.concat(b)};g.prototype.removeTag=function(a,c){"use strict";__p&&__p();var d=this._tagList[a],e=this._originalTagList[a]||{};e[c]?(this._dirtyPhotosByUid[c]=this._dirtyPhotosByUid[c]||{},this._dirtyPhotosByUid[c][a]=!0):delete this._dirtyPhotosByUid[c][a];for(var f in d)if(f==c){e=this._tagList[a][f];delete this._tagList[a][f];b("isEmpty")(this._tagList[a])&&delete this._tagList[a];return e}};g.prototype.removeTextTag=function(a,c){"use strict";var d=this._textTagList[a];if(!b("isEmpty")(d[c])){d=this._textTagList[a][c];this._textTagList[a][c]=[];b("isEmpty")(this._textTagList[a])&&delete this._textTagList[a];return d}return[]};g.prototype.removeAllNewTagsOfUser=function(a){"use strict";var b=[];if(!this.userHasDirtyTags(a))return b;var c=this._dirtyPhotosByUid[a];for(var d in c)b=b.concat(this.removeTag(d,a));return b};g.prototype.removeAllTagsFromPhoto=function(a){"use strict";__p&&__p();var c=[];if(!b("isEmpty")(this._tagList[a]))for(var d in this._tagList[a]){if(!Object.prototype.hasOwnProperty.call(this._tagList[a],d))continue;c=c.concat(this.removeTag(a,d))}if(!b("isEmpty")(this._textTagList[a]))for(var e in this._textTagList[a]){if(!Object.prototype.hasOwnProperty.call(this._textTagList[a],e))continue;c=c.concat(this.removeTextTag(a,e))}return c};g.prototype.storeTag=function(a,b,c,d,e){"use strict";this.storeTagWithOptions(a,b,c,d,{can_remove:e})};g.prototype.storeTagWithOptions=function(a,b,c,d,e){"use strict";this._dirtyPhotosByUid[b]=this._dirtyPhotosByUid[b]||{};this._dirtyPhotosByUid[b][a]=!0;c={x:c,y:d};Object.assign(c,e);!b?this.addTag(this._textTagList,a,c.name,c):this.addTag(this._tagList,a,b,c)};g.prototype.loadTagInfo=function(a,b){"use strict";this._tagList[a]={};this._originalTagList[a]={};for(var c=0;c<b.length;c++){var d=b[c];this.addTag(this._tagList,a,d.subject,d);this.addTag(this._originalTagList,a,d.subject,d)}};g.getInstance=function(){"use strict";g.instance===null&&new g();return g.instance};g.instance=null;e.exports=g}),null);
__d("TagTypeaheadView",["AsyncRequest","ContextualTypeaheadView","CSS","DOM","FamilyTaggingConfig","Parent"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("ContextualTypeaheadView"));g=c&&c.prototype;function a(a,b){"use strict";g.constructor.call(this,a,b),this.hintText=b.hintText,this.userEd=b.userEd,this.origAutoSelect=b.autoSelect,this.setSuggestions(b.suggestions)}a.prototype.init=function(){"use strict";b("CSS").addClass(this.element,"uiTagTypeaheadView"),g.init.call(this)};a.prototype.buildResults=function(a){"use strict";__p&&__p();!this.value&&this.hintText&&a.unshift({subtext:this.hintText,type:"hintText"});this.userEd&&(new(b("AsyncRequest"))().setURI("/ajax/fof/user_education.php").setData({increment:1}).send(),a.unshift({subtext:this.userEd,type:"userEdText"}));if(b("FamilyTaggingConfig").gk){var c=[],d=[];for(var e=0;e<a.length;e++)a[e].type!=="family_tags"&&a[e].index!=-1e3&&a[e].type!=="hintText"?c.push(a[e]):d.push(a[e]);a=d.concat(c);g.updateResults.call(this,a)}e=g.buildResults.call(this,a);this.userEd&&a.shift();this.value||a.shift();return e};a.prototype.show=function(){"use strict";var a=b("DOM").scry(this.context,".typeaheadBackdrop");a.length>0&&b("CSS").addClass(a[0],"resultsPresent");return g.show.call(this)};a.prototype.hide=function(){"use strict";var a=b("DOM").scry(this.context,".typeaheadBackdrop");a.length>0&&b("CSS").removeClass(a[0],"resultsPresent");return g.hide.call(this)};a.prototype.render=function(a,b,c){"use strict";this.autoSelect=this.origAutoSelect&&a.length,this.disableAutoSelect=a.length===0,b=b.concat(this.getAdditionalResults()),g.render.call(this,a,b,c)};a.prototype.getItems=function(){"use strict";var a=g.getItems.call(this);this.value||a.shift();this.userEd&&a.shift();return a};a.prototype.getSuggestions=function(){"use strict";return this.suggestions};a.prototype.setSuggestions=function(a){"use strict";this.suggestions=a?a.map(String):[],this.visible=!!this.suggestions.length};a.prototype.addSuggestion=function(a){"use strict";this.suggestions.unshift(a)};a.prototype.addTypeaheadFlip=function(a){"use strict";b("CSS").addClass(this.element,a)};a.prototype.removeTypeaheadFlip=function(a){"use strict";b("CSS").removeClass(this.element,a)};a.prototype.getContext=function(){"use strict";var a=b("Parent").byClass(this.element,"typeaheadContainer");if(a)return a;else return g.getContext.call(this)};a.prototype.getAdditionalResults=function(){"use strict";return[]};e.exports=a}),null);
__d("PlacesTypeaheadBehavior",["CSS","DOM"],(function(a,b,c,d,e,f){a={init:function(a,c){a.subscribe(["reset","select","highlight"],function(a,d){a==="highlight"&&d.index!==-1&&d.selected.type!="freeform"&&d.selected.map&&!d.selected.changeCity?(b("DOM").setContent(c,d.selected.map),b("CSS").show(c)):b("CSS").hide(c)})}};e.exports=a}),null);
__d("DisablePlatformButton",["CSS","Event","ge"],(function(a,b,c,d,e,f){__p&&__p();var g=!1;a={init:function(a){__p&&__p();for(var c=0;c<a.length;c++){var d=b("ge")(a[c]);b("Event").listen(d,"click",function(c){if(g)return!1;else{g=!0;for(var c=0;c<a.length;c++)b("CSS").addClass(a[c],"uiButtonDisabled")}})}}};e.exports=a}),null);
__d("FreeformTokenizerBehavior",["Event","Input","Keys"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){__p&&__p();var d=c.matcher&&new RegExp(c.matcher,"i"),e=c.splitter&&new RegExp(c.splitter),f=c.tokenize_on_blur!==!1,g=c.tokenize_on_paste!==!1,h=c.split_on_check===!0,i=c.select_on_comma!==!1,j=c.select_on_space===!0,k=c.never_submit===!0;function l(c){__p&&__p();var f=b("Input").getValue(a.getInput()).trim();e&&c&&c.type=="paste"?f=f.split(e):e&&h?f=f.split(e):f=[f];var g=!1;for(var i=0;i<f.length;i++){var j=f[i].trim();if(j&&(!d||d.test(j))){j={uid:j,text:j,freeform:!0};a.addToken(a.createToken(j));g=!0}}c&&g&&(a.getTypeahead().getCore().afterSelect(),c.kill())}a.subscribe("keydown",function(c,d){c=d.event;d=b("Event").getKeyCode(c);if(d==b("Keys").RETURN||i&&d==b("Keys").COMMA||j&&d==b("Keys").SPACE){var e=a.getTypeahead().getView();e.getSelection()?(e.select(),c.kill()):l(c)}d==b("Keys").RETURN&&k&&c.kill()});a.subscribe("paste",function(a,b){g&&setTimeout(l.bind(null,b.event),20)});a.subscribe("blur",function(b,c){f&&l(),a.getTypeahead().getCore().reset()})}e.exports=a}),null);
__d("TypeaheadHintText",["emptyFunction"],(function(a,b,c,d,e,f){function a(a){"use strict";this._typeahead=a}a.prototype.enable=function(){"use strict";this._typeahead.getCore().resetOnKeyup=!1};Object.assign(a.prototype,{disable:b("emptyFunction")});e.exports=a}),null);
__d("legacy:HintTextTypeaheadBehavior",["TypeaheadHintText"],(function(a,b,c,d,e,f){a.TypeaheadBehaviors||(a.TypeaheadBehaviors={}),a.TypeaheadBehaviors.hintText=function(a){a.enableBehavior(b("TypeaheadHintText"))}}),3);
__d("legacy:ShowResultsOnFocusTypeaheadBehavior",["TypeaheadShowResultsOnFocus"],(function(a,b,c,d,e,f){a.TypeaheadBehaviors||(a.TypeaheadBehaviors={}),a.TypeaheadBehaviors.showResultsOnFocus=function(a){a.enableBehavior(b("TypeaheadShowResultsOnFocus"))}}),3);
__d("legacy:xd-arbiter",["XdArbiter"],(function(a,b,c,d,e,f){b("XdArbiter")}),3);