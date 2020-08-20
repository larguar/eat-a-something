$(function() {
	
	$('.change-status').on('click', event => {
		const id = $(this).data('id');
		const newStatus = $(this).data('newstatus');	
		const newEatenState = {
			eaten: newStatus
		};
		$.ajax('/api/foods/' + id, {
			type: 'PUT',
			data: newEatenState
		}).then(function() {
			console.log('changed status to', newStatus);
			location.reload();
		});
	});

	$('.create-form').on('submit', e => {
		e.preventDefault();	
		const newFood = {
			restaurant: $('#re').val().trim(),
			foodItem: $('#ca').val().trim(),
			eaten: $('[name=eaten]:checked').val().trim()
		};
		$.ajax('/api/foods', {
			type: 'POST',
			data: newFood
		}).then(function() {
			console.log('created new food');
			location.reload();
		});
	});
  
	$('.delete-food').on('click', event => {
		const id = $(this).data('id');
		$.ajax('/api/foods/' + id, {
			type: 'DELETE'
		}).then(function() {
			console.log('deleted food', id);
			location.reload();
		});
	});
  
});
