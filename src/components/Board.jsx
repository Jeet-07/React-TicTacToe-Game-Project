import { Square } from "./Square";

export function Board({squares,handleSquareClick}){
    function renderSquare(position){
        return <Square square={squares[position]} onclick={()=>{
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