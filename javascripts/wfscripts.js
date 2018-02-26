

$(document).ready(function() {
// http://roxiestheme.net/post/158812662057/tutorial-change-the-color-of-tumblrs-new-audio
      $('iframe.tumblr_audio_player').load(function() {
         $('iframe.tumblr_audio_player').contents().find("head").append(
             $("<style type='text/css'> .audio-player{background-color:{color:Link} !important;color:#fff;}.play-pause{font-size:30px!important;}.track-artist,.track-name{color:#ffffff!important;font-size:80%;font-family: 'Josefin Sans', sans-serif !important;}</style>"));
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
   var color = '{color:Lnk}';  
   $('.soundcloud_audio_player').each(function(){
       $(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + color.split('#')[1], height: 20, width: '100%' });
   });
});


// http://shop.gabrielamelo.com.br/p/cotton-template-instructions.html
//<![CDATA[
$.ajax({
dataType: 'jsonp',
type: 'GET',
url: 'https://api.pinterest.com/v3/pidgets/users/rowansincerely/pins/'
}).done(function(response) {
var pins = response.data.pins;
var html = '';
for (var i = 0; i < 3; i++) {
var description = pins[i].description;
var dominantColor = pins[i].dominant_color;
var imageUrl = pins[i].images['237x'].url;
var url = pins[i].id;
html += '<div class="pinterest-gallery"><a href="https://www.pinterest.com/pin/' + url + '/" target="_blank"><div class="pinterest-thumbnail" style="background-image: url(' + imageUrl + ')"></div></a></div>';
}
$('.pinterest').html(html);
}).fail(function() {
console.log('erro');
});
//]]>

// Custom Archives - http://coffeestainedbooks.net
function js18(id) {var ele = document.getElementById("toggle2018");var text = document.getElementById("display2018");if(ele.style.display == "block") {ele.style.display = "none";text.innerHTML = "<span class='arri'>&#9658;&#160;</span><span class='arri_text'>2018</span>";}else {ele.style.display = "block";text.innerHTML = "<span class='arri'>&#9660;&#160;</span><span class='arri_text'>2018</span>";}} 
function js19(id) {var ele = document.getElementById("toggle2019");var text = document.getElementById("display2019");if(ele.style.display == "block") {ele.style.display = "none";text.innerHTML = "<span class='arri'>&#9658;&#160;</span><span class='arri_text'>2019</span>";}else {ele.style.display = "block";text.innerHTML = "<span class='arri'>&#9660;&#160;</span><span class='arri_text'>2019</span>";}} 
