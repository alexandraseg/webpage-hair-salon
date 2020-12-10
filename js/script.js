//event handling

var homeHtml="home-snippet.html";

document.addEventListener("DOMContentLoaded", function(event){
	showLoading("#main-content"); //placeholder in index.html
	$ajaxUtils.sendGetRequest(
		homeHtml,
		function(responseText){
			document.querySelector("#main-content").innerHTML=responseText;
		},
		false); //false means that we dont want it to be pre-processed as JSON as it is just an HTML snippet
});