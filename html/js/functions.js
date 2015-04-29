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
                resultString += "<a class='pageLink' href='javascript:addNewSection(" + storyDatabase.pages[currentPageID].choiceLinks[i].linkDestination + ");'>" + storyDatabase.pages[currentPageID].choiceLinks[i].linkText + "</a> ";
            }
            return resultString;
        }
    }

    function returnPageSetting(currentPageID){
        return storyDatabase.pages[currentPageID].scene;
    }

    // addNewSection(int)
    // Constructs a new section element based on the ID passed in
    // Appends the new section as the last element in the #content
    function addNewSection(newSectionID){
        $("a.pageLink").fadeOut();
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