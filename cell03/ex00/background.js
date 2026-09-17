const bnt = document.getElementById('btn-color');

function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

bnt.addEventListener('click', function() {
    const novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
});