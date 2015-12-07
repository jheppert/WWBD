$(document).ready(function(){

    $(".bubble").click(function(){
        if($(this).hasClass("cityBubble")) {
            console.log("Clicked on city");
            $("#content").removeClass("forest");
            $("#content").removeClass("beach");
            $("#content").addClass("city");
            $(".bubbleDescription").removeClass("activeBubbleDescription");
            $(".cityBubbleDescription").addClass("activeBubbleDescription");
        } else if($(this).hasClass("forestBubble")) {
            console.log("Clicked on forest");
            $("#content").removeClass("city");
            $("#content").removeClass("beach");
            $("#content").addClass("forest");
            $(".bubbleDescription").removeClass("activeBubbleDescription");
            $(".forestBubbleDescription").addClass("activeBubbleDescription");
        } else if($(this).hasClass("beachBubble")) {
            console.log("Clicked on beach");
            $("#content").removeClass("city");
            $("#content").removeClass("forest");
            $("#content").addClass("beach");
            $(".bubbleDescription").removeClass("activeBubbleDescription");
            $(".beachBubbleDescription").addClass("activeBubbleDescription");
        }
    });

});