'use strict'

const openModal = () => {
    document.getElementById('modal').classList.add('active')
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

const tempClient = {
    nome: "YURI",
    email: "xaulimMatadorDePorco@gmail.com",
    celular: "4002-8922",
    cidade: "Passa Quato"
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

isValidFields = () => {    
    
}

//Interação com o layout
const saveClient = () => {
    if (isValidFields()) {
        console.log ("Cadastrando cliente...")  
           
    }
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
