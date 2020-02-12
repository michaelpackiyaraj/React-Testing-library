import React, {useState} from 'react';
import './index.css';

const Button = ({label}) => {
  const [count, setCount] = useState(0);
  const [labelVal, setLabel] = useState(label);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setTimeout( () =>{setCount(count - 1);}, 250);
  }
  const assignLabel = () =>{
    setLabel("clicked");
  }

  return (<div>
    <div data-testid="button"  onClick = {assignLabel} className='my-button'>hi {labelVal}</div>
    <button className = "my-button" onClick = {increase}>Up</button>
    <button className = "my-button" onClick = {decrease}>Down</button>
    <div data-testid = "count">{count}</div>
  </div>
  )
}

export default Button;