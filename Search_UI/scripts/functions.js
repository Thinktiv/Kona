$(document).ready(function(){
	
	$('.result-background table td.fieldvalue, .result-background table td.cm a').jTruncate({  
        length: 30,  
        minTrail: 0,  
        ellipsisText: "...",  
        lessAni: 0
    });  
	
	/*
	*	Truncate fields
	*/
	//truncate_values('.result-background table td.fieldvalue b, .result-background table td.cm a b', 10);
	function truncate_values(selector, max) {
		var rows = $(selector);
		$.each(rows, function(index, value){
			//alert($(value).text());
			var length = max;
			var myString = $(value).text();
			var myTruncatedString = myString.substring(0, length);
			$(value).text(evaluate_length(myTruncatedString, length));
		});
	}
	
		function evaluate_length(string, s_length) {
			var length = string.length;
			if(length >= s_length) {
				return string + '...';
			} else {
				return string;
			}
		}
		
	
	/*
	*	Watermark on seacrh field :: DISABLED
	*/
	
	//watermark();
	function watermark() {
	    // Set the watermark var
  		var watermark_label = 'What are you looking for?';
  		// Set the query param var
		var q = getUrlVars()['q'];
  		
		// The field in question
		var field = 'form.main-search input.textInput';
  		
		// Check the state of the query param
  		if(getUrlVars()['q'] == null) {
  			
			// There is no query param so set the watermark
			// style the watermark
			$(field).css('color', '#B9B9B9');
  			$(field).val(watermark_label);
  		}
  		else {
			// There is a query param so set the field value to the query
			// style the field
  			$(field).val(q);
  			$(this).css('color', '#000');
  			
  		}
  		
		// Focus into the field 
  		$(field).live('click', function(){
  			if($(this).val() == watermark_label) {
				// Clear if the watermark is present
				// style the field
  				$(this).val('');
  				$(this).css('color', '#000');
  			} else {
				// Maintain the query in the field
  				$(this).val(q);
  			}
  		});
		
		// Focus out of the field 
		$(field).live('focusout', function(){
  			if($(this).val() == '') {
				// Replace the watermark if the field is empty
				// style the field
  				$(this).val(watermark_label);
  				$(this).css('color', '#B9B9B9');
  			} else {
				// Maintain the query in the field
				// style the field
  				$(this).val(q);
				$(this).css('color', '#000');
  			}
  		});
	}
  		
	  		function getUrlVars()
			{
			    var vars = [], hash;
			    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			    for(var i = 0; i < hashes.length; i++)
			    {
			        hash = hashes[i].split('=');
			        vars.push(hash[0]);
			        vars[hash[0]] = hash[1];
			    }
			    return vars;
			}
	
});