/*
var = Escopo global, pode ser utilizado em qualquer lugar do arquivo Javascript.
let = Escopo local, só funciona onde foi declarado, dentro das chaves.
const = Escopo global, constante, não muda o seu valor.

Case Sensitive = reconhece letras maiusculas e minusculas.

Como acessar o DOM:
por Tag: getElementByTagName()
por Id: getElementyById()
por Nome: getElementyByName()
por Classe: getElementyByClassName()
por Seletor: querySelector()

se for uma class usa o . se for um id usa #

window e document no caso dos let abaixo tanto faz.
Tem que começar com letra e tem que ser minuscula.

para deixar uma barra colorida no aviso/alerta:
 txtAssunto.style.backgroundColor = "red"

Para mudar o tamanho da barra onde preenche o nome na página contato
nome.style.width = "100%"
email.style.width = "100%"

*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")
let about = document.querySelector('#about')
let areaProfile = document.querySelector('#area')

nome.style.width = "100%"
email.style.width = "100%"


function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    
    if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "green"
        nomeOK = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = "red"
    }else {
        txtEmail.innerHTML = "E-mail válido!"
        txtEmail.style.color = "green"
        emailOK = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres!"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else {
        txtAssunto.style.display = "none"
        assuntoOK = true
    }
}

function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert ("Formulário enviado com sucesso!")
    }else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}
    
async function getApiGithub() {
    try {
        const dataProfile = await fetch('https://github.com/RitaAlmeidah')
        const profile = await dataProfile.json()

        let content = `
            <img src="${profile.avatar_url}" alt="Foto do Perfil do Github - ${profile.name}">
            <article class="section_content">
                <h1>Who am I?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates incidunt
                    inventore rem error harum blanditiis accusamus vitae, minus fugit consequatur? Dolorum maiores magni
                    deleniti modi sit laudantium totam!
                </p>

                <div class="section_github flex">
                    <a class="btn" href="${profile.html_url}">Github</a>
                    <p>${profile.followers} Seguidores</p>
                    <p>${profile.public_repos} Repositórios</p>
                </div>
            </article>
        `
        about.innerHTML += content

    } catch (error) {
        console.log(error)
    }
}

function changeTheme() {
    document.body.classList.toggle('dark-theme')
}

getApiGithub()