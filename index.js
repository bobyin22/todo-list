// 初始變數
let list = document.querySelector('#my-todo')
let addBtn = document.querySelector('#add-btn')
let input = document.querySelector('#new-todo')

// 資料
const todos = ['華固天鑄', '松濤苑', 'Dimond Tower', '陶朱隱園', '潤泰敦峰']
for (let todo of todos) {
  addItem(todo)
}


// 函式
function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}



// 1. 加入 new todo
addBtn.addEventListener('click', function() {
  let inputValue = input.value;
  
  if(inputValue.length > 0){
    addItem(inputValue)
  }
})

// 2.刪除 todo
list.addEventListener('click', function(event) {
 let target = event.target
 
 if(target.classList.contains('delete')) {
   let parentElement = target.parentElement
   parentElement.remove()
 }
  
  if(target.tagName === 'LABEL') {
    target.classList.toggle('checked')
  }
  
})
