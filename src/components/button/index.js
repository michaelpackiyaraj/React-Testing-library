import React, {useState} from 'react';
import './index.css';

const Button = ({label}) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setTimeout( () =>{setCount(count - 1);}, 250);
  }

  return (<div>
    <div data-testid="button" className='my-button'>hi {label}</div>
    <button className = "my-button" onClick = {increase}>Up</button>
    <button className = "my-button" onClick = {decrease}>Down</button>
    <div data-testid = "count">{count}</div>
  </div>
  )
}

export default Button;