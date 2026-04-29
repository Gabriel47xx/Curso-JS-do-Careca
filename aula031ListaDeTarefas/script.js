let lista = document.querySelector('#lista')
let inputTarefa = document.querySelector('#inputTarefa')



inputTarefa.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addTarefa()
    }
})

function addTarefa(){
    if(inputTarefa.value.trim() === '') return; // Evita criar tarefas vazias

    let li = document.createElement('li')
    li.innerHTML = `
                    <input type="checkbox">
                    <span>${inputTarefa.value}</span>                   
                    <input type="button" value="X" class="btnDelet">
                `;
                
    // Seleciona o botão de deletar que acabou de ser criado dentro deste li
    let btnDelet = li.querySelector('.btnDelet')
    
    // Adiciona o evento de clique para remover este li da lista
    btnDelet.addEventListener('click', function() {
        li.remove()
    })

    lista.appendChild(li)
    inputTarefa.value = ''
}





