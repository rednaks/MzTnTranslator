let selection = require("selection");
var cm = require("context-menu");
    cm.Item({
  label: "Translate the selection ",
  context: cm.URLContext('*'),
  contentScript: 'self.on("click", self.postMessage);',
  onMessage: function () {
    require("request").Request({
    	url: "http://rednaks.alwaysdata.net/translate/",
		content : {
			text: selection.text},
		onComplete: function(response) {
            selection.text = response.text; //debug
		}}).get();

    
    //selection.text = "GTFO ! ";
  }
});
