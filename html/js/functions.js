// returnPageText(int)
// accepts the ID of the current page
// returns a string of the story's body text for the current page
function returnPageText(currentPageID){
    return storyDatabase.pages[currentPageID].bodyText;
}

// returnPageLinks(int)
// Returns a string
// If the story has ended, returns The End message
// Otherwise, returns all of the html links for the current page (based on passed value)
function returnPageLinks(currentPageID){
    if(storyDatabase.pages[currentPageID].end){
        return "<strong>THE END</strong>";
    } else {
        var resultLength = storyDatabase.pages[currentPageID].choiceLinks.length;
        var resultString = "<div class='bigLinkContainer'>";
        for(var i=0;i<resultLength; i++){
            resultString += "<a class='iconLink iconLink-" + resultLength + "' data-linkMarco=" + i + " href='javascript:linkMarcoPolo(" + i + ")'><img class='icon' src='img/" + storyDatabase.pages[currentPageID].choiceLinks[i].linkIcon +".png' /></a>"
        }
        resultString += "<div class='pageLinkContainer'>";
        for(var i=0;i<resultLength; i++){
            // PUT STUFF HERE FOR ICON CHOOSING MENU
            resultString += "<a class='pageLink' data-linkPolo=" + i + " href='javascript:addNewSection(" + storyDatabase.pages[currentPageID].choiceLinks[i].linkDestination + ");'>" + storyDatabase.pages[currentPageID].choiceLinks[i].linkText + "</a> ";
        }
        resultString += "</div>";
        resultString += "</div>";
        return resultString;
    }
}


// linkMarcoPolo(int)
function linkMarcoPolo(linkMarco) {
    // pass in the data-marco number of the link
    // hide all links (remove class?)
    // show the data-polo matched number link (add class?)
    // make sure to use sibling to only affect current group links
    $("a").removeClass("pageLinkActive");
    $(".pageLinkContainer").children("a[data-linkPolo='" + linkMarco +"']").addClass("pageLinkActive");
}

function returnPageSetting(currentPageID){
    return storyDatabase.pages[currentPageID].scene;
}

// addNewSection(int)
// Constructs a new section element based on the ID passed in
// Appends the new section as the last element in the #content
function addNewSection(newSectionID){
    $(".bigLinkContainer").fadeOut();
    $("section#activeSection").removeAttr("id");
    var newSection = "<section class='page page-" + newSectionID + " " + returnPageSetting(newSectionID) + "' id='activeSection'><div class='dialog'><div><p>" + returnPageText(newSectionID) + "</p></div><div>" + returnPageLinks(newSectionID) + "</div></div></section>";
    $("#content").append(newSection);
    goToNewSection();
}


// scrollToElement(string, int)
// scrolls to an anchor id of "target", with offset "fromTop" at "speed"
function scrollToElement( target, fromTop ) {
    var speed = 2000;
    var destination = jQuery( target ).offset().top - fromTop;
    jQuery( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
        window.location.hash = "";
    });
    return false;
}


// goToNewSection()
// umbrella function to move the user to the newly created page section
// Simple scroll move, or exit items & build on new ones
function goToNewSection(){
    scrollToElement("#activeSection", 0);
}


$(document).ready(function(){

    // Initialize Skrollr
    var s = skrollr.init({
        forceHeight: false
    });
    s.refresh($('.homeSlide'));

});