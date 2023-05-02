/* testando o Javascript em arquivo separado */
var num = document.getElementById('txtn1')
//var num2 = document.getElementById('txtn2')
//tem como fazer de outro jeito
var num2 = document.querySelector('input#txtn2')
var resultado = document.getElementById('res')
var soma
function somar(){
    soma = Number(num.value) + Number(num2.value)
    resultado.innerHTML = `A soma entre ${num.value} e ${num2.value} é <strong>${soma}</strong>`
    num.value=''
    num2.value=''
}