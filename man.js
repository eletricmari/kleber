let nomeUsuario = "";
let elemento = document.querySelectorAll(nomeUsuario);

while(nomeUsuario==""){
    prompt('Qual o seu nome')
}

if(nomeUsuario==null){
    elemento.textContent = "seja muito bem vindo";
}else{
    elemento.textContent= nomeUsuario;
}
