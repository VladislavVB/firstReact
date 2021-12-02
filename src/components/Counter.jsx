import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  const likePlus = () => {
    setCount(count + 1)
  }

  const likeMinus = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={likePlus}>Plus</button>
      <button onClick={likeMinus}>Minus</button>
    </div>
  )
}

export default Counter;