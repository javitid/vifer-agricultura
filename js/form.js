// wait for the DOM to be loaded 
$(document).ready(function() { 
	$( "#myForm" ).submit(function( event ) {
		//alert( "TODO: Formulario enviado!" );
		bootbox.alert("TODO: Formulario enviado!");
		event.preventDefault();
	});


}); 