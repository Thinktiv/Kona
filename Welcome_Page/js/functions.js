$(document).ready(function(){
	
	
	show_screenshot();
	function show_screenshot() {
		$('a.bubble-link').click(function() {
			var selected_link = $(this).attr('name');
			var selected_step = $(this).parent().parent().siblings('.slider').attr('id');
			var selected_step_shots = $(this).parent().parent().siblings('.slider').children();
			
			$.each(selected_step_shots, function(index, value) {
				var step = $(value).attr('alt');
				
				if(step == selected_link) {
					//alert("show step: "+ step +" on step: "+ selected_step);
					$(value).css('z-index', '1100');
					//alert($(value).attr('src'));
				} else {
					$(value).css('z-index', '0');
				}
				
			});
			
			return false;
		});
		
	}
});