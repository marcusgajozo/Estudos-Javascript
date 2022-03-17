function calcularIdade(){
    let divResultado = document.querySelector('div#res') 
    let anoNascimento = Number(document.getElementById('ano').value);
    /*let sexoHomem = document.getElementById('homem').checked;
    let sexoMulher = document.getElementById('mulher').checked;*/
    let sexoSelecionado = document.getElementsByName('sexo')//ele pega todos e coloca em uma só variável, para selecionar uma específica, use: [0], [1], etc.. isso vai depender de quantos elementos vc tem
    let anoAtual = new Date().getFullYear();
    let idadeAtual;
    if(anoNascimento < 1 || isNaN(anoNascimento) || anoNascimento > anoAtual){
        alert('Ano de nascimento inválido!')
    } else if (sexoSelecionado[0].checked == false && sexoSelecionado[1].checked == false){
        alert('Sexo não selecionado!')
    } else {
        idadeAtual = anoAtual - anoNascimento
        if (sexoSelecionado[0].checked == true){
            divResultado.innerHTML = `<strong>Detectamos um homem que atualmente tem ${idadeAtual} anos.<br>Bem-vindo ao nosso site!</strong>`
        } else {
            divResultado.innerHTML = `<strong>Detectamos uma mulher que atualmente tem ${idadeAtual} anos.<br>Bem-vinda ao nosso site!</strong>`
        }
        
    }
}