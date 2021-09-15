
/* Kenndy 6742014 */

$(document).ready(function() { 
	
	
	
	$("#resizableDiv").resizable();
	
	$("#draggableDiv").draggable();
	
	$(".selectableUL").selectable();
	
	$("#progressBar").progressbar();
	
	var progressBarNumberField = document.getElementById("numberValue");
	progressBarNumberField.addEventListener("change",function() {
		
		var progressBarNumber;
		progressBarNumber = parseInt(document.getElementById("numberValue").value);
		
		$("#progressBar").progressbar("option","value",progressBarNumber);
	});
	
	$("#slider").slider({min:0, max:100,step:1,change: function() {
		
		document.getElementById("sliderSpanValue").innerHTML = "The value in the slider is : " + $("#slider").slider("option","value");
	}
	});
	
	
	
});


	