import { useEffect, useState } from 'react'
import './App.css'
import {TodoContext,useTodo,TodoProvider} from './context'
import { TodoForm, TodoItem } from './components'
function App() {
  const [todos, setTodos] = useState([])

const addTodo=(todo)=>{
 setTodos((pretodo)=> [{id: Date.now(), ...todo}, ...pretodo])
}
const updateTodo=(id,todo)=>{
  setTodos((pre)=>pre.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))

}
const deleteTodo=(id)=>{
  setTodos((pre)=>pre.filter((prevtodo)=>prevtodo.id !==id)

  )
}
const toggleComplete=(id)=>{
  setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id?{...prevtodo,completed:!prevtodo.value}:prevtodo))


}


useEffect(()=>{
  const todo=JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0)
  {
    setTodos(todo);
  }
},[])

useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id}
              className='w-full'>
              <TodoItem todo={todo} />

                </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
