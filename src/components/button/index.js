import React from 'react';
import './index.css';

export default function Button ({label}) {
  return <div data-testid="button" className='my-button'>{label}</div>  
}