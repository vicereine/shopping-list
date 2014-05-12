$(document).ready(function(){
		
	$("#erase").on('click', function() {
		$(this).remove();

})

    $('#item').keyup(function(event) {
        if (event.keyCode == 13) {
        var value = $(this).val();
         $('#list').append('<li class="food"><input type="checkbox" name="food" value="New Value">' + value + '<button id="erase">X</button></li>');
		 $('#add').on('click', function() {
    	 $('#list').append('<li class="food"><input type="checkbox" name="food" value="New Value">' + value + '<button id="erase">X</button></li>');
		})
        } 
		

		$(".food").click(function() {
		$(this).toggleClass("strike");
		})




	})

});

