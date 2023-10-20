import { changePageContent } from "./model.js";

function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePageContent(pageID);
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

var winWidth = $(window).width();

$(document).ready(function(){
    initURLListener();
    var maxWidth = 960;
    $(".bars").on("click",(function(e){
        if(winWidth <= maxWidth){
            $(".bars").toggleClass("active");
            $(".links").toggleClass("active");
        }
    }));
    $(".links a").on("click",(function(e){
        if(winWidth <= maxWidth){    
            $(".bars").toggleClass("active");
            $(".links").toggleClass("active");
        }
    }));
})

$(window).resize(function(){
    winWidth = $(window).width();
})


