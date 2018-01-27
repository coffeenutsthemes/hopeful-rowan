$(document).ready(function() {
// http://roxiestheme.net/post/158812662057/tutorial-change-the-color-of-tumblrs-new-audio
      $('iframe.tumblr_audio_player').load(function() {
         $('iframe.tumblr_audio_player').contents().find("head").append(
             $("<style type='text/css'> .audio-player{background-color:#eaa4b3 !important;background-image:url('http://assets.tumblr.com/images/x.gif?v=1');color:#fffafa;}.play-pause{font-size:30px!important;}.track-artist,.track-name{color:#ffffff!important;font-size:80%;font-family: 'Josefin Sans', sans-serif !important;}</style>"));
      });
      
// https://magnusthemes.tumblr.com/post/162657076440/remove-tumblrs-redirects
  $('a[href*="t.umblr.com/redirect"]').each(function(){
      var originalURL = $(this).attr("href").split("?z=")[1].split("&t=")[0];
      var replaceURL = decodeURIComponent(originalURL);
      $(this).attr("href", replaceURL);
  });
});

// http://shythemes.tumblr.com/post/114792480648/minimal-soundcloud-player
$(document).ready(function(){
   var color = '#eaa4b3';  
   $('.soundcloud_audio_player').each(function(){
       $(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + color.split('#')[1], height: 20, width: '100%' });
   });
});
