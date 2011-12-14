$(document).ready(function(){
	
	
	show_screenshot();
	
	function show_screenshot() {
		$('a.bubble-link').click(function() {
			toggle_image($(this));
			
			return false;
		});
		
		$('a.bubble-link').hover(function() {
			toggle_image($(this));
			
			return false;
		});
	}
	
		function toggle_image(selector) {
			var selected_link = $(selector).attr('name');
			var selected_step = $(selector).parent().parent().siblings('.slider').attr('id');
			var selected_step_shots = $(selector).parent().parent().siblings('.slider').children();
			
			$.each(selected_step_shots, function(index, value) {
				var step = $(value).attr('alt');
				
				if(step == selected_link) {
					//alert("show step: "+ step +" on step: "+ selected_step);
					$(value).css('z-index', '1100');
				} else {
					$(value).css('z-index', '0');
				}
				
			});
		}
	
	toggle_active_column();
	function toggle_active_column() {
		var columns = $('#instruction-steps').children();
		var show = 1;
		var dim = 0.4;
		
		$.each(columns, function(index, value) {
			$(value).css('opacity', dim);
			
			if(index == 0) {
				$(value).css('opacity', show);
			} else {
				$(value).hover(function() {
					$(value).css('opacity', show);
				}, function() {
					$(value).css('opacity', dim);
				});	
			}
		});
	}
});