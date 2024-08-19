function enviar() {
    var form1 = document.getElementById('form1').value;
    var form2 = document.getElementById('form2').value;
    var form3 = document.getElementById('form3').value;

    if (form1 === "" || form2 === "" || form3 === "") {
        alert("Preencha todos os campos antes de enviar");
        return; 
    }

    alert("Formulário enviado com sucesso!");
    document.getElementById('form1').value = "";
    document.getElementById('form2').value = "";
    document.getElementById('form3').value = "";
}
