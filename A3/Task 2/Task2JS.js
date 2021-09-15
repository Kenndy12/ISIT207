
var previousImage;

var imagesList = new Array();
imagesList[0] = "Images/animal3.jpg";
imagesList[1] = "Images/christmasmug2.png";
imagesList[2] = "Images/pen1.jpg";

var websiteList = new Array();
websiteList[0] = "RelativeLinks/StuffedAnimalsPage.html";
websiteList[1] = "RelativeLinks/MugsPage.html";
websiteList[2] = "RelativeLinks/StationaryPage.html";

var imageAction;

$(document).ready(function() {
	
	var imageIndex;
	
	setInterval(function() {
		
		do {
			imageIndex = Math.floor(Math.random() * 3);
		}
		while(imageIndex == previousImage)
		$("#changingImage").attr("src",imagesList[imageIndex]);
	
		previousImage = imageIndex;
		
		imageAction = document.getElementById("changingImage");
		imageAction.addEventListener("click",imageHandler);
		
		
	},1000);
	
});


function imageHandler() {
	
	var imageSrc = document.getElementById("changingImage").src;	
	
	if(imageSrc.includes("animal3.jpg")) {
		
		$("a").attr("href",websiteList[0]);
	}
	
	else if(imageSrc.includes("christmasmug2.png")) {
		
		$("a").attr("href",websiteList[1]);
	}
	
	else if(imageSrc.includes("pen1.jpg")) {
		
		$("a").attr("href",websiteList[2]);
	}
}



	