import React from 'react'
import '../styles/App.css';
const App = () => {
  
  return (
    <div id="main">
       <h1 id="marco-polo">{flag ? "Marco" : "Polo"}</h1>
        <button id="marco-polo-toggler" onClick={setFlag(!flag)}>{flag ? "Polo" : "Marco"}</button>
        onClick={()=>{setFlag(!flag)}}
    </div>
  )
}


export default App;
