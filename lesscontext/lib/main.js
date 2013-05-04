/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const { getOuterId, isBrowser } = require("window/utils");
const {WindowTracker} = require("sdk/deprecated/window-utils");

let myprefs = require("simple-prefs").prefs;
require("simple-prefs").on;

let Track = function(fn) WindowTracker({ onTrack: fn});
let browserOnly = function(fn) {
  return function(window) {
    if (!isBrowser(window)) return
    fn(window)
  }
}

let S = JSON.stringify.bind(JSON);
let P = JSON.parse.bind(JSON);

let contextmenutracker;

function onContextMenuPrefChange(prefName) {
	console.log("edited:", prefName)
  contextmenutracker = applytomenus();
}

require("simple-prefs").on("contextmenuconfig", onContextMenuPrefChange);

function applytomenus(){
	return Track(browserOnly(function(window){
	  let contextMenu = window.document.getElementById("contentAreaContextMenu");
	  let config = P(myprefs.contextmenuconfig);
		Array.forEach(contextMenu.children,function(x){
			let id = x.id;
			if (id){
				if (config[id] === undefined) config[id] = true;  // show it
				let show = config[id];
				if (! show){
					console.log("context-menu not showing:", id)
				}
				contextMenu.children[id].style.display = (["none",""][~~show]);
			}
		})
		myprefs.contextmenuconfig = S(config)
	}));
}

let initialsetup = function(){
	if (myprefs.contextmenuconfig === undefined) {
		myprefs.contextmenuconfig = S({"context-back": false, "spell-add-to-dictionary": false})
	}
};

let main = exports.main = function(options,callback){
	initialsetup();
	contextmenutracker = applytomenus();
}


