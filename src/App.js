import React, { useState } from 'react'
const App = () => {

  let [input,setinputu]=useState("")
  const updateValue=(event)=>{
  const  data = event.target.value;
  setinputu(data);
  }
  return (
    <div>
  <input className='inputFild' type="text" onChange={updateValue}/>
     <img className='img1' src={`https://source.unsplash.com/random/?${input}`} alt="UpLoDiNg ImAgE" />
  </div>
  )
}
export default App
