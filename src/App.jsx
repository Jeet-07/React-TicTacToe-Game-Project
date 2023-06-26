import './App.css'
import { useState } from "react";
import { Board } from './components/Board'
import {findWinner} from "./components/Winner";
import StatusMessage from './components/StatusMessage';
import History from './components/History';

const NEW_GAME = { squares:Array(9).fill(null),isXNext:false};

function App() {
  const [ history , setHistory ] = useState([NEW_GAME]);
  let [ currMove , setCurrMove ] = useState(0);
  const currGameState = history[currMove];
  const {winner,winningBoxes} = findWinner(currGameState.squares);

  const handleSquareClick = (position)=>{
    if(winner || currGameState.squares[position])return;
    setHistory((currHistory)=>{
      const isTraversing = currMove + 1  !== currHistory.length;

      const newGameState = currGameState.squares.map((val,idx)=>{
        if(idx===position)
         return currGameState.isXNext ? "X":"O";

        return val;
      });
      const newHistory = isTraversing ? currHistory.slice(0,currMove+1) : currHistory;
      return newHistory.concat({squares:newGameState,isXNext: !currGameState.isXNext}); 
    });
    setCurrMove((currMove)=>currMove+1);
  } 

  const moveTo = move => {
    setCurrMove(move);
  }

  function reset(){
    setCurrMove(0);
    setHistory([NEW_GAME]);
  }

  return <div className="app">
    <div className="text-center message">
      <span className='tic'>Tic </span>
      <span className='tac'>Tac </span>
      <span className='toe'>Toe</span>
      </div>
    <div className="row">
      <div className="col">
        < StatusMessage winner={winner} currState={currGameState}/>
        <div>
          <Board squares={currGameState.squares} handleSquareClick={handleSquareClick} winningBoxes={winningBoxes}/>
        </div>
        <div className="text-center mt-3"><button className="button-reset" onClick={reset}>Reset</button></div>
        <div className="text-center creator mt-5">React App - Created By Manjeet</div>
      </div>
      <div className="col">
        <History history={history} goToMove={moveTo} currMove={currMove}/>
      </div>
    </div>
    
  </div>;
}
export default App
