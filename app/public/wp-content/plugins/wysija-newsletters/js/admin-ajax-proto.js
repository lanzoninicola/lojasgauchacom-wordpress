function WYSIJA_SYNC_AJAX(i){$("ajax-loading").show(),i.loading_message!==undefined?$("wysija_notice_msg").update(i.loading_message):$("wysija_notice_msg").update(Wysija_i18n.savingnl),$("wysija_notices").show(),$("wysija_notice_msg").show(),$("wysija_notices").writeAttribute("class","notice").setStyle({opacity:1}),new Ajax.Request(wysijaAJAX.ajaxurl,{method:"post",parameters:wysijaAJAX,asynchronous:!0,onSuccess:function(s){i.success!==undefined&&i.success(s);var e=Wysija_i18n.savednl;i.message!==undefined&&(e=i.message),"msgs"in s.responseJSON&&"error"in s.responseJSON.msgs&&($("wysija_notices").writeAttribute("class","error"),e=s.responseJSON.msgs.error),"msgs"in s.responseJSON&&"updated"in s.responseJSON.msgs&&(e=s.responseJSON.msgs.updated),$("wysija_notice_msg").update(e),$("ajax-loading").hide(),new Effect.Fade($("wysija_notices"),{duration:1,from:1,to:0}),ajaxOver=!0},onFailure:function(s){i.failure!==undefined&&i.failure(s),$("wysija_notices").writeAttribute("class","error"),$("ajax-loading").hide(),$("wysija_notices").hide(),$("wysija_notice_msg").update(Wysija_i18n.errorsavingnl),ajaxOver=!0}})}function WYSIJA_AJAX_POST(s){var i=s||{};$("ajax-loading").show(),i.loading_message!==undefined?$("wysija_notice_msg").update(i.loading_message):$("wysija_notice_msg").update(Wysija_i18n.savingnl),$("wysija_notices").show(),$("wysija_notice_msg").show(),$("wysija_notices").setAttribute("class","notice"),$("wysija_notices").writeAttribute("class","notice").setStyle({opacity:1}),new Ajax.Request(wysijaAJAX.ajaxurl,{method:"post",parameters:wysijaAJAX,onSuccess:function(s){$("wysija_notices").writeAttribute("class","notice");var e=Wysija_i18n.savednl;i.success_message!==undefined&&(e=i.success_message),i.success!=undefined&&i.success(s),"msgs"in s.responseJSON&&"error"in s.responseJSON.msgs&&($("wysija_notices").writeAttribute("class","error"),e=s.responseJSON.msgs.error),"msgs"in s.responseJSON&&"updated"in s.responseJSON.msgs&&(e=s.responseJSON.msgs.updated),$("wysija_notice_msg").update(e),$("ajax-loading").hide(),new Effect.Fade($("wysija_notices"),{duration:1,from:1,to:0}),ajaxOver=!0},onFailure:function(s){$("wysija_notices").setAttribute("class","error"),i.failure!=undefined&&i.failure(s),$("ajax-loading").hide(),$("wysija_notices").hide(),i.error_message!==undefined?$("wysija_notice_msg").update(i.error_message):$("wysija_notice_msg").update(Wysija_i18n.errorsavingnl),ajaxOver=!0}})}