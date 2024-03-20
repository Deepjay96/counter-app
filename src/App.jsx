import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  function add(){
      setCount(count => count+1)
      setCount(count => count+1)
      setCount(count => count+1)
      setCount(count => count+1)
  }

  function subtract(){
      count = count -1
      
      if(count>=0){
        setCount(count)
      }

  }


  return (
    <>
         <h2>Counter {count}</h2>

         <button onClick={add}>Add Value</button>  <br /><br />
         <button onClick={subtract}>Subtract Value</button>



    </>
  )
}

export default App
