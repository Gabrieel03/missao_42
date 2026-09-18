$(document).ready(function () {
    const $btncolor = $('#btn-color');

    function gerarCorAleatoria(){
        const letras = '0123456789ABCDEF';
        let cor = '#';
        for (let i = 0; i < 6; i++) {
            cor += letras[Math.floor(Math.random() * 16)];
        }
        return cor;
    }
    
    $btncolor.on('click', function () {
        const novaCor = gerarCorAleatoria();
        document.body.style.backgroundColor = novaCor;
        return cor;
    })
})