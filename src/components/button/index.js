import React from 'react';
import './index.css';

const Button = ({label}) => {
  return <div data-testid="button" className='my-button'>hi {label}</div>
}

export default Button;