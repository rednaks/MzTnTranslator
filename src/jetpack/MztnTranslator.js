let selection = require("selection");
var cm = require("context-menu");
    cm.Item({
  label: "Translate the selection ",
  context: cm.URLContext('*'),
  contentScript: 'self.on("click", self.postMessage);',
  onMessage: function () {
    require("request").Request({
url: "http://translate.rednaks.tn/api/v1/",
    contentType: "application/json"
		content : {
			text: selection.text},
		onComplete: function(response) {
            console.log(response.json);
            selection.text = response.json.translated; //debug
		}}).get();

    
    //selection.text = "GTFO ! ";
  }
});
