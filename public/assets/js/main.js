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
  	});

});