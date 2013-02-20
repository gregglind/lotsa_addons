
"use strict";

let recorder=require("micropilot").Micropilot("addressbar").start();

let possibles = [
	"where to do today?",
	"search or enter an address",
	"your wish is my command"
];

let random_possible = function(){
	let which = Math.floor(Math.random() * possibles.length)
	let t = possibles[which];
	return t
}

require('simple-prefs').prefs.logtoconsole=true

const BROWSER = "chrome://browser/content/browser.xul";
const {WindowTracker} = require("sdk/deprecated/window-utils");

let addressbarTracker = new WindowTracker({
	onTrack: function(window){
		if (BROWSER != window.location) return;
		let t = random_possible()
		window.gURLBar.placeholder = t;
		window.gURLBar.addEventListener('click',function(){
			console.log('clicked!',possibles[which]);
			recorder.record({ts:Date.now(),msg:'searchbar',txt:possibles[which]})
		})
	}
});