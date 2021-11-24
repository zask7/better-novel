function validationform () {
    var nome = validation.nome.value;
    var email = validation.email.value;
    var mensagem = validation.mensagem.value;
	 if (nome == "") 
	 {
	     alert("preencha todo os campos.");
	 }else if (email == "") {
             alert("Preencha todos os campos.");
         }else if (email.lenght < 5){
             alert("Email inválido");
         }else if (mensagem == ""){
             alert("preencha todos os campos");
        }   
 } 