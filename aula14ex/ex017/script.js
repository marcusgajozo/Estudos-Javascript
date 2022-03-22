function tabuada(){
    let num = document.querySelector('input#num').value;
    let tab = document.querySelector('select#seltab')
    if (num == ''){
        alert('Por favor, digite um número!')
    }else{
        tab.innerHTML = ''
        num = Number(num);
        for(let i = 0; i <= 10; i++){
            //criando elemento em javascript
            let item = document.createElement('option')
            item.text = `${num}x${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}