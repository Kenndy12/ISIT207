
var successCount = 0;
var nameAlreadyCalled = false;
var zipcodeAlreadyCalled = false;
var addressAlreadyCalled = false;
var dateAlreadyCalled = false;


$(document).ready(function () {

	$("#progressbar").progressbar({
		value: 0
	});

	$(".draggable").draggable({

		revert: true
		
	});

	$(".drop").droppable({
		drop: function (event, ui) {
			var id = ui.draggable.attr("id");
			if (id == "pen1") {
				$("#stuffSelected").val("marblePen");
			}
			else if (id == "ani2") {
				$("#stuffSelected").val("racoon");
			}
			else if (id == "ani3") {
				$("#stuffSelected").val("babyYoda");
			}
			else if (id == "acc1") {
				$("#stuffSelected").val("bracelet");
			}
			else if (id == "flower1") {
				$("#stuffSelected").val("rose");
			}
			else if (id == "flower2") {
				$("#stuffSelected").val("lavender");
			}
			else if (id == "mug1") {
				$("#stuffSelected").val("ceramicMug");
			}
			else {
				alert("OUT OF STOCK");
            }
		}
	});

})


function updateProgressBar() {
	console.log(successCount);
	$("#progressbar").progressbar({ value: successCount });
}

var submitButton = document.getElementById("submitForm");
submitButton.addEventListener('click', checkFormInput);

setMinCurrentDateDefault();
function setMinCurrentDateDefault() {

	var d = new Date;
	var date = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();

	if (date < 10) {
		date = '' + pad(date, 2);
	}
	if (month < 10) {
		month = '' + pad(month, 2);
	}
	year = '' + year;

	var minDate = year + '-' + month + '-' + date;
	document.getElementById("itemArrivalDate").setAttribute("min", minDate);
}

function checkFormInput() {

	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var zipcode = document.getElementById("zipcode").value;
	var address = document.getElementById("address").value;
	var itemShippingDate = document.getElementById("itemArrivalDate").value;

	var namesStatus = false;
	var zipcodeStatus = false;
	var addressStatus = false;
	var itemShippingDateStatus = false;

	if (checkNames(fname) && checkNames(lname)) {

		namesStatus = true;

		if (nameAlreadyCalled == false) {
			nameAlreadyCalled = true;
			successCount += 20;
			updateProgressBar();
        }
		
    }
	
	else
		alert("There are illegal characters in the names field");

	if (fname.trim() == "" || lname.trim() == "") {

		alert("First name and last name field must not be empty");
		namesStatus = false;
	}

	if (checkZipcode(zipcode)) {

		zipcodeStatus = true;
		if (zipcodeAlreadyCalled == false) {
			zipcodeAlreadyCalled = true;
			successCount += 20;
			updateProgressBar();
		}
    }
	
	else
		alert("Your country requires " + numberOfZipcodesCountry() + " zipcode numbers");

	if (address.trim() == "") {

		addressStatus = false;
		alert("This is not a valid address format");
	}
	else {

		addressStatus = true;
		if (addressAlreadyCalled == false) {
			addressAlreadyCalled = true;
			successCount += 20;
			updateProgressBar();
        }
	}

	if (itemShippingDate != '') {

		itemShippingDateStatus = true;
		if (dateAlreadyCalled == false) {
			getDeliveryDate = true;
			successCount += 20;
			updateProgressBar();
		}

    }
		

	if (namesStatus && zipcodeStatus && addressStatus && itemShippingDateStatus) {

		alert("Item Shipped");
	}
}

function checkNames(name) {

	var namePattern = /^[a-zA-Z]*[\sa-zA-Z]*$/;

	var isItAName = namePattern.test(name);

	if (isItAName)
		return true;
	else
		return false;
}

function checkZipcode(zipcode) {

	var countrySelected = document.getElementById("countrySelector").value;

	if (countrySelected == "Sg" || countrySelected == "Camb" || countrySelected == "Viet")
		var zipPattern = /^[0-9]{6}$/;
	else if (countrySelected == "Ind" || countrySelected == "My" || countrySelected == "Thai")
		var zipPattern = /^[0-9]{5}$/;
	else if (countrySelected == "Brun")
		var zipPattern = /^[0-9]{4}$/;

	var isItAValidZip = zipPattern.test(zipcode);

	if (isItAValidZip)
		return true;
	else
		return false;
}

function numberOfZipcodesCountry() {

	var countrySelected = document.getElementById("countrySelector").value;

	if (countrySelected == "Sg" || countrySelected == "Camb" || countrySelected == "Viet")
		return 6;
	else if (countrySelected == "Ind" || countrySelected == "My" || countrySelected == "Thai")
		return 5;
	else if (countrySelected == "Brun")
		return 4;

}

var countryChanged = document.getElementById("countrySelector");
countryChanged.addEventListener('change', getDeliveryDate);

function getDeliveryDate() {

	var countrySelected = document.getElementById("countrySelector").value;
	var d = new Date();

	var date = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();



	if (countrySelected != "Sg") {
		date += 7;

		if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && date > 31) {

			date %= 31;
			month += 1;

			if (month == 12) {
				year += 1;
			}
		}
		else if ((month == 4 || month == 6 || month == 9 || month == 11) && date > 30) {

			date %= 30;
			month = + 1;
		}

		if (month == 2 && date > 28) {

			var yearDivisibleBy4 = (year % 4 == 0);
			var yearDivisibleBy100 = (year % 100 == 0);
			var yearDivisibleBy400 = (year % 400 == 0);
			if (yearDivisibleBy4) {

				if (yearDivisibleBy100 && !yearDivisibleBy400) {

					date %= 28;
					month += 1;
				}
				else if (yearDivisibleBy100 && yearDivisibleBy400) {

					date %= 29;
					month += 1;
				}
				else {
					date %= 28;
					month += 1;
				}
			}
			else {

				date %= 28;
				month = + 1;
			}

		}


		if (date < 10) {
			date = '' + pad(date, 2);
		}
		if (month < 10) {
			month = '' + pad(month, 2);
		}
		year = '' + year;


		var minDate = year + '-' + month + '-' + date;

		document.getElementById("itemArrivalDate").setAttribute("min", minDate);
	}
	else if (countrySelected == "Sg") {


		if (date < 10) {
			date = '' + pad(date, 2);
		}
		if (month < 10) {
			month = '' + pad(month, 2);
		}
		year = '' + year;

		var minDate = year + '-' + month + '-' + date;
		document.getElementById("itemArrivalDate").setAttribute("min", minDate);
	}
}

function pad(number, length) {
	var str = '' + number;
	while (str.length < length) {
		str = '0' + str;
	}
	return str;
}


