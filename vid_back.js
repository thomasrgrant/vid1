<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js' type='text/javascript'/>
<script type='text/javascript'>
//<![CDATA[
/* jQuery tubular plugin
|* by Sean McCambridge
|* http://www.seanmccambridge.com/tubular
|* Copyright 2012
|* licensed under the MIT License
|* Enjoy.
|*
|* Thanks,
|* Sean */
var videoWidth = 853;
var videoRatio = 16/9;
var defaultDiv = 'wrapper-video';
jQuery.fn.tubular = function(videoId,wrapperId) {
wrapperId = (typeof(wrapperId) == undefined) ? 'wrapper-video' : wrapperId;
t = setTimeout("resizePlayer()",1000);
jQuery('html,body').css('height','100%');
jQuery('body').prepend('<div id="yt-container" style="overflow: hidden; position: fixed; z-index: 1;"><div id="ytapiplayer">You need Flash player 8+ and JavaScript enabled to view this video.</div></div><div id="video-cover" style="position: fixed; width: 100%; height: 100%; z-index: 2;"></div>');
jQuery('#' + wrapperId).css({position: 'relative', 'z-index': 99});
var ytplayer = 0;
var pageWidth = 0;
var pageHeight = 0;
var videoHeight = videoWidth / videoRatio;
var duration;
var iframe = '<iframe id="myytplayer" width="' + videoWidth + '" height="' + videoHeight + '" src="http://www.youtube.com/embed/' + videoId + '?autoplay=1&controls=0&modestbranding=1&showinfo=0&hd=1&iv_load_policy=3&version=3&wmode=transparent&loop=1&playlist=' + videoId + '" frameborder="0" allowfullscreen></iframe>';
jQuery('#ytapiplayer').html(iframe);
jQuery(window).resize(function() {
resizePlayer();
});
return this;
}
function onYouTubePlayerReady(playerId) {
ytplayer = document.getElementById("myytplayer");
ytplayer.setPlaybackQuality('medium');
ytplayer.mute();
}
function resizePlayer() {
var newWidth = jQuery(window).width();
var newHeight = jQuery(window).height();
jQuery('#yt-container, #video-cover').width(newWidth).height(newHeight);
if (newHeight > newWidth / videoRatio) {
newWidth = newHeight * videoRatio;
}
jQuery('#myytplayer').width(newWidth).height(newWidth/videoRatio);
}
//]]>
</script>

<script type='text/javascript'>
//<![CDATA[
$().ready(function() {
$('body').tubular('61BLn00AN_w','wrapper-video');
});
//]]>
</script>
