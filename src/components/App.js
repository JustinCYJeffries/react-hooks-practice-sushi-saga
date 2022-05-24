import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

const[sushis, setSushis]= useState([])
const[eatenSushi, setEatenSushi]= useState([])
const[position, setPosition] = useState(0)

useEffect(async()=>{
  const res = await fetch(API)
  const sushiData = await res.json()
  setSushis(sushiData)

}, [] )

const handleEatSushi = (id) => {
  if(!eatenSushi.includes(id)){
    const newEaten = [...eatenSushi, id]
    setEatenSushi(newEaten)
  }
}


  return (
    <div className="app">
      <SushiContainer eatSushi={handleEatSushi} sushis={sushis.slice(position, position + 4)} />
      <Table  plates={eatenSushi}/>
    </div>
  );
}

export default App;
