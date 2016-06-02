$(document).ready(function () {

    /*------------------------------------------------------------------*/

    $("a").hover(function(){
        $(this).stop().animate({"opacity": 0.5}, 200);
    },function(){
        $(this).stop().animate({"opacity": 1}, 200);
    });

    
    /*------------------------------------------------------------------*/
    /*Rotating Words*/

        var keywords = ["la biología", "sistemas", "razones", "Ideas", "Verdades", "la ética", "mentes", "el código", " el caos", "el arte", "historias", "la vida", "teorías", "la ciencia"];
        var count = 1;
        setInterval(function(){
            $("span.keyword").fadeOut(400, function(){
                $(this).html(keywords[count]);
                count++
                if(count == keywords.length)
                    count = 0;
                $(this).fadeIn(400);
            });
        }, 3250);


    /*------------------------------------------------------------------*/
    /*Acordeon*/



    /*------------------------------------------------------------------*/

    $('#site-description').hover(function(){
        $('#arrow-down').css('background-position', 'center 0px');
    }, function(){
        $('#arrow-down').css('background-position', 'center -16px');
    });

    /*------------------------------------------------------------------*/
    $('#site-description').click(function (e) {
    e.preventDefault();
    $('#menu').slideToggle('1000', "easeOutQuad", function () {
        if ($(this).is(':visible')) {
                 $('#header').addClass('active');
                 $('#header').removeClass('inactive');
                 $('#arrow-down').css("background-image", "url(/wp-content/themes/yeedor/_assets/icons/arrow-sprite-active.png)");

        } else {
             $('#header').addClass('inactive');
             $('#header').removeClass('active');
             $('#arrow-down').css("background-image", "url(/wp-content/themes/yeedor/_assets/icons/arrow-sprite.png)");
        }
    });

    /*------------------------------------------------------------------*/

});
});
