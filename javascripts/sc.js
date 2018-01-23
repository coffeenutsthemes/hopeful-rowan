// minimal soundcloud player © shythemes.tumblr
$.fn.soundCloud = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            playbtnColor: "#556b2f"
        }, options );
 
        // Greenify the collection based on the settings variable.
        var color = settings.playbtnColor;
        return this.each(function(){
             $(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;visual=false&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;origin=tumblr&amp;color=' + color.split('#')[1], maxheight: 20, maxwidth: 590 });
    };
                         }
}( jQuery ));

