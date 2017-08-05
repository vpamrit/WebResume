/**
 * Created by vishn on 7/28/2017.
 */

// $(window).bind('resizeEnd', function() {
//     //do something, window hasn't changed size in 500ms
//     onResize();
//     setTimeout(onResize(), 500);
//
//     // $(document.body).append("<a id ='toknowledge' href='#'></a>");
//     // $('#toknowledge').css({left: $(window).innerWidth()/2 - arrow.innerWidth()/2, bottom: '5vh'});
//     // stop = false;
//     // runIt();
//     // var newPos = ($(window).height()/2);
//     // $("#left").animate({position: 'fixed', top: newPos + 'px'}, 50);
//     // $("#right").animate({position: 'fixed', top: newPos + 'px'}, 50);
//
//     // window.scrollTo(0, $(element).offset().top - ($(window).height() - $(element).outerHeight(true)) / 2);
// });


$(window).resize(function(){

    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
       onResize(1);
    }, 800);

    onResize();
});

function runIt() {
    if(!scrolledDown){
        $('#toknowledge').animate({top:'+=20'}, 1000);
        $('#toknowledge').animate({top:'-=20'}, 1000, runIt);
    }
}


function onResize(repeat) {
    if($(window).innerHeight() <= 450 || $(window).innerWidth() < 602 && scrolledDown) {
        $('#resume').hide();
    }
    else {
        $('#resume').show();
    }

    if(repeat > 0) {
        repeat--;
        console.log(repeat);
        setTimeout(onResize(repeat), 500);
    }

    if (!scrolledDown) {
        $('#toknowledge').remove();

        $(document.body).append("<a id ='toknowledge' href='#'></a>");
        $('#toknowledge').addClass('middle-arrow');
        $('#toknowledge').css({
            position: 'fixed',
            left: $(window).innerWidth() / 2 - arrow.innerWidth() / 2,
            bottom: '5vh'
        });
        if (intro_over && !scrolledDown) {
            $('#toknowledge').css({visibility: 'visible', opacity: 1});
        }
        runIt();
        $("#toknowledge").click(function () {
            scrolledDown = true;
            $(this).trigger('scrollDown');
        });
    }
    var leftarrow = $("#left");
    var rightarrow = $("#right");

    if($(window).innerWidth() > 601) {
        var newPos = ($(window).height()/2 - $('#left').outerHeight()/2);
        var leftar = ($(window).innerWidth() - $($('.centered')[0]).outerWidth())/2 - Math.max(65, $('#left').outerWidth()/2 + $(window).innerWidth()/25);
        leftarrow.css({position: 'fixed', left: leftar, top: newPos + 'px'});
        rightarrow.css({position: 'fixed', right: leftar, bottom: newPos + 'px'});
    }
    else if($(window).innerWidth() > 390) {
        var newPos = ($(window).height()/2 - $('#left').outerHeight()/2);
        var leftar = ($(window).innerWidth() - $($('.centered')[0]).outerWidth())/2 - Math.max(40, $('#left').outerWidth()/2 + $(window).innerWidth()/25);
        leftarrow.css({position: 'fixed', left: leftar, top: newPos + 'px'});
        rightarrow.css({position: 'fixed', right: leftar, bottom: newPos + 'px'});
    }
    else {
        var newPos = 5;
        var leftar = ($(window).innerWidth()/2 - $('#left').outerWidth()/2);
        leftarrow.css({position: 'fixed', left: leftar, top: newPos + 'px'});
        rightarrow.css({position: 'fixed', right: leftar, bottom: newPos + 'px'});
    }

    if(scrolledDown) {
        var element = document.getElementsByClassName("centered")[0];
        $('html, body').animate({scrollTop: $(element).offset().top - ($(window).height() - $(element).outerHeight(true)) / 2}, 10);
        var nav = $("#navigation");
        var left = ($(window).innerWidth() - nav[0].offsetWidth) / 2;
        nav.animate({right: left + 'px'}, 50);

        if($(window).innerWidth() < 1150) {
            $("#portrait").find('.read_less').click();
        }
    }
}