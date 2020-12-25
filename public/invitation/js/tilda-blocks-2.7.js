function t478_setHeight(recid){var el=$('#rec'+recid);var sizer=el.find('.t478__sizer');var height=sizer.height();var width=sizer.width();var ratio=width/height;var imgwrapper=el.find(".t478__blockimg, .t478__textwrapper");var imgwidth=imgwrapper.width();if(height!=$(window).height()){imgwrapper.css({'height':((width/ratio)+'px')})}}
function t576_init(recid){var el=$('#rec'+recid),line=el.find('.t576__line'),cirqle=el.find('.t576__cicqle'),block=el.find('.t576__item'),t576_resize;block.each(function(){$(this).find('.t576__circle').css('top',$(this).find('.t576__img').outerHeight()+15)});el.find('.t576__item:first-child').find('.t576__line').css('top',el.find('.t576__item:first-child').find('.t576__img').outerHeight()+15);el.find('.t576__item:last-child').find('.t576__line').css('height',el.find('.t576__item:last-child').find('.t576__img').outerHeight()+20)}
function t635_init(recid){var el=$("#rec"+recid);var data=el.find(".t635__textholder");var animRecId=data.attr("data-recid");var screenmin=parseInt($("#rec"+animRecId).attr("data-screen-min"),10);var screenmax=parseInt($("#rec"+animRecId).attr("data-screen-max"),10);if(isNaN(screenmax)&&isNaN(screenmin)){t635_startType(recid)}else if(!isNaN(screenmax)&&!isNaN(screenmin)){if($(window).width()>=screenmin&&$(window).width()<=screenmax){t635_startType(recid)}}else if(!isNaN(screenmax)){if($(window).width()<=screenmax){t635_startType(recid)}}else if(!isNaN(screenmin)){if($(window).width()>=screenmin){t635_startType(recid)}}}
function t635_startType(recid){var t635_el=$('#rec'+recid),t635_data=t635_el.find(".t635__textholder"),t635_animRecId=t635_data.attr("data-recid"),t635_animText=t635_findAnimElem(t635_animRecId),t635_phrasesList=[],t635_phrase1=t635_data.attr("data-text1"),t635_phrase2=t635_data.attr("data-text2"),t635_phrase3=t635_data.attr("data-text3"),t635_phrase4=t635_data.attr("data-text4"),t635_phrase5=t635_data.attr("data-text5"),t635_speed=t635_data.attr("data-speed"),t635_loop=t635_data.attr("data-loop"),t635_backspaceDelay=t635_data.attr("data-backspacing-delay");if(typeof t635_animText=="undefined"){return}
if(typeof t635_phrase1!="undefined"){t635_phrasesList.push(t635_phrase1.slice(0,80))}
if(typeof t635_phrase2!="undefined"){t635_phrasesList.push(t635_phrase2.slice(0,80))}
if(typeof t635_phrase3!="undefined"){t635_phrasesList.push(t635_phrase3.slice(0,80))}
if(typeof t635_phrase4!="undefined"){t635_phrasesList.push(t635_phrase4.slice(0,80))}
if(typeof t635_phrase5!="undefined"){t635_phrasesList.push(t635_phrase5.slice(0,80))}
if(t635_animText.length!==0&&t635_phrasesList.length!==0){var t635_animTextHtml=t635_animText.html(),t635_animTextSplitted=t635_animTextHtml.split("|"),t635_curWin=$(window);t635_animText.html(t635_animTextSplitted[0]+"<span class=\"t635__typing-text\"></span>"+t635_animTextSplitted[1]);t635_updateAnimTextLimits(t635_animRecId);t635_curWin.bind('resize',t_throttle(function(){t635_updateAnimTextLimits(t635_animRecId)},200));var intervalUpdate=setInterval(function(){t635_updateAnimTextLimits(t635_animRecId)},5000);var t635_animatedText=$("#rec"+t635_animRecId+" .t635__typing-text"),t635_animTextTop=t635_animatedText.attr("data-top-limit"),t635_animTextBottom=t635_animatedText.attr("data-bottom-limit"),t635_winTop=t635_curWin.scrollTop(),t635_winBottom=t635_winTop+t635_curWin.height();t635_animateText(t635_animRecId,t635_phrasesList,t635_speed,t635_loop,t635_backspaceDelay);if(t635_animTextBottom<t635_winTop||t635_animTextTop>t635_winBottom){$("#rec"+t635_animRecId+" .t635__typing-text").data('typed').pauseTyping();$("#rec"+t635_animRecId+" .t635__typing-text").html("")}
t635_curWin.bind('scroll',t_throttle(function(){t635_animTextTop=t635_animatedText.attr("data-top-limit");t635_animTextBottom=t635_animatedText.attr("data-bottom-limit");t635_winTop=t635_curWin.scrollTop();t635_winBottom=t635_winTop+t635_curWin.height();if(t635_animTextBottom<t635_winTop||t635_animTextTop>t635_winBottom){$("#rec"+t635_animRecId+" .t635__typing-text").data('typed').pauseTyping();$("#rec"+t635_animRecId+" .t635__typing-text").html("")}else{$("#rec"+t635_animRecId+" .t635__typing-text").data('typed').continueTyping()}},200))}}
function t635_findAnimElem(animRecId){var animRec=$("#rec"+animRecId);var animH1=animRec.find("h1:contains(\'|\')").last();var animH2=animRec.find("h2:contains(\'|\')").last();var animH3=animRec.find("h3:contains(\'|\')").last();var animDiv=animRec.find("div:contains(\'|\')").last();if(typeof animH1!="undefined"&&animH1.length>0){return animH1}
if(typeof animH2!="undefined"&&animH2.length>0){return animH2}
if(typeof animH3!="undefined"&&animH3.length>0){return animH3}
if(typeof animDiv!="undefined"&&animDiv.length>0){return animDiv}}
function t635_updateAnimTextLimits(t635_animRecId){var t635_animatedBlock=$("#rec"+t635_animRecId),t635_animatedText=t635_animatedBlock.find(".t635__typing-text");if(typeof t635_animatedText.offset()!='undefined'){t635_animatedText.attr("data-top-limit",t635_animatedText.offset().top);t635_animatedText.attr("data-bottom-limit",(t635_animatedBlock.offset().top+t635_animatedBlock.height()))}}
function t635_animateText(t635_animRecId,t635_phrasesList,t635_speed,t635_loop,t635_backspaceDelay){if(typeof t635_speed=="undefined"){t635_speed=40}
if(typeof t635_backspaceDelay=="undefined"){t635_backspaceDelay=800}
if(typeof t635_loop=="undefined"){t635_loop=!0}else{t635_loop=!1}
$("#rec"+t635_animRecId+" .t635__typing-text").typed({strings:t635_phrasesList,typeSpeed:t635_speed*1,startDelay:600,backSpeed:10,backDelay:t635_backspaceDelay*1,loop:t635_loop,contentType:'text'})}
function t796_init(recid){var el=$("#rec"+recid);var winWidth=$(window).width();var screenMin=el.attr("data-screen-min");var screenMax=el.attr("data-screen-max");if(typeof screenMin!=='undefined'){if(winWidth<parseInt(screenMin,10)){return!1}}
if(typeof screenMax!=='undefined'){if(winWidth>parseInt(screenMax,10)){return!1}}
var shapeEl=el.find(".t796__shape-border");var recs=el.find(".t796").attr("data-shape-rec-ids");if(typeof recs!="undefined"){recs=recs.split(",");recs.forEach(function(rec_id,i,arr){var curRec=$("#rec"+rec_id);var curShapeEl=shapeEl.clone();t796_setColor(el,curShapeEl);t796_addDivider(curRec,curShapeEl)})}else{var excludes="[data-record-type='215'],[data-record-type='706'],[data-record-type='651'],[data-record-type='825'],[data-record-type='708']";var curRec;if(shapeEl.hasClass('t796__shape-border_top')||shapeEl.hasClass('t796__shape-border_top-flip')){curRec=el.next(".r");if(curRec.is(excludes)){curRec=curRec.next(".r")}}
if(shapeEl.hasClass('t796__shape-border_bottom')||shapeEl.hasClass('t796__shape-border_bottom-flip')){curRec=el.prev(".r");if(curRec.is(excludes)){curRec=curRec.prev(".r")}}
if(curRec.length!==0){var curShapeEl=shapeEl.clone();t796_setColor(el,curShapeEl);t796_addDivider(curRec,curShapeEl)}}}
function t796_addDivider(curRec,curShapeEl){curRec.attr("data-animationappear","off").removeClass('r_hidden');var coverWrapper=curRec.find(".t-cover");var zeroWrapper=curRec.find(".t396");if(coverWrapper.find('.t557__snow-layer').length>0){curShapeEl.css('z-index',1)}
if(coverWrapper.length>0||zeroWrapper.length>0){if(coverWrapper.length>0){coverWrapper.find(".t-cover__filter").after(curShapeEl)}
if(zeroWrapper.length>0){zeroWrapper.after(curShapeEl);curRec.css("position","relative")}
curShapeEl.css("display","block")}else{var wrapper=curRec;var curRecType=curRec.attr("data-record-type");if(wrapper.length===0){return!0}
wrapper.append(curShapeEl);wrapper.css("position","relative");if(curRecType!="554"&&curRecType!="125"){wrapper.children("div").first().css({"position":"relative","z-index":"1"}).addClass("t796_cont-near-shape-divider")}
var excludeBlocks={734:1,675:1,279:1,694:1,195:1,938:1,}
if(excludeBlocks[curRecType]!==undefined){curShapeEl.css("z-index",excludeBlocks[curRecType])}
curShapeEl.css("display","block")}}
function t796_setColor(el,curShapeEl){if(typeof curShapeEl.attr("data-fill-color")!="undefined"){return}
var nearestBlock;if(curShapeEl.hasClass("t796__shape-border_bottom")||curShapeEl.hasClass("t796__shape-border_bottom-flip")){nearestBlock=el.next(".r")}else{nearestBlock=el.prev(".r")}
if(nearestBlock.length===0){return}
var fillColor=nearestBlock.attr("data-bg-color");if(typeof fillColor=="undefined"){return}
curShapeEl.find(".t796__svg").css("fill",fillColor)}