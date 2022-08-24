let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')

function enviar(){
    alert("Olá " + nome.value + ", obrigado pelo feedback. O seu e-mail " + email.value + " foi cadastrado")
}