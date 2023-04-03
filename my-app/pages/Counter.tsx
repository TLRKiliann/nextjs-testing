'use client';

import { useState } from 'react'

const Counter = () => {

  const [number, setNumber] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const increment = () => {
    setNumber(previous => previous + 1);
  }

  const decrement = () => {
    setNumber(previous => previous - 1);
  }

  const enter = () => {
    setNumbers((prev) => [...prev, number]);
    setNumber(0);
  }

  return (
    <div>
      <p data-testid="number">{number}</p>
      <p>{numbers.join(',')}</p>

      <button type="button" onClick={increment}>
        Click +
      </button>
      <button type="button" onClick={decrement}>
        Click -
      </button>

      <button type="button" onClick={enter}>
        Enter
      </button>
    </div>
  )
 }
 export default Counter