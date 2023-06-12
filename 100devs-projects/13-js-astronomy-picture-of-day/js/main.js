

var url = "https://api.nasa.gov/planetary/apod?api_key=MSPnuwGOUJ8o4VjiQ1KS2bxgwkk0Glv7jFvp515O"
var apiKey = "MSPnuwGOUJ8o4VjiQ1KS2bxgwkk0Glv7jFvp515O"


$.ajax({
	url: url,
	success:function(){
		console.log("Success! Application loaded...");

		$("#getPicture").on("click",function(){

		var userDate = $("input").val();
		var apiURL = "https://api.nasa.gov/planetary/apod?api_key="+apiKey+"&date="+userDate;
		if (userDate == ""){
			$("span").text("If you don't enter in a specific date, then the default astronomy photo is today's photo.");
		}
		
		$.get(apiURL, function(d){
			console.log(d);
			$("#astronomyImage").attr("src",d.hdurl);
		});


			});
	},
	error:function(){
		console.log("Error loading application...");
	}
});
