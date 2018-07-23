// JavaScript Document

jQuery.fn.bigstars = function() {
    return $(this).each(function() {
								 
        // Get the value
        var val = parseFloat($(this).html());
		val = Math.round(val * 2) / 2; /* To round to nearest half */
		
		// Make sure that the value is in 0 - 5 or 0 -10 range, multiply to get width
        var size = Math.max(0, (Math.min(10, val))) * 16;
        
		// Create stars holder
        var $span = $('<span />').width(size);
        
		// Replace the numerical value with stars
        jQuery(this).html($span);
    });
}
