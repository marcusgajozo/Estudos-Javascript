function tabuada(){
    let num = document.querySelector('input#num').value;
    let tab = document.querySelector('select#seltab')
    if (num == ''){
        alert('Por favor, digite um número!')
    }else{
        num = Number(num);
        for(let i = 0; i <= 10; i++){
            console.log(`${num}x${i} = ${num*i}`)
        }
    }
    


}