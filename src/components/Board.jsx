import { Square } from "./Square";

export function Board({squares,handleSquareClick,winningBoxes}){
    function renderSquare(position){
        const isWinning = winningBoxes.includes(position);
        return <Square square={squares[position]} isWinning={isWinning} onclick={()=>{
            handleSquareClick(position);
        }}/>;
    }
    
    return <>  
        <div className="game-board mt-2">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </>;
}