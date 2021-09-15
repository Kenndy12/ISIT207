
/* Kenndy 6742014 */

startDisplayChange();

function startDisplayChange(){

	timerForChanging = setInterval(changeDisplayPresentation,5000);
}

function changeDisplayPresentation() {
	
	var imageList =  ["Images/animal3.jpg","Images/lavender.jpg","Images/pen1.jpg"];
	
	var elementTest = document.getElementById("imagePresentationDisplay");


	if(elementTest.src.includes("animal3.jpg")) {
		
		elementTest.src = imageList[1];
		document.getElementById("mainPageProdName").innerHTML = "Lavender";
		document.getElementById("mainPageProdDesc").innerText = `With a shade of baby purple, this lavender is sure to impress anyone 
								as a gift. Not to mention the heavenly aroma that comes of the flowers.`;
		document.getElementById("mainpageHref").href = 'FlowersPage.cshtml#flower2';
	}
	else if(elementTest.src.includes("lavender.jpg")) {
		
		elementTest.src = imageList[2]; 
		document.getElementById("mainPageProdName").innerHTML = "Marbled Textured Pen";
		document.getElementById("mainPageProdDesc").innerText = `A pen with a good fit is a good present for anyone, it has excelent
								balance between the back of the pen and the front of it, as well as a nice finish that runs smoothly through your finger.`;
		document.getElementById("mainpageHref").href = 'StationaryPage.cshtml#pen1';
	}
	else if(elementTest.src.includes("pen1.jpg")) {
		
		elementTest.src = imageList[0];
		document.getElementById("mainPageProdName").innerHTML = "Baby Yoda";
		document.getElementById("mainPageProdDesc").innerText = `Baby Yoda which has gone viral on social media for it's cuteness has
								finally arrived on our gift shop. Derived from the series "The 
								Mandalorian" this doll will surely fill your empty cold black heart.`;
		document.getElementById("mainpageHref").href = 'StuffedAnimalsPage.cshtml#ani3';
	}
}

var outOfStockButton = document.getElementsByClassName('outOfStockClass');
loopButton();

function loopButton() {
	
	for(var i=0; i < outOfStockButton.length ; i++) {
		outOfStockButton[i].addEventListener('click',function() { alert("This item is out of stock") } );		
	}
}


