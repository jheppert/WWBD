
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
        var resultString = "";
        for(var i=0;i<resultLength; i++){
            // document.write("<a href='" + storyDatabase.pages[currentPageID].choiceLinks[i].linkDestination + "'>" + storyDatabase.pages[currentPageID].choiceLinks[i].linkText + "</a> ");
            resultString += "<a class='uk-panel uk-panel-hover uk-panel-box uk-panel-box-primary' href='javascript:addNewSection(" + storyDatabase.pages[currentPageID].choiceLinks[i].linkDestination + ");'>" + storyDatabase.pages[currentPageID].choiceLinks[i].linkText + "</a> ";
        }
        return resultString;
    }
}

// addNewSection(int)
// Constructs a new section element based on the ID passed in
// Appends the new section as the last element in the #content
function addNewSection(newSectionID){
    $("section#activeSection").removeAttr("id");
    var newSection = "<section class='page page-" + newSectionID + " uk-width-medium-1-2 uk-container-center' id='activeSection'><div><p>" + returnPageText(newSectionID) + "</p></div><div>" + returnPageLinks(newSectionID) + "</div></section>";
    $("#content").append(newSection);
    goToNewSection();
}



function scrollToElement( target, fromTop ) {
    var speed = 600;
    var destination = jQuery( target ).offset().top - fromTop;
    jQuery( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
        window.location.hash = "";
    });
    return false;
}


function goToNewSection(){
    scrollToElement("#activeSection", 0);
}