(function (global){ //an IIFE (Immediately Invoked Functional Expression) | global is the window object

//event handling

var homeHtml="../home-snippet.html";

//convenience function for inserting innerHTML for 'select'
var insertHTML=function(selector, html){
	var targetElem= document.querySelector(selector);
	targetElem.innerHTML=html;
};

//show loading icon inside element identified by 'selector'
var showLoading=function(selector){
	var html="<div class='text-center'>";
	html += "<img scr='images/ajax-loader.gif'></div>"; //or ../images/.. ?????
	insertHTML(selector, html);
};

//on page load (before images or css)
document.addEventListener("DOMContentLoaded", function(event){
	//on first load, show home view
	showLoading("#main-content"); //placeholder in index.html
	$ajaxUtils.sendGetRequest(
		homeHtml,
		function(responseText){ //gives us the homeHTML url
			document.querySelector("#main-content").innerHTML=responseText;
		},
		false); //false means that we dont want it to be pre-processed as JSON as it is just an HTML snippet
});


})(window);