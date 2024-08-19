function adicionarLivros() {
    var totalLivros = document.getElementById('total-livros');
    var imagenova = document.querySelector('.imagenova');
    
    
    var checkmarcada = document.querySelectorAll('.checkbox:checked');
    if (checkmarcada.length === 0) {
        alert("Selecione pelo menos uma checkbox para adicionar livros.");
        return;
    }

    checkmarcada.forEach(checkbox => {
        var img = checkbox.nextElementSibling.querySelector('img').cloneNode(true);
        imagenova.appendChild(img);
        checkbox.style.display = 'none';
        checkbox.nextElementSibling.style.display = 'none';
    });

    totalLivros.textContent = parseInt(totalLivros.textContent) + checkmarcada.length;

    checkmarcada.forEach(checkbox => checkbox.checked = false);
}
