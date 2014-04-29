<?php 
// check if fields passed are empty 

 if(empty($_POST['nombre'])   ||    
    empty($_POST['email'])  ||
    empty($_POST['telefono'])||
    empty($_POST['comentarios'])||
    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))    
  { 	
       echo "No se han pasado correctamente los argumentos!"; 	
	   return false;    
  } 
	
  $name = $_POST['nombre']; 
  $email_address = $_POST['email'];
  $phone = $_POST['telefono']; 
  $message = $_POST['comentarios']; 	 

 // create email body and send it	 
 $to = 'javitid@gmail.com'; 
 // put your email 
 $email_subject = "Contacto desde la web"; 
 $email_body = "Has recibido un nuevo mensaje! \n\n". 				  
                   "Nombre: $name \n". 				  
                   "Email: $email_address\nTelefono: $phone \nComentarios: \n  $message"; 
 $headers = "From: $email_address\n"; 
 $headers .= "Reply-To: $email_address";	 

 mail($to,$email_subject,$email_body,$headers); 
 return true;			 
?>