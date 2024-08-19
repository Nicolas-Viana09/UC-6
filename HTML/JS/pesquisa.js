
document.getElementById('pesquisa').addEventListener('keydown', function(evento) {
    if (evento.keyCode === 13) { 
        evento.preventDefault(); 
        document.getElementById('booksContainer').scrollIntoView({ behavior: 'smooth' }); 
    }
});
function pesquisar() {
    let valorPesquisa = document.getElementById('pesquisa').value.toLowerCase();
    let livros = document.querySelectorAll('.livro');
    
    livros.forEach(function(livro) {
        let titulo = livro.getAttribute('titulo').toLowerCase();
        if (titulo.includes(valorPesquisa)) {
            livro.classList.remove('hidden');
        } else {
            livro.classList.add('hidden');
        }
    });
    
    document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('pesquisa').addEventListener('input', pesquisar);
document.getElementById('pesquisa').addEventListener('keydown', function(evento) {
    if (evento.keyCode === 13) { 
        evento.preventDefault();
        pesquisar();
    }
});

document.getElementById('btnPesquisar').addEventListener('click', function(evento) {
    evento.preventDefault();
    pesquisar();
});