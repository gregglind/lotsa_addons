
const windows = require("windows").browserWindows;
const windowUtils = require("window-utils");

/*
to explore the ui:

open:  chrome://browser/content/browser.xul

then use inspector  on the "browser in browser"

         <toolbarbutton id="urlbar-reload-button"
                         class="chromeclass-toolbar-additional"
                         command="Browser:ReloadOrDuplicate"
                         onclick="checkForMiddleClick(this, event);"
                         tooltiptext="&reloadButton.tooltip;"/>


*/

var uiTracker = new windowUtils.WindowTracker({
    onTrack: function(window) {
        if ("chrome://browser/content/browser.xul" != window.location) return;
        //var backBroadcaster = window.document.getElementById("Browser:Back");
        //console.log("DISABLED?",backBroadcaster.hasAttribute("disabled"));

        // toolbar#nav-bar -> toolbar button
        let nb = window.document.getElementById('nav-bar');
        let t = window.document.createElement("toolbarbutton");
        nb.appendChild(t);
        console.log('running');

    }
});
