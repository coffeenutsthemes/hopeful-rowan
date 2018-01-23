// minimal soundcloud player © shythemes.tumblr
$.fn.soundCloud = function( options ) {
        var settings = $.extend({
            playColor: "#556b2f"
        }, options );
 
        var color = settings.playColor;
        return this.each(function(){
             $(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;visual=false&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;origin=tumblr&amp;color=' + color.split('#')[1], maxheight: 20, maxwidth: 590 });
    };
                         }
}( jQuery ));

