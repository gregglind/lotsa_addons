"use strict";

// https://developer.mozilla.org/en-US/docs/XPCOM_Interface_Reference/nsIAppStartup

let {Cc,Ci} = require("chrome");
let appStartup = Cc["@mozilla.org/toolkit/app-startup;1"].getService(Ci.nsIAppStartup);


console.log("starting",Date.now());
require("timers").setTimeout(function(){
    console.log("quitting:", Date.now());
    appStartup.quit(appStartup.eAttemptQuit);
},1000);

exports.onUnload = function(reason){
  console.log("unloading, b/c", reason, Date.now());
}
