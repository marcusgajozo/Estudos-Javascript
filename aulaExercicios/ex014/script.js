function carregar(){
    var div = document.querySelector('div#res');
    var foto = document.querySelector('img#foto')
    var hora = //new Date().getHours();
    div.innerHTML = `<u><strong>Agora são ${hora} horas</strong></u>`
    if(hora < 12){
        foto.src = 'img/manha.png'
    } else if (hora < 18) {
        foto.src = 'img/tarde.png'
        document.body.style.backgroundColor = 'rgb(84, 116, 143)';
    } else{
        foto.src = 'img/noite.png';
        document.body.style.backgroundColor ='rgb(51, 72, 88)';
    }
}
