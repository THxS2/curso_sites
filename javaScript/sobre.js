// Redirecionamento para Home
const inicioLink = document.querySelector('a[href="home.html"]');
if (inicioLink) {
    inicioLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'home.html';
    });
}

// Redirecionamento para Cadastro
const cadastroBtn = document.querySelector('.btn-destaque');
if (cadastroBtn) {
    cadastroBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'cadatro.html';
    });
}