// $(function(){
//     alert("My First Jquery Test");
// });
$(document).ready(function(){ $(window).scrollTop(0);});
$(function(){ /* to make sure the script runs after page load */
    $('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).hide();
        $(this).parents('.text_item').find('.expandable').show(); /* show the .more_text span */
        $(this).parents('.text_item').find('.read_less').show();

    });

    $('a.read_less').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).hide();
        $(this).parents('.text_item').find('.expandable').hide(); /* show the .more_text span */
        $(this).parents('.text_item').find('.read_more').show();

    });

    if($(window).innerWidth() > 1150) {
        $("#portrait").find('.read_more').click();
    }

});

var arrow = $('#toknowledge');
var complete = 0;
var nav = $("#navigation");
var leftarrow = $("#left");
var rightarrow = $("#right");

var element = document.getElementsByClassName("centered")[0];

var newPos = ($(window).height()/2);
leftarrow.css({position: 'fixed', top: newPos + 'px'});
rightarrow.css({position: 'fixed', top: newPos + 'px'});

//$("#knowledge").offset().top + ($(window).height() - $("#knowledge").outerHeight(true)) / 2

$("#toknowledge").click(function() {
    var element = document.getElementsByClassName("centered")[0];
    $("#toknowledge").animate({opacity: 0}, 100);
    $('html, body').animate({
            scrollTop: $(element).offset().top - ($(window).height() - $(element).outerHeight(true)) / 2},
        2000,
        function() {
            complete = 0;
            popinmenu();
            scrolledDown = true;
            $("#intro").css({visibility: 'hidden'});
            $("#left").css({visibility: 'visible'});
            $("#right").css({visibility: 'visible'});
        });
    });

function popinmenu(){
    nav.css({visibility: "visible"});
    $("#menubar").css({visibility: "visible"});

    // if($("#dropbutton").css('display') == 'none'){
        var left = ($(window).innerWidth() - nav[0].offsetWidth)/2;
        nav.css({top: -1*nav[0].offsetHeight+"px", right: left + 'px'});
        setTimeout(function(){TweenMax.to(nav, 1.2, {top:"0px", ease: Elastic.easeOut});}, 250);
    // }
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
    if(!scrolledDown){
        arrow.animate({top:'+=20'}, 1000);
        arrow.animate({top:'-=20'}, 1000, runIt);
    }
}
