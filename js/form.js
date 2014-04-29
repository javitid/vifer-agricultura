// wait for the DOM to be loaded 
$(document).ready(function() { 
	$( "#myForm" ).submit(function( event ) {
		event.preventDefault();

		$.ajax({
            url: "./php/contact.php",
            type: "POST",
            data: $(this).serialize(),

            success: function(data){
                bootbox.alert("Formulario enviado", function() {
                    console.log("Formulario enviado: " + data);
                });
            },
            error: function(){
                bootbox.alert("Error al enviar formulario!", function() {
                    console.log("Error al enviar formulario!");
                });
            }
        });
	});
}); 