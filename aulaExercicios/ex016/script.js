var list = []
var div = document.querySelector('div#res')

function addNum(){
    div.innerHTML = ''
    let select = document.querySelector('select#tab')
    let input = document.querySelector('input#num')
    let option = document.createElement('option')
    let num = Number(input.value)
    if(input.value == ''){
        alert('Por favor, digite um número!')
    } else if(num < 1 || num > 100){
        alert('Número inválido!')
    } else if ( list.indexOf(num) > -1){
        alert('Número já adicionado!')
    } else {
        option.text = `Valor ${num} adicionado.`
        select.appendChild(option)
        list.push(num)
        console.log(list)
    }
    input.value = ''
    input.focus() //esse comando posiciona o cursor para digitar o valor
}

function soma(){
    let soma = 0;
    for(let i = 0; i < list.length; i++){
        soma += list[i]
    }
    return soma
}

function final(){
    if(list.length == 0){
        alert('Por favor, adicione os números')
    }else{
        div.innerHTML = `<p>Ao todo, temos ${list.length} números cadastrados.</p>`
        div.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, list)}.</p>`
        div.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, list)}.</p>`
        div.innerHTML += `<p>Somando todos os valores, temos ${soma()}.</p>`
        div.innerHTML += `<p>A média dos valores digitados é ${soma()/list.length}.</p>`
        
    }
}