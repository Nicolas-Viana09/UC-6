function botao1() {
    var cpf = document.getElementById("cpf1").value;
    var senha = document.getElementById("senha1").value;

    if (cpf === "" || senha === "") {
        alert("Preencha os campos abaixo");

    } else { window.location.href = "index.html"; }
}
function limitarNumero(campo) {
    if (campo.value.length > 11) {
        campo.value = campo.value.slice(0, 11);
    }
}
