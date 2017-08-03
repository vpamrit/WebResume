/**
 * Created by vishn on 7/28/2017.
 */

$(window).bind('resizeEnd', function() {
    //do something, window hasn't changed size in 500ms
    // $(".image-container>img").each(function(i, img) {
    //     $(img).css({
    //         position: "relative",
    //         left: ($(img).parent().width() - $(img).width()) / 2
    //     });
    // });
    $('#toknowledge').remove();
    $(document.body).append("<a id ='toknowledge' href='#'></a>");
    $('#toknowledge').addClass('middle-arrow');
    $('#toknowledge').css({position: 'fixed', visibility: 'visible', opacity: 1,
        left: $(window).innerWidth()/2 - arrow.innerWidth()/2, bottom: '5vh'});
    runIt();
    $("#toknowledge").click(function() {
        scrolledDown = true;
        $(this).trigger('scrollDown');
    });


    if(scrolledDown) {
        var element = document.getElementsByClassName("centered")[0];
        $('html, body').animate({scrollTop: $(element).offset().top - ($(window).height() - $(element).outerHeight(true)) / 2}, 60);
        var nav = $("#navigation");
        var left = ($(window).innerWidth() - nav[0].offsetWidth) / 2;
        nav.animate({right: left + 'px'}, 50);
        if($(window).innerWidth() < 1150) {
            $("#portrait").find('.read_less').click();
        }
    }

    // $(document.body).append("<a id ='toknowledge' href='#'></a>");
    // $('#toknowledge').css({left: $(window).innerWidth()/2 - arrow.innerWidth()/2, bottom: '5vh'});
    // stop = false;
    // runIt();
    // var newPos = ($(window).height()/2);
    // $("#left").animate({position: 'fixed', top: newPos + 'px'}, 50);
    // $("#right").animate({position: 'fixed', top: newPos + 'px'}, 50);

    // window.scrollTo(0, $(element).offset().top - ($(window).height() - $(element).outerHeight(true)) / 2);
});


$(window).resize(function(){

    $('#toknowledge').remove();
    $(document.body).append("<a id ='toknowledge' href='#'></a>");
    $('#toknowledge').addClass('middle-arrow');
    $('#toknowledge').css({position: 'fixed', visibility: 'visible', opacity: 1,
        left: $(window).innerWidth()/2 - arrow.innerWidth()/2, bottom: '5vh'});

    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);

    if(scrolledDown == true){
        var newPos = ($(window).height()/2);
        $("#left").css({position: 'fixed', top: newPos + 'px'});
        $("#right").css({position: 'fixed', top: newPos + 'px'});
        var element = document.getElementsByClassName("centered")[0];
        console.log($(element));
        window.scrollTo(0, $(element).offset().top - ($(window).height() - $(element).outerHeight(true)) / 2);
        var nav = $("#navigation");
        var left = ($(window).innerWidth() - nav[0].offsetWidth)/2;
        nav.css({right: left + 'px'});
    }
    // console.log($("#knowledge").offset().top);
    // console.log($("#knowledge").outerHeight(true));



});

function runIt() {
    if(!scrolledDown){
        $('#toknowledge').animate({top:'+=20'}, 1000);
        $('#toknowledge').animate({top:'-=20'}, 1000, runIt);
    }
}