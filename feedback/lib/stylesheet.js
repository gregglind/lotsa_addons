"use strict";

// https://developer.mozilla.org/en-US/docs/Using_the_Stylesheet_Service

// https://github.com/KWierso/rtse/blob/rtse-lite/lib/stylesheetservice.js

/*
 TODO (glind)  should we allow AGENT_SHEET stuff?
 TODO (glind)  urls.
 */

const {Cc, Ci, Cu} = require("chrome");

const sss = exports.sss = Cc["@mozilla.org/content/style-sheet-service;1"]
                    .getService(Ci.nsIStyleSheetService);
const ios = epxorts.ios = Cc["@mozilla.org/network/io-service;1"]
                    .getService(Ci.nsIIOService);

let cascadeLevels = {
	"agent": sss.AGENT_SHEET,
	"user":  sss.USER_SHEET
};

const register = exports.register = function(urlstring,cascade){
	cascade = cascade || "user";
	cascade = cascadeLevels[cascade];
	var aURL = ios.newURI(urlstring, null, null);
  if(!isRegistered(aURL))
    sss.loadAndRegisterSheet(aURL, cascade);

  require("unload").when(function() {
    if(isRegistered(aURL))
      sss.unregisterSheet(aURL, cascade);
  })
}

exports.unregister = function unregister(urlstring,cascade) {
  cascade = cascade || "user";
  cascade = cascadeLevels[cascade];
  var aURL = ios.newURI(urlstring, null, null);
  if(isRegistered(aURL,cascade)) {
    sss.unregisterSheet(aURL, cascade);
  }
}

function isRegistered(urlstring,cascade) {
  cascade = cascade || "user";
  cascade = cascadeLevels[cascade];
  var aURL = ios.newURI(urlstring, null, null);
  return sss.sheetRegistered(aURL, cascade);
}

