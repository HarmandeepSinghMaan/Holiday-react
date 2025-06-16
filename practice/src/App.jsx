import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const[student,setstudent]= useState({
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    university: "XYZ University"
  })
  
  const increaseAge = () => {
    setstudent(pre => (
     {...pre, age: pre.age + 1}))
  }

  function increase() {
    setCount(pre => pre+1)
    
  }
  function decrease() {
    setCount(pre => pre-1)
  }

  return (
    <>
   
    <h1>Student detail</h1>
    <ol>
      <li>Student Name: {student.name}</li>
      <li>Age: {student.age}</li>
      <li>Major: {student.major}</li>
      <li>University: {student.university}</li>
    </ol>
    <button onClick={increaseAge}>  Age</button>

    </>
  )
}

export default App
