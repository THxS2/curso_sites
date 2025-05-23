// Rerediocionamento para a página Sobre
const sobreLink = document.getElementById('Sobre-link');
if(sobreLink) {
    sobreLink.addEventListener('click', function() {
        window.location.href = 'sobre.html';
    });
}

// Rerediocionamento para a página Cadastro
const cadastroLink = document.getElementById('.btn-destaque');
if(cadastroBtn){
    cadastroBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        window.location.href = 'cadastro.html';
    });
}