$(document).ready(function(){

    $('#item').keyup(function(event) {
        if (event.keyCode == 13) {
        var value = $(this).val();
         $('#list').append('<li><input type="checkbox" name="food" value="New Value">' + value + '</li>');
        }
        
    })
    $('#add').on('click', function() {
      alert('All Keyed Up')
    })

    








});

