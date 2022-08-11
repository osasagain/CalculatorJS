import { useState } from 'react';
import * as math from 'mathjs';

import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {

  const[text, setText] = useState("");
  const[result, setResult] = useState("");

  const addToText =(val) =>{
      setText((text) => [...text, val + ""]);
  };

  const calResult = () => {
    const Input = text.join("")

    setResult(math.evaluate(Input));
  }

  const clearInput =() =>{
    setText("");
    setResult("");
};
  const delInput =() =>{
  let newtext = Array.from(text)
  console.log(newtext);
  newtext.pop()
  setText(newtext)
};

  const buttonColor ="rgba(198, 206, 237, .8)"

  return (
    <div className="App">
      <div className='calc-wrapper'>
          <Input text={text} result={result}/>
        <div className='row'>
          <Button symbol="(" color={buttonColor} handleClick={addToText}/>
          <Button symbol=")" color={buttonColor} handleClick={addToText}/>
          <Button symbol="CLR" color={buttonColor} handleClick={clearInput}/>
          <Button symbol="/" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="*" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="-" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button symbol="<=" handleClick={()=>delInput()}/>
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" color="green" white ="white" handleClick={calResult}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
