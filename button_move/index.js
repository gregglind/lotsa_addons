var self = require("sdk/self");

// https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/CustomizableUI.jsm

const {Cu, Ci} = require("chrome");
const { CustomizableUI } = Cu.import("resource:///modules/CustomizableUI.jsm");


var { ToggleButton } = require('sdk/ui/button/toggle');

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: "resource:///chrome/browser/skin/classic/browser/Geolocation-64@2x.png",
  onClick: function(state) {
      console.log("You clicked '" + state.label + "'", state);
  }
});

button.click();


var myWidgetListener = {
  onWidgetAdded: function(aWidgetId, aArea, aPosition) {
      console.log('a widget moved to an area, arguments:', arguments);

      var useIcon;
      if (aArea == CustomizableUI.AREA_PANEL) {
          useIcon = 'chrome://branding/content/icon32.png';
      } else {
          useIcon = 'chrome://branding/content/icon16.png';
      }
  },
  onWidgetMoved: function(aWidgetId, aArea, aPosition) {
      console.log('a widget moved within an area, arguments:', arguments);
  },
  onWidgetRemoved: function(aWidgetId, aArea, aPosition) {
      console.log('a widget removed from an area, arguments:', arguments);
  },

  onWidgetDestroyed: function(aWidgetId) {
      console.log('a widget destroyed so removing listener, arguments:', arguments);

      console.log('my widget destoryed');
      CustomizableUI.removeListener(myWidgetListener);
  }
}
CustomizableUI.addListener(myWidgetListener);
