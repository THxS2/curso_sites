// Redirecionamento para Home
const inicioLink = document.querySelector('a[href="home.html"]');
if (inicioLink) {
    inicioLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'home.html';
    });
}
