import { useState } from 'react'
import  './App.css'

function App() {


  const [counter, setCounter] = useState(0)
  
  // let counter = 5

  
  const addValue = () => {
    if (counter < 2){
      setCounter(counter+ 1);
      setCounter(counter+ 1);
      setCounter(counter+ 1);
      setCounter(prev => {prev + 1})
      console.log("value incremented", counter);
    }
    
  }

  const delValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log('value decremented', counter);
    }
    else{
      console.log('value is already 0');
    }
  }

  return (
    <>
     <h1>Counter</h1>
     <h3>Counter Value: {counter}</h3>
    
     <button
     onClick={addValue} >Increment</button>
     <button
     onClick={delValue}>Decrement</button>
    
    <h5>The Current Counter value:{counter}</h5>
    </>
  )
}

export default App
