document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os links dentro do menu
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    // Seleciona o elemento do menu colapsável
    const navbarCollapse = document.querySelector('#navbarNav');
    // Seleciona o botão hamburguer
    const navbarToggler = document.querySelector('.navbar-toggler');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove a classe .show para fechar o menu
            navbarCollapse.classList.remove('show');
            // Garante que o estado do botão hamburguer seja resetado
            navbarToggler.setAttribute('aria-expanded', 'false');
        });
    });
});