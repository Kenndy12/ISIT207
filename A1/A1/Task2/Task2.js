
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
		document.getElementById("mainpageHref").href = 'FlowersPage.html#flower2';
	}
	else if(elementTest.src.includes("lavender.jpg")) {
		
		elementTest.src = imageList[2]; 
		document.getElementById("mainPageProdName").innerHTML = "Marbled Textured Pen";
		document.getElementById("mainPageProdDesc").innerText = `A pen with a good fit is a good present for anyone, it has excelent
								balance between the back of the pen and the front of it, as well as a nice finish that runs smoothly through your finger.`;
		document.getElementById("mainpageHref").href = 'StationaryPage.html#pen1';
	}
	else if(elementTest.src.includes("pen1.jpg")) {
		
		elementTest.src = imageList[0];
		document.getElementById("mainPageProdName").innerHTML = "Baby Yoda";
		document.getElementById("mainPageProdDesc").innerText = `Baby Yoda which has gone viral on social media for it's cuteness has
								finally arrived on our gift shop. Derived from the series "The 
								Mandalorian" this doll will surely fill your empty cold black heart.`;
		document.getElementById("mainpageHref").href = 'StuffedAnimalsPage.html#ani3';
	}
}

var outOfStockButton = document.getElementsByClassName('outOfStockClass');
loopButton();

function loopButton() {
	
	for(var i=0; i < outOfStockButton.length ; i++) {
		outOfStockButton[i].addEventListener('click',function() { alert("This item is out of stock") } );		
	}
}


var submitButton = document.getElementById("submitForm");
submitButton.addEventListener('click',checkFormInput);

setMinCurrentDateDefault();
function setMinCurrentDateDefault(){
	
	var d = new Date;
	var date = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	
	if(date < 10) {
			date =  '' + pad(date,2);
		}
	if(month < 10) {
		month = '' + pad(month,2);
	}
	year = '' + year;
		
	var minDate = year + '-' + month + '-' + date;
	document.getElementById("itemArrivalDate").setAttribute("min",minDate);
}

function checkFormInput() {
	
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var zipcode = document.getElementById("zipcode").value;
	var address = document.getElementById("address").value;
	var itemShippingDate = document.getElementById("itemArrivalDate").value;
	
	var namesStatus = false;
	var zipcodeStatus = false;
	var addressStatus = true;
	var itemShippingDateStatus = false;
	
	if(checkNames(fname) && checkNames(lname)) 
		namesStatus = true;
	else
		alert("There are illegal characters in the names field");
	
	if(fname.trim() == "" || lname.trim() == "") {
		
		alert("First name and last name field must not be empty");
		namesStatus = false;
	}
	
	if(checkZipcode(zipcode))
		zipcodeStatus = true;
	else 
		alert("Your country requires " + numberOfZipcodesCountry() + " zipcode numbers");
	
	if(address.trim() == "") {
		
		addressStatus = false;
		alert("This is not a valid address format");
	}
	
	if(itemShippingDate != '')
		itemShippingDateStatus = true;
	
	if(namesStatus&&zipcodeStatus&&addressStatus&&itemShippingDateStatus) {
		
		alert();
		alert("Item Shipped");
	}
}

function checkNames(name) {
	
	var namePattern = /^[a-zA-Z]*[\sa-zA-Z]*$/;
	
	var isItAName = namePattern.test(name);
	
	if(isItAName)
		return true;
	else 
		return false;
}

function checkZipcode(zipcode) {

	var countrySelected = document.getElementById("countrySelector").value;
	
	if(countrySelected == "Sg" || countrySelected == "Camb" || countrySelected == "Viet")
		var zipPattern = /^[0-9]{6}$/;
	else if(countrySelected == "Ind" || countrySelected == "My" || countrySelected == "Thai")
		var zipPattern = /^[0-9]{5}$/;
	else if(countrySelected == "Brun")
		var zipPattern = /^[0-9]{4}$/;
	
	var isItAValidZip = zipPattern.test(zipcode);
	
	if(isItAValidZip)
		return true;
	else 
		return false;
}

function numberOfZipcodesCountry() {
	
	var countrySelected = document.getElementById("countrySelector").value;
	
	if(countrySelected == "Sg" || countrySelected == "Camb" || countrySelected == "Viet")
		return 6;
	else if(countrySelected == "Ind" || countrySelected == "My" || countrySelected == "Thai")
		return 5;
	else if(countrySelected == "Brun")
		return 4;
	
}

var countryChanged = document.getElementById("countrySelector");
countryChanged.addEventListener('change',getDeliveryDate);

function getDeliveryDate() {
	
	var countrySelected = document.getElementById("countrySelector").value;
	var d = new Date();
	
	var date = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	
	
	
	if(countrySelected != "Sg") {
		date += 7;
		
		if((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && date > 31) {
			
			date %= 31;
			month += 1;
			
			if(month==12) {
				year += 1;
			}
		}
		else if((month == 4 || month == 6 || month==9 || month == 11) && date > 30) {
			
			date %= 30;
			month =+ 1;
		}	
		
		if(month==2 && date > 28) {
			
			var yearDivisibleBy4 = (year % 4 == 0);
			var yearDivisibleBy100 = (year % 100 == 0);
			var yearDivisibleBy400 = (year % 400 == 0);
			if(yearDivisibleBy4) {
				
				if(yearDivisibleBy100 && !yearDivisibleBy400) {
					
					date %= 28;
					month += 1;
				}
				else if(yearDivisibleBy100 && yearDivisibleBy400) {
					
					date %= 29;
					month += 1;
				}
				else {
					date %= 28;
					month +=1;
				}
			}
			else {
				
				date %= 28;
				month =+ 1;
			}
				
		}
		
	
		if(date < 10) {
			date =  '' + pad(date,2);
		}
		if(month < 10) {
			month = '' + pad(month,2);
		}
		year = '' + year;
		
	
		var minDate = year+ '-' + month+ '-' + date;
		
		document.getElementById("itemArrivalDate").setAttribute("min",minDate);
	}	
	else if(countrySelected == "Sg") {
		
		
		if(date < 10) {
			date =  '' + pad(date,2);
		}
		if(month < 10) {
			month = '' + pad(month,2);
		}
		year = '' + year;
		
		var minDate = year + '-' + month + '-' + date;
		document.getElementById("itemArrivalDate").setAttribute("min",minDate);
	}
}

function pad(number, length) {
  var str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}