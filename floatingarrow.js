// $(function(){
//     alert("My First Jquery Test");
// });
$(document).ready(function(){ $(window).scrollTop(0);});

var arrow = $('#toknowledge');
var complete = 0;
var nav = $("#navigation");
var leftarrow = $("#left");
var rightarrow = $("#right");
var left = ($(window).innerWidth() - nav[0].offsetWidth)/2;

var element = document.getElementsByClassName("centered")[0];

var newPos = ($(window).height()/2);
leftarrow.css({position: 'fixed', top: newPos + 'px'});
rightarrow.css({position: 'fixed', top: newPos + 'px'});

//$("#knowledge").offset().top + ($(window).height() - $("#knowledge").outerHeight(true)) / 2

$("#toknowledge").click(function() {

    $("#toknowledge").animate({opacity: 0}, 100);
    $('html, body').animate({
            scrollTop: $("#portrait").offset().top - $("#portrait").outerHeight(true) / 2},
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

function getInvisHeight(elem) {
    var previousCss  = elem.attr("style");

    elem
        .css({
            position:   'absolute', // Optional if #myDiv is already absolute
            visibility: 'hidden',
            display:    'block'
        });

    optionHeight = elem.height();

    elem.attr("style", previousCss ? previousCss : "");

    return optionHeight;
}
