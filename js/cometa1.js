// cometa.js

//Trata do botão de retorno ao tôpo
// Scroll to Top
function scrollToTop() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight || 80; // Altura da navbar ou valor padrão
    window.scrollTo({
        top: navbarHeight, // Desloca até a altura da navbar
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
//-----------------------------------------------------------------------


//Trata da navegação do menu
//Trata da navegação do menu
// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

//-------------------------------------------------------------

