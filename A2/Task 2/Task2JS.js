
/* Kenndy 6742014 */

$(document).ready(function() {  

	$("p").click(function() {
		
		$("p").hide();
		
	});
	
	$("img").click(function() {
		
		$("img").hide();
		
	});
	
	$("button").click(function() {
		
		$("button").hide();
		
	});
	
	
	$("a").click(function() {
		
		event.preventDefault();
		$("a").hide();
		
	});

});
	
	