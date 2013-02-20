"use strict";

const {data} = require("self")
var fivestar = require("sdk/widget").Widget({
  id: "fivestar",
  label: "fivestar widget",
  width: 60,
  tooltip: "Vote for Firefox!",
  contentURL: data.url('fivestar.html')
});

var feedback = require("sdk/widget").Widget({
  id: "feedback",
  label: "feedback",
  width: 60,
  content: "Feedback",
  tooltip: "Give Feedback"
});



const toolbutton = function(window,id){
	let tb = window.document.createElement("toolbarbutton");
	return tb;
};

/**
 * Do no checking if it's already in another toolbar
 * just cram it in after nav-bar
 *
 */

/*
	n.classList.add("toolbarbutton-1")
	n.classList.add("feedbackbutton");
	n.id = l
	insertAfter(document.getElementById('feedback-menu-button'),n)
	n.setAttribute("type","button");
	n.setAttribute("label",l);
*/

// http://input.mozilla.org/en-US/feedback#happy
// http://input.mozilla.org/en-US/feedback#sad
// http://input.mozilla.org/en-US/feedback#ideas


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



// on in the the toolbar, nothing fancy...

require('./stylesheet').register(data.url('toolbars.css'));

function makeBars(window) {
	["how are we doing?","complain!","\uD83D\uDC4D \uD83D\uDC4E","feedback"].forEach(function(l){
	  console.log(l);
	  let document = window.document;
		let n = window.document.createElement("toolbarbutton");
		n.classList.add("toolbarbutton-1")
		n.classList.add("feedbackbutton");
		n.id = l
		n.setAttribute("tooltiptext","Give Mozilla Feedback at their Page");
		document.getElementById('nav-bar').appendChild(n)
		n.setAttribute("type","button");
		n.setAttribute("label",l);
		n.setAttribute("removable","true");
		require("unload").when(function(){
			n.parentNode.removeChild(n)
		})
	})
}


require("sdk/deprecated/window-utils").WindowTracker({onTrack:  makeBars})



