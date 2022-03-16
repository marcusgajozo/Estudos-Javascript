var div = document.querySelector('div#res');
var divImg = document.querySelector('div#png')
var resultadoHora = new Date().getHours();
div.innerHTML = `<u><strong>Agora são ${resultadoHora} horas</strong></u>`
if(resultadoHora < 12){
    divImg.innerHTML = '<img src="img/manha.png" alt="imagem de manhã">';
} else if (resultadoHora < 18) {
    divImg.innerHTML = '<img src="img/tarde.png" alt="imagem de tarde">';
    document.body.style.backgroundColor = 'rgb(84, 116, 143)';
} else{
    divImg.innerHTML = '<img src="img/noite.png" alt="imagem de noite">';
    document.body.style.backgroundColor ='rgb(51, 72, 88)';
}
