//select element from html 
const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

//define function to add a new to-do item
buttontdl.addEventListener('click', (e)=> {
    e.preventDefault()
    // console.log("you clicked me")
    // const item = inputtdl.value
    // if (!item){
    //     alert(" please press money")
    // }
    // else{
    //     console.log("money pressed succesfully")
    // }

        const itemall = document.createElement('div')
        itemall.classList.add('itemall')// add 'itemall' class to div

        const item = document.createElement('p') // create a new paragraph for  the item tex
        item.classList.add('item') // add 'item' class to p element

        item.innerText = inputtdl.value
        // console.log(item)
        itemall.appendChild(item)
        listtdl.appendChild(itemall)

        const checkbutton = document.createElement('button')
checkbutton.innerHTML = "<i class='fa-solid fa-check'></i>"
checkbutton.classList.add('check-button')
itemall.appendChild(checkbutton)

// create trash button
const trashbutton = document.createElement('button')
trashbutton.innerHTML = "<i class='fa-solid fa-trash'></i>"
trashbutton.classList.add('trash-button')
itemall.appendChild(trashbutton)
inputtdl.value=""


})

listtdl.addEventListener('click', (e)=>{
    const item = e.target

    //if the check icon is clicked
    if(item.classList[0]=== 'check-button'){
    const todolist = item.parentElement
    todolist.classList.toggle('checklist')
    }
    if(item.classList[0]=== 'trash-button'){
        const todolist = item.parentElement
        todolist.remove()
    }
})