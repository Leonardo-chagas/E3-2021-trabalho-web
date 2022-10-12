function Comentar(){
    var separador = document.createElement("hr");
    var nome = document.createElement("p");
    var email = document.createElement("p");
    var comentario = document.createElement("p");
    var deuErro = false;

    separador.id = "separador";
    nome.textContent = document.form.nome.value;
    nome.id = "nomeUsuario";
    email.textContent = document.form.email.value;
    email.id = "emailUsuario";
    comentario.textContent = document.form.comentario.value;
    comentario.id = "comentarioUsuario";

    if(nome.textContent == ""){
        var erro = document.getElementById("nameError");
        erro.style.display = "inline";
        deuErro = true;
    }
    else{
        var erro = document.getElementById("nameError");
        erro.style.display = "";
    }
    if(email.textContent == ""){
        var erro = document.getElementById("emailError");
        erro.style.display = "inline";
        deuErro = true;
    }
    else{
        var erro = document.getElementById("emailError");
        erro.style.display = "";
    }
    if(comentario.textContent == ""){
        var erro = document.getElementById("commentError");
        erro.style.display = "inline";
        deuErro = true;
    }
    else{
        var erro = document.getElementById("commentError");
        erro.style.display = "";
    }

    if(deuErro == false){
        var comentarios = document.getElementById("comentarios");

        comentarios.appendChild(separador);
        comentarios.appendChild(nome);
        comentarios.appendChild(email);
        comentarios.appendChild(comentario);

        document.form.nome.value = "";
        document.form.email.value = "";
        document.form.comentario.value = "";
    }
}