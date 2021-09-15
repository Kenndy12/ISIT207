
/* Kenndy 6742014 */

var leftToRight = true;
$(document).ready(function() {
			
	$("#startButton").click(function ()  {
		
		if(leftToRight == true) {

			test1();
		}
		else {
			
			test2();
		}			
		
		function test1() {
			
			$("#catImage").animate({left : "1000"}, 3000, function() {
					leftToRight = false;
			});
			test2();
		}
		
		function test2() {
			
			$("#catImage").animate({left : "0"}, 5000 , function() {
				leftToRight = true;
			});
			test1();
		}
	})
				
	$("#stopButton").click(function() {
				
		$("#catImage").stop(true);
	
	})
						
});