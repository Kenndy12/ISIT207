
/* Kenndy 6742014 */

window.onload = function() {
	
	var rollButton = document.getElementById("rollButton");
	rollButton.addEventListener("click",getDiceNum);
}


	function die() {
	
		this.faces=[1,2,3];
	}

	die.prototype.specialDice = function() {
	
		var theNumber = Math.floor((Math.random() * this.faces.length) + 1);
		return theNumber;
	};

	function getDiceNum() {
	
		var theDie = new die();
		var theRandomNum = theDie.specialDice();
		document.getElementById("imgDiv").innerHTML = theRandomNum;
		
		if(theRandomNum == 1) {
			
			var img = $("<img>");
			img.attr('src',"dice1.png");
			img.appendTo("#imgDiv");
		}
		
		else if(theRandomNum == 2) {
			
			var img = $("<img>");
			img.attr('src',"dice2.png");
			img.appendTo("#imgDiv");
		}
		
		else {
			
			var img = $("<img>");
			img.attr('src',"dice3.png");
			img.appendTo("#imgDiv");
		}
	}
