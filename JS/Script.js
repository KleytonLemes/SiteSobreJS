let prevScrollPos = window.pageYOffset; // Armazena a posição anterior de scroll
let header = document.querySelector(".cabeca");

// Função para manipular o evento de scroll
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    // Verifica se o usuário está rolando para baixo e se a posição atual de rolagem é maior que a altura da barra de menu
    if (prevScrollPos < currentScrollPos && currentScrollPos > header.clientHeight) {
        // Oculta a barra de menu
        header.style.top = "-220px"; // Mude para a altura da barra de menu
    } else {
        // Mostra a barra de menu
        header.style.top = "0";
    }

    prevScrollPos = currentScrollPos; // Atualiza a posição anterior de scroll
}

const menu = document.querySelector(".cabeca");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    menu.style.visibility = "hidden";
  } else {
    menu.style.visibility = "visible";
  }
});



const container = document.querySelector('.container');
const divOculta = document.querySelector('.divOculta');

container.addEventListener('mouseenter', () => {
  divOculta.style.opacity = '1';
});

container.addEventListener('mouseleave', () => {
  divOculta.style.opacity = '0';
});

