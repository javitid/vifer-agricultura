// wait for the DOM to be loaded 
$(document).ready(function() { 
	$( "#myForm" ).submit(function( event ) {
		event.preventDefault();

		$.ajax({
            url: "./php/contact.php",
            type: "POST",
            data: $(this).serialize(),

            success: function(data){
                bootbox.alert(data);
            },
            error: function(){
            	bootbox.alert("Error al enviar formulario!");
            }
        });
	});
}); 