import './App.css'
import { Board } from './components/Board'
import {findWinner} from "./components/Winner";
import { useState } from "react";
function App() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  let [isXNext,setNextTurn] = useState(true);
  const winner = findWinner(squares);
  const nextPlayer = isXNext ? 'X':'O';
  const statusMessage = winner ? `Winner is ${winner}`:`Next player ${nextPlayer} turn`;

  const handleSquareClick = (position)=>{
    if(winner || squares[position])return;
    setSquare((squares)=>{
        return squares.map((val,idx)=>{
            if(position === idx)
                return isXNext ? "X":"O";
            
            return val;
        });
    });
    console.log(winner);
    setNextTurn((currentTurn)=> !currentTurn );
  } 

  function message(){
    return <div className="message">{statusMessage}</div>;
  }

  return <>
    {message()}
    <div>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  </>;
}
export default App
