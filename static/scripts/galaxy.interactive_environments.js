define("galaxy.interactive_environments",["exports"],function(t){"use strict";function e(){$("#spinner").remove(),$("#main").children().remove()}function n(){$("#main").append('<img id="spinner" src="'+galaxy_root+'static/style/largespinner.gif" style="position:absolute;margin:auto;top:0;left:0;right:0;bottom:0;">')}function i(t,e,n,i,o,a,s,r){return{type:void 0!==t?t:"GIE spin",ajax_timeout:void 0!==e?e:2e3,ajax_timeout_max:void 0!==n?n:16e3,ajax_timeout_step:void 0!==i?i:500,sleep:void 0!==o?o:500,sleep_max:void 0!==a?a:8e3,sleep_step:void 0!==s?s:100,log_attempts:void 0===r||r,count:0}}function o(t,n,i){console.log(t),i&&e(),"string"==typeof n&&(toastr.clear(),toastr.error(n,"Error",{closeButton:!0,timeOut:0,extendedTimeOut:0,tapToDismiss:!1}))}function a(t){t.sleep<t.sleep_max&&(t.sleep+=t.sleep_step),t.log_attempts&&console.log(t.type+" request "+t.count+" request timeout "+t.ajax_timeout+"ms sleeping "+t.sleep/1e3+"s"),window.setTimeout(t.spinner,t.sleep)}function s(t,e,n,i,o,s){var r=function(){var r={url:t,xhrFields:{withCredentials:!0},type:"GET",timeout:s.ajax_timeout,success:function(t,e,i){n(t,e,i)||(s.count++,a(s))},error:function(t,e,n){"timeout"==e?(s.ajax_timeout<s.ajax_timeout_max&&(s.ajax_timeout+=s.ajax_timeout_step),s.count++,i(t,e,n)||a(s)):(s.count++,o(t,e,n)||a(s))}};e&&(r.dataType="json"),$.ajax(r)};console.log("Setting up new spinner for "+s.type+" on "+t),s.spinner=r,window.setTimeout(r,s.sleep)}function r(t,i,a,r,u){var c=function(t,e){1==e.count&&(n(),toastr.info(t,null,{closeButton:!0,timeOut:0,extendedTimeOut:0,tapToDismiss:!1}))},l=function(t,e,n){return c(a.waiting,u),40==u.count&&toastr.warning(a.wait_warn,"Warning",{closeButton:!0,timeOut:0,extendedTimeOut:0,tapToDismiss:!1}),!1};s(t,i,function(t){if(!i||i&&1==t)console.log(a.success),e(),toastr.clear(),r();else{if(i&&0==t)return c(a.not_ready,u),!1;o("Invalid response to "+u.type+" request",a.invalid_response,!0)}return!0},l,l,u)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,e){r(t,!0,{success:"Galaxy reports IE container ready, returning",not_ready:"Galaxy is launching a container in which to run this interactive environment. Please wait...",unknown_response:"Galaxy failed to launch a container in which to run this interactive environment, contact a Galaxy administrator.",waiting:"Galaxy is launching a container in which to run this interactive environment. Please wait...",wait_warn:"It is taking an usually long time to start a container. Attempts will continue but you may want to report this condition to a Galaxy administrator if it does not succeed soon.",error:"Galaxy encountered an error while attempting to determine the readiness of this interactive environment's container, contact a Galaxy administrator."},e,i("IE container readiness"))}});
//# sourceMappingURL=../maps/galaxy.interactive_environments.js.map
