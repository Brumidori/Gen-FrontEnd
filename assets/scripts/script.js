let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector("#mapa")

/* Case Sensitive = reconhece letras maiusculas e minusculas
acessar por Tag: getElementByTagName()
por classe: getElemntByClassName()
por seletor: querySelector()
*/

nome.style.width = '100%'
email.style.width = '100%'
let nomeOK = false
let emailOK = false
let assuntoOk = false

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML= 'Nome inválido';
        txt.style.color = 'red';
    } else {
        txt.innerHTML= 'Nome válido';
        txt.style.color = 'green';
        nomeOK = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML= 'E-mail inválido';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML= 'E-mail válido';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML= 'O limite é de 100 caracteres ';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = block;
    } else {
        txtAssunto.innerHTML= 'Texto válido';
        txtAssunto.style.color = 'green';
        assuntoOk = true;
    }
}

function enviar(){
    if (nomeOK == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha corretamente o formulário antes de enviar... ')
    }
}

function mapaZoom (){
    mapa.style.width = '800px'
    mapa.style.hight = '600px'
}

function mapaNormal (){
    mapa.style.width = '400px'
    mapa.style.hight = '250px'
}