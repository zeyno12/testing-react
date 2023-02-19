import React, {useState} from 'react';
// import "../../../scss/pages/_contanct.scss"
const Contact =()=>{

    const [counter,setCounter]=useState(1)

    const incrementCounter=()=>{
    setCounter((prevCounter)=>prevCounter +1)
    }
    const decrementCounter=()=>{
    setCounter((prevCounter)=>prevCounter -1)
    }
return (
    <div className='counter'>
        <button data-testid="increment" onClick={incrementCounter}>+</button>
        <p data-testid="counter">{counter}</p>
        <button data-testid="decrement" onClick={decrementCounter}>-</button>
    </div>
    )
}
export default Contact;