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
  label: "feedbac",
  width: 60,
  content: "Feedback",
  tooltip: "Give Feedback"
});

