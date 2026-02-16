import React, { useState } from 'react';

export default function ListExample() {
  const [items, setItems] = useState(['Learn JSX', 'Components', 'State & Props']);
  const [text, setText] = useState('');
  const add = () => {
    if (!text.trim()) return;
    setItems((s) => [text.trim(), ...s]);
    setText('');
  };
  const removeAt = (i) => setItems((s) => s.filter((_, idx) => idx !== i));
  return (
    <div>
      <div style={{display:'flex',gap:8,marginBottom:8}}>
        <input placeholder="Add topic" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={add}>Add</button>
      </div>
      <div>
        {items.map((it, idx) => (
          <div className="item" key={idx}>
            <h4>{it}</h4>
            <button onClick={() => removeAt(idx)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
