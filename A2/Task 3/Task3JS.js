
/* Kenndy 6742014 */
$(document).ready(function(){
	
	$("table td").click(function() {
		
		$("*").removeClass("highlighted");
		$(this).addClass("highlighted");
		
		$("#highlightedText").text("You have clicked : " + $(this).text());
	});
	
	
	
});