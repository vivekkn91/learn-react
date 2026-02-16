import React, { useState } from 'react';

export default function TodoList() {
  const [items, setItems] = useState(['Learn JSX', 'Build a component', 'Play with props']);
  const [text, setText] = useState('');
  const add = () => {
    if (!text.trim()) return;
    setItems(s => [text.trim(), ...s]);
    setText('');
  };
  return (
    <div>
      <div style={{display:'flex',gap:8,marginBottom:8}}>
        <input placeholder="New lesson (e.g. Hooks)" value={text} onChange={e=>setText(e.target.value)} />
        <button onClick={add}>Add</button>
      </div>
      <div>
        {items.map((it, i) => (
          <div className="item" key={i}>
            <h4 style={{margin:0}}>{it}</h4>
            <button onClick={() => setItems(s => s.filter((_,idx) => idx !== i))}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
