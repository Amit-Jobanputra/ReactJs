import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Runs, setRuns] = useState(0);
  const [Wickets, setWickets] = useState(0);
  const [Balls, setBalls] = useState(0);
  const [Overs, setOvers] = useState(0);
  const ball =() => {
    if(Balls <5){
    
      setBalls(Balls+1);
    }
    else
    {
      setBalls(0);
      setOvers(Overs+1);
    }
  }
  const button = {
    buttons: [
      { label: "0", onClick: () => ball() },
      { label: "1", onClick: () => { ball(); setRuns(Runs + 1); } },
      { label: "2", onClick: () => { ball(); setRuns(Runs + 2); } },
      { label: "3", onClick: () => { ball(); setRuns(Runs + 3); } },
      { label: "4", onClick: () => { ball(); setRuns(Runs + 4); } },
      { label: "5", onClick: () => { ball(); setRuns(Runs + 5); } },
      { label: "6", onClick: () => { ball(); setRuns(Runs + 6); } },
      { label: "7", onClick: () => { ball(); setRuns(Runs + 7); } },
      { label: "WD", onClick: () => {setRuns(Runs + 1); } },
      { label: "WD+1", onClick: () => {setRuns(Runs + 2); } },
      { label: "WD+2", onClick: () => {setRuns(Runs + 3); } },
      { label: "WD+3", onClick: () => {setRuns(Runs + 4); } },
      { label: "WD+4", onClick: () => {setRuns(Runs + 5); } },
      { label: "W", onClick: () => {ball(); setWickets(Wickets+1) } },
      { label: "W", onClick: () => {ball(); setWickets(Wickets+1); setRuns(Runs+1) } },
    ]
  };
  
  return (
    <>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h1 style={{marginTop:"-280px"}}>{Runs}/{Wickets}</h1>
      <h1 style={{marginTop:"-280px",marginLeft:"50px"}}>{Overs}.{Balls}</h1>
  
     </div>
     <div>
      {button.buttons.map((btn, index) => (
        <button
          key={index}
          style={{ marginTop: "50px", marginLeft: "50px", width: "100px" }}
          onClick={btn.onClick} // Correctly using the function
        >
          {btn.label}
        </button>
      ))}
    </div>
     <div>
      <button style={{marginTop:"50px",marginLeft:"50px", width:"100px"}}onClick={()=>setRuns(Runs+1)}>WD</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}}onClick={()=>{ball();setWickets(Wickets+1)}}>W</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}} onClick={()=>{ball();setRuns(Runs+1)}}>LB</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}} onClick={()=>{ball();setRuns(Runs+2)}}>LB+2</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}} onClick={()=>{ball();setRuns(Runs+3)}}>LB+3</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}} onClick={()=>{ball();setRuns(Runs+4)}}>LB+4</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}}onClick={()=>{ball(),setRuns(Runs+1)}}>B</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}}onClick={()=>{ball(),setRuns(Runs+2)}}>B+2</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}}onClick={()=>{ball(),setRuns(Runs+3)}}>B+3</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}}onClick={()=>{ball(),setRuns(Runs+4)}}>B+4</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}}onClick={()=>{setWickets(Wickets+1),setRuns(Runs+1)}}>WD+W</button>
      <button style={{marginTop:"50px",marginLeft:"50px",width:"100px"}}onClick={()=>{setWickets(Wickets+1),setRuns(Runs+1)}}>NB</button>
     </div>

    </>
  )
}

export default App
