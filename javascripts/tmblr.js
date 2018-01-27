// CODED BY COFFEESTAINEDBOOKS for PERSONAL USE (C) 2012
$(document).ready(function() {
$('blockquote').parent().find("a.tumblr_blog").parent("p").html(function(){return $(this).html().slice(0,-1);});
$('.posts').parent().find("a.tumblr_blog").parent("p").html(function(){return $(this).html().slice(0,-1);});
}); 
