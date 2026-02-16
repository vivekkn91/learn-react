import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Current count: <strong>{count}</strong></p>
      <div style={{display:'flex',gap:8}}>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
