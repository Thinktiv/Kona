$(function(){

//watermark('.gadget-search input.textInput', 'field');

generate_tooltip('td.namefield');
function generate_tooltip(selector){
	
	var items = $(selector + ' div').children();
	$.each(items, function(index, value){
		var tipValue = $(value).html();
		//alert(tipValue);
		$(value).attr('title', tipValue);
		$(value).tipTip({maxWidth: "auto", edgeOffset: 5, defaultPosition:'left'});
	});	
}

dropdown_change_function()
function dropdown_change_function() {
	$("select.filter-select").change(function() { 
		var field_value = $('div.gadget-search input.textInput').val()
		if(field_value != '') {
			alert("Insert filtered search function here...");
		}
	});
}

custom_dropdown_init();
function custom_dropdown_init() {
	$("[name=filter]").sb({
        optionFormat: function() {
            return $(this).attr("alt");
    	}
    });
}

function watermark(selector, param) {
    // Set the watermark var
		var watermark_label = 'Search Salesforce';
		// Set the query param var
	var q = getUrlVars()[param];
		
	// The field in question
	var field = selector;
		
	// Check the state of the query param
		if(getUrlVars()[param] == null) {
			
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
		
	// Click into the field 
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
	/*
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
		});	*/	
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