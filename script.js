function animaTexto (texto) {
    const arrayTexto = texto.innerHTML.split('');
    texto.innerHTML = '';
    arrayTexto.forEach((letra, i) => {
        setTimeout(() => {
            texto.innerHTML += letra;
        }, 75*i)
    });
}

const titulo = document.querySelector('.typing');

animaTexto(titulo);


