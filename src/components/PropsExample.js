import React from 'react';

function Badge({label, color='#0366d6'}){
  return <span style={{background:color,color:'#fff',padding:'4px 8px',borderRadius:6,fontSize:12}}>{label}</span>
}

export default function PropsExample(){
  return (
    <div>
      <h3>Props Example</h3>
      <p>Components receive <strong>props</strong> to customize behavior.</p>
      <div style={{display:'flex',gap:8}}>
        <Badge label="Beginner" />
        <Badge label="Intermediate" color="#6f42c1" />
      </div>
    </div>
  )
}
