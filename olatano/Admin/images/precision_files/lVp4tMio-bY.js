if (self.CavalryLogger) { CavalryLogger.start_js(["xbIm0"]); }

__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports={cookieName:"dpr"}}),null);
__d("IntlControllerSpecialCharEncodings",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NON_BREAKING_SPACE:"&nbsp;"})}),null);
__d("LocaleSwitchingReferrers",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CARRY_LOGOUT_LOGIN:"carry_logout_login",COMMUNITY_SITE_TRANSLATION_TOGGLE:"community_site_translation_toggle",FB4B_GLOBAL_SITES_DIALOG:"fb4b_global_sites_dialog",FB4B_GLOBAL_SITES_FOOTER:"fb4b_global_sites_footer",FB4C_GLOBAL_SITE_FOOTER:"fb4c_global_site_footer",IGB_GLOBAL_SITES_FOOTER:"igb_global_sites_footer",WORKPLACE_MARKETING_FOOTER:"workplace_marketing_footer",IG_HC_FOOTER:"ig_hc_footer",LOCALE_SWITCH_SCRIPT:"locale_switch_script",M_TOUCH_LOCALE_SELECTOR:"m_touch_locale_selector",M_BASIC_LOCALE_FOOTER:"m_basic_locale_footer",MEDIA_PORTAL_V3_DIALOG:"media_portal_v3_dialog",MOBILE_ACCOUNT_SETTINGS:"mobile_account_settings",MOBILE_CHROME_JP_FOOTER:"mobile_chrome_jp_footer",MOBILE_FB4B_GLOBAL_SITES_FOOTER:"mobile_fb4b_global_sites_footer",MOBILE_FB4B_GLOBAL_SITES_PAGE_VIEW:"mobile_fb4b_global_sites_page_view",MOBILE_HELP_CENTER_SEARCH:"mobile_help_center_search",MOBILE_LOCALE_CHANGED_NOTICE:"mobile_locale_changed_notice",MOBILE_LOCALE_LINKS:"mobile_locale_links",MOBILE_SUGGESTED_LOCALE_SELECTOR:"mobile_suggested_locale_selector",MOBILE_SWITCH_LANGUAGE_HEADER:"mobile_switch_language_header",SAFETY_CENTER_GLOBAL_SITES_FOOTER:"fbsc_global_sites_footer",SITEMAP:"sitemap",QP_PROMO:"qp_promo",RLX_QP_FORCE_SWITCH:"rlx_qp_force_switch",RLX_QP_PROMPT_SWITCH:"rlx_qp_prompt_switch",RLX_PROMPTED_SWITCH_FOLLOWUP_NOTICE:"rlx_prompted_switch_followup_notice",RLX_QP_MULTI_LANGUAGE:"rlx_qp_multi_language",WWW_ACCOUNT_SETTINGS:"www_account_settings",WWW_CARD_SELECTOR:"www_card_selector",WWW_CARD_SELECTOR_MORE:"www_card_selector_more",WWW_DEV_SITE:"www_dev_site",WWW_HELP_INLINE_SELECTOR:"www_help_inline_selector",WWW_I18N_NUB:"www_i18n_nub",WWW_LANGUAGE_PAGE:"www_language_page",WWW_LINK_DIALOG_SELECTOR:"www_link_dialog_selector",WWW_LIST_SELECTOR:"www_list_selector",WWW_LIST_SELECTOR_MORE:"www_list_selector_more",WWW_MANDATORY_LOCALE_SELECTION_POST:"www_mandatory_locale_selection_post",WWW_TRANS_APP_INCONSISTENT:"www_trans_app_inconsistent",FBCOLUMN_FOOTER:"fbcolumn_footer",WWW_LOGIN_BLUE_BAR:"www_login_blue_bar_nub",UNIT_TEST:"unit_test",ACCOUNT_CREATOR:"account_creator",AT_WORK_ACCOUNT:"at_work_account_creator",ADMIN_TOOL:"admin_tool",TRANSLATION_APP_UNINSTALL:"translation_app_uninstall",CHECKPOINT:"checkpoint",LEGACY_CONTROLLER:"legacy_controller",AYMT:"aymt",UNKNOWN:"unknown"})}),null);
__d("LoggedOutSwitchingLocaleTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setIndex=function(a){this.$1.index=a;return this};a.prototype.setNewLocale=function(a){this.$1.new_locale=a;return this};a.prototype.setOldLocale=function(a){this.$1.old_locale=a;return this};a.prototype.setReferrer=function(a){this.$1.referrer=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={index:!0,new_locale:!0,old_locale:!0,referrer:!0,time:!0,weight:!0};e.exports=a}),null);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/ajax/save_locale/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"String"},ls_ref:{type:"Enum",defaultValue:"unknown",enumType:1},should_redirect:{type:"Bool",defaultValue:!0}})}),null);
__d("IntlUtils",["AsyncRequest","Cookie","IntlControllerSpecialCharEncodings","LocaleSwitchingReferrers","LoggedOutSwitchingLocaleTypedLogger","ReloadPage","XIntlAccountSetLocaleAsyncController","goURI"],(function(a,b,c,d,e,f){__p&&__p();a={setXmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({xmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},encodeSpecialCharsForXController:function(a){return a.replace(new RegExp("\xa0","g"),b("IntlControllerSpecialCharEncodings").NON_BREAKING_SPACE)},decodeSpecialCharsFromXController:function(a){return a.replace(new RegExp(b("IntlControllerSpecialCharEncodings").NON_BREAKING_SPACE,"g"),"\xa0")},setAmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({amode:a,app:!1}).setHandler(function(){b("ReloadPage").now()}).send()},setRmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({rmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},setLocale:function(a,c,d,e){d||(d=a.options[a.selectedIndex].value);e=b("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(e).setData({loc:d,ref:c,should_redirect:!1}).setHandler(function(a){b("ReloadPage").now()}).send()},appendCookieLocaleHistory:function(a){__p&&__p();var c="lh",d=b("Cookie").get(c),e=[],f=5;if(d!==null&&d!==void 0&&d!=""){e=d.split(",");e.push(a);for(var d=0;d<e.length-1;d++)e[d]==e[d+1]&&e.splice(d,1);e.length>=f&&e.slice(1,f)}else e.push(a);b("Cookie").set(c,e.toString())},setCookieLocale:function(a,c,d,e,f){e===void 0&&(e=b("LocaleSwitchingReferrers").OTHER),f===void 0&&(f=null),b("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale",a),this.appendCookieLocaleHistory(a),new(b("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(c).setIndex(f).setReferrer(e).log(),b("goURI")(d)}};e.exports=a}),null);
__d("legacy:onload-action",["PageHooks"],(function(a,b,c,d,e,f){a._domreadyHook=b("PageHooks")._domreadyHook,a._onloadHook=b("PageHooks")._onloadHook,a.runHook=b("PageHooks").runHook,a.runHooks=b("PageHooks").runHooks,a.keep_window_set_as_loaded=b("PageHooks").keepWindowSetAsLoaded}),3);
__d("FBEngagementWhiteopsFraudSensorTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setInstanceID=function(a){this.$1.instance_id=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setPostID=function(a){this.$1.post_id=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setTqBotDetectionProductEnum=function(a){this.$1.tq_bot_detection_product_enum=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={instance_id:!0,page_id:!0,post_id:!0,time:!0,tq_bot_detection_product_enum:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PixelRatioConst").cookieName,h=!1,i=!1,j=!1;function k(){return window.devicePixelRatio||1}function l(){b("Cookie").set(g,String(k()))}function m(){b("Cookie").clear(g)}function n(){if(i)return;i=!0;j&&m();k()!==1?l():m()}a={startDetecting:function(a){a&&(j=!0);if(h)return;h=!0;"onpagehide"in window&&b("DOMEventListener").add(window,"pagehide",n);b("Run").onBeforeUnload(n,!1)}};e.exports=a}),null);
__d("FBSiteWhiteOps",["ControlledReferer","FBEngagementWhiteopsFraudSensorTypedLogger","Style","URI","UserAgent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={appendToWindow:function(a,c,d,e,f){__p&&__p();e===void 0&&(e=null);f===void 0&&(f=null);var g=window.document.body;try{var h="fbsbx-sig-iframe-detection";if(g.getElementsByClassName(h).length!==0)return;var i=window.document.createElement("iframe");b("Style").apply(i,{height:"1px",width:"1px",opacity:"0",position:"relative",zIndex:"-9999999"});i.id="fbsbx-sig-iframe-"+a;i.className=h;i.referrerPolicy="no-referrer";b("ControlledReferer").useFacebookReferer(i,function(){__p&&__p();i.sandbox="allow-scripts allow-same-origin";var g="https://s.update.fbsbx.com/2/843748/utils.html?ti="+a+"&di=facebook.com&bt="+c+"&dt=8437481520966594402012";d&&(g+="&sn="+d);e!=null&&e!==""&&(g+="&c1="+e);f!=null&&f!==""&&(g+="&c3="+f);g=new(b("URI"))(g);var h=i.contentWindow.document,j="fbsbx-sig-iframe-form-"+a,k=g.toString();g=g.getQueryData();if(b("UserAgent").isBrowser("IE")||b("UserAgent").isBrowser("Edge")||b("UserAgent").isBrowser("IE Mobile")){var l="";for(var m in g)Object.prototype.hasOwnProperty.call(g,m)&&(l+="<input "+('name="'+m+'" ')+'type="hidden" autocomplete="off" '+('value="'+g[m]+'" />'));h.body.innerHTML='<form method="GET" id='+j+">"+l+"</form>";l=h.getElementById(j);l.action=k}else{h.body.innerHTML='<form method="GET" id='+j+"></form>";l=h.getElementById(j);l.action=k;for(var n in g)if(Object.prototype.hasOwnProperty.call(g,n)){k=h.createElement("input");k.name=n;k.value=g[n];k.autocomplete="off";k.type="hidden";l.appendChild(k)}}h.body.innerHTML+='<iframe height="100%" width="100%" onload=\'document.getElementById("'+j+"\").submit()'/>;"});g.appendChild(i)}catch(a){}},log:function(a,c,d){new(b("FBEngagementWhiteopsFraudSensorTypedLogger"))().setInstanceID(a).setTqBotDetectionProductEnum(c).log()}};e.exports=a}),null);
__d("BanzaiNectar",["Banzai"],(function(a,b,c,d,e,f){function a(a){return{log:function(c,d,e){d={e:d,a:e};b("Banzai").post("nectar:"+c,d,a)}}}c=a();c.create=a;e.exports=c}),null);
__d("VisualCompletionGating",["requireCond","cr:729414"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:729414")}),null);
__d("SkywalkerUtils",["CurrentLocale","RTISubscriptionManagerConfig"],(function(a,b,c,d,e,f){__p&&__p();a={patchContext:function(a){a=a||{};a.locale=b("CurrentLocale").get();if(b("RTISubscriptionManagerConfig").assimilator){var c=b("RTISubscriptionManagerConfig").assimilator;c.tierType!=null&&(a.tierType=c.tierType);c.sandboxIP!=null&&c.sandboxPort!=null&&c.sandboxHostname!=null&&(a.sandboxIP=c.sandboxIP,a.sandboxPort=c.sandboxPort,a.sandboxHostname=c.sandboxHostname)}return a}};e.exports=a}),null);