/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, curly:true, browser:true,
  indent:2, maxerr:50, devel:true, node:true, boss:true, white:true,
  globalstrict:true, nomen:false, newcap:true, esnext: true */

/*global */

"use strict";

// FROM https://hg.mozilla.org/users/gszorc_mozilla.com/fxaddon-healthreport-all-searches/

let {Cc, Ci} = require("chrome");
let events = require("sdk/system/events");

function monkeypatchSearchesProvider() {
  let reporter = Cc["@mozilla.org/datareporting/service;1"]
                   .getService(Ci.nsISupports)
                   .wrappedJSObject
                   .healthReporter;

  reporter.onInit().then(function onInit() {
    console.log("INIT FHR")
    let provider = reporter.getProvider("org.mozilla.searches");
    provider.recordSearchOrig = Object.recordSearch;

    Object.defineProperty(provider, "recordSearch", {
      value: function recordSearch (engine, source) {
        console.log("FHR", source, engine.identifier, engine.description);

        /*for (let k in engine) {
          if (typeof engine[k] !== "function" && engine.hasOwnProperty(k)) {
            console.log("   ", k, engine[k]);
          };
        };*/
        provider.recordSearchOrig(engine, source);
        /*
        let m = this.getMeasurement("counts", 2);

        //let id = m.interestingEngines[engine] || "other-" + engine;
        let engines = m.interestingEngines || {};
        let id = engines[engine] || engine;
        let field = id + "." + source;

        this.storage.enqueueTransaction(function record() {
          let fieldID = yield this.storage.registerField(m.id, field,
                                                         this.storage.FIELD_DAILY_COUNTER);
          yield this.storage.incrementDailyCounterFromFieldID(fieldID);
        }.bind(this));
        */
      },
    });
  });
}

function onStartup() {
  try {
    console.log("monkeypatching FHR");
    monkeypatchSearchesProvider();
  } catch (ex) {
    console.warn(ex);
  }
}

onStartup();
