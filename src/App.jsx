import './App.css'
import { Board } from './components/Board'
import {findWinner} from "./components/Winner";
import StatusMessage from './components/StatusMessage';
import { useState } from "react";
function App() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  let [isXNext,setNextTurn] = useState(true);
  const winner = findWinner(squares);
  const nextPlayer = isXNext ? 'X':'O';

  const handleSquareClick = (position)=>{
    if(winner || squares[position])return;
    setSquare((squares)=>{
        return squares.map((val,idx)=>{
            if(position === idx)
                return isXNext ? "X":"O";
            
            return val;
        });
    });
    setNextTurn((currentTurn)=> !currentTurn );
  } 

  return <div className="app">
    <StatusMessage winner={winner} nextPlayer={nextPlayer} squares={squares}/>
    <div>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  </div>;
}
export default App
