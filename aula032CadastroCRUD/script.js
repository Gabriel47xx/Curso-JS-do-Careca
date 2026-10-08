'use strict'

const openModal = () => {
    document.getElementById('modal').classList.add('active')
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
    clearFields()
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (db_client) => localStorage.setItem("db_client", JSON.stringify(db_client))

//CRUD - Create Read Update Delete


//CRUD - Create
const createClient = (client) => {
    const db_client = getLocalStorage()
    db_client.push(client)
    console.log(db_client)
    setLocalStorage(db_client)
}

//CRUD - Read
const readClient = () => getLocalStorage() 

//CRUD - Update
const updateClient = (index, client) => {
     const db_client = readClient()
     db_client[index] = client
     setLocalStorage(db_client)
}

//CRUD - Delete
const deleteClient = (index) => {
    const db_client = readClient()
    db_client.splice(index, 1)
    setLocalStorage(db_client)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}


//Interação com o layout
const saveClient = () => {
    if (isValidFields()) {
        const cliente = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(cliente)
        closeModal()
        alert('Cliente Salvo')
        console.log('Cadastrando Cliete...')
        updadeTable()
    }
}

const clearFields = () => {
    document.getElementById('nome').value = null
    document.getElementById('email').value = null
    document.getElementById('celular').value = null
    document.getElementById('cidade').value = null
}


function createRow(client) {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
            <td>${client.nome}</td>
            <td>${client.email}</td>
            <td>${client.celular}</td>
            <td>${client.cidade}</td>
            <td>
                <button type="button" class="button green">Editar</button>
                <button type="button" class="button red">Excluir</button>
            </td>
         `
    document.querySelector('#tb_client > tbody').appendChild(newRow)
}

function updadeTable() {
    const db_client = readClient()
    clearTable()
    db_client.forEach(createRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tb_client > tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}


// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)


document.getElementById('modal-close')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)
