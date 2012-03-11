
if("undefined" == typeof(MzTnTranslate))
{
	var MzTnTranslate = {};
};

MzTnTranslate.BrowserOverlay = {
	
	select: function(){
	var selection = content.getSelection();
	selection = selection.getRangeAt(0);
	text = selection.toString();
	//alert(text); // debug
	// to remplace the selected text we must delete it first, then write the new one ! :) let's try : 
//	selection.deleteContents(); // this will delete 
	//selection.insertNode(document.createTextNode('New text ! :D')); // And here is our new text ! :)
	// Okey, every thing is working. now let's try to make a http query :)

 	// XMLHttpRequest()
	var req = new XMLHttpRequest(); // i don't know if this will work
	url = 'http://rednaks.alwaysdata.net/translate/?text=' + encodeURIComponent(text);
	//alert(url); //debug 
	req.open('GET',url,false);
	req.send(null);
	if(req.status == 200){
		//alert(req.responseText);// debug
		selection.deleteContents(); // delete the selectet content
		selection.insertNode(document.createTextNode(req.responseText));
		
}	
	

}

};
