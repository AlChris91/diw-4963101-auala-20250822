const email = usuario.email;
const senha = usuario.senha;

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value

    if (emailInformado === email) {
        alert("Email informado corretamente");
        if (senhaInformada === senha) {
            // alert("Senha informada corretamente");
            window.location = "home.html";
        } else {
            // alert("Senha incorreta");
            
        }
    } else {
        // alert("Email incorreto");
    }

}