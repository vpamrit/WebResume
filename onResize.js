/**
 * Created by vishn on 7/28/2017.
 */

$(window).bind('resizeEnd', function() {
    //do something, window hasn't changed size in 500ms
    var element = document.getElementsByClassName("centered")[0];
    $('html, body').animate({
        scrollTop: $(element).offset().top - ($(window).height() - $(element).outerHeight(true)) / 2}, 60);
    var nav = $("#navigation");
    var left = ($(window).innerWidth() - nav[0].offsetWidth)/2;
    nav.animate({right: left + 'px'}, 50);
    // if($(window).innerWidth() < 1150) {
    //     $("#portrait").find('.read_less').click();
    // }

    $(".image-container>img").each(function(i, img) {
        $(img).css({
            position: "relative",
            left: ($(img).parent().width() - $(img).width()) / 2
        });
    });

    // var newPos = ($(window).height()/2);
    // $("#left").animate({position: 'fixed', top: newPos + 'px'}, 50);
    // $("#right").animate({position: 'fixed', top: newPos + 'px'}, 50);

    // window.scrollTo(0, $(element).offset().top - ($(window).height() - $(element).outerHeight(true)) / 2);
});

$(window).resize(function(){
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
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 500);
    }
    // console.log($("#knowledge").offset().top);
    // console.log($("#knowledge").outerHeight(true));



});