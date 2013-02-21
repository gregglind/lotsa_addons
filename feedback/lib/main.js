"use strict";

const {data} = require("self");
const tabs = require("tabs");
console.log(data.url(""));


var fivestar = require("widget").Widget({
  id: "fivestar",
  label: "fivestar widget",
  width: 60,
  tooltip: "Vote for Firefox!",
  contentURL: data.url("fivestar.html")
});

/*
var feedback = require("widget").Widget({
  id: "feedback",
  label: "feedback",
  width: 60,
  content: "Feedback",
  tooltip: "Give Feedback"
});
*/


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


const TOOLTIPTEXT = "Go To Mozilla Firefox Feedback Page";
const URL = "https://input.mozilla.org/feedback?source=feedbackbutton";

// on in the the toolbar, nothing fancy...

require('./stylesheet').register(data.url('toolbars.css',"author"));

function makeBars(window) {
  //["how are we doing?","complain!","\uD83D\uDC4D \uD83D\uDC4E","feedback"].forEach(function(l){
  ["Feedback"].forEach(function(l){

    console.log(l);
    let document = window.document;
    let n = window.document.createElement("toolbarbutton");
    n.classList.add("toolbarbutton-1");
    n.classList.add("feedbackbutton");
    n.id = l;
    n.setAttribute("tooltiptext",TOOLTIPTEXT);
    document.getElementById('nav-bar').appendChild(n);
    n.setAttribute("type","button");
    n.setAttribute("label",l);
    n.setAttribute("removable","true");
    require("unload").when(function(){
      n.parentNode.removeChild(n);
    });
    n.addEventListener("click",function(evt){
      tabs.open(URL);
    });  });
}


/*
  '<toolbaritem id="sample-toolbutton-unified">' +
        '<toolbarbutton id="myext-button1" class="toolbarbutton-1" label="Label1" />' +
        '<toolbarbutton id="myext-button2" class="toolbarbutton-1" label="Labe2l" />' +
    '</toolbaritem>'
*/
function heartsfb(window){
  let document = window.document;
  let n = document.createElement("toolbaritem");
  n.setAttribute("removable","true");
  n.setAttribute("label","feedback");

  var iframe = document.createElement("iframe");
  iframe.setAttribute("type", "content");
  iframe.setAttribute("transparent", "transparent");
  iframe.style.overflow = "hidden";
  /*iframe.style.height = "16px";
  iframe.style.maxHeight = "16px";
  iframe.style.width = this._widget.width + "px";*/
  iframe.setAttribute("flex", "1");
  iframe.style.border = "none";
  iframe.style.padding = "0px";
}


function twopartfb(window){
  let document = window.document;
  let n = document.createElement("toolbaritem");
  n.setAttribute("removable","true");
  n.setAttribute("label","feedback");
  //n.classList.add("toolbarbutton-1")
  //n.classList.add("feedbackbutton");
  let n1 = document.createElement("toolbarbutton");
  let n2 = document.createElement("toolbarbutton");

  [n1,n2].forEach(function(l){
    l.setAttribute("type","button");
    l.classList.add("toolbarbutton-1");
    l.classList.add("feedbackbutton-twopart");
    //l.setAttribute("image",data.url("feedback-faces-win.png"));
  })

  n1.addEventListener("click",function(evt){
    tabs.open(URL+"#happy");
  });
  n2.addEventListener("click",function(evt){
    tabs.open(URL+"#sad");
  });
  //n1.setAttribute("label",":)");
  //n2.setAttribute("label",":<");
  n1.id = "feedbackbutton2-happy";
  n2.id = "feedbackbutton2-sad";

  n.appendChild(n1);
  n.appendChild(n2);


  n.setAttribute("tooltiptext",TOOLTIPTEXT);
  document.getElementById('nav-bar').appendChild(n);

  require("unload").when(function(){
    n.parentNode.removeChild(n);
  })
}

const BROWSER = "chrome://browser/content/browser.xul";
function chromeonly(fn){
  return function _chromified(window){
    if (window.location != BROWSER) return true;
    return fn(window);
  };
}

require("sdk/deprecated/window-utils").WindowTracker({onTrack:  chromeonly(makeBars)})
require("sdk/deprecated/window-utils").WindowTracker({onTrack:  chromeonly(twopartfb)});
//require("sdk/deprecated/window-utils").WindowTracker({onTrack:  chromeonly(heartsfb)});



