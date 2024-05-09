import { useState } from 'react'
//import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)
  
  //let counter = 5

  const addValue = () =>{
    //counter = counter+1
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)


    /*
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    */


    console.log("clicked", counter);
  }

  const removeValue = () =>{
    //console.log("clicked", counter);
    //counter = counter-1
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React Series</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>

      <button onClick={removeValue}>Remove Value {counter}</button>

    </>
  )
}

export default App
