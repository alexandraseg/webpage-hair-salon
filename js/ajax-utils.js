(function (global){
	var ajaxUtils={}; //just an empty object, so I can then attach things that I want to expose to the outside world

	//returns an HTTP request object
	function getRequestObject(){
		if(global.XMLHttpRequest){
			return (new XMLHttpRequest());
		}
		else {
			global.alert("Ajax is not supported!");
			return(null);
		}
	}


	//makes an Ajax get request

	ajaxUtils.sendGetRequest=
		function(requestUrl, responseHandler){
			var request=getRequestObject();
			request.onreadystatechange=
				function(){
					handleResponse(request, responseHandler);
				};
		request.open("GET", requestUrl, true);
		request.send(null);
		};

	function handleResponse(request, responseHandler){
		//if((request.readyState==4) && (request.status==200)){
			responseHandler(request.responseText);
		//}
	};


	//expose utility to the global object
	global.$ajaxUtils=ajaxUtils;

})(window);