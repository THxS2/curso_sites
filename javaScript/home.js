// Rerediocionamento para a página Sobre
const sobreLink = document.getElementById('Sobre-link');
if(sobreLink) {
    sobreLink.addEventListener('click', function() {
        window.location.href = 'sobre.html';
    });
}

