import React from 'react'
import './App.css'
import { useState  } from 'react';
import * as math from 'mathjs';
function App() {
  const [input,setInput]=useState("");
  /*const [previous,setPrevious]=useState("");
  const [current,setCurrent]=useState("");
  const [operator,setOperator]=useState("");*/
  const addClick=(e)=>{
    setInput(input.concat((e.target.name)));
  }
  const handleClear=()=>{
    setInput("");
  }
  /*const addValue=()=>{
    setPrevious(input);
    setInput("");
    setOperator("plus");
  }
  const subValue=()=>{

  }
  const mulValue=()=>{

  }
  const divValue=()=>{

  }*/
  const handleEqual=()=>{
    /*setCurrent(input);
    if(operator === "plus")
    {
      var k=(parseInt(current)+parseInt(previous));
      setInput(k.toString());
      setOperator("");
    }*/
    setInput(math.evaluate(input));
  }
  return (
    <div>
    <h1>calculator</h1>
    <div className="container">
      <form>
        <input type="text" value={input}/>

      </form>
      <div className="keypad">
      <button name="7" onClick={addClick}>7</button>
      <button name="8" onClick={addClick}>8</button>
      <button name="9" onClick={addClick}>9</button>
      <button name="4" onClick={addClick}>4</button>
      <button name="5" onClick={addClick}>5</button>
      <button name="6" onClick={addClick}>6</button>
      <button name="1" onClick={addClick}>1</button>
      <button name="2" onClick={addClick}>2</button>
      <button name="3" onClick={addClick}>3</button>
      <button name="+" onClick={addClick}>+</button>
      <button name="-" onClick={addClick}>-</button>
      <button name="*" onClick={addClick}>*</button>
      <button name="/" onClick={addClick}>/</button>
      <button className="clear" onClick={handleClear}>clear</button>
      <button className="equal" onClick={handleEqual}>=</button> 
      </div>
    </div>
    </div>
  )
}

export default App
