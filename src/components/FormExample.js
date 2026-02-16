import React, {useState} from 'react';

export default function FormExample(){
  const [name,setName]=useState('')
  const [submitted,setSubmitted]=useState(null)
  const submit = (e)=>{e.preventDefault(); setSubmitted(name)}
  return (
    <div>
      <h3>Form Example</h3>
      <form onSubmit={submit} style={{display:'flex',gap:8,alignItems:'center'}}>
        <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
        <button type="submit">Say hello</button>
      </form>
      {submitted && <p style={{marginTop:8}}>Hello, <strong>{submitted}</strong> 👋</p>}
    </div>
  )
}
