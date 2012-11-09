"use strict";
const tabs=require('tabs');
const preferences = require('preferences-service');

let helper_prefs = {
    "general.warnOnAboutConfig": false,
    "browser.dom.window.dump.enabled": true,
};


let prefs_recorder = {};

/**
 *
 */
// TODO, reset prefs on end of function
var setprefs = function (prefs,prefix) {
    prefix = prefix || "+";
    if (! prefs) {return};
    var n = prefix.length;
    Object.keys(prefs).forEach(
        function(k){
            let v = prefs[k];
            console.log('setting:', k, '=>', v);
            if (k.indexOf(prefix) == 0) { //
                myprefs[k.slice(n)] = v
            } else {  // regular pref
                preferences.set(k,v);
            }
        }
    );
};


let reset_prefs = function(){
    // TODO... reset them back to original state
};

let opentab = function(url){
    if (url){
        console.log("opening", url);
        tabs.open(url);
    }
}


exports.main = function(options,callback) {
    let staticargs = options.staticArgs;
    // debug mode
    console.log("static args:",JSON.stringify(staticargs));

    if (staticargs.debugprefs) {
        setprefs(helper_prefs);
    }
    if (staticargs.debugpages) {
        ["about:config", "about:addons", "chrome://global/content/console.xul"].forEach(opentab);
    }

    setprefs(staticargs.prefs);
    if (staticargs.urls) {
        staticargs.urls.forEach(opentab);
    }
};



