let num = [5,8,2,9,3]
num[5] = 7 // cria a posição que não existe e insere o valor
num.push(6) // para colocar no final do vetor
console.log(num)
num.length // atributo, para ver o tamanho do vetor
console.log('O valor de elementos é: ' + num.length)
num.sort()// ordena o vertor de maneira crescente

console.log(num)
let list = 'Vetor:';

console.log('\nUsando for para arrys:')
for(let i = 0; i < num.length; i++){
    list += ` ${num[i]},`
}
console.log(list)

console.log('\nUsando in para arrys e objetos:')
for(let i in num){
    console.log(num[i])
}

/*para localizar um elemento em um array
existe a função indexOf() que retorna o indice do elemento*/
console.log('\nLocalizando o valor 9 no vetor:')
console.log(`O indice no vetor é: ${num.indexOf(9)}`)
console.log(num[num.indexOf(9)]);