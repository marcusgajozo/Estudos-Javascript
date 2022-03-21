function contar(){
    let numberIni = Number(document.querySelector('input#numIni').value);
    let numberFin = Number(document.getElementById('numFin').value);
    let numberPas = Number(document.querySelector('input#numPas').value);
    let resultado = document.getElementById('res')
    if(numberIni == 0 || numberFin == 0 || numberPas == 0){
        resultado.innerHTML = 'Impossível contar!'
        //alert('Preecha todos os campos!')
    }else{
        if(numberPas <= 0){
            alert('Passo inválido! Considerado 1 como passo.')
            numberPas = 1
        }
        resultado.innerHTML = '<strong>Contando:</strong>'
        if(numberIni <= numberFin){
            //contagem crescente 
            while(numberIni <= numberFin){
                resultado.innerHTML += `<strong> ${numberIni} &#128004</strong>`
                numberIni += numberPas
            } 
        } else {
            //contagem regressiva
            while(numberIni >= numberFin){
                resultado.innerHTML += `<strong> ${numberIni} &#128004</strong>`
                numberIni -= numberPas
            } 
        }
        
    }
    
}