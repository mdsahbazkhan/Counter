import { useState } from 'react'
import './App.css'

function App() {
  const[counter,setCounter] = useState(0)
//   
// const addValue = () =>{
//   setCounter(counter + 1)
//    // counter = counter + 1
//   // setCounter(counter )
// }
const addValue = () => {
  if (counter >= 30) {
    return;
  }
  setCounter(counter + 1); 
  // For interview question
  // setCounter(prevCounter =>prevCounter + 1);
  // setCounter(prevCounter =>prevCounter + 1);
  // setCounter(prevCounter =>prevCounter + 1);
  // setCounter(prevCounter =>prevCounter + 1);
};
const removeValue = () => {
  if (counter === 0) {
    return;
  }
  setCounter(counter - 1); 
};
  return (
    <>
    
    <h1>Counter value: 
      {counter}
    </h1>
    <button    onClick={addValue}>Add value:{counter}</button>
    <br/>
    <button  onClick={removeValue}>remove value:{counter}</button>
    </>
  )
}

export default App
