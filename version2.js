//
// var todos = [];
//
// displayTodos() {
// console.log("The current list is:", todos)}
//
// addTodos(addedElement) {
// todos.push(addedElement)
// displayTodos()}
//
// changeTodo(position, newElement){
// todos[position] = newElement
// displayTodos()
// }
//
// deleteTodos(position){
// todos.splice(position, 1);
// displayTodos();
//
//

/////////////////////

// var todoList = {
//
// todos: ["1", "2", "3"],
//
// displayTodo: function(){
//   console.log("This is the list:", this.todos)
// },
//
// addTodo: function(newElement){
//   this.todos.push(newElement)
//   // this.displayTodo;
//   console.log(this.todos)
// },
//
// changeTodo: function(position, changedElement){
//   this.todos[position] = changedElement
//   console.log(this.todos)
// },
//
// deleteTodo: function(position, replaceWith){
//     this.todos.splice(position, 1, replaceWith)
//     console.log(this.todos)
//   }
//
// }
//
// todoList.addTodo("hi1")
// todoList.addTodo("hi2")
// todoList.addTodo("hi3")
//
// //todoList.todos
//
// todoList.changeTodo(0, "Yello!")
// todoList.changeTodo(0, "Yello22!")
//
// todoList.deleteTodo(4, "This is the replacement")
// todoList.deleteTodo(2, "Position 2")


//////////VERSION 4/////////////

// var todoList = {
//
// todos: [],
//
// displayTodo: function(){
//   console.log("This is the list:", this.todos)
// },
//
// addTodo: function(newElement){
//   this.todos.push({
//     todoText: newElement,
//     completed: false
//   })
//   // this.displayTodo;
//   console.log(this.todos)
// },
//
// changeTodo: function(position, changedElementText){
//   // this.todos[position] = changedElementText
//   this.todos[position].todoText = changedElementText
//   console.log(this.todos)
// },
//
// deleteTodo: function(position, replaceWith){
//     this.todos.splice(position, 1, replaceWith)
//     console.log(this.todos)
//   },
//
//   toggleCompleted: function(){
//     var todos = this.todos[position]
//     todos.completed = !todos.completed
//     console.log(this.todos)
//
//   }
//
// }
//
// todoList.addTodo("hi1")
// todoList.addTodo("hi2")
// todoList.addTodo("hi3")
//
// //todoList.todos
//
// todoList.changeTodo(0, "Yello!")
// todoList.changeTodo(0, "Yello22!")
//
// todoList.deleteTodo(4, "This is the replacement")
// todoList.deleteTodo(2, "Position 2")




/////////////VERSION 5//////////////////////////////


// var todoList = {
//
// todos: [],
//
// displayTodo: function(){
//
// if (this.todos.length === 0){
//   console.log("Your array is empty")
//   console.log("This is an empty array:", this.todos)}
//
//   else {
//     for (var i = 0; i < this.todos.length; i++){
//
//       if (this.todos[i].completed === true){
//         console.log("(X)", this.todos[i].todoText)
//       }
//       else {
//         console.log("( )", this.todos[i].todoText)
//       }
//
//     }
//   }
//
//
// },
//
// addTodo: function(newElement){
//   this.todos.push({
//     todoText: newElement,
//     completed: false
//   })
//   // this.displayTodo;
//   console.log(this.todos)
// },
//
// changeTodo: function(position, changedElement){
//   this.todos[position].todoText = changedElement
//   console.log(this.todos)
// },
//
// deleteTodo: function(position, replaceWith){
//     this.todos.splice(position, 1, replaceWith)
//     console.log(this.todos)
//   },
//
// toggleCompleted: function(position){
//   var todo = this.todos[position]
//   todo.completed = !todo.completed
//   console.log(this.todos)
// }
//
// }
//
//
// todoList.addTodo("Element 1")
// console.log()
// todoList.addTodo("Element 2")
// console.log()
// todoList.addTodo("Element 3")
// console.log()
// todoList.toggleCompleted(0)
// todoList.toggleCompleted(2)
// todoList.displayTodo()



/////////////VERSION 6//////////////////


// 
// var todoList = {
//
// todos: [],
//
// displayTodo: function(){
//
// if (this.todos.length === 0){
//   console.log("Your array is empty")
//   console.log("This is an empty array:", this.todos)}
//
//   else {
//     for (var i = 0; i < this.todos.length; i++){
//
//       if (this.todos[i].completed === true){
//         console.log("(X)", this.todos[i].todoText)
//       }
//       else {
//         console.log("( )", this.todos[i].todoText)
//       }
//
//     }
//   }
//
//
// },
//
// addTodo: function(newElement){
//   this.todos.push({
//     todoText: newElement,
//     completed: false
//   })
//   // this.displayTodo;
//   console.log(this.todos)
// },
//
// changeTodo: function(position, changedElement){
//   this.todos[position].todoText = changedElement
//   console.log(this.todos)
// },
//
// deleteTodo: function(position, replaceWith){
//     this.todos.splice(position, 1, replaceWith)
//     console.log(this.todos)
//   },
//
// toggleCompleted: function(position){
//   var todo = this.todos[position]
//   todo.completed = !todo.completed
//   console.log(this.todos)
//   },
//
//   toggleAll: function(){
//
//     var todo = this.todos;
//     var counter = 0;
//
//     for (var i = 0; i < todo.length; i++){
//
//       if (todo[i].completed === true){
//         counter++
//       }
//     }
//
//     if (counter === todo.length) {
//       for (var i = 0; i < todo.length; i++){
//         todo[i].completed = false
//       }
//     }
//     else {
//       for (var i = 0; i < todo.length; i++){
//         todo[i].completed = true
//       }
//     }
//
//
//     this.displayTodo()
//   }
// }
//
//
//
// todoList.addTodo("Element 1")
// console.log()
// todoList.addTodo("Element 2")
// console.log()
// todoList.addTodo("Element 3")
// console.log()
// todoList.toggleCompleted(0)
// //todoList.toggleCompleted(1)
// //todoList.toggleCompleted(2)
// todoList.displayTodo()
// console.log()
// todoList.toggleAll()



//////////////////VERSION 7 JS//////////////////////

var todoList = {

todos: [],

displayTodo: function(){

if (this.todos.length === 0){
  console.log("Your array is empty")
  console.log("This is an empty array:", this.todos)}

  else {
    for (var i = 0; i < this.todos.length; i++){

      if (this.todos[i].completed === true){
        console.log("(X)", this.todos[i].todoText)
      }
      else {
        console.log("( )", this.todos[i].todoText)
      }

    }
  }
},

addTodo: function(newElement){
  this.todos.push({
    todoText: newElement,
    completed: false
  })
  // this.displayTodo;
  console.log(this.todos)
},

changeTodo: function(position, changedElement){
  this.todos[position].todoText = changedElement
  console.log(this.todos)
},

deleteTodo: function(position, replaceWith){
    this.todos.splice(position, 1, replaceWith)
    console.log(this.todos)
  },

toggleCompleted: function(position){
  var todo = this.todos[position]
  todo.completed = !todo.completed
  console.log(this.todos)
  },

toggleAll: function(){

    var todo = this.todos;
    var counter = 0;

    for (var i = 0; i < todo.length; i++){

      if (todo[i].completed === true){
        counter++
      }
    }

    if (counter === todo.length) {
      for (var i = 0; i < todo.length; i++){
        todo[i].completed = false
      }
    }
    else {
      for (var i = 0; i < todo.length; i++){
        todo[i].completed = true
      }
    }


    this.displayTodo()
  }
}

todoList.addTodo("Numba 1")
todoList.addTodo("Numba 2")
todoList.addTodo("Numba 3")
todoList.toggleCompleted(1)

var displayTodoButton = document.getElementById('displayTodoButton')
console.log(displayTodoButton)

displayTodoButton.addEventListener('click', function(){
  todoList.displayTodo();
})

var toggleAllButton = document.getElementById("toggleAllButton")

toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
})

//////////////VERSION 7 HTML////////////////////

<!doctype html>

<html>
  <head>
    <link rel="stylesheet" href="lib/style.css">

  </head>

  <body>
    <h1>Todo List</h1>
    <button id = "displayTodoButton">Display Todos</button>
    <button id = "toggleAllButton">Toggle All</button>



    <script src="lib/script.js"></script>

  </body>
</html>
