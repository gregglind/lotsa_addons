"use strict";

// https://developer.mozilla.org/en-US/docs/Using_the_Stylesheet_Service

// https://github.com/KWierso/rtse/blob/rtse-lite/lib/stylesheetservice.js

/*
 TODO (glind)  should we allow AGENT_SHEET stuff?
 TODO (glind)  urls.
 */

/**
  *
  */

const {Cc, Ci, Cu} = require("chrome");

const sss = exports.sss = Cc["@mozilla.org/content/style-sheet-service;1"]
                    .getService(Ci.nsIStyleSheetService);
const ios = exports.ios = Cc["@mozilla.org/network/io-service;1"]
                    .getService(Ci.nsIIOService);

let cascadeLevels = {
	"agent": sss.AGENT_SHEET,
	"user":  sss.USER_SHEET,
  "author":  sss.AUTHOR_SHEET
};

function urlify(urlstring_or_url){
  let u= urlstring_or_url;
  return (typeof u === typeof "a")? ios.newURI(u,null,null) : u
}

const register = exports.register = function(url,cascade){
	cascade = cascade || "user";
	cascade = cascadeLevels[cascade];
	let aURL = urlify(url)
  if(!isRegistered(aURL))
    sss.loadAndRegisterSheet(aURL, cascade);

  require("unload").when(function() {
    if(isRegistered(aURL))
      sss.unregisterSheet(aURL, cascade);
  })
}

exports.unregister = function unregister(url,cascade) {
  cascade = cascade || "user";
  cascade = cascadeLevels[cascade];
  let aURL = urlify(url)
  if(isRegistered(aURL,cascade)) {
    sss.unregisterSheet(aURL, cascade);
  }
}

const isRegistered = exports.isRegistered = function(url,cascade) {
  cascade = cascade || "user";
  cascade = cascadeLevels[cascade];
  let aURL = urlify(url)
  return sss.sheetRegistered(aURL, cascade);
}

