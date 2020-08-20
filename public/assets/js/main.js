$(function() {

	$('.change-status').on('click', function(event) {
    	const id = $(this).data('id');
		const newStatus = $(this).data('newstatus');
		const newDevouredState = { devoured: newStatus };
		$.ajax('/api/foods/' + id, {
			type: 'PUT',
			data: newDevouredState
    	}).then(() => {
        	location.reload();
      	});
  	});

  	$('.create-form').on('submit', function(event) {
    	event.preventDefault();
    	let alert = $('.alert');
    	const restaurant = $('#re').val().trim();
    	const food = $('#ca').val().trim();
    	if (!restaurant && !food) {
	    	alert.html('<i class="far fa-exclamation-circle"></i> Please enter a restaurant and food');
    	} else if (!restaurant) {
	    	alert.html('<i class="far fa-exclamation-circle"></i> Please enter a restaurant');
    	} else if (!food) {
	    	alert.html('<i class="far fa-exclamation-circle"></i> Please enter a food');
    	} else {
	    	alert.html('');
	    	const newFood = {
				restaurant: $('#re').val().trim(), 
				foodItem: $('#ca').val().trim()
			};
			$.ajax('/api/foods', {
				type: 'POST',
				data: newFood
	    	}).then(() => {
				location.reload();
	      	});
    	}
  	});

});