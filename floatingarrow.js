// $(function(){
//     alert("My First Jquery Test");
// });
$(document).ready(function(){ $(window).scrollTop(0);});

var arrow = $('#toknowledge');
var complete = 0;
var nav = $("#navigation");
var left = (window.innerWidth-nav[0].offsetWidth)/2;
nav.css({top: -1*nav[0].offsetHeight+"px", right: left + 'px'});

//$("#knowledge").offset().top + ($(window).height() - $("#knowledge").outerHeight(true)) / 2

$("#toknowledge").click(function() {
    $('html, body').animate({
        scrollTop: $("#portrait").offset().top - $("#portrait").outerHeight(true) / 2},
            2000, function(){complete = 0; slowfade(1); popinmenu();});
});

function slowfade(opacity){
    $("#toknowledge").css('opacity', opacity.toString());
    if(opacity <= 0){
        $("#toknowledge").css('visibility', 'hidden');
    }
    else{
        setTimeout(slowfade(opacity-0.01), 1000);
    }
}

function popinmenu(){
    setTimeout(function(){TweenMax.to(nav, 1.2, {top:"0px", ease: Elastic.easeOut});}, 250);
    // nav.animate({'top': '0px'}, 2000, "easeOutBounce");
}

//this can stack animations (which is stupid!)
$(document).keydown(function(e) {
    if(e.keyCode == 40){
        if(complete == 0){
            $("#toknowledge").click();
            complete = 1;
        }
    }
});

runIt();

function runIt() {
    arrow.animate({top:'+=20'}, 1000);
    arrow.animate({top:'-=20'}, 1000, runIt);
}
