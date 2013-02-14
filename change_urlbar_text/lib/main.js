
"use strict";

let possibles = [
	"where to do today?",
	"search or enter an address",
	"your wish is my command"
];

const BROWSER = "chrome://browser/content/browser.xul";
const {WindowTracker} = require("sdk/deprecated/window-utils");

let addressbarTracker = new WindowTracker({
	onTrack: function(window){
		if (BROWSER != window.location) return;
		let which = Math.floor(Math.random() * possibles.length)
		window.gURLBar.placeholder = " "+possibles[which]
	}
});