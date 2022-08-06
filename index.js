const container = document.querySelector('.container')
const card = document.querySelector('.card')
const cardTitle = document.querySelector('.card-title')
const cardBody = document.querySelector('.card-body')
const input = document.querySelector('input')
const button = document.querySelector('button')
const todoForm = document.querySelector('form')
const lists = document.querySelector('ul')
const message = document.querySelector('.message')


const showMessage = (text, style) => {
    message.textContent = text
    message.classList.add(style)
     
    setTimeout(() => {
        message.textContent = ''
        message.classList.remove(style)
    },1000)


}
const createTodo = ( inputValue, inputId ) => {
     const todoElement = document.createElement('li')
     todoElement.id = inputId
     todoElement.innerHTML = `
     <span>${inputValue}</span>
     <span> <button id="deletebtn">detete</button></span>
     `
     todoElement.classList.add('listyle')
    lists.appendChild(todoElement)

const deleteBtn = todoElement.querySelector("#deletebtn")

const deleteTodo = (e) => {
 const dTodo = e.target.parentElement.parentElement
    lists.removeChild(dTodo)
    showMessage('Todo Is Deleted', "dstyle")
   }
deleteBtn.addEventListener('click', deleteTodo)


}


const getTodos = () => {
    return localStorage.getItem('mytodos') ? JSON.parse( localStorage.getItem('mytodos')) : []
}

const addTodo = (e) => {
    e.preventDefault()
    const inputValue = input.value
    const inputId = Date.now().toString()
   
    showMessage('Todo Is Added.','style')
     createTodo(inputValue, inputId)

     const todos = getTodos()
     todos.push({inputId, inputValue })
     localStorage.setItem('mytodos', JSON.stringify(todos) )
     input.value = ""



}



todoForm.addEventListener('submit', addTodo )
