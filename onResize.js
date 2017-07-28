/**
 * Created by vishn on 7/28/2017.
 */

$(window).bind('resizeEnd', function() {
    //do something, window hasn't changed size in 500ms
    window.scrollTo(0, $("#portrait").offset().top - $("#portrait").outerHeight(true) / 2);
});

$(window).resize(function(){
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 1);
    // console.log($("#knowledge").offset().top);
    // console.log($("#knowledge").outerHeight(true));

    // $('html, body').animate({
    //         scrollTop: $("#knowledge").offset().top + ($(window).height() - $("#knowledge").outerHeight(true)) / 2}, 0);


});