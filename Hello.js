/**
 * Created by vishn on 8/10/2016.
 */

function dropmenu(node){
        hidemenu(node.nextElementSibling.children);
        fadein(node.nextElementSibling.children, -2);
}

function hidemenu(nodelist){
    for(var x=0; x<nodelist.length; x++)
        nodelist[x].style.opacity=0;
}

function fadein(nodelist, i){
    setTimeout(function(){i++; if (i < nodelist.length) { console.log(i);
        if(i!=-1) fadeslow(nodelist[i], 0); fadein(nodelist, i)};}, 100);
}

function fadeslow(node, a){
    setTimeout(function(){a+=2; if (a < 100) { console.log(a);
        node.style.opacity=a/100.0; fadeslow(node, a);};}, 15);
}

